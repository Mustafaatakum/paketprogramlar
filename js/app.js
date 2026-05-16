// ===== THEME MANAGEMENT =====
(function initTheme() {
  const saved = localStorage.getItem('ofis-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === saved);
  });
})();

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = btn.dataset.theme;
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('ofis-theme', t);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== DIFFICULTY HELPERS =====
function diffLabel(n) {
  if (n <= 30) return { label: `${n} — Kolay`, cls: 'diff-easy' };
  if (n <= 60) return { label: `${n} — Orta`, cls: 'diff-medium' };
  return { label: `${n} — Zor`, cls: 'diff-hard' };
}
function diffColor(n) {
  if (n <= 30) return '#3ddc97';
  if (n <= 60) return '#ff9f43';
  return '#ff5c7a';
}

// ===== BUILD SIDEBAR =====
const nav = document.getElementById('unitNav');
let activeItem = null;

UNITS.forEach((unit, ui) => {
  const group = document.createElement('div');
  group.className = 'unit-group';
  if (ui === 0) group.classList.add('open');

  const header = document.createElement('div');
  header.className = 'unit-header';
  header.innerHTML = `
    <span class="unit-arrow">▶</span>
    <span class="unit-dot" style="background:${unit.color}"></span>
    <span class="unit-name">${unit.name}</span>
    <span class="unit-count">${unit.examples.length}</span>
  `;
  header.addEventListener('click', () => group.classList.toggle('open'));

  const list = document.createElement('div');
  list.className = 'examples-list';

  unit.examples.forEach(ex => {
    const item = document.createElement('div');
    item.className = 'example-item';
    item.dataset.unitId = unit.id;
    item.dataset.exId = ex.id;

    const dClr = diffColor(ex.diff);
    item.innerHTML = `
      <div class="ex-name-wrap">
        <span class="ex-name">${ex.name}</span>
        <span class="ex-slug">${ex.slug}</span>
      </div>
      <span class="diff-dot" style="color:${dClr}">${ex.diff}</span>
    `;
    item.addEventListener('click', () => selectExample(unit, ex, item));
    list.appendChild(item);
  });

  group.appendChild(header);
  group.appendChild(list);
  nav.appendChild(group);
});

// ===== SELECT EXAMPLE =====
function selectExample(unit, ex, itemEl) {
  if (activeItem) activeItem.classList.remove('active');
  itemEl.classList.add('active');
  activeItem = itemEl;

  document.getElementById('welcomeScreen').classList.add('hidden');
  const screen = document.getElementById('exampleScreen');
  screen.classList.remove('hidden');
  // trigger reflow for animation
  screen.style.animation = 'none';
  screen.offsetHeight;
  screen.style.animation = '';

  // Breadcrumb
  document.getElementById('breadcrumb').innerHTML =
    `OFİS / <span>${unit.name.split('(')[0].trim()}</span> / ${ex.name}`;

  // Icon
  const iconWrap = document.getElementById('exIcon');
  iconWrap.style.background = unit.bg;
  iconWrap.textContent = unit.icon;
  iconWrap.style.fontFamily = "'Syne',sans-serif";
  iconWrap.style.fontWeight = '800';
  iconWrap.style.fontSize = '1.6rem';
  iconWrap.style.color = unit.color;

  // Title
  document.getElementById('exTitle').textContent = ex.name;

  // Code + Difficulty
  const d = diffLabel(ex.diff);
  document.getElementById('exCode').textContent = ex.slug;
  const diffEl = document.getElementById('exDiff');
  diffEl.textContent = d.label;
  diffEl.className = `difficulty-badge ${d.cls}`;

  // Unit tag
  document.getElementById('exUnit').innerHTML =
    `<span class="unit-tag" style="border-color:${unit.color};color:${unit.color};background:${unit.bg}">● ${unit.name}</span>`;

  // Files
  const grid = document.getElementById('filesGrid');
  grid.innerHTML = '';
  const files = getFilesForExample(unit, ex.slug);
  files.forEach(f => {
    const card = document.createElement('a');
    card.className = `file-card${f.highlight ? ' highlight' : ''}`;
    card.href = f.href;
    card.target = '_blank';
    // PDF opens in browser, others download
    if (!f.href.endsWith('.pdf')) card.download = '';
    card.innerHTML = `
      <div class="file-card-icon" style="background:${f.bg};">${f.icon}</div>
      <div class="file-card-name">${f.label}</div>
      <div class="file-card-desc">${f.desc}</div>
      <span class="file-ext-tag ${f.extClass}">.${f.ext}</span>
    `;
    grid.appendChild(card);
  });
}

// ===== SEARCH =====
const searchInput = document.getElementById('searchInput');
let searchBox = null;

function buildSearchBox() {
  if (searchBox) return;
  searchBox = document.createElement('div');
  searchBox.className = 'search-results';
  document.body.appendChild(searchBox);
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  buildSearchBox();
  if (!q) { searchBox.classList.remove('show'); return; }

  const results = [];
  UNITS.forEach(unit => {
    unit.examples.forEach(ex => {
      if (ex.name.toLowerCase().includes(q) || ex.slug.includes(q)) {
        results.push({ unit, ex });
      }
    });
  });

  searchBox.innerHTML = '';
  if (!results.length) {
    searchBox.innerHTML = '<div class="search-item"><span class="search-item-name" style="color:var(--text3)">Sonuç bulunamadı</span></div>';
  } else {
    results.slice(0, 10).forEach(({ unit, ex }) => {
      const item = document.createElement('div');
      item.className = 'search-item';
      item.innerHTML = `<div class="search-item-name">${ex.name}</div><div class="search-item-unit">${unit.name}</div>`;
      item.addEventListener('click', () => {
        searchBox.classList.remove('show');
        searchInput.value = '';
        // open unit group and select
        const unitGroup = [...document.querySelectorAll('.unit-group')].find(g => {
          const countEl = g.querySelector('.unit-count');
          return countEl && countEl.textContent == unit.examples.length;
        });
        if (unitGroup) unitGroup.classList.add('open');
        setTimeout(() => {
          const itemEl = document.querySelector(`[data-ex-id="${ex.id}"]`);
          if (itemEl) { itemEl.scrollIntoView({ behavior:'smooth', block:'center' }); selectExample(unit, ex, itemEl); }
        }, 50);
      });
      searchBox.appendChild(item);
    });
  }
  searchBox.classList.add('show');
});

document.addEventListener('click', e => {
  if (searchBox && !searchInput.contains(e.target) && !searchBox.contains(e.target)) {
    searchBox.classList.remove('show');
  }
});
