/**
 * The real service catalogue.
 *
 * Every entry below is traceable to Scantech Info Systems' own historical
 * material (the archived `scantechinfsys` site and the "About Us" / "Services &
 * Support" / "RIM" / "IT Facility Management" / "AMC" / "Networking" pages).
 * Nothing here is invented: the previous build shipped three services, this
 * restores the full catalogue the business actually sold.
 */

export type ServiceCategoryId =
  | "network"
  | "hardware"
  | "security"
  | "facility"
  | "advisory";

export type ServiceCategory = {
  id: ServiceCategoryId;
  name: string;
  /** Short sentence describing the grouping, used on the services index. */
  summary: string;
  icon: string;
};

export type Service = {
  slug: string;
  icon: string;
  name: string;
  category: ServiceCategoryId;
  /** One line, used on cards and in listings. */
  summary: string;
  /** Opening paragraph on the service's own page. */
  intro: string;
  /** "What's included" — the scoped capability list. */
  capabilities: string[];
  /** Who the service is written for. */
  audience: string;
  /** Brands / platforms the service is delivered on. */
  brands?: string[];
  /** Typical delivery shape. Deliberately descriptive, not a hard promise. */
  delivery?: string;
  /** Related services, by slug. */
  related?: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "network",
    name: "Network & Structured Cabling",
    summary:
      "Copper, fibre and wireless network builds — designed, installed, documented and supported.",
    icon: "hub",
  },
  {
    id: "hardware",
    name: "Hardware & Maintenance Contracts",
    summary:
      "Supply of desktops, servers and peripherals, and the contracts that keep them running.",
    icon: "dns",
  },
  {
    id: "security",
    name: "Security & Surveillance",
    summary:
      "IP surveillance, recording, and physical access control for sites that need an audit trail.",
    icon: "videocam",
  },
  {
    id: "facility",
    name: "Facility & Infrastructure Management",
    summary:
      "Data centre, power and end-user support run as a managed service, on-site or remote.",
    icon: "domain",
  },
  {
    id: "advisory",
    name: "Advisory & Turnkey Projects",
    summary:
      "Assessment, design, documentation and turnkey delivery across every discipline above.",
    icon: "engineering",
  },
];

