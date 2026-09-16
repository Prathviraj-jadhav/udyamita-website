"use client";

import Link from "next/link";
import { insightCategories } from "@/lib/content";
import { articles } from "@/lib/seo-content";
import {
  Reveal,
  EditorialHeading,
  SectionLabel,
  StaggerGroup,
  StaggerItem,
} from "../primitives";
import { ArrowUpRight } from "lucide-react";

export function Insights() {
  // Use the first 6 articles for the homepage grid
  const posts = articles.slice(0, 6);

  return (
    <section id="insights" className="section-pad bg-background">
      <div className="udyam-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel no="14">Insights</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading className="mt-6">
                The Growth Letter.
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                Practical ideas on growth, technology, sales and systems. No
                motivational wallpaper.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-1.5 max-w-sm">
              {insightCategories.slice(0, 8).map((c) => (
                <span
                  key={c}
                  className="rounded border border-border px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <StaggerItem
              key={post.slug}
              className="bg-background"
            >
              <Link
                href={`/insights/${post.slug}`}
                className="group relative flex h-full flex-col p-6 transition-colors hover:bg-paper sm:p-8"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="eyebrow-sm transition-colors group-hover:text-foreground">
                    {post.category}
                  </span>
                  <span className="tnum">{post.readingTime}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-snug transition-colors group-hover:text-royal">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                  {post.takeaway}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground tnum">
                    {String(i + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* View all link */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              {articles.length} articles in the archive
            </p>
            <Link
              href="/insights/archive"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all"
            >
              View all articles
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
