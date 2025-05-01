export type Lang = 'en' | 'es' | 'pt';

export type CountryCode = string;

export interface LanguageConfig {
  defaultLang: Lang;
  supportedLangs: Lang[];
  countryLangMap: Record<CountryCode, Lang>;
}

// Latin American countries that should use Spanish
export const LATAM_COUNTRIES = [
  'AR', // Argentina
  'BO', // Bolivia
  'CL', // Chile
  'CO', // Colombia
  'CR', // Costa Rica
  'CU', // Cuba
  'DO', // Dominican Republic
  'EC', // Ecuador
  'SV', // El Salvador
  'GT', // Guatemala
  'HN', // Honduras
  'MX', // Mexico
  'NI', // Nicaragua
  'PA', // Panama
  'PY', // Paraguay
  'PE', // Peru
  'UY', // Uruguay
  'VE', // Venezuela
]; 