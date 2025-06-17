import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/TranslationsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connect Languages - Master English with Personalized Learning",
  description:
    "Transform your English skills with our innovative teaching methods. Native speakers, flexible schedules, and personalized attention for guaranteed results.",
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { t, resources } = await initTranslations(lang, ['common', 'home']);

  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-emerald-50 text-slate-800`}>
        <TranslationsProvider
          resources={resources}
          locale={lang}
          namespaces={['common', 'home']}
        >
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}