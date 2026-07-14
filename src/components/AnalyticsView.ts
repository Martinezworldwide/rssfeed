import { store } from '@/store/appStore';
import { FEED_SOURCES, CATEGORY_META } from '@/data/feeds';
import { formatRelativeTime } from '@/services/feedService';
import { anim } from '@/utils/animations';

// Analytics and performance view
export class AnalyticsView {
  private el: HTMLElement;

  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'view analytics-view';
    this.el.id = 'view-analytics';
  }

  render(): HTMLElement {
    const stats = store.getDashboardStats();
    const cache = store.getFeedCache();
    const allItems = store.getAllItems();

    // Hourly distribution (articles per hour bucket)
    const hourBuckets = new Array(24).fill(0) as number[];
    for (const item of allItems) {
      const hour = item.pubDate.getHours();
      hourBuckets[hour] = (hourBuckets[hour] ?? 0) + 1;
    }
    const maxHourCount = Math.max(...hourBuckets, 1);

    this.el.innerHTML = `
      <div class="analytics-view__header anim-item">
        <h2>Feed Analytics</h2>
        <p>Performance metrics and distribution analysis across all sources</p>
      </div>

      <div class="analytics-view__overview">
        <div class="analytics-metric anim-item">
          <div class="analytics-metric__value" id="analytics-total">${stats.totalArticles}</div>
          <div class="analytics-metric__label">Total Articles</div>
        </div>
        <div class="analytics-metric anim-item">
          <div class="analytics-metric__value">${stats.totalSources}</div>
          <div class="analytics-metric__label">Sources Monitored</div>
        </div>
        <div class="analytics-metric anim-item">
          <div class="analytics-metric__value">${cache.size}</div>
          <div class="analytics-metric__label">Feeds Fetched</div>
        </div>
        <div class="analytics-metric anim-item">
          <div class="analytics-metric__value">${[...cache.values()].filter((c) => c.error).length}</div>
          <div class="analytics-metric__label">Fetch Errors</div>
        </div>
      </div>

      <div class="analytics-view__grid">
        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Top Sources by Volume</h3>
          <div class="analytics-panel__body">
            ${stats.topSources
              .map((ts) => {
                const source = FEED_SOURCES.find((s) => s.id === ts.sourceId);
                const pct = stats.totalArticles > 0 ? (ts.count / stats.totalArticles) * 100 : 0;
                return `
                  <div class="source-rank">
                    <div class="source-rank__header">
                      <span>${source?.icon ?? '•'} ${source?.name ?? ts.sourceId}</span>
                      <span>${ts.count} (${pct.toFixed(1)}%)</span>
                    </div>
                    <div class="source-rank__bar">
                      <div class="source-rank__fill" style="width: ${pct}%; background: ${source?.color ?? '#00d4ff'}"></div>
                    </div>
                  </div>
                `;
              })
              .join('') || '<p class="analytics-panel__empty">No data yet</p>'}
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Publication Timeline (24h)</h3>
          <div class="analytics-panel__body">
            <div class="timeline-chart">
              ${hourBuckets
                .map((count, hour) => {
                  const height = (count / maxHourCount) * 100;
                  return `
                    <div class="timeline-chart__bar" title="${hour}:00 — ${count} articles">
                      <div class="timeline-chart__fill" style="height: ${height}%"></div>
                      <span class="timeline-chart__label">${hour}</span>
                    </div>
                  `;
                })
                .join('')}
            </div>
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Category Distribution</h3>
          <div class="analytics-panel__body">
            <div class="category-donut">
              ${Object.entries(CATEGORY_META)
                .map(([key, meta]) => {
                  const count = allItems.filter((i) => i.category === key).length;
                  const pct = stats.totalArticles > 0 ? (count / stats.totalArticles) * 100 : 0;
                  if (count === 0) return '';
                  return `
                    <div class="category-donut__item">
                      <div class="category-donut__swatch" style="background: ${meta.color}"></div>
                      <span class="category-donut__label">${meta.icon} ${meta.label}</span>
                      <span class="category-donut__value">${count} (${pct.toFixed(0)}%)</span>
                    </div>
                  `;
                })
                .join('')}
            </div>
          </div>
        </section>

        <section class="analytics-panel anim-item">
          <h3 class="analytics-panel__title">Feed Health Status</h3>
          <div class="analytics-panel__body">
            <div class="health-list">
              ${FEED_SOURCES.map((source) => {
                const feedCache = cache.get(source.id);
                const status = !feedCache ? 'pending' : feedCache.error ? 'error' : 'ok';
                const statusIcon = status === 'ok' ? '✓' : status === 'error' ? '✗' : '○';
                const statusClass = `health-item--${status}`;
                return `
                  <div class="health-item ${statusClass}">
                    <span class="health-item__status">${statusIcon}</span>
                    <span class="health-item__name">${source.icon} ${source.name}</span>
                    <span class="health-item__detail">
                      ${
                        feedCache
                          ? feedCache.error
                            ? feedCache.error
                            : `${feedCache.items.length} articles · ${formatRelativeTime(feedCache.fetchedAt)}`
                          : 'Not fetched'
                      }
                    </span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </section>
      </div>
    `;

    requestAnimationFrame(() => {
      anim.revealChildren(this.el);
      const totalEl = this.el.querySelector('#analytics-total');
      if (totalEl) anim.animateCounter(totalEl as HTMLElement, stats.totalArticles);
    });

    return this.el;
  }

  update(): void {
    this.render();
  }
}
