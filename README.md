# SKILLECT V3 — Setup & Upgrade Guide

## What's New in V3

| Feature | Details |
|---|---|
| **Split Hero Layout** | Left panel with large typography & stats, right panel for the tool — matching the reference design |
| **Mouse Spotlight** | Radial light bloom follows your cursor on the left panel, with smooth lerp animation. Theme-aware: blue in dark mode, deeper blue in light mode |
| **History System** | Every analysis is auto-saved to `localStorage`. View, reload, or delete past results from the 📂 HISTORY button in the header |
| **History Count Badge** | Live count on the header button shows how many analyses are saved |
| **Clear All History** | One-click wipe of all stored analyses from the history modal |
| **All V2 features preserved** | Scratch builder, JD matcher, cover letter, resume generator, judge panel, PDF export, dark/light mode toggle |

---

## Recommended Backend DB — **Supabase** (PostgreSQL)

### Why Supabase over alternatives?

| Option | Pros | Cons |
|---|---|---|
| **Supabase** ⭐ | Free tier, built-in Auth, Postgres, RLS, Vercel-native | Needs account |
| Firebase | Easy setup | NoSQL, vendor lock-in, pricier at scale |
| PlanetScale | Serverless MySQL | MySQL quirks, free tier removed |
| Neon | Serverless Postgres | Less mature auth story |
| MongoDB Atlas | Flexible schema | JSON-only, less relational |

**Supabase wins** because: free PostgreSQL + Auth + Row Level Security in one platform, and it integrates with Vercel in ~5 minutes.

### V3 Architecture (current — no DB needed)
```
Browser ──→ Vercel Edge ──→ AI Provider APIs
   └── localStorage (history, theme)
```

### V4 Architecture (with Supabase)
```
Browser ──→ Vercel Edge ──→ AI Provider APIs
   └── Supabase Auth (JWT)
          └── Supabase DB (analyses table)
```

### Supabase Schema (ready for V4)

Run this in your Supabase SQL editor when you're ready:

```sql
-- analyses table
create table analyses (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references auth.users(id) on delete cascade,
  name        text not null,
  role        text,
  score       smallint check (score between 0 and 100),
  filename    text,
  analysis    jsonb not null,   -- full AI JSON response
  notes       text,             -- user's own notes (V4 feature)
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Index for fast user queries
create index on analyses (user_id, created_at desc);

-- Row Level Security — users ONLY see their own rows
alter table analyses enable row level security;

create policy "Users can view own analyses"
  on analyses for select using (auth.uid() = user_id);

create policy "Users can insert own analyses"
  on analyses for insert with check (auth.uid() = user_id);

create policy "Users can delete own analyses"
  on analyses for delete using (auth.uid() = user_id);

-- Auto-update updated_at
create or replace function update_timestamp()
returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger set_timestamp before update on analyses
  for each row execute procedure update_timestamp();
```

---

## Git — Create V3 Repo & Push

### Option A — Brand new repo (clean slate)

```bash
# 1. Create V3 project folder
mkdir skillect-v3 && cd skillect-v3

# 2. Initialise git
git init

# 3. Copy your V3 files into this folder:
#    - index.html  (the new V3 file)
#    - api/analyze.js
#    - vercel.json (see below)
#    - .gitignore

# 4. Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
.env
.env.local
.vercel/
.DS_Store
*.log
EOF

# 5. Stage and commit
git add .
git commit -m "feat: initial V3 — split layout, spotlight, history persistence"

# 6. Create repo on GitHub:
#    Go to github.com/new
#    Name: skillect-v3
#    Visibility: private or public
#    ⚠️  Do NOT tick "Add README" or "Add .gitignore" — leave blank

# 7. Link remote and push
git remote add origin https://github.com/YOUR_USERNAME/skillect-v3.git
git branch -M main
git push -u origin main
```

### Option B — Tag V3 on your existing repo

```bash
cd your-existing-skillect-repo

# Make sure you're on main and up to date
git checkout main
git pull

# Copy the new V3 index.html over the existing one
# (replace the file, keep analyze.js as-is)

# Stage all changes
git add .

# Commit with a detailed message
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
- localStorage key: skillect-history (was: resume-ai-theme for theme)"

# Create a semantic version tag
git tag -a v3.0.0 -m "V3.0.0 — Split layout, spotlight, history"

# Push commits and the tag
git push origin main
git push origin v3.0.0
```

---

## Vercel Deployment

### If this is a new repo
```bash
# Install Vercel CLI
npm i -g vercel

# From the project root, deploy
vercel

# Link it to your GitHub repo when prompted.
# Vercel auto-detects /api as serverless functions.
```

### Add vercel.json (if not already present)
```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" }
  ]
}
```

### Environment Variables
In Vercel dashboard → Your Project → Settings → Environment Variables:

```
ANTHROPIC_API_KEY     = sk-ant-api03-...
MISTRAL_API_KEY       = (optional)
GROQ_API_KEY          = (optional)
COHERE_API_KEY        = (optional)
OPENROUTER_API_KEY    = (optional)
TOGETHER_API_KEY      = (optional)
```

### Re-deploy after every git push
```bash
git push origin main
# Vercel auto-deploys on push to main.
# Or manually: vercel --prod
```

---

## Project File Structure

```
skillect-v3/
├── index.html           ← V3 frontend (split layout + history)
├── api/
│   └── analyze.js
    └── config.js      ← Multi-provider AI proxy (unchanged from V2)
├── vercel.json          ← Routing config
└── .gitignore
```

