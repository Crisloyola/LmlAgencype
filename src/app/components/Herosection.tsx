"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define el tipo para una partícula
type Particle = {
  left: string;
  top: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
};

export default function Herosection() {
  const [isVisible, setIsVisible] = useState(false);

  // Carrusel automático
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/stream/01.jpg", "/smash.png", "/stream/fabio01.jpg", "/stream/fabio04.jpg", "/stream/fabio03.jpg"];

  // Partículas generadas en cliente
  const [particles, setParticles] = useState<Particle[]>([]);

  // Precarga de imágenes
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    setIsVisible(true);

    let isCancelled = false;

    const interval = setInterval(() => {
      if (!isCancelled) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000); // Cambia cada 5 segundos

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [images.length]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 4 }) // Reduce de 6 a 4 partículas
      .map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        x: Math.random() * 50 - 25,
        y: Math.random() * -30,
        duration: 2 + Math.random() * 1.5, // Reduce duración
        delay: Math.random() * 2, // Reduce delay
      }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="text-white py-16 px-6 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Izquierda */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-[43px] lg:text-[47px] font-bold leading-tight bg-gradient-to-tr from-[#EDFFC2] to-[#B7CE7F] bg-clip-text text-transparent relative"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: isVisible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          >
            ¿Buscas una experiencia única en entretenimiento digital?
          </motion.h1>

          <motion.p
            className="text-[15px] sm:text-base leading-relaxed lg:text-[15px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            En LML Agency, creamos momentos memorables. Somos una productora peruana con un equipo apasionado y con años de experiencia en la industria del entretenimiento. Nos especializamos en contenidos IRL, Esports y eventos especiales, colaborando con personalidades de la televisión y reconocidas marcas corporativas.
          </motion.p>

          <motion.p
            className="text-[15px] sm:text-base leading-relaxed lg:text-[15px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Cada proyecto que realizamos lleva nuestro sello de calidad y compromiso al 100%. Si buscas innovación, creatividad y un enfoque profesional, estás en el lugar correcto.
          </motion.p>

          <motion.div
            className="flex justify-center lg:justify-start items-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.img src="/discord.svg" alt="Discord" className="w-[50px] sm:w-[100px] lg:w-[50px] hover:brightness-125 hover:scale-110" whileHover={{ y: -5, rotate: -3 }} />
            <motion.img src="/twitch.svg" alt="Twitch" className="w-[50px] sm:w-[100px] lg:w-[50px] hover:brightness-125 hover:scale-110" whileHover={{ y: -5, rotate: 3 }} />
            <motion.img src="/kick.svg" alt="Kick" className="w-[0px] sm:w-[100px] lg:w-[50px] hover:brightness-125 hover:scale-110" whileHover={{ y: -5, rotate: -3 }} />
          </motion.div>
        </motion.div>

        {/* Derecha: carrusel + partículas */}
        <motion.div
          className="flex-1 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-[500px] sm:max-w-[500px] lg:max-w-[900px] h-[400px] overflow-hidden rounded-xl">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`Imagen ${currentIndex + 1}`}
                className="rounded-xl object-cover w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              />
            </AnimatePresence>

            {/* Partículas decorativas */}
            {particles.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#EDFFC2] to-[#B7CE7F]"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  x: [0, particle.x],
                  y: [0, particle.y],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
