"use client";
import FAQWithImage from "./components/Faq";
import FeaturesSection from "./components/FeatureSection";
import Herosection from "./components/Herosection";
import Navbar from "./components/NavbarSection";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">

        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full max-w-[1426px]">
            <img
              src="/midFont.png"
              className=" h-auto object-contain lg:w-full lg:h-auto w-[1000px]"
              alt="Central"
            />
          </div>

          <img
            src="/leftFont.png"
            className="absolute -top-10 left-4 sm:left-10 md:left-[100px] lg:left-[200px] w-[400px]  sm:w-[250px] md:w-[400px] lg:w-[691.16px] h-auto object-contain"
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
          <FAQWithImage />
        </div>
      </div>
    </>
  );
}
