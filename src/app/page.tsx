"use client";
import FAQWithImage from "./components/Faq";
import FeaturesSection from "./components/FeatureSection";
import Herosection from "./components/Herosection";
import Navbar from "./components/NavbarSection";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden ">

        <div className="absolute inset-0 z-0">

          <div className="absolute left-1/2 top-0 lg:w-[1426px] md:w-[90vw] w-[95vw] -translate-x-1/2">
            <img
              src="/midFont.png"
              className="w-full object-contain"
              alt="Central"
            />
          </div>

          <img
            src="/leftFont.png"
            className="absolute -top-10 lg:left-[200px] md:left-[100px] left-[30px] lg:w-[691.16px] md:w-[400px] w-[250px] h-auto"
            alt="Izquierda"
          />

          <img
            src="/rightFont.png"
            className="absolute -top-10 lg:left-[60%] md:left-[55%] left-[50%] lg:w-[519px] md:w-[350px] w-[200px] h-auto"
            alt="Derecha"
          />
        </div>

        <div className="relative z-10 ">
          
          <Navbar />
          <Herosection />
          <FeaturesSection/>
          <FAQWithImage/>
        </div>
      </div>
    </>
  );
}
