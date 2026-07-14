import type { FeedItem, FeedSource, FeedCache } from '@/types';

const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

// Parse RSS/Atom XML into FeedItem array
function parseFeedXml(xml: string, source: FeedSource): FeedItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');

  // Detect parse errors
  const parseError = doc.querySelector('parsererror');
  if (parseError) {
    throw new Error(`XML parse error for ${source.name}`);
  }

  const items: FeedItem[] = [];

  // RSS 2.0 items
  const rssItems = doc.querySelectorAll('item');
  if (rssItems.length > 0) {
    rssItems.forEach((item, index) => {
      const title = item.querySelector('title')?.textContent?.trim() ?? 'Untitled';
      const link = item.querySelector('link')?.textContent?.trim() ?? source.websiteUrl;
      const description =
        item.querySelector('description')?.textContent?.trim() ??
        item.querySelector('content\\:encoded')?.textContent?.trim() ??
        '';
      const pubDateStr = item.querySelector('pubDate')?.textContent?.trim();
      const author = item.querySelector('author')?.textContent?.trim() ??
        item.querySelector('dc\\:creator')?.textContent?.trim();

      // Extract image from media or enclosure
      const mediaContent = item.querySelector('media\\:content, enclosure[type^="image"]');
      const imageUrl = mediaContent?.getAttribute('url') ?? extractImageFromHtml(description);

      items.push({
        id: `${source.id}-${index}-${hashString(link)}`,
        sourceId: source.id,
        title: stripHtml(title),
        link,
        description: stripHtml(truncateText(description, 300)),
        pubDate: pubDateStr ? new Date(pubDateStr) : new Date(),
        author,
        imageUrl,
        category: source.category,
      });
    });
    return items;
  }

  // Atom entries
  const atomEntries = doc.querySelectorAll('entry');
  atomEntries.forEach((entry, index) => {
    const title = entry.querySelector('title')?.textContent?.trim() ?? 'Untitled';
    const link =
      entry.querySelector('link[rel="alternate"]')?.getAttribute('href') ??
      entry.querySelector('link')?.getAttribute('href') ??
      source.websiteUrl;
    const summary =
      entry.querySelector('summary')?.textContent?.trim() ??
      entry.querySelector('content')?.textContent?.trim() ??
      '';
    const pubDateStr =
      entry.querySelector('published')?.textContent?.trim() ??
      entry.querySelector('updated')?.textContent?.trim();
    const author = entry.querySelector('author name')?.textContent?.trim();

    items.push({
      id: `${source.id}-${index}-${hashString(link)}`,
      sourceId: source.id,
      title: stripHtml(title),
      link,
      description: stripHtml(truncateText(summary, 300)),
      pubDate: pubDateStr ? new Date(pubDateStr) : new Date(),
      author,
      imageUrl: extractImageFromHtml(summary),
      category: source.category,
    });
  });

  return items;
}

function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent?.trim() ?? html;
}

function truncateText(text: string, maxLen: number): string {
  const cleaned = stripHtml(text);
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, maxLen).trim() + '…';
}

function extractImageFromHtml(html: string): string | undefined {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

// Fetch a single feed source via CORS proxy
export async function fetchFeed(source: FeedSource): Promise<FeedCache> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(source.url)}`, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const xml = await response.text();
    const items = parseFeedXml(xml, source).slice(0, 25);

    return {
      sourceId: source.id,
      items,
      fetchedAt: new Date(),
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return {
      sourceId: source.id,
      items: [],
      fetchedAt: new Date(),
      error: message,
    };
  } finally {
    clearTimeout(timeout);
  }
}

// Fetch multiple feeds in parallel with concurrency limit
export async function fetchAllFeeds(
  sources: FeedSource[],
  onProgress?: (completed: number, total: number) => void
): Promise<Map<string, FeedCache>> {
  const cache = new Map<string, FeedCache>();
  const concurrency = 4;
  let completed = 0;

  for (let i = 0; i < sources.length; i += concurrency) {
    const batch = sources.slice(i, i + concurrency);
    const results = await Promise.all(batch.map((s) => fetchFeed(s)));

    for (const result of results) {
      cache.set(result.sourceId, result);
      completed++;
      onProgress?.(completed, sources.length);
    }
  }

  return cache;
}

// Merge all feed items sorted by date
export function mergeFeedItems(cache: Map<string, FeedCache>): FeedItem[] {
  const all: FeedItem[] = [];
  for (const feedCache of cache.values()) {
    all.push(...feedCache.items);
  }
  return all.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}

// Format relative time
export function formatRelativeTime(date: Date): string {
  const now = Date.now();
  const diff = now - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
