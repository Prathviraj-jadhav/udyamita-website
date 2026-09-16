"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeSwiss } from "@/lib/content";
import { SectionLabel, TextRollButton } from "./primitives";

/**
 * Reusable hero for subpages. Supports an optional eyebrow number,
 * label, headline, supporting copy, and CTAs.
 */
export function PageHero({
  no,
  label,
  title,
  intro,
  ctas,
  align = "left",
  variant = "light",
  className,
}: {
  no?: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  ctas?: { label: string; href: string; variant?: "primary" | "ghost" }[];
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const dark = variant === "dark";
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16",
        dark ? "bg-foreground text-background" : "bg-background",
        className,
      )}
    >
      <div className="udyam-container">
        <div
          className={cn(
            "flex flex-col gap-5",
            align === "center" && "items-center text-center",
          )}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeSwiss }}
          >
            <SectionLabel no={no} className={dark ? "text-background" : undefined}>
              {label}
            </SectionLabel>
          </motion.div>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeSwiss, delay: 0.05 }}
            className="display-lg max-w-4xl"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeSwiss, delay: 0.1 }}
              className={cn(
                "max-w-2xl text-base sm:text-lg leading-relaxed",
                dark ? "text-background/70" : "text-muted-foreground",
              )}
            >
              {intro}
            </motion.p>
          )}
          {ctas && ctas.length > 0 && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeSwiss, delay: 0.15 }}
              className="mt-4 flex flex-wrap items-center gap-4"
            >
              {ctas.map((cta) => (
                <TextRollButton
                  key={cta.href}
                  href={cta.href}
                  variant={cta.variant ?? "primary"}
                >
                  {cta.label}
                </TextRollButton>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/** CTA band used at the bottom of subpages */
export function CtaBand({
  title,
  intro,
  primary,
  secondary,
}: {
  title: string;
  intro?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section-pad bg-foreground text-background">
      <div className="udyam-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-lg text-background">{title}</h2>
          {intro && (
            <p className="mx-auto mt-5 max-w-xl text-background/70 leading-relaxed">
              {intro}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <TextRollButton href={primary.href} variant="over-hero">
              {primary.label}
            </TextRollButton>
            {secondary && (
              <Link
                href={secondary.href}
                className="text-sm text-background/80 underline-offset-4 hover:text-background hover:underline transition-colors"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
