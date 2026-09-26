/**
 * Site chrome content — navigation, hero, footer and the shared contact block.
 *
 * Business facts live in `lib/data/*`. This module is the layer the layout
 * components read from, and it is deliberately the only place that knows about
 * route structure.
 *
 * Every claim rendered from here is traceable to Scantech Info Systems' own
 * historical material. The earlier build carried invented content — a US phone
 * number, a "Technology Plaza, Suite 400" address, unsourced quality claims and
 * two fabricated client testimonials. All of it has been removed.
 */

import { company as companyFacts, companyDescription } from "@/lib/data/company";
import {
  headlineServiceSlugs,
  services as allServices,
  type Service,
} from "@/lib/data/services";

export type NavLink = { label: string; href: string };

export type HeroSlide = {
  id: string;
  indicatorLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string; icon: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string };
};

export type Differentiator = { icon: string; title: string; description: string };
export type OemPartner = { name: string };
export type ServiceOption = { value: string; label: string };
export type FooterColumn = { title: string; links: NavLink[] };
export type ContactChannel = {
  icon: string;
  title: string;
  href?: string;
  value: string;
  suffix?: string;
};

/* -------------------------------------------------------------------------- */
/*  Company                                                                   */
/* -------------------------------------------------------------------------- */

export const company = {
  ...companyFacts,
  /** Single-line address, used in prose and the footer. */
  addressLine: `${companyFacts.address.area}, ${companyFacts.address.city}, ${companyFacts.address.region}, ${companyFacts.address.country}`,
  supportHoursFooter: companyFacts.supportHours,
  description: companyDescription,
};

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Six items is the practical ceiling for a horizontal desktop bar at 1280px
 * without wrapping. Support, resources and the policies are reachable from the
 * utility bar, the footer and the homepage — they do not need a seventh slot.
 */
export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "AMC & Contracts", href: "/amc" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export const primaryHeaderCta = {
  label: "Request a Site Survey",
  href: "/contact",
} as const;

/**
 * Thin strip above the masthead. Its job is to separate the two kinds of
 * visitor a support-led business gets: somebody with a fault, and somebody
 * with a requirement.
 */
export const utilityBar = {
  coverage: "Hyderabad · Telangana · Andhra Pradesh",
  hours: "Sales & enquiries: Mon – Sat, 8:30 AM – 7:30 PM",
  supportLabel: "Existing customer? Raise a service request",
  supportHref: "/support",
};

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Three slides, each covering a different service line, so the hero is not
 * restricted to cabling and CCTV. Slide 1 carries the document's `<h1>`; the
 * others are `<h2>`, so the page keeps one stable top-level heading while the
 * visible slide rotates.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "complete-it-solutions",
    indicatorLabel: "01 · Complete IT Solutions",
    eyebrow: "Complete IT solutions under one roof",
    title: "One provider for the network, the hardware and the people who fix it",
    description:
      "Scantech Info Systems has supplied, installed and maintained computer hardware, software, peripherals and networking since 1996 — with our own engineers, our own spares, and cover that runs 24 hours a day, all 365 days.",
    primaryCta: {
      label: "Request a Site Survey",
      href: "/contact",
      icon: "arrow_forward",
    },
    secondaryCta: { label: "Browse All Services", href: "/services" },
    image: {
      src: "/images/hero-it-infrastructure.png",
      alt: "Scantech engineers reviewing IT infrastructure with a client",
    },
  },
  {
    id: "structured-cabling",
    indicatorLabel: "02 · Network & Cabling",
    eyebrow: "Structured cabling & network infrastructure",
    title: "Certified cabling and networks, built to be handed over with records",
    description:
      "CAT5e, CAT6 and fibre cabling, core and distribution switching, VLAN segmentation and enterprise wireless — installed, tested and handed over with as-built documentation instead of a verbal explanation.",
    primaryCta: {
      label: "Discuss a Cabling Project",
      href: "/contact",
      icon: "arrow_forward",
    },
    secondaryCta: {
      label: "View Network & Cabling",
      href: "/services/structured-cabling",
    },
    image: {
      src: "/images/hero-structured-cabling.png",
      alt: "Engineers terminating and dressing a structured cabling rack",
    },
  },
  {
    id: "amc",
    indicatorLabel: "03 · Maintenance Contracts",
    eyebrow: "Annual maintenance contracts",
    title: "119 engineers, 15,000 computers under contract, one hour to respond",
    description:
      "Comprehensive and non-comprehensive maintenance across desktops, servers, peripherals and networking — with scheduled preventive visits, standby replacements, and a response window written into the contract.",
    primaryCta: { label: "Compare AMC Tiers", href: "/amc", icon: "arrow_forward" },
    secondaryCta: { label: "See Service Levels", href: "/sla-policy" },
    image: {
      src: "/images/hero-cctv-security.png",
      alt: "Scantech support desk coordinating a field service response",
    },
  },
];

