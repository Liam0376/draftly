// View-mode override for table/cards views: lets the user pick Table or
// Cards instead of the width-driven default (cards under 640px, table
// above). One global key, root-scoped classes; views call apply + bind
// after each full render. Self-check: `node src/lib/viewMode.js`.

const KEY = 'fh-view-mode';

export const VIEW_MODES = ['auto', 'table', 'cards'];

export function getViewMode() {
  try {
    const v = localStorage.getItem(KEY);
    return VIEW_MODES.includes(v) ? v : 'auto';
  } catch (_) {
    // localStorage unavailable in private mode
    return 'auto';
  }
}

export function setViewMode(mode) {
  const next = VIEW_MODES.includes(mode) ? mode : 'auto';
  try {
    localStorage.setItem(KEY, next);
  } catch (_) {
    // localStorage unavailable in private mode
  }
  return next;
}

export function forceClass(mode) {
  return mode === 'table' ? 'viewmode-table' : mode === 'cards' ? 'viewmode-cards' : '';
}

/** Apply stored mode to a view root. Classes survive partial re-renders
 * (only root.innerHTML replacement clears them, and views re-apply). */
export function applyViewMode(root) {
  if (!root || !root.classList) return 'auto';
  const mode = getViewMode();
  root.classList.remove('viewmode-table', 'viewmode-cards');
  const cls = forceClass(mode);
  if (cls) root.classList.add(cls);
  syncChips(root, mode);
  return mode;
}

function syncChips(root, mode) {
  root.querySelectorAll('[data-viewmode]').forEach((btn) => {
    const active = btn.getAttribute('data-viewmode') === mode;
    btn.classList.toggle('active', active);
  });
}

/** Segmented control markup. Views drop this in their filter row. */
export function viewModeChips() {
  const mode = getViewMode();
  const chip = (m, label) =>
    `<button class="chip${m === mode ? ' active' : ''}" data-viewmode="${m}" title="${m === 'auto' ? 'Follow screen width' : `Always show ${label.toLowerCase()}`}">${label}</button>`;
  return `<span class="kicker">View</span>${chip('auto', 'Auto')}${chip('table', 'Table')}${chip('cards', 'Cards')}`;
}

/** Click handling for chips from viewModeChips(). No re-render needed:
 * both table and cards stay in the DOM, CSS picks. */
export function bindViewMode(root) {
  if (!root) return;
  root.querySelectorAll('[data-viewmode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = setViewMode(btn.getAttribute('data-viewmode'));
      root.classList.remove('viewmode-table', 'viewmode-cards');
      const cls = forceClass(mode);
      if (cls) root.classList.add(cls);
      syncChips(root, mode);
    });
  });
}

// Runnable self-check (node only, inert in the browser).
if (typeof process !== 'undefined' && process.argv[1]
    && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const check = (cond, msg) => { if (!cond) throw new Error(`viewMode: ${msg}`); };
  check(VIEW_MODES.length === 3, 'three modes');
  check(forceClass('auto') === '', 'auto adds no class');
  check(forceClass('table') === 'viewmode-table', 'table maps');
  check(forceClass('cards') === 'viewmode-cards', 'cards maps');
  check(forceClass('bogus') === '', 'unknown falls back to auto');
  const fakeBtns = [];
  const fakeRoot = {
    classList: { _s: new Set(), remove(...c) { c.forEach((x) => this._s.delete(x)); }, add(c) { this._s.add(c); } },
    querySelectorAll() { return fakeBtns; },
  };
  check(applyViewMode(null) === 'auto', 'null root safe');
  check(applyViewMode(fakeRoot) === 'auto', 'no storage in node defaults auto');
  check(!fakeRoot.classList._s.size, 'auto leaves no class');
  const html = viewModeChips();
  check(html.includes('data-viewmode="auto"') && html.includes('data-viewmode="table"')
    && html.includes('data-viewmode="cards"'), 'chips cover all modes');
  bindViewMode(null);
  console.log('viewMode self-check ok');
}
