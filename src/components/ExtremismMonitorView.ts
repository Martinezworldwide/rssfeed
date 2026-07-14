import { store } from '@/store/appStore';
import { FEED_SOURCES, EXTREMISM_WATCH_SOURCES } from '@/data/feeds';
import { runExtremismScan } from '@/services/extremismMonitorService';
import { formatRelativeTime } from '@/services/feedService';
import { THREAT_LEVEL_META, THREAT_CATEGORY_META } from '@/data/threatPatterns';
import { anim } from '@/utils/animations';
import type { ThreatLevel } from '@/types';

// Cybersecurity Extremism Monitor — watches conservative/extreme sources for threats
export class ExtremismMonitorView {
  private el: HTMLElement;
  private selectedLevel: ThreatLevel | 'all' = 'all';

  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'view extremism-monitor';
    this.el.id = 'view-extremism-monitor';
  }

  render(): HTMLElement {
    const report = runExtremismScan(store.getAllItems(), EXTREMISM_WATCH_SOURCES);
    const loading = store.isLoading();

    const filteredAlerts =
      this.selectedLevel === 'all'
        ? report.alerts
        : report.alerts.filter((a) => a.level === this.selectedLevel);

    this.el.innerHTML = `
      <div class="extremism-monitor__hero anim-item">
        <div class="extremism-monitor__hero-left">
          <div class="extremism-monitor__badge">
            <span class="extremism-monitor__badge-pulse"></span>
            CYBERSECURITY EXTREMISM MONITOR
          </div>
          <h2 class="extremism-monitor__title">Threat Intelligence Watch</h2>
          <p class="extremism-monitor__desc">
            Real-time scanning of ${EXTREMISM_WATCH_SOURCES.length} flagged conservative and extreme
            content sources — including Breitbart — for cybersecurity threats, radicalization signals,
            disinformation campaigns, militia activity, and infrastructure risk narratives.
          </p>
        </div>
        <div class="extremism-monitor__hero-right">
          <div class="threat-radar" id="threat-radar">
            <div class="threat-radar__ring threat-radar__ring--1"></div>
            <div class="threat-radar__ring threat-radar__ring--2"></div>
            <div class="threat-radar__ring threat-radar__ring--3"></div>
            <div class="threat-radar__sweep"></div>
            <div class="threat-radar__core">
              <span class="threat-radar__score" id="threat-score-total">${report.criticalCount + report.highCount}</span>
              <span class="threat-radar__label">ACTIVE THREATS</span>
            </div>
          </div>
        </div>
      </div>

      <div class="extremism-monitor__stats">
        <div class="threat-stat anim-item threat-stat--critical">
          <div class="threat-stat__value" id="stat-critical">${report.criticalCount}</div>
          <div class="threat-stat__label">Critical</div>
        </div>
        <div class="threat-stat anim-item threat-stat--high">
          <div class="threat-stat__value" id="stat-high">${report.highCount}</div>
          <div class="threat-stat__label">High</div>
        </div>
        <div class="threat-stat anim-item">
          <div class="threat-stat__value">${report.alerts.length}</div>
          <div class="threat-stat__label">Total Alerts</div>
        </div>
        <div class="threat-stat anim-item">
          <div class="threat-stat__value">${report.totalScanned}</div>
          <div class="threat-stat__label">Articles Scanned</div>
        </div>
        <div class="threat-stat anim-item">
          <div class="threat-stat__value">${EXTREMISM_WATCH_SOURCES.length}</div>
          <div class="threat-stat__label">Watched Sources</div>
        </div>
        <div class="threat-stat anim-item">
          <div class="threat-stat__value threat-stat__value--small">
            ${loading ? 'Scanning…' : formatRelativeTime(report.scannedAt)}
          </div>
          <div class="threat-stat__label">Last Scan</div>
        </div>
      </div>

      <div class="extremism-monitor__grid">
        <!-- Watched source profiles -->
        <section class="extremism-panel anim-item">
          <div class="extremism-panel__header">
            <h3>⬢ Watched Source Profiles</h3>
            <span class="extremism-panel__tag">PRIORITY MONITORING</span>
          </div>
          <div class="extremism-panel__body">
            ${EXTREMISM_WATCH_SOURCES.map((source) => {
              const profile = report.sourceProfiles.find((p) => p.sourceId === source.id);
              const levelMeta = THREAT_LEVEL_META[profile?.level ?? 'clear'];
              return `
                <div class="watch-source" style="--watch-color: ${source.color}">
                  <div class="watch-source__header">
                    <span class="watch-source__icon">${source.icon}</span>
                    <div class="watch-source__info">
                      <span class="watch-source__name">${source.name}</span>
                      <span class="watch-source__tier watch-source__tier--${source.watchTier}">${source.watchTier?.toUpperCase()} WATCH</span>
                    </div>
                    <span class="watch-source__level" style="color: ${levelMeta.color}; background: ${levelMeta.bg}">
                      ${levelMeta.label}
                    </span>
                  </div>
                  <p class="watch-source__reason">${source.watchReason ?? ''}</p>
                  <div class="watch-source__metrics">
                    <span>${profile?.alertCount ?? 0} alerts</span>
                    <span>${profile?.articlesScanned ?? 0} scanned</span>
                    <span>Score: ${profile?.score ?? 0}/100</span>
                  </div>
                  ${
                    profile && profile.topCategories.length > 0
                      ? `<div class="watch-source__categories">
                          ${profile.topCategories
                            .map((tc) => {
                              const meta = THREAT_CATEGORY_META[tc.category];
                              return `<span class="watch-source__cat" style="color: ${meta.color}">${meta.icon} ${meta.label} (${tc.count})</span>`;
                            })
                            .join('')}
                        </div>`
                      : ''
                  }
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Threat alerts feed -->
        <section class="extremism-panel extremism-panel--alerts anim-item">
          <div class="extremism-panel__header">
            <h3>🚨 Threat Alert Feed</h3>
            <div class="extremism-panel__filters">
              ${(['all', 'critical', 'high', 'medium', 'low'] as const)
                .map(
                  (level) => `
                <button
                  class="threat-filter ${this.selectedLevel === level ? 'threat-filter--active' : ''}"
                  data-level="${level}"
                  style="${level !== 'all' ? `--filter-color: ${THREAT_LEVEL_META[level].color}` : ''}"
                >
                  ${level === 'all' ? 'All' : THREAT_LEVEL_META[level].label}
                </button>
              `
                )
                .join('')}
            </div>
          </div>
          <div class="extremism-panel__body extremism-panel__body--alerts">
            ${
              loading && filteredAlerts.length === 0
                ? `<div class="extremism-panel__loading">
                    <div class="reader-view__loading-spinner"></div>
                    <p>Scanning extremism watch sources…</p>
                  </div>`
                : filteredAlerts.length === 0
                  ? `<div class="extremism-panel__empty">
                      <span>✓</span>
                      <p>No ${this.selectedLevel === 'all' ? '' : this.selectedLevel + ' '}threats detected in current scan.</p>
                    </div>`
                  : filteredAlerts
                      .map((alert) => {
                        const source = FEED_SOURCES.find((s) => s.id === alert.sourceId);
                        const levelMeta = THREAT_LEVEL_META[alert.level];
                        return `
                        <div class="threat-alert threat-alert--${alert.level} anim-item" data-alert-level="${alert.level}">
                          <div class="threat-alert__header">
                            <span class="threat-alert__level" style="color: ${levelMeta.color}; background: ${levelMeta.bg}">
                              ${levelMeta.label}
                            </span>
                            <span class="threat-alert__score">Score: ${alert.score}</span>
                            <span class="threat-alert__source" style="color: ${source?.color}">
                              ${source?.icon} ${source?.name}
                            </span>
                            <time class="threat-alert__time">${formatRelativeTime(alert.pubDate)}</time>
                          </div>
                          <a href="${alert.link}" target="_blank" rel="noopener" class="threat-alert__title">
                            ${alert.title}
                          </a>
                          <div class="threat-alert__signals">
                            ${alert.signals
                              .slice(0, 5)
                              .map((sig) => {
                                const meta = THREAT_CATEGORY_META[sig.category];
                                return `
                                  <span class="threat-signal" style="--signal-color: ${meta.color}" title="${sig.context}">
                                    ${meta.icon} ${sig.keyword}
                                  </span>
                                `;
                              })
                              .join('')}
                            ${alert.signals.length > 5 ? `<span class="threat-signal threat-signal--more">+${alert.signals.length - 5} more</span>` : ''}
                          </div>
                        </div>
                      `;
                      })
                      .join('')
            }
          </div>
        </section>

        <!-- Threat category breakdown -->
        <section class="extremism-panel anim-item">
          <div class="extremism-panel__header">
            <h3>📊 Threat Category Matrix</h3>
          </div>
          <div class="extremism-panel__body">
            ${Object.entries(THREAT_CATEGORY_META)
              .map(([key, meta]) => {
                const count = report.alerts.reduce(
                  (sum, a) => sum + a.signals.filter((s) => s.category === key).length,
                  0
                );
                const maxCount = Math.max(
                  ...Object.keys(THREAT_CATEGORY_META).map((k) =>
                    report.alerts.reduce(
                      (sum, a) => sum + a.signals.filter((s) => s.category === k).length,
                      0
                    )
                  ),
                  1
                );
                const pct = (count / maxCount) * 100;
                return `
                  <div class="threat-category-row">
                    <div class="threat-category-row__header">
                      <span>${meta.icon} ${meta.label}</span>
                      <span>${count} signals</span>
                    </div>
                    <div class="threat-category-row__track">
                      <div class="threat-category-row__fill" style="width: ${pct}%; background: ${meta.color}"></div>
                    </div>
                  </div>
                `;
              })
              .join('')}
          </div>
        </section>

        <!-- Monitor configuration -->
        <section class="extremism-panel anim-item">
          <div class="extremism-panel__header">
            <h3>⚙️ Monitor Configuration</h3>
          </div>
          <div class="extremism-panel__body">
            <div class="monitor-config">
              <div class="monitor-config__item">
                <span class="monitor-config__label">Scan Engine</span>
                <span class="monitor-config__value">Neural Pattern Matcher v2.0</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Pattern Database</span>
                <span class="monitor-config__value">7 categories · 120+ signatures</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Watch Tier: Critical</span>
                <span class="monitor-config__value">Breitbart</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Watch Tier: High</span>
                <span class="monitor-config__value">Fox News</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Detection Threshold</span>
                <span class="monitor-config__value">Score ≥ 5 (Low+)</span>
              </div>
              <div class="monitor-config__item">
                <span class="monitor-config__label">Auto-Scan</span>
                <span class="monitor-config__value monitor-config__value--active">On feed sync</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;

    this.bindEvents();
    this.runAnimations(report.criticalCount + report.highCount);
    return this.el;
  }

  private bindEvents(): void {
    // Threat level filters
    this.el.querySelectorAll('.threat-filter').forEach((btn) => {
      btn.addEventListener('click', () => {
        const level = (btn as HTMLElement).dataset.level as ThreatLevel | 'all';
        this.selectedLevel = level;
        this.render();
        if (this.el.parentElement) {
          this.el.parentElement.innerHTML = '';
          this.el.parentElement.appendChild(this.el);
          anim.pageEnter(this.el);
        }
      });
    });
  }

  private runAnimations(activeThreats: number): void {
    anim.revealChildren(this.el);

    // Animate threat stat counters
    const criticalEl = this.el.querySelector('#stat-critical');
    const highEl = this.el.querySelector('#stat-high');
    const totalEl = this.el.querySelector('#threat-score-total');

    if (criticalEl) {
      const val = parseInt(criticalEl.textContent ?? '0', 10);
      anim.animateCounter(criticalEl as HTMLElement, val, 0.8);
    }
    if (highEl) {
      const val = parseInt(highEl.textContent ?? '0', 10);
      anim.animateCounter(highEl as HTMLElement, val, 0.8);
    }
    if (totalEl) {
      anim.animateCounter(totalEl as HTMLElement, activeThreats, 1);
    }

    // Radar sweep animation
    const sweep = this.el.querySelector('.threat-radar__sweep');
    if (sweep) {
      anim.scanline(sweep as HTMLElement);
    }

    // Pulse critical/high alert cards
    this.el.querySelectorAll('.threat-alert--critical, .threat-alert--high').forEach((alert) => {
      anim.pulseGlow(alert as HTMLElement);
    });

    // Badge pulse
    const badgePulse = this.el.querySelector('.extremism-monitor__badge-pulse');
    if (badgePulse) {
      anim.pulseGlow(badgePulse as HTMLElement);
    }
  }

  update(): void {
    this.render();
  }
}
