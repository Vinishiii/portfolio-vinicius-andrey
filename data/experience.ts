export type ExperienceItem = {
  id: string;
  period: string;
  startYear: number;
  role: string;
  company: string;
  current?: boolean;
  /** Left null when no verified responsibilities/description were provided yet. */
  summary: string | null;
};

/**
 * Sourced directly from the provided CVs. Do not add responsibilities,
 * achievements or metrics that are not explicitly confirmed — leave
 * `summary: null` and let the UI show an editable placeholder instead.
 */
export const experience: ExperienceItem[] = [
  {
    id: "moveleiros",
    period: "Jan 2026 — Present",
    startYear: 2026,
    role: "SDR (Sales Development Representative)",
    company: "Moveleiros",
    current: true,
    summary:
      "Lead prospecting and outreach, client follow-up and commercial support, commercial data organization and sales support.",
  },
  {
    id: "flowtex",
    period: "2025 — Oct 2025",
    startYear: 2025,
    role: "Administrative Assistant",
    company: "Flowtex",
    summary:
      "Organization of administrative and operational processes, information control and support for internal demands, team communication and operational support.",
  },
  {
    id: "arte-formatti",
    period: "Mar 2025 — Apr 2025",
    startYear: 2025,
    role: "Commercial Assistant",
    company: "Arte Formatti Planejados",
    summary:
      "Lead prospecting, customer service, and sales follow-up. Commercial data organization and support for business analysis.",
  },
  {
    id: "neo-bpo-enel",
    period: "2022 — 2023",
    startYear: 2022,
    role: "Administrative Assistant",
    company: "Neo BPO – Enel Brasil",
    summary:
      "Customer service, supervision of operational routines, and analysis of account data and repair requests.",
  },
  {
    id: "amapola",
    period: "2017 — 2021",
    startYear: 2017,
    role: "Administrative Assistant",
    company: "Amapola Confecções",
    summary: "Inventory control, order analysis, and customer service.",
  },
  {
    id: "unihosp",
    period: "2017",
    startYear: 2017,
    role: "Administrative Assistant",
    company: "Centro Médico Unihosp",
    summary: "Organization of sensitive data, customer service, and administrative support.",
  },
  {
    id: "atento-vivo",
    period: "Jan 2016 — May 2016",
    startYear: 2016,
    role: "Technical Support Representative",
    company: "Atento do Brasil / Vivo",
    summary:
      "Technical support for Vivo mobile services and customer assistance. Network and SIM card updates, Brazil and Latin America roaming support.",
  },
  {
    id: "production-assistant",
    period: "Mar 2015 — Oct 2015",
    startYear: 2015,
    role: "Production Assistant",
    company: "",
    summary:
      "Assisted machine operators in machining centers; developed knowledge in technical drawing interpretation and measuring instruments such as calipers, micrometers, and dial indicators. Filled Statistical Process Control (SPC) reports and performed technical inspection and release of manufactured parts according to engineering drawings.",
  },
];
