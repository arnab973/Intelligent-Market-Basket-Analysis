"""
Phase 3: Exploratory Data Analysis (EDA) Module
Intelligent Market Basket Analysis & Product Association Discovery

This module analyzes:
1. Total orders, customers, and product portfolio metrics.
2. Most frequently purchased products (Top 20) and organic vs conventional trends.
3. Popular product combinations (frequent co-occurrences / pairs in baskets).
4. Reorder patterns (by department, aisle, cart position, and inter-order interval).
5. Temporal order distribution (day of week, hour of day, heatmap).
6. Basket size distribution.
7. Saves high-resolution publication-quality plots to outputs/plots/.
"""

import os
import sys

# Ensure project root is in sys.path for direct script execution
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

import time
from collections import Counter
from itertools import combinations
import matplotlib
matplotlib.use("Agg")  # Non-interactive backend for headless environments
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# Set consistent aesthetic style
sns.set_theme(style="whitegrid", font="sans-serif")
plt.rcParams.update({
    "font.size": 11,
    "axes.labelsize": 12,
    "axes.titlesize": 14,
    "xtick.labelsize": 10,
    "ytick.labelsize": 10,
    "figure.titlesize": 16
})


def analyze_portfolio_totals(orders_df: pd.DataFrame, products_df: pd.DataFrame, merged_df: pd.DataFrame) -> dict:
    """
    Compute system-wide order, customer, and product portfolio metrics.
    """
    metrics = {
        "total_system_orders": len(orders_df),
        "total_unique_customers": orders_df["user_id"].nunique(),
        "total_catalog_products": len(products_df),
        "total_departments": products_df["department_id"].nunique(),
        "total_aisles": products_df["aisle_id"].nunique(),
        "train_transactions": merged_df["order_id"].nunique(),
        "train_line_items": len(merged_df),
        "unique_products_purchased": merged_df["product_id"].nunique(),
        "overall_reorder_rate": float(merged_df["reordered"].mean()),
    }
    return metrics


def get_top_products(merged_df: pd.DataFrame, top_n: int = 20) -> pd.DataFrame:
    """
    Extract top N most frequently purchased products with counts and reorder rates.
    """
    prod_stats = merged_df.groupby("product_name").agg(
        purchase_count=("order_id", "count"),
        reorder_count=("reordered", "sum"),
        department=("department", "first"),
        aisle=("aisle", "first")
    ).reset_index()

    prod_stats["reorder_rate"] = prod_stats["reorder_count"] / prod_stats["purchase_count"]
    total_orders = merged_df["order_id"].nunique()
    prod_stats["order_share_pct"] = (prod_stats["purchase_count"] / total_orders) * 100
    prod_stats = prod_stats.sort_values(by="purchase_count", ascending=False).head(top_n)
    return prod_stats


def get_top_product_pairs(merged_df: pd.DataFrame, top_products_pool: int = 100, top_pairs_n: int = 15) -> pd.DataFrame:
    """
    Calculate most frequent 2-item combinations in transaction baskets.
    """
    top_prods_set = set(merged_df["product_name"].value_counts().head(top_products_pool).index)
    filtered_baskets = (
        merged_df[merged_df["product_name"].isin(top_prods_set)]
        .groupby("order_id")["product_name"]
        .apply(list)
    )

    pair_counter = Counter()
    for basket in filtered_baskets:
        if len(basket) > 1:
            sorted_items = sorted(set(basket))
            for item1, item2 in combinations(sorted_items, 2):
                pair_counter[(item1, item2)] += 1

    total_orders = merged_df["order_id"].nunique()
    records = []
    for (item1, item2), count in pair_counter.most_common(top_pairs_n):
        records.append({
            "pair": f"{item1} +\n{item2}",
            "item1": item1,
            "item2": item2,
            "frequency": count,
            "support_pct": (count / total_orders) * 100
        })

    return pd.DataFrame(records)


