"use client";

import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";

export default function Contact() {
  const {t} = useTranslation(["home"]);

  const handleEmailClick = () => {
    window.location.href = "mailto:we.connect.languages@gmail.com";
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white relative overflow-hidden mb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image Container */}
          <motion.div
            className="relative"
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{margin: "-100px", once: true}}
            transition={{duration: 0.6}}
          >
            <div className="relative">
              {/* Circular frame for image */}
              <motion.div
                className="aspect-square rounded-full overflow-hidden bg-[#7FDFD4] border-8 border-[#7FDFD4]/20"
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                viewport={{margin: "-100px", once: true}}
                transition={{duration: 0.6, delay: 0.3}}
              >
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/contact.webp"
                    alt="Contact Us"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  {/* <span className="text-white">Image Placeholder</span> */}
                </div>
              </motion.div>

              {/* Decorative wave element */}
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{margin: "-100px", once: true}}
                transition={{duration: 0.6, delay: 0.5}}
              >
                <svg
                  className="w-24 h-12 text-[#7FDFD4]/30"
                  viewBox="0 0 100 40"
                >
                  <path
                    d="M0 20 Q 25 0, 50 20 T 100 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{margin: "-100px", once: true}}
            transition={{duration: 0.6}}
          >
            <div className="mb-8">
              <motion.span
                className="text-sm font-semibold text-[#7FDFD4] uppercase tracking-wider"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{margin: "-100px", once: true}}
                transition={{delay: 0.2}}
              >
                {t("contact.subtitle")}
              </motion.span>
              <motion.h2
                className="mt-2 text-4xl font-bold text-gray-900 mb-6"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{margin: "-100px", once: true}}
                transition={{delay: 0.3}}
              >
                {t("contact.title")}
                <span className="text-[#7FDFD4]">
                  {t("contact.title_highlight")}
                </span>
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed mb-8"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{margin: "-100px", once: true}}
                transition={{delay: 0.4}}
              >
                {t("contact.message")}
              </motion.p>

              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{margin: "-100px", once: true}}
                transition={{delay: 0.5}}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full bg-[#7FDFD4] hover:bg-[#6FCFC4] text-white z-50!important"
                  onClick={handleEmailClick}
                >
                  {t("contact.email_button")}
                </Button>
              </motion.div>

              <motion.div
                className="mt-6 text-center"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{margin: "-100px", once: true}}
                transition={{delay: 0.6}}
              >
                <p className="text-gray-600">{t("contact.direct_contact")}</p>
                <a
                  href="mailto:we.connect.languages@gmail.com"
                  className="text-[#7FDFD4] hover:text-[#6FCFC4] font-medium"
                >
                  we.connect.languages@gmail.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7FDFD4]/10 rounded-full -translate-y-1/2 translate-x-1/2"
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        viewport={{margin: "-100px"}}
        transition={{duration: 0.8}}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#7FDFD4]/20 rounded-full translate-y-1/2 -translate-x-1/2"
        initial={{scale: 0}}
        whileInView={{scale: 1, zIndex: -10}}
        viewport={{margin: "-100px"}}
        transition={{duration: 0.8, delay: 0.2}}
      ></motion.div>
    </section>
  );
}
