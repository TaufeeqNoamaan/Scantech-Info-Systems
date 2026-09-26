# Scantech Info Systems — Roadmap

## Phasing

| Phase | Scope | Definition of done |
| ----- | ----- | ------------------ |
| **1. Content** | Read-only site. No forms, no booking, no integrations. | A buyer can understand what you sell, who you sell it to, that you are credible, and how to phone you — without talking to anyone. |
| **2. SEO** | Discoverability. | Indexed, structured, shareable, ranking for service + city intent. |
| **3. Features** | Anything interactive. | Working form, online booking, downloads. |
| **4. Integrations** | Anything that talks to another system. | CRM, analytics, support desk, consent. |

Everything below Phase 1 is deliberately thin. **Phase 1 is the whole point of this document.**

### Status

| Built | Phase |
| ----- | ----- |
| Mobile navigation drawer, skip-to-content, heading-level fix, anchor scroll offsets, carousel pause + `prefers-reduced-motion` | **1** ✅ |
| **Content and structure — the whole of §1.2 and §1.3 below** | **1** ✅ |
| sitemap.xml, robots.txt, canonical, `metadataBase`, generated OG image, Organization JSON-LD | **2** *(partly done — per-page metadata now written)* |
| Calendly integration — inline embed + popup CTAs, lazy-loaded with fallbacks | **3** *(built, dormant until `NEXT_PUBLIC_CALENDLY_URL` is set)* |
| Consultation form + conversion-event plumbing | **3/4** *(built, deliberately not rendered — a form that discards submissions is worse than none)* |

**Phase 1 is built.** 39 prerendered pages: 16 top-level routes, 17 service pages, 6 case studies.

### What is still owed to Phase 1 — inputs, not work

These are the only things standing between the current build and a site that
should be published. Every one is a fact only Scantech can supply.

| # | Input | Blocks |
| - | ----- | ------ |
| 1 | **Published phone numbers** — the sales and support lines. The build currently carries correctly-formatted placeholders. | Footer, contact, support, SLA, utility bar |
| 2 | **Published email addresses.** Same. | As above |
| 3 | **Street address and postcode** for Masab Tank. City and region are now present. | `LocalBusiness` schema, local search, directions |
| 4 | **Written permission to name clients.** ~120 organisations are currently named, transcribed from Scantech's own publishing. Defence and government names need explicit clearance. | `/clients`, `/industries`, homepage wall |
| 5 | **AMC tier definitions** — what each tier includes and excludes, response windows, contract terms. Currently built from Scantech's own published 1-hour claim plus generic policy wording. | `/amc`, `/sla-policy` |
| 6 | **Case-study outcome numbers.** Deliberately absent — every metric on those pages would have been invented. | `/case-studies` |
| 7 | **Current ISO certificate reference** — the archive says ISO 9001:2008. | `/about` |
| 8 | **Named leadership.** Not published anywhere in the archive, so the section is about the engineering bench instead of people. | `/about` |
| 9 | **Privacy policy and terms review** by counsel before publication. | `/privacy`, `/terms` |
| 10 | **High-resolution hero imagery.** The three hero images are 512×286 and upscale visibly on retina. This is still the largest remaining visual win. | Homepage |


---

# PHASE 1 — Everything

## 1.1 The single biggest gap

**The site names three services. You almost certainly sell fifteen.**

A thirty-year infrastructure firm is being represented by three cards — cabling, hardware AMC, CCTV. There is no mention of networking, Wi-Fi, servers, storage, backups, access control, time & attendance, UPS, managed IT, resident engineers, audits or AV. A buyer shopping for any of those leaves assuming you don't do it.

Fixing that one thing — a complete, grouped service taxonomy — does more for "the customer knows what we do" than everything else in this document combined.

> ⚠️ **The taxonomy in 1.2(c) is my inference** from your existing copy plus what firms like yours typically sell. It must be replaced with your real list before build. Everything else here stands on its own.

---

## 1.2 Homepage — missing elements, section by section

### (a) Utility bar *(new — above the header)*

A thin strip at the very top, above the navy masthead.

| Contains | Why |
| -------- | --- |
| `24×7 emergency support · +1 (800) 555-7226` | The original prototype had a utility bar and it was removed. For a support-led business the emergency number belongs in the very first pixels on screen. |
| `Existing customer? Raise a service request` | Separates support traffic from sales traffic. Today both go to the same place. |
| `Mon–Sat 8:30–19:30` | Sets response expectations before contact. |

