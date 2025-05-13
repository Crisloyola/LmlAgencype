"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Herosection() {
  // For the typing animation of gradient text
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="text-white py-16 px-6 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Izquierda: texto con animaciones */}
        <motion.div 
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-[40px] sm:text-5xl lg:text-[50px] xl:text-[65px] font-bold leading-tight bg-gradient-to-tr from-[#EDFFC2] to-[#B7CE7F] bg-clip-text text-transparent relative"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: isVisible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          >
            ¿Buscas una experiencia única en entretenimiento digital?
          </motion.h1>

          <motion.p 
            className="text-[15px] sm:text-base leading-relaxed lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            En LML Agency, creamos momentos memorables. Somos una productora peruana con un equipo apasionado y con años de experiencia en la industria del entretenimiento. Nos especializamos en contenidos IRL, Esports y eventos especiales, colaborando con personalidades de la televisión y reconocidas marcas corporativas.
          </motion.p>

          <motion.p 
            className="text-[15px] sm:text-base leading-relaxed lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Cada proyecto que realizamos lleva nuestro sello de calidad y compromiso al 100%. Si buscas innovación, creatividad y un enfoque profesional, estás en el lugar correcto.
          </motion.p>

          {/* Logos de plataformas con efectos de hover */}
          <motion.div 
            className="flex justify-center lg:justify-start items-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.img 
              src="/discord.svg" 
              alt="Discord" 
              className="w-[50px] sm:w-[100px] lg:w-[50px] transition-all duration-300 filter hover:brightness-125 hover:scale-110"
              whileHover={{ y: -5, rotate: -3 }}
            />
            <motion.img 
              src="/twitch.svg" 
              alt="Twitch" 
              className="w-[50px] sm:w-[100px] lg:w-[50px] transition-all duration-300 filter hover:brightness-125 hover:scale-110"
              whileHover={{ y: -5, rotate: 3 }}
            />
            <motion.img 
              src="/kick.svg" 
              alt="Kick" 
              className="w-[50px] sm:w-[100px] lg:w-[50px] transition-all duration-300 filter hover:brightness-125 hover:scale-110"
              whileHover={{ y: -5, rotate: -3 }}
            />
          </motion.div>
          
          {/* Call to action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8 flex justify-center lg:justify-start"
          >

          </motion.div>
        </motion.div>

        {/* Derecha: imágenes con efectos */}
        <motion.div 
          className="flex-1 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
            {/* Imagen de fondo con efecto flotante */}
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut" 
              }}
            >
              <motion.img
                src="/smash.png"
                alt="Foto 1"
                className="rounded-xl object-cover w-full  transition-all duration-500"
                initial={{ filter: 'brightness(0.8)' }}
                whileInView={{ filter: 'brightness(1)' }}
                transition={{ duration: 1 }}
              />
          
            </motion.div>

            {/* Imagen encima con animación */}
            <motion.img
              src="/lobo1.png"
              alt="Encima"
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[200px] sm:w-[250px] lg:w-[300px] z-10 rounded-lg shadow-xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3, 
                type: "spring", 
                stiffness: 100 
              }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            />
            
            {/* Efecto de partículas (simulado con elementos decorativos) */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#EDFFC2] to-[#B7CE7F]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * -30],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    
      <div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-30">

        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
              <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </div>
    </section>
  );
}