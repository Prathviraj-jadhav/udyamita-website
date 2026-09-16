import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";

import {
  caseStudies,
  getCaseStudy,
  serviceDetails,
  industryDetails,
} from "@/lib/seo-content";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs, type Crumb } from "@/components/site/breadcrumbs";
import { ReadingProgress } from "@/components/site/reading-progress";
import { BackToTop } from "@/components/site/back-to-top";
import {
  Reveal,
  VideoPanel,
  Hairline,
  TextRollButton,
  ArrowCircle,
} from "@/components/site/primitives";

/* ------------------------------------------------------------------ */
/* Static params + metadata                                            */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) {
    return {
      title: "Case study not found",
      robots: { index: false, follow: false },
    };
  }
  const title = `${cs.title} · Udyamita Case Study`;
  const description = cs.summary;
  const url = `https://udyamita.com/case-studies/${cs.slug}`;
  return {
    // Use `absolute` so the root layout's `%s · Udyamita` template doesn't
    // append a redundant brand suffix to an already-branded title.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: cs.publishedAt,
      authors: ["Udyamita Global LLP"],
      images: cs.poster ? [{ url: cs.poster }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: cs.poster ? [cs.poster] : undefined,
    },
    keywords: [
      cs.sector.toLowerCase(),
      cs.rung.toLowerCase(),
      "case study",
      "udyamita",
      cs.format.toLowerCase(),
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function formatDate(iso: string): string {
  try {
    return format(new Date(iso), "d MMMM yyyy");
  } catch {
    return iso;
  }
}

function articleSchema(cs: NonNullable<ReturnType<typeof getCaseStudy>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.summary,
    datePublished: cs.publishedAt,
    dateModified: cs.publishedAt,
    author: {
      "@type": "Organization",
      name: "Udyamita Global LLP",
      url: "https://udyamita.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Udyamita Global LLP",
      url: "https://udyamita.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://udyamita.com/case-studies/${cs.slug}`,
    },
    articleSection: cs.sector,
    about: [
      { "@type": "Thing", name: cs.sector },
      { "@type": "Thing", name: cs.rung },
      { "@type": "Thing", name: cs.format },
    ],
    image: cs.poster ? [cs.poster] : undefined,
    video: cs.video
      ? {
          "@type": "VideoObject",
          contentUrl: cs.video,
          thumbnailUrl: cs.poster,
        }
      : undefined,
  };
}

/**
 * Server-side BreadcrumbList schema generator.
 *
 * The shared `breadcrumbSchema()` in `breadcrumbs.tsx` lives in a
 * `"use client"` module, so calling it from a server component triggers a
 * Next.js 16 runtime error. We inline a server-safe equivalent here so we
 * don't have to modify the shared file. Includes the current (non-linked)
 * page in the schema, which is what Google's spec recommends.
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

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const breadcrumbItems: Crumb[] = [
    { label: "Case Studies", href: "/case-studies" },
    { label: cs.title },
  ];

  const relatedService =
    cs.relatedService
      ? (serviceDetails.find((s) => s.slug === cs.relatedService) ?? {
          slug: cs.relatedService,
          name: slugToTitle(cs.relatedService),
          tagline: "Service detail",
        })
      : null;

  const relatedIndustry =
    cs.relatedIndustry
      ? (industryDetails.find((i) => i.slug === cs.relatedIndustry) ?? {
          slug: cs.relatedIndustry,
          name: slugToTitle(cs.relatedIndustry),
          headline: "Industry playbook",
        })
      : null;

  return (
    <PageShell>
      <ReadingProgress />
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(cs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)),
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <PageHero
        label={`${cs.sector} · ${cs.rung}`}
        title={cs.title}
        intro={cs.summary}
        ctas={[
          { label: "Get this kind of result", href: "/contact", variant: "primary" },
        ]}
      />

      {/* Video panel - only when a video asset exists */}
      {cs.video && (
        <section className="pb-4">
          <div className="udyam-container">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-muted">
                <div className="aspect-video w-full">
                  <VideoPanel
                    src={cs.video}
                    poster={cs.poster}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Meta row */}
      <section className="py-6">
        <div className="udyam-container">
          <Reveal>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-5 sm:grid-cols-3 lg:grid-cols-5">
              <MetaItem label="Sector" value={cs.sector} />
              <MetaItem label="Growth rung" value={cs.rung} />
              <MetaItem label="Format" value={cs.format} />
              <MetaItem label="Reading time" value={cs.readingTime} />
              <MetaItem label="Published" value={formatDate(cs.publishedAt)} />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Body: challenge / approach / outcome */}
      <section className="pb-12">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            {/* Sidebar labels */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 flex flex-col gap-12">
                <SideHeading no="01" label="The challenge" />
                <SideHeading no="02" label="The approach" />
                <SideHeading no="03" label="The outcome" />
              </div>
            </aside>

            {/* Main content */}
            <div className="udyam-prose max-w-none">
              <Reveal>
                <ProseBlock heading="The challenge" no="01" body={cs.challenge} mobile />
              </Reveal>
              <Reveal delay={0.05}>
                <ProseBlock heading="The approach" no="02" body={cs.approach} mobile />
              </Reveal>
              <Reveal delay={0.1}>
                <ProseBlock heading="The outcome" no="03" body={cs.outcome} mobile />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key takeaways */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <span className="eyebrow-sm tnum text-muted-foreground">04</span>
                <h2 className="h-section">Key takeaways</h2>
                <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
                  The principles that travel - beyond this specific engagement.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <ol className="flex flex-col gap-0">
                {cs.takeaways.map((t, i) => (
                  <li
                    key={i}
                    className="group flex gap-5 border-t border-border py-6 first:border-t-0 first:pt-0"
                  >
                    <span className="tnum font-serif text-2xl text-muted-foreground transition-colors group-hover:text-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-relaxed text-foreground sm:text-lg">
                      {t}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <Reveal>
            <h2 className="h-section mb-10">Continue exploring</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {relatedService && (
              <Reveal>
                <RelatedCard
                  eyebrow="Service"
                  title={relatedService.name}
                  description={relatedService.tagline}
                  href={`/services/${relatedService.slug}`}
                />
              </Reveal>
            )}
            {relatedIndustry && (
              <Reveal delay={0.05}>
                <RelatedCard
                  eyebrow="Industry"
                  title={relatedIndustry.name}
                  description={relatedIndustry.headline}
                  href={`/industries/${relatedIndustry.slug}`}
                />
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <RelatedCard
                eyebrow="More"
                title="All case studies"
                description="Browse the full set of engagement patterns Udyamita runs."
                href="/case-studies"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="bg-background pb-4">
        <div className="udyam-container">
          <Reveal>
            <div className="flex flex-col gap-6 border border-border rounded-2xl p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="h-card text-foreground">
                  Get this kind of result for your business.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Same diagnostic, same sequencing, same outcome-first approach.
                  Start with a conversation - we&apos;ll tell you whether this
                  pattern fits your business before you spend anything.
                </p>
              </div>
              <div className="shrink-0">
                <TextRollButton href="/contact" variant="primary">
                  Talk to us
                </TextRollButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline />

      <CtaBand
        title="Become the next case study."
        intro="If your business has a leak - discoverability, conversion, follow-up, operations - we close it. Start with the free diagnostic, or talk to us directly."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Run the business health check", href: "/business-health-check" }}
      />
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="eyebrow-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

function SideHeading({ no, label }: { no: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="eyebrow-sm tnum text-muted-foreground">{no}</span>
      <span className="h-px w-8 bg-foreground/30" />
      <span className="eyebrow text-foreground">{label}</span>
    </div>
  );
}

function ProseBlock({
  heading,
  no,
  body,
  mobile,
}: {
  heading: string;
  no: string;
  body: string;
  mobile?: boolean;
}) {
  return (
    <section className="mb-10 last:mb-0">
      {/* mobile-only heading */}
      {mobile && (
        <div className="mb-4 flex items-center gap-3 lg:hidden">
          <span className="eyebrow-sm tnum text-muted-foreground">{no}</span>
          <span className="h-px w-8 bg-foreground/30" />
          <span className="eyebrow text-foreground">{heading}</span>
        </div>
      )}
      <p>{body}</p>
    </section>
  );
}

function RelatedCard({
  eyebrow,
  title,
  description,
  href,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_8px_30px_-12px_rgba(20,30,60,0.18)]"
    >
      <span className="eyebrow-sm text-muted-foreground">{eyebrow}</span>
      <h3 className="h-card text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-2 flex items-center gap-2 text-sm font-medium text-foreground">
        <span className="transition-transform duration-500 group-hover:translate-x-1">
          Explore
        </span>
        <ArrowCircle size={28} />
      </div>
    </Link>
  );
}
