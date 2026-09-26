/**
 * FAQ content.
 *
 * On a read-only site with no booking and no working form, the FAQ *is* the
 * sales conversation — these are the questions that decide whether an
 * enterprise buyer picks up the phone.
 */

export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "contracts",
    title: "Contracts & AMC",
    items: [
      {
        q: "What exactly does an annual maintenance contract include?",
        a: "It depends on the tier. Under a comprehensive contract, replacement parts and all labour are included — we replace the failed component from our stock and there is no purchase approval in the middle of a repair. Under a non-comprehensive contract, labour and on-site attendance are included but parts are billed at actuals. On-call support is per incident with no annual commitment. All contracted tiers include scheduled preventive maintenance visits, a maintained asset register and a defined response window.",
      },
      {
        q: "Do you supply equipment as well, or only service it?",
        a: "Both. We are an authorised dealer and reseller for hardware, software, peripherals and networking, which is what lets us support an estate properly — we are accountable for the equipment whether we supplied it or inherited it. We also manufacture our own Scantech-brand personal and business computers and servers.",
      },
      {
        q: "Will you take over an estate another vendor has been maintaining?",
        a: "Yes, and it is one of the more common things we are asked to do. We survey the estate first and build the asset register during handover, which usually surfaces equipment the outgoing vendor's records did not include. Where documentation is missing we produce it, so you are not inheriting an unknown.",
      },
      {
        q: "Can you work outside your normal business hours?",
        a: "Yes. Under contract, breakdown cover runs 24 hours a day, all 365 days. Routine and project work is scheduled around your operating hours — many of our installations are done at weekends or overnight specifically so a floor is not disrupted.",
      },
      {
        q: "What are your contract and payment terms?",
        a: "Contracted maintenance tiers run annually. Project work is quoted against a written scope with a bill of materials, and invoiced against agreed milestones. Exact terms for your requirement are confirmed in the proposal — ask for them in writing and they will be in it.",
      },
    ],
  },
  {
    id: "coverage",
    title: "Coverage & Response",
    items: [
      {
        q: "How quickly can an engineer be on site?",
        a: "Breakdown calls are attended inside 1 hour under Scantech's published response commitment, supported by a team of 119 directly employed service engineers handling 500–600 calls a day. The response window that applies to your site is written into your contract, and it differs by priority level — see the service level policy.",
      },
      {
        q: "Which areas do you cover?",
        a: "We are based at Masab Tank in central Hyderabad, so we move quickly inside the twin cities of Hyderabad and Secunderabad. Beyond that we service customers across Telangana and Andhra Pradesh, and we maintain more than 15,000 computers under contract throughout the region.",
      },
      {
        q: "Can you handle a multi-site estate?",
        a: "Yes. Multi-site estates are consolidated under one contract, one asset register and one escalation path, so a fault at a branch is not a separate relationship with a separate vendor. We also provide remote infrastructure management, which gives visibility of faults across locations without stationing staff at each one.",
      },
      {
        q: "Can you provide an engineer based at our premises?",
        a: "Yes. Resident engineers are stationed at customer premises where the estate size justifies it, working to agreed hours or 24×7 cover. They are our own employees and escalate back into our central field team and spares pool when a fault is beyond a first-line fix.",
      },
    ],
  },
  {
    id: "capability",
    title: "Capability & Brands",
    items: [
      {
        q: "Which brands do you carry?",
        a: "We are authorised dealer or reseller for HP, IBM, Lenovo, Apple, Samsung, Cisco, D-Link, Digilink, Digisol, Cyberoam, Wipro, LG, Seagate, Intel, Exabyte, Canon, Epson, TVSE, Microsoft, AutoDesk, Adobe, ANSYS, Algor, Borland, Micrografx, Aces Consultants and Concept Software. Equipment is sourced through official distribution, so warranty and service entitlement stay intact.",
      },
      {
        q: "Do you design networks, or only install them?",
        a: "Both. Network planning and design is a service in its own right — LAN and WAN design, core and distribution switching, VLAN segmentation, routing, and the firewall boundary in front of it. Where a site already has a network we document it before we change it.",
      },
      {
        q: "Do you do surveillance and access control as well as IT?",
        a: "Yes. IP surveillance with recording sized to your retention policy, biometric and card-based access control, and time and attendance — installed on the same cabling and network discipline as the rest of the site, and maintained under the same contract.",
      },
      {
        q: "Does Scantech develop software?",
        a: "Yes, and it is in production. Systems we have built and still support include advertisement management and billing for The Siasat Daily, banking and financial management systems for Charminar Cooperative Bank, financial accounting and fleet management for Ajanta Transport, and stock and reporting systems for a gas agency. We also provide CAD/CAM/CAE engineering consultancy.",
      },
      {
        q: "How long has Scantech been trading?",
        a: "Scantech began in 1994, and Scantech Info Systems has been supplying and supporting hardware, software and networking since 1996. We are an ISO 9001 certified organisation.",
      },
    ],
  },
  {
    id: "buying",
    title: "Working With Us",
    items: [
      {
        q: "What happens after I make an enquiry?",
        a: "We study the requirement, then survey the site, then send a written proposal with a documented scope and bill of materials. Nothing gets installed before you have approved a specification. After delivery you get as-built documentation, an asset register and operator handover on the systems we installed.",
      },
      {
        q: "Do you provide a turnkey fit-out for a new office?",
        a: "Yes. A turnkey scope covers the requirement study, cabling, network, wireless, power protection, hardware supply, commissioning, acceptance testing, documentation and handover — delivered on one schedule with one point of responsibility rather than several contractors blaming each other.",
      },
      {
        q: "Can you audit an infrastructure we already have?",
        a: "Yes. An audit establishes what equipment exists, what condition it is in, what is at end of life, where the single points of failure are, and where documentation gaps would hurt you during an outage. You get a prioritised remediation report rather than a list of everything wrong.",
      },
      {
        q: "Do you sell to individuals, or only organisations?",
        a: "Our service business is built around organisations — offices, campuses, hospitals, industrial sites and government departments. Consumer retail is not what we do.",
      },
    ],
  },
];

/** Short set for the homepage — the questions that block a phone call. */
export const homepageFaqIds = [
  "What exactly does an annual maintenance contract include?",
  "How quickly can an engineer be on site?",
  "Which areas do you cover?",
  "Will you take over an estate another vendor has been maintaining?",
  "Do you supply equipment as well, or only service it?",
  "Which brands do you carry?",
];

export const allFaqItems: FaqItem[] = faqGroups.flatMap((group) => group.items);
