/**
 * Maintenance contract and service level content.
 *
 * ⚠️ COMMERCIAL — CONFIRM BEFORE LAUNCH.
 * The response windows and inclusion matrix below are built from the two
 * figures Scantech publishes about itself (a 1-hour response on the AMC and
 * Why Scantech pages, and "less than 3 hours" on the About page) plus the
 * inclusions its own copy names — resident engineers, standby units and spares,
 * preventive visits, an exclusive Gold 24×7 maintenance contract, and the
 * 8–22 year experience band of its support engineers.
 *
 * Where a commercial term is genuinely unknown the value reads as a policy
 * statement rather than a number, so nothing on the site over-promises.
 */

import type { Matrix } from "@/lib/matrix";

export type AmcPlan = {
  id: string;
  name: string;
  tagline: string;
  /** Who the tier suits — the qualifying line. */
  best: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
};

export const amcPlans: AmcPlan[] = [
  {
    id: "comprehensive",
    name: "Comprehensive AMC",
    tagline: "Parts and labour both covered",
    best: "Fleets where a failed machine stops somebody's work today.",
    summary:
      "The full contract. Failed parts are replaced from our stock, labour is included, and the machine goes back into service without a purchase approval in the middle of it.",
    highlights: [
      "Replacement parts included",
      "All labour included",
      "Scheduled preventive maintenance visits",
      "Standby units held against breakdowns",
      "Asset register and service history maintained",
      "Priority response window",
    ],
    featured: true,
  },
  {
    id: "non-comprehensive",
    name: "Non-Comprehensive AMC",
    tagline: "Labour covered, parts at actuals",
    best: "Estates with an internal stores function, or where the parts spend must stay visible.",
    summary:
      "You keep control of the parts budget and we carry the engineering. Labour is included, on-site attendance is included, and parts are billed at actuals with the old component returned to you.",
    highlights: [
      "All labour included",
      "On-site attendance included",
      "Parts billed at actuals and returned",
      "Scheduled preventive maintenance visits",
      "Asset register and service history maintained",
    ],
  },
  {
    id: "on-call",
    name: "On-Call Support",
    tagline: "No annual commitment",
    best: "Small sites, or organisations that want us on the list before they need us.",
    summary:
      "Pay per call, with no annual contract. Useful where the estate is small or the equipment is close enough to end of life that a multi-year commitment does not make sense.",
    highlights: [
      "No annual commitment",
      "Per-incident attendance",
      "Cover on any brand we are authorised for",
      "Upgradeable to a contracted tier at renewal",
    ],
  },
];

/** The Gold 24×7 option, named in Scantech's own copy. */
export const goldContract = {
  name: "Gold 24×7 Contract",
  description:
    "Scantech's exclusive Gold Maintenance contract runs 24-hour cover all 365 days of the year, staffed by support engineers holding B.E. / B.Tech / MCA / BCA / B.Sc-IT qualifications with between 8 and 22 years of experience.",
  points: [
    "24-hour cover, all 365 days",
    "Response inside 1 hour for breakdown calls",
    "Resident engineer option at customer premises",
    "Standby units and a held spares pool",
    "Central helpdesk with logged escalation",
  ],
};

/**
 * The tier comparison, as a matrix.
 *
 * Row notes exist because a comparison table's real job is to answer the
 * follow-up question, not just to say "Included". Row notes also give the eye
 * something to land on between the icons, which is what stops eight rows of
 * check marks reading as a bare grid.
 */
