"use client";

import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import Link from "../ui/Link";
import {insideNavegation} from "@/app/utils/insideNavegation";

export default function Services() {
  const {t} = useTranslation(["home"]);

  const services = [
    {
      number: "01",
      titleKey: "services.items.language_classes.title",
      descriptionKey: "services.items.language_classes.description",
    },
    {
      number: "02",
      titleKey: "services.items.business_training.title",
      descriptionKey: "services.items.business_training.description",
    },
    {
      number: "03",
      titleKey: "services.items.custom_content.title",
      descriptionKey: "services.items.custom_content.description",
    },
    {
      number: "04",
      titleKey: "services.items.continuous_monitoring.title",
      descriptionKey: "services.items.continuous_monitoring.description",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Turquoise Semicircle Background */}
      <motion.div
        className="absolute top-0 -translate-x-1/2 w-full max-w-[120%] aspect-[3/1]"
        initial={{opacity: 0, y: -100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{margin: "-100px", once: true}}
        transition={{duration: 0.6}}
      >
        <div className="w-full h-full bg-[#7FDFD4]/20 rounded-b-[100%]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{margin: "-100px", once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1 my-4 bg-[#7FDFD4] mx-auto"></div>
          <p className="text-xl text-gray-600">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{margin: "-100px", once: true}}
              transition={{delay: index * 0.1, duration: 0.6}}
            >
              {/* Large Number */}
              <div className="text-[100px] font-bold text-[#6FCFC4]/20 absolute -top-6 -right-2 pointer-events-none">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-between z-10 h-full">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t(service.descriptionKey)}
                  </p>
                </div>
                <Link
                  href="#why-us"
                  className="text-[#7FDFD4] font-medium hover:text-[#6FCFC4] transition-colors"
                  onClick={(e) => {
                    insideNavegation(e, "why-us");
                  }}
                >
                  {t("services.cta.read_more")}
                </Link>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#7FDFD4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