export const carouselConfig = {
  /** Drives the auto-advance timer and the progress-bar animation together. */
  autoplayMs: 5000,
} as const;

/* -------------------------------------------------------------------------- */
/*  Credibility                                                               */
/* -------------------------------------------------------------------------- */

/**
 * The quiet proof line under the hero. The old stats band was removed on
 * request, so this carries the same information at a fraction of the visual
 * weight — and every figure in it is one Scantech publishes about itself.
 */
export const credibility = {
  icon: "verified",
  text: "Trading since 1996 · ISO 9001 certified · 119 directly employed engineers · 15,000+ computers under contract",
};

export const differentiators: Differentiator[] = [
  {
    icon: "groups",
    title: "Our own engineers, not a dispatch bench",
    description:
      "119 directly employed service engineers handle 500–600 calls a day. They hold B.E., B.Tech, MCA, BCA or B.Sc-IT qualifications, with between 8 and 22 years of field experience.",
  },
  {
    icon: "timer",
    title: "A response window in the contract, not a best effort",
    description:
      "Breakdown calls are attended inside 1 hour under our published commitment, with 24-hour cover all 365 days and escalation to a named supervisor if the window is at risk.",
  },
  {
    icon: "storefront",
    title: "Authorised supply, so warranty survives",
    description:
      "We are authorised dealer or reseller for HP, IBM, Lenovo, Apple, Samsung, Cisco, D-Link, Canon, Epson, Microsoft, AutoDesk and more. Equipment bought through us keeps its service entitlement.",
  },
  {
    icon: "build_circle",
    title: "Parts and standby units held, not ordered",
    description:
      "Comprehensive contracts carry replacement parts and standby units from our own stock, so a failed workstation is not waiting for a purchase order to clear before somebody can work.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

export { services, serviceCategories, servicesByCategory, getService } from "@/lib/data/services";
export type { ServiceCategory, ServiceCategoryId } from "@/lib/data/services";

/** The three service lines the homepage leads with — a doorway to `/services`. */
export const featuredServices: Service[] = headlineServiceSlugs
  .map((slug) => allServices.find((service) => service.slug === slug))
  .filter((service): service is Service => Boolean(service));

export const oemPartners: OemPartner[] = [
  { name: "HP" },
  { name: "IBM" },
  { name: "Lenovo" },
  { name: "Apple" },
  { name: "Samsung" },
  { name: "Cisco" },
  { name: "D-Link" },
  { name: "Canon" },
  { name: "Epson" },
  { name: "Microsoft" },
  { name: "AutoDesk" },
  { name: "Seagate" },
];

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

export const contactChannels: ContactChannel[] = [
  {
    icon: "location_on",
    title: "Head office",
    value: company.addressLine,
    suffix: " · Central Hyderabad",
  },
  {
    icon: "support_agent",
    title: "Service & breakdown",
    href: company.helpdeskHref,
    value: company.helpdeskDisplay,
    suffix: " · 24 hours, 365 days for contract customers",
  },
  {
    icon: "shopping_cart",
    title: "Sales & new enquiries",
    href: company.phoneHref,
    value: company.phoneDisplay,
    suffix: ` · ${company.supportHours}`,
  },
  {
    icon: "mail",
    title: "Email",
    href: company.emailHref,
    value: company.email,
  },
];

export const serviceOptions: ServiceOption[] = allServices
  .slice(0, 12)
  .map((service) => ({ value: service.slug, label: service.name }));

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Structured Cabling", href: "/services/structured-cabling" },
      { label: "Network Design & Switching", href: "/services/network-design-switching" },
      {
        label: "Maintenance Contracts (AMC)",
        href: "/services/annual-maintenance-contracts",
      },
      { label: "IP Surveillance & CCTV", href: "/services/ip-surveillance" },
      { label: "IT Facility Management", href: "/services/it-facility-management" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Scantech", href: "/about" },
      { label: "Industries We Serve", href: "/industries" },
      { label: "Our Clients", href: "/clients" },
      { label: "Delivery Record", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support & Policies",
    links: [
      { label: "Customer Support", href: "/support" },
      { label: "SLA & Response Policy", href: "/sla-policy" },
      { label: "AMC Tiers & Inclusions", href: "/amc" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "SLA & Response Policy", href: "/sla-policy" },
];

export const emergencyLink: NavLink = {
  label: "Emergency Dispatch",
  href: "/support",
};
