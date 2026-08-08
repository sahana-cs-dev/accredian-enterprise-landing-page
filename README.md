# Accredian Enterprise — Landing Page (Partial Clone)

A Next.js recreation of the Accredian Enterprise landing page, built for the
Full Stack Developer Intern assignment. This is an original interpretation
of the page's structure and messaging, not a pixel-for-pixel or code copy of
the live site.

**Live demo:** https://accredian-enterprise-landing-page-a4cai5l7x-sahana20.vercel.app

**Repo:** https://github.com/sahana-cs-dev/accredian-enterprise-landing-page.git

---

## 1. Setup instructions

Requirements: Node.js 18.18+ (project was built and tested on Node 22) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build (also used by Vercel)
npm run build
npm run start
```

No environment variables are required — the bonus lead-capture form talks to
a local API route with no external services.

### Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects as **Next.js** — no config changes needed.
4. Deploy. No environment variables are required.

---

## 2. Approach taken

**Reading the brief, not just the site.** The live reference
(`enterprise.accredian.com`) is a client-rendered app that doesn't expose
much to a plain fetch, so rather than scraping markup, I treated the
assignment as a design/build brief: an enterprise B2B landing page for a
corporate upskilling platform, aimed at HR/L&D and business leaders, with a
strong "measurable ROI" positioning. I designed original copy and visuals
around that brief instead of copying the source site's text or layout
directly, per the "do not copy templates directly" instruction.

**Design system.** Rather than default to a generic SaaS look, I built a
small custom design language ("Ledger & Signal"): a cool off-white
background, deep ledger-green signal accent, a serif display face
(Fraunces) paired with a structured grotesk (IBM Plex Sans) and a mono face
(IBM Plex Mono) for data/labels — reinforcing the "training run like a
curriculum, measured like a P&L" idea. The signature element is a
dashboard/case-file aesthetic (the hero's "Cohort File" card, the ticker
strip, and the Outcomes analytics panel) since the brand's core pitch is
measurable, dashboard-driven training ROI.

**Structure.**

```
src/
  app/
    layout.tsx        Metadata + global font imports
    page.tsx           Composes all sections
    globals.css         Design tokens (colors, type, motion)
    api/leads/route.ts   Bonus: lead capture API route
  components/
    Navbar.tsx           Sticky nav + mobile menu
    Hero.tsx              Hero + ledger ticker strip
    TrustedBy.tsx          Client-type strip
    WhyEnterprise.tsx       4-feature grid
    Programs.tsx             Domain/program cards
    Approach.tsx              4-step methodology
    Outcomes.tsx               Analytics dashboard section
    Testimonials.tsx            Client quotes
    FAQ.tsx                      Accordion (client component)
    LeadForm.tsx                  Bonus: lead capture form
    Footer.tsx
  lib/sections.ts        Shared nav section config
```

Each section is a self-contained, reusable component composed in `page.tsx`,
so sections can be reordered, removed, or reused elsewhere without touching
other files. Only components that need interactivity (`Navbar`, `FAQ`,
`LeadForm`) are client components — everything else renders as a server
component for a smaller client bundle.

**Responsiveness.** Built mobile-first with Tailwind breakpoints; the nav
collapses to a hamburger menu below `lg`, grids collapse from 3→2→1
columns, and the hero card stacks under the headline on small screens.

**Bonus — lead capture.** Implemented a real form (`LeadForm.tsx`) posting
to a real Next.js API route (`app/api/leads/route.ts`) that validates input
and persists submissions to a JSON file (`.data/leads.json` locally). On
Vercel this falls back to `/tmp`, which is ephemeral — that's called out in
the route's code comments as a deliberate limitation for a take-home
project, with a note on what a production swap would look like (see
Improvements below).

---

## 3. AI usage explanation

I used Claude (this conversation) throughout development:

- **Where AI helped:**
  - Scaffolding the Next.js/TypeScript/Tailwind project and installing
    dependencies (including self-hosted fonts via `@fontsource`, chosen
    specifically because this sandbox's network allowlist didn't include
    `fonts.googleapis.com`, so `next/font/google` wasn't usable here).
  - Generating the initial design system (palette, type pairing, layout
    concept) and first-draft component code for every section.
  - Writing the bonus lead-capture API route and wiring it to the form.
  - Running `tsc --noEmit`, `next build`, `eslint`, and a local
    `next start` + `curl` smoke test (including a real POST to
    `/api/leads`) to catch type errors and confirm the app actually builds
    and serves before calling it done.

- **What I modified/would modify manually:** In a real submission, this is
  the point where I'd review AI-authored copy line-by-line for accuracy and
  tone, adjust the palette/type choices against my own taste, replace the
  placeholder client names and testimonials with real, permissioned
  content, and test on an actual mobile device rather than just responsive
  breakpoints in code. I'd also treat the AI-authored README and comments
  as a first draft to rewrite in my own voice before submitting.

---

## 4. Improvements with more time

- **Real data source.** Swap the hard-coded arrays (`PROGRAMS`, `FAQS`,
  `TICKER_ITEMS`, etc.) for a CMS or a typed JSON/API layer, so
  non-engineers can edit copy without a deploy.
- **Persistent lead storage.** Replace the JSON-file mock with a real
  database (Postgres via Vercel Postgres/Neon, or a CRM webhook like
  HubSpot/Salesforce) — the current `/tmp` fallback is explicitly a
  take-home-project shortcut, not something to ship.
- **Animation pass.** A more deliberate scroll-reveal for section entrances
  and a subtle page-load sequence for the hero, done with restraint per the
  "less is more" principle rather than scattering effects everywhere.
- **Active-section nav highlighting** using `IntersectionObserver` so the
  desktop nav shows which section is currently in view.
- **Accessibility audit.** Run axe/Lighthouse, verify color contrast on the
  ticker strip and dark Outcomes section, and add skip-to-content link.
- **Testing.** Component tests (React Testing Library) for the FAQ
  accordion and lead form's validation/error states, plus a Playwright
  smoke test for the full page.
- **Real screenshots/OG image** and favicon set instead of the Next.js
  default.

---

## Notes on content accuracy

Client names in the "Trusted by" strip and quote attributions in
Testimonials are **illustrative placeholders** (e.g. "Global Financial
Services Group"), not real Accredian clients — I didn't want to fabricate
endorsements from named companies I have no relationship with. All other
copy is original writing based on the general shape of an enterprise
corporate-training offering, not copied from the reference site.