def plot_top_products(top_prods: pd.DataFrame, save_path: str):
    """Plot Top 20 Frequently Purchased Products."""
    plt.figure(figsize=(12, 8))
    # Identify organic products for specialized coloring
    colors = ["#2ecc71" if "organic" in name.lower() else "#3498db" for name in top_prods["product_name"]]
    
    bars = plt.barh(top_prods["product_name"][::-1], top_prods["purchase_count"][::-1], color=colors[::-1], edgecolor="none", height=0.7)
    plt.xlabel("Number of Purchases")
    plt.title("Top 20 Most Frequently Purchased Products\n(Green = Organic | Blue = Conventional)", pad=15, weight="bold")
    
    # Add count labels on bars
    for bar in bars:
        width = bar.get_width()
        plt.text(width + 150, bar.get_y() + bar.get_height() / 2, f"{int(width):,}",
                 va="center", ha="left", fontsize=9, color="#2c3e50")

    plt.xlim(0, top_prods["purchase_count"].max() * 1.12)
    plt.tight_layout()
    plt.savefig(save_path, dpi=300)
    plt.close()
    print(f"  [Saved] {save_path}")


def plot_top_departments(merged_df: pd.DataFrame, save_path: str):
    """Plot Purchase Volume Across All 21 Departments."""
    dept_counts = (
        merged_df["department"]
        .value_counts()
        .reset_index()
    )
    dept_counts.columns = ["department", "item_count"]

    plt.figure(figsize=(12, 8))
    palette = sns.color_palette("mako", len(dept_counts))
    bars = sns.barplot(data=dept_counts, y="department", x="item_count", hue="department", palette=palette, legend=False)
    plt.xlabel("Total Items Ordered")
    plt.ylabel("Department")
    plt.title("Order Volume by Department (Instacart Portfolio)", pad=15, weight="bold")

    for i, count in enumerate(dept_counts["item_count"]):
        pct = (count / len(merged_df)) * 100
        bars.text(count + 3000, i, f"{count:,} ({pct:.1f}%)", va="center", ha="left", fontsize=9)

    plt.xlim(0, dept_counts["item_count"].max() * 1.15)
    plt.tight_layout()
    plt.savefig(save_path, dpi=300)
    plt.close()
    print(f"  [Saved] {save_path}")


def plot_order_day_hour_heatmap(orders_df: pd.DataFrame, save_path: str):
    """Plot Order Distribution Heatmap by Day of Week and Hour of Day."""
    day_hour_matrix = orders_df.groupby(["order_dow", "order_hour_of_day"])["order_id"].count().unstack()
    day_labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    plt.figure(figsize=(14, 6))
    ax = sns.heatmap(
        day_hour_matrix,
        cmap="YlGnBu",
        linewidths=0.5,
        linecolor="white",
        cbar_kws={"label": "Order Volume"}
    )
    ax.set_yticklabels(day_labels, rotation=0)
    plt.xlabel("Hour of Day (0 = 12 AM, 23 = 11 PM)")
    plt.ylabel("Day of Week")
    plt.title("Customer Ordering Patterns: Day of Week vs. Hour of Day (3.42M Orders)", pad=15, weight="bold")
    plt.tight_layout()
    plt.savefig(save_path, dpi=300)
    plt.close()
    print(f"  [Saved] {save_path}")


def plot_basket_size_distribution(merged_df: pd.DataFrame, save_path: str):
    """Plot Basket Size (Items per Order) Distribution."""
    basket_sizes = merged_df.groupby("order_id")["product_id"].count()
    mean_size = basket_sizes.mean()
    median_size = basket_sizes.median()

    plt.figure(figsize=(11, 6))
    # Cap at 50 for clean visualization
    sns.histplot(basket_sizes, binrange=(1, 50), discrete=True, color="#3498db", stat="density", alpha=0.7)
    sns.kdeplot(basket_sizes[basket_sizes <= 50], color="#e74c3c", linewidth=2.5, label="Density Curve")

    plt.axvline(mean_size, color="#e67e22", linestyle="--", linewidth=2, label=f"Mean: {mean_size:.1f} items")
    plt.axvline(median_size, color="#27ae60", linestyle="-.", linewidth=2, label=f"Median: {median_size:.0f} items")

    plt.xlabel("Basket Size (Number of Items per Order)")
    plt.ylabel("Density")
    plt.title("Distribution of Customer Basket Sizes", pad=15, weight="bold")
    plt.xlim(1, 45)
    plt.legend(frameon=True, facecolor="white", loc="upper right")
    plt.tight_layout()
    plt.savefig(save_path, dpi=300)
    plt.close()
    print(f"  [Saved] {save_path}")


