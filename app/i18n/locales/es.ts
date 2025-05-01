import type { Dictionary } from './en';

export const dictionary: Dictionary = {
  header: {
    nav: {
      home: 'Inicio',
      features: 'Características',
      pricing: 'Precios',
      login: 'Iniciar Sesión',
      contact: 'Contacto',
    }
  },
  hero: {
    title: 'Simplifica tu gestión de ISP y aumenta tu rendimiento con NextCore',
    subtitle: 'Optimiza tus operaciones, mejora la satisfacción del cliente y aumenta tus ingresos con nuestra solución completa para ISPs',
    cta: 'Comenzar',
  },
  features: {
    title: 'Todo lo que necesitas en una plataforma',
    subtitle: 'Características',
    items: [
      {
        title: 'Proyectos',
        description: 'Centralizamos toda la documentación de tus proyectos y automatizamos los informes operativos y financieros.'
      },
      {
        title: 'Alquiler de Infraestructura',
        description: 'Gestiona y monetiza tu infraestructura de alquiler a otros ISP con facturación automatizada y monitoreo en tiempo real.'
      },
      {
        title: 'Ventas e Instalación',
        description: 'Minimiza la fricción entre ventas e instalación. Acelera la activación del servicio.'
      },
      {
        title: 'Almacén',
        description: 'Gestiona integralmente el inventario de tu organización conectado a tus proyectos e instalaciones.'
      }
    ]
  },
  pricing: {
    title: 'Elige el plan que se adapte a tus necesidades',
    subtitle: 'Planes',
    plans: [
      {
        name: 'Básico',
        price: '$1365/mes',
        button: 'Elegir Básico'
      },
      {
        name: 'Estándar',
        price: '$1612/mes',
        button: 'Elegir Estándar'
      },
      {
        name: 'Premium',
        price: '$1755/mes + comisiones',
        button: 'Elegir Premium'
      }
    ],
    features: {
      title: 'Características',
      items: ['Módulo de Proyectos', 'Módulo de Almacén', 'Proyectos', 'Soporte por Email', 'Módulo de Ventas e Instalación', 'Contratos Activos', 'Soporte Prioritario', 'Módulo de Simulación y Monitoreo', 'Módulo de Facturación Automatizada', 'Acceso a API', 'Ilimitado'],
      notAvailable: 'No Disponible',
      unlimited: 'Ilimitado'
    }
  },
  services: {
    title: 'Nuestros Servicios',
    subtitle: 'Servicios',
    items: [
      {
        title: 'Servicios',
        description: 'Ofrecemos una amplia gama de soluciones para tus necesidades'
      }
    ]
  },
  about: {
    title: 'Sobre Nosotros',
    subtitle: 'Sobre Nosotros',
    content: 'Conoce más sobre nuestra empresa y misión'
  },
  contact: {
    title: 'Conéctate con nosotros',
    subtitle: 'Estamos aquí para ayudarte',
    form: {
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      company: 'Nombre de la Empresa',
      phone: 'Teléfono',
      message: 'Déjanos tu mensaje',
      submit: 'Enviar'
    }
  },
  footer: {
    navigation: {
      company: {
        title: "Empresa",
        links: {
          aboutUs: "Sobre Nosotros",
          careers: "Carreras",
          press: "Prensa",
        },
      },
      support: {
        title: "Soporte",
        links: {
          helpCenter: "Centro de Ayuda",
          contactSupport: "Contactar Soporte",
          faq: "Preguntas Frecuentes",
        },
      },
      legal: {
        title: "Legal",
        links: {
          privacyPolicy: "Política de Privacidad",
          termsOfService: "Términos de Servicio",
        },
      },
      connect: {
        title: "Conectar",
        links: {
          linkedin: "LinkedIn",
          twitter: "Twitter",
        },
      },
    },
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter",
    },
  },
}; 