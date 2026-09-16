import type { Crumb } from "@/components/site/breadcrumbs";
import type { TocItem } from "@/components/site/table-of-contents";

// Re-export the Crumb type so consumers can import everything from one place.
export type { Crumb };
export type { TocItem };

/**
 * Extract table-of-contents headings from a markdown-lite body string.
 * Server-safe (no client dependencies).
 */
export function extractTocHeadings(body: string): TocItem[] {
  const lines = body.split("\n");
  const items: TocItem[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      const text = trimmed.slice(4);
      items.push({ id: tocSlugify(text), text, level: 3 });
    } else if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3);
      items.push({ id: tocSlugify(text), text, level: 2 });
    }
  }
  return items;
}

function tocSlugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Server-side BreadcrumbList schema generator.
 *
 * Why this exists: the shared `breadcrumbSchema()` in
 * `@/components/site/breadcrumbs` lives in a `"use client"` module, so calling
 * it from a server component triggers a Next.js 16 runtime error
 * ("Attempted to call breadcrumbSchema() from the server but breadcrumbSchema
 * is on the client"). This pure helper does the same job and is server-safe.
 *
 * Unlike the shared client helper, this version also includes the current
 * (non-linked) page in the schema - which is what Google's BreadcrumbList spec
 * recommends (the current page is the leaf of the breadcrumb trail).
 *
 * Exported under two names - `breadcrumbJsonLd` (descriptive) and
 * `breadcrumbListSchema` (legacy alias used by other pages) - so both old and
 * new consumers work without modification.
 */
export function breadcrumbJsonLd(items: Crumb[]) {
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

/** Legacy alias - kept for backwards compatibility with existing pages. */
export const breadcrumbListSchema = breadcrumbJsonLd;

/** FAQPage schema generator - server-safe. */
export function faqPageJsonLd(
  faqs: readonly { q: string; a: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/** Legacy alias - kept for backwards compatibility with existing pages. */
export const faqPageSchema = faqPageJsonLd;

/**
 * Industry-service schema generator - server-safe.
 * Builds a `Service` JSON-LD entry for an industry-detail page.
 */
export function industryServiceSchema({
  name,
  description,
  slug,
  serviceType,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `https://udyamita.com/industries/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Udyamita Global LLP",
      url: "https://udyamita.com",
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
  };
}
