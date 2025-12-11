export const i18n = {
  locales: [
    { code: 'en-US', name: 'English', icon: '🇺🇸' },
    { code: 'fr', name: 'Français', icon: '🇫🇷' },
    { code: 'ar', name: 'العربية', icon: '🇸🇦' },
    { code: 'bn', name: 'বাংলা', icon: '🇧🇩' }, // ✅ ADD THIS
  ],
  defaultLocale: 'en-US',
};

export const getDirection = (locale: string) => {
  return locale === 'ar' ? 'rtl' : 'ltr';
};
export type I18nConfig = typeof i18n;
export type Locale = I18nConfig['locales'][number];

// export const i18n = {
//   locales: [
//     { code: 'en-US', name: 'English', icon: '🇺🇸' },
//     { code: 'fr', name: 'Français', icon: '🇫🇷' },
//     { code: 'ar', name: 'العربية', icon: '🇸🇦' },
//     { code: 'bn', name: 'বাংলা', icon: '🇧🇩' }, // ✅ ADD THIS
//   ],
//   defaultLocale: 'bn', // ✅ চাইলে Bangla default করো
// };

// export const getDirection = (locale: string) => {
//   return locale === 'ar' ? 'rtl' : 'ltr';
// };
