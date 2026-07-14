import { store } from '@/store/appStore';
import { FEED_SOURCES, CATEGORY_META } from '@/data/feeds';
import { formatRelativeTime } from '@/services/feedService';
import { anim } from '@/utils/animations';
import type { ReaderLayout } from '@/types';

// Unified feed reader view
export class ReaderView {
  private el: HTMLElement;

  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'view reader-view';
    this.el.id = 'view-reader';
  }

  render(): HTMLElement {
    const state = store.getState();
    const items = store.getFilteredItems();
    const loading = store.isLoading();

    this.el.innerHTML = `
      <div class="reader-view__toolbar anim-item">
        <div class="reader-view__categories">
          <button class="category-chip ${state.selectedCategory === 'all' ? 'category-chip--active' : ''}" data-category="all">
            All
          </button>
          ${Object.entries(CATEGORY_META)
            .map(
              ([key, meta]) => `
            <button
              class="category-chip ${state.selectedCategory === key ? 'category-chip--active' : ''}"
              data-category="${key}"
              style="--chip-color: ${meta.color}"
            >
              ${meta.icon} ${meta.label}
            </button>
          `
            )
            .join('')}
        </div>

        <div class="reader-view__layouts">
          ${(['list', 'grid', 'magazine'] as ReaderLayout[])
            .map(
              (layout) => `
            <button
              class="layout-btn ${state.readerLayout === layout ? 'layout-btn--active' : ''}"
              data-layout="${layout}"
              title="${layout} view"
            >
              ${layout === 'list' ? '☰' : layout === 'grid' ? '▦' : '▤'}
            </button>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="reader-view__content reader-view__content--${state.readerLayout}">
        ${
          loading && items.length === 0
            ? `<div class="reader-view__loading">
                <div class="reader-view__loading-spinner"></div>
                <p>Fetching articles from ${store.getLoadProgress().total} sources…</p>
              </div>`
            : items.length === 0
              ? `<div class="reader-view__empty">
                  <span class="reader-view__empty-icon">◎</span>
                  <p>No articles match your filters.</p>
                  <button class="reader-view__empty-btn" id="clear-filters">Clear Filters</button>
                </div>`
              : items
                  .map((item) => this.renderArticle(item, state.readerLayout))
                  .join('')
        }
      </div>
    `;

    this.bindEvents();
    requestAnimationFrame(() => anim.revealChildren(this.el, '.article-card'));
    return this.el;
  }

  private renderArticle(item: import('@/types').FeedItem, layout: ReaderLayout): string {
    const source = FEED_SOURCES.find((s) => s.id === item.sourceId);
    const categoryMeta = item.category ? CATEGORY_META[item.category] : null;

    if (layout === 'list') {
      return `
        <article class="article-card article-card--list anim-item">
          <div class="article-card__meta">
            <span class="article-card__source" style="color: ${source?.color}">${source?.icon} ${source?.name}</span>
            ${categoryMeta ? `<span class="article-card__category" style="color: ${categoryMeta.color}">${categoryMeta.label}</span>` : ''}
            <time>${formatRelativeTime(item.pubDate)}</time>
          </div>
          <a href="${item.link}" target="_blank" rel="noopener" class="article-card__title">${item.title}</a>
          <p class="article-card__desc">${item.description}</p>
        </article>
      `;
    }

    if (layout === 'grid') {
      return `
        <article class="article-card article-card--grid anim-item">
          ${item.imageUrl ? `<div class="article-card__image" style="background-image: url('${item.imageUrl}')"></div>` : `<div class="article-card__image article-card__image--placeholder" style="background: ${source?.color}20">${source?.icon ?? '📰'}</div>`}
          <div class="article-card__body">
            <div class="article-card__meta">
              <span style="color: ${source?.color}">${source?.name}</span>
              <time>${formatRelativeTime(item.pubDate)}</time>
            </div>
            <a href="${item.link}" target="_blank" rel="noopener" class="article-card__title">${item.title}</a>
          </div>
        </article>
      `;
    }

    // Magazine layout
    return `
      <article class="article-card article-card--magazine anim-item">
        <div class="article-card__magazine-inner">
          ${item.imageUrl ? `<div class="article-card__image" style="background-image: url('${item.imageUrl}')"></div>` : ''}
          <div class="article-card__body">
            <div class="article-card__meta">
              <span class="article-card__source" style="color: ${source?.color}">${source?.icon} ${source?.name}</span>
              ${categoryMeta ? `<span class="article-card__category">${categoryMeta.icon} ${categoryMeta.label}</span>` : ''}
            </div>
            <a href="${item.link}" target="_blank" rel="noopener" class="article-card__title">${item.title}</a>
            <p class="article-card__desc">${item.description}</p>
            <div class="article-card__footer">
              <time>${formatRelativeTime(item.pubDate)}</time>
              ${item.author ? `<span class="article-card__author">by ${item.author}</span>` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  private bindEvents(): void {
    // Category filters
    this.el.querySelectorAll('[data-category]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = (btn as HTMLElement).dataset.category as import('@/types').FeedCategory | 'all';
        store.setCategory(cat);
      });
    });

    // Layout toggles
    this.el.querySelectorAll('[data-layout]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const layout = (btn as HTMLElement).dataset.layout as ReaderLayout;
        store.setReaderLayout(layout);
      });
    });

    // Clear filters
    this.el.querySelector('#clear-filters')?.addEventListener('click', () => {
      store.setSearchQuery('');
      store.setCategory('all');
    });

    // Card hover animations
    this.el.querySelectorAll('.article-card').forEach((card) => {
      card.addEventListener('mouseenter', () => anim.cardHover(card as HTMLElement, true));
      card.addEventListener('mouseleave', () => anim.cardHover(card as HTMLElement, false));
    });
  }

  update(): void {
    this.render();
  }
}
