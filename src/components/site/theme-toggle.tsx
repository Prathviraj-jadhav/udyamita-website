"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Dark/light theme toggle button. Uses next-themes.
 * Renders a compact icon button that switches between light and dark.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const current = resolvedTheme ?? theme;
  const isDark = current === "dark";

  if (!mounted) {
    // Avoid hydration mismatch - render a placeholder
    return (
      <span
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border",
          className,
        )}
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
        isDark
          ? "border-foreground/20 text-foreground hover:bg-foreground/5"
          : "border-foreground/20 text-foreground hover:bg-foreground/5",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} />
      )}
    </button>
  );
}
