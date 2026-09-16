"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, mobileNavLinks, brand } from "@/lib/content";
import { Logo } from "./logo";
import { TextRollButton } from "./primitives";
import { ThemeToggle } from "./theme-toggle";

type NavbarVariant = "over-hero" | "solid";

export function Navbar({ variant = "solid" }: { variant?: NavbarVariant }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const overHero = variant === "over-hero";

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="udyam-container pt-4 sm:pt-5">
          <nav
            className={cn(
              "pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-3 py-2 transition-all duration-500",
              overHero
                ? scrolled
                  ? "liquid-glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
                  : "border border-background/15 bg-background/5 backdrop-blur-md"
                : "liquid-glass",
              scrolled && !overHero ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]" : "",
            )}
          >
            {/* Left: logo */}
            <Link
              href="/"
              className="pl-2 pr-1 flex items-center"
              aria-label="Udyamita - home"
            >
              <Logo className={overHero && !scrolled ? "text-background" : undefined} />
            </Link>

            {/* Center: nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "group relative inline-flex items-center px-4 py-2 text-sm transition-colors",
                        overHero && !scrolled
                          ? "text-background/80 hover:text-background"
                          : "text-muted-foreground hover:text-foreground",
                        active && (overHero && !scrolled ? "text-background" : "text-foreground"),
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                          active && "scale-x-100",
                          overHero && !scrolled ? "bg-background" : "bg-foreground",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right: CTAs */}
            <div className="flex items-center gap-2">
              <Link
                href="/business-health-check"
                className={cn(
                  "hidden lg:inline-flex items-center px-4 py-2 text-sm transition-colors",
                  overHero && !scrolled
                    ? "text-background/80 hover:text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Business Health Check
              </Link>
              <Link
                href="/search"
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                  overHero && !scrolled
                    ? "text-background/80 hover:text-background hover:bg-background/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
                )}
                aria-label="Search"
              >
                <Search className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <ThemeToggle
                className={cn(
                  overHero && !scrolled
                    ? "border-background/20 text-background hover:bg-background/10 hover:text-background"
                    : "",
                )}
              />
              <div className="hidden sm:block">
                <TextRollButton href="/contact" variant={overHero && !scrolled ? "over-hero" : "primary"}>
                  Talk to us
                </TextRollButton>
              </div>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className={cn(
                  "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
                  overHero && !scrolled
                    ? "border-background/30 text-background"
                    : "border-foreground/15 text-foreground",
                )}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          {/* bottom sheet */}
          <motion.div
            className="absolute inset-x-3 bottom-3 rounded-3xl bg-background border border-border shadow-2xl overflow-hidden"
            initial={reduce ? { opacity: 0 } : { y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="px-6 py-4 max-h-[60vh] overflow-y-auto udyam-scroll">
              <ul className="flex flex-col">
                {mobileNavLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={reduce ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                      className="border-b border-border last:border-0"
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center justify-between py-4"
                      >
                        <span
                          className={cn(
                            "font-serif text-xl",
                            active && "text-royal",
                          )}
                        >
                          {link.label}
                        </span>
                        <span className="eyebrow-sm text-muted-foreground tnum">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <div className="px-6 pb-6 pt-2">
              <TextRollButton
                href="/business-health-check"
                variant="primary"
                className="w-full justify-center"
              >
                Run your business health check
              </TextRollButton>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                {brand.legalName} · {brand.location}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
