/**
 * BasketIQ - Full Multi-Page Application Controller & Analytics Engine
 * Track C, Project C2: Intelligent Market Basket Analysis & Product Association Discovery
 */

// -------------------------------------------------------------
// Authentication State Management
// -------------------------------------------------------------
const AUTH_KEY = 'basketiq_auth_user';

function getAuthUser() {
  const stored = localStorage.getItem(AUTH_KEY);
  return stored ? JSON.parse(stored) : null;
}

function setAuthUser(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  updateUserUI();
}

function clearAuthUser() {
  localStorage.removeItem(AUTH_KEY);
}

function requireAuth() {
  const user = getAuthUser();
  if (!user) {
    window.location.hash = '#/login';
    return false;
  }
  return true;
}

function updateUserUI() {
  const user = getAuthUser();
  if (!user) return;

  const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'AS';
  
  const avatarElem = document.getElementById('user-avatar');
  const nameElem = document.getElementById('user-display-name');
  const roleElem = document.getElementById('user-role-badge');
  const profAvatar = document.getElementById('profile-avatar');
  const profName = document.getElementById('profile-name');
  const profRole = document.getElementById('profile-role');
  const profEmail = document.getElementById('profile-email');

  if (avatarElem) avatarElem.innerText = initials;
  if (nameElem) nameElem.innerText = user.name;
  if (roleElem) roleElem.innerText = user.role || 'Lead Researcher';
  if (profAvatar) profAvatar.innerText = initials;
  if (profName) profName.innerText = user.name;
  if (profRole) profRole.innerText = user.role || 'Lead Researcher';
  if (profEmail) profEmail.innerText = user.email || 'researcher@instacart.ai';
}

function quickDemoLogin() {
  const demoUser = {
    name: 'Dr. Arnab Sen',
    email: 'researcher@instacart.ai',
    role: 'Lead Researcher'
  };
  setAuthUser(demoUser);
  fireConfetti();
  window.location.hash = '#/dashboard';
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const user = {
    name: 'Dr. Arnab Sen',
    email: email || 'researcher@instacart.ai',
    role: 'Lead Researcher'
  };
  setAuthUser(user);
  fireConfetti();
  window.location.hash = '#/dashboard';
}

function handleSignupSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const role = document.getElementById('signup-role').value;

  const newUser = {
    name: name || 'New Researcher',
    email: email || 'user@instacart.ai',
    role: role || 'Data Scientist'
  };
  setAuthUser(newUser);
  fireConfetti();
  window.location.hash = '#/dashboard';
}

function handleLogout() {
  clearAuthUser();
  window.location.hash = '#/';
}

function fireConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 }
    });
  }
}

// -------------------------------------------------------------
// Mobile Drawer & Global Search Modal Handlers
// -------------------------------------------------------------
function openMobileNav() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.remove('hidden');
}

function closeMobileNav() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.add('hidden');
}

function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.remove('hidden');
    const input = document.getElementById('global-search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.add('hidden');
}

// Keyboard shortcuts (Ctrl + K or Escape)
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openSearchModal();
  }
  if (e.key === 'Escape') {
    closeSearchModal();
  }
});

function handleGlobalSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const container = document.getElementById('search-results-container');
  if (!container || !window.MBA_DATA) return;

  if (!query) {
    container.innerHTML = '<p class="text-slate-400 text-center py-6">Type product names or keywords to instantly discover matching association rules and catalog items.</p>';
    return;
  }

  const matchingRules = MBA_DATA.rules.filter(r => 
    r.rule_str.toLowerCase().includes(query) || 
    r.antecedents.toLowerCase().includes(query) || 
    r.consequents.toLowerCase().includes(query)
  ).slice(0, 6);

  const matchingProducts = MBA_DATA.top_products.filter(p => 
    p.name.toLowerCase().includes(query)
  ).slice(0, 5);

  let html = '';

  if (matchingProducts.length > 0) {
    html += '<div class="text-[10px] font-bold uppercase text-cyan-400 px-2 pt-2">Products</div>';
    matchingProducts.forEach(p => {
      html += `
        <div onclick="selectProductFromSearch('${p.name}')" class="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer flex items-center justify-between transition-all">
          <div class="flex items-center gap-2">
            <i data-lucide="tag" class="w-3.5 h-3.5 text-cyan-400"></i>
            <span class="text-white font-medium">${p.name}</span>
          </div>
          <span class="text-[11px] text-slate-400">${p.count.toLocaleString()} orders</span>
        </div>
      `;
    });
  }

  if (matchingRules.length > 0) {
    html += '<div class="text-[10px] font-bold uppercase text-purple-400 px-2 pt-3">Association Rules (By Lift)</div>';
    matchingRules.forEach(r => {
      html += `
        <div onclick="navigateToRulesWithSearch('${query}')" class="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer flex items-center justify-between transition-all">
          <div class="flex items-center gap-2">
            <i data-lucide="network" class="w-3.5 h-3.5 text-purple-400"></i>
            <span class="text-white font-medium">${r.rule_str}</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[11px] text-slate-400">Conf: ${(r.confidence * 100).toFixed(1)}%</span>
            <span class="badge-amber px-2 py-0.5 rounded text-[10px] font-bold">Lift: ${r.lift.toFixed(2)}x</span>
          </div>
        </div>
      `;
    });
  }

  if (matchingRules.length === 0 && matchingProducts.length === 0) {
    html = `<p class="text-slate-400 text-center py-6">No matching rules or products found for "<span class="text-white">${query}</span>".</p>`;
  }

  container.innerHTML = html;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function selectProductFromSearch(productName) {
  closeSearchModal();
  window.location.hash = '#/simulator';
  setTimeout(() => {
    addToCart(productName);
  }, 100);
}

