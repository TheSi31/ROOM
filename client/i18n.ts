import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // язык по умолчанию
    debug: true, // для отладки
    interpolation: {
      escapeValue: false, // необходимо для React
    },
    react: {
      useSuspense: false, // отключаем suspense, так как в React 17 нет необходимости
    },
  });

export default i18n;
