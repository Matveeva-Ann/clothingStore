import enTranslations from 'i18n/copies/enTranslations';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import uaTranslations from './copies/uaTranslations';
import LanguageDetector from 'i18next-browser-languagedetector';

const translations = {
  uk: uaTranslations,
  en: enTranslations,
};

const initI18n = async () => {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      fallbackLng: 'en',
      debug: true,
      resources: translations
    });
};

export default initI18n().then(() => i18next);
