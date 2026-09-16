"use client";

import * as React from "react";
import { Link as LinkIcon, Copy, Check } from "lucide-react";
import { toast } from "sonner";

/**
 * A share row with copy-link and social share buttons.
 * Uses the current page URL. No tracking, no third-party SDKs.
 */
export function ShareRow({ title }: { title: string }) {
  const [copied, setCopied] = React.useState(false);
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shares = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
      <span className="eyebrow-sm text-muted-foreground">Share</span>
      <button
        type="button"
        onClick={copyLink}
        className="group inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-foreground" strokeWidth={1.5} />
            Copied
          </>
        ) : (
          <>
            <LinkIcon className="h-3.5 w-3.5" strokeWidth={1.5} />
            Copy link
          </>
        )}
      </button>
      {shares.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        >
          {s.label}
        </a>
      ))}
      {copied && (
        <span className="text-xs text-muted-foreground" role="status">
          Link copied to clipboard
        </span>
      )}
    </div>
  );
}
