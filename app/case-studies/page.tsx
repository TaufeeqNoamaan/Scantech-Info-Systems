import type { Metadata } from "next";
import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { caseStudies, otherDeliveredSystems } from "@/lib/data/case-studies";
import { cablingProjects } from "@/lib/data/clients";

export const metadata: Metadata = {
  title: "Case Studies & Delivery Record — Campus Networks, Hospitals & Systems",
  description:
    "Named engagements delivered by Scantech Info Systems: campus structured cabling, hospital networks, banking systems and newspaper production systems — with the year each was delivered.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery Record"
        title="Named projects, with the year they were delivered"
        lede="Client, sector, year and the scope we actually delivered. Where a client cannot be named publicly we say so rather than replacing the name with something invented."
        crumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        primary={{ label: "Discuss a similar project", href: "/contact" }}
        secondary={{ label: "See all clients", href: "/clients" }}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="flex flex-col rounded-xl border border-border-subtle bg-white p-7 transition-all duration-300 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                <span>{study.sector}</span>
                {study.year ? (
                  <>
                    <span className="text-slate-300">·</span>
                    <span>{study.year}</span>
                  </>
                ) : null}
              </div>

              <h2 className="mt-4 text-[19px] font-bold text-midnight tracking-tight leading-[1.3]">
                {study.title}
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-slate-600 flex-1">
                {study.summary}
              </p>

              <p className="mt-5 pt-5 border-t border-slate-100 text-[13px] font-semibold text-midnight">
                {study.client}
              </p>

              <Link
                href={`/case-studies/${study.slug}`}
                className="group mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent"
              >
                Read the engagement
                <MaterialSymbol
                  name="arrow_forward"
                  className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Cabling record */}
      <Section tone="low">
        <div className="max-w-3xl mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
            Also delivered
          </p>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-midnight tracking-tight leading-[1.2]">
            Large networks and structured cabling
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cablingProjects.map((project) => (
            <div
              key={project.client}
              className="rounded-xl border border-border-subtle bg-white p-5"
            >
              <p className="text-[14px] font-semibold text-midnight leading-[1.45]">
                {project.client}
              </p>
              {project.year ? (
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">
                  {project.year}
                </p>
              ) : null}
              {project.note ? (
                <p className="mt-1 text-[12px] text-slate-500">{project.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* Software */}
      <Section tone="white">
        <div className="max-w-3xl mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
            Bespoke systems
          </p>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-midnight tracking-tight leading-[1.2]">
            Software still in production
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
            Scantech develops and supports business applications as well as
            infrastructure. These are on the company&apos;s own record of
            delivered projects.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherDeliveredSystems.map((system) => (
            <li
              key={system}
              className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface-low p-5"
            >
              <MaterialSymbol
                name="check_circle"
                className="text-accent text-[18px] shrink-0 mt-0.5"
              />
              <span className="text-[14px] leading-[1.6] text-slate-600">
                {system}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        heading="Have a project like one of these?"
        body="Campus cabling, a hospital network, a system that does not exist yet — the first step is the same either way. Tell us the requirement and we will survey the site before quoting."
        primary={{ label: "Request a Site Survey", href: "/contact" }}
        secondary={{ label: "How we work", href: "/services" }}
      />
    </>
  );
}