export const amcMatrix: Matrix = {
  columns: ["Comprehensive", "Non-Comprehensive", "On-Call"],
  highlightColumn: 0,
  highlightBadge: "Most common",
  cornerLabel: "What's covered",
  rows: [
    {
      label: "Replacement parts",
      note: "Failed components swapped from our own stock",
      values: [
        { text: "Included", state: "yes" },
        { text: "At actuals", state: "partial" },
        { text: "At actuals", state: "partial" },
      ],
    },
    {
      label: "Labour & attendance",
      note: "Engineer time and travel to site",
      values: [
        { text: "Included", state: "yes" },
        { text: "Included", state: "yes" },
        { text: "Per call", state: "partial" },
      ],
    },
    {
      label: "Preventive maintenance visits",
      note: "Scheduled servicing, not just breakdown response",
      values: [
        { text: "Scheduled", state: "yes" },
        { text: "Scheduled", state: "yes" },
        { text: "Not included", state: "no" },
      ],
    },
    {
      label: "Standby replacement unit",
      note: "A working machine while yours is repaired",
      values: [
        { text: "Held in stock", state: "yes" },
        { text: "On request", state: "partial" },
        { text: "Not included", state: "no" },
      ],
    },
    {
      label: "Resident engineer option",
      note: "An engineer stationed at your premises",
      values: [
        { text: "Available", state: "yes" },
        { text: "Available", state: "yes" },
        { text: "Not available", state: "no" },
      ],
    },
    {
      label: "Asset register & service history",
      note: "The record that travels with the contract",
      values: [
        { text: "Maintained", state: "yes" },
        { text: "Maintained", state: "yes" },
        { text: "Per record only", state: "partial" },
      ],
    },
    {
      label: "Response window",
      note: "Contractual, not best-effort",
      values: [
        { text: "Priority", state: "yes" },
        { text: "Standard", state: "partial" },
        { text: "Subject to availability", state: "no" },
      ],
    },
    {
      label: "Minimum term",
      note: "What you are committing to",
      values: [{ text: "Annual" }, { text: "Annual" }, { text: "No commitment" }],
    },
  ],
  footnote:
    "The response window, covered asset list and exclusions that apply to your site are stated in your own contract.",
};

/**
 * ⚠️ CONFIRM BEFORE LAUNCH — the P1 window follows Scantech's own published
 * 1-hour claim. P2 and P3 are written as commitments the business must sign off.
 */
const slaRows = [
  {
    priority: "P1",
    definition: "Site down, or a security system offline",
    example: "Server or core switch failure, surveillance recording stopped",
    response: "Within 1 hour",
    escalation: "Field engineer to duty supervisor immediately",
  },
  {
    priority: "P2",
    definition: "Degraded service, workaround available",
    example: "A department running below capacity, a single camera down",
    response: "Same business day",
    escalation: "Duty supervisor to service manager",
  },
  {
    priority: "P3",
    definition: "Routine request or scheduled work",
    example: "A move, an addition, a preventive visit, a replacement",
    response: "Scheduled with you, next business day onward",
    escalation: "Service manager to operations head",
  },
];

export const slaPriorities = slaRows;

/**
 * Priority levels, shaped for the same matrix component.
 *
 * Declared after `slaRows` on purpose — a module-level `const` reading another
 * const above its declaration would throw at import time.
 */
export const slaMatrix: Matrix = {
  columns: ["Typical example", "Response window", "Escalation"],
  highlightColumn: 1,
  cornerLabel: "Priority",
  rows: slaRows.map((row) => ({
    label: row.priority,
    note: row.definition,
    values: [
      { text: row.example },
      { text: row.response, state: "yes" },
      { text: row.escalation },
    ],
  })),
  footnote:
    "Priority is agreed with you when the call is logged, so the window follows the incident rather than being decided afterwards.",
};

export const slaCommitments = [
  "A logged call reference on every request, whether it arrives by phone, email or helpdesk.",
  "Consumables and standby replacement hardware for corporate desktops, workstations and servers.",
  "Scheduled preventive maintenance, so faults are found before they become breakdowns.",
  "An engineer who arrives knowing the estate, because the asset register travels with the contract.",
  "Escalation to a named supervisor if the response window is at risk — not a second ticket.",
  "Monthly or quarterly service reviews, depending on the estate size.",
];
