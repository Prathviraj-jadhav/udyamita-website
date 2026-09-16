/**
 * Server-safe JSON-LD schema builders for Udyamita pages.
 * (The shared `breadcrumbs.tsx` is a client component, so its
 *  `breadcrumbSchema` cannot be called from a server component.
 *  These helpers are pure data functions safe for RSC.)
 */

const SITE = "https://udyamita.com";

export type Crumb = { label: string; href?: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  const list = [
    { name: "Home", url: SITE },
    ...items
      .filter((i) => i.href)
      .map((i) => ({ name: i.label, url: `${SITE}${i.href}` })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  category: string;
  topicCluster?: string;
}) {
  const url = `${SITE}/insights/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.publishedAt,
    dateModified: opts.modifiedAt || opts.publishedAt,
    articleSection: opts.category,
    keywords: [opts.topicCluster, opts.category].filter(Boolean),
    author: { "@type": "Organization", name: opts.author },
    publisher: {
      "@type": "Organization",
      name: "Udyamita Global LLP",
      url: SITE,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogJsonLd(
  posts: {
    slug: string;
    title: string;
    publishedAt: string;
    modifiedAt?: string;
    category: string;
    author: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Growth Letter",
    description:
      "Practical ideas on growth, technology, sales and systems for local businesses.",
    url: `${SITE}/insights`,
    publisher: {
      "@type": "Organization",
      name: "Udyamita Global LLP",
      url: SITE,
    },
    blogPost: posts.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE}/insights/${a.slug}`,
      datePublished: a.publishedAt,
      dateModified: a.modifiedAt || a.publishedAt,
      articleSection: a.category,
      author: { "@type": "Organization", name: a.author },
    })),
  };
}

export function collectionJsonLd(
  items: { slug: string; title: string }[],
  name: string,
  description: string,
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE}${path}`,
    isPartOf: { "@type": "WebSite", name: "Udyamita", url: SITE },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE}${path}/${a.slug}`,
        name: a.title,
      })),
    },
  };
}

export { SITE };
