import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { ContentBlocks } from "@/components/ui/ContentBlocks";
import { slaCommitments, slaMatrix, slaPriorities } from "@/lib/data/amc";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "SLA & Response Policy — Priority Levels, Windows & Escalation",
  description:
    "Scantech Info Systems' service level policy: how P1, P2 and P3 incidents are defined, the response window for each, helpdesk hours, how to raise a request and the escalation path.",
  alternates: { canonical: "/sla-policy" },
};

export default function SlaPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Level Policy"
        title="Response windows, priorities and escalation"
        lede="What happens when you log a fault, how it is prioritised, how quickly we attend, and what to do if the window is at risk."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "SLA & Response Policy" },
        ]}
        primary={{ label: `Call ${company.helpdeskDisplay}`, href: "/contact" }}
        secondary={{ label: "Customer support", href: "/support" }}
        note={`Version 1.0 · Last reviewed ${new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}`}
      />

      <ContentBlocks
        blocks={[
          {
            kind: "prose",
            eyebrow: "Applicability",
            heading: "Who this policy applies to",
            tone: "white",
            paragraphs: [
              "This policy describes the response commitments Scantech Info Systems applies to customers on a contracted maintenance tier. A customer on an on-call arrangement is attended subject to engineer availability and has no contracted response window.",
              "The specific response window, covered asset list and exclusion set that apply to your site are stated in your own contract. Where this policy and your contract differ, your contract takes precedence.",
            ],
          },
          {
            kind: "matrix",
            eyebrow: "Prioritisation",
            heading: "Priority levels and response windows",
            intro:
              "Every request is assigned a priority when it is logged, and the response window follows from that priority. Priority is set with you on the call — not decided afterwards.",
            tone: "low",
            ...slaMatrix,
          },
          {
            kind: "cards",
            eyebrow: "Escalation",
            heading: "If the window is at risk",
            intro:
              "Escalation is not a second ticket. Each level owns the incident until it is resolved or handed up with a named owner.",
            columns: 3,
            tone: "white",
            items: slaPriorities.map((row) => ({
              icon: "escalator_warning",
              title: row.priority,
              body: row.escalation,
            })),
          },
          {
            kind: "bullets",
            eyebrow: "Commitments",
            heading: "What we commit to on every contracted call",
            tone: "low",
            columns: 2,
            items: slaCommitments,
          },
          {
            kind: "prose",
            eyebrow: "Exclusions",
            heading: "What sits outside the response commitment",
            tone: "white",
            paragraphs: [
              "Physical damage, liquid ingress, damage caused by a supply fault, unauthorised modification of covered equipment, and consumables are outside the response commitment. Equipment that is not on the contract asset register is also outside it — which is why the register is re-surveyed at renewal.",
              "Response time is measured from the moment a call is logged with a logged reference number. Where a site is inaccessible at the agreed time, or a required approval is outstanding, the clock is held rather than restarted.",
            ],
          },
          {
            kind: "prose",
            eyebrow: "Raising a request",
            heading: "How to log a fault",
            tone: "low",
            paragraphs: [
              `Contracted customers can log a fault on the support line, ${company.helpdeskDisplay}, which is staffed 24 hours a day, all 365 days. Requests received by email are logged to the same queue.`,
              "Have the site name, the affected asset or area, and a contact number for the person on site. A call reference is issued on every request — whether it arrives by phone or email — and the reference is what the escalation path is tracked against.",
            ],
          },
          {
            kind: "prose",
            eyebrow: "Review",
            heading: "Service reviews",
            tone: "white",
            paragraphs: [
              "Larger estates are reviewed monthly and smaller ones quarterly. The review covers fault volume by priority, response performance against the windows above and open remediations. The asset register and service history are part of the pack, not a separate request.",
            ],
          },
          {
            kind: "cta",
            heading: "Need your contracted windows confirmed in writing?",
            body: "Send us the site name and we will issue the response windows, covered asset list and exclusions that apply to your contract.",
            primary: { label: "Contact Scantech", href: "/contact" },
            secondary: { label: "See AMC tiers", href: "/amc" },
            note: "This page describes Scantech's standard service levels. Your signed contract is the governing document.",
          },
        ]}
      />
    </>
  );
}
