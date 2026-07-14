import { store } from '@/store/appStore';
import { FEED_SOURCES, CATEGORY_META } from '@/data/feeds';
import { anim } from '@/utils/animations';

// Source management matrix view
export class SourcesView {
  private el: HTMLElement;

  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'view sources-view';
    this.el.id = 'view-sources';
  }

  render(): HTMLElement {
    const state = store.getState();
    const cache = store.getFeedCache();

    this.el.innerHTML = `
      <div class="sources-view__header anim-item">
        <h2>Source Matrix</h2>
        <p>${state.selectedSourceIds.length} of ${FEED_SOURCES.length} sources active in feed reader</p>
      </div>

      <div class="sources-view__grid">
        ${FEED_SOURCES.map((source) => {
          const isActive = state.selectedSourceIds.includes(source.id);
          const feedCache = cache.get(source.id);
          const articleCount = feedCache?.items.length ?? 0;
          const hasError = feedCache?.error;
          const categoryMeta = CATEGORY_META[source.category];

          return `
            <div
              class="source-card anim-item ${isActive ? 'source-card--active' : ''}"
              data-source="${source.id}"
              style="--source-color: ${source.color}"
            >
              <div class="source-card__header">
                <span class="source-card__icon">${source.icon}</span>
                <div class="source-card__info">
                  <h3 class="source-card__name">
                    ${source.name}
                    ${source.extremismWatch ? `<span class="source-card__watch-badge source-card__watch-badge--${source.watchTier}">⬢ WATCH</span>` : ''}
                  </h3>
                  <span class="source-card__region">${source.region} · ${source.language.toUpperCase()}</span>
                </div>
                <label class="source-card__toggle">
                  <input type="checkbox" ${isActive ? 'checked' : ''} data-toggle="${source.id}" />
                  <span class="source-card__toggle-slider"></span>
                </label>
              </div>

              <p class="source-card__desc">${source.description}</p>

              <div class="source-card__meta">
                <span class="source-card__category" style="color: ${categoryMeta.color}">
                  ${categoryMeta.icon} ${categoryMeta.label}
                </span>
                <span class="source-card__count">
                  ${hasError ? '⚠ Error' : `${articleCount} articles`}
                </span>
              </div>

              <div class="source-card__urls">
                <div class="source-card__url">
                  <span class="source-card__url-label">RSS</span>
                  <code>${source.url}</code>
                </div>
                <div class="source-card__url">
                  <span class="source-card__url-label">Web</span>
                  <a href="${source.websiteUrl}" target="_blank" rel="noopener">${source.websiteUrl}</a>
                </div>
              </div>

              ${hasError ? `<div class="source-card__error">⚠ ${feedCache?.error}</div>` : ''}
              ${source.extremismWatch ? `<div class="source-card__watch-notice">⬢ Under cybersecurity extremism watch — ${source.watchReason}</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    this.bindEvents();
    requestAnimationFrame(() => anim.revealChildren(this.el, '.source-card'));
    return this.el;
  }

  private bindEvents(): void {
    this.el.querySelectorAll('[data-toggle]').forEach((input) => {
      input.addEventListener('change', () => {
        const sourceId = (input as HTMLInputElement).dataset.toggle;
        if (sourceId) store.toggleSource(sourceId);
      });
    });

    this.el.querySelectorAll('.source-card').forEach((card) => {
      card.addEventListener('mouseenter', () => anim.cardHover(card as HTMLElement, true));
      card.addEventListener('mouseleave', () => anim.cardHover(card as HTMLElement, false));
    });
  }

  update(): void {
    this.render();
  }
}
