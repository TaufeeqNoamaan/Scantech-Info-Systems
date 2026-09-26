import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { caseStudies, getCaseStudy } from "@/lib/data/case-studies";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };

  return {
    title: `${study.client} — Case Study — Scantech Info Systems`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${study.sector}${study.year ? ` · ${study.year}` : ""}`}
        title={study.title}
        lede={study.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.client },
        ]}
        primary={{ label: "Discuss a similar project", href: "/contact" }}
        secondary={{ label: "All case studies", href: "/case-studies" }}
        note={study.client}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
                The situation
              </p>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-midnight tracking-tight leading-[1.25]">
                What the client needed
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
                {study.situation}
              </p>
            </div>

            <div className="mt-12 max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
                What we delivered
              </p>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-midnight tracking-tight leading-[1.25]">
                The scope, itemised
              </h2>
              <ul className="mt-5 space-y-4">
                {study.delivered.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <MaterialSymbol
                      name="check_circle"
                      className="text-accent text-[18px] shrink-0 mt-0.5"
                    />
                    <span className="text-[15px] leading-[1.7] text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 max-w-2xl rounded-xl border border-border-subtle bg-surface-low p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
                What it demonstrates
              </p>
              <p className="text-[15px] leading-[1.8] text-slate-700">
                {study.demonstrates}
              </p>
            </div>
          </div>

          {/* Fact panel */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="rounded-xl border border-border-subtle bg-white p-6">
                <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  Engagement record
                </h2>
                <dl className="mt-4 space-y-3.5">
                  <div>
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                      Client
                    </dt>
                    <dd className="mt-0.5 text-[14px] font-semibold text-midnight">
                      {study.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                      Sector
                    </dt>
                    <dd className="mt-0.5 text-[14px] text-slate-600">
                      {study.sector}
                    </dd>
                  </div>
                  {study.year ? (
                    <div>
                      <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                        Delivered
                      </dt>
                      <dd className="mt-0.5 text-[14px] text-slate-600">
                        {study.year}
                      </dd>
                    </div>
                  ) : null}
                  {study.scope?.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 text-[14px] text-slate-600">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {others.length ? (
                <div className="rounded-xl border border-border-subtle bg-surface-low p-6">
                  <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Other engagements
                  </h2>
                  <ul className="mt-4 space-y-4">
                    {others.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/case-studies/${item.slug}`}
                          className="group block"
                        >
                          <span className="block text-[14px] font-semibold text-midnight leading-[1.45] transition-colors group-hover:text-accent">
                            {item.client}
                          </span>
                          <span className="mt-0.5 block text-[12px] text-slate-500">
                            {item.sector}
                            {item.year ? ` · ${item.year}` : ""}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand
        heading="Ask us to walk you through this engagement"
        body="If the project above resembles something you are planning, we can talk you through the sequencing, the constraints and what we would do differently today."
        primary={{ label: "Contact Scantech", href: "/contact" }}
        secondary={{ label: "All case studies", href: "/case-studies" }}
        note="Client names are published from Scantech's own delivery records."
      />
    </>
  );
}
