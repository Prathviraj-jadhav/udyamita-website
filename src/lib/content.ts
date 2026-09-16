/**
 * UDYAMITA - CONTENT SOURCE OF TRUTH
 * Business content derived from the supplied strategy documents.
 * No fabricated metrics, clients, or testimonials.
 */

import {
  Search,
  ShieldCheck,
  Megaphone,
  Repeat,
  ChartNoAxesColumn,
  TrendingUp,
  ArrowRight,
  Activity,
  Target,
  ListChecks,
  Wrench,
  Gauge,
  Sparkles,
  Layers3,
  Network,
  Building2,
  Briefcase,
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  Car,
  Home,
  Hammer,
  Package,
  Dumbbell,
  Factory,
  Ship,
  Boxes,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* BRAND                                                               */
/* ------------------------------------------------------------------ */

export const brand = {
  name: "Udyamita",
  legalName: "Udyamita Global LLP",
  positioning: "Business Growth & Transformation Partner",
  promise: ["Get Discovered.", "Win Customers.", "Run Better."],
  tagline: "The trusted growth partner for local businesses. Not an agency. A partner.",
  mission:
    "Help small businesses get discovered, win customers, and run better, using a simple stack of digital services that pay for themselves.",
  vision:
    "Become the default growth partner for local businesses in Maharashtra, and then India.",
  centralIdea:
    "Treat the service as the product and the cooperative network as the moat.",
  location: "Pune, Maharashtra, India",
  email: "hello@udyamita.com",
  phone: "+91 90000 00000",
} as const;

/* ------------------------------------------------------------------ */
/* NAV                                                                 */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Why Udyamita", href: "/why-udyamita" },
  { label: "Growth OS", href: "/growth-os" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
] as const;

export const mobileNavLinks = [
  ...navLinks,
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/* CAPABILITY MARQUEE                                                  */
/* ------------------------------------------------------------------ */

export const marqueeCapabilities = [
  "Business Growth",
  "Digital Transformation",
  "Local SEO",
  "Lead Generation",
  "CRM",
  "Automation",
  "AI",
  "Business Intelligence",
  "ERP",
  "Website Development",
  "Consulting",
  "Growth Systems",
] as const;

/* ------------------------------------------------------------------ */
/* GROWTH LEAKS                                                        */
/* ------------------------------------------------------------------ */

export const growthLeaks = [
  {
    key: "DISCOVER",
    title: "Customers cannot find you.",
    detail:
      "Your customers are already searching. The awkward part is whether they find you - or a competitor with a worse product and a better map pin.",
    icon: Search,
  },
  {
    key: "TRUST",
    title: "They find you but hesitate.",
    detail:
      "A name without proof is just a name. Without a credible website, reviews and a clear offer, discovery dies at the doorstep.",
    icon: ShieldCheck,
  },
  {
    key: "CONVERT",
    title: "Enquiries arrive and disappear.",
    detail:
      "More traffic isn't growth if nobody answers the phone. Leads leak the moment follow-up depends on memory instead of a system.",
    icon: Megaphone,
  },
  {
    key: "OPERATE",
    title: "Growth creates operational chaos.",
    detail:
      "Don't automate chaos. Don't buy a CRM to organise a process you haven't defined. Scale breaks the business that wasn't built to scale.",
    icon: Repeat,
  },
] as const;

/* ------------------------------------------------------------------ */
/* WHY UDYAMITA - traditional vs Udyamita                              */
/* ------------------------------------------------------------------ */

export const traditionalVendorFlow = ["Task", "Delivery", "Invoice"] as const;

export const udyamitaFlow = [
  "Diagnose",
  "Discover",
  "Quantify",
  "Strategize",
  "Prioritize",
  "Implement",
  "Measure",
  "Optimize",
  "Scale",
  "Compound",
] as const;

/* ------------------------------------------------------------------ */
/* GROWTH OS - 10 stages                                               */
/* ------------------------------------------------------------------ */

export const growthOS = [
  {
    no: "01",
    name: "Diagnose",
    purpose: "Find what is actually broken before spending a rupee.",
    activities: ["Audit", "Stakeholder interview", "Data review"],
    deliverable: "Growth diagnosis report",
    outcome: "A clear picture of where value is leaking.",
  },
  {
    no: "02",
    name: "Discover",
    purpose: "Understand how customers find - or fail to find - the business.",
    activities: ["Visibility audit", "Competitor map", "Keyword research"],
    deliverable: "Discoverability map",
    outcome: "Knowing where you are invisible.",
  },
  {
    no: "03",
    name: "Quantify",
    purpose: "Turn intuition into numbers worth discussing.",
    activities: ["Funnel mapping", "Baseline metrics", "Leak sizing"],
    deliverable: "Quantified growth model",
    outcome: "Every leak has a cost attached.",
  },
  {
    no: "04",
    name: "Strategize",
    purpose: "Choose the few moves that matter most.",
    activities: ["Option framing", "Sequencing", "Trade-offs"],
    deliverable: "Growth strategy",
    outcome: "A plan that says no to the wrong things.",
  },
  {
    no: "05",
    name: "Prioritize",
    purpose: "Fix what hurts most, first.",
    activities: ["Impact vs effort", "Rung mapping", "Roadmap"],
    deliverable: "Prioritized roadmap",
    outcome: "You know what to do this month, not someday.",
  },
  {
    no: "06",
    name: "Implement",
    purpose: "Ship the work, with delivery boundaries.",
    activities: ["Build", "Configure", "Integrate", "Launch"],
    deliverable: "Working systems",
    outcome: "Things that run, not slides about running.",
  },
  {
    no: "07",
    name: "Measure",
    purpose: "Prove the number moved.",
    activities: ["Tracking", "Dashboards", "Attribution"],
    deliverable: "Measurement dashboard",
    outcome: "Evidence replaces opinion.",
  },
  {
    no: "08",
    name: "Optimize",
    purpose: "Cut what doesn't pay for itself.",
    activities: ["A/B testing", "Funnel tuning", "Waste removal"],
    deliverable: "Optimization log",
    outcome: "Same spend, better return.",
  },
  {
    no: "09",
    name: "Scale",
    purpose: "Repeat what works, without breaking operations.",
    activities: ["Systematisation", "Automation", "Capacity planning"],
    deliverable: "Scaling playbook",
    outcome: "Growth that doesn't create chaos.",
  },
  {
    no: "10",
    name: "Compound",
    purpose: "Stack improvements so each one lifts the next.",
    activities: ["Cross-system leverage", "Data feedback loops"],
    deliverable: "Compounding model",
    outcome: "The business runs better every quarter.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* BUSINESS HEALTH CHECK                                               */
/* ------------------------------------------------------------------ */

export type HealthQuestion = {
  id: string;
  dimension: "DISCOVERABILITY" | "TRUST" | "LEAD FLOW" | "FOLLOW-UP" | "SYSTEMS";
  question: string;
  help: string;
};

export const healthQuestions: HealthQuestion[] = [
  {
    id: "q1",
    dimension: "DISCOVERABILITY",
    question: "How easily can customers find you online?",
    help: "Think about Google searches, Maps, and local directories.",
  },
  {
    id: "q2",
    dimension: "TRUST",
    question: "Do you have a credible website?",
    help: "Credible = clear offer, loads fast, looks professional, mobile-friendly.",
  },
  {
    id: "q3",
    dimension: "TRUST",
    question: "Do customers trust your reviews?",
    help: "Volume, recency and quality of public reviews.",
  },
  {
    id: "q4",
    dimension: "LEAD FLOW",
    question: "How quickly are enquiries answered?",
    help: "First response time, in minutes or hours - not days.",
  },
  {
    id: "q5",
    dimension: "LEAD FLOW",
    question: "Do you track leads in a system?",
    help: "A CRM, sheet or any single source of truth for every enquiry.",
  },
  {
    id: "q6",
    dimension: "FOLLOW-UP",
    question: "Do you follow up with every lead?",
    help: "Consistent, documented, not memory-based.",
  },
  {
    id: "q7",
    dimension: "FOLLOW-UP",
    question: "Do you measure advertising performance?",
    help: "You know which rupee produced which enquiry.",
  },
  {
    id: "q8",
    dimension: "SYSTEMS",
    question: "Do you use a CRM?",
    help: "Not a notebook. A tool that survives staff turnover.",
  },
  {
    id: "q9",
    dimension: "SYSTEMS",
    question: "How automated are repetitive processes?",
    help: "Follow-ups, reminders, reports - running without manual nudging.",
  },
];

export const healthAnswerScale = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Barely" },
  { value: 2, label: "Somewhat" },
  { value: 3, label: "Mostly" },
  { value: 4, label: "Fully" },
] as const;

export const healthDimensions = [
  "DISCOVERABILITY",
  "TRUST",
  "LEAD FLOW",
  "FOLLOW-UP",
  "SYSTEMS",
] as const;

/* ------------------------------------------------------------------ */
/* GROWTH LADDER - six rungs                                           */
/* ------------------------------------------------------------------ */

export const growthLadder = [
  {
    no: "01",
    name: "Get Discovered",
    problem: "Customers cannot find you.",
    services: [
      "Google Business Profile",
      "Local SEO",
      "Reviews",
      "Discovery visibility",
    ],
    indicative: "Rs 3,000-8,000 one-time or Rs 2,000-5,000/month",
    timeToValue: "2-4 weeks",
    nextRung: "Build Trust",
  },
  {
    no: "02",
    name: "Build Trust",
    problem: "Customers find you but don't trust you enough.",
    services: ["Website", "Brand", "Digital presence", "Conversion assets"],
    indicative: "Rs 15,000-40,000 one-time plus upkeep",
    timeToValue: "3-6 weeks",
    nextRung: "Generate Customers",
  },
  {
    no: "03",
    name: "Generate Customers",
    problem: "Enquiries exist but leak.",
    services: ["Lead generation", "Website", "SEO", "Follow-up", "CRM"],
    indicative: "Rs 20,000-50,000/month",
    timeToValue: "4-8 weeks",
    nextRung: "Growth Engine",
  },
  {
    no: "04",
    name: "Growth Engine",
    problem: "Growth is difficult to scale predictably.",
    services: ["Performance marketing", "CRM", "Automation", "Analytics"],
    indicative: "Rs 50,000-1,25,000/month plus ad spend",
    timeToValue: "6-10 weeks",
    nextRung: "Business Operating System",
  },
  {
    no: "05",
    name: "Business Operating System",
    problem: "The business is manual and difficult to manage.",
    services: ["Technology", "CRM", "ERP", "Automation", "Analytics", "Consulting"],
    indicative: "Rs 1,25,000-3,00,000/month",
    timeToValue: "8-16 weeks",
    nextRung: "Enterprise Growth Partner",
  },
  {
    no: "06",
    name: "Enterprise Growth Partner",
    problem: "Off-the-shelf systems no longer fit.",
    services: [
      "Custom software",
      "Data platforms",
      "Digital transformation",
      "Enterprise consulting",
    ],
    indicative: "Project based - lakhs to crores",
    timeToValue: "Scoped per engagement",
    nextRung: "Compound",
  },
] as const;

/* ------------------------------------------------------------------ */
/* SERVICE ECOSYSTEM - 7 categories                                    */
/* ------------------------------------------------------------------ */

export const serviceEcosystem = [
  {
    key: "DISCOVER",
    icon: Search,
    services: [
      "Google Business Profile",
      "Local SEO",
      "SEO",
      "AEO",
      "GEO",
      "Technical SEO",
      "On-page SEO",
      "Off-page SEO",
      "Keyword Research",
      "Search Visibility",
      "Reputation",
    ],
  },
  {
    key: "TRUST",
    icon: ShieldCheck,
    services: [
      "Web Development",
      "UI/UX",
      "Landing Pages",
      "Corporate Websites",
      "E-commerce",
      "Branding",
      "Identity",
      "Content",
      "Presentation Design",
      "Sales Collateral",
    ],
  },
  {
    key: "GENERATE",
    icon: Megaphone,
    services: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Performance Marketing",
      "Lead Generation",
      "Landing Pages",
      "Campaign Tracking",
    ],
  },
  {
    key: "CONVERT",
    icon: ArrowRight,
    services: [
      "CRM",
      "Lead Qualification",
      "Sales Pipeline",
      "WhatsApp Automation",
      "Email Automation",
      "Follow-up Systems",
      "Chatbots",
      "Sales Dashboards",
    ],
  },
  {
    key: "RETAIN",
    icon: Repeat,
    services: [
      "Customer Portals",
      "CRM",
      "Customer Communication",
      "Service Reminders",
      "Loyalty",
      "Support",
      "Customer Analytics",
    ],
  },
  {
    key: "MEASURE",
    icon: ChartNoAxesColumn,
    services: [
      "GA4",
      "Search Console",
      "Marketing Analytics",
      "Business Intelligence",
      "Dashboards",
      "Revenue Attribution",
      "Conversion Analytics",
    ],
  },
  {
    key: "SCALE",
    icon: Layers3,
    services: [
      "ERP",
      "CRM",
      "Custom Software",
      "Mobile Apps",
      "API Integrations",
      "AI",
      "Automation",
      "Cloud",
      "Data Platforms",
      "Digital Transformation",
      "IoT",
      "Embedded",
      "Blockchain",
      "Web3",
      "AR",
      "VR",
      "Game Development",
      "Support Operations",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* TECHNOLOGY CAPABILITY                                               */
/* ------------------------------------------------------------------ */

export const techCategories = [
  "WEB",
  "MOBILE",
  "CRM",
  "ERP",
  "API",
  "AI",
  "DATA",
  "AUTOMATION",
  "CLOUD",
  "IOT",
  "EMBEDDED",
  "BLOCKCHAIN",
  "WEB3",
  "AR / VR",
  "SUPPORT SYSTEMS",
] as const;

export const techStacks = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "REST",
  "GraphQL",
  "Flutter",
  "React Native",
] as const;

/* ------------------------------------------------------------------ */
/* INDUSTRIES                                                          */
/* ------------------------------------------------------------------ */

const industryIconMap = {
  Retail: Briefcase,
  Healthcare: Stethoscope,
  "Restaurants / Hospitality": UtensilsCrossed,
  "Professional Services": Building2,
  "Coaching / Education": GraduationCap,
  Automotive: Car,
  "Real Estate": Home,
  "Interiors / Construction": Hammer,
  "Wholesale / Trading": Package,
  "Fitness / Wellness": Dumbbell,
  Manufacturing: Factory,
  "Import / Export": Ship,
  "B2B Industrial": Boxes,
} as const;

export type IndustryTier = {
  tier: 1 | 2 | 3;
  name: keyof typeof industryIconMap;
  leak: string;
};

export const industries: IndustryTier[] = [
  { tier: 1, name: "Retail", leak: "Footfall is down; online discovery is invisible." },
  { tier: 1, name: "Healthcare", leak: "Patients can't book; trust signals are weak." },
  { tier: 1, name: "Restaurants / Hospitality", leak: "Reviews and maps drive - or kill - covers." },
  { tier: 1, name: "Professional Services", leak: "Expertise is real; pipeline is invisible." },
  { tier: 1, name: "Coaching / Education", leak: "Admissions leak after the first enquiry." },
  { tier: 2, name: "Automotive", leak: "Showroom visits don't convert to bookings." },
  { tier: 2, name: "Real Estate", leak: "Long cycles with no follow-up system." },
  { tier: 2, name: "Interiors / Construction", leak: "Quotations die in WhatsApp." },
  { tier: 2, name: "Wholesale / Trading", leak: "Reorders depend on memory." },
  { tier: 2, name: "Fitness / Wellness", leak: "Memberships churn without retention." },
  { tier: 3, name: "Manufacturing", leak: "Operations outrun the systems that run them." },
  { tier: 3, name: "Import / Export", leak: "Compliance and data live in spreadsheets." },
  { tier: 3, name: "B2B Industrial", leak: "Sales cycles need systems, not salespeople alone." },
];

export function industryIcon(name: IndustryTier["name"]) {
  return industryIconMap[name];
}

/* ------------------------------------------------------------------ */
/* CASE STUDIES                                                        */
/* ------------------------------------------------------------------ */

export const caseStudies = [
  {
    title: "Local visibility rebuild",
    summary:
      "A local business moved from invisible on Maps to the first result in its service area - using a structured discoverability fix, not a campaign.",
    format: "Discovery",
    metricLabel: "Map visibility",
    metricValue: "Off-page 1 → top 3",
    tag: "Get Discovered",
  },
  {
    title: "Lead capture & follow-up system",
    summary:
      "Enquiries that used to vanish in WhatsApp were routed into a CRM with automated follow-up - turning dropped leads into a measurable pipeline.",
    format: "Convert",
    metricLabel: "Lead response",
    metricValue: "Hours → minutes",
    tag: "Generate Customers",
  },
] as const;

/* ------------------------------------------------------------------ */
/* PROOF / METRICS - verified structural truths only                   */
/* ------------------------------------------------------------------ */

export const proofMetrics = [
  { value: 10, suffix: "", label: "Growth OS stages", note: "A complete system, not a single tactic." },
  { value: 6, suffix: "", label: "Growth ladder rungs", note: "From discovery to enterprise." },
  { value: 7, suffix: "", label: "Value-chain layers", note: "Discover to scale." },
  { value: 50, suffix: "+", label: "Services in the ecosystem", note: "Productised, with delivery boundaries." },
] as const;

export const proofCategories = [
  "DISCOVERY",
  "LEADS",
  "CONVERSION",
  "RETENTION",
  "OPERATIONS",
] as const;

/* ------------------------------------------------------------------ */
/* INSIGHTS                                                            */
/* ------------------------------------------------------------------ */

export const insights = [
  {
    title: "Your customers are already searching",
    category: "Business Growth",
    readingTime: "4 min",
    takeaway: "The question is whether they find you - or a competitor with a worse product and a better map pin.",
  },
  {
    title: "More traffic isn't growth if nobody answers the phone",
    category: "Lead Generation",
    readingTime: "5 min",
    takeaway: "Traffic without a response system is just a more expensive way to lose the same lead.",
  },
  {
    title: "Don't automate chaos",
    category: "Automation",
    readingTime: "3 min",
    takeaway: "Automate a defined process. Automating an undefined one just makes the mess faster.",
  },
  {
    title: "Don't buy a CRM to organise a process you haven't defined",
    category: "CRM",
    readingTime: "4 min",
    takeaway: "The tool is the last step. The process is the first.",
  },
  {
    title: "Growth doesn't break in one place. It leaks.",
    category: "Business Growth",
    readingTime: "6 min",
    takeaway: "Stop looking for the one big problem. Find the small leaks compounding against you.",
  },
  {
    title: "The service is not the moat. The relationship is.",
    category: "Strategy",
    readingTime: "5 min",
    takeaway: "Productise the service. Build the network around it.",
  },
] as const;

export const insightCategories = [
  "Business Growth",
  "Digital Transformation",
  "Technology",
  "Sales",
  "Marketing",
  "Operations",
  "Automation",
  "AI",
  "Industry Insights",
  "Founder Education",
  "Case Studies",
  "Business Mistakes",
] as const;

/* ------------------------------------------------------------------ */
/* PARTNERS                                                            */
/* ------------------------------------------------------------------ */

export const partnerTypes = [
  "CAs",
  "CSs",
  "Accountants",
  "Consultants",
  "Business Advisors",
  "Associations",
  "Technology companies",
  "Agencies",
  "Community organisations",
] as const;

export const partnerJourney = [
  { step: "Apply", icon: Briefcase },
  { step: "Qualify", icon: Target },
  { step: "Enable", icon: Wrench },
  { step: "Refer", icon: Network },
  { step: "Track", icon: ChartNoAxesColumn },
  { step: "Earn", icon: Sparkles },
  { step: "Grow", icon: TrendingUp },
] as const;

/* ------------------------------------------------------------------ */
/* INVESTORS - evolution (no fabricated numbers)                       */
/* ------------------------------------------------------------------ */

export const investorEvolution = [
  "Service",
  "Productised Service",
  "Recurring Revenue",
  "Technology",
  "Data",
  "Ecosystem",
  "Infrastructure",
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    q: "What is Udyamita?",
    a: "Udyamita Global LLP is a business growth and transformation partner for local businesses. It combines consulting, digital growth, technology and automation into one practical growth system.",
  },
  {
    q: "What does Udyamita do?",
    a: "Udyamita helps businesses get discovered, win customers and run better - through diagnosis, strategy, implementation and measurement against the numbers that matter.",
  },
  {
    q: "Who does Udyamita serve?",
    a: "Local businesses across Maharashtra and India - starting with retail, healthcare, restaurants, professional services and coaching, then extending to manufacturing and B2B.",
  },
  {
    q: "What is the Udyamita Growth OS?",
    a: "A ten-stage system: Diagnose, Discover, Quantify, Strategize, Prioritize, Implement, Measure, Optimize, Scale, Compound. It turns growth from guesswork into a measured process.",
  },
  {
    q: "What services does Udyamita provide?",
    a: "Services span seven layers - Discover, Trust, Generate, Convert, Retain, Measure, Scale - from local SEO and websites to CRM, ERP, automation, AI and custom software.",
  },
  {
    q: "How much does Udyamita cost?",
    a: "Pricing follows a six-rung ladder, from Rs 2,000-8,000 entry work to enterprise projects scoped per engagement. Indicative ranges are published - nothing is hidden behind 'contact us'.",
  },
  {
    q: "What is the Business Health Check?",
    a: "A free diagnostic that scores your business across discoverability, trust, lead flow, follow-up and systems - then identifies your largest growth leak and your recommended first move.",
  },
  {
    q: "How can I become a Udyamita partner?",
    a: "Apply, qualify, get enabled, refer, track and earn. Udyamita works with CAs, CSs, accountants, consultants, advisors, associations, technology companies and agencies.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* MOTION VARIANTS                                                     */
/* ------------------------------------------------------------------ */

export const easeSwiss = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Footer nav groups                                                   */
/* ------------------------------------------------------------------ */

export const footerNav = [
  {
    title: "Company",
    links: ["Why Udyamita", "About", "Consulting", "Services", "Industries", "Case Studies", "Insights"],
  },
  {
    title: "Solutions",
    links: [
      "Get Discovered",
      "Build Trust",
      "Generate Customers",
      "Growth Engine",
      "Business Operating System",
      "Enterprise Growth Partner",
    ],
  },
  {
    title: "Partners",
    links: ["Channel Partners", "Referral Program", "Technology Partners", "Associations"],
  },
  {
    title: "Institutional",
    links: ["Enterprise", "Investors", "Governance", "Disclosures"],
  },
] as const;

export const footerResources = [
  "Business Health Check",
  "Pricing",
  "FAQs",
  "Contact",
] as const;

export const footerLegal = ["Privacy", "Terms", "Cookies", "Accessibility"] as const;

/* re-export icons used downstream */
export const Icons = {
  Activity,
  Target,
  ListChecks,
  Wrench,
  Gauge,
  Sparkles,
  Network,
  TrendingUp,
  ArrowRight,
  Search,
  ShieldCheck,
  Megaphone,
  Repeat,
  ChartNoAxesColumn,
  Layers3,
  Building2,
  Briefcase,
  Stethoscope,
  UtensilsCrossed,
  GraduationCap,
  Car,
  Home,
  Hammer,
  Package,
  Dumbbell,
  Factory,
  Ship,
  Boxes,
};
