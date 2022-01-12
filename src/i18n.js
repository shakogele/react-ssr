import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(languageDetector).use(initReactI18next).init({
  whitelist: ['en', 'de'],
  fallbackLng: 'en',
  debug: false,
  detection: {
    order: ['path'],
    lookupFromPathIndex: 0,
    checkWhitelist: true
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18n;