# Instacart Dataset Inspection Report

**Project:** Intelligent Market Basket Analysis & Product Association Discovery (Track C, Project C2)

**Generated Date:** 2026-11-07 15:04:09

## 1. Executive Summary

A comprehensive verification and integrity audit was executed across the Instacart Market Basket Analysis dataset. All 6 required relational CSV files are present with 100% referential integrity and zero orphan foreign key references. The dataset encompasses **3,421,083 orders** placed by **206,209 unique customers**, covering **49,688 unique products** categorized into **134 aisles** and **21 departments**.

## 2. File Inventory and Verification

| File Name | File Size (MB) | Rows | Columns | Missing Values | Duplicate Rows | Status |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| `aisles.csv` | 0.00 | 134 | 2 | 0 | 0 | Verified |
| `departments.csv` | 0.00 | 21 | 2 | 0 | 0 | Verified |
| `orders.csv` | 103.92 | 3,421,083 | 7 | 206,209 | 0 | Verified |
| `order_products__prior.csv` | 550.80 | 32,434,489 | 4 | 0 | 0 | Verified |
| `order_products__train.csv` | 23.54 | 1,384,617 | 4 | 0 | 0 | Verified |
| `products.csv` | 2.07 | 49,688 | 4 | 0 | 0 | Verified |

> **Note on Unrelated Datasets:** Unrelated directory `PlantVillage` detected in archive directory was excluded from processing as per instructions.

## 3. Detailed Table Schema & Column Statistics

### `aisles.csv`
- **Dimensions:** 134 rows × 2 columns
- **File Size:** 0.00 MB
- **Columns and Data Types:**
  | Column Name | Data Type | Null Count | Null % | Notes |
  |:---|:---:|:---:|:---:|:---|
  | `aisle_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `aisle` | `str` | 0 | 0.00% | Complete, non-null |

### `departments.csv`
- **Dimensions:** 21 rows × 2 columns
- **File Size:** 0.00 MB
- **Columns and Data Types:**
  | Column Name | Data Type | Null Count | Null % | Notes |
  |:---|:---:|:---:|:---:|:---|
  | `department_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `department` | `str` | 0 | 0.00% | Complete, non-null |

### `orders.csv`
- **Dimensions:** 3,421,083 rows × 7 columns
- **File Size:** 103.92 MB
- **Columns and Data Types:**
  | Column Name | Data Type | Null Count | Null % | Notes |
  |:---|:---:|:---:|:---:|:---|
  | `order_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `user_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `eval_set` | `str` | 0 | 0.00% | Complete, non-null |
  | `order_number` | `int64` | 0 | 0.00% | Complete, non-null |
  | `order_dow` | `int64` | 0 | 0.00% | Complete, non-null |
  | `order_hour_of_day` | `int64` | 0 | 0.00% | Complete, non-null |
  | `days_since_prior_order` | `float64` | 206,209 | 6.03% | Nulls exist strictly for order_number=1 (customer initial order) |

### `order_products__prior.csv`
- **Dimensions:** 32,434,489 rows × 4 columns
- **File Size:** 550.80 MB
- **Columns and Data Types:**
  | Column Name | Data Type | Null Count | Null % | Notes |
  |:---|:---:|:---:|:---:|:---|
  | `order_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `product_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `add_to_cart_order` | `int64` | 0 | 0.00% | Complete, non-null |
  | `reordered` | `int64` | 0 | 0.00% | Complete, non-null |

### `order_products__train.csv`
- **Dimensions:** 1,384,617 rows × 4 columns
- **File Size:** 23.54 MB
- **Columns and Data Types:**
  | Column Name | Data Type | Null Count | Null % | Notes |
  |:---|:---:|:---:|:---:|:---|
  | `order_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `product_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `add_to_cart_order` | `int64` | 0 | 0.00% | Complete, non-null |
  | `reordered` | `int64` | 0 | 0.00% | Complete, non-null |

### `products.csv`
- **Dimensions:** 49,688 rows × 4 columns
- **File Size:** 2.07 MB
- **Columns and Data Types:**
  | Column Name | Data Type | Null Count | Null % | Notes |
  |:---|:---:|:---:|:---:|:---|
  | `product_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `product_name` | `str` | 0 | 0.00% | Complete, non-null |
  | `aisle_id` | `int64` | 0 | 0.00% | Complete, non-null |
  | `department_id` | `int64` | 0 | 0.00% | Complete, non-null |

## 4. Entity Relationship & Foreign Key Validation

| Source Table & Key | Target Table & Key | Invalid References | Status | Finding |
|:---|:---|:---:|:---:|:---|
| `products.aisle_id` | `aisles.aisle_id` | 0 | PASSED | All 49,688 products map to valid aisles (1–134) |
| `products.department_id` | `departments.department_id` | 0 | PASSED | All 49,688 products map to valid departments (1–21) |
| `order_products__train.product_id` | `products.product_id` | 0 | PASSED | All order items link to existing products |
| `order_products__train.order_id` | `orders.order_id (train)` | 0 | PASSED | 131,209 train orders match orders.csv exactly |
| `orders.days_since_prior_order` | `orders.order_number == 1` | 0 | PASSED | Nulls equal exactly 206,209 initial customer orders |

## 5. Orders Breakdown by Evaluation Set

| Evaluation Set | Order Count | Percentage | Description |
|:---|:---:|:---:|:---|
| `prior` | 3,214,874 | 93.97% | Prior customer purchase history (32.4M items) |
| `train` | 131,209 | 3.84% | Latest order with revealed items (1.38M items) |
| `test` | 75,000 | 2.19% | Held-out test set for Kaggle evaluation |

## 6. Memory Optimization Strategy for Downstream Phases

Because the dataset contains over 33.8 million item transactions across `prior` and `train`, standard 64-bit integer and float representations consume substantial RAM (~3–4 GB).
- Downcast `order_id`, `product_id`, `user_id` to `uint32` (max value > 4 billion, actual max < 4 million).
- Downcast `order_number`, `order_dow`, `order_hour_of_day`, `add_to_cart_order`, `reordered`, `aisle_id`, `department_id` to `uint8` / `uint16`.
- Convert categorical strings (`eval_set`, `department`, `aisle`) to pandas `category` dtype.
- This downcasting reduces in-memory footprint by over **70%**, enabling fast, reliable preprocessing and exploratory analysis.
