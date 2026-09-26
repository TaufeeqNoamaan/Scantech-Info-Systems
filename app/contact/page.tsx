import type { Metadata } from "next";
import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { company, coverage, departments } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Scantech Info Systems — Masab Tank, Hyderabad",
  description:
    "Head office address, sales and support telephone numbers, email, office hours and coverage area for Scantech Info Systems in Hyderabad, Telangana.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Masab Tank, Hyderabad"
        lede="Sales, service and accounts are separate lines so the right person answers. Contract customers can reach support at any hour, any day of the year."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        primary={{ label: "Browse services", href: "/services" }}
        secondary={{ label: "Customer support", href: "/support" }}
        note={coverage.regional}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Address */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-xl border border-border-subtle bg-surface-low p-8">
                <MaterialSymbol name="location_on" className="text-[26px] text-accent" />
                <h2 className="mt-4 text-[20px] font-bold text-midnight tracking-tight">
                  Head office
                </h2>
                <address className="mt-3 not-italic text-[15px] leading-[1.75] text-slate-600">
                  <span className="block font-semibold text-midnight">
                    {company.name}
                  </span>
                  {company.address.area}
                  <br />
                  {company.address.city}, {company.address.region}
                  <br />
                  {company.address.country}
                </address>
                <p className="mt-4 text-[13px] leading-[1.65] text-slate-500">
                  Centrally located in the city, which is why engineers can be
                  moving inside the twin cities quickly.
                </p>

                <div className="mt-6 pt-6 border-t border-border-subtle space-y-2.5 text-[13px]">
                  <p className="flex items-center gap-2 text-slate-600">
                    <MaterialSymbol name="schedule" className="text-[17px] text-accent" />
                    {company.supportHours}
                  </p>
                  <p className="flex items-center gap-2 text-slate-600">
                    <MaterialSymbol name="nightlight" className="text-[17px] text-accent" />
                    Support: 24 hours, all 365 days
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-border-subtle bg-white p-6">
                <h2 className="text-[15px] font-bold text-midnight tracking-tight">
                  Visiting
                </h2>
                <p className="mt-2 text-[13px] leading-[1.7] text-slate-600">
                  For a project discussion or a vendor registration visit, call
                  ahead and ask for the sales line so somebody is expecting you.
                  For a service call, the helpdesk is the faster route — you do
                  not need to come to us for a fault.
                </p>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="lg:col-span-7">
            <h2 className="text-[24px] sm:text-[28px] font-bold text-midnight tracking-tight">
              Who to contact
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-slate-600">
              Three separate routes, so a breakdown call does not queue behind a
              quotation request.
            </p>

            <div className="mt-7 space-y-4">
              {departments.map((department) => (
                <div
                  key={department.name}
                  className="flex items-start gap-4 rounded-xl border border-border-subtle bg-white p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-surface-low border border-border-subtle flex items-center justify-center shrink-0">
                    <MaterialSymbol
                      name={department.icon}
                      className="text-[21px] text-accent"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-bold text-midnight tracking-tight">
                      {department.name}
                    </h3>
                    <p className="mt-1 text-[13px] leading-[1.6] text-slate-600">
                      {department.body}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                      <a
                        href={department.href}
                        className="text-[16px] font-bold text-accent transition-colors hover:text-accent-strong break-all"
                      >
                        {department.value}
                      </a>
                      <span className="text-[12px] text-slate-500">
                        {department.hours}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border-subtle bg-surface-low p-7">
              <h2 className="text-[16px] font-bold text-midnight tracking-tight">
                Procurement &amp; vendor registration
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-slate-600">
                Registration packs, certification copies and references are
                issued on request — tell us what your process requires and we
                will issue documents against it rather than sending a generic
                folder.{" "}
                <Link
                  href="/resources"
                  className="font-semibold text-accent hover:text-accent-strong"
                >
                  See the resources page
                </Link>
                .
              </p>
            </div>

            <div className="mt-5 rounded-xl border border-border-subtle bg-midnight p-7 text-white">
              <div className="flex items-start gap-4">
                <MaterialSymbol name="map" className="text-[24px] text-accent-soft shrink-0" />
                <div>
                  <h2 className="text-[16px] font-bold tracking-tight">
                    Coverage
                  </h2>
                  <p className="mt-2 text-[14px] leading-[1.7] text-slate-300">
                    {coverage.body}
                  </p>
                  <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent-soft">
                    {coverage.base} · {coverage.primary} · {coverage.regional}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Tell us what the site has to do"
        body="A short description of the premises, the headcount and what is failing is usually enough for us to tell you whether a survey is worth arranging."
        primary={{ label: `Call ${company.phoneDisplay}`, href: company.phoneHref }}
        secondary={{ label: `Email ${company.email}`, href: company.emailHref }}
        note={`${company.name} · ${company.addressLine} · ${company.supportHours}`}
      />
    </>
  );
}
