"use client";

import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import Image from "next/image";

export default function WhyChooseUs() {
  const {t} = useTranslation(["home"]);

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-x-clip">
      {/* Circular Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{margin: "-100px"}}
        transition={{duration: 0.8}}
      >
        {/* Top Right Circle */}
        <div className="absolute top-[180px] right-20 w-[500px] h-[500px] rounded-full bg-[#7FDFD4]/10 transform translate-x-1/2 -translate-y-1/2"></div>
        {/* Bottom Left Circle */}
        <div className="absolute bottom-[200px] left-0 w-[400px] h-[400px] rounded-full bg-[#7FDFD4]/10 transform -translate-x-1/2 translate-y-1/2"></div>
        {/* Middle Circle */}
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-[#7FDFD4]/10 transform -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{margin: "-100px", once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("why_us.title")}
          </h2>
          <div className="w-24 h-1 bg-[#7FDFD4] mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            {t("why_us.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(t("why_us.items", {returnObjects: true})).map(
            ([key, item]: [string, any], index) => (
              <motion.div
                key={key}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{margin: "-100px", once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Sección de Imagen */}
                  <div
                    className={`relative h-96 d:h-full bg-[#7FDFD4] ${
                      index % 2 !== 0 ? "md:order-last" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      {/* Image Placeholder {index + 1} */}
                      <Image
                        src={`/images/card${index + 1}.png`}
                        alt={`Why Choose Us ${index + 1}`}
                        className="object-cover w-full h-full rounded-lg"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>

                  {/* Sección de Contenido */}
                  <div className="p-8 relative">
                    {/* Círculo de fondo */}
                    <div className="absolute -bottom-8 -right-12 w-64 h-64 bg-[#7FDFD4]/30 rounded-full transition-transform duration-300 group-hover:scale-110 z-0"></div>

                    <motion.div
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{margin: "-100px", once: true}}
                      transition={{duration: 0.6, delay: 0.2 + index * 0.1}}
                    >
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{item.description}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#7FDFD4] rounded-full "></div>
                        <p className="text-sm text-gray-500">
                          {index === 0 && "Learn by doing"}
                          {index === 1 && "Industry focused"}
                          {index === 2 && "Interactive learning"}
                          {index === 3 && "Personal attention"}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Efecto de hover en la parte inferior */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#7FDFD4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
