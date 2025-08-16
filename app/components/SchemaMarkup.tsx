import React from 'react';

const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NextCore",
    "description": "Plataforma de gestión integral especializada para Proveedores de Servicios de Internet (ISPs). Software completo para la gestión de clientes FTTH, proyectos, soporte técnico y almacenes.",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;
