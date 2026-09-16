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
} from "@/components/site/primitives";
import { HealthCheck } from "@/components/site/sections/health-check";
import { healthDimensions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Health Check - Know what to fix next",
  description:
    "A free nine-question diagnostic. Two minutes. A score across discoverability, trust, lead flow, follow-up and systems - plus your largest growth leak and the single move worth making first.",
  alternates: { canonical: "https://udyamita.com/business-health-check" },
  openGraph: {
    title: "Business Health Check - Udyamita Global LLP",
    description:
      "Know what to fix next. A free nine-question diagnostic with a score, your largest growth leak, and a recommended first move.",
    url: "https://udyamita.com/business-health-check",
    type: "website",
  },
};

const crumbItems = [{ label: "Business Health Check" }];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://udyamita.com" },
    { "@type": "ListItem", position: 2, name: "Business Health Check", item: "https://udyamita.com/business-health-check" },
  ],
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Udyamita Business Health Check",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  url: "https://udyamita.com/business-health-check",
  description:
    "A free nine-question business growth diagnostic. Scores your business across discoverability, trust, lead flow, follow-up and systems; identifies your largest growth leak; recommends a single first move.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  publisher: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
    url: "https://udyamita.com",
  },
  featureList: healthDimensions,
};

const whatYouGet = [
  {
    n: "01",
    title: "Discoverability",
    body: "Can customers actually find you when they search - locally, on maps, on review platforms?",
  },
  {
    n: "02",
    title: "Trust",
    body: "When they find you, do they believe you? Is your website, your reviews and your presence credible enough to convert?",
  },
  {
    n: "03",
    title: "Lead Flow",
    body: "Are enquiries arriving in volume, through tracked channels you can measure - or do they trickle in unattributed?",
  },
  {
    n: "04",
    title: "Follow-up",
    body: "Once a lead arrives, is there a system to follow up - or do leads die in WhatsApp, email and missed calls?",
  },
  {
    n: "05",
    title: "Systems",
    body: "Are operations documented and instrumented, or do they live in the founder's head and a dozen spreadsheets?",
  },
];

const howItWorks = [
  {
    n: "01",
    title: "Answer 9 questions",
    body: "Honest inputs across five growth dimensions. Two minutes, no signup to see your score.",
  },
  {
    n: "02",
    title: "Get your score",
    body: "A Business Health Score out of 100 - plus subscores for each of the five dimensions.",
  },
  {
    n: "03",
    title: "See your biggest leak",
    body: "The single lowest-scoring dimension. The one holding the rest back.",
  },
  {
    n: "04",
    title: "Get your recommended first move",
    body: "A specific, practical next step tied to a Udyamita growth rung - not a motivational platitude.",
  },
];

export default function BusinessHealthCheckPage() {
  return (
    <PageShell>
      <Breadcrumbs items={crumbItems} />

      <PageHero
        no="34"
        label="Business Health Check"
        title="Know what to fix next."
        intro="A free nine-question diagnostic. Two minutes. A score across five growth dimensions, your largest growth leak, and the single move worth making first. Built to be honest - no inflated scores, no invented problems."
        ctas={[
          { label: "Run the check", href: "#health-check", variant: "primary" },
          { label: "Talk to us", href: "/contact", variant: "ghost" },
        ]}
      />

      {/* Embedded interactive HealthCheck component */}
      <HealthCheck />

      {/* What you get */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="01">What you get</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <EditorialHeading className="mt-6">
                  Five subscores. One leak. One move.
                </EditorialHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                  Every business has a weakest dimension holding the rest back.
                  The diagnostic isolates it - so you spend your next dollar on
                  the right fix, not the loudest one.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <StaggerGroup className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {whatYouGet.map((item) => (
                  <StaggerItem
                    key={item.n}
                    className="bg-background p-6"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="eyebrow-sm tnum text-muted-foreground">
                        {item.n}
                      </span>
                      <p className="font-serif text-xl">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <Reveal delay={0.15}>
                <div className="mt-6 rounded-2xl bg-foreground p-6 sm:p-8 text-background">
                  <p className="eyebrow-sm text-background/60">
                    Plus, in your detailed growth plan
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      "Your largest growth leak, named",
                      "Your recommended first move",
                      "The Udyamita growth rung it maps to",
                      "A practical path to the next score band",
                    ].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 text-sm text-background/85"
                      >
                        <span className="text-background">+</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <Reveal>
            <SectionLabel no="02">How it works</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <EditorialHeading className="mt-6 max-w-3xl">
              Four steps. No signup to see your score.
            </EditorialHeading>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <StaggerItem key={step.n} className="bg-background p-6">
                <span className="eyebrow-sm tnum text-muted-foreground">
                  {step.n}
                </span>
                <p className="mt-4 font-serif text-xl">{step.title}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Your detailed growth plan is sent after you complete the
              diagnostic. We store your score and largest leak to tailor the
              plan - no spam, ever.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Run your business health check."
        intro="Two minutes. Nine questions. A score, your largest growth leak, and the single move worth making first - free, and built to be honest."
        primary={{ label: "Start the diagnosis", href: "#health-check" }}
        secondary={{ label: "Talk to us instead", href: "/contact" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
