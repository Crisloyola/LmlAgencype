"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import NuestraEsencia from "./Esencia";
import FAQWithImage from "./Faq";
import TestimonialsSection from "./TestimonialsSection";
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
        <div className="px-4 py-8 md:px-8" id="somos">
          <TestimonialsSection />
        </div>
        <div className="py-16 px-2 lg:px-6 sm:px-8">
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
