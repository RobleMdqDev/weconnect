"use client";

import {useTranslation} from "react-i18next";
import ParallaxBackground from "../ParallaxBackground";
import Link from "../ui/Link";
import {insideNavegation} from "@/app/utils/insideNavegation";

export default function Hero() {
  const {t} = useTranslation(["home"]);

  return (
    <div className="relative overflow-hidden min-h-[600px] h-screen">
      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 to-[#7FDFD4]/70" />

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="flex flex-col text-5xl md:text-6xl font-bold mb-6 text-white text-shadow-lg">
            {t("hero.title.main")}
            <span className="text-[#7FDFD4]">{t("hero.title.highlight")}</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-shadow">
            {t("hero.description")}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="#contact"
              variant="primary"
              size="lg"
              className="bg-[#7FDFD4] hover:bg-[#6FCFC4] text-white shadow-lg"
              onClick={(e) => insideNavegation(e, "#contact")}
            >
              {t("hero.buttons.primary")}
            </Link>
            <Link
              href="#about"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#7FDFD4] shadow-lg"
              onClick={(e) => insideNavegation(e, "#about")}
            >
              {t("hero.buttons.secondary")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
