/**
 * Client records, transcribed from Scantech Info Systems' own published client
 * list and project notes (archived `scantechinfsys.sql`, "Our Clients" and
 * "Networking" pages).
 *
 * ⚠️ These are names Scantech previously published itself. Before launch,
 * confirm that written permission to name each organisation still stands —
 * several are government, defence and public-sector bodies who are stricter
 * about it than commercial clients.
 */

/** The names that carry the most weight in a first impression. */
export const featuredClients: string[] = [
  "BHEL",
  "DRDL",
  "DMRL",
  "MIDHANI",
  "CITD",
  "Doordarshan",
  "Eenadu",
  "Ramoji Film City",
  "Osmania University",
  "University of Hyderabad",
  "GVK Industries",
  "Volvo Construction Equipment",
];

export type CablingProject = {
  client: string;
  /** Year of delivery, where the archive records one. */
  year?: string;
  note?: string;
};

/**
 * Large-network and structured-cabling engagements, as recorded by Scantech.
 * The years are from the source material, not estimated.
 */
export const cablingProjects: CablingProject[] = [
  {
    client: "Farah College of Engineering & Technology",
    year: "2004",
    note: "Now Vidya Vikas College of Engineering & Technology",
  },
  {
    client: "Lords Institute of Engineering & Technology",
    year: "2004",
  },
  { client: "Gitanjali High School", year: "2005" },
  { client: "Shiv Prasad Eye Hospital", year: "2006" },
  { client: "Vijay Engineering Equipment India Pvt. Ltd." },
  { client: "Zaki & Associates" },
  { client: "Sudhir & Associates" },
  { client: "SS Consultants" },
  { client: "SS Infrastructure Development Consultants Pvt. Ltd." },
];

/** Headline estate figures, all sourced from Scantech's own published claims. */
export const estateFacts = [
  {
    icon: "groups",
    label: "On the bench",
    value: "119 engineers",
    detail: "Directly employed service engineers across the field and helpdesk.",
  },
  {
    icon: "build",
    label: "Calls handled",
    value: "500–600 a day",
    detail: "Routine and breakdown service calls, 24×7, all 365 days.",
  },
  {
    icon: "devices",
    label: "Under contract",
    value: "15,000+ computers",
    detail: "Maintained under AMC across Telangana and Andhra Pradesh.",
  },
  {
    icon: "handshake",
    label: "Client base",
    value: "100+ organisations",
    detail: "Across government, education, defence, media, healthcare and industry.",
  },
] as const;
