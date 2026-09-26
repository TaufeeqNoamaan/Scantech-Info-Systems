import type { Metadata } from "next";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CtaBand } from "@/components/ui/CtaBand";
import { cablingProjects, estateFacts } from "@/lib/data/clients";
import { allClients } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Our Clients — Over 100 Organisations Across Telangana & Andhra Pradesh",
  description:
    "Defence and research establishments, universities, government departments, hospitals, media houses and industry that Scantech Info Systems supplies, installs and maintains infrastructure for.",
  alternates: { canonical: "/clients" },
};

/**
 * Cabling engagements grouped by delivery year.
 *
 * A flat three-column table was the obvious rendering and the wrong one — the
 * year is the only dimension that carries meaning here, so grouping by it turns
 * a list of rows into a chronology. Projects with no recorded year come last
 * under their own heading rather than being padded with a dash.
 */
function groupByYear() {
  const dated = new Map<string, typeof cablingProjects>();
  const undated: typeof cablingProjects = [];

  for (const project of cablingProjects) {
    if (!project.year) {
      undated.push(project);
      continue;
    }
    const existing = dated.get(project.year) ?? [];
    existing.push(project);
    dated.set(project.year, existing);
  }

  const groups = [...dated.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([year, projects]) => ({ year, projects }));

  if (undated.length) {
    groups.push({ year: "Ongoing", projects: undated });
  }
  return groups;
}

export default function ClientsPage() {
  const yearGroups = groupByYear();

  return (
    <>
      <PageHero
        eyebrow="Client Record"
        title="Over 100 organisations, across ten sectors"
        lede="These are organisations Scantech Info Systems has supplied, installed and maintained infrastructure for — defence and research establishments, universities, government departments, hospitals, media houses and industry."
        crumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
        primary={{ label: "Discuss your requirement", href: "/contact" }}
        secondary={{ label: "Industries we serve", href: "/industries" }}
        note={`${allClients.length} named organisations on record`}
      />

      {/* Estate facts */}
      <Section tone="white" size="sm">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {estateFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 70} className="h-full">
              <div className="group h-full rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
                <MaterialSymbol
                  name={fact.icon}
                  className="text-[22px] text-accent transition-transform duration-300 group-hover:scale-110"
                />
                <dd className="numeral mt-4 text-[22px] font-bold tracking-tight text-midnight">
                  {fact.value}
                </dd>
                <dt className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                  {fact.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Cabling chronology */}
      <Section tone="low">
        <Reveal className="mb-12 max-w-2xl">
          <SectionEyebrow index="01">Large networks & structured cabling</SectionEyebrow>
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
            Campus-scale builds, by the year they landed
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
            Engagements recorded with their delivery year. The same engineering
            bench that built these still answers the phone.
          </p>
        </Reveal>

        <div className="space-y-10">
          {yearGroups.map((group, groupIndex) => (
            <Reveal
              key={group.year}
              delay={groupIndex * 70}
              className="grid grid-cols-1 gap-6 border-t border-border-subtle pt-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-3">
                <p className="numeral text-[34px] font-bold leading-none tracking-tight text-slate-300 sm:text-[42px]">
                  {group.year}
                </p>
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  {group.projects.length}{" "}
                  {group.projects.length === 1 ? "engagement" : "engagements"}
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-9">
                {group.projects.map((project) => (
                  <li
                    key={project.client}
                    className="group flex items-start gap-3 rounded-xl border border-border-subtle bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md"
                  >
                    <MaterialSymbol
                      name="cable"
                      className="mt-0.5 shrink-0 text-[19px] text-accent transition-transform duration-300 group-hover:scale-110"
                    />
                    <span>
                      <span className="block text-[14px] font-semibold leading-[1.45] text-midnight">
                        {project.client}
                      </span>
                      {project.note ? (
                        <span className="mt-1 block text-[12px] leading-[1.5] text-slate-500">
                          {project.note}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Full list */}
      <Section tone="white">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow index="02">Complete record</SectionEyebrow>
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
              The full client list
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
              {allClients.length} named organisations, listed alphabetically.
              Grouped by sector on the{" "}
              <a
                href="/industries"
                className="link-sweep font-semibold text-accent"
              >
                industries page
              </a>
              .
            </p>
          </div>
          <ArrowLink href="/industries" className="shrink-0">
            View by sector
          </ArrowLink>
        </Reveal>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allClients.map((client, index) => (
            <Reveal
              as="li"
              key={client}
              delay={Math.min(index, 30) * 12}
              className="group flex min-h-[76px] items-center gap-3 bg-white px-5 py-4 transition-colors duration-300 hover:bg-surface-low"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-accent"
              />
              <span className="text-[13px] font-medium leading-[1.45] text-slate-600 transition-colors duration-300 group-hover:text-midnight">
                {client}
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand
        heading="Join a client list that has grown for three decades"
        body="Most of our work now comes from organisations we already maintain something for, or from somebody they told. Tell us what the site has to do and we will tell you what it needs."
        primary={{ label: "Request a Site Survey", href: "/contact" }}
        secondary={{ label: "Talk to support", href: "/support" }}
        note="Client names are published from Scantech's own records. Availability of any individual reference is confirmed on request."
      />
    </>
  );
}
