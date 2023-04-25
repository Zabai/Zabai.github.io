import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './locales/en.json';
import ES from './locales/es.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  lng: 'es',
  resources: {
    en: { translation: EN },
    es: { translation: ES },
  },
  returnNull: false,
  saveMissing: true,
});

export default i18n;
