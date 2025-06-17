"use client";

import {useState} from "react";
import {useScrollPosition} from "../hooks/useScrollPosition";
import {Bars3Icon, GlobeAltIcon} from "@heroicons/react/24/outline";
import {useTranslation} from "react-i18next";

import Link from "./ui/Link";
import Logo from "./ui/Logo";
import MobileMenu from "./MobileMenu";
import {Menu} from "@headlessui/react";
import {NavbarLinkType} from "./types";
import {insideNavegation} from "../utils/insideNavegation";

import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isStaticPage = pathname === "/privacy" || pathname === "/terms";
  const scrolled = useScrollPosition() || isStaticPage;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {i18n, t} = useTranslation(["common"]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const navLinks = t("nav", {
    returnObjects: true,
  }) as NavbarLinkType;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-sm shadow-sm h-16"
            : "bg-[#7FDFD4]/0 h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo className={scrolled ? "h-16 w-16" : "h-24 w-24"} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              {Object.entries(navLinks.links).map(([key]) => (
                <Link
                  key={`navLinkTo${navLinks.links?.[key].href}`}
                  href={t(`nav.links.${key}.href`)}
                  variant="nav"
                  className={`transition-colors duration-300 focus:ring-0 focus:outline-none text-center ${
                    scrolled
                      ? "text-slate-600 hover:text-[#7FDFD4]"
                      : "text-white/90 hover:text-white text-shadow-sm"
                  }`}
                  onClick={(e) =>
                    insideNavegation(e, t(`nav.links.${key}.href`))
                  }
                >
                  {t(`nav.links.${key}.text`)}
                </Link>
              ))}

              {/* Language Selector */}
              <Menu as="div" className="relative">
                <Menu.Button
                  className={`flex items-center space-x-1 ${
                    scrolled ? "text-slate-600" : "text-white/90"
                  }`}
                >
                  <GlobeAltIcon className="h-5 w-5" />
                  <span>{i18n.language.toUpperCase()}</span>
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#7FDFD4]/10"
                      onClick={() => changeLanguage("es")}
                    >
                      Español
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#7FDFD4]/10"
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Menu>

              <Link
                href={t("nav.cta.start_learning.href")}
                variant="button"
                className={`transition-all duration-300 ${
                  scrolled
                    ? "bg-[#7FDFD4] text-white hover:bg-[#6FCFC4]"
                    : "bg-white text-[#7FDFD4] hover:bg-white/90"
                }`}
                onClick={(e) =>
                  insideNavegation(e, t("nav.cta.start_learning.href"))
                }
              >
                {t("nav.cta.start_learning.text")}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#7FDFD4]/10 hover:text-[#7FDFD4] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#7FDFD4] ${
                scrolled
                  ? ""
                  : "hover:bg-white/10 hover:text-white text-white/90"
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
