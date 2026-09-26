import type { Metadata } from "next";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve — Government, Education, Defence, Media & More",
  description:
    "Scantech Info Systems delivers IT infrastructure across government, education, defence and research, banking, media, healthcare, manufacturing, corporate offices, hospitality and construction.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Ten sectors, and the clients who evidence each one"
        lede="Buyers screen vendors on whether they have done this before for an organisation like theirs. Every sector below names the specific problem we solve there, and the organisations from our own client record that stand behind it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        primary={{ label: "Request a Site Survey", href: "/contact" }}
        secondary={{ label: "See the client record", href: "/clients" }}
        note="100+ institutional clients across Telangana and Andhra Pradesh"
      />

      <Section tone="white">
        <div className="space-y-6">
          {industries.map((industry, index) => (
            <article
              key={industry.id}
              id={industry.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 rounded-xl border border-border-subtle bg-white p-7 sm:p-8 scroll-mt-24"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-midnight flex items-center justify-center shrink-0">
                    <MaterialSymbol
                      name={industry.icon}
                      className="text-[22px] text-white"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[19px] font-bold text-midnight tracking-tight">
                      {industry.name}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                  {industry.problem}
                </p>
              </div>

              <div className="lg:col-span-7 lg:border-l lg:border-border-subtle lg:pl-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
                  From our client record
                </p>
                <ul className="flex flex-wrap gap-2">
                  {industry.clients.map((client) => (
                    <li
                      key={client}
                      className="rounded-md border border-border-subtle bg-surface-low px-2.5 py-1.5 text-[12px] font-medium text-slate-600"
                    >
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        heading="Not sure we have done your sector?"
        body="Ask. If we have delivered something close, we will show you the engagement. If we have not, we will say so rather than claim it."
        primary={{ label: "Contact Scantech", href: "/contact" }}
        secondary={{ label: "Read the delivery record", href: "/case-studies" }}
      />
    </>
  );
}
