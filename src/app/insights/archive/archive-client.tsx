"use client";

import * as React from "react";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ArchiveArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  topicCluster?: string;
};

type Grouped = { month: string; items: ArchiveArticle[] };

export function ArchiveClient({
  articles,
  categories,
  grouped,
}: {
  articles: ArchiveArticle[];
  categories: string[];
  grouped: Grouped[];
}) {
  const [query, setQuery] = React.useState("");
  const [activeCat, setActiveCat] = React.useState("All");
  const [view, setView] = React.useState<"grouped" | "list">("grouped");

  const q = query.toLowerCase().trim();
  const filtered = articles.filter((a) => {
    const matchesQuery =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q);
    const matchesCat = activeCat === "All" || a.category === activeCat;
    return matchesQuery && matchesCat;
  });

  const filteredGrouped: Grouped[] = view === "grouped" && !q && activeCat === "All"
    ? grouped
    : (() => {
        const map = new Map<string, ArchiveArticle[]>();
        for (const a of filtered) {
          const d = new Date(a.publishedAt);
          const mk = d.toLocaleString("en-IN", { month: "long", year: "numeric" });
          if (!map.has(mk)) map.set(mk, []);
          map.get(mk)!.push(a);
        }
        return Array.from(map.entries()).map(([month, items]) => ({ month, items }));
      })();

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            strokeWidth={1.5}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-full border border-border bg-background py-2.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 rounded-full border border-border p-1">
          {(["grouped", "list"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-colors capitalize",
                view === v
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCat(cat)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              activeCat === cat
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="mt-6 text-sm text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
        {q && <> matching &ldquo;{q}&rdquo;</>}
      </p>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-border bg-paper p-8 text-center">
          <p className="font-serif text-lg">No articles found.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search or browse by topic below.
          </p>
        </div>
      ) : view === "grouped" ? (
        <div className="mt-8 flex flex-col gap-10">
          {filteredGrouped.map((group) => (
            <div key={group.month}>
              <div className="flex items-baseline gap-4 border-b border-border pb-3">
                <h2 className="font-serif text-2xl">{group.month}</h2>
                <span className="eyebrow-sm text-muted-foreground">
                  {group.items.length} {group.items.length === 1 ? "article" : "articles"}
                </span>
              </div>
              <ul className="mt-4 flex flex-col">
                {group.items.map((a, i) => (
                  <li key={a.slug} className="border-b border-border">
                    <Link
                      href={`/insights/${a.slug}`}
                      className="group grid gap-2 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-4"
                    >
                      <span className="eyebrow-sm tnum text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="eyebrow-sm text-muted-foreground">{a.category}</span>
                        </div>
                        <h3 className="mt-1 font-serif text-lg leading-snug group-hover:text-royal transition-colors">
                          {a.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                          {a.excerpt}
                        </p>
                        <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{new Date(a.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
                          <span aria-hidden>·</span>
                          <span>{a.readingTime}</span>
                        </div>
                      </div>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-8 flex flex-col">
          {filtered.map((a, i) => (
            <li key={a.slug} className="border-b border-border">
              <Link
                href={`/insights/${a.slug}`}
                className="group grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="eyebrow-sm tnum text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow-sm text-muted-foreground">{a.category}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-xl leading-snug group-hover:text-royal transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {a.excerpt}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
