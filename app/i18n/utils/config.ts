import type { LanguageConfig } from './types';
import { LATAM_COUNTRIES } from './types';

// Create the country-to-language mapping
const countryLangMap: LanguageConfig['countryLangMap'] = {
  // Brazil
  'BR': 'pt',
  
  // Add all LATAM countries with Spanish
  ...Object.fromEntries(LATAM_COUNTRIES.map(country => [country, 'es'])),
};

export const languageConfig: LanguageConfig = {
  defaultLang: 'en',
  supportedLangs: ['en', 'es', 'pt'],
  countryLangMap,
}; 