def plot_reorder_rate_by_department(merged_df: pd.DataFrame, save_path: str):
    """Plot Reorder Rate Across Departments."""
    dept_reorder = (
        merged_df.groupby("department")["reordered"]
        .agg(reorder_rate="mean", total_items="count")
        .reset_index()
        .sort_values(by="reorder_rate", ascending=False)
    )

    plt.figure(figsize=(12, 8))
    palette = sns.color_palette("flare", len(dept_reorder))
    bars = sns.barplot(data=dept_reorder, y="department", x="reorder_rate", hue="department", palette=palette, legend=False)
    overall_mean = merged_df["reordered"].mean()
    plt.axvline(overall_mean, color="#2c3e50", linestyle="--", linewidth=2, label=f"Overall Avg: {overall_mean:.1%}")

    for i, rate in enumerate(dept_reorder["reorder_rate"]):
        bars.text(rate + 0.008, i, f"{rate:.1%}", va="center", ha="left", fontsize=9, color="#2c3e50")

    plt.xlabel("Reorder Proportion (Reordered Items / Total Items)")
    plt.ylabel("Department")
    plt.title("Customer Habit Strength: Reorder Rate by Department", pad=15, weight="bold")
    plt.xlim(0, 0.8)
    plt.gca().xaxis.set_major_formatter(matplotlib.ticker.PercentFormatter(xmax=1.0))
    plt.legend(loc="lower right")
    plt.tight_layout()
    plt.savefig(save_path, dpi=300)
    plt.close()
    print(f"  [Saved] {save_path}")


def plot_days_since_prior_order_distribution(orders_df: pd.DataFrame, save_path: str):
    """Plot Customer Reorder Frequency (Days Since Prior Order)."""
    valid_days = orders_df["days_since_prior_order"].dropna()

    plt.figure(figsize=(12, 6))
    counts = valid_days.value_counts().sort_index()
    bars = plt.bar(counts.index, counts.values, color="#2980b9", edgecolor="none", width=0.8, alpha=0.85)

    # Highlight weekly and monthly spikes (7, 14, 21, 30)
    spikes = [7, 14, 21, 30]
    for d in spikes:
        if d in counts.index:
            plt.bar(d, counts[d], color="#e74c3c", width=0.8)
            plt.text(d, counts[d] + 4000, f"Day {d}", ha="center", va="bottom", fontsize=9, fontweight="bold", color="#c0392b")

    plt.xlabel("Days Since Prior Order")
    plt.ylabel("Number of Orders")
    plt.title("Customer Reorder Cadence: Distribution of Days Since Prior Order\n(Red Spikes = 7, 14, 21, and 30 Day Reorder Cycles)", pad=15, weight="bold")
    plt.xticks(range(0, 31, 2))
    plt.tight_layout()
    plt.savefig(save_path, dpi=300)
    plt.close()
    print(f"  [Saved] {save_path}")


def plot_top_product_pairs(pairs_df: pd.DataFrame, save_path: str):
    """Plot Most Popular Product Pairs (Co-occurrences)."""
    plt.figure(figsize=(12, 8))
    palette = sns.color_palette("crest", len(pairs_df))
    bars = sns.barplot(data=pairs_df, y="pair", x="frequency", hue="pair", palette=palette, legend=False)

    for i, count in enumerate(pairs_df["frequency"]):
        pct = pairs_df.loc[i, "support_pct"]
        bars.text(count + 40, i, f"{count:,} ({pct:.2f}%)", va="center", ha="left", fontsize=9)

    plt.xlabel("Co-occurrence Count (Orders Containing Both Items)")
    plt.ylabel("Product Combination")
    plt.title("Top 15 Most Frequently Co-Purchased Product Pairs", pad=15, weight="bold")
    plt.xlim(0, pairs_df["frequency"].max() * 1.15)
    plt.tight_layout()
    plt.savefig(save_path, dpi=300)
    plt.close()
    print(f"  [Saved] {save_path}")


