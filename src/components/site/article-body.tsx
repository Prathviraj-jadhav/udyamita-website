"use client";

import * as React from "react";

/**
 * Minimal markdown-lite renderer for article bodies.
 * Supports: ## h2, ### h3, - lists, 1. ordered lists, > blockquote,
 * `inline code`, ```code blocks```, **bold**, [link](url), paragraphs.
 * Safe-by-construction: no dangerouslySetInnerHTML.
 */

export function ArticleBody({ body }: { body: string }) {
  const blocks = React.useMemo(() => parseBlocks(body), [body]);
  return (
    <div className="udyam-prose">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; text: string };

function parseBlocks(src: string): Block[] {
  const lines = src.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) {
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      blocks.push({ type: "h3", text: trimmed.slice(4) });
      i++;
    } else if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", text: trimmed.slice(3) });
      i++;
    } else if (trimmed.startsWith("> ")) {
      blocks.push({ type: "quote", text: trimmed.slice(2) });
      i++;
    } else if (trimmed.startsWith("```")) {
      // code block until closing ```
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++; // skip closing
      blocks.push({ type: "code", text: buf.join("\n") });
    } else if (/^\d+\.\s/.test(trimmed)) {
      // ordered list
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      // unordered list
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ type: "ul", items });
    } else {
      // paragraph - collect until blank or special line
      const buf: string[] = [trimmed];
      i++;
      while (
        i < lines.length &&
        lines[i].trim() &&
        !lines[i].trim().startsWith("#") &&
        !lines[i].trim().startsWith("> ") &&
        !lines[i].trim().startsWith("- ") &&
        !lines[i].trim().startsWith("* ") &&
        !/^\d+\.\s/.test(lines[i].trim()) &&
        !lines[i].trim().startsWith("```")
      ) {
        buf.push(lines[i].trim());
        i++;
      }
      blocks.push({ type: "p", text: buf.join(" ") });
    }
  }
  return blocks;
}

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={key} id={slugify(block.text)} className="scroll-mt-28">{renderInline(block.text)}</h2>;
    case "h3":
      return <h3 key={key} id={slugify(block.text)} className="scroll-mt-28">{renderInline(block.text)}</h3>;
    case "p":
      return <p key={key}>{renderInline(block.text)}</p>;
    case "quote":
      return <blockquote key={key}>{renderInline(block.text)}</blockquote>;
    case "code":
      return (
        <pre key={key}>
          <code>{block.text}</code>
        </pre>
      );
    case "ul":
      return (
        <ul key={key}>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key}>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      );
  }
}

/** Render inline markdown: **bold**, `code`, [text](url) */
function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Tokenize for **bold**, `code`, [text](url)
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(regex);
  parts.forEach((part, i) => {
    if (!part) return;
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(<strong key={i}>{part.slice(2, -2)}</strong>);
    } else if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push(<code key={i}>{part.slice(1, -1)}</code>);
    } else if (part.startsWith("[")) {
      const m = /\[([^\]]+)\]\(([^)]+)\)/.exec(part);
      if (m) {
        nodes.push(
          <a key={i} href={m[2]}>
            {m[1]}
          </a>
        );
      } else {
        nodes.push(part);
      }
    } else {
      nodes.push(part);
    }
  });
  return nodes;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
