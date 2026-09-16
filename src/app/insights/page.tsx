import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import {
  Reveal,
  SectionLabel,
  ArrowCircle,
} from "@/components/site/primitives";
import { NewsletterInline } from "@/components/site/newsletter-inline";
import {
  InsightsExplorer,
  type ArticleSummary,
} from "@/components/site/insights-explorer";
import { articles, articleCategories } from "@/lib/seo-content";
import { formatDate, isoDate } from "@/lib/format";
import {
  blogJsonLd,
  collectionJsonLd,
  breadcrumbJsonLd,
  SITE,
} from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Insights - The Growth Letter",
  description:
    "Practical ideas on growth, technology, sales and systems for local businesses. No motivational wallpaper.",
  alternates: { canonical: `${SITE}/insights` },
  openGraph: {
    title: "Insights - The Growth Letter · Udyamita",
    description:
      "Practical ideas on growth, technology, sales and systems. No motivational wallpaper.",
    url: `${SITE}/insights`,
    type: "website",
  },
};

// Sort newest-first by publishedAt
const sorted = [...articles].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);
const featured = sorted[0];

// Build filter pills: union of articleCategories (minus "All") and the
// actual categories present in the articles, deduped, "All" first.
const presentCategories = Array.from(
  new Set(articles.map((a) => a.category)),
);
const filterCategories = [
  "All",
  ...Array.from(
    new Set([
      ...articleCategories.filter((c) => c !== "All"),
      ...presentCategories,
    ]),
  ),
];

// Minimal summaries for the client (keep body strings server-side)
const summaries: ArticleSummary[] = sorted.map((a) => ({
  slug: a.slug,
  title: a.title,
  category: a.category,
  excerpt: a.excerpt,
  readingTime: a.readingTime,
  publishedAt: a.publishedAt,
}));

const blogSchema = blogJsonLd(sorted);
const collectionSchema = collectionJsonLd(
  sorted,
  "Insights - The Growth Letter",
  "Practical ideas on growth, technology, sales and systems for local businesses.",
  "/insights",
);

export default function InsightsIndexPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Insights" }]} />

      <PageHero
        no="39"
        label="Insights"
        title="The Growth Letter."
        intro="Practical ideas on growth, technology, sales and systems. No motivational wallpaper."
      />

      {/* Featured / latest article */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <Reveal>
            <SectionLabel no="01">Latest</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href={`/insights/${featured.slug}`}
              className="group mt-8 block rounded-3xl border border-border bg-background p-6 transition-colors duration-300 hover:border-foreground/30 sm:p-10 lg:p-14"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span className="eyebrow-sm">{featured.category}</span>
                    <span className="h-px w-8 bg-foreground/20" />
                    <time className="tnum" dateTime={isoDate(featured.publishedAt)}>
                      {formatDate(featured.publishedAt)}
                    </time>
                    <span className="tnum">· {featured.readingTime}</span>
                  </div>
                  <h2 className="display-lg mt-6 max-w-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-foreground">
                    Read article
                    <ArrowCircle size={34} />
                  </div>
                </div>
                <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
                  <div className="eyebrow-sm text-muted-foreground">Key takeaway</div>
                  <blockquote className="mt-4 border-l-2 border-royal pl-5 font-serif text-xl italic leading-relaxed text-foreground">
                    {featured.takeaway}
                  </blockquote>
                  <div className="mt-8 text-xs text-muted-foreground">
                    By {featured.author}
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Filter + archive grid (client) */}
      <InsightsExplorer
        articles={summaries}
        categories={filterCategories}
        excludeSlug={featured.slug}
      />

      {/* Newsletter */}
      <NewsletterInline />

      {/* CTA */}
      <CtaBand
        title="Stop guessing. Start diagnosing."
        intro="Run the two-minute Business Health Check and find the single move worth making first."
        primary={{ label: "Run the Health Check", href: "/business-health-check" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ label: "Insights", href: "/insights" }]),
          ),
        }}
      />
    </PageShell>
  );
}
