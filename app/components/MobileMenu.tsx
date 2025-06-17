"use client";

import {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {useTranslation} from "react-i18next";
import Link from "./ui/Link";
import Logo from "./ui/Logo";
import {XMarkIcon, GlobeAltIcon} from "@heroicons/react/24/outline";
import {NavbarLinkType} from "./types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({isOpen, onClose}: MobileMenuProps) {
  const {t, i18n} = useTranslation(["common"]);
  const navLinks = t("nav", {
    returnObjects: true,
  }) as NavbarLinkType;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      onClose();
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onClose();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white">
                    <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                      <Logo className="h-16 w-16" />
                      <button
                        type="button"
                        className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FDFD4]"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex-1 px-6 py-4">
                      <nav className="space-y-6">
                        {Object.entries(navLinks.links).map(([key]) => (
                          <Link
                            key={`mobileLinkTo-${navLinks.links?.[key].href}`}
                            href={t(`nav.links.${key}.href`)}
                            variant="nav"
                            className="block text-lg font-medium text-gray-900 hover:text-[#7FDFD4]"
                            onClick={(e) =>
                              handleNavClick(e, t(`nav.links.${key}.href`))
                            }
                          >
                            {t(`nav.links.${key}.text`)}
                          </Link>
                        ))}

                        {/* Language Selector */}
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center mb-2">
                            <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-sm font-medium text-gray-500">
                              {i18n.language === "es" ? "Idioma" : "Language"}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                                i18n.language === "es"
                                  ? "bg-[#7FDFD4]/20 text-slate-800"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                              onClick={() => changeLanguage("es")}
                            >
                              Español
                            </button>
                            <button
                              className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                                i18n.language === "en"
                                  ? "bg-[#7FDFD4]/20 text-slate-800"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                              onClick={() => changeLanguage("en")}
                            >
                              English
                            </button>
                          </div>
                        </div>
                        <Link
                          className="mt-8 w-full bg-[#7FDFD4] text-white hover:bg-[#6FCFC4] text-center"
                          href={t("nav.cta.start_learning.href")}
                          variant="button"
                          onClick={(e) =>
                            handleNavClick(e, t("nav.cta.start_learning.href"))
                          }
                        >
                          {t("nav.cta.start_learning.text")}
                        </Link>
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
