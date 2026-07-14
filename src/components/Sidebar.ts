import { store } from '@/store/appStore';
import { NAV_ITEMS } from '@/data/feeds';
import type { ViewMode } from '@/types';
import { anim } from '@/utils/animations';

// Sidebar navigation component
export class Sidebar {
  private el: HTMLElement;
  private navClickHandlers: Map<string, () => void> = new Map();

  constructor() {
    this.el = document.createElement('aside');
    this.el.className = 'sidebar';
    this.el.id = 'sidebar';
  }

  render(): HTMLElement {
    const state = store.getState();

    this.el.innerHTML = `
      <div class="sidebar__brand">
        <div class="sidebar__logo">
          <span class="sidebar__logo-icon">◈</span>
          <div class="sidebar__logo-text">
            <span class="sidebar__logo-title">SUPER RSS</span>
            <span class="sidebar__logo-sub">Feed Intelligence</span>
          </div>
        </div>
        <button class="sidebar__collapse-btn" id="sidebar-toggle" aria-label="Toggle sidebar">
          <span>⟨⟩</span>
        </button>
      </div>

      <nav class="sidebar__nav">
        ${NAV_ITEMS.map(
          (item) => `
          <button
            class="sidebar__nav-item ${state.currentView === item.id ? 'sidebar__nav-item--active' : ''}"
            data-view="${item.id}"
            title="${item.description}"
          >
            <span class="sidebar__nav-icon">${item.icon}</span>
            <span class="sidebar__nav-label">${item.label}</span>
          </button>
        `
        ).join('')}
      </nav>

      <div class="sidebar__footer">
        <div class="sidebar__status">
          <span class="sidebar__status-dot ${store.isLoading() ? 'sidebar__status-dot--loading' : ''}"></span>
          <span class="sidebar__status-text">${store.isLoading() ? 'Syncing feeds…' : 'Live'}</span>
        </div>
        <div class="sidebar__version">v2.0.0 · TypeScript</div>
      </div>
    `;

    this.bindEvents();
    return this.el;
  }

  private bindEvents(): void {
    // Sidebar collapse toggle
    const toggleBtn = this.el.querySelector('#sidebar-toggle');
    toggleBtn?.addEventListener('click', () => {
      store.toggleSidebar();
      anim.sidebarToggle(this.el, store.getState().sidebarCollapsed);
    });

    // Navigation items
    const navItems = this.el.querySelectorAll<HTMLButtonElement>('[data-view]');
    navItems.forEach((btn) => {
      const view = btn.dataset.view as ViewMode;
      const handler = () => store.setView(view);
      btn.addEventListener('click', handler);
      this.navClickHandlers.set(view, handler);
    });
  }

  update(): void {
    const state = store.getState();

    // Update active nav item
    this.el.querySelectorAll('[data-view]').forEach((btn) => {
      const view = (btn as HTMLElement).dataset.view;
      btn.classList.toggle('sidebar__nav-item--active', view === state.currentView);
    });

    // Update status
    const statusDot = this.el.querySelector('.sidebar__status-dot');
    const statusText = this.el.querySelector('.sidebar__status-text');
    if (statusDot) {
      statusDot.classList.toggle('sidebar__status-dot--loading', store.isLoading());
    }
    if (statusText) {
      statusText.textContent = store.isLoading() ? 'Syncing feeds…' : 'Live';
    }

    // Collapsed state
    this.el.classList.toggle('sidebar--collapsed', state.sidebarCollapsed);
  }
}
