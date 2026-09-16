import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";
import { articles } from "@/lib/seo-content";
import { formatDate } from "@/lib/format";
import { ArchiveClient } from "./archive-client";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights Archive",
  description:
    "Browse every Udyamita article - the full archive of practical ideas on growth, technology, sales and systems. Filter by category, search by keyword.",
  alternates: { canonical: "https://udyamita.com/insights/archive" },
  openGraph: {
    title: "Insights Archive · Udyamita",
    description: "Browse every Udyamita article in the full archive.",
    url: "https://udyamita.com/insights/archive",
    type: "website",
  },
};

type ArticleSummary = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  topicCluster?: string;
};

export default function ArchivePage() {
  const summaries: ArticleSummary[] = articles
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      category: a.category,
      excerpt: a.excerpt,
      readingTime: a.readingTime,
      publishedAt: a.publishedAt,
      topicCluster: a.topicCluster,
    }))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

  const categories = Array.from(
    new Set(articles.map((a) => a.category)),
  ).sort();

  // Group by month for the default view
  const grouped: { month: string; items: ArticleSummary[] }[] = [];
  for (const a of summaries) {
    const d = new Date(a.publishedAt);
    const monthKey = d.toLocaleString("en-IN", {
      month: "long",
      year: "numeric",
    });
    const existing = grouped.find((g) => g.month === monthKey);
    if (existing) {
      existing.items.push(a);
    } else {
      grouped.push({ month: monthKey, items: [a] });
    }
  }

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { label: "Insights", href: "/insights" },
              { label: "Archive" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: "Archive" },
        ]}
      />
      <PageHero
        no="A1"
        label="Insights Archive"
        title="Every article. One place."
        intro="The full archive of Udyamita's practical ideas on growth, technology, sales and systems. Filter by category or search by keyword."
      />
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          <ArchiveClient
            articles={summaries}
            categories={categories}
            grouped={grouped}
          />

          {/* Topic clusters */}
          <div className="mt-16 border-t border-border pt-8">
            <p className="eyebrow text-muted-foreground mb-4">Browse by topic</p>
            <div className="flex flex-wrap gap-2">
              {["Local Visibility", "Lead Flow", "Operations", "Growth Leaks", "Strategy", "Discovery"].map(
                (c) => (
                  <Link
                    key={c}
                    href={`/insights/series/${c.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {c}
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Get the next article in your inbox."
        intro="The Growth Letter - one practical idea, no motivational wallpaper. Unsubscribe anytime."
        primary={{ label: "Subscribe", href: "/insights#newsletter" }}
        secondary={{ label: "Back to insights", href: "/insights" }}
      />
    </PageShell>
  );
}
