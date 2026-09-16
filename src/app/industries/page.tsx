import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  SectionLabel,
  Hairline,
} from "@/components/site/primitives";
import { industries, industryIcon } from "@/lib/content";
import { industryDetails } from "@/lib/seo-content";
import { breadcrumbListSchema, type Crumb } from "@/lib/schema";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Industries - Where the growth leak lives",
  description:
    "We sequence segments instead of selling everything to everyone. Each industry has a characteristic growth leak - and a recommended ladder rung. Explore retail, healthcare, restaurants, professional services, coaching, manufacturing, and more.",
  alternates: { canonical: "https://udyamita.com/industries" },
  openGraph: {
    title: "Industries - Where the growth leak lives",
    description:
      "The leak changes by industry. The system doesn't. Explore Udyamita's tiered industry map and the recommended rung for each segment.",
    url: "https://udyamita.com/industries",
    type: "website",
    siteName: "Udyamita Global LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries - Where the growth leak lives",
    description:
      "Thirteen segments, three tiers, one system. The leak changes by industry - the system doesn't.",
  },
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const tierMeta: Record<1 | 2 | 3, { label: string; tagline: string }> = {
  1: {
    label: "Tier 1 - Priority",
    tagline:
      "Highest-leak segments. Foundation work - discovery, trust, capture - pays back fastest here.",
  },
  2: {
    label: "Tier 2 - Growth",
    tagline:
      "Pipeline and conversion leaks. Systems compound once the foundation holds.",
  },
  3: {
    label: "Tier 3 - Enterprise",
    tagline:
      "Operational complexity. Multi-system integration across the business.",
  },
};

const sequenceSteps: { no: string; title: string; body: string }[] = [
  {
    no: "01",
    title: "Tier 1 - Priority first",
    body: "We start where the leak is loudest and the fix is fastest. Retail, healthcare, restaurants, professional services, and coaching share a common pattern: foundation work - discovery, trust, capture - unlocks growth without requiring new headcount.",
  },
  {
    no: "02",
    title: "Tier 2 - Growth next",
    body: "Once the foundation holds, we move into pipeline and conversion. Automotive, real estate, interiors, wholesale, and fitness have longer cycles. The leak shifts from visibility to follow-up, attribution, and retention.",
  },
  {
    no: "03",
    title: "Tier 3 - Enterprise last",
    body: "With systems mature, we sequence operations. Manufacturing, import/export, and B2B industrial run on integrated stacks - CRM, inventory, ERP, analytics - adopted one piece at a time, not all at once.",
  },
];

/** Slugify an industry name to match the slugs used in `industryDetails`. */
function slugifyIndustry(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const crumbs: Crumb[] = [{ label: "Industries" }];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function IndustriesIndexPage() {
  const tiered = ([1, 2, 3] as const).map((t) => ({
    tier: t,
    items: industries.filter((i) => i.tier === t),
  }));
  const detailSlugs = new Set(industryDetails.map((d) => d.slug));

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListSchema(crumbs)),
        }}
      />

      <Breadcrumbs items={crumbs} />

      <PageHero
        no="31"
        label="Industries"
        title={
          <>
            The leak changes by industry.{" "}
            <span className="italic text-muted-foreground">
              The system doesn&apos;t.
            </span>
          </>
        }
        intro="We sequence segments instead of selling everything to everyone. Each industry has a characteristic growth leak - and a recommended ladder rung. Start where the leak is loudest."
        className="pt-8 sm:pt-12"
      />

      {/* Tiered industry index */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel no="32">All industries</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                Thirteen segments, three tiers, one system.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Each tier reflects where the leak lives - and where the work
                pays back fastest. Open any industry with a detail page to see
                the leak, the recommended rung, and the workflow we run.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-col gap-16">
            {tiered.map(({ tier, items }) => (
              <div key={tier} className="flex flex-col gap-6">
                <Reveal>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="display text-foreground">
                      <span className="text-muted-foreground tnum">
                        0{tier} ·{" "}
                      </span>
                      {tierMeta[tier].label}
                    </h3>
                    <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                      {tierMeta[tier].tagline}
                    </p>
                  </div>
                  <Hairline className="mt-4" />
                </Reveal>

                <StaggerGroup className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((ind) => {
                    const Icon = industryIcon(ind.name);
                    const slug = slugifyIndustry(ind.name);
                    const hasDetail = detailSlugs.has(slug);
                    return (
                      <StaggerItem
                        key={ind.name}
                        className="group relative bg-background p-6 transition-colors hover:bg-paper"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <Icon
                            className="h-6 w-6 text-foreground"
                            strokeWidth={1.25}
                            aria-hidden
                          />
                          <span
                            className={cn(
                              "shrink-0 rounded-full border px-2 py-0.5 text-[0.6rem] uppercase tracking-wider",
                              ind.tier === 1
                                ? "border-foreground/40 text-foreground"
                                : ind.tier === 2
                                  ? "border-foreground/25 text-muted-foreground"
                                  : "border-border text-muted-foreground",
                            )}
                          >
                            {tierMeta[ind.tier].label}
                          </span>
                        </div>
                        <h4 className="mt-6 font-serif text-xl leading-snug">
                          {ind.name}
                        </h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {ind.leak}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                          {hasDetail ? (
                            <>
                              View growth leak
                              <span className="h-px w-6 bg-current" />
                            </>
                          ) : (
                            <span className="italic">Detail coming soon</span>
                          )}
                        </div>

                        {hasDetail && (
                          <Link
                            href={`/industries/${slug}`}
                            className="absolute inset-0"
                            aria-label={`${ind.name} - view growth leak and recommended rung`}
                          />
                        )}
                      </StaggerItem>
                    );
                  })}
                </StaggerGroup>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we sequence */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel no="33">How we sequence</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                One system. Three tiers. Sequenced, not simultaneous.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                We don&apos;t sell the same package to every segment. The work
                moves from foundation to growth to operations - each tier
                unlocks the next.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
            {sequenceSteps.map((s) => (
              <Reveal key={s.no}>
                <div className="flex h-full flex-col gap-4 bg-background p-8">
                  <span className="eyebrow-sm tnum text-muted-foreground">
                    {s.no}
                  </span>
                  <h3 className="h-card">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">
                Why sequence?
              </span>{" "}
              Amplification on top of a leaky foundation burns money.
              Automation on top of an undefined process multiplies chaos. The
              order is the moat - every tier makes the next one work.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="See your industry's growth leak"
        intro="Run the Business Health Check. Or compare industries side-by-side to find where you fit."
        primary={{ label: "Run the health check", href: "/business-health-check" }}
        secondary={{ label: "Compare industries", href: "/industries/compare" }}
      />
    </PageShell>
  );
}
