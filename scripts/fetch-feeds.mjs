/**
 * Build-time RSS fetcher — runs in Node (no CORS restrictions).
 * Outputs public/feeds-cache.json bundled with the static site.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, '../public/feeds-cache.json');

// Feed sources — keep in sync with src/data/feeds.ts
const SOURCES = [
  { id: 'cnn', url: 'http://rss.cnn.com/rss/cnn_topstories.rss', category: 'news' },
  { id: 'fox-news', url: 'https://moxie.foxnews.com/google-publisher/latest.xml', category: 'politics' },
  { id: 'msnbc', url: 'https://www.msnbc.com/feeds/latest', category: 'politics' },
  { id: 'breitbart', url: 'https://feeds.feedburner.com/breitbart', category: 'politics' },
  { id: 'bbc-world', url: 'https://feeds.bbci.co.uk/news/world/rss.xml', category: 'world' },
  { id: 'reuters', url: 'https://feeds.reuters.com/reuters/topNews', category: 'business' },
  { id: 'techcrunch', url: 'https://techcrunch.com/feed/', category: 'tech' },
  { id: 'the-verge', url: 'https://www.theverge.com/rss/index.xml', category: 'tech' },
  { id: 'espn', url: 'https://www.espn.com/espn/rss/news', category: 'sports' },
  { id: 'latino-rebels', url: 'https://www.latinorebels.com/feed/', category: 'culture' },
  { id: 'npr', url: 'https://feeds.npr.org/1001/rss.xml', category: 'news' },
  { id: 'ars-technica', url: 'https://feeds.arstechnica.com/arstechnica/index', category: 'tech' },
];

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim();
}

function extractTag(block, tag) {
  const cdata = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = block.match(cdata) || block.match(plain);
  return m ? stripHtml(m[1]) : '';
}

function extractLink(block) {
  const href = block.match(/<link[^>]+href=["']([^"']+)["']/i);
  if (href) return href[1];
  return extractTag(block, 'link');
}

function parseRssItems(xml, source) {
  const items = [];
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];

  blocks.slice(0, 25).forEach((block, index) => {
    const title = extractTag(block, 'title') || 'Untitled';
    const link = extractLink(block) || source.url;
    const description = extractTag(block, 'description') || extractTag(block, 'summary') || extractTag(block, 'content') || '';
    const pubDateStr = extractTag(block, 'pubDate') || extractTag(block, 'published') || extractTag(block, 'updated');
    const author = extractTag(block, 'author') || extractTag(block, 'dc:creator');

    items.push({
      id: `${source.id}-${index}-${link.length}`,
      sourceId: source.id,
      title,
      link,
      description: description.slice(0, 300),
      pubDate: pubDateStr ? new Date(pubDateStr).toISOString() : new Date().toISOString(),
      author: author || undefined,
      category: source.category,
    });
  });

  return items;
}

async function fetchSource(source) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(source.url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'SuperRSSFeed/2.0 (GitHub Pages build)' },
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const xml = await response.text();
    const items = parseRssItems(xml, source);

    return {
      sourceId: source.id,
      items,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    return {
      sourceId: source.id,
      items: [],
      fetchedAt: new Date().toISOString(),
      error: err instanceof Error ? err.message : 'Fetch failed',
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  console.log(`Fetching ${SOURCES.length} RSS feeds at build time…`);

  const results = await Promise.all(SOURCES.map(fetchSource));
  const feeds = {};
  let totalItems = 0;

  for (const result of results) {
    feeds[result.sourceId] = result;
    totalItems += result.items.length;
    const status = result.error ? `ERROR: ${result.error}` : `${result.items.length} articles`;
    console.log(`  ${result.sourceId}: ${status}`);
  }

  const cache = {
    generatedAt: new Date().toISOString(),
    totalItems,
    feeds,
  };

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(cache, null, 2));
  console.log(`\nWrote ${totalItems} articles to public/feeds-cache.json`);
}

main().catch((err) => {
  console.error('Feed fetch failed:', err);
  process.exit(1);
});
