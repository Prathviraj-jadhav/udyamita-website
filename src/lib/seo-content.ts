/**
 * UDYAMITA - SEO CONTENT DATA
 * Case studies, blog/insight articles, service detail pages, industry detail pages.
 * No fabricated client names, logos, awards, testimonials, or metrics.
 * Case studies describe engagement patterns by sector; articles are original educational content.
 */

import { assets } from "./assets";

/* ------------------------------------------------------------------ */
/* CASE STUDIES - engagement patterns by sector                        */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  rung: string;
  format: string;
  video?: string;
  poster?: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  takeaways: string[];
  relatedService: string;
  relatedIndustry: string;
  readingTime: string;
  publishedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "local-visibility-rebuild",
    title: "Local visibility rebuild for a Pune retail business",
    sector: "Retail",
    rung: "Get Discovered",
    format: "Discovery",
    video: assets.caseStudyVideo01,
    poster: assets.footerPoster,
    summary:
      "A retail business moved from invisible on Google Maps to the top three results in its service area - using a structured discoverability fix, not an ad campaign.",
    challenge:
      "The business had a physical presence and loyal walk-in customers, but was practically invisible to anyone searching online. No claimed Google Business Profile, inconsistent directory listings, no recent reviews, and a website that hadn't been updated in years. Footfall was declining and the owner blamed the market - when the real problem was discoverability.",
    approach:
      "We began with a discoverability audit: mapping every place the business appeared (or didn't) online. We claimed and optimised the Google Business Profile, fixed NAP (name, address, phone) consistency across directories, built a review-generation system tied to satisfied customers, and rebuilt the website as a conversion asset rather than a brochure. No paid ads in this phase - the goal was to fix the foundation first.",
    outcome:
      "Within weeks the business appeared in the local pack for its core service queries, moved from off the first page to the top three on Maps, and began receiving enquiries through channels that previously produced nothing. The discoverability leak - the most expensive one - was closed before any ad spend was added.",
    takeaways: [
      "Visibility problems are usually foundation problems, not budget problems.",
      "Claiming and optimising your Google Business Profile is the single highest-leverage local SEO move.",
      "Reviews compound - a review-generation system beats a one-time push.",
      "Fix discoverability before paying for traffic; otherwise you pay to send people to a leak.",
    ],
    relatedService: "local-seo",
    relatedIndustry: "retail",
    readingTime: "5 min",
    publishedAt: "2026-08-12",
  },
  {
    slug: "lead-capture-follow-up-system",
    title: "Lead capture & follow-up system for a professional services firm",
    sector: "Professional Services",
    rung: "Generate Customers",
    format: "Convert",
    video: assets.caseStudyVideo02,
    poster: assets.footerPoster,
    summary:
      "Enquiries that used to vanish in WhatsApp were routed into a CRM with automated follow-up - turning dropped leads into a measurable pipeline.",
    challenge:
      "The firm received a steady stream of enquiries - phone, WhatsApp, email, website form - but had no single view of them. Leads were answered when remembered, followed up inconsistently, and forgotten when staff got busy. The owners knew enquiries were coming in, but had no idea how many converted or where the leaks were.",
    approach:
      "We routed every enquiry channel into a single CRM, set qualification rules so the right leads were prioritised, and built automated follow-up sequences (WhatsApp + email) that ran without manual nudging. We added a simple dashboard so the partners could see pipeline value, response time, and conversion rate at a glance - replacing gut feel with numbers.",
    outcome:
      "First-response time dropped from hours to minutes. Follow-up consistency went from memory-based to system-based. The firm could finally see its pipeline and answer the question every partner asks: 'how much business are we actually winning, and where are we losing it?'",
    takeaways: [
      "Traffic without a response system is a more expensive way to lose the same lead.",
      "A CRM is the last step, not the first - define the process before buying the tool.",
      "Automated follow-up beats manual follow-up because it survives staff turnover and busy weeks.",
      "You can't improve a number you can't see. Pipeline visibility comes before pipeline growth.",
    ],
    relatedService: "crm",
    relatedIndustry: "professional-services",
    readingTime: "6 min",
    publishedAt: "2026-08-20",
  },
  {
    slug: "restaurant-discovery-reputation",
    title: "Discovery & reputation rebuild for a restaurant",
    sector: "Restaurants / Hospitality",
    rung: "Get Discovered",
    format: "Discovery",
    poster: assets.footerPoster,
    summary:
      "A restaurant whose covers depended on walk-ins and word-of-mouth rebuilt its Maps presence, review velocity, and booking flow - turning online search into seated customers.",
    challenge:
      "Covers were inconsistent. The restaurant appeared on Maps but with poor photos, outdated hours, and a low review rating driven by a few unresolved complaints. Online booking wasn't possible, so discovery didn't convert to reservations.",
    approach:
      "We optimised the Google Business Profile with professional imagery and correct attributes, set up a review-response and generation system that addressed old complaints while inviting new positive reviews, and added a simple online booking flow tied to the CRM so every reservation was tracked.",
    outcome:
      "Map impressions rose, the average rating improved as fresh reviews diluted old ones, and booking became measurable rather than guesswork. The restaurant now knew which days and channels drove covers - and could act on it.",
    takeaways: [
      "For restaurants, Maps and reviews are the storefront - they need active management, not setup-and-forget.",
      "Old negative reviews can be diluted by a steady flow of new positive ones - if you ask systematically.",
      "Online booking isn't just convenience; it's the only way to attribute covers to channels.",
    ],
    relatedService: "local-seo",
    relatedIndustry: "restaurants-hospitality",
    readingTime: "5 min",
    publishedAt: "2026-07-30",
  },
  {
    slug: "healthcare-trust-build",
    title: "Trust & booking system for a healthcare practice",
    sector: "Healthcare",
    rung: "Build Trust",
    format: "Trust",
    poster: assets.footerPoster,
    summary:
      "A healthcare practice with real expertise but a weak digital presence rebuilt its website, credentials, and booking flow - so patients could trust and book without a phone call.",
    challenge:
      "Patients couldn't easily verify the practice's credentials, services, or availability. The website was a static brochure with no booking path, so every new patient required a phone call - a friction point that lost younger, digital-native patients entirely.",
    approach:
      "We rebuilt the website around trust signals (credentials, services, FAQs, privacy), added a clear booking flow with reminders, and structured the content for both human readers and search/AI answer engines (AEO). We made sure the practice appeared as the authoritative answer for its specialty in its area.",
    outcome:
      "The practice became the cited answer for common local queries in its specialty, bookings moved partly online reducing phone load, and patients arrived better-informed - shortening consultations and improving satisfaction.",
    takeaways: [
      "In healthcare, trust is the conversion - credentials and clarity beat clever copy.",
      "Booking flows reduce phone load and capture digital-native patients who won't call.",
      "AEO (answer engine optimisation) matters as much as SEO for health queries.",
    ],
    relatedService: "web-development",
    relatedIndustry: "healthcare",
    readingTime: "6 min",
    publishedAt: "2026-07-15",
  },
  {
    slug: "coaching-admission-funnel",
    title: "Admission funnel for a coaching institute",
    sector: "Coaching / Education",
    rung: "Generate Customers",
    format: "Generate",
    poster: assets.footerPoster,
    summary:
      "A coaching institute whose admissions leaked after the first enquiry built a structured funnel - from first touch to enrolment - with measured follow-up at every stage.",
    challenge:
      "Admissions were seasonal and stressful. Enquiries came in during admission season but were followed up inconsistently, and the institute had no idea how many enquiries converted to demo classes, or demos to enrolments. Growth meant working harder, not smarter.",
    approach:
      "We mapped the full admission funnel (enquiry → demo → enrolment) and instrumented every stage. We set up a CRM with stage-based follow-up sequences, parent communication automation, and a dashboard showing conversion at each step. We then ran measured performance marketing against the funnel - paying only for channels that produced enrolled students, not just clicks.",
    outcome:
      "The institute could see exactly where admissions leaked and fix that stage specifically. Admissions season became predictable rather than chaotic, and ad spend was reallocated from vanity channels to ones that produced enrolled students.",
    takeaways: [
      "A funnel you can't measure is a funnel you can't fix.",
      "In education, the sale is multi-step - follow-up at each stage matters more than the first touch.",
      "Pay for enrolled students, not clicks - attribution is the difference.",
    ],
    relatedService: "lead-generation",
    relatedIndustry: "coaching-education",
    readingTime: "7 min",
    publishedAt: "2026-06-28",
  },
  {
    slug: "manufacturing-operations-system",
    title: "Operations system for a small manufacturer",
    sector: "Manufacturing",
    rung: "Business Operating System",
    format: "Operate",
    poster: assets.footerPoster,
    summary:
      "A small manufacturer running on spreadsheets and memory implemented a lightweight operating system - CRM, inventory, and analytics - before growth broke the business.",
    challenge:
      "The manufacturer was growing, but operations were manual. Orders lived in WhatsApp, inventory in a spreadsheet, and production planning in the owner's head. Growth was creating chaos - missed orders, stockouts, and no visibility into what was actually profitable.",
    approach:
      "We avoided the temptation to install a heavy ERP on day one. Instead, we sequenced: first a CRM to capture orders, then simple inventory tracking tied to it, then a basic analytics layer showing order status, stock levels, and margin per product line. Each piece was adopted before the next was added - so the system was used, not resented.",
    outcome:
      "The owner could finally see orders, stock, and margins in one place. Stockouts dropped, missed orders became visible (and fixable), and the business could plan growth against real numbers rather than intuition.",
    takeaways: [
      "Don't install a heavy ERP on day one - sequence the system so each piece is adopted.",
      "Visibility comes before optimisation - you can't improve what you can't see.",
      "Growth breaks businesses that aren't built to scale - systemise before you scale.",
    ],
    relatedService: "erp",
    relatedIndustry: "manufacturing",
    readingTime: "8 min",
    publishedAt: "2026-06-10",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/* BLOG / INSIGHTS ARTICLES                                            */
/* ------------------------------------------------------------------ */

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  takeaway: string;
  readingTime: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  body: string; // markdown-lite (we render with a simple renderer)
  relatedService?: string;
  relatedIndustry?: string;
  faq?: { q: string; a: string }[];
  topicCluster?: string;
};

