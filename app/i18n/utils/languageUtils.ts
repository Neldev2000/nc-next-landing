import type { Lang } from './types';
import { languageConfig } from './config';
import { en, es, pt } from '../locales';
import type { Dictionary } from '../locales/en';

// Dictionary mapping
const dictionaries: Record<Lang, Dictionary> = {
  en,
  es,
  pt,
};

/**
 * Get dictionary for a specific language
 */
export function getDictionary(lang: Lang): Dictionary {
  const dict = dictionaries[lang];
  if (!dict) {
    throw new Error(`Dictionary not found for language: ${lang}`);
  }
  return dict;
}

/**
 * Validate if a language is supported
 */
export function isValidLanguage(lang: string): lang is Lang {
  return languageConfig.supportedLangs.includes(lang as Lang);
}

/**
 * Get language for a request
 */
export function getRequestLanguage(request: Request): Lang {
  const url = new URL(request.url);
  const langParam = url.searchParams.get('lang');
  
  if (langParam && isValidLanguage(langParam)) {
    return langParam;
  }
  
  return languageConfig.defaultLang;
} 