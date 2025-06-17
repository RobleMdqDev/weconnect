'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultNS } from '../../i18n.config';

export default function TranslationsProvider({
  children,
  locale,
  resources,
  namespaces,
}: {
  children: React.ReactNode;
  locale: string;
  resources: any;
  namespaces: string[];
}) {
  const i18n = createInstance();

  i18n.use(initReactI18next).init({
    lng: locale,
    resources,
    defaultNS,
    ns: namespaces,
    interpolation: {
      escapeValue: false,
    },
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}