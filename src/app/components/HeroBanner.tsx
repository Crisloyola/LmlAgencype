"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  { image: "/agency/agency6.webp", cta: false },
  { image: "/equipo/wall2.png", cta: true },
];

export default function HeroBanner() {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    setProgress(0);
    const duration = 7000;
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
                  className={`w-full h-full object-cover ${slides[current].cta ? "object-right sm:object-center" : "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 sm:bg-gradient-to-t" />
              </motion.div>
            </AnimatePresence>

            {/* Contenido — slide 1 */}
            <AnimatePresence>
              {!slides[current].cta && (
                <motion.div
                  key="slide1-content"
                  className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 gap-3 max-w-lg"
                  style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 60%, transparent)" }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="text-[#B2FA03] text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
                    Latam Masters Agency
                  </span>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    Sabemos que un gran equipo de audio o video no sirve de nada sin el conocimiento adecuado.
                    Por eso nuestro equipo se encarga de que recibas:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Equipos impecables y desinfectados. 🎙️",
                      "Asesoría técnica personalizada. 💡",
                      "Puntualidad y compromiso con tu cronograma. 🚀",
                    ].map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-white text-xs sm:text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B2FA03] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/51949858970?text=Hola%2C%20quiero%20cotizar%20mi%20proyecto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2.5 bg-[#B2FA03] text-black font-extrabold
                               px-6 py-3 rounded-full text-sm sm:text-base w-fit mt-1
                               shadow-[0_0_40px_rgba(178,250,3,0.4),0_8px_24px_rgba(0,0,0,0.5)]
                               hover:bg-lime-300 hover:shadow-[0_0_60px_rgba(178,250,3,0.75)]
                               hover:scale-105 hover:-translate-y-0.5
                               active:scale-97 transition-all duration-300 overflow-hidden group"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    Cotiza tu proyecto
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA — slide 2 */}
            <AnimatePresence>
              {slides[current].cta && (
                <motion.div
                  key="cta"
                  className="absolute bottom-8 sm:bottom-44 inset-x-0 sm:inset-x-auto sm:right-10 flex flex-col items-center sm:items-end gap-2 px-6 sm:px-0"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link
                    href="/alquiler"
                    onClick={() => setVisible(false)}
                    className="relative inline-flex items-center gap-2.5 bg-[#B2FA03] text-black font-extrabold
                               px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base
                               shadow-[0_0_40px_rgba(178,250,3,0.5),0_8px_24px_rgba(0,0,0,0.5)]
                               hover:bg-lime-300 hover:shadow-[0_0_60px_rgba(178,250,3,0.75)]
                               hover:scale-105 hover:-translate-y-0.5
                               active:scale-97 transition-all duration-300 overflow-hidden group"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Alquila tu equipo ahora
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
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
