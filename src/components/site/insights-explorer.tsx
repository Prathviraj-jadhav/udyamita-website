"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeSwiss } from "@/lib/content";
import { ArrowCircle } from "./primitives";
import { formatDate } from "@/lib/format";

export type ArticleSummary = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
};

/**
 * Client-side filter + grid for the Insights index.
 * Receives a minimal article summary list from the server so the
 * markdown-lite `body` strings stay out of the client bundle.
 */
export function InsightsExplorer({
  articles,
  categories,
  excludeSlug,
}: {
  articles: ArticleSummary[];
  categories: string[];
  /** Slug to always exclude from the grid (e.g. the featured article shown above). */
  excludeSlug?: string;
}) {
  const [active, setActive] = React.useState<string>("All");
  const reduce = useReducedMotion();

  const filtered = React.useMemo(() => {
    const base = excludeSlug
      ? articles.filter((a) => a.slug !== excludeSlug)
      : articles;
    if (active === "All") return base;
    return base.filter((a) => a.category === active);
  }, [active, articles, excludeSlug]);

  return (
    <section className="section-pad bg-background">
      <div className="udyam-container">
        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
                )}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
          <span className="tnum">
            {String(filtered.length).padStart(2, "0")}{" "}
            {filtered.length === 1 ? "article" : "articles"}
            {active !== "All" && <> · {active}</>}
          </span>
          <span className="eyebrow-sm">The Growth Letter</span>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-12 border border-dashed border-border rounded-2xl p-12 text-center">
            <p className="text-muted-foreground">
              No articles in this category yet.
            </p>
          </div>
        ) : (
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeSwiss }}
            className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i + 1} total={filtered.length} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  index,
  total,
}: {
  article: ArticleSummary;
  index: number;
  total: number;
}) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group relative flex flex-col bg-background p-6 transition-colors duration-300 hover:bg-paper focus-visible:bg-paper sm:p-8"
    >
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="eyebrow-sm">{article.category}</span>
        <span className="tnum">{article.readingTime}</span>
      </div>

      <h3 className="mt-6 font-serif text-2xl leading-snug tracking-tight text-foreground">
        {article.title}
      </h3>

      <p className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed">
        {article.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-muted-foreground tnum">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </span>
        <span className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground tnum">
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <ArrowCircle size={34} className="group-hover:border-foreground" />
        </span>
      </div>

      <span className="sr-only">Read article: {article.title}</span>
    </Link>
  );
}
