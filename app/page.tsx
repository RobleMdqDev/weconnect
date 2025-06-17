"use client";

import {useTranslation} from "react-i18next";
import Hero from "./components/sections/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/sections/AboutUs";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Contact from "./components/sections/Contact";

export default function Home() {
  const {t} = useTranslation(["common", "home"]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
