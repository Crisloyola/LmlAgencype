"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import NuestraEsencia from "./Esencia";
import FAQWithImage from "./Faq";
import FeatureCard from "./FeatureCard";
import { useInView } from "react-intersection-observer";

export default function FeaturesSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-15 sm:px-8 lg:px-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="max-w-7xl mx-auto bg-[#F7F7F7] rounded-[1px] lg:rounded-[32px] text-left"
      >
        <div className="flex flex-col items-center justify-center py-8">
          <h1 className="text-4xl md:text-[55px] font-bold text-center mb-6">
            Producción Creativa FEATURES
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
            <FeatureCard
              number="01"
              title="Motor de Producción Ágil"
              description="Optimizamos cada etapa del evento con procesos creativos y técnicos que garantizan resultados impactantes."
              className="transform hover:scale-105 transition duration-300 ease-in-out h-[300px] mt-[55px]"
            />

            <FeatureCard
              number="02"
              title="Panel Estratégico para Creadores"
              descripcionGreen="Brindamos herramientas visuales personalizadas para que streamers y marcas vean el rendimiento y engagement en tiempo real."
              highlight
              imageSrc="/creadores.png"
              className="transform hover:scale-105 transition duration-300 ease-in-out"
            />

            <FeatureCard
              number="03"
              title="Integración sin Fricciones"
              description="Nos adaptamos a tus plataformas y flujos de trabajo sin interrumpir tus operaciones, logrando una ejecución fluida."
              className="transform hover:scale-105 transition duration-300 ease-in-out h-[300px] mt-[55px]"
            />
          </div>
        </div>

        <div className="py-16 px-6 sm:px-8 lg:px-16">
          <NuestraEsencia />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto mt-12"
      >
        <FAQWithImage />
      </motion.div>
    </section>
  );
}
