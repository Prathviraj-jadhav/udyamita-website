# Udyamita Global LLP - Website

Production-ready Next.js 16 website for Udyamita Global LLP, a Business Growth and Transformation Partner.

## Quick Start

```bash
# Install dependencies
bun install

# Set up the database
cp .env.example .env  # if .env doesn't exist
bun run db:push
bun run db:generate

# Start the dev server
bun run dev
```

Visit http://localhost:3000

## Production Build

```bash
bun run build
bun run start
```

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York)
- **Fonts**: Lora (serif display) + Poppins (UI sans) via Google Fonts CSS import
- **Animations**: Framer Motion
- **Database**: Prisma ORM (SQLite)
- **Icons**: Lucide React
- **Theme**: next-themes (dark/light toggle)

## Design System

Blue monochrome Swiss design:
- Single blue hue (~255 deg) across shades + neutral greys/black/white
- No gradients, no other hues
- Media assets (videos/images) kept in natural color
- Fluid heading sizes with clamp()
- Responsive: 320px to 1600px+

## Project Structure

```
src/
  app/
    page.tsx              # Homepage (20+ sections)
    layout.tsx            # Root layout with fonts, metadata, schema
    globals.css           # Design system tokens + utilities
    about/                # About page
    business-health-check/ # Interactive diagnostic tool
    case-studies/         # Case studies index + [slug] detail pages
    changelog/            # Build history
    compare/              # Service comparison tool
    consulting/           # Consulting page
    contact/              # Contact form
    cookies/              # Cookies policy
    faq/                  # FAQ page (20 Q&As, 5 categories)
    glossary/             # 21 business terms with definitions
    growth-os/            # 10-stage Growth OS
    industries/           # Industries index + [slug] + compare
    insights/             # Blog index + [slug] + archive + series/[cluster]
    investors/            # Investor narrative
    not-found.tsx         # Custom 404
    partners/             # Partner ecosystem + application form
    pricing/              # 6-rung pricing ladder
    privacy/              # Privacy policy
    search/               # Site-wide search
    services/             # Services index + [slug] (14 detail pages)
    sitemap.ts            # Dynamic sitemap.xml
    robots.ts             # robots.txt with AI crawler rules
    terms/                # Terms of service
    thank-you/            # Form submission confirmation
    why-udyamita/         # Why Udyamita page
    .well-known/          # security.txt
    api/                  # API routes (contact, partner, health-check, newsletter, feedback)
  components/
    site/                 # Shared components (navbar, footer, primitives, etc.)
    ui/                   # shadcn/ui components
  lib/
    assets.ts             # Asset URL registry (preserved exactly)
    content.ts            # Business content data
    seo-content.ts        # Case studies, articles, services, industries
    schema.ts             # Server-safe JSON-LD helpers
    db.ts                 # Prisma client
    utils.ts              # cn() utility
    format.ts             # Date formatting
  hooks/                  # React hooks
prisma/
  schema.prisma           # Database models
public/
  llm.txt                  # AI crawler file
  manifest.json           # PWA manifest
  icon.svg                # App icon
  .well-known/security.txt
```

## Features

- 76 URLs (homepage + 30+ routes)
- Interactive Business Health Check (9-question diagnostic)
- Growth Leak Calculator (revenue leak estimator)
- Service comparison tool
- Industry comparison tool
- Site-wide search
- 12 blog articles with full bodies + FAQs
- 6 case studies
- 14 service detail pages
- 12 industry detail pages
- 6 topic-cluster series pages
- Dark/light theme toggle
- Reading progress bar + back-to-top on articles
- Table of contents on articles
- Share functionality (copy link, X, LinkedIn, WhatsApp)
- Feedback widget on articles
- Mobile sticky CTA bar
- Animated section dividers
- Hero parallax video
- Hover-to-play case study videos
- Full SEO: per-page metadata, JSON-LD schema, sitemap, robots.txt, LLM.txt
- AEO/GEO optimized content (question-style headings, FAQ schema, structured data)
- WCAG 2.2 AA accessibility (semantic HTML, ARIA, keyboard nav, reduced motion)

## Database Setup

The project uses SQLite via Prisma. The database file is created at `db/custom.db`.

```bash
bun run db:push      # Create tables
bun run db:generate  # Generate Prisma client
```

Models: HealthCheckLead, ContactMessage, PartnerApplication, NewsletterSubscriber, ArticleFeedback

## Environment Variables

```
DATABASE_URL=file:/path/to/db/custom.db
```

## License

Proprietary - Udyamita Global LLP
