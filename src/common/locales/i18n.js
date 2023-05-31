// Import React
import {NativeModules} from 'react-native';

// Import i18n
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import Languages
import en from './en/translation.json';
import tr from './tr/translation.json';

const currentDeviceLanguage =
  NativeModules?.RNLocalize?.initialConstants?.locales?.[0]?.languageCode === 'tr' ? 'tr' : 'en';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: currentDeviceLanguage,
  fallbackLng: currentDeviceLanguage,
  resources: {
    tr: {translation: tr},
    en: {translation: en},
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
