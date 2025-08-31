# HGW — One-Page Launch Site (Vite + React + Tailwind)

This is a ready-to-deploy HGW launch site with:
- Age gate (21+)
- Curated Shop section (add affiliate links)
- Story submission form (Formspree/Getform endpoint)
- Blog with 3 starter posts
- Newsletter subscribe (Buttondown/Mailchimp)

## Quick Start (Local)
1. Install Node.js 18+
2. `npm install`
3. `npm run dev` and open the local URL

## Deploy to Vercel
1. Create an account at https://vercel.com
2. Click **+ New Project** → **Manual → Drag & Drop**
3. Zip this folder and drop it into Vercel (or connect a Git repo).
4. Vercel will detect Vite and build automatically.
5. You’ll get a live URL like `https://hgw.vercel.app`.

## Replace Placeholders
- **Story form endpoint**: in `src/App.jsx` search for `formspree` and replace with your real endpoint.
- **Newsletter action**: replace Buttondown action URL in the Subscribe section.
- **Shop links**: replace `href` values in the `products` array.

## Notes
- Keep disclaimers/age gate for compliance.
- Add Privacy/Terms/Affiliate pages later (links in footer are placeholders).
