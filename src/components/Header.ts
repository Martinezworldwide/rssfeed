import { store } from '@/store/appStore';
import { anim } from '@/utils/animations';

// Top header bar with search and actions
export class Header {
  private el: HTMLElement;

  constructor() {
    this.el = document.createElement('header');
    this.el.className = 'header';
    this.el.id = 'header';
  }

  render(): HTMLElement {
    const state = store.getState();
    const progress = store.getLoadProgress();
    const progressPct =
      progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

    this.el.innerHTML = `
      <div class="header__left">
        <h1 class="header__title" id="header-title">Command Center</h1>
        <span class="header__subtitle" id="header-subtitle">Real-time intelligence from 12+ sources</span>
      </div>

      <div class="header__center">
        <div class="header__search">
          <span class="header__search-icon">⌕</span>
          <input
            type="search"
            class="header__search-input"
            id="search-input"
            placeholder="Search articles across all feeds…"
            value="${state.searchQuery}"
            autocomplete="off"
          />
        </div>
      </div>

      <div class="header__right">
        <button class="header__btn" id="refresh-btn" title="Refresh all feeds">
          <span class="header__btn-icon ${store.isLoading() ? 'header__btn-icon--spin' : ''}">↻</span>
          <span>Sync</span>
        </button>
        <div class="header__clock" id="header-clock"></div>
      </div>

      <div class="header__progress ${store.isLoading() ? 'header__progress--visible' : ''}" id="header-progress">
        <div class="header__progress-bar" id="header-progress-bar" style="width: ${progressPct}%"></div>
      </div>
      <div class="header__scanline"></div>
    `;

    this.bindEvents();
    this.startClock();
    return this.el;
  }

  private bindEvents(): void {
    const searchInput = this.el.querySelector<HTMLInputElement>('#search-input');
    let debounceTimer: ReturnType<typeof setTimeout>;

    searchInput?.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        store.setSearchQuery(searchInput.value);
      }, 250);
    });

    const refreshBtn = this.el.querySelector('#refresh-btn');
    refreshBtn?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('rss:refresh'));
    });
  }

  private startClock(): void {
    const clockEl = this.el.querySelector('#header-clock');
    if (!clockEl) return;

    const update = () => {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
    };
    update();
    setInterval(update, 1000);
  }

  update(): void {
    const state = store.getState();
    const progress = store.getLoadProgress();
    const progressPct =
      progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

    // Update title based on current view
    const titles: Record<string, { title: string; subtitle: string }> = {
      dashboard: { title: 'Command Center', subtitle: 'Real-time intelligence from 12+ sources' },
      reader: { title: 'Feed Reader', subtitle: `${store.getFilteredItems().length} articles in stream` },
      'extremism-monitor': { title: 'Threat Watch', subtitle: 'Cybersecurity extremism monitor — Breitbart & flagged sources' },
      'multi-view': { title: 'Multi-View Mosaic', subtitle: 'Live website panels — side-by-side browsing' },
      sources: { title: 'Source Matrix', subtitle: 'Configure and manage RSS feed sources' },
      analytics: { title: 'Analytics', subtitle: 'Feed performance and category breakdown' },
    };

    const viewMeta = titles[state.currentView] ?? titles.dashboard;
    const titleEl = this.el.querySelector('#header-title');
    const subtitleEl = this.el.querySelector('#header-subtitle');
    if (titleEl) titleEl.textContent = viewMeta?.title ?? '';
    if (subtitleEl) subtitleEl.textContent = viewMeta?.subtitle ?? '';

    // Progress bar
    const progressContainer = this.el.querySelector('#header-progress');
    const progressBar = this.el.querySelector<HTMLElement>('#header-progress-bar');
    progressContainer?.classList.toggle('header__progress--visible', store.isLoading());
    if (progressBar) {
      anim.loadingBar(progressBar, progressPct);
    }

    // Spin refresh icon
    const refreshIcon = this.el.querySelector('.header__btn-icon');
    refreshIcon?.classList.toggle('header__btn-icon--spin', store.isLoading());
  }
}
