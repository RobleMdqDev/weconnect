import type { InitOptions } from "i18next";

export const defaultNS = "common";
export const fallbackLng = "es";

export const i18nConfig: InitOptions = {
  defaultNS,
  fallbackLng,
  supportedLngs: ["es", "en"],
  ns: ["common", "home"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};