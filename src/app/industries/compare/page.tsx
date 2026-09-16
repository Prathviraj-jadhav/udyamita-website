import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";
import { industryDetails } from "@/lib/seo-content";
import { IndustriesCompareClient } from "./compare-client";

export const metadata: Metadata = {
  title: "Compare Industries",
  description:
    "Compare Udyamita's industries side-by-side - growth leak, recommended rung, services, and technology. Find your industry and its characteristic leak.",
  alternates: { canonical: "https://udyamita.com/industries/compare" },
  openGraph: {
    title: "Compare Industries · Udyamita",
    description: "Compare industries side-by-side - leak, rung, services.",
    url: "https://udyamita.com/industries/compare",
    type: "website",
  },
};

export default function IndustriesComparePage() {
  const industries = industryDetails.map((i) => ({
    slug: i.slug,
    name: i.name,
    tier: i.tier,
    headline: i.headline,
    pain: i.pain,
    growthLeaks: i.growthLeaks,
    recommendedRung: i.recommendedRung,
    services: i.services,
    technology: i.technology,
  }));

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { label: "Industries", href: "/industries" },
              { label: "Compare" },
            ]),
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Industries", href: "/industries" },
          { label: "Compare" },
        ]}
      />
      <PageHero
        no="IC"
        label="Compare Industries"
        title="Compare industries side-by-side."
        intro="Each industry has a characteristic growth leak and a recommended ladder rung. Compare to find where you fit - and what to fix first."
      />
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          <IndustriesCompareClient industries={industries} />
        </div>
      </section>
      <CtaBand
        title="Not sure which industry fits?"
        intro="Run the Business Health Check. Two minutes - and it tells you the single move worth making first."
        primary={{ label: "Run the Health Check", href: "/business-health-check" }}
        secondary={{ label: "All industries", href: "/industries" }}
      />
    </PageShell>
  );
}
