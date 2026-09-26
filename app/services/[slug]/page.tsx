import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import {
  getService,
  serviceCategories,
  services,
  type Service,
} from "@/lib/data/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: `${service.name} — Scantech Info Systems`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

function categoryName(service: Service): string {
  return (
    serviceCategories.find((category) => category.id === service.category)?.name ??
    "Services"
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = (service.related ?? [])
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is Service => Boolean(item))
    .filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={categoryName(service)}
        title={service.name}
        lede={service.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        primary={{ label: "Request a Site Survey", href: "/contact" }}
        secondary={{ label: "All services", href: "/services" }}
      />

      {/* What's included */}
      <Section tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
                What&apos;s included
              </p>
              <h2 className="text-[26px] sm:text-[30px] font-bold text-midnight tracking-tight leading-[1.2]">
                The scope, itemised
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                Everything listed here is delivered by our own engineers. If
                something you need is not on the list, say so — the scope is
                written around your site, not around this page.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {service.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3">
                  <MaterialSymbol
                    name="check_circle"
                    className="text-accent text-[18px] shrink-0 mt-0.5"
                  />
                  <span className="text-[15px] leading-[1.65] text-slate-600">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Audience / brands / delivery */}
      <Section tone="low">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border-subtle bg-white p-7">
            <MaterialSymbol name="groups" className="text-[24px] text-accent" />
            <h2 className="mt-4 text-[16px] font-bold text-midnight tracking-tight">
              Who this is for
            </h2>
            <p className="mt-2.5 text-[14px] leading-[1.7] text-slate-600">
              {service.audience}
            </p>
          </div>

          {service.brands?.length ? (
            <div className="rounded-xl border border-border-subtle bg-white p-7">
              <MaterialSymbol name="storefront" className="text-[24px] text-accent" />
              <h2 className="mt-4 text-[16px] font-bold text-midnight tracking-tight">
                Platforms we deliver on
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.brands.map((brand) => (
                  <li
                    key={brand}
                    className="rounded-md border border-border-subtle bg-surface-low px-2.5 py-1 text-[12px] font-semibold text-slate-600"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {service.delivery ? (
            <div className="rounded-xl border border-border-subtle bg-white p-7">
              <MaterialSymbol name="event_available" className="text-[24px] text-accent" />
              <h2 className="mt-4 text-[16px] font-bold text-midnight tracking-tight">
                How it is delivered
              </h2>
              <p className="mt-2.5 text-[14px] leading-[1.7] text-slate-600">
                {service.delivery}
              </p>
            </div>
          ) : null}
        </div>
      </Section>

      {/* Related services */}
      {related.length ? (
        <Section tone="white" size="sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
            Usually bought together
          </p>
          <h2 className="text-[22px] sm:text-[26px] font-bold text-midnight tracking-tight mb-8">
            Related services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex flex-col rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MaterialSymbol name={item.icon} className="text-[20px] text-accent" />
                  <h3 className="text-[15px] font-bold text-midnight tracking-tight">
                    {item.name}
                  </h3>
                </div>
                <p className="text-[13px] leading-[1.65] text-slate-600 flex-1">
                  {item.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-midnight transition-colors group-hover:text-accent">
                  View scope
                  <MaterialSymbol
                    name="arrow_forward"
                    className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand
        heading={`Discuss ${service.name.toLowerCase()} for your site`}
        body="A survey costs nothing and usually changes the specification. Tell us what the site has to do and we will tell you what it needs — including where a cheaper option would do the job."
        primary={{ label: "Request a Site Survey", href: "/contact" }}
        secondary={{ label: "See the AMC tiers", href: "/amc" }}
        note="Head office: Masab Tank, Hyderabad · 119 directly employed service engineers · 24×7 × 365 cover"
      />
    </>
  );
}
