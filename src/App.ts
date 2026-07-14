import { store } from '@/store/appStore';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { DashboardView } from '@/components/DashboardView';
import { ReaderView } from '@/components/ReaderView';
import { MultiView } from '@/components/MultiView';
import { SourcesView } from '@/components/SourcesView';
import { AnalyticsView } from '@/components/AnalyticsView';
import { ExtremismMonitorView } from '@/components/ExtremismMonitorView';
import { FEED_SOURCES } from '@/data/feeds';
import { fetchAllFeeds, loadCachedFeeds } from '@/services/feedService';
import { anim } from '@/utils/animations';
import type { ViewMode } from '@/types';

// Common interface for all view components
interface ViewComponent {
  render(): HTMLElement;
  update(): void;
}

// Main application orchestrator
export class App {
  private root: HTMLElement;
  private sidebar: Sidebar;
  private header: Header;
  private views: Map<ViewMode, ViewComponent>;
  private contentEl: HTMLElement | null = null;
  private currentViewEl: HTMLElement | null = null;
  private currentViewMode: ViewMode = 'dashboard';
  private unsubscribe: (() => void) | null = null;
  private refreshHandler = (): void => {
    void this.loadFeeds();
  };

  constructor(rootSelector: string) {
    const root = document.querySelector<HTMLElement>(rootSelector);
    if (!root) throw new Error(`Root element "${rootSelector}" not found`);
    this.root = root;

    this.sidebar = new Sidebar();
    this.header = new Header();

    this.views = new Map<ViewMode, ViewComponent>([
      ['dashboard', new DashboardView()],
      ['reader', new ReaderView()],
      ['multi-view', new MultiView()],
      ['sources', new SourcesView()],
      ['analytics', new AnalyticsView()],
      ['extremism-monitor', new ExtremismMonitorView()],
    ]);
  }

  async init(): Promise<void> {
    // Build shell layout
    this.root.innerHTML = '';
    this.root.className = 'app';

    const sidebarEl = this.sidebar.render();
    const mainEl = document.createElement('main');
    mainEl.className = 'app__main';

    const headerEl = this.header.render();
    this.contentEl = document.createElement('div');
    this.contentEl.className = 'app__content';
    this.contentEl.id = 'app-content';

    mainEl.appendChild(headerEl);
    mainEl.appendChild(this.contentEl);

    this.root.appendChild(sidebarEl);
    this.root.appendChild(mainEl);

    // Subscribe to state changes
    this.unsubscribe = store.subscribe((state) => this.onStateChange(state));

    // Listen for refresh events
    window.addEventListener('rss:refresh', this.refreshHandler);

    // Render initial view
    await this.switchView(store.getState().currentView);

    // Auto-fetch feeds on startup
    await this.loadFeeds();
  }

  private async onStateChange(state: import('@/types').AppState): Promise<void> {
    this.sidebar.update();
    this.header.update();

    // Full page transition when navigating between views
    if (state.currentView !== this.currentViewMode) {
      this.currentViewMode = state.currentView;
      await this.switchView(state.currentView);
      return;
    }

    // In-place re-render for filter/data changes within the same view
    const view = this.views.get(state.currentView);
    if (view && this.contentEl) {
      this.currentViewEl = view.render();
      this.contentEl.innerHTML = '';
      this.contentEl.appendChild(this.currentViewEl);
      anim.pageEnter(this.currentViewEl);
    }
  }

  private async switchView(viewMode: ViewMode): Promise<void> {
    const view = this.views.get(viewMode);
    if (!view || !this.contentEl) return;

    // Exit animation on current view
    if (this.currentViewEl) {
      await anim.pageExit(this.currentViewEl);
    }

    this.contentEl.innerHTML = '';
    this.currentViewEl = view.render();
    this.contentEl.appendChild(this.currentViewEl);
    anim.pageEnter(this.currentViewEl);
  }

  private async loadFeeds(): Promise<void> {
    if (store.isLoading()) return;

    store.setLoading(true);
    store.setLoadProgress(0, FEED_SOURCES.length);

    try {
      // Load build-time cached feeds first (works on GitHub Pages — no CORS)
      const cached = await loadCachedFeeds();
      if (cached && cached.size > 0) {
        store.setFeedCache(cached);
        store.setLoadProgress(FEED_SOURCES.length, FEED_SOURCES.length);
      }

      // Attempt live refresh via CORS proxies in background
      const liveCache = await fetchAllFeeds(FEED_SOURCES, (completed, total) => {
        store.setLoadProgress(completed, total);
      });

      // Only replace cache if live fetch returned actual articles
      const liveItemCount = [...liveCache.values()].reduce((sum, f) => sum + f.items.length, 0);
      if (liveItemCount > 0) {
        store.setFeedCache(liveCache);
      }
    } finally {
      store.setLoading(false);
    }
  }

  destroy(): void {
    this.unsubscribe?.();
    window.removeEventListener('rss:refresh', this.refreshHandler);
  }
}
