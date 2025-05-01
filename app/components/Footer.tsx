import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for internal navigation if needed
import styles from './Footer.module.css';
// Adjust the import path as necessary for your i18n setup
import { getDictionary } from '@/app/i18n/utils/languageUtils'; 
import type { Lang } from '@/app/i18n/utils/types';

// Define the props for the Footer component
interface FooterProps {
  lang: Lang;
}

// Placeholder components for social icons (replace with actual SVGs or an icon library)
const FacebookIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">...</svg>; // Placeholder
const InstagramIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">...</svg>; // Placeholder
const TwitterIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">...</svg>; // Placeholder

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  const footerNavigation = [
    {
      title: dict.footer.navigation.company.title,
      links: [
        { name: dict.footer.navigation.company.links.aboutUs, href: '#' }, // Add actual hrefs
        { name: dict.footer.navigation.company.links.careers, href: '#' },
        { name: dict.footer.navigation.company.links.press, href: '#' },
      ],
    },
    {
      title: dict.footer.navigation.support.title,
      links: [
        { name: dict.footer.navigation.support.links.helpCenter, href: '#' },
        { name: dict.footer.navigation.support.links.contactSupport, href: '#' },
        { name: dict.footer.navigation.support.links.faq, href: '#' },
      ],
    },
    {
      title: dict.footer.navigation.legal.title,
      links: [
        { name: dict.footer.navigation.legal.links.privacyPolicy, href: '#' },
        { name: dict.footer.navigation.legal.links.termsOfService, href: '#' },
      ],
    },
    {
      title: dict.footer.navigation.connect.title,
      links: [
        { name: dict.footer.navigation.connect.links.linkedin, href: '#' },
        { name: dict.footer.navigation.connect.links.twitter, href: '#' },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.separator}></div>
      
      <div className={styles.footerContent}>
        {/* Logo and social icons */}
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            {/* Use Next.js Image for the logo */}
            <Image src="/logo.svg" alt="NextCore Logo" width={28} height={28} className={styles.logomark} />
            <span className={styles.companyName}>NextCore</span>
          </div>

          <div className={styles.socialIcons}>
            <a href="#" aria-label={dict.footer.social.facebook}>
              <FacebookIcon />
            </a>
            <a href="#" aria-label={dict.footer.social.instagram}>
              <InstagramIcon />
            </a>
            <a href="#" aria-label={dict.footer.social.twitter}>
              <TwitterIcon />
            </a>
          </div>
        </div>

        {/* Navigation columns */}
        <nav className={styles.footerNav}>
          {footerNavigation.map((category, index) => (
            <div key={index} className={styles.navColumn}>
              <h3>{category.title}</h3>
              {category.links.map((link, linkIndex) => (
                // Use Next/Link for internal links, or <a> for external/placeholders
                <a key={linkIndex} href={link.href}>{link.name}</a> 
              ))}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

