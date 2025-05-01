'use client'; // Needed for the smooth scroll click handler

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
// Adjust the import path as necessary
import { getDictionary } from '@/app/i18n/utils/languageUtils'; 
import type { Lang } from '@/app/i18n/utils/types';

interface HeroProps {
  lang: Lang;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  // Smooth scroll handler (can be reused or imported from a util)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1)); // Remove #
    if (targetElement) {
      const headerOffset = 80; // Match header height for correct positioning
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {/* Use Next.js Image for background */}
        {/* Added a wrapper div for potentially easier styling/positioning if needed */}
        <div className={styles.backgroundImageWrapper}>
          <Image
            src="/main.jpg" // Ensure this image is in the /public folder
            alt="NextCore team collaboration" // Use dict if available: dict.hero.imageAlt
            fill // Replaces layout="fill"
            style={{ objectFit: "cover" }} // Replaces objectFit="cover"
            priority // Prioritize loading the hero image
            quality={85}
          />
        </div>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <h1>{dict.hero.title}</h1>
        <p>{dict.hero.subtitle}</p>
        <a 
          href="#contact" 
          className={styles.ctaButton}
          onClick={(e) => handleScroll(e, '#contact')} // Add smooth scroll handler
        >
          {dict.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
