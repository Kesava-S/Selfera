# Selfera Website — Development & Maintenance Handover

> **Audience:** The Website Team taking over development and maintenance of `selfera.co.uk`.
> **Owner of this document:** Website Team lead — keep it updated with every significant change.
> **Last updated:** 24 July 2026

---

## 1. Project Overview

**Selfera** is an AI automation venture for owner-led UK small businesses (bookings, follow-ups, marketing automation). It is a sister venture of **Automaitee Digital**. This repository contains the public marketing website served at **https://www.selfera.co.uk/**.

- Locale: `en-GB` (UK spelling and conventions throughout — do not "fix" to US English).
- Current business status: **pre-registration** (Selfera Ltd registration with Companies House and ICO registration pending). Several compliance follow-ups depend on this — see Section 12.
- The site's job: explain the product, present solution pages and case studies, and convert visitors through two forms — **Book a Consultation** and **Enquire**.

---

## 2. Ownership, Roles & Escalation

| Role | Who | Responsibility |
|---|---|---|
| **Owner** | Kesavaram Sundararaj | Owns **all** accounts (GitHub, Vercel, domain, GA, n8n, Google). Grants access. Final say on production releases. |
| **Deploy approvers** | Muthukumar, Sakthivel | Approve and perform deployments **after confirming with the Owner**. |
| **Developer Leads** | — | Technical direction, code review. |
| **Website Team** | (you) | Day-to-day development and maintenance. This doc serves you. |
| **R&D Team** | — | Experimental features; nothing ships to this site without Website Team + approver sign-off. |
| **Privacy & Compliance Manager** | — | Handles all privacy/GDPR/data-subject requests and cookie/consent obligations. |

**Escalation path:** Website Team → Developer Lead → Muthukumar/Sakthivel → Owner.
Anything involving personal data, privacy requests, or the privacy policy → **Privacy & Compliance Manager** directly.

> **Credentials are never stored in this repository or this document.** All access is granted by the Owner and shared separately through a secure channel. If you find a credential committed anywhere, treat it as an incident: rotate it and inform the Owner.

---

## 3. Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| UI | React 18.3 + TypeScript 5.6 | Strict TS; build fails on type errors (`tsc -b`). |
| Routing | react-router-dom 6 | Path-based clean URLs. Modals are hash-driven (`#booking`, `#enquire`). |
| Styling | Tailwind CSS 3.4 (+ PostCSS/Autoprefixer) | Config in `tailwind.config.js`. |
| Animation | Framer Motion 12 | Used heavily; see prerender caveats in Section 6. |
| Icons | lucide-react | |
| Build | Vite 5 | Browser bundle + separate SSR bundle. |
| Rendering | **SSG (prerendered static HTML) + client hydration** | Custom pipeline, Section 6. |
| Hosting | Vercel | Config in `vercel.json`, Section 8. |
| Analytics | Google Analytics (`G-9CSHXBM8BZ`) | Tag in `index.html`. |
| Node | Use an active LTS Node (≥18) | No `.nvmrc` currently; match Vercel's Node setting. |

There is **no application backend in this repo**. Forms integrate with an external n8n instance (Section 9).

---

## 4. Repository Structure

