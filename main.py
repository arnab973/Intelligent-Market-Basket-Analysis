"""
Intelligent Market Basket Analysis & Product Association Discovery
Master Execution Script / Command-Line Interface (CLI)

Usage:
  python main.py --help
  python main.py --phase all
  python main.py --phase inspect
  python main.py --phase preprocess
  python main.py --phase eda
  python main.py --phase mba
  python main.py --dashboard
"""

import os
import sys
import argparse
import subprocess

# Ensure project root is accessible
project_root = os.path.dirname(os.path.abspath(__file__))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from src.data_inspection import inspect_instacart_dataset
from src.preprocessing import run_preprocessing_pipeline
from src.eda import run_eda_pipeline
from src.market_basket_analysis import run_phase_4_pipeline


def main():
    parser = argparse.ArgumentParser(
        description="Intelligent Market Basket Analysis Pipeline (Track C, Project C2)",
        formatter_class=argparse.RawTextHelpFormatter
    )
    parser.add_argument(
        "--phase",
        choices=["inspect", "preprocess", "eda", "mba", "all"],
        default="all",
        help=(
            "Select pipeline phase to execute:\n"
            "  inspect    : Phase 1 - Dataset Inspection & Referential Integrity Audit\n"
            "  preprocess : Phase 2 - Memory-Optimized Loading & Basket Generation\n"
            "  eda        : Phase 3 - Exploratory Data Analysis & Plot Generation\n"
            "  mba        : Phase 4 - Association Rule Mining (Apriori & FP-Growth)\n"
            "  all        : Run entire end-to-end pipeline (Phases 1-4)\n"
        )
    )
    parser.add_argument(
        "--dashboard",
        action="store_true",
        help="Launch the interactive Streamlit dashboard on port 8501"
    )
    parser.add_argument(
        "--website",
        action="store_true",
        help="Launch the modern multi-page web platform on port 5000"
    )

    args = parser.parse_args()

    if args.website:
        print("\n[+] Launching BasketIQ Modern Multi-Page Web Platform on port 5000...")
        import serve_website
        serve_website.start_server()
        return

    if args.dashboard:
        print("\n[+] Launching Streamlit Interactive Dashboard...")
        app_path = os.path.join(project_root, "dashboard", "app.py")
        cmd = [sys.executable, "-m", "streamlit", "run", app_path, "--server.port", "8501"]
        try:
            subprocess.run(cmd)
        except KeyboardInterrupt:
            print("\nDashboard closed.")
        return

    print("=" * 75)
    print("INTELLIGENT MARKET BASKET ANALYSIS & PRODUCT ASSOCIATION DISCOVERY")
    print("Track C | Project C2 | Master Pipeline Runner")
    print("=" * 75)

    if args.phase in ["inspect", "all"]:
        print("\n>>> STARTING PHASE 1: DATASET INSPECTION")
        inspect_instacart_dataset()

    if args.phase in ["preprocess", "all"]:
        print("\n>>> STARTING PHASE 2: DATA PREPROCESSING")
        run_preprocessing_pipeline()

    if args.phase in ["eda", "all"]:
        print("\n>>> STARTING PHASE 3: EXPLORATORY DATA ANALYSIS")
        run_eda_pipeline()

    if args.phase in ["mba", "all"]:
        print("\n>>> STARTING PHASE 4: ASSOCIATION RULE MINING")
        run_phase_4_pipeline()

    print("\n" + "=" * 75)
    print("PIPELINE EXECUTION COMPLETE")
    print("To launch the interactive dashboard, run: python main.py --dashboard")
    print("=" * 75)


if __name__ == "__main__":
    main()

