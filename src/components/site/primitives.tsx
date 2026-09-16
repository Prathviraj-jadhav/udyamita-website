"use client";

import * as React from "react";
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { easeSwiss } from "@/lib/content";

/* ------------------------------------------------------------------ */
/* REVEAL - generic scroll reveal                                      */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: React.ElementType;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as unknown as typeof motion.div;
  if (reduce) {
    return <Comp className={className}>{children}</Comp>;
  }
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeSwiss, delay }}
    >
      {children}
    </Comp>
  );
}

/* Stagger container */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSwiss },
  },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION LABEL + HEADER                                              */
/* ------------------------------------------------------------------ */

export function SectionLabel({
  children,
  className,
  no,
}: {
  children: React.ReactNode;
  className?: string;
  no?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {no && <span className="eyebrow-sm tnum text-muted-foreground">{no}</span>}
      <span className="h-px w-8 bg-foreground/30" />
      <span className="eyebrow text-foreground">{children}</span>
    </div>
  );
}

export function SectionHeader({
  no,
  label,
  title,
  intro,
  align = "left",
  className,
}: {
  no?: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <SectionLabel no={no}>{label}</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="h-section max-w-4xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* EDITORIAL HEADING                                                   */
/* ------------------------------------------------------------------ */

export function EditorialHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "display-lg leading-[1.02] tracking-tight",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* ARROW CIRCLE                                                        */
/* ------------------------------------------------------------------ */

export function ArrowCircle({
  size = 32,
  className,
  rotateOnHover = true,
}: {
  size?: number;
  className?: string;
  rotateOnHover?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-current/30 transition-transform duration-500",
        rotateOnHover && "group-hover:rotate-[-45deg]",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <ArrowRight style={{ width: size * 0.5, height: size * 0.5 }} strokeWidth={1.5} />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* TEXT-ROLL BUTTON                                                    */
/* ------------------------------------------------------------------ */

export function TextRollButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "over-hero";
  className?: string;
  type?: "button" | "submit";
}) {
  const variantCls = {
    primary:
      "bg-foreground text-background hover:bg-foreground/90",
    ghost:
      "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/50",
    "over-hero":
      "bg-background text-foreground hover:bg-background/90",
  }[variant];

  const inner = (
    <span
      className={cn(
        "group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-medium transition-colors duration-300",
        variantCls,
        className,
      )}
    >
      <span className="relative block h-5 overflow-hidden">
        <span className="block transition-transform duration-500 [transition-timing-function:cubic-bezier(.25,.1,.25,1)] group-hover:-translate-y-1/2">
          <span className="block h-5 leading-5 whitespace-nowrap">{children}</span>
          <span className="block h-5 leading-5 whitespace-nowrap" aria-hidden>
            {children}
          </span>
        </span>
      </span>
      <ArrowCircle size={30} />
    </span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* MARQUEE                                                             */
/* ------------------------------------------------------------------ */

export function Marquee({
  items,
  duration = 22,
  reverse = false,
  separator = "✕",
  className,
}: {
  items: readonly string[];
  duration?: number;
  reverse?: boolean;
  separator?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className={cn("marquee-track", reverse && "reverse")}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-6 whitespace-nowrap px-6"
          >
            <span className="display text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem]">
              {item}
            </span>
            <span className="text-muted-foreground/40 text-sm">{separator}</span>
          </span>
        ))}
      </div>
      {reduce && <div className="sr-only">{items.join(", ")}</div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TYPEWRITER - character reveal                                       */
/* ------------------------------------------------------------------ */

export function Typewriter({
  text,
  className,
  delay = 0,
  speed = 0.025,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    );
  }

  const chars = text.split("");
  return (
    <span ref={ref} className={className} aria-label={text}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.15,
            delay: delay + i * speed,
            ease: easeSwiss,
          }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* ANIMATED COUNTER                                                    */
/* ------------------------------------------------------------------ */

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  React.useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* MASKED VIDEO                                                        */
/* ------------------------------------------------------------------ */

export function MaskedVideo({
  src,
  className,
  rounded = true,
}: {
  src: string;
  className?: string;
  rounded?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden mask-soft",
        rounded && "rounded-3xl",
        className,
      )}
      initial={reduce ? false : { opacity: 0, scale: 0.9 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1.2 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: easeSwiss }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* VIDEO PANEL - generic responsive video                              */
/* ------------------------------------------------------------------ */

export function VideoPanel({
  src,
  poster,
  className,
  objectPosition = "center",
}: {
  src: string;
  poster?: string;
  className?: string;
  objectPosition?: string;
}) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
      className={cn("h-full w-full object-cover", className)}
      style={{ objectPosition }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

/* ------------------------------------------------------------------ */
/* HAIRLINE divider                                                    */
/* ------------------------------------------------------------------ */

export function Hairline({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} />;
}
