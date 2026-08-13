export type ProjectStatus = "live" | "in_progress" | "archived";

export type LocalizedText = {
  pt: string;
  en: string;
  es: string;
};

export type Project = {
  id: string;
  slug: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  category: LocalizedText;
  technologies: string[];
  year: number | null;
  image: string | null;
  gallery: string[];
  video: { type: "local" | "youtube" | "vimeo"; src: string } | null;
  url: string | null;
  github: string | null;
  caseStudy: {
    problem: LocalizedText | null;
    approach: LocalizedText | null;
    solution: LocalizedText | null;
    results: LocalizedText | null;
  } | null;
  featured: boolean;
  status: ProjectStatus;
  /** Set to true to keep a project out of the public grid until it's ready. */
  draft?: boolean;
};

/**
 * Real projects, sourced from the live URLs provided directly by Vinícius.
 * Descriptions reflect what each product/site verifiably does (confirmed by
 * visiting the URL and inspecting its markup) — no invented metrics or
 * claims about personal impact are included. Add new entries by copying the
 * shape of one of these; set `draft: true` to hide one until it's ready.
 */
export const projects: Project[] = [
  {
    id: "viktori",
    slug: "viktori",
    title: { pt: "Viktori", en: "Viktori", es: "Viktori" },
    shortDescription: {
      pt: "Clube B2B de produtos personalizados sob demanda, com orçamento assistido por IA.",
      en: "A B2B club for on-demand personalized products, with AI-assisted quoting.",
      es: "Club B2B de productos personalizados bajo demanda, con presupuesto asistido por IA.",
    },
    description: {
      pt: "Plataforma de clube B2B para produtos personalizados sob demanda — capas, bolsas, embalagens e acessórios com marca própria — permitindo que empresas encomendem exatamente a quantidade necessária, sem manter estoque.",
      en: "A B2B membership platform for on-demand personalized products — protective cases, bags, packaging and branded accessories — letting companies order exactly the quantity they need without holding inventory.",
      es: "Plataforma de club B2B para productos personalizados bajo demanda — fundas, bolsas, empaques y accesorios de marca — que permite a las empresas pedir exactamente la cantidad que necesitan sin mantener inventario.",
    },
    category: { pt: "Plataforma B2B", en: "B2B Platform", es: "Plataforma B2B" },
    technologies: [],
    year: null,
    image: "/media/projects/viktori-cover.jpg",
    gallery: [],
    video: null,
    url: "https://viktori-site.onrender.com/",
    github: null,
    caseStudy: {
      problem: {
        pt: "Empresas que precisam de produtos personalizados (embalagens, capas, brindes) normalmente esbarram em pedidos mínimos altos e estoque parado.",
        en: "Companies that need personalized products (packaging, cases, branded items) usually run into high minimum order quantities and idle inventory.",
        es: "Las empresas que necesitan productos personalizados (empaques, fundas, artículos de marca) suelen enfrentar pedidos mínimos altos e inventario inmovilizado.",
      },
      approach: null,
      solution: {
        pt: "Um modelo de clube com catálogo próprio, configuração assistida por IA e produção sob demanda, eliminando a necessidade de estoque mínimo.",
        en: "A membership-club model with its own catalog, AI-assisted configuration and on-demand production, removing the need for minimum stock.",
        es: "Un modelo de club con catálogo propio, configuración asistida por IA y producción bajo demanda, eliminando la necesidad de inventario mínimo.",
      },
      results: null,
    },
    featured: true,
    status: "live",
  },
  {
    id: "homeiq",
    slug: "homeiq",
    title: { pt: "HomeIQ", en: "HomeIQ", es: "HomeIQ" },
    shortDescription: {
      pt: "Marketplace imobiliário em leilão reverso: corretores disputam a exclusividade de imóveis.",
      en: "Reverse-auction real estate marketplace: brokers compete for listing exclusivity.",
      es: "Marketplace inmobiliario de subasta inversa: los corredores compiten por la exclusividad del inmueble.",
    },
    description: {
      pt: "Plataforma imobiliária onde proprietários cadastram o imóvel e recebem propostas de corretores credenciados (CRECI) disputando a exclusividade de venda por 180 dias, com assinatura digital do contrato via Gov.br.",
      en: "A real estate platform where owners list a property and receive competing offers from licensed brokers bidding for a 180-day exclusive listing agreement, with digital contract signing via Gov.br.",
      es: "Plataforma inmobiliaria donde los propietarios registran el inmueble y reciben ofertas de corredores licenciados que compiten por la exclusividad de venta durante 180 días, con firma digital del contrato vía Gov.br.",
    },
    category: { pt: "Proptech / Marketplace", en: "Proptech / Marketplace", es: "Proptech / Marketplace" },
    technologies: ["Vite"],
    year: null,
    image: "/media/projects/homeiq-cover.jpg",
    gallery: [],
    video: null,
    url: "https://www.homeiq.com.br/",
    github: null,
    caseStudy: {
      problem: {
        pt: "Proprietários têm dificuldade em avaliar qual corretor oferece as melhores condições para vender seu imóvel com exclusividade.",
        en: "Property owners struggle to evaluate which broker offers the best terms for an exclusive listing.",
        es: "Los propietarios tienen dificultad para evaluar qué corredor ofrece las mejores condiciones para vender su inmueble en exclusiva.",
      },
      approach: null,
      solution: {
        pt: "Um leilão reverso de 48 horas entre corretores credenciados, com verificação de documentação e assinatura digital do contrato de exclusividade.",
        en: "A 48-hour reverse auction among licensed brokers, with document verification and digital signing of the exclusivity agreement.",
        es: "Una subasta inversa de 48 horas entre corredores licenciados, con verificación de documentos y firma digital del contrato de exclusividad.",
      },
      results: null,
    },
    featured: true,
    status: "live",
  },
  {
    id: "connect-gestao",
    slug: "connect",
    title: { pt: "Connect", en: "Connect", es: "Connect" },
    shortDescription: {
      pt: "Sistema de gestão de clínicas para fonoaudiologia e psicologia.",
      en: "Clinic management system for speech therapy and psychology practices.",
      es: "Sistema de gestión de clínicas para fonoaudiología y psicología.",
    },
    description: {
      pt: "Sistema de gestão clínica com agendamento, prontuário eletrônico, controle financeiro e telessaúde, com painéis específicos para fonoaudiologia, psicologia, terapia ocupacional e musicoterapia.",
      en: "A clinic management system covering scheduling, electronic medical records, financial control and telehealth, with specialized dashboards for speech therapy, psychology, occupational therapy and music therapy.",
      es: "Sistema de gestión clínica con agenda, historia clínica electrónica, control financiero y telesalud, con paneles específicos para fonoaudiología, psicología, terapia ocupacional y musicoterapia.",
    },
    category: { pt: "SaaS de Saúde", en: "Healthcare SaaS", es: "SaaS de Salud" },
    technologies: ["Base44"],
    year: null,
    image: "/media/projects/connect-cover.jpg",
    gallery: [],
    video: null,
    url: "https://connect-gestao.base44.app/",
    github: null,
    caseStudy: {
      problem: {
        pt: "Clínicas de fonoaudiologia e psicologia costumam operar com ferramentas fragmentadas para agenda, prontuário e financeiro.",
        en: "Speech therapy and psychology practices often run on fragmented tools for scheduling, records and billing.",
        es: "Las clínicas de fonoaudiología y psicología suelen operar con herramientas fragmentadas para agenda, historia clínica y finanzas.",
      },
      approach: null,
      solution: {
        pt: "Uma plataforma única com painéis especializados por especialidade, unificando agenda, prontuário eletrônico e financeiro.",
        en: "A single platform with specialty-specific dashboards, unifying scheduling, electronic records and billing.",
        es: "Una plataforma única con paneles especializados por especialidad, unificando agenda, historia clínica y finanzas.",
      },
      results: null,
    },
    featured: false,
    status: "live",
  },
  {
    id: "bruna-fono",
    slug: "bruna-fono",
    title: { pt: "Bruna Fono", en: "Bruna Fono", es: "Bruna Fono" },
    shortDescription: {
      pt: "Site de fonoaudiologia infantil 100% online, com teletherapy para brasileiros no exterior.",
      en: "Fully online pediatric speech therapy site, with teletherapy for Brazilians abroad.",
      es: "Sitio de fonoaudiología infantil 100% online, con teleterapia para brasileños en el exterior.",
    },
    description: {
      pt: "Site institucional para atendimento fonoaudiológico infantil 100% online — atraso de fala, transtornos de linguagem e comunicação no espectro autista — com agendamento via WhatsApp e atendimento em fuso horário flexível para famílias brasileiras no exterior.",
      en: "A site for fully online pediatric speech therapy — speech delays, language disorders and autism-spectrum communication — with WhatsApp booking and flexible-timezone sessions for Brazilian families abroad.",
      es: "Sitio para atención fonoaudiológica infantil 100% online — retraso del habla, trastornos del lenguaje y comunicación en el espectro autista — con agendamiento por WhatsApp y horarios flexibles para familias brasileñas en el exterior.",
    },
    category: { pt: "Saúde Infantil", en: "Pediatric Health", es: "Salud Infantil" },
    technologies: ["Three.js", "GSAP"],
    year: null,
    image: "/media/projects/bruna-fono-cover.jpg",
    gallery: [],
    video: null,
    url: "https://www.fonoonlineinfantil.com.br/",
    github: null,
    caseStudy: {
      problem: {
        pt: "Famílias brasileiras no exterior têm acesso limitado a fonoaudiologia infantil especializada em português.",
        en: "Brazilian families abroad have limited access to pediatric speech therapy specialized in Portuguese.",
        es: "Las familias brasileñas en el exterior tienen acceso limitado a fonoaudiología infantil especializada en portugués.",
      },
      approach: null,
      solution: {
        pt: "Um site institucional com teleatendimento, agendamento simplificado via WhatsApp e horários flexíveis entre fusos.",
        en: "A site with teletherapy, simplified WhatsApp booking and cross-timezone scheduling flexibility.",
        es: "Un sitio con teleatención, agendamiento simplificado por WhatsApp y flexibilidad horaria entre husos.",
      },
      results: null,
    },
    featured: false,
    status: "live",
  },
  {
    id: "fuja-da-faca",
    slug: "fuja-da-faca",
    title: { pt: "Fuja da Faca", en: "Fuja da Faca", es: "Fuja da Faca" },
    shortDescription: {
      pt: "Jogo de navegador em JavaScript puro: desvie das facas o maior tempo possível.",
      en: "A vanilla JavaScript browser game: dodge the knives for as long as you can.",
      es: "Un juego de navegador en JavaScript puro: esquiva los cuchillos el mayor tiempo posible.",
    },
    description: {
      pt: "Jogo casual de navegador feito em JavaScript puro, onde o jogador controla uma salsicha e desvia de facas em movimento usando as setas do teclado, com modos fácil/difícil, pontuação e progressão de fases.",
      en: "A casual browser game built in vanilla JavaScript, where the player controls a sausage character dodging moving knives with the arrow keys, featuring easy/hard modes, scoring and level progression.",
      es: "Un juego casual de navegador hecho en JavaScript puro, donde el jugador controla una salchicha y esquiva cuchillos en movimiento con las flechas del teclado, con modos fácil/difícil, puntuación y progresión de niveles.",
    },
    category: { pt: "Jogo Web", en: "Web Game", es: "Juego Web" },
    technologies: ["JavaScript"],
    year: null,
    image: "/media/projects/fuja-da-faca-cover.jpg",
    gallery: [],
    video: null,
    url: "https://fuja-da-faca.onrender.com",
    github: null,
    caseStudy: null,
    featured: false,
    status: "live",
  },
  {
    id: "ribeiro-bonfim",
    slug: "ribeiro-bonfim-financas",
    title: { pt: "Ribeiro & Bonfim Finanças", en: "Ribeiro & Bonfim Finanças", es: "Ribeiro & Bonfim Finanças" },
    shortDescription: {
      pt: "SaaS de finanças pessoais com leitura de recibos por OCR e insights via IA.",
      en: "Personal finance SaaS with OCR receipt scanning and AI-driven insights.",
      es: "SaaS de finanzas personales con lectura de recibos por OCR e insights vía IA.",
    },
    description: {
      pt: "Plataforma de gestão financeira pessoal com dashboard executivo, controle de contas e cartões, leitura automática de recibos por OCR e insights gerados por IA, com exportação de dados em CSV.",
      en: "A personal finance management platform with an executive dashboard, multi-account and card tracking, OCR-based receipt scanning and AI-generated insights, with CSV export.",
      es: "Plataforma de gestión financiera personal con panel ejecutivo, control de cuentas y tarjetas, lectura automática de recibos por OCR e insights generados por IA, con exportación de datos en CSV.",
    },
    category: { pt: "Finanças Pessoais", en: "Personal Finance", es: "Finanzas Personales" },
    technologies: ["Lovable"],
    year: null,
    image: "/media/projects/ribeiro-bonfim-cover.png",
    gallery: [],
    video: null,
    url: "https://ribeiro-bonfim.lovable.app/",
    github: null,
    caseStudy: {
      problem: {
        pt: "Registrar despesas manualmente é o principal motivo pelo qual as pessoas desistem de ferramentas de controle financeiro.",
        en: "Manually logging expenses is the main reason people abandon personal finance tools.",
        es: "Registrar gastos manualmente es el motivo principal por el que las personas abandonan las herramientas de control financiero.",
      },
      approach: null,
      solution: {
        pt: "Leitura automática de recibos via OCR e um dashboard com insights gerados por IA para reduzir o atrito do registro manual.",
        en: "Automatic OCR receipt scanning and an AI-generated insights dashboard to cut down on manual-entry friction.",
        es: "Lectura automática de recibos vía OCR y un panel con insights generados por IA para reducir la fricción del registro manual.",
      },
      results: null,
    },
    featured: false,
    status: "live",
  },
  {
    id: "cheeklist-auti",
    slug: "cheeklist-auti",
    title: { pt: "Cheeklist Auti", en: "Cheeklist Auti", es: "Cheeklist Auti" },
    shortDescription: {
      pt: "Aplicação web voltada a checklists de rotina — atualmente indisponível.",
      en: "A web app built around routine checklists — currently unavailable.",
      es: "Aplicación web orientada a listas de verificación de rutina — actualmente no disponible.",
    },
    description: {
      pt: "Aplicação web de checklists. O serviço está com o deploy suspenso no momento, por isso o link pode não carregar.",
      en: "A checklist-oriented web app. The deployment is currently suspended, so the link may not load.",
      es: "Aplicación web de listas de verificación. El despliegue está actualmente suspendido, por lo que el enlace puede no cargar.",
    },
    category: { pt: "Aplicação Web", en: "Web App", es: "Aplicación Web" },
    technologies: [],
    year: null,
    image: "/media/projects/cheeklist-auti-cover.jpg",
    gallery: [],
    video: null,
    url: "https://cheeklistauti.onrender.com",
    github: null,
    caseStudy: null,
    featured: false,
    status: "archived",
  },
];

/** Published projects, in the order they should appear (drafts excluded). */
export function getPublishedProjects(): Project[] {
  return projects.filter((p) => !p.draft);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && !p.draft);
}
