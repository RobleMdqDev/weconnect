"use client";

import { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n/client";

export function Providers({ children }: PropsWithChildren) {
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  );
}