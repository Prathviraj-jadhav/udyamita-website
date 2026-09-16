import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import {
  Reveal,
  SectionLabel,
  EditorialHeading,
  StaggerGroup,
  StaggerItem,
  Hairline,
} from "@/components/site/primitives";
import { investorEvolution, brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enterprise & Investors - Building the operating layer for business growth",
  description:
    "Udyamita evolves from services to productised services, recurring revenue, technology, data, ecosystem and infrastructure. No fabricated metrics. Financial details shared under engagement.",
  alternates: { canonical: "https://udyamita.com/investors" },
  openGraph: {
    title: "Enterprise & Investors - Udyamita Global LLP",
    description:
      "Building durable infrastructure for local business growth. From linear services to compounding infrastructure.",
    url: "https://udyamita.com/investors",
    type: "website",
  },
};

const crumbItems = [{ label: "Investors" }];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://udyamita.com" },
    { "@type": "ListItem", position: 2, name: "Investors", item: "https://udyamita.com/investors" },
  ],
};

const stageDetail: Record<string, { summary: string }> = {
  Service: {
    summary:
      "Started as a hands-on consulting practice - diagnosing growth leaks and implementing fixes for local businesses.",
  },
  "Productised Service": {
    summary:
      "Codified the diagnosis, playbooks and deliverables into a repeatable product - same quality, less custom overhead.",
  },
  "Recurring Revenue": {
    summary:
      "Moved from one-off projects to retainers and the Growth Engine - revenue that compounds month over month.",
  },
  Technology: {
    summary:
      "Built the tooling layer - CRM, automation, analytics - so growth isn't dependent on people remembering to do things.",
  },
  Data: {
    summary:
      "Every engagement produces structured signals. Aggregated, that becomes a growth dataset for local businesses.",
  },
  Ecosystem: {
    summary:
      "Partner network turns distribution into a structural advantage instead of a marketing budget line.",
  },
  Infrastructure: {
    summary:
      "The end-state: Udyamita becomes the operating layer that local businesses run their growth on.",
  },
};

