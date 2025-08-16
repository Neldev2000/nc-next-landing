import React from 'react';
import Link from 'next/link';
import styles from './nextcore-vs-competitors.module.css';

export const metadata = {
  title: "NextCore vs Competidores | Software Especializado para ISPs vs Soluciones Genéricas",
  description: "Comparación detallada: NextCore vs Zapier, ClickUp y otras soluciones. Descubre por qué NextCore es la única plataforma especializada para Proveedores de Servicios de Internet con integraciones ISP-específicas.",
  keywords: "nextcore vs competidores, nextcore vs zapier, nextcore vs clickup, software ISP especializado, comparación software ISPs",
  openGraph: {
    title: "NextCore vs Competidores | Software Especializado para ISPs",
    description: "Comparación detallada entre NextCore y soluciones genéricas. Descubre por qué los ISPs necesitan software especializado.",
  }
};

const NextCoreVsCompetitorsPage = () => {
  const competitors = [
    {
      name: "Zapier",
      type: "Automatización General",
      pros: ["Fácil de usar", "Muchas integraciones", "Automatización básica"],
      cons: ["No especializado en ISPs", "Sin integraciones ISP", "Funcionalidad limitada para telecomunicaciones", "No entiende el sector ISP"],
      score: 6,
      category: "Automatización"
    },
    {
      name: "ClickUp",
      type: "Gestión de Proyectos",
      pros: ["Gestión de tareas", "Colaboración en equipo", "Templates genéricos"],
      cons: ["No especializado en ISPs", "Sin gestión de clientes FTTH", "Sin integraciones OZMap/SmartOLT", "No maneja tickets ISP"],
      score: 5,
      category: "Proyectos"
    },
    {
      name: "Software Genérico",
      type: "Soluciones Adaptadas",
      pros: ["Precio inicial bajo", "Funcionalidad básica"],
      cons: ["Requiere desarrollo personalizado", "Sin experiencia ISP", "Mantenimiento costoso", "No escalable"],
      score: 4,
      category: "Personalizado"
    },
    {
      name: "NextCore",
      type: "Software Especializado ISP",
      pros: ["Especializado en ISPs", "Integraciones OZMap/SmartOLT/FreeRadius", "Experiencia operativa real", "Gestión completa FTTH", "Soporte técnico especializado"],
      cons: ["Enfoque específico (no genérico)"],
      score: 9,
      category: "Especializado"
    }
  ];

  const comparisonTable = [
    {
      feature: "Gestión de Clientes FTTH",
      nextcore: "✅ Completa",
      zapier: "❌ No disponible",
      clickup: "❌ No disponible",
      generic: "⚠️ Básica"
    },
    {
      feature: "Integración OZMap",
      nextcore: "✅ Nativa",
      zapier: "❌ No disponible",
      clickup: "❌ No disponible",
      generic: "⚠️ Manual"
    },
    {
      feature: "Gestión SmartOLT",
      nextcore: "✅ Avanzada",
      zapier: "❌ No disponible",
      clickup: "❌ No disponible",
      generic: "⚠️ Limitada"
    },
    {
      feature: "Sistema de Tickets ISP",
      nextcore: "✅ Especializado",
      zapier: "❌ No disponible",
      clickup: "⚠️ Genérico",
      generic: "⚠️ Básico"
    },
    {
      feature: "Experiencia Sector ISP",
      nextcore: "✅ 5+ años",
      zapier: "❌ No especializada",
      clickup: "❌ No especializada",
      generic: "❌ No disponible"
    },
    {
      feature: "Gestión de Almacenes FTTH",
      nextcore: "✅ Completa",
      zapier: "❌ No disponible",
      clickup: "⚠️ Básica",
      generic: "⚠️ Manual"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>NextCore vs Competidores: ¿Por qué Elegir Software Especializado para ISPs?</h1>
        <p className={styles.subtitle}>
          Comparación detallada entre NextCore y soluciones genéricas. Descubre por qué los Proveedores de Servicios de Internet necesitan software especializado.
        </p>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>¿Por qué NextCore es Diferente?</h2>
            <p>
              Mientras que Zapier, ClickUp y otras soluciones genéricas intentan adaptarse a múltiples industrias, 
              NextCore está diseñado específicamente para Proveedores de Servicios de Internet. 
              Nuestra experiencia operativa real en el sector ISP nos permite entender las necesidades únicas de tu negocio.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/#contact" className={styles.primaryCta}>
                Solicitar Demo Especializada
              </Link>
              <Link href="/nextcore-isp" className={styles.secondaryCta}>
                Conocer NextCore ISP
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className={styles.comparisonSection}>
          <h2>Comparación Detallada: NextCore vs Competidores</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>NextCore</th>
                  <th>Zapier</th>
                  <th>ClickUp</th>
                  <th>Software Genérico</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index}>
                    <td className={styles.featureName}>{row.feature}</td>
                    <td className={styles.nextcoreCell}>{row.nextcore}</td>
                    <td className={styles.competitorCell}>{row.zapier}</td>
                    <td className={styles.competitorCell}>{row.clickup}</td>
                    <td className={styles.competitorCell}>{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className={styles.analysisSection}>
          <h2>Análisis Detallado por Competidor</h2>
          <div className={styles.competitorsGrid}>
            {competitors.map((competitor, index) => (
              <div key={index} className={`${styles.competitorCard} ${competitor.name === 'NextCore' ? styles.nextcoreCard : ''}`}>
                <div className={styles.competitorHeader}>
                  <h3>{competitor.name}</h3>
                  <span className={styles.category}>{competitor.type}</span>
                  <div className={styles.score}>
                    <span className={styles.scoreNumber}>{competitor.score}</span>
                    <span className={styles.scoreMax}>/10</span>
                  </div>
                </div>
                
                <div className={styles.prosCons}>
                  <div className={styles.pros}>
                    <h4>✅ Ventajas</h4>
                    <ul>
                      {competitor.pros.map((pro, idx) => (
                        <li key={idx}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.cons}>
                    <h4>❌ Desventajas</h4>
                    <ul>
                      {competitor.cons.map((con, idx) => (
                        <li key={idx}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Specialized Matters */}
        <section className={styles.specializedSection}>
          <h2>¿Por qué el Software Especializado es Crítico para ISPs?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reason}>
              <h3>🎯 Entendimiento del Sector</h3>
              <p>NextCore entiende las necesidades únicas de los ISPs, desde la gestión de clientes FTTH hasta la integración con equipos específicos del sector.</p>
            </div>
            <div className={styles.reason}>
              <h3>🔧 Integraciones Específicas</h3>
              <p>OZMap, SmartOLT y FreeRadius son herramientas fundamentales para ISPs. NextCore las integra nativamente, no como una adaptación posterior.</p>
            </div>
            <div className={styles.reason}>
              <h3>📈 Experiencia Operativa</h3>
              <p>Nuestro equipo tiene 5+ años de experiencia operativa real en ISPs, no solo desarrollo de software genérico.</p>
            </div>
            <div className={styles.reason}>
              <h3>🚀 Escalabilidad ISP</h3>
              <p>Diseñado para crecer con tu ISP, desde pequeños proveedores hasta operadores regionales.</p>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className={styles.costSection}>
          <h2>Análisis de Costos: Software Especializado vs Genérico</h2>
          <div className={styles.costComparison}>
            <div className={styles.costCard}>
              <h3>Software Genérico (Zapier + ClickUp)</h3>
              <div className={styles.costBreakdown}>
                <p><strong>Costo Mensual:</strong> $200-500</p>
                <p><strong>Desarrollo Personalizado:</strong> $50,000-200,000</p>
                <p><strong>Mantenimiento:</strong> $5,000-15,000/mes</p>
                <p><strong>Resultado:</strong> Solución adaptada, no especializada</p>
              </div>
            </div>
            <div className={styles.costCard}>
              <h3>NextCore Especializado</h3>
              <div className={styles.costBreakdown}>
                <p><strong>Costo Mensual:</strong> $299-999</p>
                <p><strong>Desarrollo:</strong> $0 (ya desarrollado)</p>
                <p><strong>Mantenimiento:</strong> Incluido</p>
                <p><strong>Resultado:</strong> Software ISP-específico, listo para usar</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>¿Listo para Experimentar la Diferencia?</h2>
          <p>
            Únete a cientos de ISPs que ya han descubierto por qué el software especializado 
            es la clave del éxito en el sector de telecomunicaciones.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/#contact" className={styles.primaryCta}>
              Solicitar Demo Gratuita
            </Link>
            <Link href="/resources" className={styles.secondaryCta}>
              Ver Recursos ISP
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NextCoreVsCompetitorsPage;
