import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from '../../i18n.config';
import commonES from './locales/es/common.json';
import commonEN from './locales/en/common.json';
import homeES from './locales/es/home.json';
import homeEN from './locales/en/home.json';

const resources = {
  es: {
    common: commonES,
    home: homeES,
  },
  en: {
    common: commonEN,
    home: homeEN,
  },
};

export default async function initTranslations(
  locale: string,
  namespaces: string[] = ['common']
) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      lng: locale,
      resources,
      ns: namespaces,
    });

  return {
    i18n: i18nInstance,
    resources,
    t: i18nInstance.t,
  };
}