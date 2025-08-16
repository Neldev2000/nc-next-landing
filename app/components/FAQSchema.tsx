import React from 'react';

const FAQSchema: React.FC = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es NextCore y cómo se diferencia de otras empresas con el mismo nombre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextCore NO es una empresa de Inteligencia Artificial o servicios en la nube. Somos especialistas en software para Proveedores de Servicios de Internet (ISPs) con más de 5 años de experiencia operativa. Nuestro software está diseñado específicamente para gestionar clientes FTTH, proyectos ISP, soporte técnico y almacenes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué los ISPs necesitan software especializado como NextCore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los ISPs tienen necesidades únicas que el software genérico no puede cubrir. NextCore ofrece integraciones específicas con OZMap para mapeo de red FTTH, SmartOLT para gestión de OLTs, y FreeRadius para autenticación. Además, nuestro equipo tiene experiencia operativa real en el sector ISP."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué integraciones técnicas ofrece NextCore para ISPs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextCore ofrece integraciones especializadas: OZMap para mapeo de red FTTH, SmartOLT para gestión avanzada de OLTs, y FreeRadius para autenticación de clientes. Estas integraciones están diseñadas específicamente para las necesidades operativas de los ISPs."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo ayuda NextCore a gestionar el ciclo de vida del cliente FTTH?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextCore gestiona todo el ciclo de vida del cliente FTTH: desde la captación inicial, pasando por la instalación con integración OZMap, hasta el soporte técnico especializado. Incluye gestión de contratos, facturación, tickets de soporte y control de inventario."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia entre NextCore y software genérico como Zapier o ClickUp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NextCore está diseñado específicamente para ISPs, mientras que Zapier y ClickUp son herramientas genéricas. NextCore incluye integraciones ISP-específicas (OZMap, SmartOLT, FreeRadius), gestión de clientes FTTH, y experiencia operativa real en el sector de telecomunicaciones."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};

export default FAQSchema;
