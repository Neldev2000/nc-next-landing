'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './IndustryHero.module.css';

interface IndustryHeroProps {
  searchQuery?: string;
  userIndustry?: string;
}

const IndustryHero: React.FC<IndustryHeroProps> = ({ searchQuery, userIndustry }) => {
  const [heroContent, setHeroContent] = useState({
    title: '',
    subtitle: '',
    cta: '',
    keywords: [] as string[]
  });

  useEffect(() => {
    // Dynamic content based on search context
    if (searchQuery?.toLowerCase().includes('isp') || 
        searchQuery?.toLowerCase().includes('proveedor') ||
        searchQuery?.toLowerCase().includes('internet')) {
      setHeroContent({
        title: 'NextCore | Software Especializado para Proveedores de Internet (ISPs)',
        subtitle: 'La única plataforma integral diseñada específicamente para ISPs. Gestión FTTH, proyectos, soporte técnico y almacenes en una sola herramienta.',
        cta: 'Solicitar Demo para ISP',
        keywords: ['software ISPs', 'gestión FTTH', 'plataforma ISP', 'proveedores internet']
      });
    } else if (searchQuery?.toLowerCase().includes('ftth') || 
               searchQuery?.toLowerCase().includes('fibra')) {
      setHeroContent({
        title: 'NextCore | Gestión Completa de Redes FTTH para ISPs',
        subtitle: 'Software especializado en gestión de redes de fibra óptica. Integración con OZMap, SmartOLT y FreeRadius.',
        cta: 'Ver Gestión FTTH',
        keywords: ['gestión FTTH', 'redes fibra óptica', 'OZMap', 'SmartOLT']
      });
    } else if (searchQuery?.toLowerCase().includes('nextcore') || 
               searchQuery?.toLowerCase().includes('next core')) {
      setHeroContent({
        title: 'NextCore | Plataforma de Gestión Integral para ISPs',
        subtitle: 'No somos una empresa de IA o Cloud. Somos especialistas en software para Proveedores de Servicios de Internet con más de 5 años de experiencia operativa.',
        cta: 'Conocer NextCore para ISPs',
        keywords: ['NextCore ISP', 'software proveedores internet', 'gestión integral ISP']
      });
    } else {
      // Default content
      setHeroContent({
        title: 'NextCore | Software de Gestión para Proveedores de Internet',
        subtitle: 'Plataforma integral especializada en gestión de ISPs. FTTH, proyectos, soporte técnico y almacenes.',
        cta: 'Solicitar Demo',
        keywords: ['software ISPs', 'gestión proveedores internet', 'plataforma ISP']
      });
    }
  }, [searchQuery, userIndustry]);

  return (
    <main className={styles.hero} role="main">
      <div className={styles.heroBackground}>
        <div className={styles.backgroundImageWrapper}>
          <Image
            src="/main.jpg"
            alt={`${heroContent.title} - Software especializado para ISPs`}
            fill
            style={{ objectFit: "cover" }}
            priority
            quality={85}
          />
        </div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <h1>{heroContent.title}</h1>
        <p>{heroContent.subtitle}</p>
        
        {/* Dynamic keywords for SEO */}
        <div className={styles.seoKeywords} style={{ display: 'none' }}>
          {heroContent.keywords.map((keyword, index) => (
            <span key={index}>{keyword}</span>
          ))}
        </div>
        
        <a 
          href="#contact" 
          className={styles.ctaButton}
          aria-label={`${heroContent.cta} - Software especializado para ISPs`}
        >
          {heroContent.cta}
        </a>
      </div>
    </main>
  );
};

export default IndustryHero;
