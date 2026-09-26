import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { company } from "@/lib/content";
import { company as companyFacts } from "@/lib/data/company";
import { siteUrl } from "@/lib/site";

import "./globals.css";

/**
 * Both typefaces are variable fonts, so the full weight range used by the
 * design (`Inter` 300–800, `Plus Jakarta Sans` 500–800) is covered without
 * shipping multiple static instances. `next/font` self-hosts them at build
 * time, which removes the third-party render-blocking request the original
 * prototype made to fonts.googleapis.com.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const siteTitle =
  "Scantech Info Systems | IT Infrastructure, Hardware AMC & Networking, Hyderabad";

const siteDescription =
  "Scantech Info Systems has supplied, installed and maintained computer hardware, software, peripherals and networking since 1996. Structured cabling, network design, annual maintenance contracts, IP surveillance and IT facility management across Telangana and Andhra Pradesh.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Scantech Info Systems",
  },
  description: siteDescription,
  applicationName: "Scantech Info Systems",
  keywords: [
    "IT infrastructure Hyderabad",
    "AMC Hyderabad",
    "annual maintenance contract",
    "structured cabling",
    "network design",
    "CCTV installation Hyderabad",
    "IP surveillance",
    "access control",
    "IT facility management",
    "computer hardware dealer Hyderabad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Scantech Info Systems",
    url: "/",
    locale: "en_US",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

/**
 * Organization schema.
 *
 * The address now carries a city and region, so it is worth asserting. `street`
 * and `postalCode` are still empty at source, which is what keeps this an
 * `Organization` rather than a `LocalBusiness` eligible for the local pack —
 * supplying those two values is the remaining step.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}${company.logo}`,
  description: company.description,
  email: company.email,
  telephone: company.phoneDisplay,
  foundingDate: "1996",
  address: {
    "@type": "PostalAddress",
    streetAddress: companyFacts.address.area,
    addressLocality: companyFacts.address.city,
    addressRegion: companyFacts.address.region,
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "State", name: "Telangana" },
    { "@type": "State", name: "Andhra Pradesh" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        {/*
          Scroll-revealed sections start at `opacity: 0` and are animated in by
          `Reveal`. If JavaScript never runs, nothing would ever reveal them —
          so with scripting disabled every one of them is forced visible.
        */}
        <noscript>
          <style>{`.reveal{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="bg-white text-slate-700 antialiased selection:bg-midnight selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-midnight"
        >
          Skip to content
        </a>
        <UtilityBar />
        <SiteHeader />
        <main className="w-full" id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          // Static, authored here — not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
