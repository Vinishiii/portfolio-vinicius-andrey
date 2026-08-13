export type Certification = {
  id: string;
  name: string;
  issuer: string | null;
  date: string | null;
  link: string | null;
  logo: string | null;
};

/**
 * Sourced directly from the most recent CV (`CV 2026 QR CODE english.pdf`).
 * No dates are listed there, so `date` stays null — the UI renders an
 * editable placeholder for it instead of guessing.
 */
export const certifications: Certification[] = [
  { id: "cs50", name: "CS50 — Computer Science", issuer: "Harvard University", date: null, link: null, logo: null },
  { id: "santander-db", name: "Database Administration", issuer: "Santander Foundation", date: null, link: null, logo: null },
  { id: "lean-six-sigma", name: "Lean Six Sigma Green Belt", issuer: "FASUL", date: null, link: null, logo: null },
  { id: "prompt-engineering", name: "Prompt Engineering with ChatGPT", issuer: "Coursera", date: null, link: null, logo: null },
  { id: "pentesting", name: "Introduction to Hacking & Pentesting", issuer: "Solyd", date: null, link: null, logo: null },
  { id: "cisco", name: "Networking Academy", issuer: "Cisco", date: null, link: null, logo: null },
  { id: "cpa-20", name: "CPA-20 Certification", issuer: "API School", date: null, link: null, logo: null },
  { id: "office-excel-solidworks", name: "Office, Excel & SolidWorks", issuer: "Instituto Enjoy", date: null, link: null, logo: null },
  { id: "quality-management", name: "Quality Management", issuer: "Prime Cursos", date: null, link: null, logo: null },
  { id: "senai", name: "Technical Drawing, 3D Printing, Injection and Extrusion Machine Operation", issuer: "SENAI", date: null, link: null, logo: null },
];
