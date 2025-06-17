"use client";

import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  const { t } = useTranslation(["common"]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("privacy.title")}
          </h1>
          <p className="text-gray-600 mb-8">{t("privacy.last_updated")}</p>

          {Object.entries(t("privacy.sections", { returnObjects: true })).map(
            ([key, section]: [string, any]) => (
              <section key={key} className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-4">{section.content}</p>
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {section.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {key === "contact" && (
                  <div className="mt-4">
                    <p className="text-gray-600">
                      Email:{" "}
                      <a
                        href="mailto:we.connect.languages@gmail.com"
                        className="text-emerald-600 hover:text-emerald-700"
                      >
                        we.connect.languages@gmail.com
                      </a>
                    </p>
                  </div>
                )}
              </section>
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}