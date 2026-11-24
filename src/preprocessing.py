"""
Phase 2: Data Preprocessing Module
Intelligent Market Basket Analysis & Product Association Discovery

This module handles:
1. Efficient memory-optimized loading of Instacart CSV files using downcasted datatypes.
2. Data cleaning and validation (handling structural missing values in days_since_prior_order).
3. Merging relational tables (orders, order_products, products, aisles, departments).
4. Extracting transaction-level product baskets suitable for association rule mining.
"""

import os
import sys

# Ensure project root is in sys.path
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

import time
import pandas as pd
import numpy as np
from typing import Dict, Tuple, List, Optional


def get_optimized_dtypes() -> Tuple[dict, dict, dict, dict, dict]:
    """
    Define specific, tight memory dtypes for all Instacart tables.
    Reduces RAM footprint by ~70% compared to standard int64/float64.
    """
    orders_dtypes = {
        "order_id": np.uint32,
        "user_id": np.uint32,
        "eval_set": "category",
        "order_number": np.uint8,
        "order_dow": np.uint8,
        "order_hour_of_day": np.uint8,
        "days_since_prior_order": np.float32  # Contains NaN for order_number == 1
    }

    order_products_dtypes = {
        "order_id": np.uint32,
        "product_id": np.uint32,
        "add_to_cart_order": np.uint8,
        "reordered": np.uint8
    }

    products_dtypes = {
        "product_id": np.uint32,
        "product_name": "string",
        "aisle_id": np.uint16,
        "department_id": np.uint8
    }

    aisles_dtypes = {
        "aisle_id": np.uint16,
        "aisle": "category"
    }

    departments_dtypes = {
        "department_id": np.uint8,
        "department": "category"
    }

    return orders_dtypes, order_products_dtypes, products_dtypes, aisles_dtypes, departments_dtypes


def load_dataset(data_dir: str = "dataset/archive", include_prior: bool = False) -> Dict[str, pd.DataFrame]:
    """
    Load Instacart CSV files with optimized memory usage.
    
    Parameters:
    - data_dir: Directory containing the CSV files.
    - include_prior: Whether to also load the 32.4M prior orders table. Default False to optimize memory.
    
    Returns:
    - Dictionary of loaded DataFrames.
    """
    print("=" * 70)
    print("PHASE 2: DATA PREPROCESSING - LOADING & VALIDATION")
    print("=" * 70)
    t0 = time.time()

    orders_dt, op_dt, prod_dt, aisle_dt, dept_dt = get_optimized_dtypes()

    print("[1] Loading lookup tables (aisles, departments, products)...")
    aisles = pd.read_csv(os.path.join(data_dir, "aisles.csv"), dtype=aisle_dt)
    departments = pd.read_csv(os.path.join(data_dir, "departments.csv"), dtype=dept_dt)
    products = pd.read_csv(os.path.join(data_dir, "products.csv"), dtype=prod_dt)

    print("[2] Loading orders table...")
    orders = pd.read_csv(os.path.join(data_dir, "orders.csv"), dtype=orders_dt)

    print("[3] Loading train order products (1.38M items across 131,209 orders)...")
    order_products_train = pd.read_csv(os.path.join(data_dir, "order_products__train.csv"), dtype=op_dt)

    data = {
        "aisles": aisles,
        "departments": departments,
        "products": products,
        "orders": orders,
        "order_products_train": order_products_train
    }

    if include_prior:
        print("[Note] Loading prior order products (32.4M items)...")
        data["order_products_prior"] = pd.read_csv(
            os.path.join(data_dir, "order_products__prior.csv"),
            dtype=op_dt
        )

    t1 = time.time()
    total_mem = sum(df.memory_usage(deep=True).sum() for df in data.values()) / (1024 * 1024)
    print(f"[OK] Loaded tables in {t1 - t0:.2f}s with total memory footprint: {total_mem:.2f} MB")
    return data


