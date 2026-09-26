import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { ContentBlocks } from "@/components/ui/ContentBlocks";
import { faqGroups, allFaqItems } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Contracts, Coverage & Capability",
  description:
    "What an AMC includes, how fast an engineer can be on site, which areas and brands Scantech covers, whether we take over an estate from another vendor, and how contract terms work.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Common Questions"
        title="The questions that decide whether you call"
        lede={`${allFaqItems.length} answers covering contract inclusions, response times, coverage, brands and taking over an estate another vendor has been maintaining.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        primary={{ label: "Still have a question? Contact us", href: "/contact" }}
        secondary={{ label: "Compare AMC tiers", href: "/amc" }}
      />

      <ContentBlocks
        blocks={[
          {
            kind: "faq",
            heading: "Answers",
            groups: faqGroups.map((group) => ({
              title: group.title,
              items: group.items,
            })),
            tone: "white",
          },
          {
            kind: "cards",
            eyebrow: "Keep reading",
            heading: "Where the detail lives",
            intro:
              "Some answers are long enough to need their own page. These are the four worth opening next.",
            columns: 4,
            tone: "low",
            items: [
              {
                icon: "handyman",
                title: "AMC tiers",
                body: "Comprehensive, non-comprehensive and on-call, with the full inclusion matrix.",
                href: "/amc",
              },
              {
                icon: "timer",
                title: "SLA policy",
                body: "Priority definitions, response windows and the escalation path.",
                href: "/sla-policy",
              },
              {
                icon: "map",
                title: "Coverage",
                body: "Base, regional reach and how multi-site estates are handled.",
                href: "/about",
              },
              {
                icon: "menu_book",
                title: "Service catalogue",
                body: "All 20 service lines grouped by discipline, with scopes.",
                href: "/services",
              },
            ],
          },
          {
            kind: "cta",
            heading: "A question we have not answered?",
            body: "If it is not here, it is probably worth a conversation rather than a paragraph. Call the sales line or email us the requirement.",
            primary: { label: "Contact Scantech", href: "/contact" },
            secondary: { label: "Talk to support", href: "/support" },
            note: "Head office: Masab Tank, Hyderabad · Existing customers can raise a request from the support page.",
          },
        ]}
      />
    </>
  );
}
