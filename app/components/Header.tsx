'use client'; // Needed for hooks like useState, useEffect, useRouter

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';
// Adjust import paths as necessary
import { getDictionary } from '@/app/i18n/utils/languageUtils'; 
import { languageConfig } from '@/app/i18n/utils/config';
import type { Lang } from '@/app/i18n/utils/types';

// Define the props for the Header component
interface HeaderProps {
  lang: Lang;
}

// Inline SVGs as React components
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.menuIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const FeaturesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.mobileIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const PricingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.mobileIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.mobileIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LoginIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.mobileIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Language change handler
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    // Extract the path segments after the language code
    const pathSegments = pathname.split('/').slice(2);
    const newPath = `/${newLang}/${pathSegments.join('/')}`;
    router.push(newPath);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1)); // Remove #
    if (targetElement) {
      const headerOffset = 80; // Adjust as needed
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking a link
    closeMobileMenu(); 
  };

  // Add/Remove body overflow style when mobile menu opens/closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function to reset overflow if component unmounts while menu is open
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const languageSelector = (
    <select 
      className={styles.languageSelect} 
      value={lang} 
      onChange={handleLanguageChange}
      aria-label="Select language"
    >
      {languageConfig.supportedLangs.map(l => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );

  const navLinks = [
    { href: '#features', text: dict.header.nav.features, icon: <FeaturesIcon /> },
    { href: '/resources', text: 'Resources', icon: <FeaturesIcon /> }, // Add resources link
    { href: '#pricing', text: dict.header.nav.pricing, icon: <PricingIcon /> },
    { href: '#contact', text: dict.header.nav.contact, icon: <ContactIcon /> },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.navLeft}>
              {/* Logo */}
              <div className={styles.logoContainer}>
                <Image src="/logo.svg" alt="NextCore Logo" width={40} height={40} className={styles.logoImg} />
                <Link href={`/${lang}`} className={styles.logo}>
                  NextCore
                </Link>
              </div>

              {/* Desktop Navigation Links */}
              <div className={styles.navLinks}>
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className={styles.navLink} onClick={(e) => handleScroll(e, link.href)}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section: Login Button and Language Selector */}
            <div className={styles.navRight}>
              {/* Language Selector (Desktop) */}
              <div className={styles.languageSelector}>
                {languageSelector}
              </div>

              {/* Login Button (Desktop) */}
              <a href="https://app.next-core.net/auth" className={styles.loginButton}>
                {dict.header.nav.login}
              </a>

              {/* Mobile Menu Button */}
              <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
                <MenuIcon />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuActive : ''}`}>
        <div className={styles.menuOverlay} onClick={closeMobileMenu}></div>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileNavLinks}>
            {/* Mobile Navigation Links */} 
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={styles.mobileNavLink} onClick={(e) => handleScroll(e, link.href)}>
                {link.icon}
                <span>{link.text}</span>
              </a>
            ))}
            {/* Language Selector (Mobile) */}
            <div className={styles.mobileLanguageSelectorWrapper}>
               {languageSelector}
            </div>
            {/* Login Button (Mobile) */}
            <a href="https://app.next-core.net/auth" className={`${styles.mobileNavLink} ${styles.mobileLogin}`}>
              <LoginIcon />
              <span>{dict.header.nav.login}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