function navigateToRulesWithSearch(query) {
  closeSearchModal();
  window.location.hash = '#/rules';
  setTimeout(() => {
    const searchInput = document.getElementById('filter-search');
    if (searchInput) {
      searchInput.value = query;
      handleRuleFilterChange();
    }
  }, 100);
}

function scrollToSection(id, e) {
  if (e) {
    e.preventDefault();
  }
  closeMobileNav();

  const currentViewLanding = document.getElementById('view-landing');
  if (currentViewLanding && currentViewLanding.classList.contains('hidden')) {
    window.location.hash = '#/';
    setTimeout(() => {
      smoothScrollToElement(id);
    }, 150);
  } else {
    smoothScrollToElement(id);
  }
}

function smoothScrollToElement(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 85;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// -------------------------------------------------------------
// Client-Side Router
// -------------------------------------------------------------
const routes = {
  '#/': { view: 'view-landing' },
  '#features': { view: 'view-landing', scrollTarget: 'features' },
  '#insights': { view: 'view-landing', scrollTarget: 'insights' },
  '#benchmarks': { view: 'view-landing', scrollTarget: 'benchmarks' },
  '#dataset': { view: 'view-landing', scrollTarget: 'dataset' },
  '#/login': { view: 'view-login' },
  '#/signup': { view: 'view-signup' },
  '#/dashboard': { view: 'view-app', subview: 'subview-dashboard', title: 'Executive Overview', badge: 'KPI Dashboard', protected: true },
  '#/dataset': { view: 'view-app', subview: 'subview-dataset', title: 'Dataset Analysis', badge: '3.42M Orders Schema', protected: true },
  '#/products': { view: 'view-app', subview: 'subview-products', title: 'Product Insights', badge: 'Top Products & Aisles', protected: true },
  '#/itemsets': { view: 'view-app', subview: 'subview-itemsets', title: 'Frequent Itemsets', badge: '950 Mined Itemsets', protected: true },
  '#/rules': { view: 'view-app', subview: 'subview-rules', title: 'Association Rules', badge: '346 Mined Rules', protected: true },
  '#/apriori': { view: 'view-app', subview: 'subview-apriori', title: 'Apriori Analysis', badge: 'Candidate Generation', protected: true },
  '#/fpgrowth': { view: 'view-app', subview: 'subview-fpgrowth', title: 'FP-Growth Analysis', badge: 'FP-Tree Mining', protected: true },
  '#/benchmark': { view: 'view-app', subview: 'subview-benchmark', title: 'Algorithm Comparison', badge: 'Battle Arena', protected: true },
  '#/miner': { view: 'view-app', subview: 'subview-miner', title: 'Custom Dataset Miner', badge: 'Evaluator Sandbox', protected: true },
  '#/reports': { view: 'view-app', subview: 'subview-reports', title: 'Research & Audit Reports', badge: 'Documentation', protected: true },
  '#/simulator': { view: 'view-app', subview: 'subview-simulator', title: 'Smart Recommender Simulator', badge: 'Live Cart Engine', protected: true },
  '#/profile': { view: 'view-app', subview: 'subview-profile', title: 'Researcher Profile', badge: 'Session Info', protected: true }
};

function handleRouting() {
  const hash = window.location.hash || '#/';
  const target = routes[hash] || routes['#/'];

  // Route protection
  if (target.protected && !requireAuth()) {
    return;
  }

  // Hide all main view sections
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
  const currentView = document.getElementById(target.view);
  if (currentView) currentView.classList.remove('hidden');

  // Handle in-page landing scroll targets
  if (target.scrollTarget) {
    setTimeout(() => {
      smoothScrollToElement(target.scrollTarget);
    }, 100);
    return;
  }

  // Handle authenticated app subviews
  if (target.view === 'view-app') {
    updateUserUI();
    document.querySelectorAll('.subview').forEach(el => {
      el.classList.remove('active');
      el.style.display = 'none';
    });
    const currentSub = document.getElementById(target.subview);
    if (currentSub) {
      currentSub.style.display = 'block';
      setTimeout(() => currentSub.classList.add('active'), 20);
    }

    // Update Topbar
    const topbarTitle = document.getElementById('topbar-title');
    const topbarBadge = document.getElementById('topbar-badge');
    if (topbarTitle) topbarTitle.innerText = target.title;
    if (topbarBadge) topbarBadge.innerText = target.badge;

    // Highlight active sidebar item
    document.querySelectorAll('.nav-item').forEach(el => {
      if (el.getAttribute('href') === hash) {
        el.classList.add('bg-white/10', 'text-white');
        el.classList.remove('text-slate-300');
      } else {
        el.classList.remove('bg-white/10', 'text-white');
        el.classList.add('text-slate-300');
      }
    });

    // Subview lazy initialization
    if (target.subview === 'subview-dashboard') renderDashboardSummary();
    if (target.subview === 'subview-dataset') renderDatasetAnalysis();
    if (target.subview === 'subview-products') renderProductInsights();
    if (target.subview === 'subview-itemsets') renderFrequentItemsets();
    if (target.subview === 'subview-rules') renderRulesExplorer();
    if (target.subview === 'subview-apriori') renderAprioriView();
    if (target.subview === 'subview-fpgrowth') renderFPGrowthView();
    if (target.subview === 'subview-benchmark') renderBenchmarkArena();
    if (target.subview === 'subview-miner') initMinerView();
    if (target.subview === 'subview-simulator') initBasketSimulator();
    if (target.subview === 'subview-reports') showReportTab('mba');

    // Trigger animated count-up numbers
    animateNumbers();
  } else if (target.view === 'view-landing') {
    animateNumbers();
  }

  // Refresh Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Scroll to top of window
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', handleRouting);

// -------------------------------------------------------------
// Animated Number Counters
// -------------------------------------------------------------
function animateNumbers() {
  document.querySelectorAll('.count-up').forEach(elem => {
    const target = parseInt(elem.getAttribute('data-target') || elem.innerText.replace(/,/g, ''), 10);
    if (isNaN(target)) return;

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function updateNumber(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuad
      const current = Math.floor(start + (target - start) * (1 - (1 - progress) * (1 - progress)));
      elem.innerText = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        elem.innerText = target.toLocaleString();
      }
    }

    requestAnimationFrame(updateNumber);
  });
}

// -------------------------------------------------------------
// Chart.js Registry & Theme Config
// -------------------------------------------------------------
const chartInstances = {};

function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
}

