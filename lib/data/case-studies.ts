/**
 * Engagement records, written only from what Scantech's own archives document:
 * client, year, sector and delivered scope. No outcome metric appears here that
 * the source material does not support — see `needsClientSignOff` below.
 */

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  year?: string;
  title: string;
  /** One line for cards and listings. */
  summary: string;
  situation: string;
  delivered: string[];
  /** Factual scope markers taken from the record. */
  scope?: { label: string; value: string }[];
  /** What the engagement demonstrates, for a buyer reading it. */
  demonstrates: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "farah-college-campus-network",
    client: "Farah College of Engineering & Technology",
    sector: "Education",
    year: "2004",
    title: "Campus-wide structured cabling for an engineering college",
    summary:
      "A large-network and structured-cabling build across an engineering college campus, delivered as a single turnkey scope.",
    situation:
      "An engineering college campus needing full network and cabling infrastructure across its academic blocks — the kind of build where civil works, cable routes, terminations and active equipment all have to land in the right order or teaching is disrupted.",
    delivered: [
      "Structured cabling across campus blocks",
      "Network design and infrastructure component selection",
      "Integration and implementation of the campus network",
      "Deployment, support and operator training on handover",
    ],
    scope: [
      { label: "Discipline", value: "Structured cabling & campus network" },
      { label: "Delivery year", value: "2004" },
      { label: "Status today", value: "Now Vidya Vikas College of Engineering & Technology" },
    ],
    demonstrates:
      "That we were building campus-scale cabling and network infrastructure in this region two decades ago — not moving into it recently.",
  },
  {
    slug: "lords-institute-network",
    client: "Lords Institute of Engineering & Technology",
    sector: "Education",
    year: "2004",
    title: "Campus network infrastructure for an engineering institute",
    summary:
      "Large-network and structured-cabling delivery for an engineering institute campus.",
    situation:
      "A growing engineering institute whose academic and administrative blocks needed a network backbone that could carry departmental systems rather than a single shared connection.",
    delivered: [
      "Campus structured cabling and backbone",
      "Switching and network configuration",
      "Departmental network segmentation",
      "Ongoing maintenance cover",
    ],
    scope: [
      { label: "Discipline", value: "Structured cabling & large networks" },
      { label: "Delivery year", value: "2004" },
      { label: "Relationship", value: "Continuing maintenance relationship" },
    ],
    demonstrates:
      "Repeat institutional delivery — colleges that took a network from us kept us for the maintenance behind it.",
  },
  {
    slug: "shiv-prasad-eye-hospital",
    client: "Shiv Prasad Eye Hospital",
    sector: "Healthcare",
    year: "2006",
    title: "Clinical premises network and structured cabling",
    summary:
      "Structured cabling and network infrastructure for a working hospital environment.",
    situation:
      "A hospital where network downtime lands on clinicians rather than IT — cable routes had to avoid interfering with clinical areas and the resulting network had to be supportable under a maintenance contract.",
    delivered: [
      "Structured cabling through clinical and administrative areas",
      "Network configuration and deployment",
      "Ongoing support and maintenance cover",
    ],
    scope: [
      { label: "Discipline", value: "Structured cabling & network" },
      { label: "Delivery year", value: "2006" },
      { label: "Environment", value: "Operating clinical premises" },
    ],
    demonstrates:
      "Comfort working in occupied, high-consequence environments where work is phased around the customer's operating hours.",
  },
  {
    slug: "gitanjali-high-school",
    client: "Gitanjali High School",
    sector: "Education",
    year: "2005",
    title: "School campus network build",
    summary: "Structured cabling and network configuration for a school campus.",
    situation:
      "A school needing campus network infrastructure built within academic holiday windows, with no margin for overrun into term time.",
    delivered: [
      "Campus structured cabling",
      "Network configuration and integration",
      "Deployment and handover support",
    ],
    scope: [
      { label: "Discipline", value: "Structured cabling & network" },
      { label: "Delivery year", value: "2005" },
      { label: "Constraint", value: "Delivered within academic break" },
    ],
    demonstrates:
      "Working to a customer's calendar rather than our own — the same discipline a term-time-sensitive rollout demands.",
  },
  {
    slug: "charminar-cooperative-bank",
    client: "Charminar Cooperative Bank Limited",
    sector: "Banking & Financial Services",
    title: "Bilingual banking website and banking systems",
    summary:
      "A bilingual Urdu and English web presence plus core banking and financial management systems, developed and supported in-house.",
    situation:
      "A cooperative bank serving a customer base that reads Urdu and English, with a system estate that had outgrown ad-hoc tools.",
    delivered: [
      "Bilingual Urdu and English website",
      "Banking system development",
      "Financial management and accounting systems",
      "Ongoing application support",
    ],
    scope: [
      { label: "Discipline", value: "Software development & systems" },
      { label: "Artifacts", value: "Bilingual web presence, banking systems" },
      { label: "Ownership", value: "Developed in-house by Scantech" },
    ],
    demonstrates:
      "That our software capability is real and in production in regulated environments — not a line on a capability list.",
  },
  {
    slug: "siasat-daily-systems",
    client: "The Siasat Daily",
    sector: "Media & Publishing",
    title: "Advertisement management and billing systems for a daily newspaper",
    summary:
      "Advertisement management, newspaper publication management and a billing system built for a daily's production schedule.",
    situation:
      "A daily newspaper running advertisement booking, production and billing on separate manual processes, with no single record connecting an advertisement to its invoice.",
    delivered: [
      "Advertisement management system",
      "Newspaper and publication management information system",
      "Billing system for daily production",
      "Human resource management",
      "Ongoing application maintenance",
    ],
    scope: [
      { label: "Discipline", value: "Bespoke business software" },
      { label: "Artifacts", value: "Ad management, publication IS, billing, HR" },
      { label: "Operating cadence", value: "Daily production deadlines" },
    ],
    demonstrates:
      "Bespoke application delivery against a deadline that cannot slip — and the support obligation that comes with it.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

/** Other systems Scantech's own record lists as delivered. */
export const otherDeliveredSystems = [
  "Ajanta Transport — financial accounting and fleet management",
  "Nizam Club — club membership and activities system",
  "Sangeet — music information system",
  "Gas Agency — customer maintenance, cylinder stock monitoring and reporting",
  "Medical stock maintenance system",
  "Office automation system",
  "Scantech Computers — student counselling and information system",
];

/**
 * ⚠️ Editor's note, not rendered on the site.
 *
 * These are written strictly from the archive: named client, year and the scope
 * actually recorded. Deliberately absent are percentage downtime reductions,
 * node counts and payback figures, because the source material does not contain
 * them and inventing them would be indefensible on a page whose whole job is
 * credibility. Supply real metrics (or client sign-off to release the figures)
 * and each case study gains a results block.
 */
export const needsClientSignOff =
  "Confirm named publication is still permitted for Farah/Vidya Vikas, Lords Institute, Shiv Prasad Eye Hospital, Gitanjali High School, Charminar Cooperative Bank and The Siasat Daily before launch.";
