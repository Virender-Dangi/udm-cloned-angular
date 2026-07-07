## Goal

Bring in the "This is why we love what we do." testimonials and a new "Our Happy Clients" logo strip from udmglobal.com, and tighten the site for mobile, SEO, and speed.

## 1. Testimonials — "This is why we love what we do."

Currently Index.tsx has 2 testimonials. Expand to match udmglobal.com's set (Technicolor, Handpick 3d, Engagedly, plus additional quotes shown on the source). Keep the same Apple-styled card grid, add subtle carousel controls on mobile (horizontal snap-scroll) so cards stack cleanly on phones.

- File: `src/pages/Index.tsx` — replace testimonials array with the full set and swap the 2-col grid for a responsive snap-scroll row on mobile, 2-col on tablet, 3-col on desktop.

## 2. New section — "Our Happy Clients"

Add a client logo strip directly below testimonials on the homepage (and reuse on About).

- Grayscale logos, hover to color, ~120px wide, 6 per row desktop / 3 mobile.
- Client names from udmglobal.com (Technicolor, Difuze, Engagedly, Handpick 3d, etc.). Since we don't have licensed logo files, render each as a clean text/wordmark tile in a bordered card — same visual rhythm as a logo wall, zero image weight.
- File: new `src/components/HappyClients.tsx`, imported into `Index.tsx` and `About.tsx`.

## 3. Mobile polish

Audit and adjust across pages:

- Tap targets ≥ 48×48: bump nav links, footer links, and CTA buttons to `min-h-[48px]` with adequate padding.
- Fluid grid: confirm all section grids use `grid-cols-1` → `md:` → `lg:` breakpoints; testimonials switch to horizontal snap on `< md`.
- Hero + section images: add `loading="lazy"`, `decoding="async"`, and `sizes` attributes; cap hero image height on mobile.
- Files: `src/components/Navigation.tsx`, `src/components/Footer.tsx`, `src/components/Hero.tsx`, `src/components/ui/section.tsx`.

## 4. SEO compliance

- Ensure every page has exactly one `<h1>` (Index currently relies on Hero — verify), `<h2>` for section headings, semantic `<header>`/`<main>`/`<footer>`/`<nav>` wrappers.
- Add per-route `<title>` and `<meta description>` via `react-helmet-async` (install + wire `HelmetProvider` in `main.tsx`, add `<Helmet>` block to each of the 6 pages).
- Add `<link rel="canonical">` per route pointing at `https://udm-cloned-angular.lovable.app/<path>`.
- Add `alt` text to every `<img>` (logo, hero, any decorative — decorative gets `alt=""`).
- Add Organization JSON-LD to `index.html` (name, url, logo, address, phone, sameAs).
- Keep sitewide og:* in `index.html` as fallback.

## 5. Speed

- No new heavy dependencies (only `react-helmet-async`, ~3KB).
- Lazy-load route components in `App.tsx` with `React.lazy` + `Suspense` so Home ships without About/Services/Careers/etc. bundles.
- Remove unused `src/App.css` template rules if not referenced.
- Confirm images are compressed; keep hero image as-is (already jpg).

## Technical notes

- Stack: React 18 + Vite + Tailwind + react-router. No backend changes.
- New dep: `react-helmet-async`.
- New file: `src/components/HappyClients.tsx`.
- Edited: `index.html`, `src/main.tsx`, `src/App.tsx`, `src/pages/*.tsx` (all 6), `src/components/Navigation.tsx`, `src/components/Footer.tsx`, `src/components/Hero.tsx`.
- Out of scope: backend, forms wiring, analytics, dark-mode toggle UI.
