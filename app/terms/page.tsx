import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { ContentBlocks } from "@/components/ui/ContentBlocks";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Terms of Use — Scantech Info Systems",
  description:
    "Terms governing use of the Scantech Info Systems website, including accuracy of information, intellectual property, external links and the relationship between this site and signed contracts.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        lede="The terms on which this website is provided, and how it relates to anything we agree with you in writing."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
        note={`Last updated ${new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}`}
      />

      <ContentBlocks
        blocks={[
          {
            kind: "prose",
            heading: "Using this website",
            tone: "white",
            paragraphs: [
              `This website is operated by ${company.name}. By using it you accept these terms. If you do not accept them, please do not use the site. This site is intended for organisations evaluating or engaging our services, and for our existing customers.`,
            ],
          },
          {
            kind: "prose",
            heading: "Accuracy of information",
            tone: "low",
            paragraphs: [
              "Service descriptions, capability lists, contract tiers and response windows published here are written to describe how Scantech generally works. They are provided for information only and are not an offer, a quotation or a contractual commitment.",
              "The response windows, covered asset list, inclusions and exclusions that apply to your organisation are the ones stated in your signed contract. Where anything on this website differs from your contract, your contract governs. Where a specification matters to a purchase decision, confirm it with us in writing before relying on it.",
            ],
          },
          {
            kind: "prose",
            heading: "Product names and third-party marks",
            tone: "white",
            paragraphs: [
              "Brand and product names referenced on this site — including hardware, software and networking manufacturers — are the trademarks of their respective owners. They are named to identify the equipment we are authorised to supply and support. Their appearance here does not imply sponsorship or endorsement of this website by those owners.",
            ],
          },
          {
            kind: "prose",
            heading: "Availability",
            tone: "low",
            paragraphs: [
              "We aim to keep this site available and accurate but do not warrant uninterrupted access. We may change, suspend or withdraw any part of the site, including service descriptions, without notice. Nothing on the site should be treated as a substitute for our written scope of work or contract documentation.",
            ],
          },
          {
            kind: "prose",
            heading: "Intellectual property",
            tone: "white",
            paragraphs: [
              `The content, layout and design of this website are the property of ${company.name} unless otherwise stated. You may read, print and share the content for the purpose of evaluating or purchasing our services. You may not republish it as your own, or use it commercially, without our written permission.`,
            ],
          },
          {
            kind: "prose",
            heading: "External links",
            tone: "low",
            paragraphs: [
              "Where this site links to a third-party website, we do so because it is likely to be useful. We do not control those sites, are not responsible for their content, and linking to them does not imply endorsement.",
            ],
          },
          {
            kind: "prose",
            heading: "Liability",
            tone: "white",
            paragraphs: [
              "We take care to keep the information on this site accurate, but we do not accept liability for loss arising from reliance on it in place of written confirmation, or from the site being unavailable. Nothing in these terms limits liability that cannot lawfully be limited.",
            ],
          },
          {
            kind: "prose",
            heading: "Privacy",
            tone: "low",
            paragraphs: [
              "How we handle personal and business data is described in our privacy policy, which forms part of these terms. This site sets no tracking cookies and runs no analytics or advertising trackers.",
            ],
          },
          {
            kind: "prose",
            heading: "Governing law and contact",
            tone: "white",
            paragraphs: [
              `These terms are governed by the laws of India, and the courts at Hyderabad, Telangana have jurisdiction. Questions about these terms can be sent to ${company.email} or raised with the head office at ${company.addressLine}.`,
            ],
          },
          {
            kind: "cta",
            heading: "Need something confirmed in writing?",
            body: "If a specification, response window or inclusion matters to your decision, ask for it in writing. We would rather commit to it on paper than have you infer it from a web page.",
            primary: { label: "Contact Scantech", href: "/contact" },
            secondary: { label: "Read the SLA policy", href: "/sla-policy" },
          },
        ]}
      />
    </>
  );
}
