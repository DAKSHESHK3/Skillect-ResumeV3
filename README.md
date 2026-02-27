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
# SUPABASE SETUP
# ===============================

# 5. Register / Login → Create New Project

# 6. Authentication → URL Config
# Add Site URL (your deployed Vercel URL)

# 7. Add Redirect URLs
# https://your-vercel-app.vercel.app
# http://localhost:3000

# 8. Project Overview → Connect → API Keys
# Copy:
#   - Project URL
#   - Anon Key

# 9. Add to Environment Variables

SUPABASE_ANON_KEY=your_anon_key
SUPABASE_URL=your_project_url


# ===============================
# GOOGLE AUTH SETUP
# ===============================

# 10. Supabase → Authentication → Sign In Providers → Enable Google

# 11. Go to Google Cloud Console
# https://console.cloud.google.com
# Create or Import Project

# 12. APIs & Services → OAuth Consent Screen
# User Type: External
# Fill:
#   - App Name
#   - Support Email
#   - Developer Email

# 13. Credentials → Create Credentials
# Select: OAuth Client ID
# Application Type: Web Application

# 14. Authorized Redirect URL
# https://your-project-ref.supabase.co/auth/v1/callback

# 15. Set Redirect URLs

# Site URL:
# https://your-vercel-app.vercel.app

# Redirect URL:
# https://your-vercel-app.vercel.app/**

# ===============================
# DONE
# ===============================
---
```
## ☁️ Deploying to Vercel
```bash
# ===============================
# VERCEL DEPLOYMENT STEPS
# ===============================

# 1. Push project to GitHub

git add .
git commit -m "Initial commit"
git push origin main


# 2. Go to Vercel Dashboard
# https://vercel.com

# 3. Click "New Project"

# 4. Import your GitHub Repository

# 5. Add Environment Variables in Project Settings

SUPABASE_ANON_KEY=your_anon_key
SUPABASE_URL=your_project_url

# Add any other required API keys


# 6. Click Deploy

# 7. After deployment, copy your Vercel App URL

# 8. Use that URL in Supabase Site URL & Redirect URLs

# ===============================
# REDEPLOY (if needed)
# ===============================

# If you update environment variables:

# Vercel → Deployments → Redeploy

# Your Skillect App is Live 🚀
```

## SUPABASE SETUP STEPS

```bash
# 1. Go to Supabase
# https://supabase.com
# Sign Up / Login

# 2. Create New Project
# Click "New Project"
# Enter:
#   - Project Name
#   - Database Password
#   - Region
# Click Create

# Wait for project to initialize.


# ===============================
# AUTHENTICATION CONFIG
# ===============================

# 3. Left Sidebar → Authentication → URL Configuration

# 4. Add Site URL
# https://your-vercel-app.vercel.app

# 5. Add Redirect URLs
# https://your-vercel-app.vercel.app
# http://localhost:3000


# ===============================
# ENABLE GOOGLE AUTH
# ===============================

# 6. Left Sidebar → Authentication → Sign In Providers

# 7. Enable Google Provider

# 8. Leave this page open (you will paste Client ID & Secret later)


# ===============================
# GET API KEYS
# ===============================

# 9. Left Sidebar → Project Overview

# 10. Click "Connect"

# 11. Go to API Keys Section

# Copy:
#   - Project URL
#   - Anon Public Key


# ===============================
# ADD TO ENV VARIABLES
# ===============================

SUPABASE_URL=your_project_url
SUPABASE_ANON_KEY=your_anon_key


# ===============================
# CALLBACK URL (IMPORTANT)
# ===============================

# Supabase Callback URL Format:
# https://your-project-ref.supabase.co/auth/v1/callback

# Use this inside Google Cloud Console OAuth settings

# ===============================
# DONE
# ===============================
```

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

