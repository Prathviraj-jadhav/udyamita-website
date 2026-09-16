import { buildLegalMetadata, LegalPage, type LegalContent } from "@/components/site/legal-page";

const privacyContent: LegalContent = {
  title: "Privacy Policy",
  description:
    "How Udyamita Global LLP collects, uses, and protects your personal information when you use our website and services.",
  path: "/privacy",
  no: "L1",
  label: "Legal · Privacy",
  heroTitle: "Privacy Policy",
  heroIntro:
    "We respect your data. This policy explains what we collect, why, and how we keep it safe.",
  lastUpdated: "September 2026",
  sections: [
    {
      heading: "Who we are",
      body: [
        "Udyamita Global LLP is a business growth and transformation partner based in Pune, Maharashtra, India. This privacy policy explains how we handle your personal information when you use our website, run the Business Health Check, submit a form, or subscribe to The Growth Letter.",
        "If you have questions about this policy or your data, contact us at hello@udyamita.com.",
      ],
    },
    {
      heading: "What we collect",
      body: [
        "Information you provide directly: your name, business, phone, email, city, and industry when you submit a form (contact, partner application, Business Health Check, newsletter).",
        "Information collected automatically: basic analytics data (page views, anonymised usage patterns) and cookies, as described in our Cookies Policy.",
        "We do not collect sensitive personal data (such as financial details, government IDs, or health information) through this website.",
      ],
    },
    {
      heading: "Why we collect it",
      body: [
        "To respond to your enquiry and provide the service you asked for - including tailoring a growth plan based on your Business Health Check score.",
        "To send you The Growth Letter if you subscribe (you can unsubscribe at any time).",
        "To improve our website, services, and content based on how they're used.",
        "To meet legal, regulatory, and accounting obligations as an Indian LLP.",
      ],
    },
    {
      heading: "How we store and protect it",
      body: [
        "Your data is stored securely and accessed only by authorised personnel. We use industry-standard measures to protect against unauthorised access, alteration, or disclosure.",
        "We retain your data only for as long as needed to provide the service, respond to your enquiry, or meet legal obligations - then delete or anonymise it.",
      ],
    },
    {
      heading: "Who we share it with",
      body: [
        "We do not sell your personal information. We share it only with: service providers who help us operate (e.g. hosting, email delivery, analytics) under appropriate data-protection agreements; qualified professionals (CAs, CSs) if you explicitly engage us for work that requires them; and authorities if required by law.",
        "Our service providers are bound by confidentiality and data-protection obligations.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You have the right to access the personal information we hold about you, request correction or deletion, and withdraw consent for processing at any time.",
        "To exercise any of these rights, email hello@udyamita.com. We respond within 30 days.",
        "You can unsubscribe from The Growth Letter using the link in any email.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "We use cookies to measure what's useful and improve the site. We do not use third-party ad tracking. See our Cookies Policy for details and controls.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy from time to time. The 'last updated' date above reflects the most recent version. Material changes will be highlighted on our website.",
      ],
    },
  ],
};

export const metadata = buildLegalMetadata(privacyContent);

export default function PrivacyPage() {
  return <LegalPage c={privacyContent} />;
}
