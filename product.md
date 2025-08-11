# Dasun’s Pixel Lab — Product Brief

A pixel‑art hub for tiny, useful web apps, hosted on GitHub Pages at `dasunsucharith.github.io`.

---

## 1) Vision & Goals
**Vision:** A playful, lightweight launcher where Dasun can ship mini‑apps fast.

**Goals**
- Zero build‑step, single‑file index for quick edits.
- Add apps by editing one JSON‑ish list (no HTML touching).
- Fast search & keyboard navigation.
- Pixel aesthetic with great performance (no heavy JS frameworks).

**Non‑Goals**
- Complex backends, auth, or user data storage (apps may have their own).

---

## 2) Audience
- Developers, marketers, and clients exploring Dasun’s toolset.
- Yourself (internal lab to host WIP utilities).

---

## 3) Tech Stack
- **Hosting:** GitHub Pages on the `dasunsucharith.github.io` repo root.
- **Frontend:** Vanilla HTML/CSS/JS (Press Start 2P + VT323 fonts, canvas starfield).
- **No external JS deps** (keeps it fast and resilient).

---

## 4) Repo Structure (minimum)
```
/
├─ index.html            # Pixel Lab homepage (already provided)
├─ product.md            # This file
├─ favicon.png           # Optional; can be generated later
├─ invoicing-app/        # Existing app (example)
└─ <more-apps>/          # Each app in its own folder
```

Optional future:
```
└─ apps.json             # If you want to decouple data from index.html
```

---

## 5) Getting Started
1. Create or open your `dasunsucharith.github.io` repo.
2. Place `index.html` at the repo root (already done/provided in canvas).
3. Commit and push to `main`. GitHub Pages should auto‑serve the site.

Local preview (no server required):
- Open `index.html` directly in your browser, or
- Run a tiny static server:
  ```bash
  # Python 3
  python -m http.server 8080
  # then visit http://localhost:8080
  ```

---

## 6) Deployment (GitHub Pages)
- Repo: `dasunsucharith/dasunsucharith.github.io`
- Branch: `main`
- Pages URL: `https://dasunsucharith.github.io/`

If Pages isn’t live:
1. Go to **Settings → Pages**.
2. Set **Source** to `Deploy from a branch`, branch `main`, folder `/root`.
3. Save. Wait ~1–3 minutes and refresh.

---

## 7) Add a New App (edit the JS array)
In `index.html`, find the **App directory (edit here to add new apps)** section. Add an object with this schema:
```js
{
  title: 'My New App',       // Display name
  slug: 'my-new-app',        // Short id (directory name)
  url: '/my-new-app/',       // Absolute path to the app folder
  icon: '🧩',                // Emoji or leave blank
  tags: ['utility','tool'],  // Up to ~5 tags
  description: 'One‑liner of what it does.'
}
```
Create a folder at repo root named `my-new-app/` with its files (e.g., `index.html`).

**Search & keyboard:** The homepage will automatically filter as you type; `/` focuses the search; use arrow keys to move between cards; **Enter** opens the highlighted app.

---

## 8) Styling & Customization
Edit CSS variables at the top of `index.html` to re‑skin the site:
```css
:root{
  --bg:#0c1018;
  --panel:#141a24;
  --ink:#e6f1ff;
  --accent:#5df2d6;
  --accent-2:#ff7ad6;
  --accent-3:#ffdd57;
}
```
- Replace **cursor** or **starfield** if desired (both inside `index.html`).
- Header dock links can be changed in the `<nav class="dock">` section.

---

## 9) Optional: Move apps to `apps.json`
If you prefer to manage apps as data, create `/apps.json`:
```json
[
  {
    "title": "Invoicing App",
    "slug": "invoicing-app",
    "url": "/invoicing-app/",
    "icon": "🧾",
    "tags": ["billing","pdf"],
    "description": "Create and download clean invoices in seconds."
  }
]
```
Then, in `index.html`, replace the inline `apps` array with a fetch:
```js
fetch('/apps.json').then(r=>r.json()).then(list=>{ apps = list; render(apps); });
```
> Keep a small inline fallback if you want offline resilience.

---

## 10) Accessibility
- High contrast palette; avoid color‑only cues.
- Cards are focusable; `Enter` triggers their primary action.
- Add `aria-label` to links/icons when ambiguity exists.
- Maintain sensible heading order (H1 → H2 → cards inside grid).

---

## 11) Performance & Quality
- No framework; small, static assets.
- Prefer SVG over large PNGs (except for pixel‑art logos/icons).
- Compress images (TinyPNG, Squoosh) before committing.
- Test Lighthouse ≥ 95 for Performance/Best Practices/SEO.

---

## 12) Analytics (optional)
Choose one:
- **Plausible** (simple, privacy‑friendly)
- **GA4** via gtag.js
- **PostHog** if you need event tracking

Add the snippet in `index.html` just before `</body>`.

---

## 13) SEO & Social
- Set correct `<title>` and `<meta name="description">` in `index.html`.
- Configure Open Graph for sharing:
  ```html
  <meta property="og:title" content="Dasun’s Pixel Lab" />
  <meta property="og:description" content="A pixel‑art hub of tiny, useful web apps by Dasun Sucharith." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dasunsucharith.github.io/" />
  <meta property="og:image" content="https://dasunsucharith.github.io/og.png" />
  ```
- Optional `sitemap.xml` and `robots.txt` at repo root.

---

## 14) Favicon & Branding
- Place `favicon.png` at repo root (e.g., 64×64 or 128×128). Update `<link rel="icon">` in `index.html`.
- Consider a pixel‑art logo SVG for sharper scaling.

---

## 15) Versioning & Changelog
Use conventional commits and keep a minimal `CHANGELOG.md`:
```
## [1.1.0] - 2025-08-11
### Added
- Apps loaded from apps.json.

### Changed
- Header glass effect improved on mobile.
```

---

## 16) Security & Maintenance
- No secrets in repo.
- Keep third‑party scripts minimal and pinned.
- Run periodic link checks.

---

## 17) Roadmap Ideas
- Light/dark toggle (save preference to localStorage).
- Category filters (e.g., AI, Marketing, Utilities).
- App thumbnails (SVG pixel previews) with lazy‑loading.
- `apps.json` editor (in‑browser admin) gated behind a URL param.

---

## 18) Support & Contact
- Author: **Dasun Sucharith**
- Portfolio: https://dasunsucharith.me
- GitHub: https://github.com/dasunsucharith

> Tip: Keep `index.html` under ~200KB for instant loads on mobile.

