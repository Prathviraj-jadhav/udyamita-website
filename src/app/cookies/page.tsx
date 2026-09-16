import { buildLegalMetadata, LegalPage, type LegalContent } from "@/components/site/legal-page";

const cookiesContent: LegalContent = {
  title: "Cookies Policy",
  description:
    "How Udyamita uses cookies to measure what's useful and improve the site - with controls to accept or decline.",
  path: "/cookies",
  no: "L3",
  label: "Legal · Cookies",
  heroTitle: "Cookies Policy",
  heroIntro:
    "We use cookies to measure what's useful and improve the site. No third-party ad tracking. You're in control.",
  lastUpdated: "September 2026",
  sections: [
    {
      heading: "What cookies are",
      body: [
        "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how it's used.",
      ],
    },
    {
      heading: "The cookies we use",
      body: [
        "Essential cookies: required for the website to function (e.g. remembering your cookie consent choice). These cannot be disabled.",
        "Analytics cookies: help us understand which pages are useful and how visitors find the site, so we can improve it. These are anonymised and aggregated.",
        "We do NOT use advertising or ad-tracking cookies. We do not sell your data to advertisers.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "When you first visit, you'll see a cookie banner asking you to accept or decline non-essential cookies. Your choice is stored locally and respected.",
        "You can change your choice at any time by clearing your browser's cookies for this site - the banner will appear again on your next visit.",
        "Most browsers also let you block or delete cookies in their settings. Blocking essential cookies may affect site functionality.",
      ],
    },
    {
      heading: "Third-party services",
      body: [
        "If we use third-party analytics (e.g. a privacy-respecting analytics tool), it operates under its own privacy policy and processes only anonymised, aggregated data.",
        "Embedded media (videos from third-party CDNs) may set their own cookies when played. We preserve these media URLs as supplied but do not control third-party cookie practices.",
      ],
    },
    {
      heading: "Updates",
      body: [
        "We may update this policy if our cookie use changes. The 'last updated' date reflects the most recent version.",
      ],
    },
  ],
};

export const metadata = buildLegalMetadata(cookiesContent);

export default function CookiesPage() {
  return <LegalPage c={cookiesContent} />;
}
