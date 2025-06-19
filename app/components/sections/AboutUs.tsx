"use client";

import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

import Link from "../ui/Link";
import {insideNavegation} from "@/app/utils/insideNavegation";
import Image from "next/image";

export default function AboutUs() {
  const {t} = useTranslation(["home"]);
  const specializedTrainingItems = t("about.specialized_training.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{opacity: 0, x: -50}}
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
                {t("about.span_title")}
              </motion.span>
              <div className="flex flex-col items-start">
                <motion.h2
                  className="mt-2 text-4xl block font-bold text-gray-900 mb-6"
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  viewport={{margin: "-100px", once: true}}
                  transition={{delay: 0.3}}
                >
                  {t("about.title")}
                  <span className="text-[#7FDFD4]">
                    {t("about.title_highlight")}
                  </span>
                  <div className="w-24 h-1 mt-4 bg-[#7FDFD4] mx-auto"></div>
                </motion.h2>
              </div>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{margin: "-100px", once: true}}
                transition={{delay: 0.4}}
              >
                {t("about.subtitle")}
              </motion.p>
            </div>

            <div className="space-y-6 mb-8">
              {specializedTrainingItems &&
                specializedTrainingItems.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{margin: "-100px", once: true}}
                    transition={{delay: 0.2 * (index + 3)}}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#7FDFD4]/20 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-[#7FDFD4]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </motion.div>
                ))}
            </div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{margin: "-100px", once: true}}
              transition={{delay: 0.8}}
            >
              <Link
                href="#services"
                variant="primary"
                size="lg"
                className="bg-[#7FDFD4] hover:bg-[#6FCFC4] text-white"
                onClick={(e) => insideNavegation(e, "#services")}
              >
                {t("about.cta.read_more")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            className="relative"
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{margin: "-100px", once: true}}
            transition={{duration: 0.6}}
          >
            {/* Background decorative elements */}
            <motion.div
              className="absolute -top-16 -right-16 w-72 h-72 bg-[#7FDFD4]/20 rounded-full "
              initial={{scale: 0.5}}
              whileInView={{scale: 1}}
              viewport={{margin: "-100px"}}
              transition={{delay: 0.3}}
            ></motion.div>
            <motion.div
              className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#7FDFD4]/10 rounded-full "
              initial={{scale: 0.5}}
              whileInView={{scale: 1}}
              viewport={{margin: "-100px"}}
              transition={{delay: 0.5}}
            ></motion.div>

            {/* Image placeholder */}
            <div className="bg-[#7FDFD4] rounded-lg aspect-[4/3] overflow-hidden">
              <div className="w-full h-full items-center justify-center flex">
                <Image
                  src="/images/about.webp"
                  alt="About Us Image"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                {/* Placeholder text or image */}
                {/* <span className="text-white">Image Placeholder</span> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
