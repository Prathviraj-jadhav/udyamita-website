import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import {
  Breadcrumbs,
  type Crumb,
} from "@/components/site/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/schema";
import {
  Reveal,
  SectionLabel,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import { brand } from "@/lib/content";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About - Building the operating layer for business growth.",
  description:
    "Udyamita Global LLP is building the operating layer for business growth. Mission: help small businesses get discovered, win customers, and run better. Based in Pune, Maharashtra, India.",
  alternates: { canonical: "https://udyamita.com/about" },
  openGraph: {
    title: "About Udyamita - Building the operating layer for business growth.",
    description:
      "Treat the service as the product and the cooperative network as the moat. Mission, vision and the partner network model behind Udyamita Global LLP, based in Pune, Maharashtra, India.",
    url: "https://udyamita.com/about",
    type: "website",
    siteName: "Udyamita Global LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Udyamita - Building the operating layer for business growth.",
    description:
      "Treat the service as the product and the cooperative network as the moat. Pune, Maharashtra, India.",
  },
};

const crumbs: Crumb[] = [{ label: "About", href: "/about" }];

const pillars = [
  {
    no: "01",
    label: "Mission",
    body: brand.mission,
  },
  {
    no: "02",
    label: "Vision",
    body: brand.vision,
  },
  {
    no: "03",
    label: "Central idea",
    body: brand.centralIdea,
  },
];

const distinction = [
  {
    no: "01",
    title: "The service is not the moat.",
    body: "Services can be copied. Tools can be bought. The work itself - diagnosis, implementation, measurement - is necessary but not defensible on its own. Treating it as the moat is how agencies compete themselves into a race to the bottom.",
  },
  {
    no: "02",
    title: "The distribution relationship is the moat.",
    body: "Udyamita builds a cooperative network of partners - CAs, CSs, accountants, consultants, advisors, associations, technology companies and agencies - who already serve the businesses we want to serve. The relationship is the asset that compounds.",
  },
  {
    no: "03",
    title: "Productise the service. Build the network around it.",
    body: "The Growth OS, the Growth Ladder and the Service Ecosystem productise the service - so it's repeatable, measurable and improvable. The partner network builds the moat around it - so the more we grow, the harder we become to displace.",
  },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Udyamita Global LLP",
  legalName: "Udyamita Global LLP",
  description:
    "Business growth and transformation partner for local businesses. Builder of the operating layer for business growth.",
  url: "https://udyamita.com",
  slogan: "Get Discovered. Win Customers. Run Better.",
  foundingLocation: {
    "@type": "Place",
    name: "Pune, Maharashtra, India",
  },
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "State", name: "Maharashtra" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Business Growth",
    "Digital Transformation",
    "Local SEO",
    "Lead Generation",
    "CRM",
    "Automation",
    "Business Intelligence",
    "ERP",
    "Consulting",
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Udyamita Global LLP",
  description:
    "Builder of the operating layer for business growth. Mission, vision and the partner network model behind Udyamita Global LLP.",
  url: "https://udyamita.com/about",
  isPartOf: { "@type": "WebSite", name: "Udyamita Global LLP", url: "https://udyamita.com" },
  publisher: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
    url: "https://udyamita.com",
  },
  mainEntity: orgSchema,
};

