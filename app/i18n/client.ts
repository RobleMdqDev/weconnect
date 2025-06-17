"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nConfig } from "../../i18n.config";
import commonES from "./locales/es/common.json";
import commonEN from "./locales/en/common.json";
import homeES from "./locales/es/home.json";
import homeEN from "./locales/en/home.json";

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

i18next
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    resources,
    lng: "es", // default language
  });

export default i18next;