"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  { image: "/agency/agency3.webp", cta: false },
  { image: "/agency/agency1.webp", cta: true },
];

export default function HeroBanner() {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    setProgress(0);
    const duration = 4000;
    const step = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += step;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        setCurrent((prev) => (prev + 1) % slides.length);
        elapsed = 0;
        setProgress(0);
      }
    }, step);

    return () => clearInterval(timer);
  }, [current, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="banner"
          className="fixed inset-0 z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setVisible(false)}
          />

          {/* Card flotante — 960×580, max 1100px, padding 40-60px */}
          <motion.div
            className="relative w-[92vw] rounded-3xl overflow-hidden
                       shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]"
            style={{
              maxWidth: "1100px",
              height: "clamp(320px, 52vw, 580px)",
            }}
            initial={{ scale: 0.92, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Slides */}
            <AnimatePresence mode="sync">
              <motion.div
                key={current}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
              >
                <img
                  src={slides[current].image}
                  alt={`Banner slide ${current + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
              </motion.div>
            </AnimatePresence>

            {/* CTA — slide 2 */}
            <AnimatePresence>
              {slides[current].cta && (
                <motion.div
                  key="cta"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-[40px] sm:px-[60px] text-center"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  <motion.p
                    className="text-[#B2FA03] text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Alquiler Profesional
                  </motion.p>

                  <motion.h2
                    className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-2xl drop-shadow-lg"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    Equipa tu próximo{" "}
                    <span className="text-[#B2FA03]">proyecto</span>
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="/alquiler"
                      onClick={() => setVisible(false)}
                      className="relative inline-flex items-center gap-3 bg-[#B2FA03] text-black font-extrabold
                                 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-sm sm:text-base
                                 shadow-[0_0_40px_rgba(178,250,3,0.5),0_8px_24px_rgba(0,0,0,0.5)]
                                 hover:bg-lime-300 hover:shadow-[0_0_60px_rgba(178,250,3,0.75)]
                                 hover:scale-105 hover:-translate-y-0.5
                                 active:scale-97 transition-all duration-300 overflow-hidden group"
                    >
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                      </svg>
                      Alquila tu equipo ahora
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Indicadores de progreso */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="relative overflow-hidden rounded-full h-1 transition-all duration-300"
                  style={{ width: i === current ? "44px" : "10px" }}
                  aria-label={`Slide ${i + 1}`}
                >
                  <span className="absolute inset-0 bg-white/25 rounded-full" />
                  {i === current && (
                    <span
                      className="absolute inset-y-0 left-0 bg-[#B2FA03] rounded-full"
                      style={{ width: `${progress}%`, transition: "none" }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Contador decorativo */}
            <div className="absolute bottom-5 right-5 text-white/30 text-[10px] font-bold tracking-widest select-none">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>

            {/* Botón cerrar */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Cerrar banner"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full
                         bg-black/40 border border-white/10 text-white/70
                         hover:bg-black/60 hover:text-white hover:border-white/30
                         transition-all duration-200 backdrop-blur-sm"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
