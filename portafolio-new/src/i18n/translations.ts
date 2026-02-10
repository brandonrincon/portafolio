export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";

export type Lang = keyof typeof languages;

export const translations = {
  es: {
    // Navigation
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    // Hero
    "hero.role": "Desarrollador Full Stack",
    "hero.tagline": "Desarrollo, Innovación y Creatividad",
    "hero.cta.portfolio": "Ver Portafolio",
    "hero.cta.contact": "Contactar",
    "hero.stats.projects": "Proyectos",
    "hero.stats.downloads": "Descargas",
    "hero.stats.apps": "Apps",

    // About
    "about.subtitle": "Sobre mí",
    "about.title": "Principios",
    "about.description":
      "Soy un desarrollador apasionado por la innovación, desde el contexto de globalización del mercado colombiano. Ofrezco lo mejor de mis capacidades en el quehacer profesional, con experiencia en diferentes grupos y proyectos de creación de software. Ideación, desarrollo, publicación y comercialización de ideas tecnológicas.",
    "about.value1.title": "Desarrollo",
    "about.value1.description":
      "Utilizo tecnologías modernas enfocadas en mejorar la experiencia de usuario y eficiencia.",
    "about.value2.title": "Entregas a Tiempo",
    "about.value2.description":
      "Los tiempos establecidos son compromisos inquebrantables que garantizo cumplir.",
    "about.value3.title": "Soporte",
    "about.value3.description":
      "Acompañamiento continuo para asistir las necesidades de escalamiento de proyectos.",
    "about.technologies": "Tecnologías",

    // Experience
    "experience.subtitle": "Experiencia",
    "experience.title": "Experiencia Profesional",
    "experience.description":
      "Mi trayectoria profesional en desarrollo de software, liderando equipos y construyendo soluciones tecnológicas.",
    "experience.media": "Referencias en Medios",

    // Contact
    "contact.subtitle": "Contacto",
    "contact.title": "Trabajemos juntos",
    "contact.description":
      "¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.",
    "contact.footer":
      "Todos los derechos reservados.",

    // Theme
    "theme.light": "Modo claro",
    "theme.dark": "Modo oscuro",

    // Language
    "lang.select": "Seleccionar idioma",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero
    "hero.role": "Full Stack Developer",
    "hero.tagline": "Development, Innovation and Creativity",
    "hero.cta.portfolio": "View Portfolio",
    "hero.cta.contact": "Contact Me",
    "hero.stats.projects": "Projects",
    "hero.stats.downloads": "Downloads",
    "hero.stats.apps": "Apps",

    // About
    "about.subtitle": "About Me",
    "about.title": "Principles",
    "about.description":
      "I am a developer passionate about innovation, within the context of the Colombian market globalization. I offer the best of my capabilities in professional work, with experience in different groups and software creation projects. Ideation, development, publication and commercialization of technological ideas.",
    "about.value1.title": "Development",
    "about.value1.description":
      "I use modern technologies focused on improving user experience and efficiency.",
    "about.value2.title": "On-Time Delivery",
    "about.value2.description":
      "Established timelines are unbreakable commitments that I guarantee to meet.",
    "about.value3.title": "Support",
    "about.value3.description":
      "Continuous accompaniment to assist the scaling needs of projects.",
    "about.technologies": "Technologies",

    // Experience
    "experience.subtitle": "Experience",
    "experience.title": "Professional Experience",
    "experience.description":
      "My professional journey in software development, leading teams and building technology solutions.",
    "experience.media": "Media References",

    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Let's work together",
    "contact.description":
      "Do you have a project in mind? I'm available for new opportunities and collaborations.",
    "contact.footer":
      "All rights reserved.",

    // Theme
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",

    // Language
    "lang.select": "Select language",
  },
} as const;