```
├── index.html                 HTML shell: meta tags, GA tag, JSON-LD, font preloads
├── src/
│   ├── main.tsx               Browser entry (hydrates/creates React root)
│   ├── prerender-entry.tsx    SSR entry used only by the prerender script
│   ├── App.tsx                All routes, ScrollManager, modal open/close logic
│   ├── index.css              Global styles / Tailwind layers
│   ├── components/            Shared UI (Hero, Navbar, Footer, BookingForm,
│   │                          EnquireForm, IntroOverlay, animated scenes…)
│   └── pages/                 One file per route (solution pages, About,
│                              CaseStudies, PrivacyPolicy, SubProcessors, NotFound)
├── app/                       Next.js-STYLE metadata templates (layout.tsx,
│                              schema.tsx, robots.ts, sitemap.ts). NOT a Next.js
│                              app — reference/templates for metadata & SEO files.
├── public/                    Static assets served as-is:
│   ├── assets/                Images/video incl. avatar_seq60/ (141 animation frames)
│   ├── logos/, fonts/         Brand logos, Inter Variable font
│   ├── robots.txt, sitemap.xml  ← maintained MANUALLY (Section 11)
│   └── favicons, og-image.png, site.webmanifest
├── scripts/prerender.mjs      SSG script — injects rendered HTML per route (Section 6)
├── legacy/                    Old vanilla-JS version. Reference only. Do not extend.
├── vercel.json                Headers, caching, redirects, clean URLs
├── vite.config.ts, tsconfig.json, tailwind.config.js, postcss.config.js
├── PRIVACY_POLICY_INTERNAL_NOTES.md   Compliance source of truth (Section 12)
└── .agents/AGENTS.md          Rules for AI coding agents used on this repo
```

`dist/` and `dist-ssr/` are build outputs — never edit by hand.

---

## 5. Routes & Pages

All routes are declared in `src/App.tsx` and must be mirrored in `scripts/prerender.mjs` (ROUTES array) and `public/sitemap.xml`.

| Route(s) | Component | Purpose |
|---|---|---|
| `/` | Home composition in `App.tsx` | Hero, MagicText, ConcernCards, ConfidenceText, AboutSelfera, Industries |
| `/solutions-micro`, `/products` | `MicroAutomation` | Micro-automation offering |
| `/solutions-silentchurn` | `SilentChurn` | |
| `/solutions-noshow` | `NoShowRecovery` | |
| `/solutions-allergen` | `AllergenChecker` | |
| `/solutions-loyalty` | `LoyaltyLoop` | |
| `/solutions-end-to-end` | `EndToEnd` | |
| `/solutions`, `/solutions-custom` | `CustomSolutions` | |
| `/about` | `About` | |
| `/case-studies`, `/case-studies-ranna`, `/case-study-ranna` | `CaseStudies` | |
| `/privacy-policy` | `PrivacyPolicy` | Legal — change only with Privacy & Compliance Manager approval |
| `/sub-processors` | `SubProcessors` | Legal — same rule as above |
| `*` | `NotFound` | Prerendered to `dist/404.html` |

**Special behaviours (in `App.tsx`):**
- `#booking` / `#enquire` on any route opens the respective modal; closing rewrites the URL with `replace: true`.
- `ScrollManager` smooth-scrolls to other hash anchors and resets scroll on PUSH navigations (not on back/forward) — this logic was hard-won (see git history); change with care.
- `?orch-preview` query string renders only the `Orchestration` component (isolated preview mode).
- `IntroOverlay` plays on first load in the browser; it is skipped during SSR (`introDone` initialised to `true` when `window` is undefined).

**Adding a new page — checklist:**
1. Create component in `src/pages/`, add `<Route>` in `App.tsx` (lazy-loaded like the others).
2. Add the path to `ROUTES` in `scripts/prerender.mjs`.
3. Add the URL to `public/sitemap.xml`.
4. Add navigation links (Navbar/Footer) as needed — use react-router `<Link>`, never `<a href>` for internal routes.
5. Build locally and confirm `dist/<route>/index.html` exists and contains real content.

---

## 6. Build & Rendering Pipeline (read before touching anything)

`npm run build` runs **four** steps:

1. `tsc -b` — type-check (build fails on TS errors).
2. `vite build` — browser bundle → `dist/`.
3. `vite build --ssr src/prerender-entry.tsx --outDir dist-ssr` — Node-renderable bundle.
4. `node scripts/prerender.mjs` — renders every route in `ROUTES` to static HTML and injects it into `dist/<route>/index.html`.