const chartDefaults = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } } },
    tooltip: {
      backgroundColor: '#070d1e',
      titleColor: '#fff',
      bodyColor: '#cbd5e1',
      borderColor: 'rgba(255,255,255,0.15)',
      borderWidth: 1,
      padding: 10,
      cornerRadius: 8
    }
  },
  scales: {
    x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } } },
    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } } }
  }
};

// -------------------------------------------------------------
// SUBVIEW 1: OVERVIEW DASHBOARD
// -------------------------------------------------------------
function renderDashboardSummary() {
  if (!window.MBA_DATA) return;

  // 1. Top 10 Summary Bar Chart
  destroyChart('chart-top-products-summary');
  const ctx1 = document.getElementById('chart-top-products-summary');
  if (ctx1) {
    const top10 = MBA_DATA.top_products.slice(0, 10);
    chartInstances['chart-top-products-summary'] = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: top10.map(p => p.name.length > 20 ? p.name.substring(0, 18) + '...' : p.name),
        datasets: [{
          label: 'Purchase Count',
          data: top10.map(p => p.count),
          backgroundColor: top10.map(p => p.is_organic ? '#10b981' : '#38bdf8'),
          borderRadius: 6
        }]
      },
      options: {
        ...chartDefaults,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: function(context) {
                const item = top10[context.dataIndex];
                return `Category: ${item.is_organic ? 'Certified Organic' : 'Conventional'}\nReorder Rate: ${item.reorder_pct}%`;
              }
            }
          }
        }
      }
    });
  }

  // 2. Department Volume Donut Chart
  destroyChart('chart-departments-summary');
  const ctx2 = document.getElementById('chart-departments-summary');
  if (ctx2) {
    const topDepts = MBA_DATA.departments.slice(0, 6);
    chartInstances['chart-departments-summary'] = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: topDepts.map(d => d.name),
        datasets: [{
          data: topDepts.map(d => d.count),
          backgroundColor: ['#10b981', '#38bdf8', '#818cf8', '#c084fc', '#f59e0b', '#06b6d4'],
          borderColor: '#070d1e',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: '#94a3b8', font: { size: 10 } } }
        }
      }
    });
  }

  // 3. Top 5 Discovered Rules Table (By Lift)
  const tbody = document.getElementById('dashboard-rules-tbody');
  if (tbody) {
    const top5Rules = [...MBA_DATA.rules].sort((a, b) => b.lift - a.lift).slice(0, 5);
    tbody.innerHTML = top5Rules.map(r => `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="py-3 px-3 font-medium text-white flex items-center gap-2">
          <span>${r.rule_str}</span>
        </td>
        <td class="py-3 px-3 font-mono">${(r.support * 100).toFixed(2)}%</td>
        <td class="py-3 px-3 font-mono text-emerald-400 font-bold">${(r.confidence * 100).toFixed(1)}%</td>
        <td class="py-3 px-3 font-mono text-amber-400 font-black text-sm">${r.lift.toFixed(2)}x</td>
        <td class="py-3 px-3 font-mono text-slate-300">${r.conviction.toFixed(2)}</td>
      </tr>
    `).join('');
  }
}

