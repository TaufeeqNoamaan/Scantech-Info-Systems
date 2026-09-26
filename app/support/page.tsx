import type { Metadata } from "next";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ComparisonMatrix } from "@/components/ui/ComparisonMatrix";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CtaBand } from "@/components/ui/CtaBand";
import { slaCommitments, slaMatrix } from "@/lib/data/amc";
import { company, departments } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Customer Support — Raise a Service Request & SLA",
  description:
    "How to raise a service request with Scantech Info Systems, the response window for each priority, escalation when a window is at risk, and the helpdesk hours for contract customers.",
  alternates: { canonical: "/support" },
};

const channels = [
  {
    icon: "call",
    title: "Phone",
    badge: "Fastest",
    body: "The support line is staffed continuously. Use this for anything that is stopping work right now.",
    value: company.helpdeskDisplay,
    href: company.helpdeskHref,
    featured: true,
  },
  {
    icon: "mail",
    title: "Email",
    body: "For non-urgent requests, scheduled visits, moves and additions — or where you want the detail in writing.",
    value: company.email,
    href: company.emailHref,
    featured: false,
  },
  {
    icon: "assignment_ind",
    title: "Your resident engineer",
    body: "Sites with a resident engineer raise requests directly with them. Anything beyond a first-line fix escalates into our central field team.",
    value: null,
    href: null,
    featured: false,
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Support"
        title="Raise a service request"
        lede="Contract customers have cover 24 hours a day, all 365 days. Log the call, get a reference number, and the priority you agree with us sets the response window."
        crumbs={[{ label: "Home", href: "/" }, { label: "Support" }]}
        primary={{ label: `Call ${company.helpdeskDisplay}`, href: company.helpdeskHref }}
        secondary={{ label: "Read the SLA policy", href: "/sla-policy" }}
        note="24 hours · all 365 days · for customers on a contracted maintenance tier"
      />

      {/* How to raise */}
      <Section tone="white">
        <Reveal className="mb-12 max-w-2xl">
          <SectionEyebrow index="01">Logging a fault</SectionEyebrow>
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
            Three ways in, one queue
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
            Whether a request arrives by phone or by email it lands in the same
            queue and gets a reference number. That reference is what the
            escalation path is tracked against.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <Reveal key={channel.title} delay={index * 80} className="h-full">
              <div
                className={
                  "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg " +
                  (channel.featured
                    ? "border-accent/40 ring-1 ring-accent/10"
                    : "border-border-subtle hover:border-slate-300")
                }
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />

                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-border-subtle bg-surface-low transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-white">
                    <MaterialSymbol
                      name={channel.icon}
                      className="text-[21px] text-accent"
                    />
                  </div>
                  {channel.badge ? (
                    <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-accent">
                      {channel.badge}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-[17px] font-bold tracking-tight text-midnight">
                  {channel.title}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-slate-600">
                  {channel.body}
                </p>

                {channel.value && channel.href ? (
                  <a
                    href={channel.href}
                    className="mt-5 break-all text-[16px] font-bold text-accent transition-colors hover:text-accent-strong"
                  >
                    {channel.value}
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-8">
          <div className="rounded-xl border border-border-subtle bg-surface-low p-7">
            <h3 className="text-[16px] font-bold tracking-tight text-midnight">
              Have this ready when you call
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Site name and the contract or account it sits under",
                "The affected asset, room or area",
                "A contact name and number for somebody on site",
                "Whether a workaround is in place",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <MaterialSymbol
                    name="check"
                    className="mt-0.5 shrink-0 text-[16px] text-accent"
                  />
                  <span className="text-[14px] leading-[1.6] text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* SLA matrix */}
      <Section tone="low">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow index="02">Response commitments</SectionEyebrow>
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
              Priority, window and escalation
            </h2>
          </div>
          <ArrowLink href="/sla-policy" className="shrink-0">
            Full SLA policy
          </ArrowLink>
        </Reveal>

        <Reveal>
          <ComparisonMatrix {...slaMatrix} />
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {slaCommitments.map((commitment, index) => (
            <Reveal as="li" key={commitment} delay={index * 50} className="group flex items-start gap-2.5">
              <MaterialSymbol
                name="check_circle"
                className="mt-0.5 shrink-0 text-[18px] text-accent transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-[14px] leading-[1.65] text-slate-600">
                {commitment}
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Departments + renewals */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal className="mb-8">
              <SectionEyebrow index="03">Routing</SectionEyebrow>
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[30px]">
                Who to call for what
              </h2>
            </Reveal>

            <div className="space-y-4">
              {departments.map((department, index) => (
                <Reveal key={department.name} delay={index * 70}>
                  <div className="group flex items-start gap-4 rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border-subtle bg-surface-low transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-white">
                      <MaterialSymbol
                        name={department.icon}
                        className="text-[20px] text-accent"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-bold tracking-tight text-midnight">
                        {department.name}
                      </h3>
                      <p className="mt-1 text-[13px] leading-[1.6] text-slate-600">
                        {department.body}
                      </p>
                      <p className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <a
                          href={department.href}
                          className="break-all text-[14px] font-bold text-accent transition-colors hover:text-accent-strong"
                        >
                          {department.value}
                        </a>
                        <span className="text-[12px] text-slate-500">
                          {department.hours}
                        </span>
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="group rounded-xl border border-border-subtle bg-surface-low p-7">
                <MaterialSymbol
                  name="autorenew"
                  className="text-[24px] text-accent transition-transform duration-500 group-hover:rotate-180"
                />
                <h2 className="mt-4 text-[18px] font-bold tracking-tight text-midnight">
                  Renewing or extending cover
                </h2>
                <p className="mt-3 text-[14px] leading-[1.7] text-slate-600">
                  The asset register is re-surveyed before renewal, so equipment
                  added or retired during the year is reflected in the next term
                  rather than billed from an out-of-date schedule.
                </p>
                <div className="mt-5">
                  <ArrowLink href="/amc">Compare contract tiers</ArrowLink>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80} className="mt-5">
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-midnight p-7 text-white">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/25 blur-3xl"
                />
                <div className="relative">
                  <MaterialSymbol
                    name="emergency_home"
                    className="text-[24px] text-accent-soft"
                  />
                  <h2 className="mt-4 text-[18px] font-bold tracking-tight">
                    Out of hours
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.7] text-slate-300">
                    Breakdown cover runs 24 hours a day, all 365 days. Calls
                    raised outside business hours are logged to the same queue and
                    escalated to a named supervisor if the response window is at
                    risk.
                  </p>
                  <a
                    href={company.helpdeskHref}
                    className="mt-5 inline-block text-[18px] font-bold text-accent-soft transition-colors hover:text-white"
                  >
                    {company.helpdeskDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Fault that is not getting resolved?"
        body="Ask for it to be escalated by reference number. Escalation moves ownership to a named supervisor rather than opening a second ticket."
        primary={{ label: "Contact Scantech", href: "/contact" }}
        secondary={{ label: "Read the SLA policy", href: "/sla-policy" }}
        note={`Support: ${company.helpdeskDisplay} · 24 hours, all 365 days, for contract customers`}
      />
    </>
  );
}