export default function InvestorsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={crumbItems} />

      <PageHero
        no="38"
        label="Enterprise & Investor"
        title="Building the operating layer for business growth."
        intro="Udyamita evolves from services to productised services to recurring revenue to technology, data, ecosystem and infrastructure. Not a faster agency - a different category. Durable infrastructure for local business growth, built in public."
      />

      {/* Evolution timeline */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="01">Evolution</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  From linear services to compounding infrastructure.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                  Each stage compounds the last. Services fund the productised
                  layer. Productisation funds the technology. Technology produces
                  the data. Data powers the ecosystem. Ecosystem becomes
                  infrastructure.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <StaggerGroup as="ol" className="flex flex-col">
                {investorEvolution.map((stage, i) => {
                  const detail = stageDetail[stage];
                  const isLast = i === investorEvolution.length - 1;
                  return (
                    <StaggerItem
                      key={stage}
                      as="li"
                      className="relative grid grid-cols-[auto_1fr] gap-6 pb-10 last:pb-0"
                    >
                      {/* timeline rail */}
                      <div className="flex flex-col items-center">
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-xs tnum ${
                            isLast
                              ? "border-foreground bg-foreground text-background"
                              : "border-border bg-background text-muted-foreground"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {!isLast && (
                          <span className="mt-1 w-px flex-1 bg-border" />
                        )}
                      </div>

                      <div className="pt-1">
                        <div className="flex flex-wrap items-baseline gap-3">
                          <p className="font-serif text-2xl">{stage}</p>
                          <span className="eyebrow-sm text-muted-foreground">
                            {isLast ? "Now building" : "Compound →"}
                          </span>
                        </div>
                        {detail && (
                          <p className="mt-2 max-w-xl text-sm text-muted-foreground leading-relaxed">
                            {detail.summary}
                          </p>
                        )}
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* The model */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="02">The model</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  Linear services fund a compounding stack.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                  The progression is deliberate. Each layer is funded by the one
                  before it, not by external capital betting on a future state.
                  That makes the build order matter as much as the build itself.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
                  <ModelCard
                    label="Linear"
                    title="Services"
                    body="Time-bound engagements. Revenue scales with capacity. Quality scales with people."
                  />
                  <ModelCard
                    label="Productised"
                    title="Repeatable system"
                    body="Same diagnosis, same playbook, same outcome. Revenue scales with sales, not headcount."
                  />
                  <ModelCard
                    label="Recurring"
                    title="Growth Engine"
                    body="Monthly retainers tied to the numbers that matter. Revenue compounds; churn is the only enemy."
                  />
                  <ModelCard
                    label="Compounding"
                    title="Technology + data"
                    body="Tooling replaces manual work. Aggregated engagement data becomes a structural asset."
                  />
                  <ModelCard
                    label="Structural"
                    title="Partner ecosystem"
                    body="Distribution through trusted advisors - not paid acquisition. The network itself is the moat."
                  />
                  <ModelCard
                    label="Durable"
                    title="Infrastructure"
                    body="The end-state: local businesses run their growth on Udyamita, the way they run their accounts on a CA."
                  />
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-6 text-xs text-muted-foreground">
                  Financial metrics:{" "}
                  <span className="text-foreground">[TO BE VERIFIED]</span> - 
                  shared under engagement, never fabricated.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What we don't fabricate */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="03">What we don&apos;t fabricate</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  Honesty as the only durable investor pitch.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                  We don&apos;t invent clients, metrics, traction or forecasts.
                  If a number isn&apos;t verified, it says so. If a milestone
                  isn&apos;t reached, we say that too.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ul className="border-t border-border">
                  {[
                    {
                      label: "Clients",
                      body: "Engagement patterns are described by sector, not by named logos we don't have permission to use.",
                    },
                    {
                      label: "Metrics",
                      body: "ARR, MRR, retention, CAC and LTV are shared under engagement - never rounded up for a deck.",
                    },
                    {
                      label: "Traction",
                      body: "We publish what we've shipped and what we're building, not vanity numbers built to impress.",
                    },
                    {
                      label: "Forecasts",
                      body: "Projections are scenario-modelled, not aspirational. Assumptions are documented and revisited.",
                    },
                    {
                      label: "Funding",
                      body: "Capital history, valuation and use of funds are shared with parties under NDA - not in marketing.",
                    },
                  ].map((row) => (
                    <li
                      key={row.label}
                      className="grid gap-2 border-b border-border py-5 sm:grid-cols-[160px_1fr] sm:gap-6"
                    >
                      <span className="eyebrow text-foreground">
                        {row.label}
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {row.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Location / market context */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="04">Market context</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  Pune, Maharashtra, India.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                  A high-density cluster of SMEs, professional services,
                  manufacturing and emerging tech - the right conditions to
                  build, refine and scale a growth system for local businesses.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 font-serif text-lg">
                  {brand.location}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
                  <ContextCard
                    label="Starting market"
                    title="Pune"
                    body="Dense SME and professional-services cluster; strong manufacturing and education sectors."
                  />
                  <ContextCard
                    label="Expansion market"
                    title="Maharashtra"
                    body="Adjacent cities and industrial belts - same language, similar compliance, repeatable go-to-market."
                  />
                  <ContextCard
                    label="Long-range market"
                    title="India"
                    body="MSME base measured in tens of millions - the structural prize for a productised growth partner."
                  />
                </div>
              </Reveal>

              <Hairline className="my-8" />

              <Reveal delay={0.15}>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The play isn&apos;t to win a city. It&apos;s to build the
                  productised system in a defensible home market - then expand
                  into geographies where the system, not the headcount, does the
                  scaling.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Investor enquiry."
        intro="If you're evaluating operating-layer infrastructure for local business growth, start a conversation. We share financial details under engagement - not in a public deck."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{
          label: "Try the Business Health Check",
          href: "/business-health-check",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
    </PageShell>
  );
}

function ModelCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-background p-6">
      <p className="eyebrow-sm text-muted-foreground">{label}</p>
      <p className="mt-3 font-serif text-xl">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function ContextCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-background p-6">
      <p className="eyebrow-sm text-muted-foreground">{label}</p>
      <p className="mt-3 font-serif text-2xl">{title}</p>
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
        {body}
      </p>
    </div>
  );
}
