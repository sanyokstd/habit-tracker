import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import translationEn from './locales/en-US/translation.json';
import translationUa from './locales/uk-UA/translation.json';
import translationEs from './locales/es-ES/translation.json';
import translationDe from './locales/de-DE/translation.json';
import translationFr from './locales/fr-FR/translation.json';
import translationPl from './locales/pl-PL/translation.json';
import translationIt from './locales/it-IT/translation.json';
import translationJa from './locales/ja-JP/translation.json';
import translationZh from './locales/zh-CN/translation.json';
import translationPt from './locales/pt-BR/translation.json';
import translationKo from './locales/ko-KR/translation.json';

const resources = {
  'en-US': { translation: translationEn },
  'uk-UA': { translation: translationUa },
  'es-ES': { translation: translationEs },
  'de-DE': { translation: translationDe },
  'fr-FR': { translation: translationFr },
  'pl-PL': { translation: translationPl },
  'it-IT': { translation: translationIt },
  'ja-JP': { translation: translationJa },
  'zh-CN': { translation: translationZh },
  'pt-BR': { translation: translationPt },
  'ko-KR': { translation: translationKo },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('language');

  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng: savedLanguage,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
