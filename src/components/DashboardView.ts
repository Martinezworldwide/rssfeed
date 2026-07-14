import { store } from '@/store/appStore';
import { FEED_SOURCES, CATEGORY_META, EXTREMISM_WATCH_SOURCES } from '@/data/feeds';
import { formatRelativeTime } from '@/services/feedService';
import { runExtremismScan } from '@/services/extremismMonitorService';
import { anim } from '@/utils/animations';

// Dashboard / Command Center view
export class DashboardView {
  private el: HTMLElement;

  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'view dashboard-view';
    this.el.id = 'view-dashboard';
  }

  render(): HTMLElement {
    const stats = store.getDashboardStats();
    const recentItems = store.getFilteredItems().slice(0, 8);
    const loading = store.isLoading();
    const threatReport = runExtremismScan(store.getAllItems(), EXTREMISM_WATCH_SOURCES);

    this.el.innerHTML = `
      <div class="dashboard-view__hero anim-item">
        <div class="dashboard-view__hero-content">
          <div class="dashboard-view__hero-badge">◈ NEURAL FEED ENGINE v2.0</div>
          <h2 class="dashboard-view__hero-title" id="hero-typewriter">Super RSS Feed</h2>
          <p class="dashboard-view__hero-desc">
            Aggregate, analyze, and visualize news from ${stats.totalSources} premium sources
            in real-time. Multi-website view is one feature among many — this is your
            command center for global information flow.
          </p>
        </div>
        <div class="dashboard-view__hero-visual">
          <div class="dashboard-view__orbital">
            <div class="dashboard-view__orbital-ring dashboard-view__orbital-ring--1"></div>
            <div class="dashboard-view__orbital-ring dashboard-view__orbital-ring--2"></div>
            <div class="dashboard-view__orbital-ring dashboard-view__orbital-ring--3"></div>
            <div class="dashboard-view__orbital-core">RSS</div>
          </div>
        </div>
      </div>

      <div class="dashboard-view__stats">
        <div class="stat-card anim-item" data-stat="sources">
          <div class="stat-card__icon">⬡</div>
          <div class="stat-card__value" id="stat-sources">${stats.totalSources}</div>
          <div class="stat-card__label">Active Sources</div>
        </div>
        <div class="stat-card anim-item" data-stat="articles">
          <div class="stat-card__icon">◎</div>
          <div class="stat-card__value" id="stat-articles">${loading ? '…' : stats.totalArticles}</div>
          <div class="stat-card__label">Articles Loaded</div>
        </div>
        <div class="stat-card anim-item" data-stat="categories">
          <div class="stat-card__icon">◉</div>
          <div class="stat-card__value" id="stat-categories">${stats.categoriesActive}</div>
          <div class="stat-card__label">Categories</div>
        </div>
        <div class="stat-card anim-item" data-stat="updated">
          <div class="stat-card__icon">↻</div>
          <div class="stat-card__value stat-card__value--small" id="stat-updated">
            ${stats.lastUpdated ? formatRelativeTime(stats.lastUpdated) : '—'}
          </div>
          <div class="stat-card__label">Last Sync</div>
        </div>
      </div>

      ${
        threatReport.criticalCount + threatReport.highCount > 0
          ? `<div class="dashboard-threat-banner anim-item" data-goto="extremism-monitor">
              <span class="dashboard-threat-banner__icon">⬢</span>
              <div class="dashboard-threat-banner__text">
                <strong>${threatReport.criticalCount + threatReport.highCount} active threats</strong> detected
                across ${EXTREMISM_WATCH_SOURCES.length} extremism-watched sources (Breitbart, Fox News)
              </div>
              <button class="dashboard-threat-banner__btn">Open Threat Watch →</button>
            </div>`
          : ''
      }

      <div class="dashboard-view__grid">
        <section class="dashboard-panel anim-item">
          <div class="dashboard-panel__header">
            <h3 class="dashboard-panel__title">Live Feed Stream</h3>
            <button class="dashboard-panel__action" data-goto="reader">View All →</button>
          </div>
          <div class="dashboard-panel__body">
            ${
              recentItems.length > 0
                ? recentItems
                    .map((item) => {
                      const source = FEED_SOURCES.find((s) => s.id === item.sourceId);
                      return `
                      <article class="feed-stream-item">
                        <div class="feed-stream-item__source" style="color: ${source?.color ?? '#fff'}">
                          ${source?.icon ?? '•'} ${source?.name ?? 'Unknown'}
                        </div>
                        <a href="${item.link}" target="_blank" rel="noopener" class="feed-stream-item__title">
                          ${item.title}
                        </a>
                        <time class="feed-stream-item__time">${formatRelativeTime(item.pubDate)}</time>
                      </article>
                    `;
                    })
                    .join('')
                : `<div class="dashboard-panel__empty">${loading ? 'Loading feeds…' : 'No articles yet. Click Sync to fetch.'}</div>`
            }
          </div>
        </section>

        <section class="dashboard-panel anim-item">
          <div class="dashboard-panel__header">
            <h3 class="dashboard-panel__title">Category Breakdown</h3>
          </div>
          <div class="dashboard-panel__body">
            <div class="category-breakdown">
              ${Object.entries(CATEGORY_META)
                .map(([key, meta]) => {
                  const count = store.getAllItems().filter((i) => i.category === key).length;
                  const pct = stats.totalArticles > 0 ? (count / stats.totalArticles) * 100 : 0;
                  return `
                    <div class="category-bar">
                      <div class="category-bar__header">
                        <span>${meta.icon} ${meta.label}</span>
                        <span>${count}</span>
                      </div>
                      <div class="category-bar__track">
                        <div class="category-bar__fill" style="width: ${pct}%; background: ${meta.color}"></div>
                      </div>
                    </div>
                  `;
                })
                .join('')}
            </div>
          </div>
        </section>

        <section class="dashboard-panel anim-item">
          <div class="dashboard-panel__header">
            <h3 class="dashboard-panel__title">Quick Actions</h3>
          </div>
          <div class="dashboard-panel__body dashboard-panel__body--actions">
            <button class="action-card" data-goto="reader">
              <span class="action-card__icon">◎</span>
              <span class="action-card__label">Open Feed Reader</span>
              <span class="action-card__desc">Browse unified article stream</span>
            </button>
            <button class="action-card" data-goto="multi-view">
              <span class="action-card__icon">▦</span>
              <span class="action-card__label">Launch Multi-View</span>
              <span class="action-card__desc">Side-by-side website panels</span>
            </button>
            <button class="action-card" data-goto="sources">
              <span class="action-card__icon">⬡</span>
              <span class="action-card__label">Manage Sources</span>
              <span class="action-card__desc">Configure RSS feed matrix</span>
            </button>
            <button class="action-card" data-goto="extremism-monitor">
              <span class="action-card__icon">⬢</span>
              <span class="action-card__label">Threat Watch</span>
              <span class="action-card__desc">Cybersecurity extremism monitor</span>
            </button>
            <button class="action-card" data-goto="analytics">
              <span class="action-card__icon">◉</span>
              <span class="action-card__label">View Analytics</span>
              <span class="action-card__desc">Performance metrics</span>
            </button>
          </div>
        </section>
      </div>
    `;

    this.bindEvents();
    this.runAnimations();
    return this.el;
  }

  private bindEvents(): void {
    this.el.querySelectorAll('[data-goto]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const view = (btn as HTMLElement).dataset.goto;
        if (view) store.setView(view as import('@/types').ViewMode);
      });
    });

    // Threat banner click
    this.el.querySelector('.dashboard-threat-banner')?.addEventListener('click', () => {
      store.setView('extremism-monitor');
    });
  }

  private runAnimations(): void {
    anim.revealChildren(this.el);

    // Animate stat counters
    const stats = store.getDashboardStats();
    const articlesEl = this.el.querySelector('#stat-articles');
    if (articlesEl && !store.isLoading()) {
      anim.animateCounter(articlesEl as HTMLElement, stats.totalArticles);
    }

    // Orbital rings
    const rings = this.el.querySelectorAll('.dashboard-view__orbital-ring');
    rings.forEach((ring, i) => {
      anim.orbit(ring as HTMLElement);
      (ring as HTMLElement).style.animationDuration = `${15 + i * 5}s`;
    });
  }

  update(): void {
    this.render();
  }
}
