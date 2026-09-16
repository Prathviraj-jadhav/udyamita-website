import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";
import { serviceDetails } from "@/lib/seo-content";
import { CompareClient } from "./compare-client";

export const metadata: Metadata = {
  title: "Compare Services",
  description:
    "Compare Udyamita's services side-by-side - category, problem, pricing, time to value, and deliverables. Find the right service for your stage.",
  alternates: { canonical: "https://udyamita.com/compare" },
  openGraph: {
    title: "Compare Services · Udyamita",
    description: "Compare Udyamita's services side-by-side.",
    url: "https://udyamita.com/compare",
    type: "website",
  },
};

export default function ComparePage() {
  const services = serviceDetails.map((s) => ({
    slug: s.slug,
    name: s.name,
    category: s.category,
    tagline: s.tagline,
    problem: s.problem,
    pricingNote: s.pricingNote,
    deliverables: s.deliverables,
    outcomes: s.outcomes,
  }));

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ label: "Compare" }])),
        }}
      />
      <Breadcrumbs items={[{ label: "Compare" }]} />
      <PageHero
        no="C1"
        label="Compare"
        title="Compare services side-by-side."
        intro="Find the right service for your stage - by category, problem, pricing, and time to value. No sales pressure."
      />
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          <CompareClient services={services} />
        </div>
      </section>
      <CtaBand
        title="Not sure which service fits?"
        intro="Run the Business Health Check. Two minutes - and it tells you the single move worth making first."
        primary={{ label: "Run the Health Check", href: "/business-health-check" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </PageShell>
  );
}