### (b) Hero *(exists — needs completing)*

| Missing | Why |
| ------- | --- |
| Trust marker near the headline | There is currently **no credibility signal at all above the fold.** You asked me to remove the stats band earlier, so I am not proposing it back in the same form — see the options in 1.2(d). |
| Coverage of all service lines across the slides | Three slides only ever mention cabling, AMC and CCTV. |
| "Who this is for" qualifier | e.g. one line naming the buyer — *"for corporates, campuses and multi-site operations"* — so a visitor self-selects in the first two seconds. |
| Specific CTAs | *"Explore Service Scopes"* and *"View Camera Packages"* are vague. Point them at real destinations. |

### (c) Services *(exists — must expand from 3 to the full catalogue)*

Present as a scannable grid grouped into 4–5 categories. Each item needs: icon, name, one-line description, 3–4 capability bullets, and a link to its own page.

| Category | Services to confirm |
| -------- | ------------------- |
| **Network & cabling** | Structured cabling (Cat6/Cat6A/fibre) · Rack & patch-panel dressing · Network design, core/distribution switching · VLAN & firewall configuration · Enterprise Wi-Fi (site survey, Wi-Fi 6/6E) |
| **Hardware & contracts** | Desktop / laptop / workstation supply · Servers, storage & backup · Annual Maintenance Contracts (comprehensive & non-comprehensive) · On-site resident engineers / FMS · Managed IT & helpdesk |
| **Security & surveillance** | CCTV / IP surveillance · NVR & storage arrays · Access control (biometric, RFID) · Time & attendance · Video walls & command displays |
| **Infrastructure & power** | UPS & power backup · Data-centre / rack build-out · AV & conference rooms |
| **Advisory** | Annual IT & security audits · Network documentation & as-built handover · Turnkey project management |

Each service also needs, on its own page: *what's included*, *what's not*, *typical timeline*, *brands used*, and *who it's for*.

### (d) Credibility / trust bar *(new — optional but recommended)*

You removed the `30 years · 99.8% SLA · 2-hour response` band, and I am not going to relitigate that. But Phase 1 needs *some* proof marker. Three ways to get it, pick one:

| Option | Form | Notes |
| ------ | ---- | ----- |
| A | A quiet single line under the hero — *"Three decades of enterprise delivery · Authorized OEM partner"* | Lowest visual weight, no big numbers |
| B | An evidence block inside "Why Scantech" | Keeps the homepage calm; still present |
| C | A "By the numbers" strip on the `/about` page only | Homepage stays clean; proof lives one click away |

### (e) Who we serve — industries *(new — high priority)*

Buyers screen vendors by *"have you done this for an organisation like ours?"* There is nothing on the page that answers it.

| Suggested industries to confirm | |
| --- | --- |
| BFSI & financial services | Manufacturing & industrial |
| Healthcare & diagnostics | Logistics & warehousing |
| Education & campuses | Government / PSU / public sector |
| IT/ITES & corporate offices | Retail & hospitality |

Format: 6–8 cards, each with an icon, the industry, and **one line naming the specific problem you solve there** (not a generic sentence).

### (f) AMC plans comparison *(new — the largest commercial gap)*

This is what you actually sell, and it is entirely absent. A comparison table:

| | Comprehensive | Non-comprehensive | On-call |
| --- | --- | --- | --- |
| Parts included | | | |
| Labour | | | |
| Scheduled preventive visits | | | |
| Response window | | | |
| Standby replacement hardware | | | |
| Resident engineer | | | |
| Reporting & asset register | | | |
| Minimum contract term | | | |

Plus a plain-language paragraph: *what counts as a call-out, what isn't covered, how renewals work.*

### (g) Service level commitments *(new)*

Enterprise buyers screen on SLA terms before they will talk.

| Priority | Definition | Response window | Escalation |
| -------- | ---------- | --------------- | ---------- |
| P1 | Site down / security offline | | |
| P2 | Degraded, workaround exists | | |
| P3 | Routine request | | |

Plus: helpdesk hours, how to raise a request, escalation matrix, and monthly/quarterly review cadence.

### (h) How we work *(new)*

Five to seven numbered steps. De-risks choosing a firm the buyer hasn't used:

`Enquiry → Site survey → Written proposal & scope → Mobilisation → Deployment → Documentation & handover → Ongoing support & reviews`

