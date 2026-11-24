/**
 * BasketIQ - Live Custom Dataset Uploader & Real-Time Rule Mining Engine
 * Evaluator Sandbox: Supports drag-and-drop CSV upload and built-in benchmark datasets
 */

// -------------------------------------------------------------
// 1. Built-in Benchmark Transaction Presets
// -------------------------------------------------------------
const MINER_PRESETS = {
  groceries: [
    ["citrus fruit", "semi-finished bread", "margarine", "ready soups"],
    ["tropical fruit", "yogurt", "coffee"],
    ["whole milk"],
    ["pip fruit", "yogurt", "cream cheese", "meat spreads"],
    ["other vegetables", "whole milk", "condensed milk", "long life bakery product"],
    ["whole milk", "butter", "yogurt", "rice", "abrasive cleaner"],
    ["rolls/buns"],
    ["other vegetables", "UHT-milk", "rolls/buns", "bottled beer", "liquor (bottled)"],
    ["pot plants"],
    ["whole milk", "cereals"],
    ["tropical fruit", "other vegetables", "white bread", "bottled water", "chocolate"],
    ["citrus fruit", "tropical fruit", "whole milk", "butter", "curd", "yogurt", "flour", "bottled water", "dishes"],
    ["frankfurter", "rolls/buns", "soda"],
    ["chicken", "tropical fruit"],
    ["butter", "sugar", "fruit/vegetable juice", "newspapers"],
    ["fruit/vegetable juice"],
    ["packaged fruit/vegetables"],
    ["chocolate"],
    ["specialty bar"],
    ["other vegetables"],
    ["butter milk", "pastry"],
    ["whole milk"],
    ["tropical fruit", "cream cheese", "processed cheese", "detergent", "newspapers"],
    ["tropical fruit", "root vegetables", "other vegetables", "whole milk", "frozen dessert", "rolls/buns", "flour", "sweet spreads", "salty snack", "waffles", "candy", "bathroom cleaner"],
    ["bottled water", "canned beer"],
    ["yogurt"],
    ["sausage", "rolls/buns", "soda", "canned beer"],
    ["rolls/buns", "soda"],
    ["whole milk", "yogurt", "beverages"],
    ["fruit/vegetable juice", "bottled water", "soda"],
    ["pastry", "soda"],
    ["frankfurter", "beef", "potatoes", "other vegetables", "whole milk", "frozen meals", "frozen vegetables", "rolls/buns", "soda"],
    ["berries", "curd"],
    ["whole milk", "rolls/buns", "soda"],
    ["root vegetables", "other vegetables", "whole milk", "curd", "yogurt", "cream cheese", "roll products", "margarine", "sugar", "sweet spreads", "canned fish"],
    ["rolls/buns", "pastry", "bottled water", "soda"],
    ["rolls/buns", "margarine"],
    ["sausage", "rolls/buns", "curd", "yogurt", "pastry"],
    ["whole milk", "butter", "rolls/buns", "pastry", "soda"],
    ["whole milk", "pastry"],
    ["sausage", "beef", "other vegetables", "whole milk", "rolls/buns", "pastry"],
    ["whole milk", "pastry", "sugar", "bottled water"],
    ["fruit/vegetable juice", "long life bakery product", "waffles"],
    ["whole milk", "rolls/buns", "pastry"],
    ["citrus fruit", "tropical fruit", "pip fruit", "other vegetables", "whole milk", "curd", "yogurt", "margarine", "pasta", "fruit/vegetable juice", "bottled water", "soda"],
    ["frankfurter", "rolls/buns", "brown bread", "bottled water", "soda"],
    ["citrus fruit", "tropical fruit", "pip fruit", "beef", "other vegetables", "whole milk", "rolls/buns", "bottled water"],
    ["frankfurter", "sausage", "other vegetables", "whole milk", "rolls/buns", "brown bread"],
    ["sausage", "whole milk", "yogurt", "rolls/buns"],
    ["citrus fruit", "other vegetables", "whole milk", "butter", "curd", "rolls/buns", "bottled water"],
    ["other vegetables", "whole milk", "butter", "domestic eggs", "brown bread"],
    ["tropical fruit", "whole milk", "pastry"],
    ["sausage", "whole milk", "rolls/buns", "soda"],
    ["other vegetables", "whole milk", "frozen meals", "rolls/buns", "brown bread", "fruit/vegetable juice", "napkins"],
    ["whole milk", "yogurt", "frozen vegetables", "pastry", "fruit/vegetable juice", "waffles"],
    ["pork", "root vegetables", "other vegetables", "whole milk", "roll products", "bottled beer"],
    ["citrus fruit", "root vegetables", "other vegetables", "whole milk", "butter", "rolls/buns", "flour", "bottled water"],
    ["whole milk", "yogurt", "rolls/buns", "brown bread", "soda"],
    ["tropical fruit", "pip fruit", "other vegetables", "whole milk", "rolls/buns", "bottled water", "soda"],
    ["pip fruit", "other vegetables", "whole milk", "butter", "curd", "yogurt", "rolls/buns", "bottled water"],
    ["sausage", "other vegetables", "whole milk", "rolls/buns", "bottled water"],
    ["other vegetables", "whole milk", "curd", "yogurt", "whipped/sour cream", "rolls/buns", "soda"],
    ["whole milk", "rolls/buns", "bottled water", "soda"],
    ["other vegetables", "whole milk", "curd", "yogurt", "rolls/buns"],
    ["citrus fruit", "tropical fruit", "whole milk", "yogurt", "rolls/buns", "soda"],
    ["sausage", "rolls/buns", "soda"],
    ["whole milk", "rolls/buns", "soda"],
    ["sausage", "whole milk", "rolls/buns"],
    ["whole milk", "rolls/buns", "pastry"],
    ["other vegetables", "whole milk", "rolls/buns", "soda"],
    ["tropical fruit", "other vegetables", "whole milk", "rolls/buns", "soda"],
    ["whole milk", "curd", "yogurt", "rolls/buns", "bottled water"],
    ["citrus fruit", "other vegetables", "whole milk", "rolls/buns"],
    ["tropical fruit", "whole milk", "rolls/buns", "soda"],
    ["whole milk", "yogurt", "rolls/buns", "soda"]
  ],

  bakery: [
    ["Coffee", "Bread"],
    ["Coffee", "Pastry", "Bread"],
    ["Tea", "Coffee", "Cake"],
    ["Bread", "Butter", "Jam"],
    ["Coffee", "Croissant"],
    ["Coffee", "Croissant", "Bread"],
    ["Tea", "Sandwich"],
    ["Coffee", "Sandwich"],
    ["Coffee", "Pastry"],
    ["Bread", "Pastry"],
    ["Coffee", "Cake"],
    ["Tea", "Cake", "Bread"],
    ["Coffee", "Cookies"],
    ["Coffee", "Muffin", "Juice"],
    ["Bread", "Baguette", "Butter"],
    ["Coffee", "Bread", "Croissant"],
    ["Tea", "Muffin"],
    ["Coffee", "Hot Chocolate", "Cookies"],
    ["Coffee", "Sandwich", "Cake"],
    ["Tea", "Bread", "Pastry"],
    ["Coffee", "Baguette", "Cheese"],
    ["Coffee", "Toast", "Jam"],
    ["Coffee", "Pastry", "Croissant"],
    ["Coffee", "Tea", "Cake", "Bread"],
    ["Coffee", "Croissant", "Hot Chocolate"],
    ["Sandwich", "Juice", "Cookies"],
    ["Coffee", "Pastry", "Muffin"],
    ["Bread", "Coffee", "Cake"],
    ["Tea", "Croissant", "Pastry"],
    ["Coffee", "Bread", "Sandwich"]
  ],

  tech: [
    ["Gaming Laptop", "Wireless Mouse", "Laptop Stand"],
    ["Wireless Mouse", "Mechanical Keyboard", "Mouse Pad"],
    ["Mechanical Keyboard", "USB-C Hub", "4K Monitor"],
    ["4K Monitor", "HDMI Cable", "Laptop Stand"],
    ["Gaming Laptop", "4K Monitor", "HDMI Cable"],
    ["Wireless Mouse", "USB-C Hub"],
    ["Noise Cancelling Headphones", "Webcam 1080p", "USB Microphone"],
    ["Gaming Laptop", "Noise Cancelling Headphones"],
    ["Webcam 1080p", "Ring Light", "USB Microphone"],
    ["USB-C Hub", "HDMI Cable", "Wireless Mouse"],
    ["Mechanical Keyboard", "Wireless Mouse", "USB-C Hub"],
    ["Gaming Laptop", "Mechanical Keyboard", "Wireless Mouse", "Mouse Pad"],
    ["4K Monitor", "Desk Mat", "HDMI Cable"],
    ["Wireless Mouse", "Keyboard Wrist Rest", "Mechanical Keyboard"],
    ["Laptop Stand", "Wireless Mouse", "Mechanical Keyboard", "USB-C Hub"],
    ["USB-C Hub", "External SSD 1TB", "HDMI Cable"],
    ["Gaming Laptop", "External SSD 1TB", "Wireless Mouse"],
    ["Noise Cancelling Headphones", "Wireless Earbuds"],
    ["Webcam 1080p", "USB-C Hub", "Laptop Stand"],
    ["Gaming Laptop", "4K Monitor", "Mechanical Keyboard", "Wireless Mouse"]
  ]
};

