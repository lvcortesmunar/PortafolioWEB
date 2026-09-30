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
  slug: 'ikea-lifecycle',
  title: 'IKEA LifeCycle',
  sector: 'Product Design · Service Design · Strategy',
  year: '2026',
  image: '/images/ikea-lifecycle.png',
  alt: 'Ecosistema conceptual de IKEA LifeCycle que conecta personas, muebles, servicios, tiendas y experiencias digitales',
  problem:
    'La relación entre una persona y un mueble no termina con la compra, pero las necesidades de mantenimiento, reparación, renovación, reutilización o reemplazo pueden quedar desconectadas de la experiencia con la marca.',
  solution:
    'Un ecosistema de servicio que conecta producto, plataforma digital, tienda y servicios físicos para acompañar al usuario durante diferentes etapas del ciclo de vida del mueble.',
  impact: ['Service ecosystem definido', 'Service Blueprint desarrollado', 'Experiencia omnicanal conceptual'],
  stack: ['Figma', 'FigJam', 'UX Research', 'Service Design'],
},
{
  slug: 'spotify-mixer',
  title: 'Spotify Mixer',
  sector: 'Product Design · UX/UI · Interaction',
  year: '2026',
  image: '/images/spotify-mixer.png',
  alt: 'Interfaz conceptual de Spotify Mixer para crear y personalizar experiencias musicales',
  problem:
    'Los usuarios necesitan una forma más flexible y personal de explorar y combinar música según sus gustos, contexto y estado de ánimo.',
  solution:
    'Una experiencia interactiva que permite combinar preferencias musicales y descubrir nuevas posibilidades a través de una interacción flexible y personalizada.',
  impact: ['Experiencia de mezcla musical conceptual', 'Flujo de interacción definido', 'Prototipo de alta fidelidad'],
  stack: ['Figma', 'FigJam', 'Prototyping', 'UX/UI Design'],
},
{
  slug: 'whisky-coffee-neat',
  title: 'Whisky & Coffee Neat',
  sector: 'Product Design · UX/UI · Research · Strategy',
  year: '2025',
  image: '/images/whisky-coffee-neat.png',
  alt: 'Experiencia digital de Whisky & Coffee Neat para explorar, aprender y descubrir productos y experiencias de café y whisky',
  problem:
    'Para quienes se acercan por primera vez al café o al whisky, la información, los productos y las experiencias suelen estar fragmentados, dificultando saber por dónde empezar y cómo avanzar según sus intereses y nivel de conocimiento.',
  solution:
    'Una experiencia digital que conecta educación, experiencias y comercio dentro de un mismo recorrido, guiando al usuario desde la curiosidad y el aprendizaje hasta el descubrimiento de productos y experiencias relevantes.',
  impact: ['Experiencia digital conceptual', 'Ecosistema de educación, experiencias y comercio', 'Recorrido de descubrimiento definido'],
  stack: ['Figma', 'FigJam', 'UX Research', 'Prototyping'],
},
{
  slug: 'religion-club',
  title: 'RELIGIÓN CLUB',
  sector: 'Conceptual Project · Worldbuilding · Art Direction',
  year: '2025',
  image: '/images/religion-club.png',
  alt: 'Escena conceptual de RELIGIÓN CLUB, un universo nocturno donde coexisten entidades de diferentes tradiciones mitológicas y religiosas',
  problem:
    '¿Cómo pueden coexistir diferentes religiones, mitologías y leyendas dentro de un mismo universo ficticio sin convertir una tradición en la verdad central?',
  solution:
    'Un universo narrativo construido alrededor de un club fuera del tiempo y el espacio, con reglas que definen la existencia de las entidades, sus relaciones con la humanidad y lo que ocurre cuando una historia cambia, es recordada o cae en el olvido.',
  impact: ['Universo narrativo definido', '10 episodios conceptuales', 'Sistema de worldbuilding establecido'],
  stack: ['Research', 'Worldbuilding', 'Narrative Design', 'Art Direction'],
},
]

export const services = [
  {
    title: '01 — Product Design',
    description:
      'Product Thinking · User Flows · Prototyping · Product Discovery · Problem Framing. Diseño productos digitales de punta a punta, conectando necesidades de usuario, objetivos de negocio y posibilidades tecnológicas.',
  },
  {
    title: '02 — UX / UI',
    description:
      'User Research · Arquitectura de Información · Wireframes · UI Design · Design Systems · Usability Testing. Diseño experiencias claras, consistentes y funcionales, desde la exploración y los flujos de baja fidelidad hasta las interfaces finales.',
  },
  {
    title: '03 — Product & Business',
    description:
      'Product Strategy · Marketing · Customer Experience · Métricas · Value Proposition. Traduzco necesidades en oportunidades, conectando personas, producto y negocio mediante blueprints, mapas de viaje y experiencias omnicanal.',
  },
  {
    title: '04 — Gestión',
    description:
      'Planificación · Priorización · Metodologías Ágiles · Coordinación de Proyectos · Stakeholder Management. Organizo equipos, procesos y entregables para avanzar con claridad, agilidad y foco en los objetivos.',
  },
  {
    title: '05 — Build',
    description:
      'Low-Code · Frontend · Prototipos Funcionales · Implementación Digital. Llevo las ideas más allá del prototipo, explorando y construyendo soluciones funcionales para validar conceptos y acelerar el aprendizaje.',
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
