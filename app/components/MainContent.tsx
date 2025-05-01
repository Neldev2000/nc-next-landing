"use client"
import React from 'react';
// Assuming Pricing component has also been created/adapted
// If not, you might need to adapt it or comment out the import/usage
import Pricing from './Pricing';
import Header from './Header';
import Hero from './Hero';
import Features from './Feature'; // Corrected filename from previous steps
import Contact from './Contact';
import Footer from './Footer';
import Modules from './Modules';
import type { Lang } from '@/app/i18n/utils/types';

interface MainContentProps {
  lang: Lang;
}

const MainContent: React.FC<MainContentProps> = ({ lang }) => {
  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Pricing lang={lang} />
        <Modules lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default MainContent;
