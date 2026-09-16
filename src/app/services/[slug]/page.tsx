import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero, CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  SectionLabel,
  ArrowCircle,
} from "@/components/site/primitives";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  serviceDetails,
  getServiceDetail,
  type ServiceDetail,
} from "@/lib/seo-content";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";

export async function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) {
    return {
      title: "Service not found",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `${service.name} - ${service.tagline}`,
    description: service.description,
    alternates: {
      canonical: `https://udyamita.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} - ${service.tagline}`,
      description: service.description,
      url: `https://udyamita.com/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  // Filter relatedServices to those that actually have a detail page.
  const related = service.relatedServices
    .map((s) => getServiceDetail(s))
    .filter((s): s is ServiceDetail => Boolean(s));

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: service.name, href: `/services/${service.slug}` },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.category,
    description: service.description,
    url: `https://udyamita.com/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Udyamita Global LLP",
      url: "https://udyamita.com",
    },
    areaServed: ["Pune", "Maharashtra", "India"],
    offers: {
      "@type": "Offer",
      description: service.pricingNote,
      seller: {
        "@type": "Organization",
        name: "Udyamita Global LLP",
      },
    },
  };

  const faqSchema =
    service.faq.length > 0 ? faqPageJsonLd(service.faq) : null;

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Breadcrumbs items={breadcrumbItems} />

      <PageHero
        label={service.category}
        title={service.name}
        intro={service.tagline}
        className="pt-4 sm:pt-8"
      />

      {/* Overview / description */}
      <section className="bg-background pb-16 pt-8 sm:pb-20 sm:pt-12">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
                  {service.description}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-paper p-6">
                  <p className="eyebrow-sm text-muted-foreground">
                    At a glance
                  </p>
                  <dl className="mt-4 space-y-4">
                    <div className="border-t border-border pt-3">
                      <dt className="text-xs text-muted-foreground">
                        Category
                      </dt>
                      <dd className="mt-1 text-sm font-medium">
                        {service.category}
                      </dd>
                    </div>
                    <div className="border-t border-border pt-3">
                      <dt className="text-xs text-muted-foreground">
                        Indicative pricing
                      </dt>
                      <dd className="mt-1 text-sm font-medium">
                        {service.pricingNote}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section-pad bg-background pt-0">
        <div className="udyam-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="01">The problem</SectionLabel>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <p className="display text-2xl leading-tight sm:text-3xl">
                  {service.problem}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="02">What we deliver</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-card mt-6 max-w-xs">
                  Tangible, productised deliverables - not vague promises.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <StaggerGroup className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <StaggerItem key={d} className="bg-background p-6">
                    <div className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-royal"
                        strokeWidth={2}
                      />
                      <span className="text-sm leading-snug">{d}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="03">Outcomes</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-card mt-6 max-w-xs">
                  What moves when this is done right.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ul className="flex flex-col border-y border-border">
                {service.outcomes.map((o, i) => (
                  <li
                    key={o}
                    className="flex items-baseline gap-6 border-b border-border py-5 last:border-b-0"
                  >
                    <span className="eyebrow-sm tnum w-8 text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-lg sm:text-xl">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - numbered timeline */}
      <section className="section-pad bg-paper">
        <div className="udyam-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="04">How it works</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-card mt-6 max-w-xs">
                  A clear process - not a black box.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ol className="relative flex flex-col gap-8 before:absolute before:bottom-2 before:left-4 before:top-2 before:w-px before:-translate-x-1/2 before:bg-border before:content-['']">
                {service.process.map((p, i) => (
                  <Reveal
                    key={p.step}
                    delay={0.05 * i}
                    as="li"
                    className="relative pl-12"
                  >
                    <span className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground bg-background text-xs tnum">
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-serif text-xl sm:text-2xl">
                        {p.step}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad bg-background">
        <div className="udyam-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel no="05">Pricing</SectionLabel>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <p className="display text-2xl leading-tight sm:text-3xl">
                  {service.pricingNote}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Final scope is set after a Business Health Check - so you
                  only pay for what moves your metric at your stage. See the
                  full{" "}
                  <Link
                    href="/pricing"
                    className="text-foreground underline underline-offset-4 transition-colors hover:text-royal"
                  >
                    pricing ladder
                  </Link>{" "}
                  for context.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section-pad bg-paper">
          <div className="udyam-container">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionLabel no="06">Related services</SectionLabel>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="h-card mt-6 max-w-xs">
                    Often combined with this one.
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <StaggerGroup className="grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <StaggerItem key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-foreground/40"
                      >
                        <div>
                          <p className="eyebrow-sm text-muted-foreground">
                            {r.category}
                          </p>
                          <h3 className="mt-3 font-serif text-xl">{r.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {r.tagline}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-xs text-foreground">
                          View detail
                          <ArrowCircle size={20} />
                        </span>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="section-pad bg-background">
          <div className="udyam-container">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionLabel no="07">FAQ</SectionLabel>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="h-card mt-6 max-w-xs">
                    Straight answers to the obvious questions.
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <Reveal delay={0.05}>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-0"
                  >
                    {service.faq.map((f, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left font-serif text-base sm:text-lg">
                          {f.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Get ${service.name} for your business.`}
        intro="Tell us where you are in the growth journey. We'll scope this service to your stage - or tell you to start elsewhere if that's the honest answer."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{
          label: "Take the Health Check",
          href: "/business-health-check",
        }}
      />
    </PageShell>
  );
}