Each step gets one sentence. This one section answers *"what actually happens if I call you?"*

### (i) Case studies *(missing — and the nav already promises them)*

The main menu says **"Client Case Studies"** and the section holds two anonymous quotes. That reads as having nothing to show.

Each case study needs: client name (or sector + size if confidential), the problem, what was deployed, the outcome **in numbers**, and the timeframe. Two or three is enough.

### (j) Client logo wall *(new)*

The cheapest credibility asset in B2B and it is absent. Eight to twelve logos, `Trusted by`, with written permission.

### (k) Certifications & authorisations *(new)*

| To collect | Why |
| ---------- | --- |
| OEM partner certificates / letters (Cisco, Dell, HPE, Lenovo, Hikvision, APC…) | Turns "Authorized Technology Alliances" from a claim into evidence |
| ISO certificate number | Process credibility |
| MSME / Udyam, GST, labour licence, insurance | Procurement teams ask for these before onboarding a vendor |
| Engineer certifications count | Sizing signal — *"N engineers, certified in X, Y, Z"* |

Also: **fix the OEM strip.** It currently shows six company names with generic Material Symbols standing in for their logos. That undercuts the claim it is making. Real logos, real partner tier.

### (l) Leadership & team *(new)*

A thirty-year firm sells on its people. Complete anonymity reads like a shell reseller.

Three to four named people: photo, title, years in the industry, background. Plus one line on the engineering bench — how many engineers, how they are certified, whether they are directly employed (you already claim this in "Why Scantech").

### (m) Why Scantech *(exists — attach evidence)*

Four cards currently assert *"Certified Field Engineers"*, *"Guaranteed SLA Response"*, *"Authorized OEM Procurement"*, *"Transparent Fixed Pricing"* with nothing behind them. Add a number, a certificate or a named proof to each.

### (n) Coverage / service area *(new)*

For on-site work this is the **first** screening question and there is no answer anywhere on the site.

Needs: cities / regions served · on-site radius · response zones · whether multi-city is supported. A map is optional; a list is not.

### (o) Testimonials *(exists — needs attribution)*

Replace anonymous quotes with named people, real roles and client logos. The five gold stars have no review platform behind them — either source them or drop them.

### (p) FAQ *(new — high priority for a read-only site)*

On a site with no forms or booking, the FAQ **is** the sales conversation. Eight to twelve:

*Do you supply and service, or service only? · Which brands do you carry? · Do you cover my city? · What exactly does an AMC include? · How fast can an engineer be on site? · Can you provide a resident engineer? · Will you take over an estate from another vendor? · Do you handle multi-site rollouts? · What are your contract terms and payment terms? · Can you work outside business hours?*

### (q) Downloads / resources *(new)*

Ungated PDFs: capability statement, service catalogue, sample AMC scope, company profile. Ungated because Phase 1 has no lead capture — that is Phase 3.

### (r) Careers teaser *(new)*

One line: *"We're hiring field engineers and project coordinators."* Signals a stable, growing business and links to an interior page.

### (s) Contact *(exists — incomplete)*

| Missing | Why |
| ------- | --- |
| **City, postcode and country** in the address | The current address is *"Technology Plaza, Suite 400"* — a buyer cannot tell what country you are in, and it blocks local search entirely |
| Map + directions link | "Come and meet us" is a trust signal |
| Branch / second office | If you have one, it widens your coverage claim |
| Department routing — sales / support / escalations / accounts | One number and one form for everything is the current state |
| GST / registered legal entity name | Procurement requires it |
| Per-channel hours | e.g. helpdesk vs sales hours |

---

## 1.3 Read-only pages Phase 1 needs

The homepage cannot carry all of this. These are the pages a complete read-only site has:

| Page | Purpose |
| ---- | ------- |
| `/` | Homepage |
| `/services` | Index of the full taxonomy |
| `/services/[slug]` | One per service — 8–15 pages |
| `/amc` | Plans, inclusions, SLA commitments |
| `/industries` | How you serve each sector |
| `/case-studies` + `/case-studies/[slug]` | Proof |
| `/about` | History, leadership, credentials, coverage |
| `/clients` | Logo wall *(or fold into `/about`)* |
| `/support` | SLA, how to raise a request, escalation, contacts |
| `/resources` | Downloads |
| `/careers` | Openings + why work here |
| `/faq` | The full list |
| `/contact` | Address, map, departments |
| `/privacy`, `/terms`, `/sla-policy` | **Currently four dead `#` links.** You are collecting business data with no published privacy policy. |

