import type { AppState, DashboardStats, FeedItem, FeedCache } from '@/types';
import { FEED_SOURCES } from '@/data/feeds';
import { mergeFeedItems } from '@/services/feedService';

type Listener = (state: AppState) => void;

// Central application state store
class AppStore {
  private state: AppState = {
    currentView: 'dashboard',
    readerLayout: 'magazine',
    selectedCategory: 'all',
    searchQuery: '',
    selectedSourceIds: FEED_SOURCES.map((s) => s.id),
    sidebarCollapsed: false,
    multiViewColumns: 2,
    multiViewSourceIds: ['breitbart', 'fox-news', 'msnbc', 'latino-rebels', 'cnn', 'bbc-world'],
  };

  private feedCache: Map<string, FeedCache> = new Map();
  private listeners: Set<Listener> = new Set();
  private loading = false;
  private loadProgress = { completed: 0, total: 0 };

  getState(): AppState {
    return { ...this.state };
  }

  isLoading(): boolean {
    return this.loading;
  }

  getLoadProgress(): { completed: number; total: number } {
    return { ...this.loadProgress };
  }

  getFeedCache(): Map<string, FeedCache> {
    return this.feedCache;
  }

  getAllItems(): FeedItem[] {
    return mergeFeedItems(this.feedCache);
  }

  getFilteredItems(): FeedItem[] {
    let items = this.getAllItems();

    // Filter by selected sources
    items = items.filter((item) => this.state.selectedSourceIds.includes(item.sourceId));

    // Filter by category
    if (this.state.selectedCategory !== 'all') {
      items = items.filter((item) => item.category === this.state.selectedCategory);
    }

    // Filter by search query
    if (this.state.searchQuery.trim()) {
      const q = this.state.searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    return items;
  }

  getDashboardStats(): DashboardStats {
    const items = this.getAllItems();
    const categories = new Set(items.map((i) => i.category).filter(Boolean));
    const sourceCounts = new Map<string, number>();

    for (const item of items) {
      sourceCounts.set(item.sourceId, (sourceCounts.get(item.sourceId) ?? 0) + 1);
    }

    const topSources = [...sourceCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([sourceId, count]) => ({ sourceId, count }));

    let lastUpdated: Date | null = null;
    for (const cache of this.feedCache.values()) {
      if (!lastUpdated || cache.fetchedAt > lastUpdated) {
        lastUpdated = cache.fetchedAt;
      }
    }

    return {
      totalSources: FEED_SOURCES.length,
      totalArticles: items.length,
      categoriesActive: categories.size,
      lastUpdated,
      topSources,
    };
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    const snapshot = this.getState();
    for (const listener of this.listeners) {
      listener(snapshot);
    }
  }

  setView(view: AppState['currentView']): void {
    this.state.currentView = view;
    this.notify();
  }

  setReaderLayout(layout: AppState['readerLayout']): void {
    this.state.readerLayout = layout;
    this.notify();
  }

  setCategory(category: AppState['selectedCategory']): void {
    this.state.selectedCategory = category;
    this.notify();
  }

  setSearchQuery(query: string): void {
    this.state.searchQuery = query;
    this.notify();
  }

  toggleSource(sourceId: string): void {
    const idx = this.state.selectedSourceIds.indexOf(sourceId);
    if (idx >= 0) {
      this.state.selectedSourceIds.splice(idx, 1);
    } else {
      this.state.selectedSourceIds.push(sourceId);
    }
    this.notify();
  }

  toggleSidebar(): void {
    this.state.sidebarCollapsed = !this.state.sidebarCollapsed;
    this.notify();
  }

  setMultiViewColumns(cols: AppState['multiViewColumns']): void {
    this.state.multiViewColumns = cols;
    this.notify();
  }

  toggleMultiViewSource(sourceId: string): void {
    const idx = this.state.multiViewSourceIds.indexOf(sourceId);
    if (idx >= 0) {
      this.state.multiViewSourceIds.splice(idx, 1);
    } else {
      this.state.multiViewSourceIds.push(sourceId);
    }
    this.notify();
  }

  setFeedCache(cache: Map<string, FeedCache>): void {
    this.feedCache = cache;
    this.notify();
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
    this.notify();
  }

  setLoadProgress(completed: number, total: number): void {
    this.loadProgress = { completed, total };
    this.notify();
  }
}

export const store = new AppStore();
