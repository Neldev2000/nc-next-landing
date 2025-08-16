import React from 'react';
import Link from 'next/link';
import styles from './recursos.module.css';

export const metadata = {
  title: "Recursos para ISPs | NextCore - Software de Gestión para Proveedores de Internet",
  description: "Recursos especializados para Proveedores de Servicios de Internet. Guías, tutoriales y mejores prácticas para la gestión de ISPs con NextCore.",
  keywords: "recursos ISPs, guías gestión ISP, tutoriales FTTH, mejores prácticas ISP, software gestión proveedores internet"
};

const RecursosPage = () => {
  const recursos = [
    {
      categoria: "Gestión de Clientes FTTH",
      recursos: [
        {
          titulo: "Guía completa: Ciclo de vida del cliente FTTH",
          descripcion: "Aprende a gestionar clientes desde la captación hasta la instalación",
          url: "/recursos/ciclo-vida-cliente-ftth",
          tipo: "Guía"
        },
        {
          titulo: "Integración OZMap + NextCore: Mapeo de red FTTH",
          descripcion: "Optimiza tu red con la integración perfecta de mapeo",
          url: "/recursos/integracion-ozmap-nextcore",
          tipo: "Tutorial"
        }
      ]
    },
    {
      categoria: "Gestión de Proyectos ISP",
      recursos: [
        {
          titulo: "5 errores comunes al elegir software de gestión para ISPs",
          descripcion: "Evita los errores más frecuentes en la selección de software",
          url: "/recursos/errores-software-isp",
          tipo: "Artículo"
        },
        {
          titulo: "Integración SmartOLT: Gestión avanzada de OLTs",
          descripcion: "Maximiza el rendimiento de tu red con SmartOLT",
          url: "/recursos/integracion-smartolt",
          tipo: "Tutorial"
        }
      ]
    },
    {
      categoria: "Soporte Técnico",
      recursos: [
        {
          titulo: "Sistema de tickets especializado para ISPs",
          descripcion: "Optimiza tu soporte técnico con NextCore",
          url: "/recursos/sistema-tickets-isp",
          tipo: "Guía"
        },
        {
          titulo: "Automatización con FreeRadius para ISPs",
          descripcion: "Automatiza la autenticación de clientes",
          url: "/recursos/automatizacion-freeradius",
          tipo: "Tutorial"
        }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Recursos para ISPs</h1>
        <p>
          Contenido especializado para Proveedores de Servicios de Internet. 
          Aprende las mejores prácticas y optimiza tu operación con NextCore.
        </p>
      </header>

      <main className={styles.main}>
        {recursos.map((categoria, index) => (
          <section key={index} className={styles.categoria}>
            <h2>{categoria.categoria}</h2>
            <div className={styles.recursosGrid}>
              {categoria.recursos.map((recurso, recursoIndex) => (
                <article key={recursoIndex} className={styles.recurso}>
                  <div className={styles.recursoHeader}>
                    <span className={styles.tipo}>{recurso.tipo}</span>
                    <h3>{recurso.titulo}</h3>
                  </div>
                  <p>{recurso.descripcion}</p>
                  <Link href={recurso.url} className={styles.leerMas}>
                    Leer más →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <aside className={styles.cta}>
        <h3>¿Listo para optimizar tu ISP?</h3>
        <p>Únete a cientos de ISPs que ya confían en NextCore</p>
        <Link href="/#contact" className={styles.ctaButton}>
          Solicitar Demo
        </Link>
      </aside>
    </div>
  );
};

export default RecursosPage;
