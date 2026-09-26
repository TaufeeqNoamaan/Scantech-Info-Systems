import type { Metadata } from "next";
import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { printDocuments, resourceGroups } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Resources — Service Catalogue, Contract Scopes & Company Profile",
  description:
    "Reference material from Scantech Info Systems: the full service catalogue, maintenance contract scopes, service level policy, company profile and delivery record.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Reference material, open to read"
        lede="No gate, no form, no email address required. Everything a buyer or a procurement team needs to evaluate Scantech is on this site in full."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        primary={{ label: "Ask us for a document", href: "/contact" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceGroups.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="group flex flex-col rounded-xl border border-border-subtle bg-white p-7 transition-all duration-300 hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="w-11 h-11 rounded-lg bg-surface-low border border-border-subtle flex items-center justify-center mb-5">
                <MaterialSymbol
                  name={resource.icon}
                  className="text-[22px] text-midnight"
                />
              </div>
              <h2 className="text-[17px] font-bold text-midnight tracking-tight">
                {resource.title}
              </h2>
              <p className="mt-2 text-[14px] leading-[1.65] text-slate-600 flex-1">
                {resource.body}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-midnight transition-colors group-hover:text-accent">
                {resource.cta}
                <MaterialSymbol
                  name="arrow_forward"
                  className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-midnight tracking-tight leading-[1.2]">
              Printed documents
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
              The pack that procurement and vendor-registration teams normally
              ask for. These are issued on request while download delivery is
              built; the content behind each one is already available on this
              site, linked above.
            </p>
            <ul className="mt-6 space-y-3">
              {printDocuments.map((document) => (
                <li
                  key={document}
                  className="flex items-start gap-3 rounded-xl border border-border-subtle bg-white p-5"
                >
                  <MaterialSymbol
                    name="description"
                    className="text-accent text-[20px] shrink-0 mt-0.5"
                  />
                  <span className="text-[14px] leading-[1.6] text-slate-600">
                    {document}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border-subtle bg-midnight p-8 text-white">
              <MaterialSymbol name="markunread_mailbox" className="text-[26px] text-accent-soft" />
              <h2 className="mt-4 text-[19px] font-bold tracking-tight">
                Request the pack
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-slate-300">
                Send us your vendor registration requirements and we will issue
                the documents against them — rather than sending a generic folder
                and following up twice.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-midnight transition-colors hover:bg-slate-100"
              >
                Contact Scantech
                <MaterialSymbol
                  name="arrow_forward"
                  className="text-[17px] text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Could not find what you were looking for?"
        body="If a document, certificate or reference is missing from this page, ask for it directly — we would rather issue it than have you assume it does not exist."
        primary={{ label: "Contact Scantech", href: "/contact" }}
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </>
  );
}
