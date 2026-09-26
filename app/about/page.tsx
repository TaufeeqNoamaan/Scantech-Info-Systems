import type { Metadata } from "next";
import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { LogoWall } from "@/components/ui/LogoWall";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import {
  authorisedBrands,
  company,
  coverage,
  credentials,
  engineeringBench,
  milestones,
  partnerLogosWithAssets,
} from "@/lib/data/company";
import { estateFacts } from "@/lib/data/clients";

export const metadata: Metadata = {
  title: "About Scantech Info Systems — Since 1996, Hyderabad",
  description:
    "Scantech Info Systems has supplied, installed and maintained computer hardware, software, peripherals and networking since 1996. ISO 9001 certified, 119 directly employed engineers, 15,000+ computers under maintenance contract.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Scantech"
        title="Trading since 1996, engineering since before that"
        lede={company.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        primary={{ label: "See the delivery record", href: "/case-studies" }}
        secondary={{ label: "Our clients", href: "/clients" }}
        note={`Head office: ${company.addressLine}`}
      />

      {/* Estate facts */}
      <Section tone="white" size="sm">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {estateFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-border-subtle bg-white p-6"
            >
              <MaterialSymbol name={fact.icon} className="text-[22px] text-accent" />
              <dd className="mt-4 text-[24px] font-bold text-midnight tracking-tight">
                {fact.value}
              </dd>
              <dt className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                {fact.label}
              </dt>
              <p className="mt-3 text-[13px] leading-[1.6] text-slate-600">
                {fact.detail}
              </p>
            </div>
          ))}
        </dl>
      </Section>

      {/* History */}
      <Section tone="low">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
            Company record
          </p>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-midnight tracking-tight leading-[1.2]">
            From engineering consultancy to complete IT solutions
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
            Scantech began with a vision of helping customers shape a better
            tomorrow — first as an engineering consultancy, then as a supplier of
            the systems that engineering practices ran on, and eventually as the
            firm that designs, installs and maintains the whole infrastructure.
            The through-line has not changed: understand the requirement before
            recommending anything.
          </p>
        </div>

        <ol className="mt-12 space-y-0">
          {milestones.map((milestone, index) => (
            <li key={`${milestone.year}-${milestone.title}`} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Connector */}
              <div className="relative flex flex-col items-center shrink-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-midnight text-[11px] font-bold text-white">
                  {index + 1}
                </span>
                {index < milestones.length - 1 ? (
                  <span className="w-px flex-1 bg-border-subtle" aria-hidden="true" />
                ) : null}
              </div>

              <div className="pb-2">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
                  {milestone.year}
                </p>
                <h3 className="mt-1.5 text-[18px] font-bold text-midnight tracking-tight">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-slate-600 max-w-2xl">
                  {milestone.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Credentials */}
      <Section tone="white">
        <div className="max-w-3xl mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
            Credentials
          </p>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-midnight tracking-tight leading-[1.2]">
            What stands behind the contract
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
            Procurement teams ask for these before onboarding a vendor. Where a
            certificate number or a current revision is needed for your vendor
            registration, ask and we will issue it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential) => (
            <div
              key={credential.title}
              className="rounded-xl border border-border-subtle bg-white p-6"
            >
              <MaterialSymbol
                name={credential.icon}
                className="text-[22px] text-accent"
              />
              <h3 className="mt-4 text-[15px] font-bold text-midnight tracking-tight">
                {credential.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-slate-600">
                {credential.body}
              </p>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="mt-12 rounded-xl border border-border-subtle bg-surface-low p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-[16px] font-bold tracking-tight text-midnight">
                Authorised dealer / reseller
              </h3>
              <p className="mt-2 max-w-3xl text-[14px] leading-[1.7] text-slate-600">
                Hardware, software, peripherals and networking are supplied
                through official distribution, so warranty and service
                entitlement stay intact.
              </p>
            </div>
            <p className="numeral shrink-0 text-[28px] font-bold leading-none tracking-tight text-midnight">
              {authorisedBrands.length}
            </p>
          </div>

          <div className="mt-6">
            <LogoWall variant="grid" />
          </div>

          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">
            Also authorised for
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {authorisedBrands
              .filter(
                (brand) =>
                  !partnerLogosWithAssets.some(
                    (logo) => logo.name.toLowerCase() === brand.toLowerCase(),
                  ),
              )
              .map((brand) => (
                <li
                  key={brand}
                  className="rounded-md border border-border-subtle bg-white px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-600 transition-colors duration-300 hover:border-accent/40 hover:text-midnight"
                >
                  {brand}
                </li>
              ))}
          </ul>
        </div>
      </Section>

      {/* Engineering bench */}
      <Section tone="low">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
              The engineering bench
            </p>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-midnight tracking-tight leading-[1.2]">
              {engineeringBench.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
              {engineeringBench.body}
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
              {engineeringBench.qualifications}
            </p>
            <Link
              href="/careers"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-midnight transition-colors hover:text-accent"
            >
              Working at Scantech
              <MaterialSymbol
                name="arrow_forward"
                className="text-[17px] text-accent transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <dl className="grid grid-cols-2 gap-6">
              {engineeringBench.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border-subtle bg-white p-6"
                >
                  <dd className="text-[26px] font-bold text-midnight tracking-tight">
                    {stat.value}
                  </dd>
                  <dt className="mt-1.5 text-[13px] font-semibold text-slate-500">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Coverage */}
      <Section tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
              Coverage
            </p>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-midnight tracking-tight leading-[1.2]">
              Where we work
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
              {coverage.body}
            </p>
            <div className="mt-6 rounded-xl border border-border-subtle bg-surface-low p-6">
              <p className="flex items-start gap-3">
                <MaterialSymbol
                  name="location_on"
                  className="text-[20px] text-accent shrink-0 mt-0.5"
                />
                <span>
                  <span className="block text-[15px] font-semibold text-midnight">
                    {company.addressLine}
                  </span>
                  <span className="mt-1 block text-[13px] text-slate-600">
                    Base for all on-site attendance
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {coverage.notes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 rounded-xl border border-border-subtle bg-white p-5"
                >
                  <MaterialSymbol
                    name="check_circle"
                    className="text-accent text-[18px] shrink-0 mt-0.5"
                  />
                  <span className="text-[14px] leading-[1.65] text-slate-600">
                    {note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Come and meet us, or ask us to come to you"
        body="The head office is at Masab Tank in central Hyderabad. For anything larger than a single site, a survey is the fastest way to a real number."
        primary={{ label: "Request a Site Survey", href: "/contact" }}
        secondary={{ label: "See our clients", href: "/clients" }}
        note="Scantech Info Systems · Masab Tank, Hyderabad · Covering Telangana and Andhra Pradesh"
      />
    </>
  );
}
