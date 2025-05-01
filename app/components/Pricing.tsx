import React from 'react';
import styles from './Pricing.module.css';
import { getDictionary } from '@/app/i18n/utils/languageUtils';
import type { Lang } from '@/app/i18n/utils/types';

interface PricingProps {
  lang: Lang;
}

// Checkmark SVG component
const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  // --- Data Definitions ---
  interface PricingPlan {
    id: 'basic' | 'standard' | 'premium'; // Added ID for key mapping
    name: string;
    price: string;
    isHighlighted: boolean;
    buttonText: string;
  }
  
  const pricingPlans: PricingPlan[] = [
    {
      id: 'basic',
      name: dict.pricing.plans[0].name,
      price: dict.pricing.plans[0].price,
      isHighlighted: false,
      buttonText: dict.pricing.plans[0].button,
    },
    {
      id: 'standard',
      name: dict.pricing.plans[1].name,
      price: dict.pricing.plans[1].price,
      isHighlighted: true,
      buttonText: dict.pricing.plans[1].button,
    },
    {
      id: 'premium',
      name: dict.pricing.plans[2].name,
      price: dict.pricing.plans[2].price,
      isHighlighted: false,
      buttonText: dict.pricing.plans[2].button,
    },
  ];

  interface Feature {
    name: string;
    basic: boolean | string;
    standard: boolean | string;
    premium: boolean | string;
  }

  const features: Feature[] = [
    { name: dict.pricing.features.items[0], basic: true, standard: true, premium: true },
    { name: dict.pricing.features.items[1], basic: true, standard: true, premium: true },
    { name: dict.pricing.features.items[2], basic: "300", standard: "500", premium: dict.pricing.features.unlimited },
    { name: dict.pricing.features.items[3], basic: true, standard: true, premium: true },
    { name: dict.pricing.features.items[4], basic: false, standard: true, premium: true },
    { name: dict.pricing.features.items[5], basic: dict.pricing.features.notAvailable, standard: "5000", premium: dict.pricing.features.unlimited },
    { name: dict.pricing.features.items[6], basic: false, standard: true, premium: true },
    { name: dict.pricing.features.items[7], basic: false, standard: false, premium: true },
    { name: dict.pricing.features.items[8], basic: false, standard: false, premium: true },
    { name: dict.pricing.features.items[9], basic: false, standard: false, premium: true },
  ];

  // Helper function to render feature cell content
  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? <CheckIcon /> : null;
    }
    return <span>{value}</span>;
  };

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.pricingContainer}>
        <h2 className={styles.title}>{dict.pricing.title}</h2>

        {/* Desktop Table - use module styles for responsive display */}
        <div className={styles.pricingTable}>
          <div className={styles.pricingHeader}>
            <div className={styles.emptyCell}></div>
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`${styles.planHeader} ${plan.isHighlighted ? styles.highlighted : ''}`}
              >
                <div className={styles.planInfo}>
                  <h3>{plan.name}</h3>
                  <p className={styles.price}>{plan.price}</p>
                </div>
                <button
                  className={`${plan.isHighlighted ? styles.btnHighlighted : styles.btnNormal}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className={styles.pricingBody}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureRow}>
                <div className={styles.featureName}>{feature.name}</div>
                <div className={styles.featureCell}>{renderFeatureValue(feature.basic)}</div>
                <div className={styles.featureCell}>{renderFeatureValue(feature.standard)}</div>
                <div className={styles.featureCell}>{renderFeatureValue(feature.premium)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* We're removing the duplicate mobile version. Responsive styling 
            should be handled in CSS module file instead. */}
      </div>
    </section>
  );
};

export default Pricing;
