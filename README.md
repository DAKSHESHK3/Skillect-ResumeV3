<div align="center">

<br />

# ⚡ SKILLECT V3

**AI-powered resume analysis — reimagined.**

Split-hero layout · Mouse spotlight · Persistent history · Multi-provider AI

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Anthropic](https://img.shields.io/badge/Claude-Anthropic-orange?style=for-the-badge&logo=anthropic&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

<br />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

<br />

</div>

---

## ✨ What's New in V3

| Feature | Description |
|---|---|
| 🖥️ **Split Hero Layout** | 48/52 split — large typography & stats on the left, tool panel on the right |
| 🔦 **Mouse Spotlight** | Radial light bloom that follows your cursor with smooth lerp animation. Theme-aware: blue in dark mode, deeper blue in light mode |
| 📂 **History System** | Every analysis auto-saved to `localStorage` — view, reload, or delete from the header |
| 🔢 **History Count Badge** | Live badge on the header button showing how many analyses are stored |
| 🗑️ **Clear All History** | One-click wipe of all stored analyses from the history modal |
| ✅ **All V2 Features** | Scratch builder, JD matcher, cover letter, resume generator, judge panel, PDF export, dark/light mode toggle |

---

## 📁 Project Structure

```
skillect-v3/
├── index.html           ← V3 frontend (split layout + history)
├── api/
│   ├── analyze.js       ← Multi-provider AI proxy
│   └── config.js        ← Provider configuration
├── vercel.json          ← Routing config
└── .gitignore
```

---

## 🚀 Git Setup & Deployment

### Option A — Fresh Repo

```bash

```

### Option B — Tag V3 on Existing Repo

```bash
cd your-existing-skillect-repo
git checkout main && git pull

# Replace index.html with the new V3 file, keep analyze.js as-is

git add .
git commit -m "feat(v3): split-layout hero, mouse spotlight, history panel

BREAKING CHANGES:
- New page structure: 48/52 split layout (hero | tool)
- Logo icon changed from 68px transparent to 38px gradient square

NEW FEATURES:
- Hero left panel with reactive mouse spotlight (radial light bloom)
- Spotlight uses CSS --spot-color var, theme-aware (dark=blue, light=deeper blue)
- Geometric dot-grid and blur orb background on hero panel
- Analysis history auto-saved to localStorage after every analysis
- History modal: view, reload, delete individual analyses, or clear all
- History count badge in header (live count)
- All V2 features fully preserved

INTERNALS:
- Spotlight uses requestAnimationFrame with 0.12 lerp factor for smoothness
- History schema: { id, name, role, score, date, analysis }
- Max 50 history entries (auto-pruned oldest)
- localStorage key: skillect-history"

# Tag the release
git tag -a v3.0.0 -m "V3.0.0 — Split layout, spotlight, history"
git push origin main
git push origin v3.0.0
```

---

## ☁️ Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel
```

Add `vercel.json` to the project root if not already present:

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" }
  ]
}
```

> Vercel auto-deploys on every push to `main`. To trigger a manual production deploy: `vercel --prod`

### 🔑 Environment Variables

Configure in **Vercel Dashboard → Your Project → Settings → Environment Variables**:

| Variable | Status |
|---|---|
| `ANTHROPIC_API_KEY` | ✅ Required |
| `MISTRAL_API_KEY` | ⬜ Optional |
| `GROQ_API_KEY` | ⬜ Optional |
| `COHERE_API_KEY` | ⬜ Optional |
| `OPENROUTER_API_KEY` | ⬜ Optional |
| `TOGETHER_API_KEY` | ⬜ Optional |

---

## 🗄️ Recommended Database — Supabase

### Why Supabase?

| Option | Pros | Cons |
|---|---|---|
| ⭐ **Supabase** | Free tier · Built-in Auth · Postgres · RLS · Vercel-native | Requires account |
| Firebase | Easy setup | NoSQL · Vendor lock-in · Pricier at scale |
| PlanetScale | Serverless MySQL | MySQL quirks · Free tier removed |
| Neon | Serverless Postgres | Less mature auth story |
| MongoDB Atlas | Flexible schema | JSON-only · Less relational |

