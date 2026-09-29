export const profile = {
  name: 'Luisa Vivianne Cortes Munar',
  shortName: 'LV.CORTES',
  handle: 'lv.cortesmunar',
  role: 'Product Designer · UX/UI',
  email: 'lv.cortesmunar@gmail.com',
  location: 'Bogotá, Colombia · Remoto',
}

export const navLinks = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  {/*{ href: '#servicios', label: 'Servicios' },*/}
  { href: '#experiencia', label: 'Experiencia' },
]

export const marqueeItems = [
  'Product Design',
  'UX Research',
  'Diseño de Servicios',
  'Prototipado',
  'Gestión Ágil',
  'UI Systems',
  'Low-Code',
]

export const skills = [
  'Product Design',
  'Product Discovery',
  'Opportunity Mapping',
  'UX Design',
  'Wireframing',
  'Responsive Design',
  'UX Research',
  'UI Design',
  'UI Systems',
  'Prototipado Low-Code',
  'A/B Testing',
  'UX Metrics',
  'Project Management',
  'KPI & OKR Management',
  'Scrum / Kanban',
]

export type Project = {
  slug: string
  title: string
  sector: string
  year: string
  image: string
  alt: string
  problem: string
  solution: string
  impact: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: 'banca-digital',
    title: 'Banca Digital',
    sector: 'Fintech · Móvil',
    year: '2025',
    image: '/images/proyecto-fintech.png',
    alt: 'Mano sosteniendo un teléfono con una app bancaria junto a un datáfono',
    problem:
      'Los usuarios abandonaban el registro por un proceso de verificación de identidad fragmentado en varias pantallas.',
    solution:
      'Un onboarding conversacional con revelación progresiva, validación en tiempo real y ayuda contextual.',
    impact: ['+34% registros completados', '-40% tickets de soporte', 'NPS 68'],
    stack: ['Figma', 'Maze', 'Jira'],
  },
  {
    slug: 'plataforma-salud',
    title: 'Plataforma Salud',
    sector: 'Salud · Web',
    year: '2024',
    image: '/images/proyecto-salud.png',
    alt: 'Manos escribiendo en un portátil junto a un estetoscopio',
    problem:
      'El personal clínico perdía tiempo navegando entre sistemas desconectados para consultar historias de pacientes.',
    solution:
      'Una vista unificada del paciente con acciones contextuales, co-diseñada con el equipo de enfermería.',
    impact: ['-25% tiempo por consulta', '4,6/5 satisfacción', '12 sedes'],
    stack: ['Figma', 'FigJam', 'Notion'],
  },
  {
    slug: 'gestor-low-code',
    title: 'Gestor Low-Code',
    sector: 'Herramientas internas',
    year: '2024',
    image: '/images/proyecto-lowcode.png',
    alt: 'Mano bocetando wireframes de interfaz sobre papel',
    problem:
      'Los equipos de operación dependían de TI para cada cambio en sus flujos de aprobación.',
    solution:
      'Un constructor de flujos Low-Code con plantillas, versionado y un modo de presentación para comités.',
    impact: ['80+ equipos', '3x entregas más rápidas', 'Adopción del 92%'],
    stack: ['Figma', 'Power Apps', 'Miro'],
  },
  {
    slug: 'diseno-de-servicios',
    title: 'Servicio Ciudadano',
    sector: 'Diseño de servicios',
    year: '2023',
    image: '/images/proyecto-servicios.png',
    alt: 'Mesa de taller con mapa de viaje del usuario, notas adhesivas y portátil',
    problem:
      'Los trámites presenciales generaban filas extensas y una percepción negativa del servicio.',
    solution:
      'Rediseño del servicio de punta a punta con blueprint, canales digitales y protocolos de atención.',
    impact: ['-45% tiempos de espera', '+30% trámites en línea', 'Premio innovación'],
    stack: ['Miro', 'Figma', 'Typeform'],
  },
  {
    slug: 'comercio-digital',
    title: 'Comercio Digital',
    sector: 'E-commerce · Marketing',
    year: '2023',
    image: '/images/proyecto-marketing.png',
    alt: 'Persona con bolsas de compra y un teléfono con una tienda en línea',
    problem:
      'Una marca de moda necesitaba un checkout que se sintiera cuidado, no solo transaccional.',
    solution:
      'Páginas de producto editoriales, checkout en una sola pantalla y campañas integradas con marketing.',
    impact: ['+22% ticket promedio', '-18% abandono', '3 mercados'],
    stack: ['Figma', 'Shopify', 'Hotjar'],
  },
]

export const services = [
  {
    title: 'Diseño UX / UI',
    description: ' User Research · Arquitectura de información · Wireframes · UI Design · Design Systems · Usability Testing Superficies de producto de punta a punta, desde flujos de baja fidelidad hasta pantallas finales.',
  },
  {
    title: 'Estrategia de producto',
    description: 'Definición del problema, dimensionamiento de oportunidades y roadmaps junto a equipos directivos.',
  },
  {
    title: 'Product & Business',
    description: 'Product Strategy · Marketing · Customer Experience · Métricas · Value Proposition. Traduzco necesidades en oportunidades, conectando personas, producto y negocio mediante blueprints, mapas de viaje y experiencias omnicanal.',
  },
  {
    title: 'Prototipado',
    description: 'Prototipos interactivos de alta fidelidad y soluciones Low-Code para validar rápido.',
  },
  {
    title: 'Gestión ágil',
    description: 'Marcos híbridos Scrum / Kanban para acelerar entregas y cumplir metas con equipos multidisciplinarios.',
  },
]

export const timeline = [
  {
    period: '2023 — Hoy',
    role: 'Product Designer Senior',
    company: 'Banca Digital',
    description: 'Lidero la experiencia de la app móvil: onboarding, pagos y un sistema de diseño compartido entre escuadras.',
  },
  {
    period: '2021 — 2023',
    role: 'Diseñadora UX/UI',
    company: 'Plataforma Salud',
    description: 'Responsable de la experiencia clínica de extremo a extremo, desde la investigación en campo hasta el lanzamiento.',
  },
  {
    period: '2019 — 2021',
    role: 'Diseñadora de Servicios',
    company: 'Consultoría de Innovación',
    description: 'Diseñé servicios públicos y privados con metodologías de co-creación, blueprints y prototipos.',
  },
  {
    period: '2017 — 2019',
    role: 'Ingeniera Multimedia',
    company: 'Agencia Digital',
    description: 'Producción de productos digitales, campañas de marketing y primeras herramientas Low-Code.',
  },
]

export const contactLinks = [
  { label: 'Email', href: 'mailto:lv.cortesmunar@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lv-cortesmunar/' },
  { label: 'Behance', href: 'https://www.behance.net/lvcortesmunar' },
  { label: 'Hoja de vida', href: '#' },
]
