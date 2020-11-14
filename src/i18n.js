import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '../public/locales/index';


i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    resources,
    fallbackLng: {
      'ru-RU': ['ru'],
      'en-EN': ['en'],
      'default': ['en']
    },
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
