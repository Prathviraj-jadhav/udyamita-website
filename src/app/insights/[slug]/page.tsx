import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/page-shell";
import { CtaBand } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ReadingProgress } from "@/components/site/reading-progress";
import { BackToTop } from "@/components/site/back-to-top";
import { ReadingTimeIndicator } from "@/components/site/reading-time-indicator";
import {
  Reveal,
  SectionLabel,
  ArrowCircle,
  Hairline,
} from "@/components/site/primitives";
import { ArticleBody } from "@/components/site/article-body";
import { TableOfContents, type TocItem } from "@/components/site/table-of-contents";
import { extractTocHeadings } from "@/lib/schema";
import { ShareRow } from "@/components/site/share-row";
import { FeedbackWidget } from "@/components/site/feedback-widget";
import { NewsletterInline } from "@/components/site/newsletter-inline";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  articles,
  getArticle,
  getServiceDetail,
  getIndustryDetail,
} from "@/lib/seo-content";
import { formatDate, isoDate } from "@/lib/format";
import {
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  SITE,
} from "@/lib/seo-schema";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Article not found" };
  }
  const url = `${SITE}/insights/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} · Udyamita`,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt || article.publishedAt,
      authors: [article.author],
      tags: [article.category, article.topicCluster].filter(Boolean) as string[],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} · Udyamita`,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedService = article.relatedService
    ? getServiceDetail(article.relatedService)
    : undefined;
  const relatedIndustry = article.relatedIndustry
    ? getIndustryDetail(article.relatedIndustry)
    : undefined;

  // Newest-first list excluding the current article, for "more reading"
  const moreArticles = [...articles]
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  const articleSchema = articleJsonLd({
    title: article.title,
    description: article.excerpt,
    slug: article.slug,
    publishedAt: article.publishedAt,
    modifiedAt: article.modifiedAt,
    author: article.author,
    category: article.category,
    topicCluster: article.topicCluster,
  });

  const faqSchema = article.faq ? faqJsonLd(article.faq) : null;
  const tocItems: TocItem[] = extractTocHeadings(article.body);

  return (
    <PageShell>
      <ReadingProgress />
      <BackToTop />
      <ReadingTimeIndicator />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
      />

      {/* Article header */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="udyam-container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel>{article.category}</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="display-lg mt-6">{article.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{article.author}</span>
                <span aria-hidden>·</span>
                <time dateTime={isoDate(article.publishedAt)} className="tnum">
                  {formatDate(article.publishedAt)}
                </time>
                {article.modifiedAt &&
                  article.modifiedAt !== article.publishedAt && (
                    <>
                      <span aria-hidden>·</span>
                      <span className="text-xs">
                        Updated{" "}
                        <time dateTime={isoDate(article.modifiedAt)}>
                          {formatDate(article.modifiedAt)}
                        </time>
                      </span>
                    </>
                  )}
                <span aria-hidden>·</span>
                <span className="tnum">{article.readingTime}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Article body + TOC */}
      <section className="pb-16">
        <div className="udyam-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_220px] lg:gap-12 xl:grid-cols-[1fr_240px]">
            <div className="mx-auto w-full max-w-2xl lg:mx-0">
              <ArticleBody body={article.body} />
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents items={tocItems} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Key takeaway + share */}
      <section className="pb-16">
        <div className="udyam-container">
          <div className="mx-auto max-w-2xl">
            <div className="border-l-2 border-royal pl-6 py-4 sm:pl-8">
              <div className="eyebrow-sm text-muted-foreground">Key takeaway</div>
              <p className="mt-3 font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
                {article.takeaway}
              </p>
            </div>
            <div className="mt-8">
              <ShareRow title={article.title} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {article.faq && article.faq.length > 0 && (
        <section className="pb-16">
          <div className="udyam-container">
            <div className="mx-auto max-w-2xl">
              <Reveal>
                <SectionLabel no="02">FAQ</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h-section mt-6">Common questions</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <Accordion type="single" collapsible className="mt-8">
                  {article.faq.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left text-base font-serif text-foreground hover:no-underline">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Related service / industry */}
      {(relatedService || relatedIndustry) && (
        <section className="pb-16">
          <div className="udyam-container">
            <div className="mx-auto max-w-2xl">
              <Reveal>
                <SectionLabel no="03">Related</SectionLabel>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedService && (
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-foreground/30 hover:bg-paper"
                  >
                    <div>
                      <div className="eyebrow-sm text-muted-foreground">Service</div>
                      <h3 className="mt-3 font-serif text-xl text-foreground">
                        {relatedService.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {relatedService.tagline}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 text-sm font-medium text-foreground">
                      Explore service
                      <ArrowCircle size={30} />
                    </div>
                  </Link>
                )}
                {relatedIndustry && (
                  <Link
                    href={`/industries/${relatedIndustry.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-foreground/30 hover:bg-paper"
                  >
                    <div>
                      <div className="eyebrow-sm text-muted-foreground">Industry</div>
                      <h3 className="mt-3 font-serif text-xl text-foreground">
                        {relatedIndustry.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {relatedIndustry.headline}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 text-sm font-medium text-foreground">
                      View industry
                      <ArrowCircle size={30} />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* More reading */}
      <section className="pb-16">
        <div className="udyam-container">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <h2 className="h-section">More from The Growth Letter</h2>
                <Link
                  href="/insights"
                  className="hidden shrink-0 items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
                >
                  All articles
                  <ArrowCircle size={26} />
                </Link>
              </div>
            </Reveal>
            <Hairline className="mt-8" />
            <div className="mt-2 divide-y divide-border">
              {moreArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-paper -mx-3 px-3 rounded-lg"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="eyebrow-sm">{a.category}</span>
                      <span className="tnum">{a.readingTime}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-lg leading-snug text-foreground sm:text-xl">
                      {a.title}
                    </h3>
                  </div>
                  <ArrowCircle size={32} className="shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="pb-16">
        <div className="udyam-container">
          <div className="mx-auto max-w-2xl">
            <FeedbackWidget slug={article.slug} />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterInline compact />

      {/* CTA */}
      <CtaBand
        title="Find your biggest growth leak."
        intro="Nine questions. Two minutes. The single move worth making first - based on your inputs, not a guess."
        primary={{ label: "Run the Health Check", href: "/business-health-check" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { label: "Insights", href: "/insights" },
              { label: article.title, href: `/insights/${article.slug}` },
            ]),
          ),
        }}
      />
    </PageShell>
  );
}
