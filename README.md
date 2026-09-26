# Scantech Info Systems — Marketing Site

A production-ready **Next.js (App Router) + TypeScript + Tailwind CSS** build of the Scantech Info
Systems corporate site: enterprise IT infrastructure, hardware AMC, structured cabling and
commercial CCTV/security services.

The port is a 1:1 reproduction of the original single-file prototype — same design tokens, same
responsive behaviour, same copy. Verified element-for-element against the prototype at 390 px,
768 px, 1024 px and 1280 px.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Script              | Purpose                                     |
| ------------------- | ------------------------------------------- |
| `npm run build`     | Production build (`next build`)              |
| `npm start`         | Serve the production build                   |
| `npm run lint`      | ESLint (`eslint-config-next`)                |
| `npm run typecheck` | TypeScript, no emit                          |

Requires Node.js 18.18+.

## Project structure

```
app/
├── layout.tsx          Root layout — fonts, metadata, header/footer shell
├── page.tsx            Home page — composes the six sections
├── not-found.tsx       404
└── globals.css         Tailwind layers, icon-font and carousel primitives

components/
├── calendly/
│   ├── CalendlyCta.tsx        Booking CTA (popup, with anchor fallback)
│   └── CalendlyInline.tsx     Lazily-loaded inline booking calendar
├── icons/
│   └── MaterialSymbol.tsx     Thin wrapper around a Material Symbols glyph
├── layout/
│   ├── SiteHeader.tsx         Sticky nav
│   ├── MobileNav.tsx          Client component — drawer menu below xl
│   └── SiteFooter.tsx         Footer
├── sections/
│   ├── HeroSection.tsx        Client component — 3-slide hero carousel
│   ├── OemAllianceStrip.tsx
│   ├── CoreServicesSection.tsx
│   ├── WhyScantechSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
└── ui/
    ├── ConsultationForm.tsx   Client component — form + success state
    ├── SectionEyebrow.tsx     Kicker above a headline (one per section)
    └── SectionHeading.tsx     Centred eyebrow + headline + lede

lib/
├── content.ts          All site copy and typed content shapes
├── calendly.ts         Booking config, lazy script loader, URL attribution
├── analytics.ts        Provider-agnostic event shim + event names
├── site.ts             Public origin (canonical / sitemap / OG)
└── cn.ts               Minimal conditional className joiner

public/
├── favicon.ico             Site icon
├── scantech_logo_new.png   Brand wordmark (white-on-transparent, 2121x741)
├── fonts/                  Self-hosted Material Symbols variable font
└── images/                 Self-hosted photography

tailwind.config.ts      Design tokens (navy, executive blue, surfaces) + forms plugin
DESIGN.md               The design system the site is built against
ROADMAP.md              Audit and phased delivery plan (homepage first)
code.html               Original prototype, kept for reference
```

### Content is data, not markup

Everything rendered on the page lives in `lib/content.ts` behind exported types
(`HeroSlide`, `Service`, `Testimonial`, `OemPartner`, …). Layout components only map over that
data, so copy changes never require touching JSX, and a CMS payload can be dropped in later.

## Implementation notes

**Tailwind CSS v3.** The original loaded `cdn.tailwindcss.com?plugins=forms,container-queries`.
The config here reproduces that theme plus the `@tailwindcss/forms` plugin. Tailwind v4 renames and
re-scales several utilities the design depends on (`placeholder-*`, the `shadow-*` scale), so v3 is
what keeps the render predictable. The `shadow-2xs` / `shadow-xs` steps v3 lacks are defined in the
config to DESIGN.md's documented elevation values rather than being silently dropped.

**Fonts.** `next/font` self-hosts Inter and Plus Jakarta Sans, removing the render-blocking
third-party request and covering the full weight range via variable fonts.

**Material Symbols.** `next/font` cannot process Material Symbols (multi-axis variable font with
ligature glyphs), so it is self-hosted: the font file lives in `public/fonts/` and its `@font-face`
plus base rule are declared in `globals.css`, *ahead of* the utilities layer. That ordering matters —
see the comment block in `globals.css`.

**Images.** All imagery is self-hosted under `public/images/` and served through `next/image`. The
prototype's original `lh3.googleusercontent.com/aida/...` URLs are no longer resolvable, so
self-hosting is what keeps the visuals working.

**The hero carousel** is the only stateful part of the page: three slides, 5 s auto-advance,
wrapping infinitely in both directions. Two details make it behave well:

