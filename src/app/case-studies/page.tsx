import type { Metadata } from "next";
import Link from "next/link";

import { caseStudies } from "@/lib/seo-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs, type Crumb } from "@/components/site/breadcrumbs";
import { CaseStudiesGrid } from "./case-studies-grid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Proof, not promises. Real engagement patterns Udyamita runs - the systems and outcomes that moved for retail, hospitality, healthcare, education, manufacturing and professional services businesses.",
  alternates: { canonical: "https://udyamita.com/case-studies" },
  openGraph: {
    title: "Case Studies · Udyamita",
    description:
      "Proof, not promises. The kinds of engagements Udyamita runs - shown as the systems and outcomes that moved.",
    url: "https://udyamita.com/case-studies",
    type: "website",
  },
};

const breadcrumbItems: Crumb[] = [{ label: "Case Studies", href: "/case-studies" }];

/**
 * Server-side BreadcrumbList schema generator.
 *
 * Note: the shared `breadcrumbSchema()` in `breadcrumbs.tsx` lives in a
 * `"use client"` module, so calling it from a server component triggers a
 * Next.js 16 runtime error. We inline a server-safe equivalent here so we
 * don't have to modify the shared file. Unlike the shared helper, this
 * version includes the current (non-linked) page in the schema, which is
 * what Google's spec recommends.
 */
function breadcrumbJsonLd(items: Crumb[]) {
  const list = [
    { name: "Home", url: "https://udyamita.com" },
    ...items.map((i) => ({
      name: i.label,
      url: i.href ? `https://udyamita.com${i.href}` : undefined,
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies - Udyamita Global LLP",
  description:
    "Proof, not promises. Engagement patterns Udyamita runs across sectors, shown as the systems and outcomes that moved.",
  url: "https://udyamita.com/case-studies",
  isPartOf: {
    "@type": "WebSite",
    name: "Udyamita Global LLP",
    url: "https://udyamita.com",
  },
  about: {
    "@type": "Thing",
    name: "Business Growth Case Studies",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: caseStudies.length,
    itemListElement: caseStudies.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://udyamita.com/case-studies/${c.slug}`,
      name: c.title,
    })),
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <PageHero
        no="32"
        label="Case Studies"
        title="Proof, not promises."
        intro="We don't invent clients or metrics. These are the kinds of engagements Udyamita runs - shown as the systems and outcomes that moved."
        ctas={[
          { label: "Run the free diagnostic", href: "/business-health-check", variant: "ghost" },
          { label: "Talk to us", href: "/contact", variant: "primary" },
        ]}
      />

      <CaseStudiesGrid items={caseStudies} />

      <CtaBand
        title="Become the next case study."
        intro="If your business has a leak - discoverability, conversion, follow-up, operations - we close it. Start with the free diagnostic, or talk to us directly."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Run the business health check", href: "/business-health-check" }}
      />

      {/* small index footer note */}
      <section className="bg-background py-10 text-center">
        <div className="udyam-container">
          <p className="text-sm text-muted-foreground">
            Looking for something specific?{" "}
            <Link
              href="/contact"
              className="text-foreground underline underline-offset-4 hover:text-royal transition-colors"
            >
              Tell us your sector and stage
            </Link>{" "}
            - we&apos;ll point you to the closest engagement pattern we&apos;ve run.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
