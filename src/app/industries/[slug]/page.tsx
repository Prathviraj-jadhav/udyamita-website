import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createElement } from "react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  SectionLabel,
  Hairline,
  ArrowCircle,
} from "@/components/site/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { industries, industryIcon, type IndustryTier } from "@/lib/content";
import {
  industryDetails,
  getIndustryDetail,
  serviceDetails,
} from "@/lib/seo-content";
import {
  breadcrumbListSchema,
  faqPageSchema,
  industryServiceSchema,
  type Crumb,
} from "@/lib/schema";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Static params + metadata                                            */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return industryDetails.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getIndustryDetail(slug);
  if (!detail) {
    return {
      title: "Industry not found",
      robots: { index: false, follow: false },
    };
  }
  const title = `${detail.name} - ${detail.headline}`;
  const description = detail.pain;
  const url = `https://udyamita.com/industries/${detail.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Udyamita Global LLP",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    keywords: [
      detail.name.toLowerCase(),
      `${detail.name.toLowerCase()} growth`,
      `${detail.name.toLowerCase()} digital marketing`,
      detail.recommendedRung.toLowerCase(),
      "udyamita",
      "business growth partner",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function slugifyIndustry(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function serviceName(slug: string): string {
  const found = serviceDetails.find((s) => s.slug === slug);
  if (found) return found.name;
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function serviceTagline(slug: string): string | null {
  const found = serviceDetails.find((s) => s.slug === slug);
  return found ? found.tagline : null;
}

const tierLabel: Record<1 | 2 | 3, string> = {
  1: "Tier 1 - Priority",
  2: "Tier 2 - Growth",
  3: "Tier 3 - Enterprise",
};

/** Renders the lucide icon for an industry name. Uses `createElement` so the
 *  icon reference is resolved without an intermediate `const Icon = ...`
 *  assignment (which trips `react-hooks/static-components` for prop-driven
 *  lookups). The lookup itself is stable - `industryIcon` returns from a
 *  static map. */
function IndustryGlyph({
  name,
  className,
}: {
  name: IndustryTier["name"];
  className?: string;
}) {
  return createElement(industryIcon(name), {
    className,
    strokeWidth: 1.25,
    "aria-hidden": true,
  });
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getIndustryDetail(slug);
  if (!detail) {
    notFound();
  }

  const industry = industries.find(
    (i) => slugifyIndustry(i.name) === detail.slug,
  );

  const crumbs: Crumb[] = [
    { label: "Industries", href: "/industries" },
    { label: detail.name },
  ];

  const schemas = [
    breadcrumbListSchema(crumbs),
    faqPageSchema(detail.faq),
    industryServiceSchema({
      name: `${detail.name} - growth services`,
      description: detail.pain,
      slug: detail.slug,
      serviceType: `Business growth and transformation for ${detail.name}`,
    }),
  ];

  return (
    <PageShell>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Breadcrumbs items={crumbs} />

      <PageHero
        label={tierLabel[detail.tier]}
        title={
          <span className="inline-flex flex-wrap items-center gap-x-4 gap-y-2">
            {industry && (
              <IndustryGlyph
                name={industry.name}
                className="h-10 w-10 text-muted-foreground sm:h-12 sm:w-12"
              />
            )}
            <span>{detail.name}</span>
          </span>
        }
        intro={detail.headline}
        className="pt-8 sm:pt-12"
      />

      {/* The pain */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <SectionLabel no="01">The pain</SectionLabel>
                <h2 className="h-section">
                  Where {detail.name.toLowerCase()} actually hurts.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl">
                {detail.pain}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Growth leaks */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <SectionLabel no="02">Growth leaks</SectionLabel>
                <h2 className="h-section">
                  The characteristic leaks in this segment.
                </h2>
                <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
                  Each leak maps to a stage of the Growth OS. We close them in
                  sequence - not all at once.
                </p>
              </div>
            </Reveal>
            <StaggerGroup className="flex flex-col">
              {detail.growthLeaks.map((leak, i) => (
                <StaggerItem
                  key={i}
                  className="flex items-start gap-5 border-t border-border py-5 first:border-t-0 first:pt-0"
                >
                  <span className="font-serif text-2xl tnum text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">
                    {leak}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Recommended rung */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <SectionLabel no="03">Recommended rung</SectionLabel>
                <h2 className="h-section">Where to start.</h2>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <Link
                href="/pricing"
                className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-background p-7 transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_8px_30px_-12px_rgba(20,30,60,0.18)] sm:p-9"
              >
                <span className="eyebrow-sm text-muted-foreground">
                  Growth Ladder rung
                </span>
                <span className="display text-foreground">
                  {detail.recommendedRung}
                </span>
                <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                  The first rung that closes the loudest leak in{" "}
                  {detail.name.toLowerCase()}. See indicative pricing and what
                  is - and isn&apos;t - included.
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    See pricing
                  </span>
                  <ArrowCircle size={28} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <SectionLabel no="04">Services</SectionLabel>
                <h2 className="h-section">
                  The stack we run for {detail.name}.
                </h2>
                <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
                  Not every engagement uses every service. The diagnosis
                  decides which to sequence first.
                </p>
              </div>
            </Reveal>
            <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {detail.services.map((svcSlug) => {
                const name = serviceName(svcSlug);
                const tagline = serviceTagline(svcSlug);
                return (
                  <StaggerItem key={svcSlug}>
                    <Link
                      href={`/services/${svcSlug}`}
                      className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-foreground/30 hover:bg-paper"
                    >
                      <span className="font-serif text-lg leading-snug text-foreground">
                        {name}
                      </span>
                      {tagline && (
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {tagline}
                        </span>
                      )}
                      <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                        View service
                        <span className="h-px w-5 bg-current" />
                      </span>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <SectionLabel no="05">Technology</SectionLabel>
                <h2 className="h-section">The tools in the stack.</h2>
                <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
                  We don&apos;t lead with tools - we lead with the leak. But
                  these are the categories that typically appear in a{" "}
                  {detail.name.toLowerCase()} engagement.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="flex flex-wrap gap-3">
                {detail.technology.map((tech) => (
                  <li
                    key={tech}
                    className={cn(
                      "inline-flex items-center rounded-full border border-border bg-paper px-4 py-2",
                      "text-sm font-medium text-foreground",
                    )}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <SectionLabel no="06">Workflow</SectionLabel>
                <h2 className="h-section">How the engagement runs.</h2>
                <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
                  Sequenced, not simultaneous. Each step makes the next one
                  work - and the order matters more than the speed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <ol className="relative flex flex-col gap-0">
                {detail.workflow.map((step, i) => (
                  <li
                    key={i}
                    className="group relative flex gap-6 border-l border-border pb-8 pl-6 last:pb-0"
                  >
                    {/* node */}
                    <span
                      className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-2 border-foreground bg-background transition-colors group-hover:bg-foreground"
                      aria-hidden
                    />
                    <div className="flex flex-col gap-2">
                      <span className="eyebrow-sm tnum text-muted-foreground">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="h-card text-foreground">{step.step}</h3>
                      <p className="max-w-xl text-sm text-muted-foreground leading-relaxed sm:text-base">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <SectionLabel no="07">FAQ</SectionLabel>
                <h2 className="h-section">Questions about {detail.name}.</h2>
                <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
                  Plain answers - no jargon, no sell. If your question isn&apos;t
                  here, ask us directly.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <Accordion type="single" collapsible className="w-full">
                {detail.faq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg leading-snug text-foreground hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      <Hairline />

      <CtaBand
        title="Fix your industry's growth leak"
        intro={`The diagnosis is free. We'll tell you whether ${detail.name.toLowerCase()} fits the pattern - and which rung to start on - before you spend anything.`}
        primary={{ label: "Run the health check", href: "/business-health-check" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </PageShell>
  );
}
