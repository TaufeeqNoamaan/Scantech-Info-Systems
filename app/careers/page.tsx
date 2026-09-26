import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { ContentBlocks } from "@/components/ui/ContentBlocks";
import { company, engineeringBench } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Careers — Field Engineers & Project Roles at Scantech",
  description:
    "Working at Scantech Info Systems: 119 directly employed service engineers, field and helpdesk roles, resident engineering positions, and how to apply.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Field engineering is the whole business here"
        lede="Scantech runs its own engineering bench rather than dispatching subcontractors. That means the people who fix things are the people on our payroll — and they stay."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        primary={{ label: "Send us your CV", href: company.emailHref }}
        secondary={{ label: "About Scantech", href: "/about" }}
        note={`${company.addressLine} · ${company.supportHours}`}
      />

      <ContentBlocks
        blocks={[
          {
            kind: "stats",
            eyebrow: "The bench",
            heading: "Who you would be joining",
            tone: "white",
            items: engineeringBench.stats.map((stat) => ({
              value: stat.value,
              label: stat.label,
            })),
          },
          {
            kind: "prose",
            eyebrow: "The work",
            heading: "What the role actually involves",
            tone: "low",
            paragraphs: [
              "Scantech handles 500 to 600 service calls a day across desktops, servers, peripherals, networking and surveillance. Field engineers attend sites across the twin cities and the wider region; helpdesk engineers triage and resolve remotely before a van is dispatched; resident engineers are stationed at larger customer premises and become the site's own IT function.",
              "The work is genuinely varied because the estate is: a bank branch in the morning, a hospital network in the afternoon, a campus cabling audit the next day. Engineers who want to specialise tend to end up specialising in the discipline they are best at rather than the one their job title implies.",
            ],
          },
          {
            kind: "cards",
            eyebrow: "What we look for",
            heading: "Qualifications and experience",
            columns: 3,
            tone: "white",
            items: [
              {
                icon: "school",
                title: "Engineering background",
                body: "B.E., B.Tech, MCA, BCA or B.Sc-IT. Our current bench spans 8 to 22 years of field experience.",
              },
              {
                icon: "handyman",
                title: "Hands, not just theory",
                body: "Hardware diagnosis, cabling termination, switch and router configuration, or surveillance commissioning — depending on discipline.",
              },
              {
                icon: "support_agent",
                title: "Customer-facing manner",
                body: "You will be in front of a customer under pressure. Composure and clear communication matter as much as the technical fix.",
              },
              {
                icon: "verified_user",
                title: "Verified and background-checked",
                body: "All engineers are directly employed and background-verified before site access, because our customers are banks, hospitals and government departments.",
              },
              {
                icon: "route",
                title: "Comfortable travelling",
                body: "Coverage runs across Telangana and Andhra Pradesh. Field roles require travel and, on contract work, out-of-hours attendance.",
              },
              {
                icon: "trending_up",
                title: "Willing to keep certifying",
                body: "We work across HP, Cisco, D-Link, Lenovo and others. Vendor certification is supported and expected.",
              },
            ],
          },
          {
            kind: "bullets",
            eyebrow: "Why people stay",
            heading: "What the job offers",
            columns: 2,
            tone: "low",
            items: [
              "Direct employment — you are on Scantech's payroll, not a dispatch bench.",
              "Exposure across the full estate: hardware, networking, cabling, surveillance and power.",
              "Resident engineering placements for engineers who prefer depth on one site.",
              "Vendor certification supported across the brands we are authorised for.",
              "Long customer relationships, so you revisit the same sites and know the estate.",
              "A bench with 8 to 22 years of experience to learn from — not a single senior engineer.",
            ],
          },
          {
            kind: "prose",
            eyebrow: "Applying",
            heading: "How to apply",
            tone: "white",
            paragraphs: [
              `Send your CV to ${company.salesEmail}, or call the office on ${company.phoneDisplay} and ask to speak to the service department. Whichever route you take, tell us the disciplines you have actually worked on and the equipment you have handled hands-on — that is what we screen on.`,
              "We recruit for field service, helpdesk and resident engineering roles, along with project coordination. If there is no current opening that matches you, we still read the CV — the bench grows when the contract base does, and it does so regularly.",
            ],
          },
          {
            kind: "cta",
            heading: "No listed vacancy, but think you fit?",
            body: "Apply anyway. Field engineering recruitment here is continuous rather than campaign-based, and good CVs do not expire.",
            primary: { label: `Email ${company.salesEmail}`, href: company.salesEmailHref },
            secondary: { label: "See the engineering bench", href: "/about" },
            note: "Scantech Info Systems · Masab Tank, Hyderabad · An ISO 9001 certified organisation",
          },
        ]}
      />
    </>
  );
}
