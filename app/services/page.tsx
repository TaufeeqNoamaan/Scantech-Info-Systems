import type { Metadata } from "next";
import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/ui/CtaBand";
import { services, servicesByCategory } from "@/lib/data/services";
import { engagementSteps } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Services — Network, Hardware, Security & Facility Management",
  description:
    "The complete Scantech Info Systems service catalogue: structured cabling, network design, enterprise wireless, hardware supply, maintenance contracts, IP surveillance, access control, IT facility management and turnkey projects.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Catalogue"
        title="Everything we supply, install and maintain"
        lede={`${services.length} service lines across five disciplines. One contract, one engineering bench of 119 directly employed engineers, one point of accountability.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        primary={{ label: "Request a Site Survey", href: "/contact" }}
        secondary={{ label: "Compare AMC tiers", href: "/amc" }}
        note="Hyderabad · Telangana · Andhra Pradesh"
      />

      {servicesByCategory.map(({ category, items }, groupIndex) => (
        <Section key={category.id} id={category.id} tone={groupIndex % 2 === 0 ? "white" : "low"}>
          <div className="flex items-start gap-4 pb-6 mb-8 border-b border-border-subtle">
            <div className="w-12 h-12 rounded-lg bg-midnight flex items-center justify-center shrink-0">
              <MaterialSymbol name={category.icon} className="text-[24px] text-white" />
            </div>
            <div>
              <h2 className="text-[22px] sm:text-[26px] font-bold text-midnight tracking-tight">
                {category.name}
              </h2>
              <p className="mt-1.5 text-[15px] leading-[1.65] text-slate-600">
                {category.summary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {items.map((service) => (
              <article
                key={service.slug}
                className="flex flex-col rounded-xl border border-border-subtle bg-white p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MaterialSymbol
                    name={service.icon}
                    className="text-[22px] text-accent"
                  />
                  <h3 className="text-[18px] font-bold text-midnight tracking-tight">
                    {service.name}
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.7] text-slate-600">
                  {service.summary}
                </p>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {service.capabilities.slice(0, 3).map((capability) => (
                    <li key={capability} className="flex items-start gap-2.5">
                      <MaterialSymbol
                        name="check"
                        className="text-accent text-[16px] shrink-0 mt-0.5"
                      />
                      <span className="text-[13px] leading-[1.6] text-slate-600">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="group mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-midnight transition-colors hover:text-accent"
                >
                  Full scope and inclusions
                  <MaterialSymbol
                    name="arrow_forward"
                    className="text-[15px] text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="low">
        <SectionHeading
          eyebrow="How We Work"
          title="Requirement, survey, written scope, then delivery"
          description="Nothing gets installed before you have approved a specification. This is the sequence Scantech has run on every engagement since 1996."
        />
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-border-subtle bg-white p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-midnight text-[13px] font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[16px] font-bold text-midnight tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-slate-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        heading="Not sure which of these you need?"
        body="Describe the site — headcount, buildings, what is failing — and we will tell you what the requirement actually is before quoting anything."
        primary={{ label: "Request a Site Survey", href: "/contact" }}
        secondary={{ label: "Read the AMC scopes", href: "/amc" }}
        note="Head office: Masab Tank, Hyderabad · Covering Telangana and Andhra Pradesh"
      />
    </>
  );
}