// -------------------------------------------------------------
// SUBVIEW 2: DATASET ANALYSIS
// -------------------------------------------------------------
function renderDatasetAnalysis() {
  if (!window.MBA_DATA) return;

  // Weekly Order Volume (Day of Week)
  destroyChart('chart-dow');
  const ctxDow = document.getElementById('chart-dow');
  if (ctxDow) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    chartInstances['chart-dow'] = new Chart(ctxDow, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [{
          label: 'Total Orders',
          data: MBA_DATA.dow_counts,
          backgroundColor: '#38bdf8',
          borderRadius: 6
        }]
      },
      options: {
        ...chartDefaults,
        plugins: { legend: { display: false } }
      }
    });
  }

  // Days Since Prior Order Distribution
  destroyChart('chart-days-since');
  const ctxDays = document.getElementById('chart-days-since');
  if (ctxDays) {
    chartInstances['chart-days-since'] = new Chart(ctxDays, {
      type: 'bar',
      data: {
        labels: MBA_DATA.days_since_prior.map(d => `${d.days}d`),
        datasets: [{
          label: 'Reorder Volume',
          data: MBA_DATA.days_since_prior.map(d => d.count),
          backgroundColor: MBA_DATA.days_since_prior.map(d => [7, 14, 21, 30].includes(d.days) ? '#f59e0b' : '#818cf8'),
          borderRadius: 4
        }]
      },
      options: {
        ...chartDefaults,
        plugins: { legend: { display: false } }
      }
    });
  }
}

// -------------------------------------------------------------
// SUBVIEW 3: PRODUCT INSIGHTS
// -------------------------------------------------------------
function renderProductInsights() {
  if (!window.MBA_DATA) return;

  // Top 20 Most Purchased Products
  destroyChart('chart-top-20-products');
  const ctx20 = document.getElementById('chart-top-20-products');
  if (ctx20) {
    chartInstances['chart-top-20-products'] = new Chart(ctx20, {
      type: 'bar',
      data: {
        labels: MBA_DATA.top_products.map(p => p.name),
        datasets: [{
          label: 'Order Volume',
          data: MBA_DATA.top_products.map(p => p.count),
          backgroundColor: MBA_DATA.top_products.map(p => p.is_organic ? '#10b981' : '#38bdf8'),
          borderRadius: 6
        }]
      },
      options: {
        ...chartDefaults,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: function(context) {
                const item = MBA_DATA.top_products[context.dataIndex];
                return `Organic: ${item.is_organic ? 'Yes' : 'No'}\nReorder Rate: ${item.reorder_pct}%`;
              }
            }
          }
        }
      }
    });
  }

  // Top 15 Aisles
  destroyChart('chart-aisles');
  const ctxAisles = document.getElementById('chart-aisles');
  if (ctxAisles) {
    chartInstances['chart-aisles'] = new Chart(ctxAisles, {
      type: 'bar',
      data: {
        labels: MBA_DATA.aisles.map(a => a.aisle),
        datasets: [{
          label: 'Item Purchases',
          data: MBA_DATA.aisles.map(a => a.count),
          backgroundColor: '#818cf8',
          borderRadius: 6
        }]
      },
      options: {
        ...chartDefaults,
        indexAxis: 'y',
        plugins: { legend: { display: false } }
      }
    });
  }

  // Top Co-occurrence Pairs List
  const pairsContainer = document.getElementById('product-pairs-list');
  if (pairsContainer) {
    pairsContainer.innerHTML = MBA_DATA.product_pairs.map((p, idx) => `
      <div class="p-3 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between text-xs">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0">${idx + 1}</span>
          <span class="text-white font-medium truncate">${p.item1} <span class="text-slate-400 font-normal">+</span> ${p.item2}</span>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <span class="text-slate-300 font-mono">${p.count.toLocaleString()} orders</span>
          <span class="badge-amber px-2 py-0.5 rounded text-[10px] font-bold">Lift: ${p.lift}x</span>
        </div>
      </div>
    `).join('');
  }
}

