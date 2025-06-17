"use client";

import {useTranslation} from "react-i18next";
import Link from "./ui/Link";
import Logo from "./ui/Logo";
import {InstagramIcon, LinkedInIcon} from "./ui/Icons";

export default function Footer() {
  const {t} = useTranslation(["common"]);

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex flex-col items-center text-center">
            {/* Logo Section */}
            <div className="mb-8 flex flex-col justify-center items-center">
              <Logo className="h-40 w-40 mb-4" textClassName="text-white" />
              <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                {t("footer.brand.tagline")}
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-8 mb-8">
              {[
                {
                  icon: InstagramIcon,
                  href: "https://www.instagram.com/connect.languages/",
                  label: "Instagram",
                },
                {
                  icon: LinkedInIcon,
                  href: "https://www.linkedin.com/company/connectlanguages-services/about/",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-[#7FDFD4] transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                variant="footer"
                className="text-slate-400 hover:text-[#7FDFD4] text-sm transition-colors duration-300"
              >
                {t("footer.privacy_policy")}
              </Link>
              <Link
                href="/terms"
                variant="footer"
                className="text-slate-400 hover:text-[#7FDFD4] text-sm transition-colors duration-300"
              >
                {t("footer.terms_of_service")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
