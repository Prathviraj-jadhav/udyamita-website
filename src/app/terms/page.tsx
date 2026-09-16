import { buildLegalMetadata, LegalPage, type LegalContent } from "@/components/site/legal-page";

const termsContent: LegalContent = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Udyamita website and the engagement of Udyamita Global LLP's services.",
  path: "/terms",
  no: "L2",
  label: "Legal · Terms",
  heroTitle: "Terms of Service",
  heroIntro:
    "The terms under which you use this website and engage Udyamita's services. Plain language, not legal obstruction.",
  lastUpdated: "September 2026",
  sections: [
    {
      heading: "Acceptance of terms",
      body: [
        "By accessing or using the Udyamita website, you agree to these terms. If you do not agree, please do not use the website.",
        "Specific services (consulting, development, automation) may be governed by additional engagement-specific terms agreed in writing.",
      ],
    },
    {
      heading: "What we provide",
      body: [
        "Udyamita provides business growth consulting, digital marketing, technology, and automation services for local businesses.",
        "The website offers information about our services, a Business Health Check diagnostic tool, and content (blog articles, case studies) for educational purposes.",
        "Content on this site is general information, not professional advice tailored to your specific situation. Engaging us for a service creates a specific engagement with its own scope and terms.",
      ],
    },
    {
      heading: "What you agree to",
      body: [
        "You agree to provide accurate information when submitting forms, including the Business Health Check.",
        "You agree not to misuse the website - including attempting to disrupt it, scrape content at scale, or submit malicious content.",
        "You agree to respect the intellectual property of Udyamita and third parties referenced on this site.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The Udyamita name, logo, content, and design are the property of Udyamita Global LLP. You may not reproduce, distribute, or create derivative works without written permission.",
        "Third-party assets (videos, images) used on this site are used under appropriate arrangements with their respective owners.",
        "Blog articles and case studies may be shared with attribution and a link back to the original source.",
      ],
    },
    {
      heading: "Business Health Check",
      body: [
        "The Business Health Check is a free diagnostic tool that produces a score based on your self-reported inputs. The score is indicative, not a professional assessment.",
        "Demo values are clearly labelled as demo. Your real inputs produce your real score, but the tool is for guidance, not a substitute for a full engagement.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "Udyamita is not liable for indirect, incidental, or consequential damages arising from the use of this website.",
        "For paid engagements, liability is limited to the scope and value of the specific engagement, as agreed in the engagement terms.",
        "We are not a financial institution and do not provide investment, lending, or financial-product advice.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in Pune, Maharashtra.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms from time to time. The 'last updated' date reflects the most recent version. Continued use of the website after changes constitutes acceptance.",
      ],
    },
  ],
};

export const metadata = buildLegalMetadata(termsContent);

export default function TermsPage() {
  return <LegalPage c={termsContent} />;
}
