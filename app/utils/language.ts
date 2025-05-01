export function getLanguageFromAcceptLanguage(acceptLanguage: string): string {
  // Default to English if no language preference is found
  if (!acceptLanguage) return 'en';

  // Parse the Accept-Language header
  const languages = acceptLanguage.split(',')
    .map(lang => lang.split(';')[0].trim())
    .filter(lang => ['en', 'es', 'pt'].includes(lang));

  // Return the first supported language, or default to English
  return languages[0] || 'en';
} 