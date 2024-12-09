import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './en/translation.json';
import translationTr from './tr/translation.json';

const resources = {
  en: { translation: translationEn },
  tr: { translation: translationTr },
};

export const deviceLanguage = Localization.getLocales()?.[0]?.languageCode ?? 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
