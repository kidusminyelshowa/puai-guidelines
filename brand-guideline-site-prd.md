# Product Requirements Document: Brand Guideline Site

**Status:** Draft v2.0
**Owner:** [Your name]
**Reference model:** [brand.dropbox.com](https://brand.dropbox.com/)
**Last updated:** September 10, 2026

---

## 1. Overview

A public-facing, editorial-style brand guideline site for one brand. Unlike a simple asset-download utility, this site tells the story of the brand's visual identity — the way brand.dropbox.com does — using large typographic statements, real photography/illustration showing the brand "in use," and dedicated sections per identity element (Logo, Color, Typography, Imagery, etc.). Downloadable assets (logo files, fonts, color swatches/palettes) are embedded directly within each relevant section rather than living in a separate downloads-only page.

This is a **static content site** — content and assets are managed by editing code/files directly (no CMS or admin login for v1).

## 2. What Changes From a Basic "Asset Repo" Site

The original concept was a utility-first download center. Modeling on Dropbox's site shifts the approach significantly:

| Basic asset repo (v1 concept) | Dropbox-style guideline site (this version) |
|---|---|
| List of files with download buttons | Narrative pages that explain the *thinking* behind each element, with downloads embedded inline |
| Minimal visuals | Heavy use of real photography, illustration, and "in use" application examples throughout every page |
| Flat page structure | Distinct top-level sections per identity pillar (Logo, Typography, Color, Imagery, etc.), each with its own hero statement and scroll-driven narrative |
| Color/type shown as swatches only | Color and type shown in context — paired with real photos/UI showing how they're applied |
| No dedicated photography guidance | Photography is a first-class section: style, subject categories (e.g., people, product, lifestyle), do's/don'ts, and downloadable sample/reference images |
| Single "brand kit" download | Downloads distributed per-section (logo files on the Logo page, font files on the Typography page, palette files on the Color page) plus one bundled "full kit" option |

## 3. Goals & Objectives

- Communicate the brand's identity in a way that feels crafted and on-brand — the site itself should be an example of the brand, not just a document about it.
- Give partners, press, and internal teams a single place to *understand* and *download* the brand's visual language.
- Show, not just tell: every principle (color, type, logo usage) is paired with real examples of it in use.
- Keep downloads frictionless — no login, no gated forms.
- Motion should feel considered, not decorative: minimal, editorial animation reinforces the reading rhythm of each page rather than calling attention to itself (see Section 7).

## 4. Target Users

| User type | Need |
|---|---|
| Journalists / press | Correct logo + colors, fast, plus context for how the brand presents itself |
| Partners / resellers | Logo files, usage rules, and visual tone reference for co-branded materials |
| Internal teams (design, marketing, sales) | Canonical source for assets *and* the reasoning behind design decisions |
| Photographers / designers hired for brand work | Photography style guide and reference imagery to shoot/design on-brand |
| General public / developers | Fonts, hex codes, palettes for integration or fan work |

## 5. Site Structure (Information Architecture)

Modeled directly on brand.dropbox.com's top-level navigation, adapted to a single-brand asset-download use case:

```
/                → Home: brand statement, quote/intro, nav into each section
/logo            → Logo system, variants, usage do's/don'ts, downloads
/typography      → Typeface(s), specimens, pairing/scale, font downloads
/color           → Palette (core, accent, greys/neutrals), values, "color in use" imagery, palette downloads
/imagery         → Photography + illustration + product visuals guidance ("brand in use")
/iconography     → (optional, if brand has an icon system) icon set + downloads
/guidelines      → (optional) consolidated do's/don'ts / voice & tone if added later
```

Every section follows the same rhythm seen on the Dropbox site:
1. **Hero statement** — a large, editorial headline capturing the philosophy of that element (e.g., "Our logo is the most instantly recognizable symbol of the brand").
2. **System explanation** — short paragraphs on the *why* and *how* (variants, structure, rules).
3. **Visual proof** — real photos, mockups, or UI screenshots showing the element applied in context ("in use").
4. **Assets + downloads** — the actual files, embedded at the point of relevance rather than on a separate page.

## 6. Page-by-Page Requirements

### 6.1 Home
- Full-bleed hero with brand statement / mission quote (styled like Dropbox's Charles Eames quote treatment)
- Short intro paragraph on what the guidelines are for
- Visual grid/preview linking into each section (Logo, Typography, Color, Imagery, etc.)
- Optional: rotating or scroll-triggered imagery strip showing brand-in-use snapshots

### 6.2 Logo
- Explanation of logo system: primary/full logo, secondary mark (icon-only), any "lockup" variants
- Visual breakdown of construction (clear space, proportions) — as imagery, not just text
- Usage do's and don'ts with side-by-side correct/incorrect visual examples
- Logo shown "in use" on real or mocked-up applications (signage, packaging, device screens, merch — whatever fits the brand)
- **Downloads:** individual logo variants (SVG, PNG @1x/2x/3x, PDF/EPS), plus "download all logo files (.zip)"

### 6.3 Typography
- Typeface name(s), role (display/headline vs. body), and rationale for the choice
- Full specimen: weights, styles, numerals, special characters
- Type scale / hierarchy example (H1–H6, body, caption) shown as a real layout, not just a list
- Pairing guidance if multiple typefaces are used
- **Downloads:** font files (.otf/.ttf/.woff2) if license allows, or link to licensed source

### 6.4 Color
- Palette organized into categories (e.g., Core, Accent, Neutrals/Greys) — mirroring Dropbox's Core / Accents / Greys structure
- Each color: name, HEX, RGB, CMYK (and Pantone if applicable), copy-to-clipboard
- "Matching color to imagery" section — real photos paired with the accent color they're associated with, showing color applied contextually (direct parallel to Dropbox's approach)
- **Downloads:** palette files (.ase, .sketchpalette, .json/.css variables)

### 6.5 Imagery (new section — directly addresses the photography request)
- **Photography:** style guidance (lighting, framing, subject matter, mood), organized by category (e.g., People, Product, Lifestyle/Environment) — same pattern as Dropbox's People / Content / Teams groupings
- **Illustration** (if the brand uses it): style, use cases (explaining abstract concepts, onboarding, error states)
- **Product/UI visuals** (if relevant): guidance on showing the product in real use
- Each category includes a curated image grid with captions (filename-style captions optional, echoing Dropbox's "IMG_4562.jpg"-style treatment for authenticity)
- **Downloads:** approved reference/sample images or an "Imagery kit" for partners who need brand-approved photo references (confirm licensing before making any real customer/stock photography downloadable — see Risks)

### 6.6 Iconography (optional, include only if the brand has a defined icon system)
- Icon grid, style rules (stroke weight, corner radius, grid)
- **Downloads:** icon set (SVG sprite or individual files)

## 7. Motion & Interaction Design

Motion is a core design pillar for this site, not a polish pass at the end. It should read as **minimal and editorial** — the same restraint as the typography and layout — so it supports the content's pacing rather than decorating it. Treat this section as a spec, not a suggestion.

**Principles**
- Motion clarifies hierarchy and sequence; it never exists purely for delight.
- Every animation is subtle: short duration, small distance, low opacity shifts. Nothing bounces, spins, or overshoots.
- Consistency over variety — a small, fixed set of easing curves and durations reused everywhere (e.g., one easing curve, two durations: ~200ms for micro-interactions, ~500–600ms for content reveals).
- Motion never blocks content. Users should be able to scroll past an unrevealed element and still read it — no animation should hide information indefinitely.

**Named patterns to implement**

| Pattern | Where it's used | Behavior |
|---|---|---|
| Scroll reveals | Section hero statements, "in use" imagery grids | Content fades/slides in (small vertical offset, ~16–24px) as it enters the viewport; triggers once, does not replay on scroll-up |
| Staggered reveal | Multi-item grids (logo variants, color swatches, imagery galleries) | Grid items animate in with a short stagger (~40–80ms between items) instead of all at once |
| Page transitions | Navigating between top-level sections (Logo → Typography → Color, etc.) | A brief, consistent cross-fade or subtle slide — no full-page reloads or jarring cuts |
| Hover states | Download buttons, color swatches, gallery thumbnails | Small, immediate feedback (opacity, scale ~1.02, or underline reveal) — no delay, no large scale jumps |
| Sticky/pinned nav behavior | Section nav (if present) | Nav can subtly compress or fade on scroll, not disappear abruptly |
| Copy-to-clipboard confirmation | Color value copy action | A small, brief inline confirmation (e.g., label swaps to "Copied" for ~1.5s) rather than a popup/toast |

**Explicit non-goals (the "editorial, not flashy" boundary)**
- No parallax scrolling effects
- No auto-playing carousels or looping animations that run indefinitely
- No large-scale hero video backgrounds with motion competing against text legibility
- No cursor-follow or gimmick interactions

**Technical & accessibility requirements**
- Respect `prefers-reduced-motion`: all scroll reveals, stagger, and transitions must have a reduced/instant fallback for users with this OS setting enabled.
- Animations should not block Largest Contentful Paint — hero text/images render immediately; motion is additive polish, not a gate to content.
- Implemented via Framer Motion (or CSS-only where possible, to minimize JS overhead) — see Section 10.

## 8. Functional Requirements Summary

| # | Feature | Requirement |
|---|---|---|
| 1 | Editorial page layout | Large typographic hero statements per section, scroll-based content flow |
| 2 | In-use imagery galleries | Grid/carousel components for photography, illustration, and application examples on every relevant page |
| 3 | Inline asset downloads | Download buttons embedded next to the relevant visual (not a separate download-only page) |
| 4 | Bulk download | "Download all" (.zip) per section + one master "Full brand kit" |
| 5 | Color swatch component | Interactive swatch with copy-to-clipboard for HEX/RGB/CMYK |
| 6 | Do's/don'ts comparison | Side-by-side correct/incorrect visual examples (logo, color, type) |
| 7 | Responsive imagery | All galleries and hero images responsive and optimized across breakpoints |
| 8 | Lightweight analytics | Track per-asset downloads and page views |
| 9 | Motion & interaction | Scroll reveals, staggered grid reveals, page transitions, hover states, and copy-confirmation micro-interactions per the patterns in Section 7 — implemented with a `prefers-reduced-motion` fallback |
| 10 | No footer | Pages end after content — no footer bar (no legal links, sitemap, or utility nav at the bottom). Keep the layout clean and unbroken, unlike the reference site's legal-heavy footer |

## 9. Content & Asset Inventory Needed (before build)

This approach is far more content-intensive than a simple file repo. Before development starts, gather:

- [ ] Final logo files (all variants: full color, black, white, icon-only) in source format (AI/EPS/SVG)
- [ ] Brand photography library — real, licensed images showing the brand's world (people, product, lifestyle) — or a plan to commission/curate them
- [ ] Illustration assets, if the brand uses an illustration style
- [ ] Font files + license confirmation for redistribution
- [ ] Finalized color values (HEX/RGB/CMYK/Pantone) for every palette color
- [ ] Short editorial copy per section (the "why" behind each design decision) — this is a copywriting task, not just an asset-collection one
- [ ] Any existing brand strategy/positioning docs to draw language from

## 10. Technical Requirements

- **Framework:** Next.js (React), App Router
- **Rendering:** Static Site Generation (SSG) — no database
- **Asset storage:** Repo-based (`/public/assets/...`) or a static bucket (S3/Cloudflare R2); imagery-heavy pages should use a CDN-backed image pipeline (e.g., `next/image` with a remote loader) given the volume of photography
- **Zip generation:** Pre-built zip files per section, checked into repo/bucket, or generated at build time (Node `archiver`)
- **Animation/interaction:** Framer Motion (or CSS-only where possible) implementing the specific patterns and constraints defined in Section 7 — this is a first-class requirement, not a nice-to-have polish pass
- **Styling:** Tailwind CSS, with brand-specific type/color tokens defined once content is finalized
- **Hosting:** Vercel or similar
- **Performance:** Given the heavy imagery, prioritize lazy-loading, responsive image sizes, and modern formats (WebP/AVIF) to keep load times reasonable
- **SEO:** Meta tags, Open Graph image per section (each section should have its own share preview, as Dropbox does)
- **Accessibility:** WCAG 2.1 AA — alt text for all photography/illustration (critical given the image volume), keyboard-navigable downloads and galleries, sufficient contrast in UI chrome

## 11. Out of Scope (v1)

- User accounts, login, or gated access
- CMS/admin panel for non-technical content updates
- Multi-brand or multi-tenant support
- A dedicated brand "Motion" documentation page (like Dropbox's, showcasing the brand's own animated logo/video assets) — only include if the brand has motion assets to show. This is separate from the site's own interaction design, which is in scope and covered in Section 7.
- Voice & Tone section (can be added later if needed — not required for the asset-download goal)
- Commissioning new photography/illustration (this PRD assumes existing or to-be-sourced assets; production of new imagery is a separate workstream)
- Site footer — no footer bar on any page (see Section 8, #10). Any legal links (privacy, terms) should live on a dedicated page or in the main nav if needed, not a persistent footer

## 12. Success Metrics

- Time-on-page and scroll depth on section pages (proxy for whether the editorial approach is landing)
- Number of asset downloads per month, per section
- Reduction in manual "send me the logo/photos" requests
- Page load performance (Core Web Vitals — target "Good," monitored closely given the imagery load)

## 13. Risks & Open Questions

- **Content volume is the real bottleneck.** This approach requires meaningfully more photography, copy, and curation than a basic asset repo — the timeline should account for content gathering, not just development.
- **Photography licensing:** confirm rights to display and/or make downloadable any real photos (especially if they include identifiable people, per Anthropic-unrelated but still real legal/licensing concerns). Stock or commissioned images need explicit usage rights before publishing.
- **Font licensing:** confirm the brand's typeface license permits redistribution of font files publicly.
- **Maintenance:** an editorial, imagery-rich site is more effort to keep current (new photos, refreshed examples) than a flat asset list. Confirm this ongoing effort is acceptable without a CMS.
- **Scope creep toward "brand book" vs. "download center":** decide early how much narrative/philosophy content is worth writing vs. keeping the focus on usable, downloadable assets.

## 14. Milestones (suggested)

| Phase | Deliverable |
|---|---|
| 1 | Content audit + gap list: logos, fonts, color values, photography/illustration inventory, licensing checks |
| 2 | Content/copywriting pass: hero statements and section narratives per page |
| 3 | IA + wireframes for each section, including imagery gallery layouts |
| 4 | Next.js build: layout system, reusable gallery/swatch/download components, asset + zip pipeline |
| 5 | Content population (imagery, copy, assets) + QA (visual, accessibility, broken links, performance) |
| 6 | Launch + analytics wired up |
