import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";
import { articles } from "@/lib/seo-content";
import { formatDate } from "@/lib/format";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const clusters = [
  "Local Visibility",
  "Lead Flow",
  "Operations",
  "Growth Leaks",
  "Strategy",
  "Discovery",
] as const;

export function generateStaticParams() {
  return clusters.map((cluster) => ({
    cluster: cluster.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cluster: string }>;
}): Promise<Metadata> {
  const { cluster: raw } = await params;
  const clusterName = clusters.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === raw,
  );
  if (!clusterName) return { title: "Series not found" };
  const clusterArticles = articles.filter((a) => a.topicCluster === clusterName);
  return {
    title: `${clusterName} - Article Series`,
    description: `Read all Udyamita articles in the ${clusterName} series - practical ideas on growth, technology, sales and systems.`,
    alternates: { canonical: `https://udyamita.com/insights/series/${raw}` },
    openGraph: {
      title: `${clusterName} - Article Series · Udyamita`,
      description: `Read all articles in the ${clusterName} series.`,
      url: `https://udyamita.com/insights/series/${raw}`,
      type: "website",
    },
  };
}

export default async function ClusterPage({
  params,
}: {
  params: Promise<{ cluster: string }>;
}) {
  const { cluster: raw } = await params;
  const clusterName = clusters.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === raw,
  );
  if (!clusterName) notFound();

  const clusterArticles = articles
    .filter((a) => a.topicCluster === clusterName)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const clusterDescriptions: Record<string, string> = {
    "Local Visibility": "Be the answer when customers search near you. Foundations of local SEO, Google Business Profile, reviews, and discoverability.",
    "Lead Flow": "Turn interest into enquiries and enquiries into a tracked pipeline. Capture, qualify, follow up, and attribute.",
    Operations: "Run better - systems, automation, CRM, and the operational backbone that scales without breaking.",
    "Growth Leaks": "Growth doesn't break in one place. It leaks. Find the leaks and fix them in order.",
    Strategy: "The thinking behind the system - productisation, partnerships, and the long-term model.",
    Discovery: "Be found - SEO, AEO, and the shift from search links to AI answers.",
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { label: "Insights", href: "/insights" },
              { label: clusterName, href: `/insights/series/${raw}` },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: clusterName },
        ]}
      />
      <PageHero
        no="S2"
        label="Article Series"
        title={`${clusterName}.`}
        intro={clusterDescriptions[clusterName] ?? `All articles in the ${clusterName} series.`}
      />
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          {/* Series meta */}
          <div className="flex flex-wrap items-center gap-4 border-b border-border pb-6">
            <span className="eyebrow-sm text-muted-foreground">
              {clusterArticles.length} {clusterArticles.length === 1 ? "article" : "articles"} in this series
            </span>
            <span className="h-px flex-1 bg-border" />
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All insights
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Article list */}
          <ul className="mt-8 flex flex-col">
            {clusterArticles.map((a, i) => (
              <li key={a.slug} className="border-b border-border">
                <Link
                  href={`/insights/${a.slug}`}
                  className="group grid gap-4 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="eyebrow-sm tnum text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <span className="eyebrow-sm text-muted-foreground">{a.category}</span>
                    <h2 className="mt-1 font-serif text-xl leading-snug group-hover:text-royal transition-colors sm:text-2xl">
                      {a.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {a.excerpt}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{formatDate(a.publishedAt)}</span>
                      <span aria-hidden>·</span>
                      <span>{a.readingTime}</span>
                    </div>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Other series */}
          <div className="mt-16">
            <p className="eyebrow text-muted-foreground mb-4">Other series</p>
            <div className="flex flex-wrap gap-2">
              {clusters
                .filter((c) => c !== clusterName)
                .map((c) => (
                  <Link
                    key={c}
                    href={`/insights/series/${c.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {c}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Find your biggest growth leak."
        intro="Nine questions. Two minutes. The single move worth making first."
        primary={{ label: "Run the Health Check", href: "/business-health-check" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </PageShell>
  );
}
