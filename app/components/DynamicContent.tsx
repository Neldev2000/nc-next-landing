import React from 'react';
import { headers } from 'next/headers';

interface DynamicContentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  userAgent?: string;
  location?: string;
}

const DynamicContent: React.FC<DynamicContentProps> = async ({
  children,
  fallback,
  location
}) => {
  const headersList = await headers();
  const userAgentHeader = headersList.get('user-agent') || '';
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Detect if user is from ISP industry based on user agent or other signals
  const isISPIndustry = userAgentHeader.includes('ISP') || 
                       userAgentHeader.includes('network') ||
                       location === 'ISP';

  // Detect language preference
  const prefersSpanish = acceptLanguage.includes('es') || 
                        acceptLanguage.includes('es-ES') ||
                        acceptLanguage.includes('es-MX');

  // Dynamic content based on user context
  const getDynamicContent = () => {
    if (isISPIndustry) {
      return (
        <div className="isp-industry-content">
          <h3>Contenido Especializado para ISPs</h3>
          <p>Como proveedor de servicios de internet, sabrás que NextCore está diseñado específicamente para tu industria.</p>
          <ul>
            <li>Integración nativa con OZMap para mapeo de red FTTH</li>
            <li>Gestión especializada de OLTs con SmartOLT</li>
            <li>Sistema de tickets adaptado a soporte técnico ISP</li>
          </ul>
        </div>
      );
    }

    if (prefersSpanish) {
      return (
        <div className="spanish-content">
          <h3>Software Especializado para Proveedores de Internet</h3>
          <p>NextCore es la solución integral que tu ISP necesita para centralizar toda la operación.</p>
        </div>
      );
    }

    return children || fallback;
  };

  return (
    <div className="dynamic-content-wrapper">
      {getDynamicContent()}
    </div>
  );
};

export default DynamicContent;