export default function AboutPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Breadcrumbs items={crumbs} />

      <PageHero
        no="33"
        label="About"
        title={
          <>
            Building the operating layer
            <br />
            <span className="italic text-muted-foreground">for business growth.</span>
          </>
        }
        intro="Udyamita Global LLP is a business growth and transformation partner for local businesses. We're not an agency. We're the operating layer that helps small businesses get discovered, win customers, and run better - using a simple stack of digital services that pay for themselves."
        ctas={[
          { label: "Talk to us", href: "/contact" },
          { label: "Run the Business Health Check", href: "/business-health-check", variant: "ghost" },
        ]}
      />

      {/* Mission / Vision / Central idea */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="33.1">Mission · Vision · Central idea</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                Three sentences that decide everything else.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Strategy isn&apos;t a deck. It&apos;s the smallest set of sentences
                that, if true, make every other decision obvious. Here are ours.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem
                key={p.no}
                className="flex flex-col gap-5 bg-background p-7 sm:p-8"
              >
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow-sm tnum text-muted-foreground">{p.no}</span>
                  <span className="eyebrow text-foreground">{p.label}</span>
                </div>
                <p className="font-serif text-xl sm:text-2xl leading-snug">
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Asymmetric two-image layout */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[26%_1fr_48%] lg:gap-8">
            {/* Small image left */}
            <Reveal className="order-2 lg:order-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border">
                <img
                  src={assets.aboutImageSmall}
                  alt="Udyamita team and operations in Pune, Maharashtra"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>

            {/* Copy center */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <Reveal>
                <SectionLabel no="33.2">The work</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6">
                  A growth partner, built like a product company.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We&apos;ve taken the discipline of product engineering - 
                  productisation, measurement, iteration, compounding - and
                  applied it to business growth services. The result is the
                  Udyamita Growth OS: ten stages, run in order, measured at
                  every step.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Most businesses don&apos;t need a new tactic. They need a
                  system. That&apos;s what we build.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                  <span className="eyebrow-sm text-muted-foreground">{brand.location}</span>
                  <span className="eyebrow-sm text-muted-foreground">{brand.legalName}</span>
                </div>
              </Reveal>
            </div>

            {/* Large image right */}
            <Reveal className="order-3" delay={0.05}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border lg:aspect-auto lg:h-full lg:min-h-[520px]">
                <img
                  src={assets.aboutImageLarge}
                  alt="Udyamita operations - building the operating layer for business growth in India"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The distinction */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel no="33.3">The distinction</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-6">
                The service is not the moat. The distribution relationship is.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Most agencies compete on the service. Udyamita competes on the
                network around the service. That&apos;s a structural choice, and
                it&apos;s the reason the company gets harder to displace the
                larger it grows.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {distinction.map((d) => (
              <StaggerItem
                key={d.no}
                className="flex flex-col gap-4 bg-background p-7 sm:p-8"
              >
                <span className="eyebrow-sm tnum text-muted-foreground">{d.no}</span>
                <h3 className="h-card">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Location */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel no="33.4">Location</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6">
                  Pune, Maharashtra, India.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Pune is our home market and the proving ground for the Growth
                  OS. We serve businesses across Maharashtra, then India. Local
                  context matters - the leak in a Pune restaurant is not the
                  same as the leak in a Mumbai B2B industrial firm, even when
                  the OS stage is.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <dl className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-sm">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="eyebrow-sm text-muted-foreground">Legal name</dt>
                    <dd className="text-right">{brand.legalName}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="eyebrow-sm text-muted-foreground">Location</dt>
                    <dd className="text-right">{brand.location}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="eyebrow-sm text-muted-foreground">Email</dt>
                    <dd className="text-right">
                      <a
                        href={`mailto:${brand.email}`}
                        className="underline-offset-4 hover:underline"
                      >
                        {brand.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="eyebrow-sm text-muted-foreground">Phone</dt>
                    <dd className="text-right tnum">
                      <a
                        href={`tel:${brand.phone.replace(/\s/g, "")}`}
                        className="underline-offset-4 hover:underline"
                      >
                        {brand.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-foreground text-background p-8 sm:p-12 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="eyebrow-sm text-background/50">Geo</span>
                    <span className="eyebrow-sm text-background/50">18.5204° N · 73.8567° E</span>
                  </div>
                  <div>
                    <p className="font-serif text-4xl sm:text-5xl leading-none">
                      Pune
                    </p>
                    <p className="mt-2 text-background/70">
                      Maharashtra, India
                    </p>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="eyebrow text-background/70">Home market</span>
                    <span className="eyebrow-sm text-background/50">
                      Proving ground for the Growth OS
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to us."
        intro="Whether you're a local business looking for a growth partner, a potential partner with a network that already serves our market, or an investor evaluating the model - we'd like to hear from you."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Or run the Business Health Check first", href: "/business-health-check" }}
      />

      <span className="sr-only">
        {brand.legalName} · {brand.location}
      </span>
      <Link href="/why-udyamita" className="sr-only">
        Read why Udyamita is a partner, not a vendor
      </Link>
    </PageShell>
  );
}