def clean_and_prepare_orders(orders_df: pd.DataFrame) -> pd.DataFrame:
    """
    Clean and validate the orders dataframe.
    - Preserves structural nulls for first orders while adding an explicit is_first_order boolean feature.
    - Fills days_since_prior_order with 0 for computation while preserving indicator.
    """
    df = orders_df.copy()
    # Add indicator for first orders
    df["is_first_order"] = (df["order_number"] == 1).astype(np.uint8)
    # Impute missing days_since_prior_order with 0 for numerical stability
    df["days_since_prior_order_clean"] = df["days_since_prior_order"].fillna(0).astype(np.float32)
    return df


def merge_order_details(
    order_products_df: pd.DataFrame,
    orders_df: pd.DataFrame,
    products_df: pd.DataFrame,
    aisles_df: pd.DataFrame,
    departments_df: pd.DataFrame
) -> pd.DataFrame:
    """
    Merge transaction items with full product hierarchies and order metadata.
    
    Returns:
    - Merged DataFrame with columns:
      ['order_id', 'product_id', 'add_to_cart_order', 'reordered',
       'product_name', 'aisle_id', 'department_id', 'aisle', 'department',
       'user_id', 'order_number', 'order_dow', 'order_hour_of_day',
       'days_since_prior_order']
    """
    print("\n[4] Merging relational tables...")
    t0 = time.time()

    # 1. Enrich products with aisle and department names
    products_full = products_df.merge(aisles_df, on="aisle_id", how="left")
    products_full = products_full.merge(departments_df, on="department_id", how="left")

    # 2. Merge order products with enriched product info
    merged = order_products_df.merge(products_full, on="product_id", how="left")

    # 3. Merge with order level attributes
    order_cols = [
        "order_id", "user_id", "order_number", "order_dow",
        "order_hour_of_day", "days_since_prior_order"
    ]
    merged = merged.merge(orders_df[order_cols], on="order_id", how="left")

    t1 = time.time()
    mem_mb = merged.memory_usage(deep=True).sum() / (1024 * 1024)
    print(f"[OK] Merged {len(merged):,} transaction items in {t1 - t0:.2f}s (RAM: {mem_mb:.2f} MB)")
    return merged


def create_transaction_baskets(
    merged_df: pd.DataFrame,
    use_product_name: bool = True
) -> pd.Series:
    """
    Group items into transaction-level product baskets.
    
    Parameters:
    - merged_df: Preprocessed merged DataFrame.
    - use_product_name: If True, uses 'product_name'; if False, uses 'product_id'.
    
    Returns:
    - pd.Series indexed by order_id containing lists of items in each basket.
    """
    print("\n[5] Generating transaction-level product baskets...")
    t0 = time.time()
    item_col = "product_name" if use_product_name else "product_id"
    baskets = merged_df.groupby("order_id")[item_col].apply(list)
    t1 = time.time()
    print(f"[OK] Created {len(baskets):,} baskets in {t1 - t0:.2f}s")
    return baskets


def run_preprocessing_pipeline(data_dir: str = "dataset/archive") -> Tuple[pd.DataFrame, pd.Series, dict]:
    """
    Execute complete end-to-end Phase 2 preprocessing.
    """
    data = load_dataset(data_dir=data_dir, include_prior=False)
    orders_clean = clean_and_prepare_orders(data["orders"])
    
    merged_df = merge_order_details(
        order_products_df=data["order_products_train"],
        orders_df=orders_clean,
        products_df=data["products"],
        aisles_df=data["aisles"],
        departments_df=data["departments"]
    )

    baskets = create_transaction_baskets(merged_df, use_product_name=True)

    summary_stats = {
        "total_transactions": len(baskets),
        "total_line_items": len(merged_df),
        "unique_products_purchased": merged_df["product_id"].nunique(),
        "unique_departments": merged_df["department_id"].nunique(),
        "unique_aisles": merged_df["aisle_id"].nunique(),
        "overall_reorder_rate": float(merged_df["reordered"].mean()),
        "average_basket_size": float(merged_df.groupby("order_id")["product_id"].count().mean())
    }

    print("\n--- Preprocessing Pipeline Summary ---")
    for k, v in summary_stats.items():
        if isinstance(v, float):
            print(f"  {k}: {v:.4f}")
        else:
            print(f"  {k}: {v:,}")

    return merged_df, baskets, summary_stats


if __name__ == "__main__":
    merged_data, transaction_baskets, stats = run_preprocessing_pipeline()
