"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Udyamita logo mark - a minimal geometric "growth" glyph.
 * A square frame with an ascending bar set, rendered as crisp SVG.
 * Monochrome: uses currentColor so it adapts to theme.
 */
export function LogoMark({
  className,
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      aria-hidden
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* ascending bars - growth */}
      <rect x="7" y="18" width="3.5" height="7" fill="currentColor" />
      <rect x="14.25" y="13" width="3.5" height="12" fill="currentColor" />
      <rect x="21.5" y="7" width="3.5" height="18" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({
  className,
  as: As = "span",
}: {
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <As
      className={cn(
        "font-serif text-[1.35rem] leading-none tracking-tight font-medium",
        className,
      )}
    >
      Udyamita
    </As>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={26} />
      <Wordmark />
    </span>
  );
}

/**
 * Partner badge - starburst/compass style mark retained as a
 * supplied-style custom SVG. Used in partner / trust contexts.
 */
export function PartnerBadge({
  className,
  size = 64,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      aria-hidden
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      {/* compass starburst */}
      <path
        d="M32 6 L34 30 L58 32 L34 34 L32 58 L30 34 L6 32 L30 30 Z"
        fill="currentColor"
      />
      <circle cx="32" cy="32" r="3" fill="var(--background, #fff)" />
    </svg>
  );
}