What `prerender.mjs` also does (important, non-obvious):
- **Inlines the compiled CSS** into a `<style>` tag (removes the render-blocking stylesheet request).
- **Strips Framer Motion's initial animation frame styles** (`opacity:0`, `blur()`, `translate` transforms) via regex so crawlers see visible content. Consequence: **if you add new animation patterns whose initial state hides content in a different way, crawlers may see hidden/blank content** — extend the regexes or set SSR-safe initial states.
- The browser still boots React normally and replaces the snapshot behind the intro overlay.

**Rules that follow from this architecture:**
- Every component must be **SSR-safe**: no bare `window`/`document` access at module scope or first render. Guard with `typeof window !== 'undefined'` (see `App.tsx` for the pattern).
- If a build "succeeds" but a page is blank for crawlers, inspect the generated `dist/<route>/index.html` directly.
- `/404` is special-cased to `dist/404.html` (Vercel's convention for not-found pages).

---

## 7. Local Development

```bash
npm install
npm run dev        # Vite dev server → http://localhost:5173
npm run build      # full production build (all 4 steps)
npm run preview    # serve dist/ locally to verify the SSG output
```

- There are currently **no automated tests or linter configured**. Verification = `npm run build` passing + manual check of key pages/forms in `npm run preview`.
- `.agents/AGENTS.md` rules (apply to humans too): always share the localhost link when running a dev server; never commit/push without explicit permission.

---

## 8. Environments & Deployment

**Promotion flow (mandatory):**

```
localhost (dev) ──▶ STAGING (Vercel free *.vercel.app domain) ──▶ PRODUCTION (selfera.co.uk)
```

1. Develop and verify fully on localhost (`dev` → `preview`).
2. Push to the **staging** environment (Vercel project on the free `*.vercel.app` domain) and verify everything there — all routes, both forms, mobile layout.
3. Only after staging sign-off, **Muthukumar or Sakthivel confirm with the Owner and promote to production**.

- **Repo:** `https://github.com/Kesava-S/Selfera.git`. The repository currently has a single `main` branch; the dev/staging/production separation is handled at the Vercel/deployment level. If the team adopts long-lived `dev`/`staging` branches, record the mapping here.
- **Nobody deploys to production without approver + Owner confirmation.** No exceptions, including "tiny" copy fixes.

**`vercel.json` behaviour (do not remove without understanding):**
- `cleanUrls: true`, `trailingSlash: false` — extensionless URLs, matches the prerender output.
- Long-cache headers: `/assets/*`, `/logos/*`, `/fonts/*` = 1 year immutable (rename files to bust cache); favicons/OG image = 24 h + stale-while-revalidate.
- Security headers on all routes: `nosniff`, `X-Frame-Options: DENY`, referrer policy, permissions policy.
- Redirects: `/dashboard` and `/dashboard/*` → `https://ranna-admin-sandbox.vercel.app` (temporary redirect to the sandbox admin app — expect this destination to change as the product matures).

**Rollback:** use Vercel's "Instant Rollback" to the previous production deployment, then fix forward in git.

---

## 9. Forms & Data Integration (swappable layer — read carefully)

**Intended pipeline:** Booking/Enquiry submissions → **self-hosted n8n** (webhook) → **Google Sheets**. Both n8n and the Google account are owned by the Owner.

> ⚠️ **Current code state (verified 24 Jul 2026):** `src/components/BookingForm.tsx` and `src/components/EnquireForm.tsx` both **simulate** submission (`setTimeout`, comment `// Simulate submission`) — **no network request is made from this codebase**. The user-facing success state is shown regardless. Before relying on lead capture from a new deployment, wire the `handleSubmit` functions to the n8n webhook (or confirm which deployed variant carries the live integration) and record the final state here.

**Design contract — the backend is expected to change as Selfera scales** (Sheets → CRM/database). Any replacement must:
- Accept the exact field sets below, keep the UX contract (loading state → success state, per-field validation), and fail gracefully (never lose the user's input silently).
- Keep endpoint URLs **out of hard-coded source** — use a Vite env variable (e.g. `VITE_FORM_WEBHOOK_URL`, set per environment in Vercel) so staging and production post to different n8n workflows.
- Stay consistent with the Privacy Policy fields (see `PRIVACY_POLICY_INTERNAL_NOTES.md` — form/policy alignment is a compliance requirement, reviewed quarterly).

**Field sets (source of truth: the two components):**
- *BookingForm:* name, email, phone, businessName, businessType, websiteUrl, employeeCount, preferredDate, message.
- *EnquireForm:* fullName, businessName, email, whatsAppNumber, websiteUrl, industry, companySize, enquiryType, message, contactMethod, bestTime, **consent (checkbox — required for GDPR)**.

**n8n notes:** self-hosted (Owner's infrastructure). Access, workflow URLs and the Sheets destination are shared by the Owner separately. When testing on staging, use a staging workflow/sheet — never write test data into the production sheet.

---

## 10. Service Inventory

All accounts are held by the **Owner**, who grants access per person. Credentials are shared separately via a secure channel — never committed here.

| Service | Purpose | Notes |
|---|---|---|
| GitHub (`Kesava-S/Selfera`) | Source of truth | Access granted per developer |
| Vercel | Hosting: staging (`*.vercel.app`) + production | Deploys by Muthukumar/Sakthivel |
| Domain & DNS (`selfera.co.uk`) | Production domain | Registrar/DNS managed by Owner |
| Google Analytics | Traffic analytics (`G-9CSHXBM8BZ`) | Tag lives in `index.html` |
| n8n (self-hosted) | Form → Sheets automation | Owner's infrastructure |
| Google Sheets | Current lead storage | Will change at scale (Section 9) |
| Email (`support@selfera.co.uk`) | Support + privacy request intake | Privacy/GDPR mails must be flagged within 24 h (see internal notes) |
| `ranna-admin-sandbox.vercel.app` | `/dashboard` redirect target | Separate project, not in this repo |

When a new service is added (CRM, error monitoring, uptime checks…), **add a row here** with owner and purpose.

---

## 11. SEO & Content Conventions

- **Metadata:** canonical/OG/Twitter tags and JSON-LD (`ProfessionalService` schema) live in `index.html`; the `app/` folder holds the metadata/schema/robots/sitemap templates they were authored from. If you change one, keep the other in sync (or consolidate — noted in Section 13).
- **`public/sitemap.xml` and `public/robots.txt` are static files** — update the sitemap manually whenever routes change.
- Prerendered HTML is what Google indexes — after SEO-relevant changes, always inspect `dist/<route>/index.html`.
- OG image: `public/og-image.png` (referenced absolutely from meta tags).
- Copy style: UK English, sentence case, no exclamation-heavy marketing tone.
- Route aliases (`/products`, `/solutions-custom`, `/case-study-ranna`, …) exist for inbound links; don't delete them without redirects.

---

## 12. Privacy & Compliance (pointer)

**Source of truth: `PRIVACY_POLICY_INTERNAL_NOTES.md` + the Privacy & Compliance Manager.** The Website Team's obligations, in short:

- Never change `/privacy-policy` or `/sub-processors` content without Privacy & Compliance Manager approval.
- Form fields must match what the Privacy Policy declares (quarterly review).
- A **cookie/consent banner is mandatory before any advertising traffic is driven** (PECR/ICO guidance) — currently not implemented; GA loads unconditionally from `index.html`. Coordinate with the Privacy & Compliance Manager before ad campaigns.
- Post-registration tasks (registered office address, Companies House number, removing the pre-registration notice, ICO registration) will land on this team once the company is registered — details in the internal notes.
- Any inbound data-subject/GDPR request → forward to the Privacy & Compliance Manager immediately (24 h flag rule).

---

## 13. Known Issues, Fragile Areas & Tech Debt

Derived from git history and code review — handle these areas with extra care:

1. **Routing & scroll behaviour** — the current `ScrollManager` + hash-modal + `replaceState` design is the result of ~8 successive bug-fix commits (back-button scroll loss, history pollution, hash leakage in URLs). Regression-test back/forward navigation and modal open/close after *any* routing change.
2. **SSG/hydration** — the pipeline was introduced to fix SEO/hydration issues. The prerender script's regex-stripping of Framer Motion initial styles is brittle (Section 6). Mismatched SSR/client markup will cause hydration flicker.
3. **Forms not wired** — submission is simulated in code (Section 9). Highest-priority item for whoever takes over.
4. **Heavy media** — `public/assets/avatar_seq60/` ships 141 animation frames; founder videos are MP4. Watch bandwidth/LCP if these are touched; existing assets are heavily cache-optimised via `vercel.json`.
5. **No tests, no linter, no CI** — quality gate is `tsc` + manual verification. Consider adding at least ESLint + a build check on PRs.
6. **`app/` folder is Next.js-style but this is a Vite app** — metadata is duplicated between `app/` templates and `index.html`; keep in sync or consolidate.
7. **Manual sitemap** — easy to forget when adding routes (see checklist in Section 5).
8. **`legacy/` folder** — dead code kept for reference; do not build on it.
9. **No cookie consent banner** while GA is active — compliance risk gate before paid traffic (Section 12).

---

## 14. Maintenance Checklist (light, periodic)

**Monthly**
- [ ] `npm outdated` — review/apply dependency updates on a branch; full build + staging verify before promoting. (Framer Motion majors and React Router majors historically cause breakage — read changelogs.)
- [ ] Submit a test entry through both forms on production; confirm it arrives in the destination (n8n → Sheets).
- [ ] Skim GA: traffic anomalies, 404 hits, top landing pages.
- [ ] Check Vercel dashboard for failed/slow deployments and bandwidth usage.

**Quarterly**
- [ ] Form fields ↔ Privacy Policy alignment review (with Privacy & Compliance Manager).
- [ ] Google Search Console: coverage/indexing of all prerendered routes; sitemap still accurate.
- [ ] Domain/DNS + SSL expiry sanity check.
- [ ] Review this document and update stale sections.

**On every release**
- [ ] `npm run build` clean; spot-check `dist/` prerendered HTML.
- [ ] Staging verification of all routes + both modals (desktop & mobile).
- [ ] Approver (Muthukumar/Sakthivel) confirms with Owner before production promote.

---

## 15. High-Level Roadmap (context only)

- **Form backend migration:** n8n → Google Sheets is interim; expect a move to a proper CRM/database as lead volume grows. The env-var webhook design (Section 9) exists to make this a backend-only swap.
- **Company registration:** Companies House + ICO registration will trigger the compliance updates listed in the internal notes.
- **Dashboard:** `/dashboard` currently redirects to a sandbox admin app; expect this to become a real product surface later.

Detailed roadmap lives with the Owner/Developer Leads — this section only tells you which parts of the codebase are *expected* to change so you don't over-invest in them.

---

## 16. First Week for a New Team (suggested)

1. Get access from the Owner: GitHub, Vercel (staging + prod), GA, n8n, Sheets, this doc.
2. Clone, `npm install`, `npm run dev` — click through every route and both modals.
3. Run `npm run build` and read `scripts/prerender.mjs` until Section 6 makes sense.
4. Read `PRIVACY_POLICY_INTERNAL_NOTES.md` (at least the action items).
5. Trace one form end-to-end on staging (form → n8n workflow → sheet) — this validates the most business-critical path and confirms whether Section 9's warning still applies.
6. Make a trivial change, take it through dev → staging → approved production promote, so the release process is exercised once with the approvers.
