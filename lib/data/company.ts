/**
 * Company-level facts, transcribed from Scantech Info Systems' own historical
 * material. Everything here is sourced; where a detail is genuinely unknown it
 * is marked so rather than guessed at.
 */

export const companyAddress = {
  /** ⚠️ Street, building and postcode still to be confirmed. */
  street: "",
  area: "Masab Tank",
  city: "Hyderabad",
  region: "Telangana",
  postalCode: "",
  country: "India",
} as const;

/** Single-line postal address, used in prose and in the footer. */
export const postalAddress = [
  companyAddress.area,
  companyAddress.city,
  companyAddress.region,
  companyAddress.postalCode,
  companyAddress.country,
]
  .filter(Boolean)
  .join(", ");

export const companyDescription =
  "Scantech Info Systems has supplied, installed and maintained computer hardware, software, peripherals, networking and structured cabling since 1996 — one of Andhra Pradesh's largest dealers of licensed software, and today an authorised partner for the major IT brands.";

export const company = {
  name: "Scantech Info Systems",
  legalName: "Scantech Info Systems",
  tagline: "Complete IT solutions under one roof",
  vision: "Helps You Shape a Better Tomorrow",

  logo: "/scantech_logo_new.png",
  logoAlt: "Scantech Info Systems — hardware, service, software",
  logoWidth: 2121,
  logoHeight: 741,

  // ⚠️ PLACEHOLDERS — the published number and mailbox were not present in the
  // archive. Replace both before launch. The country format is correct (India);
  // the digits are not real.
  phoneDisplay: "+91 40 0000 0000",
  phoneHref: "tel:+914000000000",
  helpdeskDisplay: "+91 40 0000 0001",
  helpdeskHref: "tel:+914000000001",
  email: "info@scantechinfosystems.com",
  emailHref: "mailto:info@scantechinfosystems.com",
  salesEmail: "sales@scantechinfosystems.com",
  salesEmailHref: "mailto:sales@scantechinfosystems.com",

  // Verified from the "About Us" page: "centrally located at Masab Tank".
  address: companyAddress,
  addressLine: postalAddress,
  description: companyDescription,

  supportHours: "Mon – Sat: 8:30 AM – 7:30 PM",
  supportHoursFooter: "Mon – Sat: 8:30 AM – 7:30 PM",
  supportHoursNote: "Breakdown cover: 24 hours, all 365 days, under contract",
} as const;

export type Milestone = { year: string; title: string; body: string };

/**
 * Company history. Years and achievements are taken from the archived
 * "About Scantech", "Home" and "Networking" pages.
 */
export const milestones: Milestone[] = [
  {
    year: "1994",
    title: "Scantech begins",
    body: "The business starts with a vision of helping customers shape a better tomorrow — delivering CAD/CAM/CAE consultancy and training to civil and mechanical engineering practices.",
  },
  {
    year: "1994",
    title: "First in the state",
    body: "Among the first in Andhra Pradesh to run training and consultancy on STAAD, Primavera and finite element analysis with ANSYS, opening new ground for structural and mechanical engineers.",
  },
  {
    year: "1996",
    title: "Scantech Info Systems begins trading",
    body: "The sales and service division opens as a dealer in licensed software, computer hardware and peripherals — supplying, implementing and supporting complete IT infrastructure.",
  },
  {
    year: "2004",
    title: "Campus-scale cabling and networks",
    body: "Large-network and structured-cabling builds delivered for Farah College of Engineering & Technology and Lords Institute of Engineering & Technology.",
  },
  {
    year: "2005",
    title: "Schools and hospitals",
    body: "Campus network at Gitanjali High School, followed in 2006 by the network and structured cabling at Shiv Prasad Eye Hospital.",
  },
  {
    year: "2013",
    title: "Training partner for SEED",
    body: "Selected as the training partner for SEED (USA), delivering free employment-oriented computer courses to financially deserving unemployed students in Hyderabad.",
  },
  {
    year: "Today",
    title: "An engineering bench, not a reseller counter",
    body: "119 directly employed service engineers handling 500–600 calls a day, more than 15,000 computers under maintenance contract, and over 100 institutional clients across Telangana and Andhra Pradesh.",
  },
];

/**
 * The engineering bench. These figures are all published by Scantech itself.
 */
export const engineeringBench = {
  headline: "Who actually turns up on site",
  body: "Every engineer on a Scantech contract is directly employed by Scantech. They are not a subcontractor bench assembled when a call comes in, and they are not a national call centre dispatching whichever van is nearest.",
  stats: [
    { value: "119", label: "Service engineers" },
    { value: "500–600", label: "Calls handled per day" },
    { value: "8–22 yrs", label: "Engineer experience range" },
    { value: "24×7 × 365", label: "Cover across the year" },
  ],
  qualifications:
    "Support engineers hold B.E., B.Tech, MCA, BCA or B.Sc-IT qualifications, with between 8 and 22 years of field experience. Resident engineers are placed at customer premises where the estate warrants it.",
};