---

## 1.4 Suggested homepage section order

| # | Section | New? |
| - | ------- | ---- |
| 1 | Utility bar | New |
| 2 | Header + hero carousel | Exists |
| 3 | Credibility marker (option A/B/C from 1.2d) | New |
| 4 | Services — full grouped taxonomy | Expand |
| 5 | Who we serve — industries | New |
| 6 | AMC plans + SLA commitments | New |
| 7 | How we work — process | New |
| 8 | Why Scantech — with evidence | Complete |
| 9 | Case studies | New |
| 10 | Client logo wall | New |
| 11 | Certifications & authorisations | New |
| 12 | Coverage / service area | New |
| 13 | Leadership & engineering bench | New |
| 14 | Testimonials | Complete |
| 15 | FAQ | New |
| 16 | Downloads | New |
| 17 | Careers teaser | New |
| 18 | Contact | Complete |
| 19 | Footer *(social links, credential badges, address block, fix 4 dead links)* | Complete |

That is a long homepage, which is normal for this category. If it feels heavy, items 12, 13 and 16 move to `/about` and `/resources` with a link — the homepage keeps 4, 5, 6, 8, 9, 11 and 15, which are the ones a buyer will not click through for.

---

## 1.5 What I need from you to build Phase 1

Nothing can be built from placeholders except the structure. These are the inputs:

1. **The real service list** — the taxonomy in 1.2(c) is my inference and must be corrected. *(blocking)*
2. **Client logos + written permission**, and whether names can be used in case studies. *(blocking 1.2i, 1.2j)*
3. **Two or three case studies** with outcome numbers.
4. **Leadership** — names, photos, titles, years, background.
5. **Certifications** — ISO numbers, MSME/Udyam, GST, labour licence, insurance; OEM partner tiers and certificate images.
6. **Full postal address(es)** and the areas you cover. *(blocking 1.2n, 1.2s)*
7. **Your actual AMC plan definitions** — what each tier includes and excludes, response windows, contract terms. *(blocking 1.2f, 1.2g)*
8. **Privacy policy, terms and SLA text.** *(blocking the four dead links)*
9. **Company history** — founding year and a few milestones, for `/about`.
10. **Social profiles** — LinkedIn at minimum.

Items 1, 6, 7 and 8 are hard blockers; the rest can be phased in.

---

# Phase 2 — SEO

Not detailed here by request. What already shipped: sitemap, robots.txt, canonical, `metadataBase`, generated OG image, Organization JSON-LD, Twitter card. What remains: per-page metadata, service and location landing pages, `LocalBusiness` schema *(needs the address from 1.5.6)*, image alt coverage, Core Web Vitals, and search console setup.

---

# Phase 3 — Features

Not detailed here by request. Calendly is **already built and dormant** — set `NEXT_PUBLIC_CALENDLY_URL` and it activates. The consultation form still needs a destination inbox or CRM before it stops discarding submissions.

---

# Phase 4 — Integrations

Not detailed here by request. Analytics, CRM routing, support desk, consent management.

---

## Appendix — audit findings, mapped to phase

| Finding | Phase |
| ------- | ----- |
| Form discards every submission (`preventDefault` only) | 3 |
| No mobile navigation below 1280px | 1 ✅ done |
| Carousel auto-advanced with no pause control (WCAG 2.2.2) | 1 ✅ done |
| Four dead footer links incl. Privacy Governance, while collecting PII | 1 |
| "Client Case Studies" nav link leads to two testimonials | 1 |
| Address missing city and postcode | 1 |
| OEM strip uses placeholder glyphs instead of real logos | 1 |
| Only 3 of ~15 services represented | 1 |
| No industries, no AMC tiers, no SLA table, no coverage, no FAQ, no leadership, no certifications | 1 |
| No client logo wall, no attribution on testimonials | 1 |
| No skip link *(WCAG 2.4.1)* | 1 ✅ done |
| `h4` used directly under `h2` | 1 ✅ done |
| No analytics | 4 |
| No `LocalBusiness` schema — needs the address | 2 |
| Icon font is 1.1 MB (subset to the ~30 glyphs used) | 2 |
| No CI accessibility or performance budgets | 2 |
| No CMS — content lives in `lib/content.ts` | 4 |
