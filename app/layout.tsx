import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Providers} from "./providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title:
    "Domina el Español e Inglés con Connect Languages - Formación para Empresas y Profesionales",
  description:
    "Clases de inglés y español para empresas y profesionales. Aprende con un método comunicativo y horarios flexibles. Desde A1 hasta C2.",
  keywords:
    "clases de inglés, clases de español, formación lingüística, inglés para empresas, español para empresas, cursos de inglés online, cursos de español online, clases de idiomas, formación empresarial",
  authors: [{name: "Connect Languages"}],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-slate-800`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