/**
 * Credentials. Only claims Scantech's own material supports appear here.
 *
 * ⚠️ The archived source states ISO 9001:2008. If the certification has been
 * renewed, update to the current revision (ISO 9001:2015) and add the
 * certificate number — procurement teams ask for both.
 */
export const credentials = [
  {
    icon: "verified",
    title: "ISO 9001 certified organisation",
    body: "Quality management system certified, with documented service processes behind the contract.",
  },
  {
    icon: "storefront",
    title: "Authorised dealer & reseller",
    body: "Hardware, software, peripherals and networking supplied through official distribution — warranty and service entitlement stay intact.",
  },
  {
    icon: "badge",
    title: "Directly employed engineers",
    body: "119 service engineers on our own payroll, background-verified, not a dispatch bench.",
  },
  {
    icon: "history_edu",
    title: "Trading since 1996",
    body: "Nearly three decades of continuous operation, with customers who have stayed with us through multiple hardware generations.",
  },
];

/**
 * Authorised brands, exactly as Scantech lists them.
 *
 * `Compaq`, `Corel`, `Toshiba` and `Zion` were not in the site copy but each has
 * a logo in Scantech's own brand asset folder, so they were displayed as
 * partners too and are included here.
 */
export const authorisedBrands: string[] = [
  "HP",
  "IBM",
  "Lenovo",
  "Apple",
  "Samsung",
  "Cisco",
  "D-Link",
  "Digilink",
  "Digisol",
  "Cyberoam",
  "Wipro",
  "LG",
  "Seagate",
  "Intel",
  "Exabyte",
  "Canon",
  "Epson",
  "TVSE",
  "Microsoft",
  "AutoDesk",
  "Adobe",
  "ANSYS",
  "Algor",
  "Borland",
  "Micrografx",
  "Aces Consultants",
  "Concept Software",
  "Compaq",
  "Corel",
  "Toshiba",
  "Zion",
];

export type PartnerLogo = {
  name: string;
  file: string;
  /** Intrinsic pixel size, so `next/image` can reserve the right aspect box. */
  width: number;
  height: number;
};

/**
 * Brand logos recovered from Scantech's own asset folder
 * (`Scantechhyd.in\logos`), which is where the company kept the marks it
 * displayed on its website. Using those rather than sourcing marks from the
 * internet means the set is exactly the partnership claim Scantech was already
 * making, at the sizes it was already displaying them.
 *
 * ⚠️ The remaining brands in `authorisedBrands` have no asset here. Displaying
 * a brand mark is a trademark use, so those should be supplied from each
 * vendor's own partner/brand portal rather than taken from a search result —
 * a vendor's brand guidelines govern colour, clear space and minimum size, and
 * a logo grabbed from the web will usually breach all three.
 */
export const partnerLogos: PartnerLogo[] = [
  { name: "HP", file: "/logos/hp.jpg", width: 247, height: 204 },
  { name: "Lenovo", file: "/logos/lenovo.jpg", width: 465, height: 108 },
  { name: "IBM", file: "", width: 0, height: 0 },
  { name: "Samsung", file: "/logos/samsung.jpg", width: 390, height: 129 },
  { name: "LG", file: "/logos/lg.jpg", width: 332, height: 152 },
  { name: "Intel", file: "/logos/intel.jpg", width: 258, height: 196 },
  { name: "Seagate", file: "/logos/seagate.jpg", width: 303, height: 166 },
  { name: "Wipro", file: "/logos/wipro.jpg", width: 225, height: 225 },
  { name: "Toshiba", file: "/logos/toshiba.jpg", width: 264, height: 191 },
  { name: "Compaq", file: "/logos/compaq.jpg", width: 290, height: 174 },
  { name: "Exabyte", file: "/logos/exabyte.jpg", width: 225, height: 225 },
  { name: "D-Link", file: "/logos/dlink.jpg", width: 389, height: 129 },
  { name: "Digilink", file: "/logos/digilink.jpg", width: 160, height: 80 },
  { name: "Digisol", file: "/logos/digisol.jpg", width: 267, height: 189 },
  { name: "Cyberoam", file: "/logos/cyberoam.jpg", width: 350, height: 144 },
  { name: "Zion", file: "/logos/zion.jpg", width: 160, height: 160 },
  { name: "Canon", file: "/logos/canon.jpg", width: 437, height: 115 },
  { name: "Epson", file: "", width: 0, height: 0 },
  { name: "TVSE", file: "/logos/tvse.jpg", width: 420, height: 120 },
  { name: "Microsoft", file: "/logos/microsoft.jpg", width: 251, height: 201 },
  { name: "AutoDesk", file: "", width: 0, height: 0 },
  { name: "Adobe", file: "/logos/adobe.jpg", width: 205, height: 246 },
  { name: "Corel", file: "/logos/corel.jpg", width: 399, height: 126 },
];

