# Asgard's Gardens Landscaping — Website

A fast, modern, mobile-friendly static rebuild of the Asgard's Gardens Landscaping
Squarespace site — no frameworks, no build step, no backend.

**Business:** Asgard's Gardens Landscaping — one-time landscape construction in
Edmonton, AB & surrounding communities. Run by Richard and Craig.
**Phone:** (587) 545-9896 (`tel:+15875459896` / `sms:+15875459896`)

## Project structure

```
asgard-gardens-site/
├── index.html            # Home — hero, services grid, photo strip, why-us, testimonials, CTA
├── services.html         # 7 detailed services with Edmonton-specific copy
├── portfolio.html        # 10-photo gallery with vanilla-JS lightbox
├── about.html            # Richard & Craig's story, values, the "it's us" promise
├── blog.html             # "Look At Weather And The World" — links to the live archive
├── contact.html          # Click-to-call/text + SMS quote form (opens visitor's SMS app)
├── assets/
│   ├── css/style.css     # All styles — Norse theme: forest green, stone, muted gold
│   ├── js/main.js        # Mobile nav, lightbox, SMS form, footer year
│   └── img/              # 19 images downloaded from the original Squarespace site
└── README.md
```

## Preview locally

No build step. Serve the folder and open it:

```bash
cd ~/workspace/asgard-gardens-site
python3 -m http.server 8080
# then open http://localhost:8080/
```

Or open any `.html` file directly in a browser (recommended: use the server so
relative paths behave exactly as they will on GitHub Pages).

## Deploy to GitHub Pages

1. Create a new repo (e.g. `asgard-gardens-landscaping`) under the business/owner account.
2. Push the contents of this folder to the `main` branch (repo root = site root).
3. In repo **Settings → Pages**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
4. The site goes live at `https://<user>.github.io/<repo>/`.

Notes:
- All asset paths are **relative** (`assets/...`), so the site works both at a
  custom domain root and under a `github.io/<repo>/` subpath.
- The contact/quote form has no backend by design: it opens the visitor's SMS app
  pre-addressed to (587) 545-9896 with their message filled in.
- The blog is intentionally **not** migrated: `blog.html` links out to the live
  Squarespace archive at
  `https://asgardsgardenslandscaping.squarespace.com/weather-and-the-world`
  (opens in a new tab).

## Before going live

- [ ] Replace the placeholder domain `asgardsgardenslandscaping.ca` in every
      `<link rel="canonical">`, `og:url`, `og:image`, and JSON-LD `url` with the
      real domain (search for `asgardsgardenslandscaping.ca`).
- [ ] Replace the two testimonial placeholders on `index.html` with real reviews.
- [ ] Optional: add more specific captions to portfolio photos as new work is shot.

## Design notes

- Palette: deep forest green `#142019`, stone `#d8d4c6`, muted gold `#c9a24b`
  on a warm cream `#f6f3ea`. Dark hero + CTA bands, light content sections.
- Display type: Marcellus (Google Fonts, with serif fallbacks); body: Source Sans 3.
- Runic dividers (`ᚠᚢᚦᚨᚱᚲ`) used sparingly as section ornaments.
- Strictly no purple/blue gradients; flat, professional, high-contrast.
- Accessibility: semantic landmarks, skip link, alt text on every image,
  keyboard-operable lightbox, visible focus states, `prefers-reduced-motion` support.

## Image credits / source

All images were downloaded from the original Squarespace site
(`asgardsgardenslandscaping.squarespace.com`) in October 2026 and belong to the
business. Keep them in `assets/img/`; filenames are preserved from the source.

## Image hosting note (Oct 7, 2026)
The page images are currently hotlinked from the Squarespace CDN (`images.squarespace-cdn.com/...`)
because binary uploads aren't possible through the current GitHub integration. This works fine as long
as the Squarespace site stays up. To self-host later: upload the optimized WebP files (kept locally in
`originals/`, resized versions in `assets/img/`) into the repo's `assets/img/` folder via the GitHub web
UI (Add file > Upload files), then revert the `assets/img/...` URLs in the HTML files.
