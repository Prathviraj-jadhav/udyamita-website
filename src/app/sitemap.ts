import type { MetadataRoute } from "next";
import { caseStudies, articles, serviceDetails, industryDetails } from "@/lib/seo-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://udyamita.com";
  const now = new Date();

  const staticRoutes = [
    "",
    "/why-udyamita",
    "/growth-os",
    "/consulting",
    "/services",
    "/industries",
    "/case-studies",
    "/insights",
    "/pricing",
    "/business-health-check",
    "/partners",
    "/investors",
    "/about",
    "/contact",
    "/faq",
    "/search",
    "/compare",
    "/industries/compare",
    "/insights/archive",
    "/changelog",
    "/glossary",
    "/thank-you",
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: new Date(c.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    lastModified: new Date(a.modifiedAt ?? a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = serviceDetails.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industryRoutes = industryDetails.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const clusterSlugs = [
    "local-visibility",
    "lead-flow",
    "operations",
    "growth-leaks",
    "strategy",
    "discovery",
  ];
  const clusterRoutes = clusterSlugs.map((c) => ({
    url: `${base}/insights/series/${c}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...caseStudyRoutes,
    ...articleRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...clusterRoutes,
  ];
}