// -------------------------------------------------------------
// SUBVIEW 4: FREQUENT ITEMSETS
// -------------------------------------------------------------
let activeItemsetsLength = 'all';

function filterItemsetsLength(len) {
  activeItemsetsLength = len;
  ['all', '1', '2', '3'].forEach(k => {
    const btn = document.getElementById(`btn-fi-${k === 'all' ? 'all' : 'len' + k}`);
    if (btn) {
      if (String(len) === k) {
        btn.classList.add('bg-cyan-600', 'text-white');
        btn.classList.remove('bg-white/5', 'text-slate-300');
      } else {
        btn.classList.remove('bg-cyan-600', 'text-white');
        btn.classList.add('bg-white/5', 'text-slate-300');
      }
    }
  });
  renderFrequentItemsetsTable();
}

function renderFrequentItemsets() {
  renderFrequentItemsetsTable();
}

function renderFrequentItemsetsTable() {
  if (!window.MBA_DATA) return;
  const tbody = document.getElementById('itemsets-tbody');
  if (!tbody) return;

  const fi = MBA_DATA.frequent_itemsets;
  let items = [];
  if (activeItemsetsLength === 'all') {
    items = [...fi.len2, ...fi.len3, ...fi.len1];
  } else if (activeItemsetsLength === 1 || activeItemsetsLength === '1') {
    items = fi.len1;
  } else if (activeItemsetsLength === 2 || activeItemsetsLength === '2') {
    items = fi.len2;
  } else if (activeItemsetsLength === 3 || activeItemsetsLength === '3') {
    items = fi.len3;
  }

  tbody.innerHTML = items.map(item => `
    <tr class="hover:bg-white/5 transition-colors">
      <td class="py-2.5 px-3 font-medium text-white flex items-center gap-2">
        <i data-lucide="layers" class="w-3.5 h-3.5 text-teal-400"></i>
        <span>${item.itemsets}</span>
      </td>
      <td class="py-2.5 px-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${item.length === 1 ? 'bg-cyan-500/20 text-cyan-300' : item.length === 2 ? 'bg-indigo-500/20 text-indigo-300' : 'bg-amber-500/20 text-amber-300'}">
          ${item.length} ${item.length === 1 ? 'Item' : 'Items'}
        </span>
      </td>
      <td class="py-2.5 px-3 font-mono text-cyan-300 font-bold">${item.support_pct}%</td>
      <td class="py-2.5 px-3 font-mono text-slate-300">${item.count.toLocaleString()}</td>
    </tr>
  `).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// -------------------------------------------------------------
// SUBVIEW 5: ASSOCIATION RULES & INTERACTIVE SCATTER PLOT
// -------------------------------------------------------------
function renderRulesExplorer() {
  handleRuleFilterChange();
}

function handleRuleFilterChange() {
  if (!window.MBA_DATA) return;

  const minSupp = parseFloat(document.getElementById('filter-support').value);
  const minConf = parseFloat(document.getElementById('filter-confidence').value);
  const minLift = parseFloat(document.getElementById('filter-lift').value);
  const search = document.getElementById('filter-search').value.toLowerCase().trim();

  document.getElementById('val-support').innerText = minSupp.toFixed(3);
  document.getElementById('val-confidence').innerText = minConf.toFixed(2);
  document.getElementById('val-lift').innerText = minLift.toFixed(1);

  const filtered = MBA_DATA.rules.filter(r => {
    return r.support >= minSupp &&
           r.confidence >= minConf &&
           r.lift >= minLift &&
           (search === '' || r.rule_str.toLowerCase().includes(search));
  }).sort((a, b) => b.lift - a.lift);

  const countBadge = document.getElementById('rules-count-badge');
  if (countBadge) countBadge.innerText = filtered.length;

  const tbody = document.getElementById('rules-full-tbody');
  if (tbody) {
    tbody.innerHTML = filtered.map(r => `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="py-2.5 px-3 font-medium text-white">${r.rule_str}</td>
        <td class="py-2.5 px-3 font-mono">${(r.support * 100).toFixed(2)}%</td>
        <td class="py-2.5 px-3 font-mono text-emerald-400 font-bold">${(r.confidence * 100).toFixed(1)}%</td>
        <td class="py-2.5 px-3 font-mono text-amber-400 font-black">${r.lift.toFixed(2)}x</td>
        <td class="py-2.5 px-3 font-mono text-slate-400">${r.leverage.toFixed(4)}</td>
        <td class="py-2.5 px-3 font-mono text-slate-300">${r.conviction.toFixed(2)}</td>
      </tr>
    `).join('');
  }

  // Update Scatter Plot
  renderScatterPlot(filtered);
}

function renderScatterPlot(rules) {
  destroyChart('chart-scatter-rules');
  const ctxScatter = document.getElementById('chart-scatter-rules');
  if (!ctxScatter) return;

  const scatterData = rules.map(r => ({
    x: +(r.support * 100).toFixed(3),
    y: +(r.confidence * 100).toFixed(2),
    lift: +r.lift.toFixed(2),
    rule: r.rule_str
  }));

  chartInstances['chart-scatter-rules'] = new Chart(ctxScatter, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Discovered Rules',
        data: scatterData,
        backgroundColor: scatterData.map(d => d.lift > 10 ? '#f59e0b' : d.lift > 4 ? '#a855f7' : '#38bdf8'),
        pointRadius: scatterData.map(d => Math.min(Math.max(d.lift * 1.2, 4), 10)),
        pointHoverRadius: 8
      }]
    },
    options: {
      ...chartDefaults,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: function(items) {
              const d = scatterData[items[0].dataIndex];
              return d.rule;
            },
            label: function(item) {
              const d = scatterData[item.dataIndex];
              return [
                `Support: ${d.x}%`,
                `Confidence: ${d.y}%`,
                `Lift Multiplier: ${d.lift}x`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Support (%)', color: '#94a3b8' },
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#94a3b8' }
        },
        y: {
          title: { display: true, text: 'Confidence (%)', color: '#94a3b8' },
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#94a3b8' }
        }
      }
    }
  });
}

