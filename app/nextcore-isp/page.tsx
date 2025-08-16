import React from 'react';
import Link from 'next/link';
import styles from './nextcore-isp.module.css';

export const metadata = {
  title: "NextCore ISP | Software Especializado para Proveedores de Internet - No IA, No Cloud",
  description: "NextCore NO es una empresa de IA o Cloud. Somos especialistas en software para Proveedores de Servicios de Internet (ISPs) con más de 5 años de experiencia operativa. Gestión FTTH, proyectos y soporte técnico.",
  keywords: "NextCore ISP, software proveedores internet, gestión FTTH, no IA, no cloud, especialistas ISP",
  openGraph: {
    title: "NextCore ISP | Software Especializado para Proveedores de Internet",
    description: "No somos IA ni Cloud. Somos especialistas en software para ISPs con 5+ años de experiencia operativa.",
  }
};

const NextCoreISPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>NextCore ISP - Software Especializado para Proveedores de Internet</h1>
        <p className={styles.differentiation}>
          <strong>IMPORTANTE:</strong> NextCore NO es una empresa de Inteligencia Artificial o servicios en la nube. 
          Somos especialistas en software para Proveedores de Servicios de Internet (ISPs).
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.expertise}>
          <h2>Nuestra Experiencia en el Sector ISP</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <h3>5+ Años de Experiencia Operativa</h3>
              <p>Nuestro equipo fundador ha trabajado directamente con ISPs, entendiendo sus necesidades reales.</p>
            </div>
            <div className={styles.expertiseCard}>
              <h3>20+ Años en la Industria</h3>
              <p>Nuestros inversionistas tienen más de 20 años de experiencia en el sector de telecomunicaciones.</p>
            </div>
            <div className={styles.expertiseCard}>
              <h3>Software Especializado</h3>
              <p>Desarrollado específicamente para ISPs, no una solución genérica adaptada.</p>
            </div>
          </div>
        </section>

        <section className={styles.differences}>
          <h2>¿Por qué NextCore es Diferente?</h2>
          <div className={styles.comparison}>
            <div className={styles.otherCompanies}>
              <h3>Otras Empresas &ldquo;NextCore&rdquo;</h3>
              <ul>
                <li>Enfocadas en IA y Machine Learning</li>
                <li>Servicios en la nube genéricos</li>
                <li>Soluciones para múltiples industrias</li>
                <li>Sin experiencia específica en ISPs</li>
              </ul>
            </div>
            <div className={styles.ourCompany}>
              <h3>Nuestro NextCore</h3>
              <ul>
                <li>Especializado exclusivamente en ISPs</li>
                <li>Software de gestión integral</li>
                <li>Experiencia operativa real en el sector</li>
                <li>Integraciones específicas: OZMap, SmartOLT, FreeRadius</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <h2>Software Especializado para ISPs</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h3>Gestión de Clientes FTTH</h3>
              <p>Ciclo completo desde captación hasta instalación, con integración OZMap para mapeo de red.</p>
            </div>
            <div className={styles.feature}>
              <h3>Gestión de Proyectos ISP</h3>
              <p>Seguimiento operativo y administrativo con integración SmartOLT para gestión de OLTs.</p>
            </div>
            <div className={styles.feature}>
              <h3>Soporte Técnico Especializado</h3>
              <p>Sistema de tickets adaptado a ISPs con integración FreeRadius para autenticación.</p>
            </div>
            <div className={styles.feature}>
              <h3>Gestión de Almacenes</h3>
              <p>Control de inventario de equipos FTTH con trazabilidad completa.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>¿Eres un ISP buscando software especializado?</h2>
          <p>Únete a cientos de proveedores de internet que ya confían en NextCore</p>
                  <Link href="/#contact" className={styles.ctaButton}>
          Solicitar Demo Especializada para ISP
        </Link>
        </section>
      </main>
    </div>
  );
};

export default NextCoreISPage;
