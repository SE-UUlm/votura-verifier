import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  // load translation using http
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'de'],
    debug: false,
    interpolation: { escapeValue: false },
  })
  .catch((error: unknown) => {
    console.error('i18next init failed', error);
  });

// Screen readers and hyphenation both read the document language, so it has to follow the
// resources rather than stay at whatever index.html was shipped with.
i18n.on('languageChanged', (language: string): void => {
  document.documentElement.lang = language;
});

export default i18n;
