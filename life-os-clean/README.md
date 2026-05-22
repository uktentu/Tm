# Beyond Standard — Life OS

A personal Progressive Web App for discipline, progress, and growth. Built as a single-page app
deployed via GitHub Pages with GitHub Actions.

**Live URL:** https://uktentu.github.io/Tm/life-os/

---

## Features

- 📱 **PWA** — installable on desktop and mobile, works offline
- ☁️ **Cloud Sync** — backs up to a private GitHub Gist (your data, your control)
- 🔐 **Auth** — GitHub Personal Access Token (PAT) with `gist` scope only
- 🔔 **Push Notifications** — schedule-aware reminders for upcoming blocks
- 📊 **Analytics Dashboard** — monthly heatmap, category breakdown, insights, CSV/JSON export
- 🎯 **8 sections** — Today, Schedule, Training, Nutrition, Style, Bookmarks, Progress, Analytics

---

## Setup (User)

1. Visit https://uktentu.github.io/Tm/life-os/
2. Click **Install** when the install banner appears (or use browser menu → Install)
3. The auth modal will appear ~5 seconds after the splash
4. Click the GitHub link in the modal to generate a token:
   - Scope: `gist` (only)
   - Expiration: pick `No expiration` or a long period
5. Copy the token and paste it into the modal
6. Click **Connect & Sync**

Your data now syncs automatically every 5 minutes (and on tab focus) to a private GitHub Gist
named `life-os-data.json`.

---

## Deployment

### Branch structure

- `feature/uday` — source (this folder)
- `gh-pages` — published site (auto-built by Actions)

### GitHub Pages settings

1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages**, folder: **/ (root)**
4. Save

After pushing to `feature/uday`, the workflow at
`.github/workflows/deploy-life-os.yml` automatically deploys the `life-os/` folder
to `gh-pages/life-os/`.

---

## File Structure

```
life-os/
├── index.html       Main app shell + all CSS
├── app.js           All JavaScript (~1,000 lines)
├── sw.js            Service worker (cache + push handler)
├── manifest.json    PWA manifest
├── offline.html     Offline fallback page
├── icons/
│   └── icon.svg     App icon
└── README.md        This file
```

---

## Local Development

No build step. Just serve the folder:

```bash
cd life-os
python3 -m http.server 8000
# Open http://localhost:8000
```

Service workers and PWA features only work over HTTPS or localhost.

---

## Privacy

- Your GitHub PAT is stored only in your browser's `localStorage`
- Your data lives in a **private** GitHub Gist (only you can read it)
- No analytics, no tracking, no third-party scripts
- Open source — read the code

---

## Tech Stack

- Vanilla JavaScript (no build, no framework)
- CSS variables for theming (single dark theme with lime accent)
- Inline SVG for all charts (no chart library)
- Service Worker API + Web App Manifest
- Notifications API
- GitHub Gist API for sync
