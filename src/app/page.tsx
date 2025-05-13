"use client";
import { useEffect, useState } from "react";
import FAQWithImage from "./components/Faq";
import FeaturesSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import HistoryTime from "./components/HistoryTime";
import Navbar from "./components/NavbarSection";

export default function Home() {
  const [scrollWidth, setScrollWidth] = useState(0);

  // Manejamos el progreso de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Barra de Progreso fija arriba */}
      <div 
        className="fixed top-0 left-0 h-2 bg-gradient-to-r from-[#B2FA03] to-[#B2FA03] z-50"
        style={{ width: `${scrollWidth}%` }}
      />

      <div className="relative min-h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full max-w-[1426px]">
            <img
              src="/midFont.png"
              className="h-auto object-contain lg:w-full lg:h-auto w-[1000px]"
              alt="Central"
            />
          </div>

          <img
            src="/leftFont.png"
            className="absolute -top-10 left-4 sm:left-10 md:left-[100px] lg:left-[200px] w-[400px] sm:w-[250px] md:w-[400px] lg:w-[691.16px] h-auto object-contain"
            alt="Izquierda"
          />

          <img
            src="/rightFont.png"
            className="absolute -top-10 left-[50%] sm:left-[55%] md:left-[60%] lg:left-[65%] transform -translate-x-1/2 w-[400px] sm:w-[200px] md:w-[350px] lg:w-[519px] h-auto object-contain"
            alt="Derecha"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Herosection />
          <FeaturesSection />
          <div className="max-w-7xl mx-auto mt-12">
            <HistoryTime />
          </div>
          <div className="max-w-7xl mx-auto mt-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
