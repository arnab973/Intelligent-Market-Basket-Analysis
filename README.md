# Intelligent Market Basket Analysis & Product Association Discovery

**Academic Track:** C | **Project:** C2  
**Dataset:** Instacart Market Basket Analysis (Kaggle)  
**Technology Stack:** Python 3, Pandas, NumPy, Matplotlib, Seaborn, MLxtend, Streamlit  

---

## 1. Project Overview
This project discovers high-affinity consumer purchasing patterns and product association rules within the multi-table Instacart grocery dataset (encompassing **3,421,083 orders** placed by **206,209 unique customers** across **49,688 products**).

The system implements end-to-end data science pipelines:
1. **Phase 1: Dataset Inspection & Schema Verification** — Multi-table referential integrity audit, missing value root-cause analysis, and schema validation.
2. **Phase 2: Memory-Optimized Data Preprocessing** — Downcasting primitive types to reduce memory usage by >70%, handling structural nulls, and extracting **131,209 authentic customer baskets**.
3. **Phase 3: Exploratory Data Analysis (EDA)** — Deep-dive statistical analysis into product demand, department volumes, customer reorder habits, temporal rhythms, basket sizing, and product combinations.
4. **Phase 4: Association Rule Mining & Algorithmic Benchmarking** — Head-to-head comparison between **Apriori** and **FP-Growth** algorithms, mathematical parity verification, and extraction of 346 high-confidence association rules.
5. **Phase 5: Interactive Web Dashboard** — A multi-page Streamlit application featuring live rule filtering, algorithm benchmarks, EDA exploration, and a real-time **Smart Basket Recommendation Simulator**.

---

## 2. Directory Structure

```text
Intelligent-Market-Basket-Analysis/
│
├── dataset/
│   └── archive/                              # Original Instacart CSV files (6 core relational tables)
│       ├── aisles.csv                        # 134 aisles
│       ├── departments.csv                   # 21 departments
│       ├── products.csv                      # 49,688 products
│       ├── orders.csv                        # 3,421,083 orders
│       ├── order_products__prior.csv         # 32,434,489 prior items
│       └── order_products__train.csv         # 1,384,617 train items
│
├── src/                                      # Modular Python source code
│   ├── __init__.py                           # Package initialization
│   ├── data_inspection.py                    # Phase 1: Inspection & audit script
│   ├── preprocessing.py                      # Phase 2: Memory-optimized data loader & basket builder
│   ├── eda.py                                # Phase 3: Exploratory data analysis & plot generator
│   └── market_basket_analysis.py             # Phase 4: Apriori vs FP-Growth & rule mining engine
│
├── notebooks/                                # Jupyter Notebooks
│   ├── exploratory_data_analysis.ipynb       # Phase 1-3 EDA story notebook
│   └── market_basket_analysis.ipynb          # Phase 4 Association Rule Mining notebook
│
├── outputs/                                  # Verified outputs & artifacts
│   ├── plots/                                # 12 publication-grade visual charts (300 DPI)
│   │   ├── top_20_products.png
│   │   ├── top_departments.png
│   │   ├── orders_by_day_and_hour_heatmap.png
│   │   ├── basket_size_distribution.png
│   │   ├── reorder_rate_by_department.png
│   │   ├── days_since_prior_order_distribution.png
│   │   ├── top_product_pairs.png
│   │   ├── reorder_rate_by_cart_position.png
│   │   ├── apriori_vs_fpgrowth_benchmark.png
│   │   ├── rules_scatter_support_confidence_lift.png
│   │   ├── top_association_rules_lift.png
│   │   └── metrics_distribution_boxplots.png
│   │
│   └── reports/                              # Detailed technical reports & CSV exports
│       ├── dataset_inspection_report.md      # Comprehensive Phase 1 dataset audit
│       ├── association_rules_report.md       # Phase 4 benchmarking & rule mining report
│       ├── discovered_association_rules.csv  # 346 high-confidence rules
│       ├── frequent_itemsets_fpgrowth.csv    # 950 mined frequent itemsets
│       └── algorithm_benchmark_comparison.csv# Execution times across support levels
│
├── dashboard/                                # Phase 5 Interactive Web Application
│   └── app.py                                # Streamlit dashboard application
│
├── requirements.txt                          # Project Python dependencies
├── .gitignore                                # Git ignore configurations
└── README.md                                 # Project documentation
```

---

