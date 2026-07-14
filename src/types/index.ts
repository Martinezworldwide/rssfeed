export type FeedCategory =
  | 'news'
  | 'politics'
  | 'tech'
  | 'business'
  | 'entertainment'
  | 'sports'
  | 'world'
  | 'culture';

export type ViewMode = 'dashboard' | 'reader' | 'multi-view' | 'sources' | 'analytics' | 'extremism-monitor';

export type ReaderLayout = 'list' | 'grid' | 'magazine';

export interface FeedSource {
  id: string;
  name: string;
  description: string;
  url: string;
  websiteUrl: string;
  category: FeedCategory;
  icon: string;
  color: string;
  region: string;
  language: string;
  // Whether this source can be embedded in multi-view iframes
  embeddable: boolean;
  // Cybersecurity extremism watch — flagged conservative/extreme sources
  extremismWatch?: boolean;
  watchTier?: 'critical' | 'high' | 'medium';
  watchReason?: string;
}

export interface FeedItem {
  id: string;
  sourceId: string;
  title: string;
  link: string;
  description: string;
  pubDate: Date;
  author?: string;
  imageUrl?: string;
  category?: FeedCategory;
}

export interface FeedCache {
  sourceId: string;
  items: FeedItem[];
  fetchedAt: Date;
  error?: string;
}

export interface AppState {
  currentView: ViewMode;
  readerLayout: ReaderLayout;
  selectedCategory: FeedCategory | 'all';
  searchQuery: string;
  selectedSourceIds: string[];
  sidebarCollapsed: boolean;
  multiViewColumns: 1 | 2 | 3 | 4;
  multiViewSourceIds: string[];
}

export interface DashboardStats {
  totalSources: number;
  totalArticles: number;
  categoriesActive: number;
  lastUpdated: Date | null;
  topSources: { sourceId: string; count: number }[];
}

// Threat classification for extremism monitor
export type ThreatLevel = 'critical' | 'high' | 'medium' | 'low' | 'clear';

export type ThreatCategory =
  | 'cyber-attack'
  | 'radicalization'
  | 'disinformation'
  | 'militia'
  | 'election-interference'
  | 'hate-speech'
  | 'infrastructure';

export interface ThreatSignal {
  category: ThreatCategory;
  keyword: string;
  weight: number;
  context: string;
}

export interface ThreatAlert {
  id: string;
  itemId: string;
  sourceId: string;
  title: string;
  link: string;
  level: ThreatLevel;
  score: number;
  signals: ThreatSignal[];
  scannedAt: Date;
  pubDate: Date;
}

export interface SourceThreatProfile {
  sourceId: string;
  level: ThreatLevel;
  score: number;
  alertCount: number;
  articlesScanned: number;
  topCategories: { category: ThreatCategory; count: number }[];
  lastScanned: Date | null;
}

export interface ExtremismMonitorReport {
  alerts: ThreatAlert[];
  sourceProfiles: SourceThreatProfile[];
  totalScanned: number;
  criticalCount: number;
  highCount: number;
  scannedAt: Date;
}