1. Every slide is stacked into the *same grid cell* (`.carousel-slide` in `globals.css`) rather than
   absolutely positioned, so the frame is always sized by the tallest slide. The hero measures the
   same height on all three slides, so nothing reflows as it rotates.
2. `carouselConfig.autoplayMs` drives both the interval and the progress bar's `animation-duration`
   (passed inline), so the bar and the timer cannot drift apart.

The hotline sits outside the slides so it never moves. Only slide 1 is an `<h1>` — the document keeps
a single stable top-level heading while the visible one rotates. Inactive slides are
`visibility: hidden`, which keeps their buttons and links out of the tab order.

**The consultation form** still confirms submissions client-side and discards the payload — it
needs a destination. Wire `handleSubmit` in `components/ui/ConsultationForm.tsx` to a route handler
once an inbox or CRM is chosen; everything else about it is ready.

**Calendly** is configured entirely through environment variables — see `.env.example`. With
`NEXT_PUBLIC_CALENDLY_URL` set, the header, hero and mobile-drawer CTAs open the booking popup and a
calendar appears in the contact section. With it unset, every CTA degrades to a plain anchor and no
booking UI renders, so the site ships cleanly before the event types exist. The widget script is
loaded on demand (on click, or when the embed nears the viewport) rather than with the page, and
UTM parameters are carried through into the booking.

**Mobile navigation** (`components/layout/MobileNav.tsx`) exists because the desktop nav is
`hidden xl:flex`. Escape closes the drawer, background scroll is locked while it is open, and focus
moves into the panel on open and returns to the toggle on close.

## Deviations from the prototype

The markup and layout were ported 1:1 and verified element-for-element against `code.html`. The
following changes were then made deliberately, because the original read as a consumer-SaaS
product rather than a thirty-year-old infrastructure firm:

| Change | Why |
| ------ | --- |
| Header rebuilt on solid navy | The supplied wordmark is white-on-transparent. On the previous white header most of it ("SCAN", "INFO SYSTEMS", "HARDWARE \\| SERVICE \\| SOFTWARE") was invisible. Also drops the `bg-white/95 backdrop-blur-md` glassmorphic shell. |
| Crimson `#f03c50` accent removed | Not in DESIGN.md. Replaced with the documented Primary Navy `#0F2942` and Tertiary Executive Blue `#1D4ED8`, which also harmonises with the blue in the logo. |
| Hero rebuilt onto navy, with a 3-slide carousel | Navy continues the masthead straight out of the header, which is what the white-on-transparent wordmark needs, and gives the page a dark-to-light rhythm. |
| Hero eyebrow pills removed | A rounded badge with a pulsing status dot is a product-status affordance carrying no meaning on a marketing page. Eyebrows are now plain letterspaced text — and every section on the page has one. |
| Floating glassmorphic metric card removed | The prototype floated a translucent, blurred card over the hero photo — the exact glassmorphism DESIGN.md rejects. |
| Hero image re-framed to 3:2 at 5/12 width | The source photos are 512×286. A half-width 16:10 frame upscaled them ~1.2×; this keeps them near native resolution. |
| Contact form gradient ribbon removed | Pure decoration; replaced with a solid navy rule. |
| `hover:-translate-y-1` removed from cards | Bouncy lift is a startup tell. |
| Star rating recoloured | Red stars read as an error state. Now a muted gold. |

### Known content limitations

- The hero photographs are only **512×286**. They are displayed at close to native size in a 3:2
  frame, but a Retina display will still upscale them. Higher-resolution originals are the single
  biggest visual improvement available.
- `public/scantech_logo_new.png` is a 2121×741 / 402 KB asset served at ~137 px wide. It is
  optimised by `next/image`, but a trimmed, retina-sized export would be tidier.

## Verified rendering

Measured in the browser at 320 / 360 / 390 / 414 / 640 / 768 / 1024 / 1280 / 1440 / 1920 px:

- no horizontal overflow, and no element whose right edge escapes the viewport, at any width
- the desktop nav and header CTA stay on a single line at 1280 px and above
- the carousel advances on a 5 s interval, wraps in both directions, and holds the hero at the same
  height on every slide (checked across four consecutive rotations)
- exactly one slide is `visibility: visible` at a time, so inactive CTAs stay out of the tab order
- all six sections on the page carry an eyebrow
- the mobile drawer opens, locks background scroll, closes on Escape and restores focus
- with no `NEXT_PUBLIC_CALENDLY_URL` set, every CTA renders as an anchor and no booking UI appears
- `/robots.txt`, `/sitemap.xml` and `/opengraph-image` all respond
- every image resolves (`complete`, non-zero `naturalWidth`), including the wordmark
