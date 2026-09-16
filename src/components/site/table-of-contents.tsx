"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; text: string; level: number };

/**
 * Sticky table-of-contents that highlights the section currently in view.
 * Takes a list of heading items (id, text, level) extracted from the article body.
 */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav className="text-sm" aria-label="Table of contents">
      <p className="eyebrow-sm text-muted-foreground mb-4">On this page</p>
      <ul className="flex flex-col gap-2.5 border-l border-border">
        {items.map((item) => (
          <li key={item.id} className={cn(item.level === 3 && "ml-4")}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block border-l-2 -ml-px py-1 pl-4 transition-colors",
                activeId === item.id
                  ? "border-foreground text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
