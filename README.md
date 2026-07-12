# Billy Shultan Al Hadiy — Personal Portfolio (V2)

A clean, premium, minimal **Bento Grid** portfolio for **Billy Shultan Al Hadiy** —
Electrical Engineer, IoT & Embedded Systems Developer. Content is sourced strictly
from the CV and supporting project documentation (nothing fabricated).

## Design

- Minimal, dark, premium aesthetic inspired by Apple / Linear / Vercel.
- Single accent color (`#2563EB`), Inter typography, generous spacing, rounded cards,
  thin borders, subtle glass, very subtle Framer Motion animations.
- Bento layout used sparingly (featured project + compact cards); the rest breathes.

## Tech Stack

- **Next.js** (App Router) + **React 19** + **TypeScript**
- **TailwindCSS** (dark theme, single accent)
- **Framer Motion** (subtle animations)
- **Lucide React** (icons)
- **React Hook Form** + **Zod** (accessible contact form)
- **next/image** (optimized images)

## Pages

| Route            | Purpose                                                      |
| ---------------- | ----------------------------------------------------------- |
| `/`              | Home — Hero, Featured Projects, Experience, Skills, Contact |
| `/projects`      | All projects                                                |
| `/projects/[slug]` | Project detail (cover, overview, role, tech, architecture, gallery, docs, prev/next) |
| `/resume`        | Education, Certificates, Awards, Skills, Experience Details, Download CV |
| `/about`         | Complete biography & career summary                         |
| `/contact`       | Contact form + social links                                 |

## Project Structure

```
portfolio-web/
├── public/assets/        # Profile photo, project images, CV, certificates
├── src/
│   ├── app/              # Routes, layout, globals, robots, sitemap
│   ├── components/       # UI + layout (Navbar, Hero, cards, gallery…)
│   ├── content/          # Single source of truth (CV-derived data)
│   ├── lib/              # Utils + TypeScript types
├── package.json · tailwind.config.ts · tsconfig.json
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build (local):

```bash
npm run build
npm run start
```

## Notes

- Local development only — no deployment config (Vercel / Netlify / Cloudflare).
- Contact shows only verified links (LinkedIn + Email); GitHub / Instagram / WhatsApp
  are omitted because they are not present in the CV.
- Project GitHub / Live Demo links are shown only when provided in the data.

© 2024–2026 Billy Shultan Al Hadiy
