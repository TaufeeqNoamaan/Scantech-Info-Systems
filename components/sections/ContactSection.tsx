import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { coverage, departments, company } from "@/lib/data/company";

/**
 * Contact.
 *
 * Phase 1 is a read-only site, so there is deliberately no form here. The
 * consultation form and the Calendly booking embed both still exist in the
 * codebase and are Phase 3 work — until they have a destination, rendering a
 * form that silently discards every submission is worse than rendering none.
 *
 * What replaces it is the routing a buyer actually needs: the support line
 * separated from the sales line, and the address on the page.
 */
export function ContactSection() {
  return (
    <Section tone="low" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionEyebrow index="08" spaced={false} className="w-fit">
              Contact
            </SectionEyebrow>
            <h2 className="mt-3 text-3xl sm:text-[36px] font-bold text-midnight tracking-tight leading-[1.2]">
              Talk to the people who would do the work
            </h2>
            <p className="mt-4 text-slate-600 text-[15px] leading-[1.7]">
              Whether you are expanding a workstation floor, replacing an
              undocumented cabling plant, or taking an estate over from another
              vendor, the first conversation is with an engineer — not a call
              centre.
            </p>

            <div className="mt-8 rounded-xl border border-border-subtle bg-white p-6">
              <p className="flex items-start gap-3">
                <MaterialSymbol
                  name="location_on"
                  className="text-[20px] text-accent shrink-0 mt-0.5"
                />
                <span>
                  <span className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                    Head office
                  </span>
                  <span className="mt-1 block text-[15px] font-semibold text-midnight">
                    {company.addressLine}
                  </span>
                  <span className="mt-1 block text-[13px] leading-[1.6] text-slate-600">
                    {coverage.body}
                  </span>
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-midnight px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-midnight-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Directions &amp; contact details</span>
                <MaterialSymbol
                  name="arrow_forward"
                  className="text-[17px] text-accent-soft transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-md border border-border-subtle bg-white px-5 py-3 text-sm font-semibold text-midnight transition-colors hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Existing customer support
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {departments.map((department) => (
              <div
                key={department.name}
                className="flex flex-col rounded-xl border border-border-subtle bg-white p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-low border border-border-subtle flex items-center justify-center mb-4">
                  <MaterialSymbol
                    name={department.icon}
                    className="text-[20px] text-accent"
                  />
                </div>
                <h3 className="text-[16px] font-bold text-midnight tracking-tight">
                  {department.name}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-slate-600 flex-1">
                  {department.body}
                </p>
                <a
                  href={department.href}
                  className="mt-4 text-[15px] font-bold text-accent transition-colors hover:text-accent-strong break-all"
                >
                  {department.value}
                </a>
                <p className="mt-1 text-[12px] text-slate-500">
                  {department.hours}
                </p>
              </div>
            ))}

            <div className="flex flex-col rounded-xl border border-border-subtle bg-midnight p-6 text-white">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center mb-4">
                <MaterialSymbol
                  name="emergency_home"
                  className="text-[20px] text-accent-soft"
                />
              </div>
              <h3 className="text-[16px] font-bold tracking-tight">
                Breakdown out of hours
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-slate-300 flex-1">
                Contract customers have 24-hour cover, all 365 days. Calls are
                logged and escalated to a named supervisor if the response
                window is at risk.
              </p>
              <Link
                href="/sla-policy"
                className="group mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-soft"
              >
                Read the response policy
                <MaterialSymbol
                  name="arrow_forward"
                  className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
