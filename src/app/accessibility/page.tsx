import { buildLegalMetadata, LegalPage, type LegalContent } from "@/components/site/legal-page";

const accessibilityContent: LegalContent = {
  title: "Accessibility Statement",
  description:
    "Udyamita's commitment to making its website accessible to everyone, including users with disabilities, and the standards we target.",
  path: "/accessibility",
  no: "L4",
  label: "Legal · Accessibility",
  heroTitle: "Accessibility Statement",
  heroIntro:
    "We aim for WCAG 2.2 AA. Here's what that means in practice on this site, and how to tell us if something's hard to use.",
  lastUpdated: "September 2026",
  sections: [
    {
      heading: "Our commitment",
      body: [
        "Udyamita Global LLP is committed to making its website accessible to everyone, including people with disabilities. We target WCAG 2.2 AA as our accessibility standard.",
        "Accessibility is part of our design process, not an afterthought. We test for keyboard navigation, screen-reader compatibility, contrast, and touch targets.",
      ],
    },
    {
      heading: "What we've done",
      body: [
        "Semantic HTML: the site uses proper heading hierarchy, landmarks (header, main, footer, nav), and ARIA where appropriate.",
        "Keyboard navigation: every interactive element is reachable and operable via keyboard, with visible focus indicators.",
        "Contrast: text and interactive elements meet WCAG AA contrast ratios against the blue monochrome palette.",
        "Touch targets: interactive elements are at least 40px where practical, especially on mobile.",
        "Reduced motion: the site respects prefers-reduced-motion - animations are removed or dramatically reduced when this is set.",
        "Skip link: a 'skip to content' link is available for screen-reader and keyboard users.",
        "Alt text: images have descriptive alternative text; decorative images are marked appropriately.",
      ],
    },
    {
      heading: "Known limitations",
      body: [
        "Some third-party media (videos from external CDNs) may not have captions or audio descriptions, as we preserve the supplied assets without modification.",
        "We're continuously improving. If you find something hard to use, please tell us.",
      ],
    },
    {
      heading: "How to report an issue",
      body: [
        "If you encounter an accessibility barrier, email hello@udyamita.com with a description of the issue and the page URL. We respond within 5 business days and prioritise fixes.",
      ],
    },
    {
      heading: "Compatibility",
      body: [
        "The site is designed to work in modern browsers (Chrome, Firefox, Safari, Edge) and across devices from 320px to 1600px+ width.",
      ],
    },
  ],
};

export const metadata = buildLegalMetadata(accessibilityContent);

export default function AccessibilityPage() {
  return <LegalPage c={accessibilityContent} />;
}
