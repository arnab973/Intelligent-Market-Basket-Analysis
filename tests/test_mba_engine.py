"""
Unit Test Suite: Market Basket Analysis & Recommendation Engine
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

from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori, fpgrowth, association_rules


class TestMBAEngine(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Create deterministic synthetic sample to test algorithms
        cls.sample_baskets = [
            ["Apple", "Banana", "Milk"],
            ["Banana", "Diaper", "Beer", "Egg"],
            ["Apple", "Milk"],
            ["Apple", "Banana", "Diaper", "Beer"],
            ["Apple", "Banana", "Milk"],
            ["Apple", "Milk", "Cola"],
            ["Banana", "Milk"],
            ["Apple", "Banana", "Milk", "Yogurt"],
            ["Banana", "Diaper", "Beer"],
            ["Apple", "Banana", "Milk"]
        ]
        cls.te = TransactionEncoder()
        cls.te_ary = cls.te.fit(cls.sample_baskets).transform(cls.sample_baskets)
        cls.df_bool = pd.DataFrame(cls.te_ary, columns=cls.te.columns_)

    def test_apriori_fpgrowth_parity(self):
        """Verify 100% mathematical itemset parity between Apriori and FP-Growth."""
        min_supp = 0.3
        fi_fp = fpgrowth(self.df_bool, min_support=min_supp, use_colnames=True)
        fi_ap = apriori(self.df_bool, min_support=min_supp, use_colnames=True, low_memory=True)

        self.assertEqual(len(fi_fp), len(fi_ap), "Itemset count mismatch between Apriori and FP-Growth")

        # Verify sets match exactly
        sets_fp = set(frozenset(x) for x in fi_fp["itemsets"])
        sets_ap = set(frozenset(x) for x in fi_ap["itemsets"])
        self.assertEqual(sets_fp, sets_ap, "Itemsets must be identical")

    def test_association_rule_metrics(self):
        """Verify metric bounds for generated association rules."""
        fi = fpgrowth(self.df_bool, min_support=0.3, use_colnames=True)
        rules = association_rules(fi, metric="confidence", min_threshold=0.4)

        self.assertGreater(len(rules), 0, "Rules should be generated")

        # Support must be in (0, 1]
        self.assertTrue((rules["support"] > 0).all() and (rules["support"] <= 1).all())

        # Confidence must be in [0.4, 1]
        self.assertTrue((rules["confidence"] >= 0.4).all() and (rules["confidence"] <= 1).all())

        # Lift must be positive
        self.assertTrue((rules["lift"] > 0).all())

    def test_discovered_rules_file(self):
        """Verify production discovered_association_rules.csv contains valid data."""
        rules_path = os.path.join(project_root, "outputs", "reports", "discovered_association_rules.csv")
        self.assertTrue(os.path.exists(rules_path), "discovered_association_rules.csv must exist")

        df = pd.read_csv(rules_path)
        self.assertGreaterEqual(len(df), 300, "Should contain at least 300 discovered rules")

        expected_cols = ["rule_str", "antecedents_str", "consequents_str", "support", "confidence", "lift", "leverage", "conviction"]
        for col in expected_cols:
            self.assertIn(col, df.columns, f"Missing column in rules CSV: {col}")

        # Max lift should be substantial (e.g. > 15)
        self.assertGreater(df["lift"].max(), 15.0, "High-affinity rules should have Lift > 15")

    def test_recommender_simulation_logic(self):
        """Verify recommendation engine with known high-affinity items."""
        rules_path = os.path.join(project_root, "outputs", "reports", "discovered_association_rules.csv")
        rules_df = pd.read_csv(rules_path)

        def mock_recommend(cart_items):
            cart_set = set(cart_items)
            recs = []
            for _, r in rules_df.iterrows():
                ant_set = set([x.strip() for x in r["antecedents_str"].split(",")])
                if ant_set.issubset(cart_set):
                    for item in [x.strip() for x in r["consequents_str"].split(",")]:
                        if item not in cart_set:
                            recs.append(item)
            return list(set(recs))

        # Test Limes
        recs_limes = mock_recommend(["Limes"])
        self.assertIn("Large Lemon", recs_limes, "Large Lemon should be recommended when Limes are carted")

        # Test Yellow Bell Pepper
        recs_pepper = mock_recommend(["Yellow Bell Pepper"])
        self.assertIn("Orange Bell Pepper", recs_pepper, "Orange Bell Pepper should be recommended for Yellow Bell Pepper")


if __name__ == "__main__":
    unittest.main()

