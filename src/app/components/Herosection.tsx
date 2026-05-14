"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  left: string;
  top: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
};

const carouselImages = [
  "/zeinternational/zein4.webp",
  "/zeinternational/zein7.webp",
  "/zeinternational/zein8.webp",
  "/stream/04.webp",
  "/stream/03.webp",
  "/stream/fabio01.webp",
  "/stream/fabio04.webp",
  "/stream/fabio03.webp",
];

const socialLinks = [
  { href: "https://www.instagram.com/lmlagencype/",  icon: "/insta.svg",   label: "Instagram" },
  { href: "https://discord.gg/lmlagency",            icon: "/discord.svg", label: "Discord"   },
  { href: "https://www.twitch.tv/lmlagencype",       icon: "/twitch.svg",  label: "Twitch"    },
  { href: "https://kick.com/lmlagencype",            icon: "/kick.svg",    label: "Kick"      },
];

export default function Herosection() {
  const [isVisible,     setIsVisible]     = useState(false);
  const [currentIndex,  setCurrentIndex]  = useState(0);
  const [particles,     setParticles]     = useState<Particle[]>([]);

  useEffect(() => {
    carouselImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setParticles(
      Array.from({ length: 4 }).map(() => ({
        left:     `${Math.random() * 100}%`,
        top:      `${Math.random() * 100}%`,
        x:        Math.random() * 50 - 25,
        y:        Math.random() * -30,
        duration: 2 + Math.random() * 1.5,
        delay:    Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section className="text-white py-16 px-6 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* ── Izquierda: texto ── */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-[38px] lg:text-[47px] font-bold leading-tight bg-gradient-to-tr from-[#EDFFC2] to-[#B7CE7F] bg-clip-text text-transparent"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: isVisible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          >
            ¿Buscas una experiencia única en entretenimiento digital?
          </motion.h1>

          <motion.p
            className="text-[15px] sm:text-base leading-relaxed text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            En LML Agency, creamos momentos memorables. Somos una productora peruana con un equipo apasionado y con años de experiencia en la industria del entretenimiento. Nos especializamos en contenidos IRL, Esports y eventos especiales, colaborando con personalidades de la televisión y reconocidas marcas corporativas.
          </motion.p>

          <motion.p
            className="text-[15px] sm:text-base leading-relaxed text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Cada proyecto que realizamos lleva nuestro sello de calidad y compromiso al 100%. Si buscas innovación, creatividad y un enfoque profesional, estás en el lugar correcto.
          </motion.p>

          {/* Redes sociales */}
          <motion.div
            className="flex justify-center lg:justify-start items-center gap-5 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {socialLinks.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={icon}
                  alt={label}
                  className="w-[44px] hover:brightness-125"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Derecha: carrusel ── */}
        <motion.div
          className="flex-1 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[380px] sm:h-[420px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={carouselImages[currentIndex]}
                src={carouselImages[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className="rounded-2xl object-cover w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              />
            </AnimatePresence>

            {/* Indicador de slides */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {carouselImages.map((_, i) => (
                <span
                  key={i}
                  className="block h-[2px] rounded-full transition-all duration-500"
                  style={{
                    width:           currentIndex === i ? '20px' : '5px',
                    backgroundColor: currentIndex === i ? '#B2FA03' : 'rgba(255,255,255,0.25)',
                  }}
                />
              ))}
            </div>

            {/* Partículas decorativas */}
            {particles.map((p, i) => (
              <motion.div
                key={`p-${i}`}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[#EDFFC2] to-[#B7CE7F] pointer-events-none"
                style={{ left: p.left, top: p.top }}
                animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0], x: [0, p.x], y: [0, p.y] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
