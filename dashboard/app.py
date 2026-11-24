"""
Intelligent Market Basket Analysis & Product Association Discovery
Interactive Streamlit Dashboard (Track C, Project C2)
"""

import os
import sys

# Ensure project root is accessible
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

import streamlit as st
import pandas as pd
import numpy as np
import altair as alt
from PIL import Image

# ---------------------------------------------------------
# Page Configuration & Styling
# ---------------------------------------------------------
st.set_page_config(
    page_title="Intelligent Market Basket Analysis",
    page_icon="🛒",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for polished academic and executive aesthetic
st.markdown("""
<style>
    .main-title {
        font-size: 2.3rem;
        font-weight: 700;
        color: #1e3a8a;
        margin-bottom: 0.2rem;
    }
    .sub-title {
        font-size: 1.1rem;
        color: #4b5563;
        margin-bottom: 1.5rem;
    }
    .metric-card {
        background-color: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 1.2rem;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .metric-val {
        font-size: 1.9rem;
        font-weight: 700;
        color: #0284c7;
    }
    .metric-lbl {
        font-size: 0.9rem;
        color: #64748b;
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 0.3rem;
    }
    .highlight-box {
        background-color: #eff6ff;
        border-left: 4px solid #3b82f6;
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1.2rem;
    }
    .badge-organic {
        background-color: #dcfce7;
        color: #15803d;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
    }
</style>
""", unsafe_allow_html=True)


# ---------------------------------------------------------
# Data Loading & Caching
# ---------------------------------------------------------
@st.cache_data
def load_association_rules():
    rules_path = os.path.join(project_root, "outputs", "reports", "discovered_association_rules.csv")
    if os.path.exists(rules_path):
        df = pd.read_csv(rules_path)
        return df
    return pd.DataFrame()


@st.cache_data
def load_benchmark_data():
    bench_path = os.path.join(project_root, "outputs", "reports", "algorithm_benchmark_comparison.csv")
    if os.path.exists(bench_path):
        return pd.read_csv(bench_path)
    return pd.DataFrame()


@st.cache_data
def get_available_products(rules_df):
    if rules_df.empty:
        return []
    products = set()
    for ant in rules_df["antecedents_str"]:
        for p in ant.split(","):
            products.add(p.strip())
    for con in rules_df["consequents_str"]:
        for p in con.split(","):
            products.add(p.strip())
    return sorted(list(products))


rules_df = load_association_rules()
benchmark_df = load_benchmark_data()
all_products = get_available_products(rules_df)


# ---------------------------------------------------------
# Recommendation Engine Helper
# ---------------------------------------------------------
def get_recommendations(cart_items, rules, top_n=5):
    if not cart_items or rules.empty:
        return pd.DataFrame()

    cart_set = set(cart_items)
    recommendations = []

    for _, r in rules.iterrows():
        ant_set = set([x.strip() for x in r["antecedents_str"].split(",")])
        if ant_set.issubset(cart_set):
            con_items = [x.strip() for x in r["consequents_str"].split(",")]
            for item in con_items:
                if item not in cart_set:
                    recommendations.append({
                        "recommended_product": item,
                        "based_on_rule": r["rule_str"],
                        "confidence": r["confidence"],
                        "lift": r["lift"],
                        "support": r["support"]
                    })

    if not recommendations:
        return pd.DataFrame()

    rec_df = pd.DataFrame(recommendations).drop_duplicates(subset=["recommended_product"])
    return rec_df.sort_values(by=["confidence", "lift"], ascending=[False, False]).head(top_n)


# ---------------------------------------------------------
# Sidebar Navigation
# ---------------------------------------------------------
with st.sidebar:
    st.image("https://cdn-icons-png.flaticon.com/512/3081/3081840.png", width=70)
    st.title("Navigation")
    menu = st.radio(
        "Select Module:",
        [
            "📊 Executive KPI Overview",
            "🔍 Exploratory Data Analysis",
            "⚡ Algorithm Benchmarking (Apriori vs FP-Growth)",
            "🛒 Association Rule Explorer",
            "🤖 Smart Basket Recommender",
            "📑 Technical Reports & Downloads"
        ]
    )

    st.markdown("---")
    st.markdown("**Academic Project:** Track C, Project C2")
    st.markdown("**Dataset:** Instacart Market Basket Analysis")
    st.markdown("**Total System Orders:** 3,421,083")
    st.markdown("**Analyzed Baskets:** 131,209")
    st.markdown("**Catalog Products:** 49,688")


# ---------------------------------------------------------
# TAB 1: Executive KPI Overview
# ---------------------------------------------------------
if menu == "📊 Executive KPI Overview":
    st.markdown("<div class='main-title'>Intelligent Market Basket Analysis & Product Association Discovery</div>", unsafe_allow_html=True)
    st.markdown("<div class='sub-title'>Track C: Academic Data Science Project C2 | Instacart Grocery Portfolio</div>", unsafe_allow_html=True)

    st.markdown("""
    <div class='highlight-box'>
        <b>Executive Summary:</b> This project performs large-scale transaction pattern discovery and association rule mining on the Instacart dataset.
        Using memory-optimized algorithms (Apriori and FP-Growth), we analyze millions of customer shopping carts to uncover complementary product combinations,
        temporal purchasing rhythms, and predictive cross-selling opportunities.
    </div>
    """, unsafe_allow_html=True)

    # Metric Cards Row 1
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        st.markdown("<div class='metric-card'><div class='metric-val'>3,421,083</div><div class='metric-lbl'>Total System Orders</div></div>", unsafe_allow_html=True)
    with col2:
        st.markdown("<div class='metric-card'><div class='metric-val'>206,209</div><div class='metric-lbl'>Unique Customers</div></div>", unsafe_allow_html=True)
    with col3:
        st.markdown("<div class='metric-card'><div class='metric-val'>49,688</div><div class='metric-lbl'>Catalog Products</div></div>", unsafe_allow_html=True)
    with col4:
        st.markdown("<div class='metric-card'><div class='metric-val'>21 / 134</div><div class='metric-lbl'>Depts / Aisles</div></div>", unsafe_allow_html=True)

    st.markdown("<div style='height: 15px;'></div>", unsafe_allow_html=True)

    # Metric Cards Row 2
    col5, col6, col7, col8 = st.columns(4)
    with col5:
        st.markdown("<div class='metric-card'><div class='metric-val'>131,209</div><div class='metric-lbl'>Analyzed Baskets (Train)</div></div>", unsafe_allow_html=True)
    with col6:
        st.markdown("<div class='metric-card'><div class='metric-val'>59.86%</div><div class='metric-lbl'>Overall Reorder Rate</div></div>", unsafe_allow_html=True)
    with col7:
        st.markdown("<div class='metric-card'><div class='metric-val'>10.55</div><div class='metric-lbl'>Avg Basket Size (Items)</div></div>", unsafe_allow_html=True)
    with col8:
        st.markdown("<div class='metric-card'><div class='metric-val'>346</div><div class='metric-lbl'>Mined Association Rules</div></div>", unsafe_allow_html=True)

    st.markdown("---")
    st.subheader("Key Strategic Findings")
    st.markdown("""
    - **1. Produce & Dairy Hegemony**: *Produce* (29.5%) and *Dairy & Eggs* (15.7%) make up over **45%** of all grocery lines purchased.
    - **2. The Banana Phenomenon**: Bananas (conventional and organic) appear in **over 26%** of all customer baskets.
    - **3. Organic Consumer Shift**: **75% of the top 20 products** are certified organic produce.
    - **4. Habit-Driven Reordering**: Core essentials (Dairy and Produce) have **65–67% reorder rates**, while items added 1st to the digital cart have a **68% reorder probability**.
    - **5. Extreme Product Affinity (Lift > 20)**: Specific item pairs like *Yellow Bell Pepper <-> Orange Bell Pepper* exhibit an affinity **20.7 times higher** than expected by chance.
    """)


# ---------------------------------------------------------
# TAB 2: Exploratory Data Analysis
# ---------------------------------------------------------
elif menu == "🔍 Exploratory Data Analysis":
    st.markdown("<div class='main-title'>Exploratory Data Analysis (EDA)</div>", unsafe_allow_html=True)
    st.markdown("<div class='sub-title'>Analyzing Customer Volumes, Department Affinities, and Purchasing Rhythms</div>", unsafe_allow_html=True)

    eda_tab1, eda_tab2, eda_tab3 = st.tabs(["🛒 Top Products & Departments", "⏰ Temporal Patterns & Cadence", "📦 Basket Dynamics & Cart Sequence"])

    plots_dir = os.path.join(project_root, "outputs", "plots")

    with eda_tab1:
        col_p1, col_p2 = st.columns(2)
        with col_p1:
            st.subheader("Top 20 Most Purchased Products")
            p1_path = os.path.join(plots_dir, "top_20_products.png")
            if os.path.exists(p1_path):
                st.image(p1_path, use_container_width=True)
            st.caption("Green bars represent Certified Organic products (75% of Top 20).")
        with col_p2:
            st.subheader("Order Volume by Department")
            p2_path = os.path.join(plots_dir, "top_departments.png")
            if os.path.exists(p2_path):
                st.image(p2_path, use_container_width=True)
            st.caption("Produce and Dairy/Eggs account for over 45% of total volume.")

    with eda_tab2:
        col_t1, col_t2 = st.columns(2)
        with col_t1:
            st.subheader("Day of Week vs. Hour of Day Heatmap")
            p3_path = os.path.join(plots_dir, "orders_by_day_and_hour_heatmap.png")
            if os.path.exists(p3_path):
                st.image(p3_path, use_container_width=True)
            st.caption("Peak demand occurs on Sunday and Monday between 10 AM and 4 PM.")
        with col_t2:
            st.subheader("Customer Reorder Cadence (Days Interval)")
            p4_path = os.path.join(plots_dir, "days_since_prior_order_distribution.png")
            if os.path.exists(p4_path):
                st.image(p4_path, use_container_width=True)
            st.caption("Prominent red spikes at 7, 14, 21, and 30 days confirm weekly and monthly grocery cycles.")

    with eda_tab3:
        col_b1, col_b2 = st.columns(2)
        with col_b1:
            st.subheader("Customer Basket Size Distribution")
            p5_path = os.path.join(plots_dir, "basket_size_distribution.png")
            if os.path.exists(p5_path):
                st.image(p5_path, use_container_width=True)
            st.caption("Right-skewed distribution: Mean basket size is 10.55 items (Median: 9 items).")
        with col_b2:
            st.subheader("Reorder Probability vs. Add-to-Cart Position")
            p6_path = os.path.join(plots_dir, "reorder_rate_by_cart_position.png")
            if os.path.exists(p6_path):
                st.image(p6_path, use_container_width=True)
            st.caption("First-in-cart items have a ~68% reorder rate, steadily decaying for later impulse items.")


# ---------------------------------------------------------
# TAB 3: Algorithm Benchmarking
# ---------------------------------------------------------
elif menu == "⚡ Algorithm Benchmarking (Apriori vs FP-Growth)":
    st.markdown("<div class='main-title'>Algorithm Scalability Benchmark: Apriori vs. FP-Growth</div>", unsafe_allow_html=True)
    st.markdown("<div class='sub-title'>Empirical Performance Comparison Across Support Thresholds</div>", unsafe_allow_html=True)

    st.markdown("""
    <div class='highlight-box'>
        <b>Theoretical Contrast:</b>
        <ul>
            <li><b>Apriori:</b> Explores itemset lattice breadth-first. Generates $C_k$ candidate itemsets by joining $L_{k-1}$ and repeatedly scanning transactions. Combinatorial explosion occurs at low support levels.</li>
            <li><b>FP-Growth:</b> Compresses transactions into an in-memory prefix tree (FP-Tree) and mines frequent conditional sub-trees recursively without candidate generation.</li>
        </ul>
    </div>
    """, unsafe_allow_html=True)

    col_bench1, col_bench2 = st.columns([1.2, 1])

    with col_bench1:
        st.subheader("Execution Time Comparison (Actual Results)")
        bench_plot_path = os.path.join(project_root, "outputs", "plots", "apriori_vs_fpgrowth_benchmark.png")
        if os.path.exists(bench_plot_path):
            st.image(bench_plot_path, use_container_width=True)

    with col_bench2:
        st.subheader("Benchmark Metrics Table")
        if not benchmark_df.empty:
            display_bench = benchmark_df.copy()
            st.dataframe(display_bench, use_container_width=True, hide_index=True)
            st.caption("Exact Match: True indicates 100% itemset parity between both algorithms.")
        else:
            st.info("Benchmark data not found.")

    st.markdown("---")
    st.subheader("Memory Mitigation Analysis")
    st.markdown("""
    - **Default MLxtend Apriori Failure**: Running standard `apriori(low_memory=False)` creates a 3D NumPy array of shape `(transactions, candidates, k)`. On Instacart, this requires **27.1 GiB of RAM** and crashes with an `ArrayMemoryError`.
    - **Our Optimization**: By enabling `low_memory=True` (generator-based candidate search) and pre-filtering infrequent items using downward closure, peak RAM was reduced from **>27 GiB to just 54.87 MB**, achieving fast, reliable execution.
    """)


# ---------------------------------------------------------
# TAB 4: Association Rule Explorer
# ---------------------------------------------------------
elif menu == "🛒 Association Rule Explorer":
    st.markdown("<div class='main-title'>Association Rule Explorer</div>", unsafe_allow_html=True)
    st.markdown("<div class='sub-title'>Interactive Multi-Metric Rule Filtering and Pattern Discovery</div>", unsafe_allow_html=True)

    if rules_df.empty:
        st.error("No association rules found. Please verify outputs/reports/discovered_association_rules.csv.")
    else:
        # Filter controls
        f_col1, f_col2, f_col3, f_col4 = st.columns(4)
        with f_col1:
            min_supp = st.slider("Minimum Support", min_value=float(rules_df["support"].min()), max_value=float(rules_df["support"].max()), value=0.003, step=0.001, format="%.3f")
        with f_col2:
            min_conf = st.slider("Minimum Confidence", min_value=0.15, max_value=0.60, value=0.15, step=0.05, format="%.2f")
        with f_col3:
            min_lift = st.slider("Minimum Lift", min_value=1.0, max_value=25.0, value=1.0, step=0.5, format="%.1f")
        with f_col4:
            search_query = st.text_input("Filter by Product Keyword:", placeholder="e.g. Banana, Lemon, Pepper...")

        # Apply filters
        filtered_rules = rules_df[
            (rules_df["support"] >= min_supp) &
            (rules_df["confidence"] >= min_conf) &
            (rules_df["lift"] >= min_lift)
        ].copy()

        if search_query:
            filtered_rules = filtered_rules[
                filtered_rules["rule_str"].str.contains(search_query, case=False, na=False)
            ]

        st.markdown(f"**Found {len(filtered_rules):,} qualifying association rules** out of {len(rules_df):,} total rules.")

        # Interactive Table
        format_dict = {
            "support": "{:.4f}",
            "confidence": "{:.1%}",
            "lift": "{:.2f}",
            "leverage": "{:.5f}",
            "conviction": "{:.2f}"
        }
        cols_to_show = ["rule_str", "support", "confidence", "lift", "leverage", "conviction"]
        st.dataframe(
            filtered_rules[cols_to_show].head(100),
            use_container_width=True,
            hide_index=True
        )

        st.markdown("---")
        # Visualizations row
        v_col1, v_col2 = st.columns(2)
        with v_col1:
            st.subheader("Support vs. Confidence (Colored by Lift)")
            scatter_path = os.path.join(project_root, "outputs", "plots", "rules_scatter_support_confidence_lift.png")
            if os.path.exists(scatter_path):
                st.image(scatter_path, use_container_width=True)
        with v_col2:
            st.subheader("Top Association Rules Ranked by Lift")
            lift_path = os.path.join(project_root, "outputs", "plots", "top_association_rules_lift.png")
            if os.path.exists(lift_path):
                st.image(lift_path, use_container_width=True)

        # CSV Download Button
        csv_data = filtered_rules.to_csv(index=False).encode("utf-8")
        st.download_button(
            label="📥 Download Filtered Rules as CSV",
            data=csv_data,
            file_name="filtered_association_rules.csv",
            mime="text/csv"
        )


# ---------------------------------------------------------
# TAB 5: Smart Basket Recommender Simulator
# ---------------------------------------------------------
elif menu == "🤖 Smart Basket Recommender":
    st.markdown("<div class='main-title'>Smart Basket Recommendation Simulator</div>", unsafe_allow_html=True)
    st.markdown("<div class='sub-title'>Real-Time Product Recommendations Driven by Association Rule Lift & Confidence</div>", unsafe_allow_html=True)

    st.markdown("""
    <div class='highlight-box'>
        <b>How It Works:</b> Select items to populate a simulated customer's cart. The engine searches through all 346 mined association rules,
        matches antecedent combinations, and dynamically ranks recommended items based on confidence and lift.
    </div>
    """, unsafe_allow_html=True)

    # Pre-packaged demo carts
    st.subheader("1. Quick-Load a Presets Scenario:")
    demo_cols = st.columns(4)
    preset_choice = None
    with demo_cols[0]:
        if st.button("🥑 Guacamole & Latin Cooking"):
            preset_choice = ["Limes", "Organic Avocado"]
    with demo_cols[1]:
        if st.button("🍓 Organic Fruit Smoothie"):
            preset_choice = ["Organic Raspberries", "Organic Hass Avocado"]
    with demo_cols[2]:
        if st.button("🧄 Fresh Cooking Aromatics"):
            preset_choice = ["Organic Garlic"]
    with demo_cols[3]:
        if st.button("🫑 Bell Pepper Duo"):
            preset_choice = ["Yellow Bell Pepper"]

    # Product Selector
    default_selection = preset_choice if preset_choice else ["Organic Raspberries", "Organic Hass Avocado"]
    # Filter default to available items
    default_selection = [p for p in default_selection if p in all_products]

    selected_cart = st.multiselect(
        "Current Items in Customer's Basket:",
        options=all_products,
        default=default_selection
    )

    if selected_cart:
        st.markdown(f"**Customer Cart ({len(selected_cart)} items):** " + " • ".join([f"`{item}`" for item in selected_cart]))

        recs = get_recommendations(selected_cart, rules_df, top_n=6)

        st.subheader("2. Recommended Items to Cross-Sell:")

        if recs.empty:
            st.info("No association rules found where the antecedent is fully contained in this basket. Try adding frequent staples like Limes, Garlic, Raspberries, or Avocados!")
        else:
            for idx, r in recs.reset_index(drop=True).iterrows():
                with st.container():
                    r_col1, r_col2, r_col3 = st.columns([2.5, 1, 1])
                    with r_col1:
                        st.markdown(f"### #{idx+1} {r['recommended_product']}")
                        st.caption(f"Rule trigger: `{r['based_on_rule']}`")
                    with r_col2:
                        st.metric("Predicted Conversion", f"{r['confidence']:.1%}")
                    with r_col3:
                        st.metric("Lift Multiplier", f"{r['lift']:.2f}x")
                    st.divider()


# ---------------------------------------------------------
# TAB 6: Technical Reports & Downloads
# ---------------------------------------------------------
elif menu == "📑 Technical Reports & Downloads":
    st.markdown("<div class='main-title'>Technical Reports & Data Downloads</div>", unsafe_allow_html=True)
    st.markdown("<div class='sub-title'>Inspection Audits, Mathematical Benchmarks, and Rule CSV Exports</div>", unsafe_allow_html=True)

    report_tabs = st.tabs(["📄 Association Rules Technical Report", "🔍 Dataset Inspection Report", "💾 CSV Data Exports"])

    with report_tabs[0]:
        mba_rep_path = os.path.join(project_root, "outputs", "reports", "association_rules_report.md")
        if os.path.exists(mba_rep_path):
            with open(mba_rep_path, "r", encoding="utf-8") as f:
                st.markdown(f.read())
        else:
            st.info("Association rules report not found.")

    with report_tabs[1]:
        insp_rep_path = os.path.join(project_root, "outputs", "reports", "dataset_inspection_report.md")
        if os.path.exists(insp_rep_path):
            with open(insp_rep_path, "r", encoding="utf-8") as f:
                st.markdown(f.read())
        else:
            st.info("Inspection report not found.")

    with report_tabs[2]:
        st.subheader("Download Artifacts")
        col_d1, col_d2, col_d3 = st.columns(3)

        rules_csv_path = os.path.join(project_root, "outputs", "reports", "discovered_association_rules.csv")
        if os.path.exists(rules_csv_path):
            with open(rules_csv_path, "rb") as f:
                col_d1.download_button(
                    label="📥 Association Rules CSV",
                    data=f.read(),
                    file_name="discovered_association_rules.csv",
                    mime="text/csv"
                )

        itemsets_csv_path = os.path.join(project_root, "outputs", "reports", "frequent_itemsets_fpgrowth.csv")
        if os.path.exists(itemsets_csv_path):
            with open(itemsets_csv_path, "rb") as f:
                col_d2.download_button(
                    label="📥 Frequent Itemsets CSV",
                    data=f.read(),
                    file_name="frequent_itemsets_fpgrowth.csv",
                    mime="text/csv"
                )

        bench_csv_path = os.path.join(project_root, "outputs", "reports", "algorithm_benchmark_comparison.csv")
        if os.path.exists(bench_csv_path):
            with open(bench_csv_path, "rb") as f:
                col_d3.download_button(
                    label="📥 Benchmark Metrics CSV",
                    data=f.read(),
                    file_name="algorithm_benchmark_comparison.csv",
                    mime="text/csv"
                )
