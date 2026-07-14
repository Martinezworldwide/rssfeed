import type {
  FeedItem,
  FeedSource,
  ThreatAlert,
  ThreatLevel,
  ThreatSignal,
  SourceThreatProfile,
  ExtremismMonitorReport,
} from '@/types';
import {
  THREAT_PATTERNS,
  THREAT_LEVEL_THRESHOLDS,
  THREAT_CATEGORY_META,
} from '@/data/threatPatterns';

// Score text content against threat patterns
function scanText(text: string): ThreatSignal[] {
  const lower = text.toLowerCase();
  const signals: ThreatSignal[] = [];

  for (const pattern of THREAT_PATTERNS) {
    for (const keyword of pattern.keywords) {
      if (lower.includes(keyword.toLowerCase())) {
        // Extract surrounding context (±40 chars)
        const idx = lower.indexOf(keyword.toLowerCase());
        const start = Math.max(0, idx - 40);
        const end = Math.min(text.length, idx + keyword.length + 40);
        const context = text.slice(start, end).trim();

        signals.push({
          category: pattern.category,
          keyword,
          weight: pattern.weight,
          context: context.length > 80 ? context.slice(0, 80) + '…' : context,
        });
      }
    }
  }

  return signals;
}

// Compute composite threat score from signals (deduplicated by category)
function computeScore(signals: ThreatSignal[]): number {
  const categoryWeights = new Map<string, number>();

  for (const signal of signals) {
    const existing = categoryWeights.get(signal.category) ?? 0;
    // Stack diminishing returns per category
    categoryWeights.set(signal.category, existing + signal.weight * 0.6);
  }

  let score = 0;
  for (const weight of categoryWeights.values()) {
    score += Math.min(weight, 50); // Cap per category
  }

  return Math.min(Math.round(score), 100);
}

// Map numeric score to threat level
function scoreToLevel(score: number): ThreatLevel {
  if (score >= THREAT_LEVEL_THRESHOLDS.critical) return 'critical';
  if (score >= THREAT_LEVEL_THRESHOLDS.high) return 'high';
  if (score >= THREAT_LEVEL_THRESHOLDS.medium) return 'medium';
  if (score >= THREAT_LEVEL_THRESHOLDS.low) return 'low';
  return 'clear';
}

// Scan a single feed item for threat signals
export function scanFeedItem(item: FeedItem): ThreatAlert | null {
  const combined = `${item.title} ${item.description}`;
  const signals = scanText(combined);

  if (signals.length === 0) return null;

  const score = computeScore(signals);
  const level = scoreToLevel(score);

  // Only report items above low threshold
  if (level === 'clear') return null;

  return {
    id: `alert-${item.id}`,
    itemId: item.id,
    sourceId: item.sourceId,
    title: item.title,
    link: item.link,
    level,
    score,
    signals,
    scannedAt: new Date(),
    pubDate: item.pubDate,
  };
}

// Build threat profile for a single monitored source
function buildSourceProfile(
  sourceId: string,
  alerts: ThreatAlert[],
  articlesScanned: number
): SourceThreatProfile {
  const sourceAlerts = alerts.filter((a) => a.sourceId === sourceId);
  const scores = sourceAlerts.map((a) => a.score);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((s, v) => s + v, 0) / scores.length) : 0;

  const catCounts = new Map<string, number>();
  for (const alert of sourceAlerts) {
    for (const signal of alert.signals) {
      catCounts.set(signal.category, (catCounts.get(signal.category) ?? 0) + 1);
    }
  }

  const topCategories = [...catCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([category, count]) => ({
      category: category as import('@/types').ThreatCategory,
      count,
    }));

  return {
    sourceId,
    level: scoreToLevel(avgScore),
    score: avgScore,
    alertCount: sourceAlerts.length,
    articlesScanned,
    topCategories,
    lastScanned: sourceAlerts.length > 0 ? new Date() : null,
  };
}

// Run full extremism monitor scan across watched sources
export function runExtremismScan(
  items: FeedItem[],
  watchedSources: FeedSource[]
): ExtremismMonitorReport {
  const watchedIds = new Set(watchedSources.map((s) => s.id));
  const watchedItems = items.filter((i) => watchedIds.has(i.sourceId));

  const alerts: ThreatAlert[] = [];

  for (const item of watchedItems) {
    const alert = scanFeedItem(item);
    if (alert) alerts.push(alert);
  }

  // Sort alerts by severity then recency
  const levelOrder: Record<ThreatLevel, number> = {
    critical: 0,
    high: 1,
    medium: 2,
    low: 3,
    clear: 4,
  };
  alerts.sort((a, b) => {
    const levelDiff = levelOrder[a.level] - levelOrder[b.level];
    if (levelDiff !== 0) return levelDiff;
    return b.pubDate.getTime() - a.pubDate.getTime();
  });

  const articlesPerSource = new Map<string, number>();
  for (const item of watchedItems) {
    articlesPerSource.set(item.sourceId, (articlesPerSource.get(item.sourceId) ?? 0) + 1);
  }

  const sourceProfiles = watchedSources.map((source) =>
    buildSourceProfile(source.id, alerts, articlesPerSource.get(source.id) ?? 0)
  );

  return {
    alerts,
    sourceProfiles,
    totalScanned: watchedItems.length,
    criticalCount: alerts.filter((a) => a.level === 'critical').length,
    highCount: alerts.filter((a) => a.level === 'high').length,
    scannedAt: new Date(),
  };
}

// Get category label helper
export function getThreatCategoryLabel(category: import('@/types').ThreatCategory): string {
  return THREAT_CATEGORY_META[category]?.label ?? category;
}
