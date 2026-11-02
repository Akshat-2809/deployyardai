# Deployyard — deployyardai.com

Production site for Deployyard: infrastructure for scaled robotics deployment, currently in stealth. It's a faithful port of the approved homepage design, built the same way as Class of One but front end only: **no database, no email, no environment variables required.**

**The contact form doesn't deliver anything.** It checks the fields in the browser and shows "Thanks. We'll be in touch." What people type is not sent or stored, so you never receive it. The only way a visitor actually reaches you is `hello@deployyardai.com`.

Everything lives in one Next.js 16 app in [`web/`](web/).

```
deployyardai.com/
├── design/project/              Approved design (Main.dc.html is the source of truth)
└── web/                         Next.js 16 (App Router, React 19, TypeScript), deployed to Vercel
    ├── assets/                  Big Shoulders Display ExtraBold, used only to render the OG image
    └── src/
        ├── app/
        │   ├── page.tsx         homepage: assembles the sections, Organization JSON-LD
        │   ├── layout.tsx       fonts (next/font), metadata
        │   ├── globals.css      design tokens + shared classes
        │   ├── api/health/      GET { status: "ok" }
        │   ├── privacy/ terms/  legal pages (shared layout: components/LegalDoc.tsx)
        │   ├── not-found.tsx    styled 404
        │   └── opengraph-image.tsx, twitter-image.tsx, icon.svg, apple-icon.tsx, sitemap.ts, robots.ts
        ├── assets/              founder photo, self-hosted display font
        ├── components/          one component + CSS Module per section
        └── lib/
            ├── scrollStore.ts   shared client state for the nav (current section, marker position)
            ├── contact/         form validation, footer email draft
            └── site.ts          site URL, contact email, founder name and link
```

## Sections and what runs in the browser

Sections are Server Components and ship no JavaScript, except the interactive pieces marked "client" below.

| Section | Component | Client JS |
|---|---|---|
| Nav | `Nav` (server), with `Ruler` and `Readout` | client: those two |
| 00 The yard | `Hero` (server), with `Yard` | client: scale panel |
| 01 What we're building | `Building` (server), with `ScrollTrigger` | client: trigger only |
| 02 Track record | `Record` | none |
| 03 Launch log | `LaunchLog` (server), with `ScrollTrigger` | client: trigger only |
| 04 Founder | `Founder` | none |
| 05 Contact | `Contact` (server), with `ContactForm` | client: form (browser only) |
| Footer | `Footer` (server), with `FooterContact` and `ScrollTrigger` | client: email box, line trigger |

## Placeholders still to replace

- **Founder photo.** In place, cropped from a 750×712 screenshot to a 422px square (`web/src/assets/founder/pramod-patil.jpg`). Swap in the original if you have it.
- **Domain.** `deployyardai.com` is inferred from the `hello@deployyardai.com` address in the design. Change the default in `web/src/lib/site.ts` (or set `NEXT_PUBLIC_SITE_URL`) if the site will live elsewhere.
- **Legal review.** `/privacy` and `/terms` are drafts for Indian law, and they state plainly that the form doesn't send or store anything. Change them if that changes. Have them reviewed by a lawyer before launch. They name no legal entity or city, because the design gives only "India". They also make statements you need to keep true: a real Grievance Officer behind that address, the 24-month retention period and the ₹5,000 liability cap.
- **Facts in the design copy** were kept word for word and not checked: the founder's career dates, the $300M+, 50M+ and 4k+ figures, and the quote.

## Local setup

Requirements: Node 20.9 or later.

```bash
cd web
npm install
npm run dev                     # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | `next typegen` + `tsc --noEmit` |

## Deploy to Vercel

1. Push the repo to GitHub, GitLab or Bitbucket, then in Vercel choose **Add New → Project** and import it. Or, without a repo, run `npx vercel --prod` from `web/`.
2. Set **Root Directory** to `web`. The framework preset (Next.js) and the build command are detected automatically.
3. Deploy. No environment variables are needed. Preview deployments serve a `Disallow: /` robots.txt, so they stay out of search results.

## Connect the domain

1. In Vercel: Project → **Settings → Domains** → add `deployyardai.com`, then `www.deployyardai.com`, and choose to **redirect `www` to the apex**.
2. Vercel shows the exact DNS records to create (typically an **A** record for `@` and a **CNAME** for `www`). Add them at your domain registrar, removing any default "Parked" records first.
3. Wait for both domains to show **Valid Configuration**. HTTPS certificates are issued automatically.

To *receive* mail at hello@deployyardai.com, set up a mailbox provider (Google Workspace, Zoho, etc.) and add its MX records.

## Fidelity notes (vs. the approved design, `Main.dc.html`)

Compared side by side in Chrome at 1440, 1280, 768 and 390px, full page, with animations off so both are caught in the same state:
- **Layout:** the nav and every section have the same top and height as in the design at all four widths. Only the footer differs, as described below.
- **Pixels:** the only differences are the founder photo, the footer, the phone nav button below, and a 0.1px text offset on one callout number in the statement.

Intentional differences:
- **Footer:** uses the Class of One footer layout (brand, Explore, Policies, email box, line band, legal strip) in Deployyard's colours, instead of the design's engineering title block. The title block's scale, revisions and sheet cells are gone. To go back to it, the markup and CSS are in `design/project/Main.dc.html`.
- **Founder photo** replaces the `[Founder photo]` placeholder. It was supplied as a circle on a dark background, so it's cropped to the square inside that circle, which fits the design's square frame.
- **The form** flips to the same thank-you as the design, after checking the fields. It sends and stores nothing.
- **Pages added:** Privacy and Terms are real pages (they were `#yard` in the design), plus a styled 404. Nav and footer links point to `/#section`, so they work from every page. The marker and "Sec 00 / 05" readout show only on the homepage.
- **Phone nav:** "Get in touch" stays on one line (it wrapped to two in the design), and the nav shrinks slightly below 390px to fit. The nav's height is unchanged.
- **Ruler below 1000px:** scrolls sideways to keep the current section in view, and its tick marks run the full scrolling width. In the design they stopped after the first screenful.
- **The yard** cycles only while on screen, and not at all with reduced motion. It's announced to screen readers only when someone picks a level, not every 2.8 seconds.
- **Anchors** land below the sticky nav.
- **External links** (marked ↗) open in a new tab.
- **Launch log rows** are hidden before their animation only when JavaScript is on, so they read without it. Hovering a row responds immediately, where the design delayed it by up to half a second.
- **Display font is self-hosted.** `next/font/google` no longer lists Big Shoulders Display, so the same file the design loads from Google is in `src/assets/fonts`.

Kept as designed, worth a decision later:
- **The yard on phones.** Below 560px the design hides half the grid, so at most 120 bays show. "Site · 12 units" lights about 6 and "Network · 240 units" lights 120. The panel is labelled as an illustration, but the number and the dots don't match.
- **Callout numbers in the statement** at 1440px: "02" and "03" sit on the bracket under "infrastructure".
