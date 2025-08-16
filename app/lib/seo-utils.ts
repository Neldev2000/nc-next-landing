import { Metadata } from 'next';

// Dynamic metadata generation for different pages
export function generateMetadata(
  page: string,
  customData?: Record<string, string>
): Metadata {
  const baseUrl = 'https://next-core.net';
  
  const metadataMap = {
    home: {
      title: "NextCore | Plataforma de Gestión Integral para ISPs - Software FTTH",
      description: "Software especializado para Proveedores de Servicios de Internet (ISPs). Gestión de clientes FTTH, proyectos, soporte técnico y almacenes. Centraliza toda la operación de tu ISP en una sola plataforma.",
      keywords: "software ISPs, gestión FTTH, software proveedores internet, gestión clientes ISP, tickets soporte ISP, gestión almacenes ISP, OZMap, SmartOLT",
      url: baseUrl,
    },
    recursos: {
      title: "Recursos para ISPs | NextCore - Software de Gestión para Proveedores de Internet",
      description: "Recursos especializados para Proveedores de Servicios de Internet. Guías, tutoriales y mejores prácticas para la gestión de ISPs con NextCore.",
      keywords: "recursos ISPs, guías gestión ISP, tutoriales FTTH, mejores prácticas ISP, software gestión proveedores internet",
      url: `${baseUrl}/recursos`,
    },
    features: {
      title: "Características NextCore | Gestión FTTH, Proyectos y Soporte para ISPs",
      description: "Descubre las características especializadas de NextCore para ISPs: gestión de clientes FTTH, proyectos, soporte técnico y almacenes.",
      keywords: "características software ISP, gestión FTTH, sistema tickets ISP, gestión proyectos ISP",
      url: `${baseUrl}/#features`,
    }
  };

  const pageData = metadataMap[page as keyof typeof metadataMap] || metadataMap.home;
  
  return {
    title: customData?.title || pageData.title,
    description: customData?.description || pageData.description,
    keywords: customData?.keywords || pageData.keywords,
    authors: [{ name: "NextCore Team" }],
    creator: "NextCore",
    publisher: "NextCore",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: customData?.url || pageData.url,
    },
    openGraph: {
      title: customData?.title || pageData.title,
      description: customData?.description || pageData.description,
      url: customData?.url || pageData.url,
      siteName: 'NextCore',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'NextCore - Plataforma de gestión para ISPs',
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: customData?.title || pageData.title,
      description: customData?.description || pageData.description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Enhanced Schema.org markup generator
export function generateSchemaMarkup(page: string) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NextCore",
    "description": "Plataforma de gestión integral especializada para Proveedores de Servicios de Internet (ISPs).",
    "url": "https://next-core.net",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "NextCore",
      "description": "Empresa especializada en software para ISPs con más de 5 años de experiencia operativa en el sector"
    },
    "featureList": [
      "Gestión de clientes FTTH",
      "Gestión de proyectos ISP",
      "Sistema de tickets de soporte",
      "Gestión de almacenes e inventario",
      "Integración con OZMap",
      "Integración con SmartOLT",
      "Gestión de contratos y suscripciones",
      "Reportes y analytics"
    ],
    "screenshot": "https://next-core.net/screenshot.jpg",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-01",
    "publisher": {
      "@type": "Organization",
      "name": "NextCore",
      "url": "https://next-core.net"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Proveedores de Servicios de Internet (ISPs)"
    },
    "keywords": "software ISPs, gestión FTTH, software proveedores internet, gestión clientes ISP, tickets soporte ISP, gestión almacenes ISP"
  };

  // Add page-specific schema
  if (page === 'recursos') {
    return {
      ...baseSchema,
      "@type": "WebPage",
      "name": "Recursos para ISPs - NextCore",
      "description": "Recursos especializados para Proveedores de Servicios de Internet",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://next-core.net"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Recursos",
            "item": "https://next-core.net/recursos"
          }
        ]
      }
    };
  }

  return baseSchema;
}

// Performance optimization utilities
export function optimizeImages(src: string, alt: string, priority = false) {
  return {
    src,
    alt,
    priority,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    quality: 85,
    placeholder: "blur",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  };
}

// Cache control headers for better performance
export function getCacheHeaders() {
  return {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  };
}

// Generate sitemap data
export function generateSitemapData() {
  const baseUrl = 'https://next-core.net';
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/recursos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
