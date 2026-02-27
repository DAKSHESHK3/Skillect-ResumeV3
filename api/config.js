// api/config.js
// Serves Supabase public config to the frontend.
// Keys are read from Vercel environment variables — never hardcoded.
//
// Add these in Vercel → Project → Settings → Environment Variables:
//   SUPABASE_URL       →  https://xxxx.supabase.co
//   SUPABASE_ANON_KEY  →  eyJ...  (your anon/public key)

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store'); // never cache — always fresh

  const url     = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return res.status(503).json({
      error: 'Supabase environment variables not configured.',
      hint:  'Add SUPABASE_URL and SUPABASE_ANON_KEY in Vercel → Settings → Environment Variables'
    });
  }

  return res.status(200).json({ url, anonKey });
}