export const articles: Article[] = [
  {
    slug: "your-customers-are-already-searching",
    title: "Your customers are already searching",
    category: "Business Growth",
    excerpt:
      "The question is whether they find you - or a competitor with a worse product and a better map pin.",
    takeaway:
      "Discoverability is a foundation problem. Fix it before paying for traffic, or you pay to send people to a leak.",
    readingTime: "4 min",
    publishedAt: "2026-08-25",
    author: "Udyamita Editorial",
    topicCluster: "Local Visibility",
    relatedService: "local-seo",
    body: `## The awkward question

Your customers are already searching. They're searching on Google, on Maps, on voice, and increasingly inside AI answer engines. The awkward part of running a local business isn't whether demand exists - it's whether the person searching finds you, or finds a competitor with a worse product and a better map pin.

Most business owners assume that if they're good at what they do, customers will find them. That was true when discovery happened through footfall and word-of-mouth. It isn't true now.

## Where businesses are invisible

The common invisibility points are remarkably consistent:

- **Google Business Profile** unclaimed, incomplete, or with wrong hours
- **Inconsistent directory listings** - different names, addresses, or phone numbers across the web
- **No recent reviews**, or old negative reviews with no response
- **A website** that hasn't been updated in years and doesn't answer the questions customers actually ask
- **No presence in AI answers** - because the content isn't structured to be cited

Each of these is a closed door. Together, they make a business functionally invisible to anyone who doesn't already know its name.

## Why "run some ads" is the wrong first move

The reflex when footfall drops is often to run ads. That's understandable - ads feel like action. But paying for traffic to send people to a broken discovery foundation is paying to make the leak bigger, not smaller.

The right sequence is:

1. **Diagnose** where you're invisible
2. **Fix the foundation** - profile, listings, reviews, website
3. **Then** pay for traffic to a foundation that actually converts

## The one move worth making first

If you can only do one thing this month: claim and properly optimise your Google Business Profile. It's free, it's the single highest-leverage local SEO move, and for most local businesses it produces more visible results than any paid campaign.

If you want to see where you're actually leaking, run the [Business Health Check](/business-health-check). It takes two minutes and tells you the single move worth making first.`,
    faq: [
      {
        q: "How do I know if customers can find my business online?",
        a: "Search for your core service plus your city (e.g. 'CA in Pune') in an incognito window. If you don't appear in the first few results and the Maps pack, you're functionally invisible to new customers - regardless of how good you are.",
      },
      {
        q: "Is Google Business Profile really free?",
        a: "Yes. Claiming and optimising your Google Business Profile is free and is the single highest-leverage local SEO move for most local businesses.",
      },
      {
        q: "Should I run ads if I'm not getting found organically?",
        a: "Usually not first. Fix the discovery foundation (profile, listings, reviews, website) before paying for traffic - otherwise you pay to send people to a leak.",
      },
    ],
  },
  {
    slug: "more-traffic-isnt-growth",
    title: "More traffic isn't growth if nobody answers the phone",
    category: "Lead Generation",
    excerpt:
      "Traffic without a response system is just a more expensive way to lose the same lead.",
    takeaway:
      "Build the response system before you scale traffic. Leads leak the moment follow-up depends on memory.",
    readingTime: "5 min",
    publishedAt: "2026-08-18",
    author: "Udyamita Editorial",
    topicCluster: "Lead Flow",
    relatedService: "lead-generation",
    body: `## The traffic trap

There's a quiet tragedy in local business marketing: a business spends on ads, traffic goes up, and nothing changes. The assumption is that the ads didn't work. The reality is usually that the leads did arrive - and then vanished.

Traffic without a response system isn't growth. It's a more expensive way to lose the same lead.

## Where leads actually leak

The leak almost never happens at the ad. It happens after:

- **First-response time** is hours instead of minutes - the customer already called the next result
- **Follow-up** depends on memory - and memory fails exactly when staff are busy
- **No single source of truth** - leads live in WhatsApp, email, notebooks, and three inboxes
- **No qualification** - every lead gets the same effort, so the good ones get lost in the noise

Each of these is a hole in a bucket. Add more water (traffic) and the bucket fills slightly - but the holes are still there.

## The system that actually works

The sequence that turns traffic into customers:

1. **Capture every enquiry** into a single CRM - phone, WhatsApp, email, form
2. **Qualify** so the right leads are prioritised, not just the loudest
3. **Automate follow-up** so it runs without manual nudging
4. **Measure** response time, conversion rate, and pipeline value

The point isn't the tool. The point is that follow-up becomes system-based rather than memory-based - which means it survives busy weeks and staff turnover.

## The uncomfortable metric

If you can't answer "how many enquiries did we get last month, and how many converted?" - you don't have a lead problem. You have a visibility problem. Fix that first.

Run the [Business Health Check](/business-health-check) to see where your lead flow actually leaks.`,
    faq: [
      {
        q: "What's a good first-response time for leads?",
        a: "Under 5 minutes during business hours. Studies consistently show conversion drops sharply after the first few minutes - the customer has usually already contacted the next option.",
      },
      {
        q: "Do I need a CRM if I only get a few enquiries?",
        a: "If you get few enquiries, each one matters more - which is exactly when a CRM with automated follow-up pays off. A spreadsheet works at very low volume but breaks the moment volume or staff grow.",
      },
    ],
  },
  {
    slug: "dont-automate-chaos",
    title: "Don't automate chaos",
    category: "Automation",
    excerpt:
      "Automate a defined process. Automating an undefined one just makes the mess faster.",
    takeaway:
      "Define the process first. The automation is the last step, not the first.",
    readingTime: "3 min",
    publishedAt: "2026-08-05",
    author: "Udyamita Editorial",
    topicCluster: "Operations",
    relatedService: "automation",
    body: `## The automation reflex

Automation is having a moment, and understandably - the idea of work happening while you sleep is appealing. But there's a trap that catches almost every business that automates too early: they automate a process they haven't actually defined.

The result is automated chaos. The mess now happens faster, at scale, with confidence.

## Define before you automate

A process is ready to automate when:

- **The steps are written down** and agreed by the people who do them
- **The triggers are clear** - what starts the process, every time
- **The outputs are defined** - what 'done' looks like
- **The exceptions are handled** - what happens when it goes wrong

If any of those is missing, the automation will encode the confusion permanently.

## What to automate first

The best first automation is something boring, repetitive, and high-volume:

- **Follow-up reminders** after an enquiry
- **Appointment confirmations and reminders**
- **Review requests** after a completed job
- **Monthly report generation**

These are low-risk, high-frequency, and their absence is already costing you. Automate one, measure it, then move to the next.

## What not to automate (yet)

Don't automate:

- **Sales conversations** before you have a defined qualification process
- **Customer support** before you've documented your common issues
- **Anything where the exception rate is high** - you'll spend more fixing edge cases than the automation saves

## The honest sequence

1. **Map** the process manually
2. **Document** it so anyone could follow it
3. **Run it** consistently for a few weeks
4. **Then** automate the repetitive parts

The businesses that get automation right aren't the ones with the most tools. They're the ones with the clearest processes.`,
    faq: [
      {
        q: "What should I automate first in my business?",
        a: "Start with something boring, repetitive, and high-volume - follow-up reminders, appointment confirmations, review requests, or monthly report generation. These are low-risk and their absence is already costing you.",
      },
      {
        q: "When is a process ready to automate?",
        a: "When the steps are written down, the triggers are clear, the outputs are defined, and exceptions are handled. If any of those is missing, automation will encode the confusion permanently.",
      },
    ],
  },
  {
    slug: "dont-buy-crm-to-organise-undefined-process",
    title: "Don't buy a CRM to organise a process you haven't defined",
    category: "CRM",
    excerpt:
      "The tool is the last step. The process is the first. Buying software to fix a process problem is expensive hope.",
    takeaway:
      "Define the sales process before buying a CRM. The tool should support the process, not replace it.",
    readingTime: "4 min",
    publishedAt: "2026-07-22",
    author: "Udyamita Editorial",
    topicCluster: "Lead Flow",
    relatedService: "crm",
    body: `## The expensive hope

A common pattern: a business buys a CRM expecting it to fix messy sales. Six months later, the CRM is half-used, the spreadsheet is back, and everyone is frustrated.

The CRM didn't fail. The expectation did. A CRM organises a process - it doesn't create one. If you don't know your sales stages, your qualification criteria, or your follow-up rules, the CRM will faithfully reproduce your confusion in a fancier interface.

## What to define first

Before you look at a single tool, write down:

1. **Your sales stages** - what are the steps from enquiry to close?
2. **Your qualification criteria** - what makes a lead worth pursuing?
3. **Your follow-up rules** - who follows up, when, and how?
4. **Your handoffs** - when does a lead move from marketing to sales to delivery?

If you can't answer these on one page, you don't have a CRM problem. You have a process problem.

## The right sequence

1. **Map** your actual sales process (not the idealised one)
2. **Document** it on a single page
3. **Run it** in a spreadsheet for a few weeks
4. **Then** choose a CRM that fits the process

The spreadsheet phase matters. It forces you to confront the real process - including the messy parts - before you commit to software.

## When a CRM actually helps

A CRM pays off when:

- You have **more leads than one person can track** in their head
- You have **multiple people** touching the same lead
- You need **visibility** into pipeline and conversion
- You want to **automate** follow-up at scale

If none of those is true yet, a spreadsheet is honestly fine. The goal is a clear process, not a fancy tool.

## The one question to ask

Before buying any CRM, ask: 'What process will this support, and is that process written down?' If the answer is 'we'll figure it out', save your money. You're buying hope, not a system.`,
    faq: [
      {
        q: "When do I actually need a CRM?",
        a: "When you have more leads than one person can track, multiple people touching the same lead, or you need pipeline visibility. Before that, a well-structured spreadsheet is fine.",
      },
      {
        q: "Which CRM should I buy?",
        a: "The one that fits your documented process. Define your sales stages, qualification, follow-up rules, and handoffs first - then choose software that supports them. The tool follows the process, not the other way around.",
      },
    ],
  },
  {
    slug: "growth-doesnt-break-in-one-place",
    title: "Growth doesn't break in one place. It leaks.",
    category: "Business Growth",
    excerpt:
      "Stop looking for the one big problem. Find the small leaks compounding against you.",
    takeaway:
      "Growth problems are usually leak problems. Diagnose across the full journey, not just the symptom.",
    readingTime: "6 min",
    publishedAt: "2026-07-08",
    author: "Udyamita Editorial",
    topicCluster: "Growth Leaks",
    body: `## The one-big-problem myth

When growth stalls, the reflex is to look for the one big problem. 'Our ads aren't working.' 'Our website is old.' 'We need more leads.'

But growth rarely breaks in one place. It leaks - quietly, across four stages - and the leaks compound.

## The four stages where growth leaks

### DISCOVER - customers can't find you
Your customers are already searching. The awkward part is whether they find you. If your Google Business Profile is unclaimed, your directory listings are inconsistent, and you have no recent reviews, you're functionally invisible - no matter how good you are.

### TRUST - they find you but hesitate
Even when customers find you, they hesitate if there's no credible website, no proof, no clear offer. Discovery without trust is just a more visible way to be judged and rejected.

### CONVERT - enquiries arrive and disappear
Enquiries come in - and vanish. Because first-response time is hours, follow-up depends on memory, and there's no single system tracking leads. The enquiry existed. The customer moved on.

### OPERATE - growth creates chaos
Growth breaks the business that wasn't built to scale. Orders live in WhatsApp, inventory in a spreadsheet, and the owner holds it all in their head. More customers means more chaos, not more profit.

## Why fixing one leak isn't enough

Each leak makes the next one worse. If you fix discovery but not conversion, you pay to send people to a leak. If you fix conversion but not operations, you win customers you can't serve well.

The leaks compound against you - but here's the good news: they also compound for you. Fix discovery and your conversion rate improves because the leads are warmer. Fix conversion and your operations get more predictable. Fix operations and you can scale without breaking.

## The diagnostic, not the guess

The mistake is guessing which leak is biggest. The right move is to diagnose across all four stages, attach a number to each, and fix the one that's actually the biggest - not the one that feels biggest.

That's what the [Business Health Check](/business-health-check) does. Nine questions, two minutes, and it tells you the single move worth making first - based on your inputs, not a guess.

## The shift in thinking

The shift is from 'what's wrong with us?' to 'where exactly is the leak?'. The first question produces anxiety. The second produces action.

Growth doesn't break in one place. It leaks. Find the leak, and you find the next move worth making.`,
    faq: [
      {
        q: "What are the four growth leaks?",
        a: "Discover (customers can't find you), Trust (they find you but hesitate), Convert (enquiries arrive and disappear), and Operate (growth creates operational chaos). Each makes the next worse.",
      },
      {
        q: "How do I find my biggest growth leak?",
        a: "Diagnose across all four stages and attach a number to each - don't guess. The Business Health Check does this in two minutes and identifies your largest leak and recommended first move.",
      },
    ],
  },
  {
    slug: "service-is-not-the-moat",
    title: "The service is not the moat. The relationship is.",
    category: "Strategy",
    excerpt:
      "Productise the service. Build the network around it. The moat is distribution, not delivery.",
    takeaway:
      "Treat the service as the product and the cooperative network as the moat.",
    readingTime: "5 min",
    publishedAt: "2026-06-25",
    author: "Udyamita Editorial",
    topicCluster: "Strategy",
    body: `## The agency problem

Most service businesses - agencies, consultancies, freelancers - share the same structural weakness: the service is the product, the delivery is custom, and the relationship resets every project. Revenue is linear, capacity is capped by headcount, and the only moat is the founder's reputation.

This is the agency problem. And it's why most service businesses plateau.

## The two moves that change the structure

There are two moves that change the economics of a service business:

### 1. Productise the service

Turn the service into something with a clear boundary and a price. Instead of 'we'll scope a custom engagement', it's 'this is what we do, this is what it costs, this is what you get'. Productisation:

- **Makes the work repeatable** - which makes it trainable, measurable, and improvable
- **Shortens the sales cycle** - the buyer doesn't have to design the engagement
- **Creates a basis for pricing** - you charge for outcome, not hours

Productisation doesn't mean rigid packages. It means the core deliverable is defined, even if the implementation flexes.

### 2. Build the network around it

The deeper moat isn't the service itself - services can be copied. The moat is the **distribution relationship**: the network of partners, advisors, and platforms that route customers to you because they trust you with their clients.

For Udyamita, this means CAs, CSs, accountants, consultants, and associations - the people local businesses already trust. When a CA recommends a growth system to their client, that recommendation carries more weight than any ad.

## Why this matters for local businesses

Local businesses don't have the time or expertise to evaluate growth vendors. They rely on the people they already trust - their accountant, their consultant, their association. A growth partner that builds distribution through those trusted advisors reaches local businesses far more effectively than one that goes direct.

The service is what the business buys. The network is why they buy it from you.

## The compounding effect

Productisation + network compounds:

- **Productisation** makes the service deliverable at scale
- **The network** routes demand to you without proportional ad spend
- **Together** they create a business that grows without linear cost growth

This is the structural difference between a service business and a growth system. The first sells time. The second builds infrastructure.

## The honest version

This isn't easy. Productisation forces you to confront what actually works (and what doesn't). Building a network forces you to share value rather than capture all of it. But the businesses that make these two moves build something durable - while those that don't stay trapped in linear delivery.

The service is not the moat. The relationship is. Productise the service. Build the network around it.`,
    faq: [
      {
        q: "What does it mean to productise a service?",
        a: "Turning the service into something with a clear boundary and price - defined deliverable, defined scope, defined cost - so it's repeatable, trainable, and measurable, rather than a custom scoping exercise every time.",
      },
      {
        q: "Why is distribution a stronger moat than the service itself?",
        a: "Services can be copied. Trusted relationships cannot. A network of partners who route customers to you because they trust you with their clients creates demand without proportional ad spend - and that's structurally harder for competitors to replicate.",
      },
    ],
  },
  {
    slug: "local-seo-for-small-business",
    title: "Local SEO for small businesses: a practical guide",
    category: "Marketing",
    excerpt:
      "The fundamentals of getting found locally - without paying for ads or hiring an agency.",
    takeaway:
      "Local SEO is foundation work: claim your profile, fix your listings, earn reviews, build local content.",
    readingTime: "8 min",
    publishedAt: "2026-08-30",
    author: "Udyamita Editorial",
    topicCluster: "Local Visibility",
    relatedService: "local-seo",
    body: `## What local SEO actually is

Local SEO is the practice of making your business appear in local search results - the 'near me' searches, the Maps pack, and location-based queries. For local businesses, it's usually the highest-ROI marketing work because the intent is so high: someone searching 'CA near me' is ready to hire.

The good news: the fundamentals are free. The less-good news: they require consistency, not brilliance.

## Step 1: Claim and optimise your Google Business Profile

This is the single highest-leverage move. If you do nothing else, do this.

- **Claim** your profile at google.com/business
- **Fill every field** - categories, hours, services, attributes, photos
- **Use real photos** - exterior, interior, team, work samples
- **Keep hours updated** - especially holidays
- **Post updates** - offers, events, new services

A complete, active profile outperforms an incomplete one dramatically.

## Step 2: Fix your NAP consistency

NAP = Name, Address, Phone. It must be **identical** everywhere it appears:

- Your website
- Google Business Profile
- Every directory (JustDial, IndiaMART, Sulekha, etc.)
- Social profiles

Inconsistent NAP confuses search engines about which version is correct, which hurts your local ranking.

## Step 3: Build a review system

Reviews are the second-biggest local ranking factor - and the biggest trust factor. The system:

- **Ask** every satisfied customer (in person, by WhatsApp, by email)
- **Make it easy** - send a direct link to your review page
- **Time it** - ask right after a positive outcome, not weeks later
- **Respond** to every review - positive and negative

A steady flow of fresh reviews beats a one-time push. Aim for consistent velocity, not just volume.

## Step 4: Build local content

Create content that answers local questions:

- 'Best [service] in [your city]'
- 'How to choose a [your profession] in [your area]'
- Local case studies and engagement stories

This signals local relevance and captures long-tail local search.

## Step 5: Get listed in local directories

Relevant directories still matter - especially industry-specific ones. But quality over quantity: a few relevant directories beat dozens of irrelevant ones.

## Step 6: Make your website locally relevant

- Your **city/area** in title tags and meta descriptions
- A **location page** if you serve multiple areas
- **Embedded map** and clear NAP in the footer
- **Local schema markup** (LocalBusiness)

## What not to do

- **Don't buy reviews** - Google catches this and penalises it
- **Don't keyword-stuff** your business name (use your real name)
- **Don't ignore negative reviews** - respond professionally, address the issue
- **Don't set and forget** - local SEO needs ongoing maintenance

## Measuring progress

Track:

- **Map pack ranking** for your core service + city
- **Profile views** and search queries (in GBP dashboard)
- **Review velocity** - new reviews per month
- **Calls and direction requests** from your profile

These tell you whether the foundation is working before you spend on ads.

## When to get help

If you've done the fundamentals and aren't seeing movement, or if you don't have the time to do it consistently, that's where a partner helps. The [Business Health Check](/business-health-check) shows you where your local SEO actually stands - and whether it's your biggest leak.`,
    faq: [
      {
        q: "How long does local SEO take to work?",
        a: "Foundational changes (profile optimisation, NAP fixes) can show results in 2-4 weeks. Review velocity and content building compound over months. Local SEO is ongoing, not one-time.",
      },
      {
        q: "Do I need to pay for local SEO?",
        a: "The fundamentals - claiming your profile, fixing listings, asking for reviews - are free. You pay for consistency and expertise if you don't have the time or knowledge to do it yourself.",
      },
      {
        q: "What's the most important local SEO factor?",
        a: "Google Business Profile completeness and review velocity. If you do nothing else, claim and fully optimise your profile, and build a system for consistently asking satisfied customers for reviews.",
      },
    ],
  },
  {
    slug: "what-is-aeo",
    title: "What is AEO? Answer Engine Optimisation explained",
    category: "Technology",
    excerpt:
      "Search isn't just search anymore. AI answer engines cite sources - and your business needs to be the cited answer.",
    takeaway:
      "Structure your content to be the answer AI engines cite, not just the page search engines rank.",
    readingTime: "6 min",
    publishedAt: "2026-08-12",
    author: "Udyamita Editorial",
    topicCluster: "Discovery",
    relatedService: "aeo",
    body: `## The shift from search to answers

Search engines used to return a list of links. Now they return answers - synthesised by AI, with citations to sources. Google's AI Overviews, ChatGPT, Perplexity, and others are changing how people find information.

For businesses, this is a tectonic shift. Being ranked #1 matters less if the AI synthesises an answer from three sources and only cites one. The question becomes: are you the cited source, or the unmentioned one?

This is AEO - Answer Engine Optimisation.

## SEO vs AEO

**SEO** optimises to be found in a list of links.
**AEO** optimises to be the source an AI answer cites.

They overlap but aren't identical:

- SEO rewards comprehensive pages with strong authority signals
- AEO rewards **extractable** content - clear answers, structured data, quotable phrasing

A page can rank well in SEO and never get cited by an AI - because the answer is buried in prose rather than structured for extraction.

## How to make your content citable

### 1. Answer the question first

Don't make the AI (or the reader) dig. State the answer in the first paragraph, then elaborate. The classic 'wall of context before the answer' doesn't get cited.

### 2. Use question-style headings

AI engines look for question-answer pairs. Headings like 'What is AEO?' or 'How does local SEO work?' make your content extractable.

### 3. Be quotable

Direct, factual, concise statements get cited. Vague marketing copy doesn't. 'Local SEO is the practice of appearing in local search results' is citable. 'We deliver best-in-class local SEO solutions' is not.

### 4. Use structured data

Schema markup (FAQPage, HowTo, Article) tells AI engines explicitly what your content is. This is the single biggest technical lever for AEO.

### 5. Build authority signals

AI engines cite sources they trust. Authority comes from:

- **Consistent publishing** on your topic
- **Being cited by** other authoritative sources
- **Clear expertise signals** - credentials, author bios, accurate information

## Why this matters for local businesses

For local businesses, AEO matters because AI engines increasingly answer 'best [service] near me' queries with cited sources. If a CA in Pune is the cited answer for 'how to choose a CA in Pune', that's worth more than any ad.

## The honest version

AEO isn't separate from SEO - it's an evolution. The fundamentals (good content, clear answers, authority) are the same. The difference is in structure: making your content **extractable** so AI engines can cite it cleanly.

If your content answers real questions clearly and is structured with schema, you're already doing most of AEO. If it's marketing copy that never answers a question directly, you're invisible to answer engines - no matter how well it ranks.

Run the [Business Health Check](/business-health-check) to see where your discoverability stands across SEO, AEO, and local.`,
    faq: [
      {
        q: "What is AEO?",
        a: "Answer Engine Optimisation - the practice of structuring content so AI answer engines (Google AI Overviews, ChatGPT, Perplexity) cite your business as the source, not just rank you in a list of links.",
      },
      {
        q: "Is AEO different from SEO?",
        a: "They overlap but differ. SEO optimises to be found in a list of links; AEO optimises to be the source an AI answer cites. AEO rewards extractable content - clear answers, question-style headings, structured data, quotable phrasing.",
      },
      {
        q: "How do I make my content citable by AI?",
        a: "Answer the question first (don't bury it), use question-style headings, write direct factual statements, add FAQ/HowTo schema markup, and build authority through consistent publishing and credentials.",
      },
    ],
  },
  {
    slug: "business-automation-without-the-hype",
    title: "Business automation without the hype",
    category: "Automation",
    excerpt:
      "What automation can actually do for a small business - and what it can't. A practical, no-hype guide.",
    takeaway:
      "Automate the boring, repetitive, high-volume work first. Leave the judgement calls to humans.",
    readingTime: "7 min",
    publishedAt: "2026-07-28",
    author: "Udyamita Editorial",
    topicCluster: "Operations",
    relatedService: "automation",
    body: `## The hype vs the reality

Automation is sold as a magic wand. 'Automate everything! Save 20 hours a week! Replace your staff!' The reality is more mundane - and more useful.

Automation is the practice of having software do **repetitive, rule-based tasks** so humans can do **judgement-based work**. That's it. It's not magic, it's not replacement, and it's not the answer to every problem.

Used well, it removes friction. Used badly, it automates confusion.

## What automation can actually do

Automation is genuinely good at:

### 1. Reminders and follow-ups
'You have an appointment tomorrow.' 'Your quote is ready.' 'We haven't heard from you - would you like to proceed?' These are high-frequency, rule-based, and easy to get wrong manually.

### 2. Data entry and sync
When a form is filled, create a CRM record. When an order is placed, update inventory. When a payment arrives, send a receipt. Manual data entry is where errors breed.

### 3. Scheduling and routing
Assign leads to the right person based on rules. Route support tickets by topic. Schedule content across channels. The routing logic is rules-based - perfect for automation.

### 4. Reporting
Generate the weekly/monthly report from data that already exists. Pull it together, format it, send it. Humans should read reports, not assemble them.

### 5. Onboarding
Send the welcome sequence. Share the getting-started guide. Ask for the information you need. Onboarding is repetitive and easy to standardise.

## What automation can't do

Automation is bad at:

- **Sales conversations** - these require reading the customer, not following a script
- **Complex support** - edge cases need human judgement
- **Strategy** - deciding what to automate requires a human; the automation can't decide for you
- **Anything with high exception rates** - you'll spend more fixing edge cases than you save

## The right first automation

If you're starting, automate **follow-up reminders**. Here's why:

- **High frequency** - every enquiry needs follow-up
- **Clear trigger** - enquiry received
- **Clear action** - send reminder after X hours/days
- **Measurable** - you can see if follow-up rates improve
- **Low risk** - a wrong reminder is annoying, not catastrophic

Once that's working, move to appointment reminders, then review requests, then reporting.

## The sequence that works

1. **Map** the process manually (don't skip this)
2. **Document** it so anyone could follow it
3. **Run it** consistently for a few weeks
4. **Identify** the repetitive, rule-based parts
5. **Automate** those parts
6. **Measure** whether it actually saves time and improves consistency

The businesses that get automation right aren't the ones with the most tools. They're the ones with the clearest processes - because you can't automate what you haven't defined.

## The honest cost-benefit

Automation isn't free. Each automation has:

- **Setup cost** - designing and building it
- **Maintenance cost** - fixing it when things change
- **Risk cost** - what happens when it goes wrong

The rule: automate where the **frequency × time × error-cost** justifies the setup and maintenance. A task done 100 times a month that takes 5 minutes and often goes wrong? Automate it. A task done twice a year that takes 10 minutes? Don't.

## Start small, measure, expand

The worst automation strategy is 'automate everything'. The best is 'automate one boring thing, measure it, then decide what's next'.

Run the [Business Health Check](/business-health-check) to see where your operations are most manual - and which repetitive work is worth automating first.`,
    faq: [
      {
        q: "What should a small business automate first?",
        a: "Follow-up reminders. They're high-frequency, have a clear trigger (enquiry received), a clear action (send reminder), are measurable, and low-risk. Once that works, move to appointment reminders, review requests, and reporting.",
      },
      {
        q: "What can't automation do?",
        a: "Sales conversations, complex support, strategy, and anything with high exception rates. Automation handles repetitive, rule-based tasks; humans handle judgement-based work.",
      },
      {
        q: "Is automation expensive?",
        a: "Setup and maintenance have costs. Automate where frequency × time × error-cost justifies it. A task done 100 times a month that takes 5 minutes and often goes wrong? Automate. A task done twice a year? Don't.",
      },
    ],
  },
  {
    slug: "choosing-the-right-growth-partner",
    title: "How to choose the right growth partner for your business",
    category: "Business Growth",
    excerpt:
      "Not another vendor. A partner. Here's how to tell the difference - and what to ask before you commit.",
    takeaway:
      "A vendor sells a task. A partner takes responsibility for the number. Choose based on diagnosis, not deliverables.",
    readingTime: "6 min",
    publishedAt: "2026-08-22",
    author: "Udyamita Editorial",
    topicCluster: "Strategy",
    body: `## The vendor vs partner distinction

Most businesses have worked with vendors. Few have worked with partners. The difference isn't semantic - it's structural, and it shows up in the results.

**A vendor sells a task.** Website. Ad campaign. CRM setup. The deliverable is defined, the invoice follows, and the relationship resets. If the number doesn't move, that's your problem.

**A partner takes responsibility for the number.** They diagnose before they deliver, measure after, and adjust based on what the data says. If the number doesn't move, that's a shared problem - and the partner's reputation depends on fixing it.

## How to tell the difference before you commit

### 1. Do they diagnose before they sell?

A vendor opens with 'here's what we can do for you'. A partner opens with 'tell me where it hurts' - and actually listens.

The first question a partner asks isn't 'what's your budget?' It's 'what number do you need to move, and what's getting in the way?'

### 2. Do they talk about the process or the outcome?

A vendor talks about deliverables: 'we'll build you a website, run your ads, set up your CRM'. A partner talks about outcomes: 'we'll get you more booked appointments, reduce your response time, increase your conversion rate'.

Deliverables are inputs. Outcomes are what you're actually buying.

### 3. Do they measure?

A vendor delivers and leaves. A partner measures and reports - because a service that doesn't move a number is just an invoice.

Ask: 'How will we know if this is working?' If the answer is vague, you're buying a deliverable. If the answer is specific - with a baseline, a target, and a reporting cadence - you're buying an outcome.

### 4. Do they sequence or scattershot?

A vendor sells you everything at once - because that's how they maximise the invoice. A partner sequences - because fixing the foundation before paying for traffic is how you actually get results.

The right sequence is almost always: diagnose → fix the foundation → add paid amplification → measure → optimise. If your 'partner' wants to skip to ads on day one, they're a vendor.

### 5. Do they have a methodology?

A vendor has a menu. A partner has a methodology - a defined way of working that produces consistent results.

Methodology matters because it means the work isn't dependent on individual brilliance. It's a system, which means it's repeatable, measurable, and improvable.

## The questions to ask

Before you commit to any growth partner, ask:

1. **'How do you decide what to fix first?'** - The answer should involve diagnosis, not assumptions
2. **'What number will we be moving?'** - Specific, measurable, with a baseline
3. **'How will we know if it's working?'** - Reporting cadence, metrics, review process
4. **'What's the sequence?'** - Foundation before amplification, always
5. **'What's not included?'** - Honesty about boundaries beats promises about everything
6. **'What happens if it doesn't work?'** - A real partner has a plan for this

## The red flags

- **Guaranteed results** - no one can guarantee outcomes; they can guarantee process
- **No diagnosis before proposal** - they're selling, not solving
- **Everything at once** - maximising invoice, not your results
- **No measurement plan** - they're not planning to be accountable
- **Vague answers** - if they can't explain it clearly, they don't understand it

## The green flags

- **Starts with questions about your business** - not your budget
- **Talks about sequencing** - foundation before amplification
- **Has a methodology** - not just a menu
- **Proposes measurement** - before you ask
- **Is honest about boundaries** - what they don't do
- **References the system, not just themselves** - process over personality

## Why this matters

Choosing a growth partner is one of the highest-leverage decisions a business owner makes. The right partner compounds - each improvement lifts the next. The wrong one costs you time, money, and trust in the idea that growth can be systematic.

The shift is from 'who can do this task?' to 'who will take responsibility for this number?'. The first question gets you a vendor. The second gets you a partner.

Run the [Business Health Check](/business-health-check) first - so you arrive at the conversation knowing what actually needs fixing.`,
    faq: [
      {
        q: "What's the difference between a vendor and a growth partner?",
        a: "A vendor sells a task (website, ads, CRM) and the relationship resets after delivery. A partner diagnoses before delivering, measures after, and takes responsibility for the number moving - not just the deliverable.",
      },
      {
        q: "What should a growth partner do first?",
        a: "Diagnose. A partner starts by understanding where your growth actually leaks - not by proposing solutions. If they're selling before diagnosing, they're a vendor.",
      },
      {
        q: "What questions should I ask a growth partner before hiring them?",
        a: "Ask: How do you decide what to fix first? What number will we move? How will we know if it's working? What's the sequence? What's not included? What happens if it doesn't work? Specific, honest answers indicate a partner; vague ones indicate a vendor.",
      },
    ],
  },
  {
    slug: "geo-generative-engine-optimization",
    title: "GEO: Generative Engine Optimization explained",
    category: "Technology",
    excerpt:
      "GEO is the practice of optimizing content for AI-generated search results. Here is how it differs from SEO and AEO, and what to do about it.",
    takeaway:
      "GEO optimizes for AI-generated answers. Structure content for extraction, build authority, and monitor citations.",
    readingTime: "6 min",
    publishedAt: "2026-09-01",
    author: "Udyamita Editorial",
    topicCluster: "Discovery",
    relatedService: "aeo",
    body: `## What is GEO?

GEO stands for Generative Engine Optimization. It is the practice of optimizing your content so that generative AI engines (Google AI Overviews, ChatGPT, Perplexity, Claude) use your business as a source when they synthesize answers.

GEO is closely related to AEO (Answer Engine Optimization) and overlaps with traditional SEO. The distinction: SEO optimizes for a list of links. AEO and GEO optimize for being the cited source in an AI-generated answer.

## How GEO differs from SEO

**SEO** rewards comprehensive pages with strong authority signals and backlinks. The goal is to rank in the top results.

**GEO** rewards extractable, quotable, structured content. The goal is to be the source an AI engine cites when it synthesizes an answer.

A page can rank well in traditional search and never get cited by a generative engine. Why? Because the answer is buried in prose rather than structured for extraction.

## How to optimize for generative engines

### 1. Answer the question first

State the answer in the first paragraph. Do not make the AI (or the reader) dig through context. The classic "wall of background before the answer" does not get cited.

### 2. Use question-style headings

AI engines look for question-answer pairs. Headings like "What is GEO?" or "How does GEO differ from SEO?" make your content extractable.

### 3. Be quotable

Direct, factual, concise statements get cited. Vague marketing copy does not. "GEO optimizes content for AI-generated search results" is citable. "We deliver best-in-class GEO solutions" is not.

### 4. Add structured data

Schema markup (FAQPage, HowTo, Article, DefinedTerm) tells AI engines explicitly what your content is. This is the single biggest technical lever.

### 5. Build authority

AI engines cite sources they trust. Authority comes from consistent publishing on your topic, being cited by other authoritative sources, and clear expertise signals.

## GEO for local businesses

For local businesses, GEO matters because AI engines increasingly answer "best [service] near me" queries with cited sources. If a business is the cited answer for "how to choose a [profession] in [city]", that is worth more than any ad.

## The honest version

GEO is not separate from SEO. It is an evolution. The fundamentals (good content, clear answers, authority) are the same. The difference is structure: making your content extractable so generative engines can cite it cleanly.

Run the [Business Health Check](/business-health-check) to see where your discoverability stands across SEO, AEO, and GEO.`,
    faq: [
      {
        q: "What is GEO?",
        a: "Generative Engine Optimization. The practice of optimizing content so AI generative engines (Google AI Overviews, ChatGPT, Perplexity) cite your business as a source when synthesizing answers.",
      },
      {
        q: "Is GEO different from SEO?",
        a: "They overlap. SEO optimizes for a list of links. GEO optimizes for being the cited source in an AI-generated answer. GEO rewards extractable, structured, quotable content.",
      },
      {
        q: "How do I optimize for generative engines?",
        a: "Answer questions first, use question-style headings, write direct factual statements, add FAQ/HowTo schema markup, and build authority through consistent publishing.",
      },
    ],
  },
  {
    slug: "whatsapp-automation-for-small-business",
    title: "WhatsApp automation for small businesses: a practical guide",
    category: "Automation",
    excerpt:
      "How to use WhatsApp automation without becoming a spammer. Capture leads, follow up, send reminders, and scale without losing the personal touch.",
    takeaway:
      "Automate reminders and follow-ups on WhatsApp. Keep sales conversations human. Never spam.",
    readingTime: "7 min",
    publishedAt: "2026-09-05",
    author: "Udyamita Editorial",
    topicCluster: "Operations",
    relatedService: "automation",
    body: `## Why WhatsApp matters for Indian businesses

In India, WhatsApp is where business happens. Customers expect to enquire, get quotes, and follow up on WhatsApp. If your business does not handle WhatsApp well, you are leaking leads.

But handling WhatsApp manually does not scale. The answer is automation, used carefully.

## What to automate on WhatsApp

### 1. First-response

When a customer messages, an automated first response confirms receipt and sets expectations. "Thanks for your message. We will get back to you within 2 hours during business hours."

This buys time and prevents the customer from messaging your competitor while they wait.

### 2. Appointment reminders

"Your appointment is tomorrow at 3 PM. Reply C to confirm or R to reschedule." Automated reminders reduce no-shows dramatically.

### 3. Follow-up after enquiry

If a customer enquired but did not convert, an automated follow-up after 24 hours: "Did you have any questions about the quote? Happy to help."

This catches leads that would otherwise go cold.

### 4. Service reminders

For healthcare, automotive, and service businesses: "It has been 6 months since your last service. Book your next appointment here."

### 5. Review requests

After a completed job: "Thanks for choosing us. If you were happy with the service, a quick review helps us a lot: [link]."

## What NOT to automate on WhatsApp

### Sales conversations

Once a customer is engaged and asking specific questions, a human should respond. Automated sales messages feel robotic and lose deals.

### Complex support

If a customer has a problem, a human should handle it. Automated support for complex issues creates frustration.

### Cold outreach

Do not use WhatsApp automation for cold outreach to people who did not opt in. This is spam, it violates WhatsApp policy, and it damages your brand.

## The technical setup

### WhatsApp Business API

For automation at scale, use the WhatsApp Business API (not the regular WhatsApp Business app). The API allows programmatic sending and receiving of messages.

### CRM integration

Connect WhatsApp to your CRM so every conversation is logged, leads are captured, and follow-up is automated based on pipeline stage.

### Compliance

Always get consent before messaging. Include an opt-out option. Follow WhatsApp's commerce and business policies.

## The honest cost-benefit

WhatsApp automation saves hours per week on repetitive communication. But it requires setup, integration, and maintenance. Automate where the frequency and repetition justify the setup. Do not automate where the human touch matters.

Run the [Business Health Check](/business-health-check) to see if WhatsApp automation is your biggest operational leak.`,
    faq: [
      {
        q: "Can I automate WhatsApp for my business?",
        a: "Yes, using the WhatsApp Business API. Automate first-response, appointment reminders, follow-up, service reminders, and review requests. Do not automate sales conversations or cold outreach.",
      },
      {
        q: "Is WhatsApp automation expensive?",
        a: "Setup and integration have costs, but the time saved on repetitive communication usually justifies it. Start with one automation (like appointment reminders) and measure the impact before adding more.",
      },
      {
        q: "Is WhatsApp automation legal?",
        a: "Yes, if you get consent before messaging, include an opt-out option, and follow WhatsApp's commerce and business policies. Cold outreach to people who did not opt in is spam and violates policy.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export const articleCategories = [
  "All",
  "Business Growth",
  "Digital Transformation",
  "Technology",
  "Sales",
  "Marketing",
  "Operations",
  "Automation",
  "AI",
  "Strategy",
] as const;

/* ------------------------------------------------------------------ */
/* SERVICE DETAIL PAGES                                                */
/* ------------------------------------------------------------------ */

export type ServiceDetail = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  deliverables: string[];
  outcomes: string[];
  process: { step: string; detail: string }[];
  pricingNote: string;
  faq: { q: string; a: string }[];
  relatedServices: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "local-seo",
    name: "Local SEO",
    category: "Discover",
    tagline: "Be the answer when customers search near you.",
    description:
      "Local SEO makes your business appear in local search results - the 'near me' searches, the Maps pack, and location-based queries. For local businesses, it's usually the highest-ROI marketing work because the intent is so high.",
    problem:
      "Customers are searching for your service in your area right now. If you're not in the top results on Google and Maps, you're invisible - no matter how good you are.",
    deliverables: [
      "Google Business Profile optimisation",
      "Directory listing audit and NAP consistency fix",
      "Review generation system",
      "Local content strategy",
      "Local schema markup",
      "Monthly local ranking reporting",
    ],
    outcomes: [
      "Appear in the local pack for core service queries",
      "Higher Map ranking in your service area",
      "Consistent review velocity",
      "Measurable calls and direction requests from your profile",
    ],
    process: [
      { step: "Audit", detail: "Map every place your business appears - or doesn't - online." },
      { step: "Optimise", detail: "Claim and fully complete your Google Business Profile and directories." },
      { step: "Systematise", detail: "Build a review-generation system tied to satisfied customers." },
      { step: "Measure", detail: "Track Map ranking, profile views, and enquiries from local search." },
    ],
    pricingNote: "From Rs 3,000-8,000 one-time or Rs 2,000-5,000/month.",
    faq: [
      { q: "How long does local SEO take?", a: "Foundational changes show results in 2-4 weeks. Review velocity and content compound over months." },
      { q: "Do I need ads for local SEO?", a: "No. The fundamentals are free - profile, listings, reviews. Ads amplify a working foundation, they don't replace it." },
    ],
    relatedServices: ["seo", "google-business-profile", "aeo", "web-development"],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "Discover",
    tagline: "Be found by people who are already looking.",
    description:
      "Search Engine Optimisation makes your website rank for the queries your customers actually type. It's the difference between being an option and being invisible.",
    problem: "If you don't rank for the queries your customers type, you're depending on luck and word-of-mouth. SEO makes discovery systematic.",
    deliverables: [
      "Keyword research and intent mapping",
      "Technical SEO audit",
      "On-page optimisation",
      "Content strategy and creation",
      "Off-page authority building",
      "Ranking and traffic reporting",
    ],
    outcomes: [
      "Rank for high-intent service queries",
      "Sustainable organic traffic growth",
      "Reduced dependence on paid ads",
      "Measurable lead attribution from organic search",
    ],
    process: [
      { step: "Research", detail: "Find the queries your customers type and the intent behind them." },
      { step: "Optimise", detail: "Fix technical issues and optimise on-page elements." },
      { step: "Create", detail: "Build content that answers real questions and earns authority." },
      { step: "Measure", detail: "Track rankings, traffic, and lead attribution from organic search." },
    ],
    pricingNote: "From Rs 20,000-50,000/month.",
    faq: [
      { q: "How long does SEO take?", a: "Foundational fixes show in weeks; meaningful ranking improvements typically take 3-6 months and compound over time." },
      { q: "SEO vs paid ads?", a: "SEO is slower but compounds; ads are instant but stop when you stop paying. Most businesses need both - SEO first, ads to amplify." },
    ],
    relatedServices: ["local-seo", "aeo", "local-seo", "local-seo"],
  },
  {
    slug: "aeo",
    name: "AEO (Answer Engine Optimisation)",
    category: "Discover",
    tagline: "Be the answer AI engines cite.",
    description:
      "Answer Engine Optimisation structures your content so AI answer engines (Google AI Overviews, ChatGPT, Perplexity) cite your business as the source - not just rank you in a list of links.",
    problem: "Search is shifting from links to answers. If your content isn't structured to be cited, you're invisible to answer engines - no matter how well you rank.",
    deliverables: [
      "Content extractability audit",
      "Question-answer content structuring",
      "FAQ and HowTo schema markup",
      "Authority signal building",
      "Citation tracking",
    ],
    outcomes: [
      "Cited as a source in AI answer engines",
      "Content structured for extraction",
      "Stronger authority signals",
      "Reduced dependence on traditional ranking alone",
    ],
    process: [
      { step: "Audit", detail: "Assess how extractable your content is for AI engines." },
      { step: "Structure", detail: "Reframe content around question-answer pairs with schema." },
      { step: "Author", detail: "Write direct, factual, quotable statements." },
      { step: "Track", detail: "Monitor citations and authority signals." },
    ],
    pricingNote: "From Rs 25,000-60,000/month, often combined with SEO.",
    faq: [
      { q: "Is AEO different from SEO?", a: "They overlap. SEO optimises to be found in links; AEO optimises to be cited in answers. AEO rewards extractable, structured content." },
      { q: "Do I need AEO if I rank well?", a: "Yes - a page can rank well and never be cited by AI. AEO ensures you're the source, not just the result." },
    ],
    relatedServices: ["seo", "local-seo", "local-seo", "web-development"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    category: "Trust",
    tagline: "A website that builds trust and converts.",
    description:
      "A website isn't a brochure - it's your most credible sales asset, working 24/7. We build websites that load fast, look professional, answer customer questions, and convert visitors into enquiries.",
    problem: "A name without proof is just a name. Without a credible website, discovery dies at the doorstep - customers find you, hesitate, and leave.",
    deliverables: [
      "Conversion-focused website design",
      "Fast, mobile-first development",
      "SEO and AEO-ready structure",
      "Lead capture forms and CTAs",
      "Analytics and tracking setup",
      "Ongoing upkeep and optimisation",
    ],
    outcomes: [
      "A website that builds trust instantly",
      "Higher enquiry conversion from existing traffic",
      "Better search and answer engine visibility",
      "A credible foundation for all marketing",
    ],
    process: [
      { step: "Strategy", detail: "Define the offer, audience, and conversion path." },
      { step: "Design", detail: "Design for trust, clarity, and conversion - not just aesthetics." },
      { step: "Build", detail: "Develop fast, accessible, mobile-first, SEO/AEO-ready." },
      { step: "Measure", detail: "Track enquiries, conversion rate, and iterate." },
    ],
    pricingNote: "From Rs 15,000-40,000 one-time plus upkeep.",
    faq: [
      { q: "How long does a website take?", a: "A focused business website typically takes 3-6 weeks depending on scope and content readiness." },
      { q: "Do I need a website if I have a Google Business Profile?", a: "Yes. The profile gets you found; the website builds trust and converts. They work together." },
    ],
    relatedServices: ["web-development", "web-development", "seo", "aeo", "web-development"],
  },
  {
    slug: "crm",
    name: "CRM",
    category: "Convert",
    tagline: "Every lead, in one place. Followed up, every time.",
    description:
      "A CRM captures every enquiry into a single system, qualifies leads, and automates follow-up - so no lead goes cold and you can see your pipeline at a glance.",
    problem: "Leads leak the moment follow-up depends on memory. Without a CRM, enquiries live in WhatsApp, email, and notebooks - and disappear when staff get busy.",
    deliverables: [
      "CRM selection and setup",
      "Lead capture from all channels",
      "Qualification rules and pipeline stages",
      "Automated follow-up sequences",
      "Sales dashboard and reporting",
      "Team training and adoption",
    ],
    outcomes: [
      "First-response time drops from hours to minutes",
      "Follow-up consistency becomes system-based",
      "Full pipeline visibility",
      "Measurable conversion at each stage",
    ],
    process: [
      { step: "Map", detail: "Document your actual sales process on one page." },
      { step: "Select", detail: "Choose a CRM that fits the process - not the other way around." },
      { step: "Configure", detail: "Set up capture, qualification, and follow-up automation." },
      { step: "Adopt", detail: "Train the team and ensure the system is actually used." },
    ],
    pricingNote: "From Rs 20,000-50,000/month, often part of a Generate Customers engagement.",
    faq: [
      { q: "Which CRM should I use?", a: "The one that fits your documented process. We help you choose based on your sales stages, team size, and budget - not on commissions." },
      { q: "When do I need a CRM?", a: "When you have more leads than one person can track, multiple people touching leads, or you need pipeline visibility. Before that, a spreadsheet is fine." },
    ],
    relatedServices: ["automation", "lead-generation", "performance-marketing", "data-analytics"],
  },
  {
    slug: "automation",
    name: "Automation",
    category: "Scale",
    tagline: "Software does the repetitive work. Humans do the judgement.",
    description:
      "Automation has software handle repetitive, rule-based tasks - reminders, follow-ups, data sync, reporting - so your team focuses on judgement-based work that actually grows the business.",
    problem: "Manual repetitive work eats time, breeds errors, and doesn't scale. But automating chaos just makes the mess faster. We define the process first, then automate it.",
    deliverables: [
      "Process mapping and documentation",
      "Workflow automation design",
      "Integration between your tools",
      "Reminder and follow-up sequences",
      "Automated reporting",
      "Monitoring and maintenance",
    ],
    outcomes: [
      "Hours saved per week on repetitive work",
      "Higher consistency and fewer errors",
      "Faster response times",
      "Team freed for higher-value work",
    ],
    process: [
      { step: "Map", detail: "Document the process manually before automating anything." },
      { step: "Identify", detail: "Find the repetitive, rule-based, high-frequency parts." },
      { step: "Automate", detail: "Build the automation and integrate with your tools." },
      { step: "Measure", detail: "Track time saved, consistency, and errors reduced." },
    ],
    pricingNote: "From Rs 50,000-1,25,000/month, often part of a Growth Engine engagement.",
    faq: [
      { q: "What should I automate first?", a: "Follow-up reminders - high frequency, clear trigger, clear action, measurable, low-risk. Then appointment reminders, review requests, reporting." },
      { q: "Can automation replace my staff?", a: "No. Automation handles repetitive tasks; humans handle judgement. The goal is freeing your team for higher-value work, not replacing them." },
    ],
    relatedServices: ["crm", "automation", "data-analytics", "erp"],
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    category: "Discover",
    tagline: "The single highest-leverage free marketing move.",
    description:
      "Your Google Business Profile is the modern storefront. Claiming and fully optimising it is the highest-ROI free marketing move most local businesses can make - it directly controls how you appear on Google, Maps, and voice search.",
    problem:
      "An unclaimed, incomplete, or outdated Google Business Profile means you're invisible or misleading on the very surfaces customers use to find and evaluate local businesses.",
    deliverables: [
      "Profile claim and verification",
      "Category selection and service optimisation",
      "Professional imagery (exterior, interior, team, work)",
      "Attributes, hours, and holiday updates",
      "Post and offer publishing cadence",
      "Q&A and messaging setup",
    ],
    outcomes: [
      "Appear in the local pack for core service queries",
      "Higher Map impressions and direction requests",
      "More calls and website clicks from Google",
      "Stronger first impression with photos and reviews",
    ],
    process: [
      { step: "Claim", detail: "Verify ownership of your business listing." },
      { step: "Complete", detail: "Fill every field - categories, services, attributes, hours, photos." },
      { step: "Systematise", detail: "Set a cadence for posts, offers, and photo refreshes." },
      { step: "Respond", detail: "Answer Q&A and respond to reviews promptly." },
    ],
    pricingNote: "From Rs 2,000-5,000/month, often part of a Get Discovered engagement.",
    faq: [
      { q: "Is Google Business Profile free?", a: "Yes - claiming and optimising your profile is completely free. It's the single highest-leverage free marketing move for most local businesses." },
      { q: "How often should I update my profile?", a: "Photos and posts at least monthly; hours whenever they change (especially holidays); Q&A and reviews as they come in." },
    ],
    relatedServices: ["local-seo", "reviews", "seo", "web-development"],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    category: "Generate",
    tagline: "Enquiries that arrive - and don't disappear.",
    description:
      "Lead generation is the system that turns interest into enquiries and enquiries into a tracked pipeline. It's not just running ads - it's the capture, qualification, and routing of every lead into a system that converts.",
    problem: "Ads without a capture and follow-up system are a more expensive way to lose the same lead. Lead generation must be a system, not a campaign.",
    deliverables: [
      "Funnel mapping and instrumentation",
      "Landing pages with conversion tracking",
      "Multi-channel lead capture (form, WhatsApp, phone)",
      "Qualification rules and lead scoring",
      "CRM routing and pipeline stages",
      "Attribution and cost-per-lead reporting",
    ],
    outcomes: [
      "Every enquiry captured in one system",
      "First-response time measured and reduced",
      "Measurable cost per lead and per acquisition",
      "Pipeline value visible at a glance",
    ],
    process: [
      { step: "Map", detail: "Define your funnel stages and qualification criteria." },
      { step: "Capture", detail: "Build landing pages and capture from every channel." },
      { step: "Qualify", detail: "Set rules so the right leads are prioritised." },
      { step: "Attribute", detail: "Track cost per lead and per acquisition by channel." },
    ],
    pricingNote: "From Rs 20,000-50,000/month, often part of a Generate Customers engagement.",
    faq: [
      { q: "Lead generation vs ads - what's the difference?", a: "Ads are one input. Lead generation is the whole system - capture, qualification, routing, follow-up, and attribution. Ads without the system are a more expensive way to lose the same lead." },
      { q: "How do I measure lead generation ROI?", a: "Track cost per lead and cost per acquisition by channel. The number that matters is enrolled customers per rupee, not clicks or even enquiries." },
    ],
    relatedServices: ["performance-marketing", "crm", "web-development", "web-development"],
  },
  {
    slug: "erp",
    name: "ERP",
    category: "Scale",
    tagline: "One system for orders, inventory, and money.",
    description:
      "An ERP (Enterprise Resource Planning) system unifies orders, inventory, production, and finance into one source of truth - so growth stops creating chaos and starts creating visibility.",
    problem: "When orders live in WhatsApp, inventory in spreadsheets, and planning in the owner's head, growth creates chaos. An ERP makes the business visible and manageable.",
    deliverables: [
      "Requirements and process mapping",
      "ERP selection and licensing",
      "Configuration and data migration",
      "Integration with CRM, POS, and accounting",
      "Team training and adoption",
      "Reporting and dashboards",
    ],
    outcomes: [
      "Orders, stock, and margins in one place",
      "Fewer stockouts and missed orders",
      "Real-time visibility into operations",
      "A basis for planning growth against numbers",
    ],
    process: [
      { step: "Sequence", detail: "Start with CRM, then inventory, then full ERP - adopt each before adding the next." },
      { step: "Select", detail: "Choose an ERP that fits your size and process, not the biggest one." },
      { step: "Migrate", detail: "Clean and migrate data; configure to your workflow." },
      { step: "Adopt", detail: "Train the team and ensure the system is actually used." },
    ],
    pricingNote: "From Rs 1,25,000-3,00,000/month, or project-based for implementation.",
    faq: [
      { q: "Do small businesses need an ERP?", a: "Eventually yes, but not always first. Sequence: CRM for orders, then inventory tracking, then analytics, then full ERP. Don't install a heavy ERP on day one." },
      { q: "How long does ERP implementation take?", a: "For a small business, 8-16 weeks for a phased implementation. Heavy big-bang implementations are the most common failure mode." },
    ],
    relatedServices: ["crm", "automation", "data-analytics", "custom-software"],
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    category: "Generate",
    tagline: "Pay for customers, not clicks.",
    description:
      "Performance marketing is paid advertising measured against business outcomes - leads, bookings, enrolments - not vanity metrics. You pay for what produces results and cut what doesn't.",
    problem: "Most ad spend is unmeasured - you're paying for clicks and impressions with no idea which rupee produced which customer. Performance marketing fixes that with attribution.",
    deliverables: [
      "Campaign strategy and channel selection",
      "Audience and keyword research",
      "Ad creative and landing pages",
      "Conversion tracking and attribution",
      "A/B testing and optimisation",
      "Cost-per-acquisition reporting",
    ],
    outcomes: [
      "Ad spend tied to enrolled customers",
      "Lower cost per acquisition over time",
      "Channels reallocated to what works",
      "A measured, repeatable growth engine",
    ],
    process: [
      { step: "Instrument", detail: "Set up tracking and attribution before spending a rupee." },
      { step: "Test", detail: "Run small, measured campaigns across channels." },
      { step: "Optimise", detail: "Cut what doesn't pay for itself; scale what does." },
      { step: "Report", detail: "Show cost per lead and per acquisition by channel." },
    ],
    pricingNote: "From Rs 50,000-1,25,000/month plus ad spend, part of a Growth Engine engagement.",
    faq: [
      { q: "How much should I spend on ads?", a: "Start small with a measured test budget, scale only what produces enrolled customers at a profitable cost per acquisition. Never scale unmeasured spend." },
      { q: "Which ad platform should I use?", a: "The one your customers use. Test Google for intent, Meta for awareness, LinkedIn for B2B - measure each and reallocate to what produces customers, not clicks." },
    ],
    relatedServices: ["lead-generation", "crm", "data-analytics", "web-development"],
  },
  {
    slug: "reviews",
    name: "Reputation & Reviews",
    category: "Discover",
    tagline: "Reviews compound - if you ask systematically.",
    description:
      "Reviews are the second-biggest local ranking factor and the biggest trust factor. We build review-generation systems that produce a steady flow of fresh positive reviews - and manage the conversation around negative ones.",
    problem: "A few old negative reviews with no response, no fresh reviews, and no system to ask satisfied customers means your reputation quietly deteriorates - and so does your local ranking.",
    deliverables: [
      "Review audit and baseline",
      "Review-generation system tied to satisfied customers",
      "Review-response (positive and negative)",
      "Reputation monitoring across platforms",
      "Review velocity reporting",
    ],
    outcomes: [
      "Steady flow of fresh positive reviews",
      "Old negatives diluted over time",
      "Higher local ranking from review velocity",
      "Stronger trust signal for new customers",
    ],
    process: [
      { step: "Audit", detail: "Assess current rating, volume, recency, and response rate." },
      { step: "Build", detail: "Set up a system to ask every satisfied customer for a review." },
      { step: "Respond", detail: "Respond to every review - address complaints professionally." },
      { step: "Monitor", detail: "Track review velocity and rating over time." },
    ],
    pricingNote: "From Rs 2,000-8,000/month, often part of a Get Discovered engagement.",
    faq: [
      { q: "Can I ask customers for reviews?", a: "Yes - and you should, systematically. Asking satisfied customers for reviews is allowed and is the single biggest lever for review velocity. What's not allowed is buying reviews or writing fake ones." },
      { q: "How do I handle negative reviews?", a: "Respond professionally and promptly, acknowledge the issue, offer to make it right, and take the conversation offline. A measured response to a negative review often impresses prospective customers more than the complaint concerned them." },
    ],
    relatedServices: ["google-business-profile", "local-seo", "web-development"],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    category: "Measure",
    tagline: "You can't improve a number you can't see.",
    description:
      "Data and analytics turn intuition into evidence. We set up tracking, dashboards, and attribution so every decision is based on what the numbers say - not what they feel like.",
    problem: "Decisions made on gut feel are decisions made blind. Without tracking and dashboards, you can't tell which marketing works, which products are profitable, or where growth is leaking.",
    deliverables: [
      "GA4 and Search Console setup",
      "Goal and conversion tracking",
      "Marketing and revenue dashboards",
      "Attribution modelling",
      "Funnel and cohort analysis",
      "Regular insight reporting",
    ],
    outcomes: [
      "Every channel's ROI visible",
      "Conversion at each funnel stage measured",
      "Revenue attribution by source",
      "Decisions based on evidence, not opinion",
    ],
    process: [
      { step: "Track", detail: "Set up GA4, Search Console, and conversion events." },
      { step: "Visualise", detail: "Build dashboards showing pipeline, revenue, and attribution." },
      { step: "Analyse", detail: "Run funnel and cohort analysis to find leaks." },
      { step: "Report", detail: "Deliver regular insight reports with actionable recommendations." },
    ],
    pricingNote: "From Rs 20,000-50,000/month, often part of a Generate Customers or Growth Engine engagement.",
    faq: [
      { q: "Do I need GA4?", a: "Yes - GA4 is the free standard for web analytics. Without it (or an equivalent), you're blind to where your traffic and conversions come from." },
      { q: "What's attribution?", a: "Attribution is the practice of assigning credit for a conversion to the channels that produced it. Without attribution, you can't tell which ad rupee produced which customer." },
    ],
    relatedServices: ["performance-marketing", "crm", "lead-generation", "automation"],
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    category: "Scale",
    tagline: "When off-the-shelf no longer fits.",
    description:
      "When your processes are unique enough that off-the-shelf software doesn't fit, custom software - built around your actual workflow - becomes the only way to scale without compromise.",
    problem: "Off-the-shelf software forces you into someone else's process. When your business has grown past that, custom software becomes the way to systematise what makes you different.",
    deliverables: [
      "Requirements and architecture",
      "Custom application development",
      "API and system integrations",
      "Data migration and security",
      "Training and documentation",
      "Ongoing maintenance and evolution",
    ],
    outcomes: [
      "Software that fits your actual workflow",
      "No more manual workarounds",
      "Scalable without re-platforming",
      "A defensible operational advantage",
    ],
    process: [
      { step: "Architect", detail: "Map requirements and design a scalable architecture." },
      { step: "Build", detail: "Develop in iterations with regular review." },
      { step: "Integrate", detail: "Connect to your existing tools and data." },
      { step: "Evolve", detail: "Maintain and extend as the business grows." },
    ],
    pricingNote: "Project-based - lakhs to crores depending on scope.",
    faq: [
      { q: "When do I need custom software?", a: "When off-the-shelf tools force you into processes that don't fit, and the cost of the mismatch exceeds the cost of custom development. Usually at the Enterprise Growth Partner rung." },
      { q: "Is custom software expensive?", a: "It's an investment, not a cost - when it removes friction that's capping your growth, it pays for itself. The question is whether your operational complexity justifies it yet." },
    ],
    relatedServices: ["erp", "automation", "data-analytics", "automation"],
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    category: "Trust",
    tagline: "One job, one page, one conversion.",
    description:
      "A landing page has one job: convert a specific visitor into a specific action. We build landing pages that load fast, speak directly to one audience, and turn ad clicks into enquiries.",
    problem: "Sending ad traffic to your homepage is the most common - and most expensive - mistake. A homepage serves many audiences; a landing page serves one, and converts far better.",
    deliverables: [
      "Audience and offer definition",
      "Conversion-focused copywriting",
      "Fast, mobile-first design",
      "Form and tracking setup",
      "A/B testing",
      "Performance reporting",
    ],
    outcomes: [
      "Higher conversion from ad traffic",
      "Lower cost per acquisition",
      "A clear, measured path from click to enquiry",
      "A reusable template for future campaigns",
    ],
    process: [
      { step: "Define", detail: "Lock the audience, offer, and single conversion action." },
      { step: "Write", detail: "Copy that speaks to one audience and answers their objections." },
      { step: "Build", detail: "Fast, mobile-first, with tracking from day one." },
      { step: "Test", detail: "A/B test and optimise for conversion." },
    ],
    pricingNote: "From Rs 15,000-40,000 per page, or included in a Generate Customers engagement.",
    faq: [
      { q: "Landing page vs website - what's the difference?", a: "A website serves many audiences and purposes. A landing page serves one audience with one offer and one conversion action. Ads should go to landing pages, not the homepage." },
      { q: "How many landing pages do I need?", a: "One per distinct audience or offer. If you run ads to three different audiences, you need three landing pages - not one homepage." },
    ],
    relatedServices: ["performance-marketing", "lead-generation", "web-development", "web-development"],
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}

/* ------------------------------------------------------------------ */
/* INDUSTRY DETAIL PAGES                                               */
/* ------------------------------------------------------------------ */

export type IndustryDetail = {
  slug: string;
  name: string;
  tier: 1 | 2 | 3;
  headline: string;
  pain: string;
  growthLeaks: string[];
  recommendedRung: string;
  services: string[];
  technology: string[];
  workflow: { step: string; detail: string }[];
  faq: { q: string; a: string }[];
};

export const industryDetails: IndustryDetail[] = [
  {
    slug: "retail",
    name: "Retail",
    tier: 1,
    headline: "Footfall is down. Online discovery is invisible.",
    pain: "Retail businesses depend on footfall and local visibility. When Maps, reviews, and online presence are weak, footfall declines and the owner blames the market - when the real problem is discoverability.",
    growthLeaks: [
      "Unclaimed or incomplete Google Business Profile",
      "Inconsistent directory listings",
      "No review generation system",
      "Website that doesn't convert",
      "No online enquiry or booking path",
    ],
    recommendedRung: "Get Discovered",
    services: ["local-seo", "google-business-profile", "web-development", "reviews", "performance-marketing"],
    technology: ["CRM", "POS integration", "Analytics", "WhatsApp automation"],
    workflow: [
      { step: "Diagnose", detail: "Audit Maps, reviews, directory listings, and website conversion." },
      { step: "Fix foundation", detail: "Optimise Google Business Profile, fix NAP, build review system." },
      { step: "Build trust", detail: "Rebuild website as a conversion asset with clear offer and enquiry path." },
      { step: "Amplify", detail: "Run measured local ads to the now-converting foundation." },
    ],
    faq: [
      { q: "How can retail get more customers?", a: "Start with local discovery - claim and optimise your Google Business Profile, build a review system, and ensure your website converts. Ads amplify a working foundation; they don't replace it." },
      { q: "Do I need a website if I have a physical store?", a: "Yes. The store serves walk-ins; the website serves the majority who search online first. Without a credible site, discovery dies at the doorstep." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tier: 1,
    headline: "Patients can't book. Trust signals are weak.",
    pain: "Healthcare practices have real expertise but weak digital presence. Patients can't verify credentials, services, or availability - and booking requires a phone call, losing digital-native patients entirely.",
    growthLeaks: [
      "No clear credentials and services online",
      "No online booking path",
      "Weak review presence",
      "Content not structured for AEO",
      "No patient communication automation",
    ],
    recommendedRung: "Build Trust",
    services: ["web-development", "local-seo", "aeo", "automation", "crm"],
    technology: ["Booking system", "CRM", "Reminders automation", "Patient portal"],
    workflow: [
      { step: "Diagnose", detail: "Audit trust signals, booking flow, and answer-engine presence." },
      { step: "Build trust", detail: "Rebuild website around credentials, services, FAQs, and privacy." },
      { step: "Enable booking", detail: "Add online booking with automated reminders." },
      { step: "Optimise for answers", detail: "Structure content so AI engines cite the practice for specialty queries." },
    ],
    faq: [
      { q: "How do healthcare practices get more patients?", a: "Build trust online (credentials, services, reviews), enable online booking, and structure content so AI answer engines cite the practice for specialty queries in the area." },
      { q: "Is online booking necessary for healthcare?", a: "Increasingly yes. It reduces phone load, captures digital-native patients, and lets patients book outside business hours." },
    ],
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants / Hospitality",
    tier: 1,
    headline: "Reviews and Maps drive - or kill - covers.",
    pain: "For restaurants, Maps and reviews are the storefront. Poor photos, outdated hours, low ratings from unresolved complaints, and no booking flow means discovery doesn't convert to reservations.",
    growthLeaks: [
      "Poor Google Business Profile imagery and attributes",
      "Low or unmanaged review rating",
      "No online booking",
      "Inconsistent hours and menu info",
      "No review response system",
    ],
    recommendedRung: "Get Discovered",
    services: ["local-seo", "google-business-profile", "reviews", "web-development", "automation"],
    technology: ["Booking system", "CRM", "Review automation", "WhatsApp reminders"],
    workflow: [
      { step: "Diagnose", detail: "Audit Maps presence, reviews, and booking flow." },
      { step: "Optimise Maps", detail: "Professional photos, correct attributes, updated hours." },
      { step: "Fix reviews", detail: "Respond to old complaints, build new review generation system." },
      { step: "Enable booking", detail: "Add tracked online booking tied to the CRM." },
    ],
    faq: [
      { q: "How do restaurants get more covers?", a: "Optimise your Google Business Profile (photos, hours, attributes), build a review system, and add tracked online booking. Maps and reviews are the storefront for restaurants." },
      { q: "How do I improve my restaurant's review rating?", a: "Respond professionally to old negative reviews, then build a system to consistently ask satisfied customers for reviews. Fresh positive reviews dilute old negatives." },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    tier: 1,
    headline: "Expertise is real. Pipeline is invisible.",
    pain: "Professional services firms (CAs, CSs, lawyers, consultants) have deep expertise but rely on referrals. When pipeline is invisible and follow-up is inconsistent, growth depends on luck.",
    growthLeaks: [
      "No lead capture system",
      "Inconsistent follow-up",
      "No pipeline visibility",
      "No content establishing authority",
      "Manual client communication",
    ],
    recommendedRung: "Generate Customers",
    services: ["crm", "lead-generation", "automation", "web-development", "aeo"],
    technology: ["CRM", "Pipeline dashboard", "Automation", "Content systems"],
    workflow: [
      { step: "Diagnose", detail: "Audit lead flow, follow-up consistency, and pipeline visibility." },
      { step: "Capture", detail: "Route every enquiry into a single CRM." },
      { step: "Automate", detail: "Build follow-up sequences and qualification rules." },
      { step: "Build authority", detail: "Create content that establishes expertise and gets cited." },
    ],
    faq: [
      { q: "How do professional services firms grow?", a: "Make pipeline visible. Capture every lead in a CRM, automate follow-up, and build authority through content. Growth becomes systematic rather than referral-dependent." },
      { q: "Do CAs and consultants need a CRM?", a: "Yes - especially when serving multiple clients with staggered engagements. A CRM ensures nothing falls through and makes pipeline and capacity visible." },
    ],
  },
  {
    slug: "coaching-education",
    name: "Coaching / Education",
    tier: 1,
    headline: "Admissions leak after the first enquiry.",
    pain: "Coaching institutes receive enquiries during admission season but follow up inconsistently. Without a measured funnel, the institute has no idea where admissions leak - enquiry to demo, or demo to enrolment.",
    growthLeaks: [
      "No funnel measurement",
      "Inconsistent follow-up",
      "No parent communication automation",
      "Ad spend not attributed to enrolments",
      "No stage-based nurturing",
    ],
    recommendedRung: "Generate Customers",
    services: ["lead-generation", "crm", "automation", "performance-marketing", "data-analytics"],
    technology: ["CRM", "Funnel analytics", "Automation", "Attribution tracking"],
    workflow: [
      { step: "Map funnel", detail: "Define stages: enquiry → demo → enrolment." },
      { step: "Instrument", detail: "Track conversion at each stage." },
      { step: "Automate", detail: "Build stage-based follow-up and parent communication." },
      { step: "Attribute", detail: "Measure ad spend against enrolled students, not clicks." },
    ],
    faq: [
      { q: "How do coaching institutes increase admissions?", a: "Map and measure the full funnel (enquiry → demo → enrolment), automate stage-based follow-up, and attribute ad spend to enrolled students - not clicks." },
      { q: "When should coaching institutes run ads?", a: "After the funnel is instrumented. Otherwise you pay for clicks with no idea which channels produce enrolled students." },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tier: 3,
    headline: "Operations outrun the systems that run them.",
    pain: "Small manufacturers grow, but operations stay manual - orders in WhatsApp, inventory in spreadsheets, planning in the owner's head. Growth creates chaos: missed orders, stockouts, no visibility into profitability.",
    growthLeaks: [
      "Manual order capture",
      "Spreadsheet inventory",
      "No production planning system",
      "No margin visibility per product line",
      "No integrated operations view",
    ],
    recommendedRung: "Business Operating System",
    services: ["erp", "crm", "automation", "data-analytics", "custom-software"],
    technology: ["ERP", "CRM", "Inventory", "Analytics", "Custom software"],
    workflow: [
      { step: "Diagnose", detail: "Audit order flow, inventory, and margin visibility." },
      { step: "Sequence", detail: "Avoid heavy ERP on day one - start with CRM, then inventory, then analytics." },
      { step: "Integrate", detail: "Connect systems so data flows without manual sync." },
      { step: "Measure", detail: "Build a dashboard showing orders, stock, and margins in one place." },
    ],
    faq: [
      { q: "Do small manufacturers need an ERP?", a: "Eventually yes, but not always first. Sequence: CRM for orders, then inventory tracking, then analytics, then full ERP. Adopt each piece before adding the next." },
      { q: "How do manufacturers improve profitability?", a: "Get margin visibility per product line. Most small manufacturers don't know which products actually make money - systemise that visibility first." },
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    tier: 2,
    headline: "Showroom visits don't convert to bookings.",
    pain: "Automotive dealerships and service centres depend on footfall and enquiries, but showroom visits rarely convert to bookings because there's no follow-up system and no way to attribute sales to marketing channels.",
    growthLeaks: [
      "No lead capture from walk-ins and enquiries",
      "Inconsistent follow-up on test drives and quotes",
      "No attribution of sales to marketing channels",
      "Service reminders not automated",
      "No customer retention system post-sale",
    ],
    recommendedRung: "Generate Customers",
    services: ["crm", "lead-generation", "automation", "performance-marketing", "web-development"],
    technology: ["CRM", "Follow-up automation", "Service reminders", "Attribution"],
    workflow: [
      { step: "Capture", detail: "Route every walk-in, call, and online enquiry into a single CRM." },
      { step: "Follow up", detail: "Automate test-drive and quote follow-up so no lead goes cold." },
      { step: "Attribute", detail: "Track which marketing channel produced each sale." },
      { step: "Retain", detail: "Automate service reminders and post-sale communication." },
    ],
    faq: [
      { q: "How do automotive dealers get more sales?", a: "Capture every enquiry in a CRM, automate follow-up on test drives and quotes, and attribute sales to marketing channels so you scale what works and cut what doesn't." },
      { q: "How do I increase service bookings?", a: "Automate service reminders tied to purchase or last-service dates. Most customers return when reminded; few remember on their own." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tier: 2,
    headline: "Long cycles with no follow-up system.",
    pain: "Real estate has long sales cycles and high-value transactions. Without a follow-up system, leads go cold between the first enquiry and the decision - often months later - and the sale goes to the agent who stayed in touch.",
    growthLeaks: [
      "No CRM to manage long sales cycles",
      "Follow-up depends on memory over months",
      "No lead nurturing between enquiry and decision",
      "No attribution of closed deals to channels",
      "No system for past-client referrals",
    ],
    recommendedRung: "Generate Customers",
    services: ["crm", "lead-generation", "automation", "performance-marketing", "web-development"],
    technology: ["CRM", "Nurturing automation", "Pipeline dashboard", "Attribution"],
    workflow: [
      { step: "Capture", detail: "Every enquiry - online, call, walk-in - into one CRM with property interest noted." },
      { step: "Nurture", detail: "Automated follow-up across the months-long cycle, with relevant updates." },
      { step: "Qualify", detail: "Score leads by readiness so agents focus on hot prospects." },
      { step: "Attribute", detail: "Track which channel produced each closed deal." },
    ],
    faq: [
      { q: "How do real estate agents manage long sales cycles?", a: "A CRM with automated nurturing is essential - follow-up over months can't depend on memory. Capture every lead, nurture with relevant updates, and qualify by readiness." },
      { q: "What's the biggest leak in real estate marketing?", a: "Leads going cold between enquiry and decision. The agent who stays in touch systematically wins - the one who relies on memory loses." },
    ],
  },
  {
    slug: "interiors-construction",
    name: "Interiors / Construction",
    tier: 2,
    headline: "Quotations die in WhatsApp.",
    pain: "Interiors and construction businesses live and die by quotations - but quotations get lost in WhatsApp, follow-up is inconsistent, and there's no system to track which leads are worth pursuing.",
    growthLeaks: [
      "Quotations managed in WhatsApp and memory",
      "No follow-up system after sending a quote",
      "No pipeline visibility on pending quotes",
      "No attribution of won/lost jobs to channels",
      "No system for past-client referrals and repeats",
    ],
    recommendedRung: "Generate Customers",
    services: ["crm", "lead-generation", "automation", "web-development", "performance-marketing"],
    technology: ["CRM", "Quote tracking", "Follow-up automation", "Pipeline dashboard"],
    workflow: [
      { step: "Capture", detail: "Every enquiry and quotation into a CRM, not WhatsApp." },
      { step: "Track", detail: "Pipeline of sent, pending, won, and lost quotes - visible at a glance." },
      { step: "Follow up", detail: "Automated follow-up after sending a quote - the window is short." },
      { step: "Attribute", detail: "Track which channel produced each won job." },
    ],
    faq: [
      { q: "How do interiors businesses win more quotes?", a: "Move quotations out of WhatsApp into a CRM, track pipeline status visibly, and follow up automatically after sending - most jobs are lost to the business that followed up, not the cheapest quote." },
      { q: "Why do my quotations disappear?", a: "Because they live in WhatsApp and memory. A CRM makes every quote visible, tracked, and followed up - so none disappear." },
    ],
  },
  {
    slug: "wholesale-trading",
    name: "Wholesale / Trading",
    tier: 2,
    headline: "Reorders depend on memory.",
    pain: "Wholesale and trading businesses depend on repeat orders from existing customers - but reorders depend on the customer remembering to call, or the salesperson remembering to ask. There's no system for proactive reorder reminders.",
    growthLeaks: [
      "No customer database with order history",
      "Reorders depend on customer memory",
      "No proactive reorder reminders",
      "No inventory visibility for customers",
      "No system for price list and stock updates",
    ],
    recommendedRung: "Business Operating System",
    services: ["crm", "erp", "automation", "data-analytics", "web-development"],
    technology: ["CRM", "ERP", "Reorder automation", "Customer portal"],
    workflow: [
      { step: "Organise", detail: "Build a customer database with order history and frequency." },
      { step: "Remind", detail: "Automate proactive reorder reminders based on past patterns." },
      { step: "Systematise", detail: "ERP for inventory, pricing, and order tracking." },
      { step: "Retain", detail: "Customer portal for easy reordering and stock visibility." },
    ],
    faq: [
      { q: "How do wholesale businesses increase reorders?", a: "Stop depending on customer memory. Build a customer database with order history and automate proactive reorder reminders based on past frequency - most customers reorder when reminded." },
      { q: "Do wholesalers need an ERP?", a: "At scale, yes - for inventory, pricing, and order tracking. Start with a CRM for customer history and reorder reminders, then add inventory and ERP as volume grows." },
    ],
  },
  {
    slug: "fitness-wellness",
    name: "Fitness / Wellness",
    tier: 2,
    headline: "Memberships churn without retention.",
    pain: "Fitness and wellness businesses win members but lose them to churn - because there's no retention system, no engagement automation, and no way to identify at-risk members before they cancel.",
    growthLeaks: [
      "No member engagement tracking",
      "No automated retention communication",
      "No identification of at-risk members",
      "No win-back system for lapsed members",
      "No referral system from existing members",
    ],
    recommendedRung: "Generate Customers",
    services: ["crm", "automation", "lead-generation", "web-development", "performance-marketing"],
    technology: ["CRM", "Engagement automation", "Retention dashboards", "Referral system"],
    workflow: [
      { step: "Track", detail: "CRM with member attendance, engagement, and lifecycle stage." },
      { step: "Engage", detail: "Automated communication for milestones, absences, and renewals." },
      { step: "Retain", detail: "Identify at-risk members and intervene before cancellation." },
      { step: "Refer", detail: "Automated referral requests from satisfied members." },
    ],
    faq: [
      { q: "How do fitness businesses reduce churn?", a: "Track member engagement in a CRM, automate communication for absences and renewals, and identify at-risk members before they cancel - retention is cheaper than acquisition." },
      { q: "What's the best marketing for fitness businesses?", a: "Referrals from satisfied members. Build an automated referral system - a member who refers a friend is both retained and a growth channel." },
    ],
  },
  {
    slug: "import-export",
    name: "Import / Export",
    tier: 3,
    headline: "Compliance and data live in spreadsheets.",
    pain: "Import/export businesses handle complex compliance, documentation, and multi-party coordination - but the data lives in spreadsheets and email, creating errors, delays, and no visibility into profitability by shipment or route.",
    growthLeaks: [
      "Compliance docs in spreadsheets and email",
      "No shipment tracking system",
      "No profitability analysis by route or product",
      "No coordinated communication across parties",
      "No data backbone for scaling operations",
    ],
    recommendedRung: "Business Operating System",
    services: ["erp", "custom-software", "automation", "data-analytics", "crm"],
    technology: ["ERP", "Custom software", "Document automation", "Analytics"],
    workflow: [
      { step: "Systematise", detail: "Move compliance docs and shipment data out of spreadsheets." },
      { step: "Track", detail: "Centralised shipment tracking with status and documentation." },
      { step: "Analyse", detail: "Profitability by route, product, and customer." },
      { step: "Automate", detail: "Document generation and multi-party communication." },
    ],
    faq: [
      { q: "Do import/export businesses need custom software?", a: "Often yes - the complexity of compliance, documentation, and multi-party coordination rarely fits off-the-shelf tools. Custom software that fits your actual workflow becomes a competitive advantage." },
      { q: "How do I track profitability in import/export?", a: "Centralise shipment, cost, and revenue data in one system, then analyse profitability by route, product, and customer. Most businesses can't answer which shipments actually made money." },
    ],
  },
];

export function getIndustryDetail(slug: string) {
  return industryDetails.find((i) => i.slug === slug);
}
