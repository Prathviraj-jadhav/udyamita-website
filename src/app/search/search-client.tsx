"use client";

import * as React from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type SearchItem = {
  type: "Article" | "Case Study" | "Service" | "Industry";
  title: string;
  description: string;
  href: string;
  category: string;
};

const typeBadge: Record<SearchItem["type"], string> = {
  Article: "bg-foreground/5 text-foreground border-foreground/15",
  "Case Study": "bg-foreground/5 text-foreground border-foreground/15",
  Service: "bg-foreground/5 text-foreground border-foreground/15",
  Industry: "bg-foreground/5 text-foreground border-foreground/15",
};

export function SearchClient({ index }: { index: SearchItem[] }) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchItem[]>(index);
  const [activeType, setActiveType] = React.useState<string>("All");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  React.useEffect(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      setResults(activeType === "All" ? index : index.filter((i) => i.type === activeType));
      return;
    }
    const filtered = index.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q);
      const matchesType = activeType === "All" || item.type === activeType;
      return matchesQuery && matchesType;
    });
    setResults(filtered);
  }, [query, activeType, index]);

  const types = ["All", "Article", "Case Study", "Service", "Industry"];

  return (
    <div>
      {/* Search input */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          strokeWidth={1.5}
        />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, case studies, services, industries…"
          aria-label="Search"
          className="w-full rounded-full border border-border bg-background py-4 pl-12 pr-12 text-base text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Type filter */}
      <div className="mt-6 flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveType(t)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeType === t
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="mt-6 text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "result" : "results"}
        {query && <> for &ldquo;{query}&rdquo;</>}
      </p>

      {/* Results */}
      {results.length > 0 ? (
        <ul className="mt-6 flex flex-col">
          {results.map((item, i) => (
            <li key={`${item.href}-${i}`} className="border-t border-border first:border-t-0">
              <Link
                href={item.href}
                className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] uppercase tracking-wider",
                        typeBadge[item.type],
                      )}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.category}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-lg leading-snug group-hover:text-royal transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-2xl border border-border bg-paper p-8 text-center">
          <p className="font-serif text-xl">No results found.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search term, or browse{" "}
            <Link href="/insights" className="text-foreground underline underline-offset-4 hover:text-royal">
              all insights
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}