## 3. Key Findings Summary

- **Dominant Categories**: *Produce* (29.5%) and *Dairy & Eggs* (15.7%) represent **45.2%** of all grocery items purchased.
- **Top Staples**: *Banana* (14.27% order share) and *Bag of Organic Bananas* (11.80% order share) are the #1 and #2 products. **75% of the Top 20 items are certified organic produce**.
- **Customer Habit Strength**: Overall reorder rate is **59.86%**. Items added 1st to the digital cart have a **68% reorder rate**, which steadily declines for later impulse items.
- **Replenishment Cycles**: Reorder interval (`days_since_prior_order`) spikes sharply at **7, 14, 21, and 30 days**, aligning with weekly and monthly grocery shopping routines.
- **Algorithm Equivalence & Efficiency**: Both Apriori and FP-Growth achieved **100% itemset parity**. FP-Growth demonstrated clear architectural advantages by avoiding combinatorial candidate generation ($\binom{N}{2}$).
- **High-Affinity Association Rules**:
  - `Yellow Bell Pepper -> Orange Bell Pepper`: **Lift = 20.72**, Confidence = 34.0%
  - `Lime Sparkling Water -> Sparkling Water Grapefruit`: **Lift = 8.70**, Confidence = 25.7%
  - `Green Bell Pepper -> Red Peppers`: **Lift = 7.50**, Confidence = 19.2%
  - `{Organic Raspberries, Organic Hass Avocado} -> Bag of Organic Bananas`: **Confidence = 52.1%**, Lift = 3.83

---

## 4. How to Run the Project

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run Individual Phases
```bash
# Phase 1: Run Dataset Inspection & Verification
python src/data_inspection.py

# Phase 2: Run Data Preprocessing Pipeline
python src/preprocessing.py

# Phase 3: Run Exploratory Data Analysis & Generate Visualizations
python src/eda.py

# Phase 4: Run Association Rule Mining & Algorithm Benchmarks
python src/market_basket_analysis.py
```

### 3. Launch the Web Applications

#### A. Premium 3D Futuristic AI Web Platform (Landing Page, 3D WebGL Centerpiece, Login/Signup & Dashboard Portal)
```bash
python serve_website.py
# Or: python main.py --website
```
Open [http://localhost:5000](http://localhost:5000) in your browser.
- **Hero Landing Page:** Large title, 3D WebGL interactive shopping basket & orbiting grocery items (360° mouse drag), glowing CTA buttons, 3D tilt cards, and count-up statistics.
- **Authentication:** Researcher Login & Sign Up with instant one-click demo access.
- **Authenticated Dashboard Portal:**
  1. **Overview:** 5 animated KPI cards (3.42M orders, 49.6K products, 131.2K transactions, 950 itemsets, 346 rules), Top 10 bar chart, Department donut, Top lift rules table.
  2. **Dataset Analysis:** 6 CSV tables audit, zero-orphan integrity proof, missing value resolution (206.2K first-order nulls), day/hour distributions, and replenishment cadence.
  3. **Product Insights:** Top 20 products (organic vs conventional), 21 departments volume, Top 15 aisles breakdown, product co-occurrence matrix.
  4. **Frequent Itemsets:** Explorer for 950 frequent itemsets, length filters (Single, Pairs, Triplets), itemset length donut, searchable table.
  5. **Association Rules:** 346 rules with dynamic sliders, Support vs Confidence interactive scatter plot (color/size by Lift), and CSV export.
  6. **Apriori Analysis:** Candidate generation flowchart, downward closure explanation, 27.1 GiB RAM mitigation breakdown.
  7. **FP-Growth Analysis:** FP-Tree construction, header table prefix trees, candidate-free recursive mining.
  8. **Algorithm Comparison:** Side-by-side Battle Arena, benchmark time chart, 100% itemset parity verification.
  9. **Reports:** Rendered technical reports and audit documentation.
  10. **Smart Recommender:** Real-time e-commerce cart simulator with "Frequently Bought Together" bundle predictions.
  11. **Global Search:** `Ctrl + K` quick search across products and rules.
  12. **Mobile Responsive:** Off-canvas slide-out drawer navigation and thumb-friendly mobile dock.

#### B. Streamlit Analytics Dashboard
```bash
python -m streamlit run dashboard/app.py
# Or: python main.py --dashboard
```
Open [http://localhost:8501](http://localhost:8501) in your browser.
