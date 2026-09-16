import { Navbar } from "./navbar";
import { Footer } from "./sections/footer";
import { CookieBanner } from "./cookie-banner";

/**
 * Shared page shell for subpages (solid navbar + footer + cookie banner).
 * The homepage assembles its own shell because its hero needs an "over-hero"
 * transparent navbar.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar variant="solid" />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
