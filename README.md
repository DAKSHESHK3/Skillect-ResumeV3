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

### Installation steps:

```bash

# 1. Clone Repository
git clone <your-repo-url>

# 2. Navigate to Project Folder
cd "Project_Name"

# 3. Initialize Git (if required)
git init

# 4. Add Required Files
git add index.html api/config.js api/analyze.js


# ===============================
# VERCEL DEPLOYMENT
# ===============================

# 5. Import project to Vercel
# Go to Vercel Dashboard
# Click "New Project"
# Import Git Repository

# 6. Add API Keys in Environment Variables
# Project Settings → Environment Variables
# Add required API keys

# 7. Redeploy project


# ===============================
# SUPABASE SETUP
# ===============================

# 8. Register / Login → Create New Project

# 9. Authentication → URL Config
# Add Site URL (your deployed Vercel URL)

# 10. Add Redirect URLs
# https://your-vercel-app.vercel.app
# http://localhost:3000

# 11. Project Overview → Connect → API Keys
# Copy:
#   - Project URL
#   - Anon Key

# 12. Add to Vercel Environment Variables

SUPABASE_ANON_KEY=your_anon_key
SUPABASE_URL=your_project_url


# ===============================
# GOOGLE AUTH SETUP
# ===============================

# 13. Supabase → Authentication → Sign In Providers → Enable Google

# 14. Go to Google Cloud Console
# https://console.cloud.google.com
# Create or Import Project


# ===============================
# GOOGLE OAUTH CONFIGURATION
# ===============================

# 15. Left Sidebar → APIs & Services → OAuth Consent Screen

# 16. Create Project
# User Type: External
# Fill:
#   - App Name
#   - Support Email
#   - Developer Email
# Save

# 17. Left Sidebar → Credentials → Create Credentials
# Select: OAuth Client ID
# Application Type: Web Application
# Add Client Name

# 18. Authorized Redirect URLs
# Click Add URL
# Paste Callback URL (from Supabase panel):
# https://your-project-ref.supabase.co/auth/v1/callback

# 19. Set Redirect URLs

# Site URL:
# https://your-vercel-app.vercel.app

# Redirect URL:
# https://your-vercel-app.vercel.app/**


# ===============================
# FINAL STEP
# ===============================

# 20. Push to GitHub or Redeploy

git add .
git commit -m "Final deployment setup"
git push


# ===============================
# 21. congratulation 🎉
# ===============================

# Working Skillect App is Live 🚀
# Open your deployed Vercel URL

---

## ☁️ Deploying to Vercel


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
| `SUPABASE_URL` | ✅ Required |
| `SUPABASE_ANON_KEY` | ✅ Required |

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

