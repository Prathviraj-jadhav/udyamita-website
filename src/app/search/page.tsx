import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageHero } from "@/components/site/page-hero";
import { SearchClient } from "./search-client";
import { articles, caseStudies, serviceDetails, industryDetails } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search across Udyamita's insights, case studies, services, and industries. Find what you need quickly.",
  alternates: { canonical: "https://udyamita.com/search" },
  openGraph: {
    title: "Search · Udyamita",
    description: "Search across Udyamita's insights, case studies, services, and industries.",
    url: "https://udyamita.com/search",
    type: "website",
  },
};

type SearchItem = {
  type: "Article" | "Case Study" | "Service" | "Industry";
  title: string;
  description: string;
  href: string;
  category: string;
};

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const a of articles) {
    items.push({
      type: "Article",
      title: a.title,
      description: a.excerpt,
      href: `/insights/${a.slug}`,
      category: a.category,
    });
  }

  for (const c of caseStudies) {
    items.push({
      type: "Case Study",
      title: c.title,
      description: c.summary,
      href: `/case-studies/${c.slug}`,
      category: c.sector,
    });
  }

  for (const s of serviceDetails) {
    items.push({
      type: "Service",
      title: s.name,
      description: s.tagline,
      href: `/services/${s.slug}`,
      category: s.category,
    });
  }

  for (const i of industryDetails) {
    items.push({
      type: "Industry",
      title: i.name,
      description: i.headline,
      href: `/industries/${i.slug}`,
      category: `Tier ${i.tier}`,
    });
  }

  return items;
}

export default function SearchPage() {
  const index = buildIndex();

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Search" }]} />
      <PageHero
        no="S1"
        label="Search"
        title="Find what you need."
        intro="Search across insights, case studies, services, and industries."
      />
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          <div className="mx-auto max-w-3xl">
            <SearchClient index={index} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
