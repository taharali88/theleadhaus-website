# LeadHaus — Brand Guidelines

## Brand summary
Premium B2B lead generation for established companies. The visual language is **warm-soft editorial**: cream paper, large serif headlines, a single rust/terracotta accent, minimal chrome. Think Stripe pre-2020 meets Mercury — friendly but authoritative.

---

## Color palette

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `oklch(96.5% 0.020 76)` ≈ `#F6F3EE` | Page background — warm cream |
| `--surface` | `oklch(99% 0.008 76)` ≈ `#FDFCFB` | Cards, modals |
| `--fg` | `oklch(17% 0.024 58)` ≈ `#1E1A14` | Primary text, dark fills |
| `--muted` | `oklch(47% 0.020 58)` ≈ `#6B5F52` | Secondary text, captions |
| `--border` | `oklch(88% 0.018 76)` ≈ `#E4DDD4` | Hairline borders |
| `--accent` | `oklch(59% 0.130 34)` ≈ `#C2622A` | Rust/terracotta — primary CTAs, eyebrows, one hero element per screen |
| `--accent-bg` | `--accent at 10% opacity` | Subtle accent tint |

**Rules:**
- Never pure black or pure white for backgrounds.
- Accent appears at most **twice per screen** — one eyebrow label + one CTA.
- Dark sections (footer, final CTA) use `--fg` as background with `--bg` text.

---

## Typography

### Fonts
All fonts load from Google Fonts — no local install required.

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

| Role | Family | Weight | Usage |
|------|--------|--------|-------|
| Display / headlines | `Playfair Display` → `Iowan Old Style, Georgia, serif` | 700–900 | H1, H2, pull quotes, hero |
| Body | `Inter` → `system-ui, sans-serif` | 400, 500, 600 | All body copy, nav, UI |
| Mono | `ui-monospace, JetBrains Mono, Menlo` | 400 | Metadata only |

### Scale (px)
`12 · 14 · 16 · 18 · 20 · 24 · 32 · 40 · 48 · 64 · 72+`

### Rules
- Line-height: 1.6 body, 1.15–1.2 display
- Letter-spacing: `-0.025em` on display ≥ 40px; `-0.01em` on subheads
- Eyebrow/kicker labels: `11px, weight 600, letter-spacing 0.14em, UPPERCASE, color --accent`

---

## Spacing & layout

- **Max width:** 1200px with 32px side padding (20px mobile)
- **Section padding:** 96px top+bottom desktop, 64px tablet, 48px mobile
- **Grid:** 12-column, 24px gutters (desktop) → 8-col / 4-col on smaller screens
- **Card padding:** 36–40px desktop, 24px mobile
- **Border radius:** `12px` cards/large surfaces, `8px` buttons/inputs, `4px` badges

---

## Components

### Buttons
```css
/* Primary — dark fill */
.btn-dark  { background: var(--fg); color: var(--bg); border-radius: 8px; padding: 10px 20px; font: 600 14px Inter; }
/* Secondary — outline */
.btn-outline { background: transparent; border: 1px solid var(--border); color: var(--fg); }
/* Accent — warm CTA */
.btn-warm  { background: var(--accent); color: #fff; }
/* Large variant */
.btn-lg    { padding: 13px 28px; font-size: 15px; }
```

### Cards
- White (`--surface`) background
- 1px `--border` border
- 12px radius
- 36–40px internal padding
- No default shadow; `box-shadow: 0 4px 24px oklch(17% 0.024 58 / 0.08)` on hover

### Eyebrow labels
```css
.eyebrow { font: 600 11px/1 Inter; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 14px; }
```

---

## Page structure (all pages)

Every page follows this shell:
1. **Sticky nav** — frosted background, logo left, 4 links center, CTA button right
2. **Page content** — sections with shared heading style (eyebrow → H2 → subtext)
3. **Dark CTA strip** — `--fg` background, headline + single button
4. **Footer** — 4-column grid, dark background, copyright

---

## Voice & copy tone

- Confident but not aggressive — "real results" not "revolutionary game-changer"
- Specific over vague — real pricing tiers, real process steps, real timelines
- British English (e.g. "recognised", "programme", not "recognized", "program")
- No emoji. No filler stats without a source.
- Sentence case on headings (except brand names)

---

## Anti-patterns (do not use)

- ❌ Gradient backgrounds (no purple-to-indigo hero)
- ❌ Emoji as feature icons
- ❌ Rounded card with a left-border color accent
- ❌ Generic placeholder copy ("Feature One", lorem ipsum)
- ❌ Multiple accent colors — rust only
- ❌ Inter or Roboto as a display/headline face — Playfair Display only for headings
- ❌ Drop shadows on inputs

---

## Site pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, logos, stats, how-it-works, services, testimonial, CTA |
| `how-it-works.html` | Process deep-dive, differentiators, integrations |
| `pricing.html` | 3 tiers with monthly/annual toggle, comparison table, FAQ |
| `contact.html` | Split form + trust signals |

All pages link to each other via the shared nav and footer.

---

## Tech stack

- Pure HTML + CSS (no framework, no build step)
- CSS custom properties in `:root` for all tokens
- Google Fonts via CDN (`<link>` tag in `<head>`)
- Vanilla JS for interactive elements (billing toggle, FAQ accordions, form submit)
- No external CSS files — all styles are inline in each HTML file
- Fully responsive (desktop → tablet → mobile breakpoints at 1024px, 768px, 640px)