export const services: Service[] = [
  // ---------------------------------------------------------------- network --
  {
    slug: "structured-cabling",
    icon: "cable",
    name: "Structured Cabling",
    category: "network",
    summary:
      "Certified copper and fibre backbone and horizontal cabling, with racks dressed and every link documented.",
    intro:
      "Structured cabling is the part of an office build nobody notices until it fails. We install the horizontal and backbone plant, terminate and certify every link, and hand over as-built documentation so the next person who touches the rack can see what they are looking at.",
    capabilities: [
      "Horizontal cabling in CAT5e and CAT6/CAT6e",
      "Fibre optic backbone — single-mode and multi-mode",
      "Rack and patch-panel dressing, labelling and cable management",
      "Link certification with printed test results per outlet",
      "As-built drawings and outlet-to-switch port schedules",
      "Moves, additions and changes without disrupting live floors",
    ],
    audience:
      "New office fit-outs, campus buildings, and occupied sites replacing failed or undocumented cabling.",
    brands: ["D-Link", "Digisol", "Digilink", "Cisco"],
    delivery:
      "Survey and outlet count first, then a written scope before a single cable is pulled. Installation is scheduled around your operating hours.",
    related: ["network-design-switching", "enterprise-wifi", "turnkey-it-projects"],
  },
  {
    slug: "network-design-switching",
    icon: "settings_ethernet",
    name: "Network Design, Switching & Routing",
    category: "network",
    summary:
      "LAN and WAN design, core and distribution switching, VLAN segmentation, routing and firewall configuration.",
    intro:
      "We design and build the network itself — core and distribution switching, VLAN segmentation, routing, and the security boundary in front of it. Where a site already has a network, we document it before changing anything.",
    capabilities: [
      "LAN and WAN planning and design",
      "Core, distribution and access layer switching",
      "VLAN segmentation and inter-VLAN routing",
      "Routers, bridges and managed switch configuration",
      "Firewall and UTM deployment and rule review",
      "Intranet and extranet connectivity between sites",
      "Network troubleshooting and performance investigation",
      "Handover documentation and network diagrams",
    ],
    audience:
      "Multi-floor offices, campuses, and multi-site operations with branch connectivity requirements.",
    brands: ["Cisco", "D-Link", "Cyberoam"],
    delivery:
      "Discovery and documentation, then a design you approve, then phased implementation with out-of-hours cutovers where required.",
    related: ["structured-cabling", "enterprise-wifi", "it-security-audit"],
  },
  {
    slug: "enterprise-wifi",
    icon: "wifi",
    name: "Enterprise Wireless",
    category: "network",
    summary:
      "Site-surveyed wireless coverage for offices and campuses, with centralised management and guest isolation.",
    intro:
      "Wireless that works across a whole floor is a survey problem before it is an equipment problem. We measure before we mount, then deploy access points with centralised management so coverage can be tuned rather than guessed at.",
    capabilities: [
      "Pre-deployment wireless site survey and coverage planning",
      "Access point placement, mounting and PoE provisioning",
      "Centralised controller or cloud management",
      "Guest network separation from corporate traffic",
      "Roaming configuration across floors and buildings",
      "Post-deployment validation and tuning",
    ],
    audience:
      "Offices, campuses and warehouses where staff and visitors both need reliable coverage.",
    brands: ["D-Link", "Cisco"],
    related: ["network-design-switching", "structured-cabling"],
  },

  // --------------------------------------------------------------- hardware --
  {
    slug: "computer-hardware-supply",
    icon: "computer",
    name: "Computer Hardware Supply",
    category: "hardware",
    summary:
      "Desktops, business machines, workstations and servers — supplied through authorised channels only.",
    intro:
      "We supply personal computers, business machines, workstations and servers, including our own Scantech-branded systems, as an authorised dealer or reseller. Every unit is sourced through official distribution, so warranty and service entitlement stay intact.",
    capabilities: [
      "Personal and business desktop computers",
      "Workstations for engineering and design workloads",
      "Servers — small, mid-range and higher-end",
      "Scantech-brand personal, business and server systems",
      "Bulk fleet supply and rollout for new offices",
      "Warranty registration and asset tagging on delivery",
    ],
    audience:
      "Organisations standardising a workstation fleet, or equipping a new office or campus block.",
    brands: [
      "HP",
      "IBM",
      "Lenovo",
      "Apple",
      "Samsung",
      "Intel",
      "Seagate",
      "Wipro",
    ],
    related: ["server-storage-backup", "peripherals", "annual-maintenance-contracts"],
  },
  {
    slug: "server-storage-backup",
    icon: "storage",
    name: "Servers, Storage & Backup",
    category: "hardware",
    summary:
      "Server and storage deployment with backup devices and standby units kept for continuity.",
    intro:
      "Servers are specified for the load they will actually carry, deployed with storage sized for growth, and backed by backup devices that are tested rather than merely installed.",
    capabilities: [
      "Server specification, supply and commissioning",
      "Storage and backup device deployment",
      "Standby units and spares held for continuity",
      "Server and storage management under contract",
      "Capacity review as data volumes grow",
    ],
    audience:
      "Organisations running in-house servers and file or application storage they cannot afford to lose.",
    brands: ["HP", "IBM", "Lenovo", "Seagate"],
    related: ["annual-maintenance-contracts", "remote-infrastructure-management"],
  },
  {
    slug: "peripherals",
    icon: "print",
    name: "Peripherals & Printing",
    category: "hardware",
    summary:
      "Printers, plotters, large-format output and scanners — supplied, installed and maintained.",
    intro:
      "From dot-matrix machines still running billing in a back office to large-format plotters in a design studio, we supply, install and maintain the peripheral estate alongside the computers it hangs off.",
    capabilities: [
      "Inkjet, deskjet, dot-matrix and laser printers",
      "Line printers for high-volume back-office output",
      "Plotters and large or very large format printers",
      "Document and production scanners",
      "Consumables supply and print device servicing",
    ],
    audience:
      "Finance, billing, design, publishing and records functions with production printing needs.",
    brands: ["Canon", "Epson", "TVSE", "HP"],
    related: ["computer-hardware-supply", "annual-maintenance-contracts"],
  },
  {
    slug: "annual-maintenance-contracts",
    icon: "handyman",
    name: "Annual Maintenance Contracts",
    category: "hardware",
    summary:
      "Comprehensive and non-comprehensive AMC across desktops, servers, peripherals and networking.",
    intro:
      "Our maintenance contracts cover complete hardware, software, peripherals and networking across all major brands — with a defined response window, scheduled preventive visits, and engineers who arrive knowing the estate because they have serviced it before.",
    capabilities: [
      "Comprehensive contracts — parts and labour included",
      "Non-comprehensive contracts — labour covered, parts at cost",
      "On-site coverage for desktops, workstations, servers and peripherals",
      "Printers, scanners, large-format printers and backup devices",
      "Networking and software maintenance",
      "Scheduled preventive maintenance visits",
      "Standby units and spares held against breakdowns",
      "Asset register and service history reporting",
    ],
    audience:
      "Any organisation running a computer fleet where an unplanned failure costs more than the contract.",
    delivery:
      "Scoped from an asset survey, so the contract reflects the machines you actually own rather than an estimate.",
    related: ["resident-engineers", "remote-infrastructure-management", "amc-plans"],
  },
  {
    slug: "resident-engineers",
    icon: "badge",
    name: "Resident & On-Site Engineers",
    category: "hardware",
    summary:
      "Dedicated engineers stationed at your premises, or on call across a defined response window.",
    intro:
      "For sites where a queue at the helpdesk is not acceptable, we station our own engineers at your premises. They learn your estate, your users and your escalation path, and they are supported by the same spares bench as our field teams.",
    capabilities: [
      "Dedicated resident engineers at customer premises",
      "Defined on-site working hours, or 24×7 cover",
      "Directly employed, background-verified engineers",
      "Engineering qualification: B.E. / B.Tech / MCA / BCA / B.Sc-IT",
      "Escalation back to the central field team and spares pool",
      "Activity and asset reporting on an agreed cadence",
    ],
    audience:
      "Corporate headquarters, hospitals, campuses and manufacturing sites with continuous operating hours.",
    related: ["annual-maintenance-contracts", "it-facility-management"],
  },

  // --------------------------------------------------------------- security --
  {
    slug: "ip-surveillance",
    icon: "videocam",
    name: "IP Surveillance & CCTV",
    category: "security",
    summary:
      "Camera networks with recording, retention sized to policy, and remote viewing set up properly.",
    intro:
      "We build surveillance networks with the recording capacity to actually satisfy your retention policy and the camera placement to cover what you need evidenced — not just what is convenient to mount.",
    capabilities: [
      "Indoor and outdoor IP camera installation",
      "NVR and storage configuration sized for retention",
      "Recording retention planning — 30 to 90 days and beyond",
      "Multi-site monitoring from a central or mobile client",
      "Power and network backhaul for camera runs",
      "Preventive servicing and lens or housing cleaning",
    ],
    audience:
      "Institutions, campuses, industrial sites and commercial premises with a physical security obligation.",
    related: ["access-control", "structured-cabling", "annual-maintenance-contracts"],
  },
  {
    slug: "access-control",
    icon: "fingerprint",
    name: "Access Control",
    category: "security",
    summary:
      "Biometric and card-based door control with a record of who entered where, and when.",
    intro:
      "Electronic access control replaces a key that can be copied with a credential that can be revoked. We specify the doors, install the readers and locks, and configure the access rights your organisation actually uses.",
    capabilities: [
      "Biometric and RFID card reader installation",
      "Electromagnetic locks, strikes and door controllers",
      "Zone and time-based access rights",
      "Entry and exit logging with report export",
      "Integration with attendance and visitor processes",
      "Uninterrupted operation through power interruptions",
    ],
    audience:
      "Server rooms, record stores, laboratories, and sites with restricted areas to protect.",
    related: ["ip-surveillance", "time-attendance"],
  },
  {
    slug: "time-attendance",
    icon: "schedule",
    name: "Time & Attendance",
    category: "security",
    summary:
      "Attendance capture that feeds payroll without a spreadsheet in the middle.",
    intro:
      "Attendance terminals installed at the points staff actually enter, feeding shift rules and exception reporting so payroll gets clean data instead of a dispute.",
    capabilities: [
      "Biometric and card attendance terminals",
      "Shift, overtime and exception rule configuration",
      "Multi-location attendance consolidation",
      "Export into payroll formats",
      "Integration with access control credentials",
    ],
    audience:
      "Organisations with shift workers, contract staff or multiple sites needing consolidated attendance.",
    related: ["access-control"],
  },

  // --------------------------------------------------------------- facility --
  {
    slug: "it-facility-management",
    icon: "domain",
    name: "IT Facility Management",
    category: "facility",
    summary:
      "The whole estate managed as one service — data centre through to the desktop.",
    intro:
      "IT facility management puts the data centre, the power feeding it, the network, and the end user on one contract with one point of accountability, so a fault gets traced to its cause instead of bounced between vendors.",
    capabilities: [
      "Data centre management, including UPS",
      "Server and storage management",
      "Database management",
      "Network management",
      "Information security management",
      "Antivirus and endpoint protection management",
      "Desktop management with end-user support",
      "Performance reporting on an agreed schedule",
    ],
    audience:
      "Organisations without an in-house IT department, or with one that needs the routine load carried.",
    related: ["remote-infrastructure-management", "ups-power-backup", "resident-engineers"],
  },
  {
    slug: "remote-infrastructure-management",
    icon: "monitor_heart",
    name: "Remote Infrastructure Management (RIM)",
    category: "facility",
    summary:
      "Monitoring and remote resolution of infrastructure and application faults, staffed as a service desk.",
    intro:
      "RIM covers IT infrastructure and applications remotely — faults are seen and often resolved before they reach your users. Where a fault needs hands, we escalate to our own field team rather than handing you a ticket number.",
    capabilities: [
      "Helpdesk services with logged calls and resolution tracking",
      "Server management and health monitoring",
      "Desktop services and remote support",
      "Storage management",
      "Application service monitoring and support",
      "Reporting on fault volume, response and resolution",
    ],
    audience:
      "Multi-site organisations that need fault visibility across locations without staff at each one.",
    related: ["it-facility-management", "annual-maintenance-contracts"],
  },
  {
    slug: "ups-power-backup",
    icon: "bolt",
    name: "UPS, Power Backup & Racks",
    category: "facility",
    summary:
      "Power protection and rack infrastructure for the equipment that has to survive an outage.",
    intro:
      "Servers, switches and recorders do not tolerate dirty power. We size and install UPS capacity, battery backup and rack infrastructure so a power event is a logged occurrence rather than a data loss incident.",
    capabilities: [
      "UPS sizing, supply and installation",
      "Battery backup and replacement programmes",
      "Server and network rack build-out",
      "Power distribution and rack cabling",
      "Preventive battery health checks under contract",
    ],
    audience:
      "Server rooms, control rooms and any site where the network must survive the mains dropping.",
    brands: ["APC", "Wipro"],
    related: ["it-facility-management", "server-storage-backup"],
  },

  // --------------------------------------------------------------- advisory --
  {
    slug: "turnkey-it-projects",
    icon: "apartment",
    name: "Turnkey IT Projects",
    category: "advisory",
    summary:
      "One contract for the whole fit-out — cabling, network, power, hardware and handover.",
    intro:
      "A new office, branch or campus needs cabling, switching, wireless, power, computers and surveillance to arrive in the right order. We take that as a single turnkey scope with one schedule and one point of responsibility.",
    capabilities: [
      "Requirement study and site survey",
      "Written scope, bill of materials and phased schedule",
      "Civil coordination for cable routes and containment",
      "Cabling, network, wireless, power and surveillance delivery",
      "Hardware supply, installation and commissioning",
      "Acceptance testing, documentation and handover",
      "Operator training on the delivered systems",
    ],
    audience:
      "New offices, branch rollouts, campus buildings, and expansion projects with a fixed opening date.",
    delivery:
      "Our own sequence: study the requirement, recommend the infrastructure, supply and implement it, then train the people who will run it.",
    related: ["structured-cabling", "network-design-switching", "it-infrastructure-audit"],
  },
  {
    slug: "it-infrastructure-audit",
    icon: "fact_check",
    name: "IT & Security Infrastructure Audit",
    category: "advisory",
    summary:
      "An independent look at what you own, what state it is in, and what is actually documented.",
    intro:
      "Most sites we are called to have more equipment than records. An audit establishes what exists, what condition it is in, what is at end of life, and where the documentation gaps would hurt you during an outage.",
    capabilities: [
      "Physical asset survey and asset register build",
      "Cabling and network documentation review",
      "End-of-life and single-point-of-failure assessment",
      "Patch and configuration review",
      "Surveillance coverage and retention assessment",
      "Prioritised remediation report with cost bands",
    ],
    audience:
      "Organisations inheriting a site from a previous vendor, or renewing a contract without evidence of what they hold.",
    related: ["turnkey-it-projects", "annual-maintenance-contracts"],
  },
  {
    slug: "engineering-software-consultancy",
    icon: "architecture",
    name: "Engineering & Software Consultancy",
    category: "advisory",
    summary:
      "CAD/CAM/CAE consultancy and bespoke business software, from a team that has delivered both.",
    intro:
      "Scantech began in engineering computing and still carries that capability: CAD/CAM/CAE consultancy for civil and mechanical engineering work, alongside bespoke business software developed in-house and running in production today.",
    capabilities: [
      "CAD/CAM/CAE consultancy and software deployment",
      "Structural analysis and design software support",
      "Finite element analysis and project management tooling",
      "Bespoke business applications — billing, accounting, inventory",
      "Publication, advertisement and media management systems",
      "Financial accounting and fleet management systems",
      "Application maintenance and enhancement",
    ],
    audience:
      "Engineering practices, institutions and businesses whose core process is not served by a packaged product.",
    brands: ["AutoDesk", "ANSYS", "Microsoft", "Adobe"],
    related: ["computer-hardware-supply", "turnkey-it-projects"],
  },
];

export const servicesByCategory = serviceCategories.map((category) => ({
  category,
  items: services.filter((service) => service.category === category.id),
}));

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** The three headline capabilities the homepage leads with. */
export const headlineServiceSlugs = [
  "structured-cabling",
  "annual-maintenance-contracts",
  "ip-surveillance",
] as const;