// -------------------------------------------------------------
// 2. State & Miner Configuration
// -------------------------------------------------------------
let loadedTransactions = [];
let currentDatasetName = "Kaggle Groceries Benchmark (Sample)";
let customMiningResults = null;

// -------------------------------------------------------------
// 3. Universal CSV Parser
// -------------------------------------------------------------
function parseTransactionsCSV(csvText) {
  const lines = csvText.trim().split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];

  // Check if first line contains column headers (e.g. "order_id,product" or "InvoiceNo,Description")
  const firstLine = lines[0].toLowerCase();
  const isHeaderRow = firstLine.includes("order") || firstLine.includes("invoice") || firstLine.includes("product") || firstLine.includes("item") || firstLine.includes("description");

  if (isHeaderRow && lines.length > 1) {
    // Relational CSV format (Group items by Order/Invoice ID)
    const delimiter = firstLine.includes(";") ? ";" : firstLine.includes("\t") ? "\t" : ",";
    const headers = lines[0].split(delimiter).map(h => h.trim().toLowerCase().replace(/["']/g, ''));
    
    // Find ID column index and Item column index
    let idIdx = headers.findIndex(h => h.includes("order") || h.includes("invoice") || h.includes("basket") || h.includes("trans"));
    let itemIdx = headers.findIndex(h => h.includes("product") || h.includes("item") || h.includes("desc") || h.includes("name"));

    if (idIdx === -1) idIdx = 0;
    if (itemIdx === -1) itemIdx = Math.min(1, headers.length - 1);

    const basketMap = new Map();
    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split(delimiter).map(p => p.trim().replace(/^["']|["']$/g, ''));
      if (parts.length > Math.max(idIdx, itemIdx)) {
        const orderId = parts[idIdx];
        const item = parts[itemIdx];
        if (orderId && item) {
          if (!basketMap.has(orderId)) {
            basketMap.set(orderId, []);
          }
          if (!basketMap.get(orderId).includes(item)) {
            basketMap.get(orderId).push(item);
          }
        }
      }
    }
    return Array.from(basketMap.values()).filter(b => b.length > 0);
  } else {
    // Comma-separated or semicolon-separated items per row
    const delimiter = lines[0].includes(";") ? ";" : ",";
    const transactions = [];
    for (let i = (isHeaderRow ? 1 : 0); i < lines.length; i++) {
      const items = lines[i].split(delimiter)
        .map(item => item.trim().replace(/^["']|["']$/g, ''))
        .filter(item => item.length > 0);
      
      // Deduplicate within the same basket
      const uniqueItems = Array.from(new Set(items));
      if (uniqueItems.length > 0) {
        transactions.push(uniqueItems);
      }
    }
    return transactions;
  }
}

// -------------------------------------------------------------
// 4. In-Browser Apriori & Rule Mining Algorithm
// -------------------------------------------------------------
function executeAprioriMining(transactions, minSupport, minConfidence, minLift) {
  const t0 = performance.now();
  const N = transactions.length;
  if (N === 0) return { itemsets: [], rules: [], timeMs: 0, totalItems: 0 };

  // 1. Single Item Frequencies (L1)
  const itemCounts = new Map();
  transactions.forEach(t => {
    t.forEach(item => {
      itemCounts.set(item, (itemCounts.get(item) || 0) + 1);
    });
  });

  const minCount = Math.max(1, Math.ceil(minSupport * N));
  const frequent1 = [];
  const frequent1Map = new Map();

  itemCounts.forEach((count, item) => {
    if (count >= minCount) {
      const supp = count / N;
      frequent1.push({ itemsets: [item], count, support: supp, length: 1 });
      frequent1Map.set(item, supp);
    }
  });

  // Sort by support descending
  frequent1.sort((a, b) => b.support - a.support);

  // 2. Candidate Pairs (L2) using Downward Closure
  const pairCounts = new Map();
  const frequent1Items = frequent1.map(f => f.itemsets[0]);
  const frequent1Set = new Set(frequent1Items);

  transactions.forEach(t => {
    // Filter transaction to only frequent 1-items to avoid dense combinatorial explosion
    const filtered = t.filter(item => frequent1Set.has(item)).sort();
    const len = filtered.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const pairKey = `${filtered[i]}|||${filtered[j]}`;
        pairCounts.set(pairKey, (pairCounts.get(pairKey) || 0) + 1);
      }
    }
  });

  const frequent2 = [];
  pairCounts.forEach((count, key) => {
    if (count >= minCount) {
      const items = key.split('|||');
      frequent2.push({ itemsets: items, count, support: count / N, length: 2 });
    }
  });

  // 3. Candidate Triplets (L3)
  const tripletCounts = new Map();
  const frequent2KeySet = new Set(frequent2.map(f => `${f.itemsets[0]}|||${f.itemsets[1]}`));

  transactions.forEach(t => {
    const filtered = t.filter(item => frequent1Set.has(item)).sort();
    const len = filtered.length;
    if (len >= 3) {
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          if (!frequent2KeySet.has(`${filtered[i]}|||${filtered[j]}`)) continue;
          for (let k = j + 1; k < len; k++) {
            if (frequent2KeySet.has(`${filtered[i]}|||${filtered[k]}`) &&
                frequent2KeySet.has(`${filtered[j]}|||${filtered[k]}`)) {
              const tripKey = `${filtered[i]}|||${filtered[j]}|||${filtered[k]}`;
              tripletCounts.set(tripKey, (tripletCounts.get(tripKey) || 0) + 1);
            }
          }
        }
      }
    }
  });

  const frequent3 = [];
  tripletCounts.forEach((count, key) => {
    if (count >= minCount) {
      const items = key.split('|||');
      frequent3.push({ itemsets: items, count, support: count / N, length: 3 });
    }
  });

  const allFrequentItemsets = [...frequent1, ...frequent2, ...frequent3];

  // 4. Generate Association Rules from Pairs & Triplets
  const rules = [];

  // From Pairs: A -> B and B -> A
  frequent2.forEach(f => {
    const [itemA, itemB] = f.itemsets;
    const suppAB = f.support;
    const suppA = frequent1Map.get(itemA) || 0.0001;
    const suppB = frequent1Map.get(itemB) || 0.0001;

    // Rule 1: A -> B
    const confAB = suppAB / suppA;
    const liftAB = confAB / suppB;
    if (confAB >= minConfidence && liftAB >= minLift) {
      rules.push({
        antecedents: itemA,
        consequents: itemB,
        rule_str: `${itemA} -> ${itemB}`,
        support: suppAB,
        confidence: confAB,
        lift: liftAB,
        leverage: suppAB - (suppA * suppB)
      });
    }

    // Rule 2: B -> A
    const confBA = suppAB / suppB;
    const liftBA = confBA / suppA;
    if (confBA >= minConfidence && liftBA >= minLift) {
      rules.push({
        antecedents: itemB,
        consequents: itemA,
        rule_str: `${itemB} -> ${itemA}`,
        support: suppAB,
        confidence: confBA,
        lift: liftBA,
        leverage: suppAB - (suppA * suppB)
      });
    }
  });

  // From Triplets: {A, B} -> C, {A, C} -> B, {B, C} -> A
  frequent3.forEach(f => {
    const [A, B, C] = f.itemsets;
    const suppABC = f.support;

    const testPairs = [
      { ant: `${A}, ${B}`, con: C, pairKey: `${A}|||${B}`, conItem: C },
      { ant: `${A}, ${C}`, con: B, pairKey: `${A}|||${C}`, conItem: B },
      { ant: `${B}, ${C}`, con: A, pairKey: `${B}|||${C}`, conItem: A }
    ];

    testPairs.forEach(tp => {
      const pairFreq = frequent2.find(p => p.itemsets[0] === tp.pairKey.split('|||')[0] && p.itemsets[1] === tp.pairKey.split('|||')[1]);
      if (pairFreq) {
        const suppPair = pairFreq.support;
        const suppCon = frequent1Map.get(tp.conItem) || 0.0001;
        const conf = suppABC / suppPair;
        const lift = conf / suppCon;
        if (conf >= minConfidence && lift >= minLift) {
          rules.push({
            antecedents: tp.ant,
            consequents: tp.con,
            rule_str: `{${tp.ant}} -> ${tp.con}`,
            support: suppABC,
            confidence: conf,
            lift: lift,
            leverage: suppABC - (suppPair * suppCon)
          });
        }
      }
    });
  });

  // Sort rules by Lift descending
  rules.sort((a, b) => b.lift - a.lift);

  const t1 = performance.now();
  return {
    itemsets: allFrequentItemsets,
    rules: rules,
    timeMs: Math.round((t1 - t0) * 10) / 10,
    totalTransactions: N,
    totalUniqueItems: itemCounts.size,
    topItems: frequent1.slice(0, 10)
  };
}

// -------------------------------------------------------------
// 5. User Interaction & Handlers
// -------------------------------------------------------------
function selectPresetDataset(presetName) {
  if (MINER_PRESETS[presetName]) {
    loadedTransactions = MINER_PRESETS[presetName];
    currentDatasetName = presetName === 'groceries' ? 'Kaggle Groceries Benchmark' :
                         presetName === 'bakery' ? 'European Bakery Transactions' :
                         'Tech & Electronics Retail Baskets';
    
    // Update badge & buttons
    ['groceries', 'bakery', 'tech'].forEach(name => {
      const btn = document.getElementById(`btn-preset-${name}`);
      if (btn) {
        if (name === presetName) {
          btn.classList.add('bg-cyan-600', 'text-white', 'border-cyan-400');
          btn.classList.remove('bg-white/5', 'text-slate-300');
        } else {
          btn.classList.remove('bg-cyan-600', 'text-white', 'border-cyan-400');
          btn.classList.add('bg-white/5', 'text-slate-300');
        }
      }
    });

    const datasetLabel = document.getElementById('miner-dataset-name');
    if (datasetLabel) datasetLabel.innerText = `${currentDatasetName} (${loadedTransactions.length} Baskets)`;

    runCustomMining();
  }
}

function handleCustomCSVUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    const parsed = parseTransactionsCSV(text);
    if (parsed.length === 0) {
      alert("Could not parse transactions from this file. Please verify CSV has comma-separated items per line or order_id/product_name columns.");
      return;
    }

    loadedTransactions = parsed;
    currentDatasetName = file.name;

    const datasetLabel = document.getElementById('miner-dataset-name');
    if (datasetLabel) datasetLabel.innerText = `${file.name} (${loadedTransactions.length.toLocaleString()} Transactions)`;

    // Unselect presets
    ['groceries', 'bakery', 'tech'].forEach(name => {
      const btn = document.getElementById(`btn-preset-${name}`);
      if (btn) {
        btn.classList.remove('bg-cyan-600', 'text-white', 'border-cyan-400');
        btn.classList.add('bg-white/5', 'text-slate-300');
      }
    });

    fireConfetti();
    runCustomMining();
  };
  reader.readAsText(file);
}

function runCustomMining() {
  if (loadedTransactions.length === 0) {
    // Default to Groceries benchmark
    selectPresetDataset('groceries');
    return;
  }

  const minSupp = parseFloat(document.getElementById('miner-support')?.value || 0.02);
  const minConf = parseFloat(document.getElementById('miner-confidence')?.value || 0.20);
  const minLift = parseFloat(document.getElementById('miner-lift')?.value || 1.0);

  // Update slider labels
  const suppVal = document.getElementById('val-miner-support');
  const confVal = document.getElementById('val-miner-confidence');
  const liftVal = document.getElementById('val-miner-lift');
  if (suppVal) suppVal.innerText = (minSupp * 100).toFixed(1) + '%';
  if (confVal) confVal.innerText = (minConf * 100).toFixed(0) + '%';
  if (liftVal) liftVal.innerText = minLift.toFixed(1) + 'x';

  customMiningResults = executeAprioriMining(loadedTransactions, minSupp, minConf, minLift);
  renderCustomMiningResults();
}

function renderCustomMiningResults() {
  if (!customMiningResults) return;

  const res = customMiningResults;

  // Update Metric Badges
  const kpiOrders = document.getElementById('miner-kpi-orders');
  const kpiItems = document.getElementById('miner-kpi-items');
  const kpiItemsets = document.getElementById('miner-kpi-itemsets');
  const kpiRules = document.getElementById('miner-kpi-rules');
  const kpiTime = document.getElementById('miner-kpi-time');

  if (kpiOrders) kpiOrders.innerText = res.totalTransactions.toLocaleString();
  if (kpiItems) kpiItems.innerText = res.totalUniqueItems.toLocaleString();
  if (kpiItemsets) kpiItemsets.innerText = res.itemsets.length.toLocaleString();
  if (kpiRules) kpiRules.innerText = res.rules.length.toLocaleString();
  if (kpiTime) kpiTime.innerText = res.timeMs + ' ms';

  // Render Top Items Horizontal Bar Chart
  destroyChart('chart-miner-top-items');
  const ctxItems = document.getElementById('chart-miner-top-items');
  if (ctxItems && res.topItems.length > 0) {
    chartInstances['chart-miner-top-items'] = new Chart(ctxItems, {
      type: 'bar',
      data: {
        labels: res.topItems.map(i => i.itemsets[0]),
        datasets: [{
          label: 'Frequency Count',
          data: res.topItems.map(i => i.count),
          backgroundColor: '#38bdf8',
          borderRadius: 6
        }]
      },
      options: {
        ...chartDefaults,
        indexAxis: 'y',
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // Render Support vs Confidence Scatter Plot
  destroyChart('chart-miner-scatter');
  const ctxScatter = document.getElementById('chart-miner-scatter');
  if (ctxScatter && res.rules.length > 0) {
    const scatterData = res.rules.map(r => ({
      x: +(r.support * 100).toFixed(2),
      y: +(r.confidence * 100).toFixed(2),
      lift: +r.lift.toFixed(2),
      rule: r.rule_str
    }));

    chartInstances['chart-miner-scatter'] = new Chart(ctxScatter, {
      type: 'scatter',
      data: {
        datasets: [{
          data: scatterData,
          backgroundColor: scatterData.map(d => d.lift > 3 ? '#f59e0b' : d.lift > 1.5 ? '#a855f7' : '#10b981'),
          pointRadius: scatterData.map(d => Math.min(Math.max(d.lift * 2, 4), 10))
        }]
      },
      options: {
        ...chartDefaults,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: function(items) {
                return scatterData[items[0].dataIndex].rule;
              },
              label: function(item) {
                const d = scatterData[item.dataIndex];
                return [`Support: ${d.x}%`, `Confidence: ${d.y}%`, `Lift: ${d.lift}x`];
              }
            }
          }
        },
        scales: {
          x: { title: { display: true, text: 'Support (%)', color: '#94a3b8' } },
          y: { title: { display: true, text: 'Confidence (%)', color: '#94a3b8' } }
        }
      }
    });
  }

  // Populate Mined Rules Table
  const tbody = document.getElementById('miner-rules-tbody');
  const emptyState = document.getElementById('miner-empty-state');
  if (tbody) {
    if (res.rules.length === 0) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      tbody.innerHTML = res.rules.map((r, idx) => `
        <tr class="hover:bg-white/5 transition-colors">
          <td class="py-2.5 px-3 font-mono text-slate-400">${idx + 1}</td>
          <td class="py-2.5 px-3 font-medium text-white">${r.rule_str}</td>
          <td class="py-2.5 px-3 font-mono text-cyan-300">${(r.support * 100).toFixed(2)}%</td>
          <td class="py-2.5 px-3 font-mono text-emerald-400 font-bold">${(r.confidence * 100).toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono text-amber-400 font-black">${r.lift.toFixed(2)}x</td>
          <td class="py-2.5 px-3 font-mono text-slate-400">${r.leverage.toFixed(4)}</td>
        </tr>
      `).join('');
    }
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function exportCustomRulesCSV() {
  if (!customMiningResults || customMiningResults.rules.length === 0) {
    alert("No association rules to export. Please run mining on a dataset first.");
    return;
  }

  const headers = ['Rule', 'Antecedents', 'Consequents', 'Support', 'Confidence', 'Lift', 'Leverage'];
  const rows = customMiningResults.rules.map(r => [
    `"${r.rule_str}"`,
    `"${r.antecedents}"`,
    `"${r.consequents}"`,
    r.support.toFixed(6),
    r.confidence.toFixed(6),
    r.lift.toFixed(4),
    r.leverage.toFixed(6)
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `mined_rules_${currentDatasetName.toLowerCase().replace(/[^a-z0-9]/g, '_')}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  fireConfetti();
}

// Initialize default dataset when miner view opens
function initMinerView() {
  if (loadedTransactions.length === 0) {
    selectPresetDataset('groceries');
  } else {
    runCustomMining();
  }
}

