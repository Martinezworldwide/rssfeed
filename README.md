# Super RSS Feed--

High-tech multi-source news aggregator built with **TypeScript**, **Vite**, and **GSAP animations**.

Live demo: https://martinezworldwide.github.io/rssfeed/

## Features

- **Command Center** — Real-time dashboard with feed stats, live stream, and threat alerts
- **Feed Reader** — Unified article stream from 12+ sources with list/grid/magazine layouts
- **Threat Watch** — Cybersecurity extremism monitor for conservative/extreme sources (Breitbart, Fox News)
- **Multi-View** — Original side-by-side website mosaic feature
- **Source Matrix** — Configure and manage RSS feed sources
- **Analytics** — Feed performance, category breakdown, and health status

## Threat Watch

The Cybersecurity Extremism Monitor scans flagged sources for:

- Cyber attack narratives (ransomware, hacking, infrastructure)
- Radicalization signals
- Disinformation campaigns
- Militia activity indicators
- Election interference content
- Hate speech patterns

**Watch tiers:**
- **Critical** — Breitbart
- **High** — Fox News

## GitHub Pages Deployment

GitHub Pages cannot run TypeScript. You must serve the **built** files in `docs/`, not the source `index.html` at the repo root.

### Option A — Deploy from branch (recommended for you)

1. Go to **Settings → Pages**
2. Set **Source** to **Deploy from a branch**
3. **Branch:** `cursor/super-rss-rebuild-69b8` (or `main` after merge)
4. **Folder:** `/docs` ← **not** `/ (root)`
5. Save and wait 1–2 minutes

The `docs/` folder contains the compiled JavaScript/CSS from `npm run build`.

### Option B — GitHub Actions (automatic)

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow builds `docs/` and deploys automatically

### Rebuild after code changes

```bash
npm run build
git add docs/
git commit -m "Rebuild docs for GitHub Pages"
git push
```

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Or use: start.bat (Windows) / ./start.sh (Linux)

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- TypeScript 5.7
- Vite 6
- GSAP 3.12 (page transitions, counters, radar sweep, alert pulses)
- Vanilla DOM components (no framework overhead)
- GitHub Pages deployment

## Project Structure

```
src/
  components/     # UI views (Dashboard, Reader, Threat Watch, Multi-View, etc.)
  data/           # Feed sources, threat patterns, navigation
  services/       # RSS fetching, extremism scanning
  store/          # Central app state
  styles/         # High-tech dark theme CSS
  types/          # TypeScript interfaces
  utils/          # GSAP animation helpers
```

## Sources

CNN, Fox News, MSNBC, Breitbart, BBC World, Reuters, TechCrunch, The Verge, ESPN, Latino Rebels, NPR, Ars Technica
