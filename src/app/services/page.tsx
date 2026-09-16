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
  TextRollButton,
  ArrowCircle,
} from "@/components/site/primitives";
import {
  serviceEcosystem,
  techCategories,
  techStacks,
  growthLadder,
} from "@/lib/content";
import { serviceDetails } from "@/lib/seo-content";
import { breadcrumbJsonLd } from "@/lib/schema";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services - One stack. Seven layers. No random grid.",
  description:
    "Udyamita's service ecosystem: seven layers from Discover to Scale, plus a full technology capability stack. Organised by growth journey stage - not buzzwords.",
  alternates: { canonical: "https://udyamita.com/services" },
  openGraph: {
    title: "Services · Udyamita",
    description:
      "One stack. Seven layers. Services organised by where in the growth journey they belong - Discover to Scale.",
    url: "https://udyamita.com/services",
    type: "website",
  },
};

/** Short framing per category - derived from the homepage's growth-journey framing. */
const categoryFraming: Record<string, string> = {
  DISCOVER: "Be found by people already looking for you.",
  TRUST: "Be the obvious choice once they find you.",
  GENERATE: "Turn attention into a steady flow of enquiries.",
  CONVERT: "Follow up every lead, every time - systematically.",
  RETAIN: "Keep customers coming back and referring others.",
  MEASURE: "See what's working, what's leaking, and what to fix next.",
  SCALE: "Run the business on systems, not memory.",
};

const breadcrumbItems = [{ label: "Services", href: "/services" }];

export default function ServicesIndexPage() {
  /** Slugs that have a dedicated detail page - only those become clickable. */
  const detailSlugs = new Set(serviceDetails.map((s) => s.slug));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Udyamita Service Ecosystem",
    itemListElement: serviceEcosystem.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cat.key,
      description: categoryFraming[cat.key] ?? "",
    })),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <PageHero
        no="29"
        label="Service Ecosystem"
        title="One stack. Seven layers. No random grid."
        intro="Services aren't a catalogue of buzzwords. They're organised by where in the growth journey they belong - Discover to Scale - so each one moves a specific metric at a specific stage."
        className="pt-4 sm:pt-8"
      />

      {/* All 7 categories, stacked editorially */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <Reveal>
            <p className="eyebrow-sm text-muted-foreground max-w-xl">
              Seven layers, in the order your business actually grows through
              them - not alphabetical, not by popularity.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-16 sm:gap-20">
            {serviceEcosystem.map((cat, i) => {
              const Icon = cat.icon;
              const framing =
                categoryFraming[cat.key] ?? `${cat.key} layer`;
              return (
                <div
                  key={cat.key}
                  className="grid gap-8 lg:grid-cols-12 lg:gap-12"
                >
                  {/* left rail - label + framing */}
                  <div className="lg:col-span-4">
                    <Reveal>
                      <SectionLabel no={String(i + 1).padStart(2, "0")}>
                        {cat.key}
                      </SectionLabel>
                    </Reveal>
                    <Reveal delay={0.05}>
                      <div className="mt-6 flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/20">
                          <Icon className="h-4 w-4" strokeWidth={1.25} />
                        </span>
                        <p className="font-serif text-xl sm:text-2xl leading-snug">
                          {framing}
                        </p>
                      </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
                        {cat.services.length} services in this layer.
                      </p>
                    </Reveal>
                  </div>

                  {/* right rail - services grid */}
                  <div className="lg:col-span-8">
                    <StaggerGroup
                      key={cat.key}
                      className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3"
                    >
                      {cat.services.map((s) => {
                        const slug = s
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "");
                        const hasDetail = detailSlugs.has(slug);
                        return (
                          <StaggerItem
                            key={s}
                            className="border-b border-r border-border p-4 sm:p-5"
                          >
                            {hasDetail ? (
                              <Link
                                href={`/services/${slug}`}
                                className="group flex h-full flex-col gap-3"
                              >
                                <span className="text-sm leading-snug">
                                  {s}
                                </span>
                                <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-royal">
                                  View detail
                                  <ArrowCircle size={18} />
                                </span>
                              </Link>
                            ) : (
                              <div className="flex h-full flex-col gap-3">
                                <Icon
                                  className="h-3.5 w-3.5 text-muted-foreground"
                                  strokeWidth={1.25}
                                />
                                <span className="text-sm leading-snug">
                                  {s}
                                </span>
                              </div>
                            )}
                          </StaggerItem>
                        );
                      })}
                    </StaggerGroup>
                  </div>
                </div>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 text-sm text-muted-foreground">
              Productised, with clear delivery boundaries - so you know exactly
              what you&apos;re buying and what it moves. Services with a{" "}
              <span className="text-foreground">View detail</span> link have a
              dedicated page; the rest are delivered as part of a broader
              engagement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Technology capability */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="08">Technology Capability</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6 max-w-md">
                  Technology is a capability layer.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                  Problem&nbsp;→&nbsp;System&nbsp;→&nbsp;Outcome. The tool is
                  the last step, not the first. We lead with the business
                  problem, design the system, then choose the stack - never the
                  other way around.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="eyebrow-sm text-muted-foreground">
                  Capability categories
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techCategories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded border border-border bg-background px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10">
                  <p className="eyebrow-sm text-muted-foreground">
                    Selected stack
                  </p>
                  <p className="mt-4 text-sm leading-relaxed">
                    {techStacks.map((t, i) => (
                      <span key={t}>
                        <span className="text-foreground">{t}</span>
                        {i < techStacks.length - 1 && (
                          <span className="text-muted-foreground/40"> · </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Growth ladder reference */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="09">Growth Ladder</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6 max-w-md">
                  Start where the problem starts. Grow from there.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                  Six rungs - from getting discovered to becoming an enterprise
                  growth partner. Each one has a problem, a deliverable, a price
                  band, and a clear next step.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <TextRollButton href="/pricing" variant="ghost">
                    See full pricing
                  </TextRollButton>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col">
                {growthLadder.map((rung, i) => (
                  <Reveal
                    key={rung.no}
                    delay={0.04 * i}
                    className={cn(
                      "border-t border-border",
                      i === growthLadder.length - 1 && "border-b",
                    )}
                  >
                    <div className="grid grid-cols-[auto_1fr] items-center gap-5 py-6 sm:grid-cols-[auto_1fr_auto]">
                      <span className="eyebrow-sm tnum text-muted-foreground w-10">
                        {rung.no}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-serif text-xl sm:text-2xl">
                          {rung.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {rung.problem}
                        </span>
                      </div>
                      <span className="hidden sm:block text-right text-xs text-muted-foreground">
                        {rung.indicative}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Find the right service for your stage."
        intro="Not sure which layer moves your metric? Compare services side-by-side, or take the Business Health Check."
        primary={{
          label: "Take the Health Check",
          href: "/business-health-check",
        }}
        secondary={{ label: "Compare services", href: "/compare" }}
      />
    </PageShell>
  );
}
