import { App } from '@/App';
import '@/styles/main.css';

// Bootstrap Super RSS Feed application
const app = new App('#app');

app.init().catch((err) => {
  console.error('Failed to initialize Super RSS Feed:', err);
  const root = document.querySelector('#app');
  if (root) {
    // Surface init failures instead of leaving the loading screen visible
    const message = err instanceof Error ? err.message : 'Unknown error';
    root.innerHTML = `
      <div class="app-error">
        <h1>Initialization Error</h1>
        <p>${message}</p>
        <button onclick="location.reload()">Reload</button>
      </div>
    `;
  }
});
