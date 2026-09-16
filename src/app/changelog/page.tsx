import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "What we shipped, and when. The Udyamita website build history - every feature, page, and improvement, dated and documented.",
  alternates: { canonical: "https://udyamita.com/changelog" },
  openGraph: {
    title: "Changelog · Udyamita",
    description: "What we shipped, and when. The Udyamita website build history.",
    url: "https://udyamita.com/changelog",
    type: "website",
  },
};

type Entry = {
  date: string;
  version: string;
  title: string;
  type: "Feature" | "Page" | "Fix" | "Polish";
  items: string[];
};

const entries: Entry[] = [
  {
    date: "2026-09-14",
    version: "v1.6",
    title: "Dark mode, changelog, hover-to-play",
    type: "Feature",
    items: [
      "Dark/light theme toggle in the navbar (next-themes, persisted)",
      "This changelog page documenting the build history",
      "Hover-to-play video on homepage case-study cards (paused until hover)",
    ],
  },
  {
    date: "2026-09-14",
    version: "v1.5",
    title: "Insights archive, reading-time, card polish",
    type: "Feature",
    items: [
      "/insights/archive - full article archive with search, category filter, and grouped/list views",
      "ReadingTimeIndicator - sticky progress bar on article pages",
      "Industries grid cards now link to detail pages with refined hover micro-interactions",
    ],
  },
  {
    date: "2026-09-14",
    version: "v1.4",
    title: "Compare, topic clusters, parallax",
    type: "Feature",
    items: [
      "/compare - side-by-side service comparison (select up to 4, filter by category)",
      "/insights/series/[cluster] - 6 topic-cluster archive pages",
      "Subtle parallax on the hero video (respects reduced motion)",
    ],
  },
  {
    date: "2026-09-14",
    version: "v1.3",
    title: "Thank-you, feedback, dividers",
    type: "Feature",
    items: [
      "/thank-you confirmation page (adapts to form type via ?type= param)",
      "FeedbackWidget on articles - 'Was this helpful?' with API persistence",
      "Animated section dividers between homepage sections",
      "Form redirects: contact, partner, health-check → /thank-you",
    ],
  },
  {
    date: "2026-09-14",
    version: "v1.2",
    title: "FAQ, legal, 404, reading-progress",
    type: "Page",
    items: [
      "/faq - 20 FAQs across 5 categories with FAQPage schema",
      "/privacy, /terms, /cookies, /accessibility - 4 legal pages",
      "Custom 404 page - 'This page leaked.'",
      "ReadingProgress bar + BackToTop button on articles and case studies",
    ],
  },
  {
    date: "2026-09-14",
    version: "v1.1",
    title: "Individual pages for every nav section",
    type: "Page",
    items: [
      "17 new routes: /why-udyamita, /growth-os, /consulting, /pricing, /about",
      "Services index + 14 service detail pages",
      "Industries index + 12 industry detail pages",
      "Case studies index + 6 case study pages",
      "Insights blog index + 10 article pages",
      "Partners, Investors, Contact, Business Health Check pages",
      "Sitemap.xml + robots.txt + JSON-LD schema across all pages",
    ],
  },
  {
    date: "2026-09-13",
    version: "v1.0",
    title: "Homepage launch",
    type: "Feature",
    items: [
      "Blue monochrome Swiss design system (Lora + Poppins, no gradients)",
      "20 homepage sections: Hero, Growth OS, Health Check, Ladder, Services, Technology, Industries, Case Studies, Proof, Insights, Partners, Investors, FAQ, Contact, Footer",
      "Interactive Business Health Check (9-question diagnostic → score + leak + lead form)",
      "All supplied video/image asset URLs preserved exactly",
      "4 API routes with Prisma + Zod validation",
    ],
  },
];

const typeStyles: Record<Entry["type"], string> = {
  Feature: "border-foreground/30 text-foreground bg-foreground/5",
  Page: "border-foreground/30 text-foreground bg-foreground/5",
  Fix: "border-foreground/30 text-foreground bg-foreground/5",
  Polish: "border-foreground/30 text-foreground bg-foreground/5",
};

export default function ChangelogPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ label: "Changelog" }])),
        }}
      />
      <Breadcrumbs items={[{ label: "Changelog" }]} />
      <PageHero
        no="CL"
        label="Changelog"
        title="What we shipped, and when."
        intro="The build history of this website - every feature, page, and improvement, dated and documented. Built in the open."
      />
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          <div className="mx-auto max-w-3xl">
            <ol className="relative flex flex-col gap-12">
              {entries.map((entry, i) => (
                <li key={entry.version} className="relative pl-8 sm:pl-12">
                  {/* timeline dot + line */}
                  <span className="absolute left-0 top-1.5 inline-flex h-3 w-3 items-center justify-center rounded-full border-2 border-foreground bg-background" />
                  {i < entries.length - 1 && (
                    <span className="absolute left-[5px] top-6 h-[calc(100%-1.5rem)] w-px bg-border" />
                  )}

                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="eyebrow-sm tnum text-muted-foreground">
                      {entry.date}
                    </span>
                    <span className="font-serif text-sm font-medium text-foreground">
                      {entry.version}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.6rem] uppercase tracking-wider ${typeStyles[entry.type]}`}
                    >
                      {entry.type}
                    </span>
                  </div>

                  <h2 className="mt-2 font-serif text-2xl leading-snug">
                    {entry.title}
                  </h2>

                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 inline-block h-px w-3 shrink-0 bg-foreground/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="mt-16 rounded-2xl border border-border bg-paper p-6">
              <p className="eyebrow-sm text-muted-foreground">Built with</p>
              <p className="mt-3 text-sm text-foreground leading-relaxed">
                Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, Prisma (SQLite), Lora + Poppins. Blue monochrome Swiss design. All supplied asset URLs preserved exactly.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all"
                >
                  Back to home
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/insights/archive"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Read the archive
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Run your business health check."
        intro="Two minutes. Nine questions. Your score, your largest growth leak, and the single move worth making first."
        primary={{ label: "Start the diagnosis", href: "/business-health-check" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </PageShell>
  );
}
