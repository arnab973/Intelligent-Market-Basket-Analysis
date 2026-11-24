"""
Unit Test Suite: Data Integrity & Schema Validation
Intelligent Market Basket Analysis (Track C, Project C2)
"""

import os
import sys
import unittest
import pandas as pd
import numpy as np

# Ensure project root is accessible
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from src.market_basket_analysis import verify_integer_bounds


class TestDataIntegrity(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data_dir = os.path.join(project_root, "dataset", "archive")

    def test_core_files_exist(self):
        """Verify all 6 core Instacart relational tables exist."""
        expected = [
            "aisles.csv", "departments.csv", "products.csv",
            "orders.csv", "order_products__train.csv", "order_products__prior.csv"
        ]
        for f in expected:
            path = os.path.join(self.data_dir, f)
            self.assertTrue(os.path.exists(path), f"Missing required file: {f}")

    def test_products_foreign_keys(self):
        """Verify 100% referential integrity in products.csv."""
        products = pd.read_csv(os.path.join(self.data_dir, "products.csv"))
        aisles = pd.read_csv(os.path.join(self.data_dir, "aisles.csv"))
        departments = pd.read_csv(os.path.join(self.data_dir, "departments.csv"))

        valid_aisles = set(aisles["aisle_id"])
        valid_depts = set(departments["department_id"])

        invalid_aisles = (~products["aisle_id"].isin(valid_aisles)).sum()
        invalid_depts = (~products["department_id"].isin(valid_depts)).sum()

        self.assertEqual(invalid_aisles, 0, "Orphan aisle_id foreign keys found in products.csv")
        self.assertEqual(invalid_depts, 0, "Orphan department_id foreign keys found in products.csv")

    def test_orders_structural_nulls(self):
        """Verify days_since_prior_order nulls strictly match first orders."""
        orders = pd.read_csv(os.path.join(self.data_dir, "orders.csv"))
        unique_users = orders["user_id"].nunique()
        first_order_nulls = orders[orders["order_number"] == 1]["days_since_prior_order"].isnull().sum()
        non_first_nulls = orders[orders["order_number"] > 1]["days_since_prior_order"].isnull().sum()

        self.assertEqual(first_order_nulls, unique_users, "First order nulls must match unique customer count")
        self.assertEqual(non_first_nulls, 0, "Unexpected nulls in non-first orders")

    def test_integer_bounds_safety(self):
        """Verify maximum ID values do not exceed integer type limits."""
        bounds = verify_integer_bounds(data_dir=self.data_dir)

        # uint32 max is 4,294,967,295
        self.assertLess(bounds["max_order_id"], 4294967295)
        self.assertLess(bounds["max_user_id"], 4294967295)
        self.assertLess(bounds["max_product_id"], 4294967295)

        # uint8 max is 255
        self.assertLessEqual(bounds["max_dept_id"], 255)
        self.assertLessEqual(bounds["max_cart_order"], 255)
        self.assertLessEqual(bounds["max_reordered"], 1)


if __name__ == "__main__":
    unittest.main()

