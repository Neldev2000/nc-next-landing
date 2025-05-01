import React from 'react';
import Image from 'next/image';
import styles from './Features.module.css';
import { getDictionary } from '@/app/i18n/utils/languageUtils';
import type { Lang } from '@/app/i18n/utils/types';

// Define the structure for a single feature item
interface FeatureItem {
  title: string;
  description: string;
  image: string;
}

// Define the structure for the dictionary's features section
interface DictFeatures {
  title: string;
  items: FeatureItem[];
}

// Define the props for the Features component to accept lang
interface FeaturesProps {
  lang: Lang; // Expecting Lang type from your i18n setup
}

// Define the Feature type based on the dictionary structure
interface Feature extends FeatureItem {}

const Features: React.FC<FeaturesProps> = ({ lang }) => {
  // Get the dictionary based on the lang prop
  const dict = getDictionary(lang);

  // Define the features array directly using the dictionary
  // This structure mirrors the one in the original Astro component
  const features: Feature[] = [
    {
      title: dict.features.items[0].title,
      description: dict.features.items[0].description,
      // Keep using relative paths for images, assuming they are in public/features
      image: "/features/document.svg" 
    },
    {
      title: dict.features.items[1].title,
      description: dict.features.items[1].description,
      image: "/features/datacenter.svg"
    },
    {
      title: dict.features.items[2].title,
      description: dict.features.items[2].description,
      image: "/features/sales.svg"
    },
    {
      title: dict.features.items[3].title,
      description: dict.features.items[3].description,
      image: "/features/warehouse.svg"
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{dict.features.title}</h2>

        <div className={styles.featuresGrid}>
          {/* First row */}
          <div className={styles.featuresRow}>
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <div className={styles.cardImage}>
                    {/* Use Next.js Image component for optimization */}
                    <Image 
                      src={feature.image} 
                      alt={`UI for ${feature.title}`}
                      layout="fill" // Fills the parent container
                      objectFit="cover" // Equivalent to CSS object-fit: cover
                      priority={index < 2} // Prioritize loading images in the first row
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className={styles.featuresRow}>
            {features.slice(2, 4).map((feature, index) => (
              <div key={index + 2} className={styles.featureCard}> {/* Adjust key for uniqueness */}
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <div className={styles.cardImage}>
                    <Image 
                      src={feature.image} 
                      alt={`UI for ${feature.title}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