def plot_reorder_rate_by_cart_position(merged_df: pd.DataFrame, save_path: str):
    """Plot Reorder Probability as a function of item Add-to-Cart position."""
    cart_stats = (
        merged_df[merged_df["add_to_cart_order"] <= 30]
        .groupby("add_to_cart_order")["reordered"]
        .agg(reorder_rate="mean", count="count")
        .reset_index()
    )

    plt.figure(figsize=(11, 6))
    plt.plot(cart_stats["add_to_cart_order"], cart_stats["reorder_rate"], marker="o", color="#8e44ad", linewidth=2.5, markersize=6)
    plt.xlabel("Add-to-Cart Sequence Position (1st item added, 2nd, ...)")
    plt.ylabel("Reorder Probability")
    plt.title("Customer Habit Priority: Reorder Rate vs. Add-to-Cart Order", pad=15, weight="bold")
    plt.grid(True, linestyle="--", alpha=0.5)
    plt.gca().yaxis.set_major_formatter(matplotlib.ticker.PercentFormatter(xmax=1.0))
    plt.xticks(range(1, 31, 2))
    plt.tight_layout()
    plt.savefig(save_path, dpi=300)
    plt.close()
    print(f"  [Saved] {save_path}")


def run_eda_pipeline(data_dir: str = "dataset/archive", plots_dir: str = "outputs/plots") -> dict:
    """
    Execute full Exploratory Data Analysis and generate all visual plots.
    """
    print("=" * 70)
    print("PHASE 3: EXPLORATORY DATA ANALYSIS (EDA)")
    print("=" * 70)
    t0 = time.time()
    os.makedirs(plots_dir, exist_ok=True)

    # Import and run preprocessing to obtain merged transaction data
    from src.preprocessing import run_preprocessing_pipeline, load_dataset
    merged_df, baskets, summary_stats = run_preprocessing_pipeline(data_dir=data_dir)

    # Load orders and products for system-wide metrics
    raw_data = load_dataset(data_dir=data_dir, include_prior=False)
    orders_df = raw_data["orders"]
    products_df = raw_data["products"]

    # 1. System Metrics
    print("\n[1] Portfolio Summary Metrics:")
    metrics = analyze_portfolio_totals(orders_df, products_df, merged_df)
    for k, v in metrics.items():
        if isinstance(v, float):
            print(f"  {k}: {v:.4f}")
        else:
            print(f"  {k}: {v:,}")

    # 2. Top Products
    print("\n[2] Top 20 Most Purchased Products:")
    top_20 = get_top_products(merged_df, top_n=20)
    for idx, row in top_20.iterrows():
        print(f"  {row['product_name']}: {row['purchase_count']:,} orders ({row['order_share_pct']:.2f}%) | Reorder: {row['reorder_rate']:.1%}")

    # 3. Product Pairs
    print("\n[3] Popular Product Combinations (Pairs):")
    top_pairs = get_top_product_pairs(merged_df, top_products_pool=100, top_pairs_n=15)
    for idx, row in top_pairs.iterrows():
        pair_clean = f"{row['item1']} + {row['item2']}"
        print(f"  {pair_clean}: {row['frequency']:,} orders ({row['support_pct']:.2f}%)")

    # 4. Generate Visualizations
    print("\n[4] Generating High-Resolution Charts in outputs/plots/...")
    
    plot_top_products(top_20, os.path.join(plots_dir, "top_20_products.png"))
    plot_top_departments(merged_df, os.path.join(plots_dir, "top_departments.png"))
    plot_order_day_hour_heatmap(orders_df, os.path.join(plots_dir, "orders_by_day_and_hour_heatmap.png"))
    plot_basket_size_distribution(merged_df, os.path.join(plots_dir, "basket_size_distribution.png"))
    plot_reorder_rate_by_department(merged_df, os.path.join(plots_dir, "reorder_rate_by_department.png"))
    plot_days_since_prior_order_distribution(orders_df, os.path.join(plots_dir, "days_since_prior_order_distribution.png"))
    plot_top_product_pairs(top_pairs, os.path.join(plots_dir, "top_product_pairs.png"))
    plot_reorder_rate_by_cart_position(merged_df, os.path.join(plots_dir, "reorder_rate_by_cart_position.png"))

    t1 = time.time()
    print(f"\n[SUCCESS] Phase 3 EDA completed in {t1 - t0:.2f} seconds. All 8 charts saved successfully.")

    return {
        "metrics": metrics,
        "top_20_products": top_20,
        "top_pairs": top_pairs
    }


if __name__ == "__main__":
    run_eda_pipeline()