function downloadRulesCSV() {
  if (!window.MBA_DATA) return;
  const headers = ['Rule', 'Antecedents', 'Consequents', 'Support', 'Confidence', 'Lift', 'Leverage', 'Conviction'];
  const rows = MBA_DATA.rules.map(r => [
    `"${r.rule_str}"`,
    `"${r.antecedents}"`,
    `"${r.consequents}"`,
    r.support,
    r.confidence,
    r.lift,
    r.leverage,
    r.conviction
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'discovered_association_rules_instacart.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  fireConfetti();
}

// -------------------------------------------------------------
// SUBVIEWS 6 & 7: APRIORI & FP-GROWTH ANALYSIS
// -------------------------------------------------------------
function renderAprioriView() {
  // Apriori architecture is populated via static HTML and dynamic data
}

function renderFPGrowthView() {
  // FP-Growth architecture is populated via static HTML and dynamic data
}

// -------------------------------------------------------------
// SUBVIEW 8: ALGORITHM BENCHMARK ARENA
// -------------------------------------------------------------
function renderBenchmarkArena() {
  if (!window.MBA_DATA) return;

  destroyChart('chart-benchmark');
  const ctx = document.getElementById('chart-benchmark');
  if (ctx) {
    const b = MBA_DATA.benchmarks;
    chartInstances['chart-benchmark'] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: b.map(item => item.min_support_pct),
        datasets: [
          {
            label: 'FP-Growth Time (s)',
            data: b.map(item => item.fpgrowth_time_sec),
            backgroundColor: '#10b981',
            borderRadius: 6
          },
          {
            label: 'Apriori Time (s)',
            data: b.map(item => item.apriori_time_sec),
            backgroundColor: '#f59e0b',
            borderRadius: 6
          }
        ]
      },
      options: {
        ...chartDefaults,
        scales: {
          x: { title: { display: true, text: 'Minimum Support Threshold', color: '#94a3b8' } },
          y: { title: { display: true, text: 'Execution Time (Seconds)', color: '#94a3b8' } }
        }
      }
    });
  }

  const tbody = document.getElementById('benchmark-tbody');
  if (tbody) {
    tbody.innerHTML = MBA_DATA.benchmarks.map(item => `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="py-2.5 px-3 font-bold text-white">${item.min_support_pct} (${item.min_support})</td>
        <td class="py-2.5 px-3 font-mono text-emerald-400 font-bold">${item.fpgrowth_time_sec.toFixed(3)}s</td>
        <td class="py-2.5 px-3 font-mono text-amber-400 font-bold">${item.apriori_time_sec.toFixed(3)}s</td>
        <td class="py-2.5 px-3 font-mono text-white">${item.frequent_itemsets}</td>
        <td class="py-2.5 px-3 font-mono text-white">${item.association_rules}</td>
        <td class="py-2.5 px-3 text-emerald-400 font-bold flex items-center gap-1.5">
          <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
          <span>100% Parity</span>
        </td>
      </tr>
    `).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

// -------------------------------------------------------------
// SUBVIEW 9: REPORTS VIEWER
// -------------------------------------------------------------
function showReportTab(tab) {
  const container = document.getElementById('report-content-container');
  const btnMba = document.getElementById('btn-rep-mba');
  const btnInsp = document.getElementById('btn-rep-insp');

  if (tab === 'mba') {
    if (btnMba) {
      btnMba.className = 'btn-3d px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 text-white';
    }
    if (btnInsp) {
      btnInsp.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-slate-300';
    }
    if (container) {
      container.innerHTML = `
        <h2 class="text-base font-bold text-white border-b border-white/10 pb-2 mb-3">Academic Research Report: Association Rule Mining (Track C, Project C2)</h2>
        <p class="text-slate-300 mb-3"><b>Executive Summary:</b> We conducted large-scale market basket association mining on 131,209 authentic customer transactions from the Instacart dataset. Both Apriori and FP-Growth were executed across multiple support thresholds (1.0%, 0.7%, 0.5%, 0.3%).</p>
        <h3 class="text-sm font-bold text-cyan-400 mt-4 mb-2">1. Algorithmic Parity Verification</h3>
        <p class="text-slate-300 mb-2">FP-Growth and Apriori produced 100% identical frequent itemsets and association rules across all benchmarks. At min_support = 0.3%, exactly 950 frequent itemsets and 346 association rules were generated.</p>
        <h3 class="text-sm font-bold text-cyan-400 mt-4 mb-2">2. Top Discovered Business Rules</h3>
        <ul class="list-disc pl-5 space-y-1.5 text-slate-300">
          <li><b>Yellow Bell Pepper &rarr; Orange Bell Pepper:</b> Lift = 20.72x (Confidence: 34.0%). The strongest affinity multiplier in the portfolio.</li>
          <li><b>Lime Sparkling Water &rarr; Grapefruit Seltzer:</b> Lift = 8.70x (Confidence: 25.7%). Multi-flavor beverage cross-sell bundle.</li>
          <li><b>{Organic Raspberries, Organic Hass Avocado} &rarr; Bag of Organic Bananas:</b> Confidence = 52.1% (Lift: 3.83x). Core smoothie breakfast combo.</li>
        </ul>
        <h3 class="text-sm font-bold text-cyan-400 mt-4 mb-2">3. Architectural RAM Optimization</h3>
        <p class="text-slate-300">Standard Apriori attempted 27.1 GiB RAM allocation due to 49,688-dimensional 3D array expansion. We applied downward closure pre-filtering and low_memory iterative chunking, reducing RAM footprint to just 54.87 MB.</p>
      `;
    }
  } else {
    if (btnInsp) {
      btnInsp.className = 'btn-3d px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 text-white';
    }
    if (btnMba) {
      btnMba.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-slate-300';
    }
    if (container) {
      container.innerHTML = `
        <h2 class="text-base font-bold text-white border-b border-white/10 pb-2 mb-3">Dataset Inspection & Referential Integrity Audit (Phase 1)</h2>
        <p class="text-slate-300 mb-3"><b>Overview:</b> Complete audit of Instacart Market Basket Analysis relational CSV tables without modifying original datasets.</p>
        <h3 class="text-sm font-bold text-cyan-400 mt-4 mb-2">1. Primary Dimensions Verified</h3>
        <ul class="list-disc pl-5 space-y-1.5 text-slate-300">
          <li><b>orders.csv:</b> 3,421,083 orders across 206,209 unique customers.</li>
          <li><b>order_products__prior.csv:</b> 32,434,489 historical line items.</li>
          <li><b>order_products__train.csv:</b> 1,384,617 current evaluation items across 131,209 orders.</li>
          <li><b>products.csv:</b> 49,688 unique products across 134 aisles and 21 departments.</li>
        </ul>
        <h3 class="text-sm font-bold text-cyan-400 mt-4 mb-2">2. Missing Values Resolution</h3>
        <p class="text-slate-300">Exactly 206,209 nulls in <code>days_since_prior_order</code>. Verified that every null corresponds to <code>order_number == 1</code> (the user's first order on the platform). Zero orphan foreign keys.</p>
      `;
    }
  }
}

// -------------------------------------------------------------
// SUBVIEW 10: SMART BASKET RECOMMENDER SIMULATOR
// -------------------------------------------------------------
let currentBasket = ['Organic Raspberries', 'Organic Hass Avocado'];

function initBasketSimulator() {
  renderCatalogList();
  renderCurrentBasket();
  evaluateRecommendations();
}

function renderCatalogList() {
  if (!window.MBA_DATA) return;
  const container = document.getElementById('catalog-products-list');
  if (!container) return;

  const search = (document.getElementById('sim-product-search')?.value || '').toLowerCase().trim();
  const products = MBA_DATA.top_products.filter(p => !search || p.name.toLowerCase().includes(search));

  container.innerHTML = products.map(p => {
    const inCart = currentBasket.includes(p.name);
    return `
      <div class="p-2 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between text-xs">
        <span class="text-white truncate">${p.name}</span>
        <button onclick="${inCart ? `removeFromCart('${p.name}')` : `addToCart('${p.name}')`}" 
                class="px-2.5 py-1 rounded-lg text-[10px] font-bold ${inCart ? 'bg-rose-500/20 text-rose-300 hover:bg-rose-500/30' : 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30'} transition-all">
          ${inCart ? 'Remove' : '+ Add'}
        </button>
      </div>
    `;
  }).join('');
}

function filterCatalogProducts() {
  renderCatalogList();
}

function addToCart(item) {
  if (!currentBasket.includes(item)) {
    currentBasket.push(item);
    renderCurrentBasket();
    renderCatalogList();
    evaluateRecommendations();
  }
}

function removeFromCart(item) {
  currentBasket = currentBasket.filter(i => i !== item);
  renderCurrentBasket();
  renderCatalogList();
  evaluateRecommendations();
}

function clearCart() {
  currentBasket = [];
  renderCurrentBasket();
  renderCatalogList();
  evaluateRecommendations();
}

function loadCartPreset(items) {
  currentBasket = [...items];
  renderCurrentBasket();
  renderCatalogList();
  evaluateRecommendations();
}

function renderCurrentBasket() {
  const countElem = document.getElementById('cart-count');
  const container = document.getElementById('cart-items-list');
  if (countElem) countElem.innerText = currentBasket.length;
  if (!container) return;

  if (currentBasket.length === 0) {
    container.innerHTML = '<p class="text-slate-500 text-center py-8 text-xs">Basket is empty. Select products from catalog.</p>';
    return;
  }

  container.innerHTML = currentBasket.map(item => `
    <div class="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between text-xs">
      <div class="flex items-center gap-2">
        <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
        <span class="text-white font-medium">${item}</span>
      </div>
      <button onclick="removeFromCart('${item}')" class="text-slate-400 hover:text-rose-400">
        <i data-lucide="x" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function evaluateRecommendations() {
  const container = document.getElementById('recommendations-list');
  if (!container || !window.MBA_DATA) return;

  if (currentBasket.length === 0) {
    container.innerHTML = '<p class="text-slate-500 text-center py-8 text-xs">Add items to basket to generate real-time AI recommendations.</p>';
    return;
  }

  // Find rules matching current basket antecedents
  const candidateRecs = [];
  MBA_DATA.rules.forEach(rule => {
    // Check if antecedents are in current basket
    const antecedents = rule.antecedents.split(',').map(s => s.trim());
    const match = antecedents.every(a => currentBasket.includes(a));
    const consequent = rule.consequents.trim();

    if (match && !currentBasket.includes(consequent)) {
      candidateRecs.push({
        product: consequent,
        confidence: rule.confidence,
        lift: rule.lift,
        rule_str: rule.rule_str
      });
    }
  });

  // Sort by Lift
  candidateRecs.sort((a, b) => b.lift - a.lift);

  // Deduplicate
  const seen = new Set();
  const uniqueRecs = [];
  for (const r of candidateRecs) {
    if (!seen.has(r.product)) {
      seen.add(r.product);
      uniqueRecs.push(r);
    }
  }

  if (uniqueRecs.length === 0) {
    container.innerHTML = '<p class="text-slate-400 text-center py-8 text-xs">No mined rules triggered for current combination. Try one of the quick presets above.</p>';
    return;
  }

  container.innerHTML = uniqueRecs.slice(0, 4).map(rec => `
    <div class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
      <div>
        <div class="text-white font-bold mb-1">${rec.product}</div>
        <div class="text-[10px] text-slate-300">
          Conversion: <b class="text-emerald-400">${(rec.confidence * 100).toFixed(1)}%</b> • Lift: <b class="text-amber-400">${rec.lift.toFixed(2)}x</b>
        </div>
      </div>
      <button onclick="addToCart('${rec.product}')" class="btn-3d px-3 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20">
        + Add to Cart
      </button>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// DOM Ready Entry Point
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  handleRouting();
});
