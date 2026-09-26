import type { Metadata } from "next";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ComparisonMatrix } from "@/components/ui/ComparisonMatrix";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CtaBand } from "@/components/ui/CtaBand";
import { amcMatrix, amcPlans, goldContract, slaMatrix } from "@/lib/data/amc";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Annual Maintenance Contracts — Tiers, Inclusions & Response",
  description:
    "Comprehensive and non-comprehensive AMC tiers for desktops, servers, peripherals and networking. What each contract includes, what it excludes, response windows and the 24×7 Gold contract.",
  alternates: { canonical: "/amc" },
};

/** The plain-language questions a contract always raises, answered in prose. */
const plainLanguage = [
  {
    icon: "fact_check",
    question: "What counts as a call-out",
    answer:
      "Any fault that stops a covered machine, device or link from doing its job — including one that only appears intermittently. Problems traced to a covered asset are a call-out; problems traced to an uncovered asset are quoted before work starts.",
  },
  {
    icon: "block",
    question: "What is not covered",
    answer:
      "Physical damage, liquid ingress, electrical damage from a supply fault, unauthorised modification, and consumables. Anything excluded is named in the contract rather than discovered at the point of failure.",
  },
  {
    icon: "autorenew",
    question: "How renewals work",
    answer:
      "The asset register is re-surveyed before renewal, so equipment added or retired during the year is reflected in the next term rather than billed from an out-of-date schedule.",
  },
  {
    icon: "swap_horiz",
    question: "Taking over from another vendor",
    answer:
      "We survey the estate and build the asset register during handover — which routinely surfaces equipment the outgoing vendor's records did not include.",
  },
];

export default function AmcPage() {
  return (
    <>
      <PageHero
        eyebrow="Maintenance Contracts"
        title="What an annual maintenance contract actually covers"
        lede="Three tiers and one inclusion matrix, so you can see the difference before anyone quotes you. Comprehensive covers parts and labour; non-comprehensive covers labour with parts at actuals; on-call has no annual commitment."
        crumbs={[{ label: "Home", href: "/" }, { label: "AMC & Contracts" }]}
        primary={{ label: "Request an Asset Survey", href: "/contact" }}
        secondary={{ label: "Read the SLA policy", href: "/sla-policy" }}
        note="15,000+ computers maintained under contract across Telangana and Andhra Pradesh"
      />

      {/* Tiers */}
      <Section tone="white">
        <Reveal className="mb-12 max-w-2xl">
          <SectionEyebrow index="01">Choose a tier</SectionEyebrow>
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
            Three ways to hold cover
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
            Which one suits you depends on how much of the parts budget you want
            to keep visible, and how quickly a failed machine needs to be back in
            service.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {amcPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 80} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                  plan.featured
                    ? "border-accent/40 shadow-md ring-1 ring-accent/10"
                    : "border-border-subtle hover:border-slate-300",
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />

                <span className="numeral mb-4 text-[12px] font-bold tracking-normal text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-[20px] font-bold tracking-tight text-midnight">
                  {plan.name}
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-accent">
                  {plan.tagline}
                </p>
                <p className="mt-4 text-[14px] leading-[1.7] text-slate-600">
                  {plan.summary}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <MaterialSymbol
                        name="check"
                        className="mt-0.5 shrink-0 text-[17px] text-accent transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-[14px] leading-[1.6] text-slate-600">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-slate-100 pt-5 text-[13px] leading-[1.6] text-slate-500">
                  <span className="font-semibold text-slate-700">Best for: </span>
                  {plan.best}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Matrix */}
      <Section tone="low">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow index="02">Compare</SectionEyebrow>
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
              Inclusion matrix
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
              The same eight questions answered for every tier — including the
              follow-up question each row raises.
            </p>
          </div>
          <ArrowLink href="/contact" className="shrink-0">
            Get a tier scoped to your estate
          </ArrowLink>
        </Reveal>

        <Reveal>
          <ComparisonMatrix {...amcMatrix} />
        </Reveal>
      </Section>

      {/* Gold */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="group relative h-full overflow-hidden rounded-xl border border-border-subtle bg-midnight p-8 text-white">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
              />
              <div className="relative">
                <p className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-soft">
                  <span aria-hidden="true" className="h-px w-6 bg-accent-soft/40" />
                  24×7 cover
                </p>
                <h2 className="text-[24px] font-bold tracking-tight">
                  {goldContract.name}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.75] text-slate-300">
                  {goldContract.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {goldContract.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <MaterialSymbol
                        name="check_circle"
                        className="mt-0.5 shrink-0 text-[18px] text-accent-soft"
                      />
                      <span className="text-[14px] leading-[1.6] text-slate-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal className="mb-8">
              <SectionEyebrow index="03">In plain language</SectionEyebrow>
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
                The questions a contract always raises
              </h2>
            </Reveal>

            <ol className="space-y-4">
              {plainLanguage.map((item, index) => (
                <Reveal as="li" key={item.question} delay={index * 60}>
                  <div className="group flex gap-5 rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border-subtle bg-surface-low transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-white">
                      <MaterialSymbol
                        name={item.icon}
                        className="text-[21px] text-midnight transition-colors duration-300 group-hover:text-accent"
                      />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold tracking-tight text-midnight">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-[14px] leading-[1.7] text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* SLA */}
      <Section tone="low">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow index="04">Response</SectionEyebrow>
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
              Priority levels and windows
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
              Priority is agreed with you when the call is logged, so the window
              follows the incident rather than being decided afterwards.
            </p>
          </div>
          <ArrowLink href="/sla-policy" className="shrink-0">
            Full SLA policy
          </ArrowLink>
        </Reveal>

        <Reveal>
          <ComparisonMatrix {...slaMatrix} />
        </Reveal>
      </Section>

      <CtaBand
        heading="Get a contract scoped against your actual estate"
        body="Send us the asset list, or ask for a survey and we will build it. The contract reflects the machines you own — not an estimate of what a site your size usually has."
        primary={{ label: "Request an Asset Survey", href: "/contact" }}
        secondary={{ label: "Browse all services", href: "/services" }}
        note="A written scope with a bill of materials is issued before any commitment is made."
      />
    </>
  );
}
