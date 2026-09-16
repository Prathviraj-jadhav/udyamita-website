import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/sections/hero";
import { CapabilityMarquee } from "@/components/site/sections/capability-marquee";
import { GrowthLeaks } from "@/components/site/sections/growth-leaks";
import { GrowthLeakCalculator } from "@/components/site/sections/growth-leak-calculator";
import { WhyUdyamita } from "@/components/site/sections/why-udyamita";
import { GrowthOS } from "@/components/site/sections/growth-os";
import { HealthCheck } from "@/components/site/sections/health-check";
import { GrowthLadder } from "@/components/site/sections/growth-ladder";
import { ServiceEcosystem } from "@/components/site/sections/service-ecosystem";
import { Technology } from "@/components/site/sections/technology";
import { Industries } from "@/components/site/sections/industries";
import { CaseStudies } from "@/components/site/sections/case-studies";
import { ProofMetrics } from "@/components/site/sections/proof-metrics";
import { SocialProof } from "@/components/site/sections/social-proof";
import { Insights } from "@/components/site/sections/insights";
import { Partners } from "@/components/site/sections/partners";
import { Enterprise } from "@/components/site/sections/enterprise";
import { LongTermVision } from "@/components/site/sections/long-term-vision";
import { FAQ } from "@/components/site/sections/faq";
import { FinalCTA } from "@/components/site/sections/final-cta";
import { Contact } from "@/components/site/sections/contact";
import { Footer } from "@/components/site/sections/footer";
import { CookieBanner } from "@/components/site/cookie-banner";
import { SectionDivider } from "@/components/site/section-divider";
import { MobileStickyCta } from "@/components/site/mobile-sticky-cta";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>

      <Navbar variant="over-hero" />

      <main id="main" className="flex-1">
        <Hero />
        <CapabilityMarquee />
        <GrowthLeaks />
        <GrowthLeakCalculator />
        <SectionDivider no="→" label="Why" />
        <WhyUdyamita />
        <SectionDivider no="→" label="The system" />
        <GrowthOS />
        <HealthCheck />
        <SectionDivider no="→" label="The ladder" />
        <GrowthLadder />
        <ServiceEcosystem />
        <Technology />
        <Industries />
        <SectionDivider no="→" label="Proof" />
        <CaseStudies />
        <ProofMetrics />
        <SocialProof />
        <SectionDivider no="→" label="Ideas" />
        <Insights />
        <Partners />
        <Enterprise />
        <LongTermVision />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
      <CookieBanner />
      <MobileStickyCta />
    </div>
  );
}