/** Only the brands that actually have an asset, in display order. */
export const partnerLogosWithAssets: PartnerLogo[] = partnerLogos.filter(
  (logo) => logo.file.length > 0,
);

/** Coverage — the first question an on-site buyer asks. */
export const coverage = {
  base: "Hyderabad",
  primary: "Twin cities of Hyderabad and Secunderabad",
  regional: "Across Telangana and Andhra Pradesh",
  body: "Our base is Masab Tank in central Hyderabad, which is why engineers can be moving inside the city quickly. Beyond the twin cities we service customers across Telangana and Andhra Pradesh — Scantech maintains more than 15,000 computers under contract throughout the region.",
  notes: [
    "On-site attendance inside Hyderabad on contract terms.",
    "Outstation coverage across Telangana and Andhra Pradesh, scheduled against the contract.",
    "Multi-site estates consolidated under one contract and one escalation path.",
    "Resident engineers stationed where the estate is large enough to justify it.",
  ],
};

/** Footer / contact department routing — separates sales traffic from support. */
export const departments = [
  {
    icon: "support_agent",
    name: "Service & Breakdown",
    body: "Existing customers raising a fault or booking a preventive visit.",
    value: company.helpdeskDisplay,
    href: company.helpdeskHref,
    hours: "24 hours, all 365 days, for contract customers",
  },
  {
    icon: "shopping_cart",
    name: "Sales & New Enquiries",
    body: "Requirements, site surveys, quotations and new contracts.",
    value: company.phoneDisplay,
    href: company.phoneHref,
    hours: company.supportHours,
  },
  {
    icon: "receipt_long",
    name: "Contracts & Accounts",
    body: "Renewals, purchase orders, invoices and vendor registration.",
    value: company.email,
    href: company.emailHref,
    hours: company.supportHours,
  },
];

/** What a new engagement looks like, in Scantech's own stated sequence. */
export const engagementSteps = [
  {
    title: "Requirement study",
    body: "We start by understanding what the site has to do — headcount, applications, growth expectation and the constraints you are working within.",
  },
  {
    title: "Site survey",
    body: "A walk-through of the actual premises: cable routes, existing plant, containment, power and anything a drawing will not tell us.",
  },
  {
    title: "Written proposal and scope",
    body: "A documented scope with a bill of materials, so you are comparing a specification rather than a number.",
  },
  {
    title: "Infrastructure recommendation",
    body: "We recommend the hardware and software infrastructure the requirement actually needs — including where a cheaper specification would do the job.",
  },
  {
    title: "Supply and implementation",
    body: "Equipment supplied through authorised channels, then installed and commissioned by our own engineers.",
  },
  {
    title: "Documentation and handover",
    body: "As-built records, asset registers and the configuration detail that makes the site supportable by somebody other than the person who built it.",
  },
  {
    title: "Support and review",
    body: "Ongoing maintenance under contract, with scheduled preventive visits and service reviews on an agreed cadence.",
  },
];

/** Reference material published on the site, plus what is available on request. */
export const resourceGroups = [
  {
    icon: "menu_book",
    title: "Service catalogue",
    body: "Every service line, grouped by discipline, with the capability list for each.",
    href: "/services",
    cta: "Browse all services",
  },
  {
    icon: "handyman",
    title: "Maintenance contract scopes",
    body: "What a comprehensive, non-comprehensive and on-call contract each include and exclude.",
    href: "/amc",
    cta: "Compare contract tiers",
  },
  {
    icon: "timer",
    title: "Service level commitments",
    body: "Priority definitions, response windows and the escalation path when something goes wrong.",
    href: "/sla-policy",
    cta: "Read the SLA policy",
  },
  {
    icon: "factory",
    title: "Who we are and what we hold",
    body: "Company record, authorised brands, engineering bench and coverage across the region.",
    href: "/about",
    cta: "Read the company profile",
  },
  {
    icon: "cases",
    title: "Delivery record",
    body: "Campus cabling, hospital networks and bespoke systems, with client and year.",
    href: "/case-studies",
    cta: "See the delivery record",
  },
  {
    icon: "help",
    title: "Answers to the common questions",
    body: "Contract terms, coverage, takeover from another vendor and what happens on a breakdown.",
    href: "/faq",
    cta: "Read the FAQ",
  },
];

/** Printed documents — Phase 3 delivers these as downloads. */
export const printDocuments = [
  "Company profile and capability statement",
  "Service catalogue with scope notes",
  "Sample AMC scope of work",
  "Certification and vendor registration pack",
];
