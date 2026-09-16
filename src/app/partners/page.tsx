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
import { PartnerBadge } from "@/components/site/logo";
import { partnerJourney, partnerTypes } from "@/lib/content";
import { PartnerApplicationForm } from "./partner-application-form";

export const metadata: Metadata = {
  title: "Partners - Build distribution with the people businesses already trust",
  description:
    "Become a Udyamita partner. Apply, qualify, get enabled, refer, track and earn. We work with CAs, CSs, accountants, consultants, advisors, associations, technology companies and agencies.",
  alternates: { canonical: "https://udyamita.com/partners" },
  openGraph: {
    title: "Partners - Udyamita Global LLP",
    description:
      "The service is the product. The cooperative network is the moat. Apply to become a Udyamita partner.",
    url: "https://udyamita.com/partners",
    type: "website",
  },
};

const crumbItems = [{ label: "Partners" }];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://udyamita.com" },
    { "@type": "ListItem", position: 2, name: "Partners", item: "https://udyamita.com/partners" },
  ],
};

export default function PartnersPage() {
  return (
    <PageShell>
      <Breadcrumbs items={crumbItems} />

      <PageHero
        no="37"
        label="Partner Ecosystem"
        title="Your clients need more than advice. Give them a growth system."
        intro="Udyamita builds distribution with the people businesses already trust - CAs, consultants, advisors, associations, technology companies and agencies. The service is the product. The cooperative network is the moat. We share the growth that follows."
      />

      {/* Partner journey */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <Reveal>
            <SectionLabel no="01">The partner journey</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <EditorialHeading className="mt-6 max-w-3xl">
              Seven steps from application to compounding earnings.
            </EditorialHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              A structured path - not a referral link. Every partner is
              qualified, enabled and tracked so referrals convert and revenue is
              transparent.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-7">
            {partnerJourney.map((p, i) => {
              const Icon = p.icon;
              return (
                <StaggerItem
                  key={p.step}
                  className="flex flex-col gap-4 bg-background p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow-sm tnum text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="h-5 w-5 text-foreground"
                      strokeWidth={1.25}
                    />
                  </div>
                  <div>
                    <p className="font-serif text-xl">{p.step}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {journeyBlurb[p.step]}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Who we partner with */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="02">Who we partner with</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  People businesses already trust.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                  We don&apos;t build distribution by buying attention. We build
                  it by equipping the advisors who already hold the relationship
                  - and giving them a system their clients can actually use.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <StaggerGroup className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                {partnerTypes.map((t, i) => (
                  <StaggerItem
                    key={t}
                    className="flex items-start gap-4 bg-background p-6"
                  >
                    <span className="eyebrow-sm tnum text-muted-foreground mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-serif text-lg">{t}</p>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {partnerTypeBlurb[t] ?? "Trusted advisor to local businesses."}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* The distinction */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="03">The distinction</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  Service is the product. The network is the moat.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                  Most agencies sell hours. Udyamita productises the service so
                  partners can deliver a repeatable growth system to their
                  clients - without becoming an agency themselves.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex items-center gap-4">
                  <PartnerBadge size={64} />
                  <div>
                    <p className="eyebrow-sm text-muted-foreground">
                      Partner Network
                    </p>
                    <p className="font-serif text-lg">Growth Partner</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-paper p-8 sm:p-10">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow-sm text-muted-foreground">
                        Traditional referral
                      </p>
                      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-foreground/40"> - </span>
                          One-off commission on a closed deal
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground/40"> - </span>
                          No visibility past the handoff
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground/40"> - </span>
                          Client relationship ends with the referral
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground/40"> - </span>
                          No system to scale beyond your hours
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow-sm text-foreground">
                        Udyamita partnership
                      </p>
                      <ul className="mt-4 space-y-3 text-sm text-foreground">
                        <li className="flex gap-2">
                          <span className="text-foreground">+</span>
                          Tracked, recurring share on a productised service
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground">+</span>
                          Live visibility into client progress and revenue
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground">+</span>
                          Client stays in your orbit, supported by a system
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground">+</span>
                          Compounding earnings as your portfolio grows
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Hairline className="my-8" />

                  <p className="font-serif text-xl leading-snug">
                    &ldquo;We do not invent partner commissions. Terms are
                    agreed on qualification - and visible after that.&rdquo;
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    No vanity revenue shares. No hidden tiers. Every agreement
                    is documented before the first referral.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Partner application form */}
      <section id="apply" className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="04">Apply</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  Apply to become a partner.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                  Tell us about your practice and your clients. We review every
                  application within two business days, then schedule a
                  qualification call before any agreement is signed.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-xs text-muted-foreground">
                  Required fields are marked with{" "}
                  <span className="text-foreground">*</span>. Your information
                  is stored securely and never shared.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <PartnerApplicationForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Apply to become a partner."
        intro="The service is the product. The network is the moat. Build distribution with the people businesses already trust."
        primary={{ label: "Start your application", href: "#apply" }}
        secondary={{ label: "Talk to us first", href: "/contact" }}
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

const journeyBlurb: Record<string, string> = {
  Apply: "Submit your practice profile, client base and the services you offer.",
  Qualify: "A 30-minute call to confirm fit, ethics and client alignment.",
  Enable: "Onboarding into the Udyamita growth system, assets and playbooks.",
  Refer: "Introduce clients through tracked, documented referrals.",
  Track: "Live visibility into progress, milestones and revenue share.",
  Earn: "Transparent, recurring earnings on the engagements you refer.",
  Grow: "Expand your portfolio and compound across the network.",
};

const partnerTypeBlurb: Record<string, string> = {
  CAs: "Chartered Accountants serving SMEs with compliance, audit and advisory.",
  CSs: "Company Secretaries advising on governance, filings and corporate structure.",
  Accountants: "Practitioners managing books, tax and cash flow for local businesses.",
  Consultants: "Independent advisors on strategy, operations and growth.",
  "Business Advisors": "Mentors and coaches guiding founders through scale transitions.",
  Associations: "Industry and trade bodies representing clusters of businesses.",
  "Technology companies": "Software vendors extending their stack with growth services.",
  Agencies: "Creative, marketing and dev shops that need a growth backend.",
  "Community organisations": "Networks that connect, support and educate business owners.",
};
