// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';

// 定义翻译资源
const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // 默认语言
    fallbackLng: "en", // 当找不到翻译时回退到的语言
    interpolation: {
      escapeValue: false // react已经默认转义防止XSS攻击
    }
  });

export default i18n;