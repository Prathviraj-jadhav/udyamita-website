import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/site/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://udyamita.com"),
  title: {
    default: "Udyamita Global LLP - Business Growth & Transformation Partner",
    template: "%s · Udyamita",
  },
  description:
    "Udyamita is the trusted growth partner for local businesses. Get discovered, win customers, and run better - with a simple stack of digital services that pay for themselves. Not an agency. A partner.",
  keywords: [
    "business growth partner",
    "digital transformation",
    "local SEO Pune",
    "lead generation",
    "CRM automation",
    "MSME growth Maharashtra",
    "business consulting India",
    "growth systems",
  ],
  authors: [{ name: "Udyamita Global LLP" }],
  creator: "Udyamita Global LLP",
  publisher: "Udyamita Global LLP",
  alternates: {
    canonical: "https://udyamita.com",
  },
  openGraph: {
    title: "Udyamita Global LLP - Business Growth & Transformation Partner",
    description:
      "Get discovered. Win customers. Run better. The trusted growth partner for local businesses.",
    url: "https://udyamita.com",
    siteName: "Udyamita Global LLP",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udyamita Global LLP - Business Growth & Transformation Partner",
    description:
      "Get discovered. Win customers. Run better. The trusted growth partner for local businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Udyamita Global LLP",
  description:
    "Business growth and transformation partner for local businesses. Consulting, digital growth, technology and automation in one practical growth system.",
  url: "https://udyamita.com",
  areaServed: ["Pune", "Maharashtra", "India"],
  knowsAbout: [
    "Business Growth",
    "Digital Transformation",
    "Local SEO",
    "Lead Generation",
    "CRM",
    "Automation",
    "Business Intelligence",
    "ERP",
    "Consulting",
  ],
  slogan: "Get Discovered. Win Customers. Run Better.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Udyamita Global LLP",
  url: "https://udyamita.com",
  description:
    "Business growth and transformation partner for local businesses. Get discovered, win customers, run better.",
  publisher: {
    "@type": "Organization",
    name: "Udyamita Global LLP",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://udyamita.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className="antialiased bg-background text-foreground"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
