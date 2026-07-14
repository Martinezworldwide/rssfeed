import { store } from '@/store/appStore';
import { FEED_SOURCES } from '@/data/feeds';
import { anim } from '@/utils/animations';

// Multi-website view — the original feature, now integrated as one module
export class MultiView {
  private el: HTMLElement;

  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'view multi-view';
    this.el.id = 'view-multi-view';
  }

  render(): HTMLElement {
    const state = store.getState();
    const activeSources = FEED_SOURCES.filter((s) =>
      state.multiViewSourceIds.includes(s.id)
    );

    this.el.innerHTML = `
      <div class="multi-view__toolbar anim-item">
        <div class="multi-view__info">
          <span class="multi-view__badge">LEGACY FEATURE · ENHANCED</span>
          <p class="multi-view__desc">
            Browse multiple news websites side-by-side. Sites may block embedding —
            use the <strong>Open</strong> link to visit directly.
          </p>
        </div>

        <div class="multi-view__controls">
          <label class="multi-view__control">
            Columns
            <select id="multi-view-columns">
              ${([1, 2, 3, 4] as const)
                .map(
                  (n) =>
                    `<option value="${n}" ${state.multiViewColumns === n ? 'selected' : ''}>${n}</option>`
                )
                .join('')}
            </select>
          </label>
        </div>
      </div>

      <div class="multi-view__source-picker anim-item">
        ${FEED_SOURCES.map(
          (source) => `
          <button
            class="multi-view__source-chip ${state.multiViewSourceIds.includes(source.id) ? 'multi-view__source-chip--active' : ''}"
            data-source="${source.id}"
            style="--source-color: ${source.color}"
          >
            ${source.icon} ${source.name}
          </button>
        `
        ).join('')}
      </div>

      <div
        class="multi-view__grid multi-view__grid--cols-${state.multiViewColumns}"
        id="multi-view-grid"
      >
        ${
          activeSources.length > 0
            ? activeSources
                .map(
                  (source) => `
              <div class="multi-view__panel anim-item" data-panel="${source.id}">
                <div class="multi-view__panel-header" style="border-color: ${source.color}">
                  <span class="multi-view__panel-title">
                    ${source.icon} ${source.name}
                  </span>
                  <a
                    href="${source.websiteUrl}"
                    target="_blank"
                    rel="noopener"
                    class="multi-view__panel-open"
                  >
                    Open ↗
                  </a>
                </div>
                <div class="multi-view__panel-body">
                  <iframe
                    src="${source.websiteUrl}"
                    title="${source.name}"
                    class="multi-view__iframe"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  ></iframe>
                  <div class="multi-view__fallback">
                    <span>${source.icon}</span>
                    <p>Embedding blocked by ${source.name}</p>
                    <a href="${source.websiteUrl}" target="_blank" rel="noopener" class="multi-view__fallback-btn">
                      Visit ${source.name} ↗
                    </a>
                  </div>
                </div>
              </div>
            `
                )
                .join('')
            : `<div class="multi-view__empty anim-item">
                <span>▦</span>
                <p>Select sources above to populate the mosaic view.</p>
              </div>`
        }
      </div>
    `;

    this.bindEvents();
    requestAnimationFrame(() => anim.revealChildren(this.el, '.multi-view__panel'));
    return this.el;
  }

  private bindEvents(): void {
    // Column selector
    const colSelect = this.el.querySelector<HTMLSelectElement>('#multi-view-columns');
    colSelect?.addEventListener('change', () => {
      const val = Number(colSelect.value) as 1 | 2 | 3 | 4;
      store.setMultiViewColumns(val);
    });

    // Source chips
    this.el.querySelectorAll('[data-source]').forEach((chip) => {
      chip.addEventListener('click', () => {
        const sourceId = (chip as HTMLElement).dataset.source;
        if (sourceId) store.toggleMultiViewSource(sourceId);
      });
    });

    // Detect iframe load failures and show fallback
    this.el.querySelectorAll('.multi-view__iframe').forEach((iframe) => {
      const panel = iframe.closest('.multi-view__panel');
      const fallback = panel?.querySelector('.multi-view__fallback');

      // Show fallback after timeout if iframe appears blank
      setTimeout(() => {
        try {
          const iframeEl = iframe as HTMLIFrameElement;
          // Cross-origin access will throw — that's expected for blocked embeds
          const doc = iframeEl.contentDocument;
          if (!doc || doc.body?.innerHTML === '') {
            fallback?.classList.add('multi-view__fallback--visible');
          }
        } catch {
          // Cross-origin — iframe loaded but we can't inspect; assume OK
        }
      }, 5000);
    });
  }

  update(): void {
    this.render();
  }
}
