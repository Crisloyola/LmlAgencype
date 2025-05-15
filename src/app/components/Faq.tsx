import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface FAQ {
  question: string;
  answer: string;
}

export default function FAQWithImage() {
  const faqs: FAQ[] = [
    {
      question: "¿Quiénes somos?",
      answer:
        "LML Agency es una productora peruana especializada en eventos digitales y Esports. Creamos experiencias únicas en transmisiones en vivo, contenidos para streamers y eventos gamer de alto impacto.",
    },
    {
      question: "¿Qué servicios ofrecen?",
      answer:
        "Actualmente ofrecemos producciones digitales tanto en estudio como en locaciones externas. Hemos realizado torneos de Counter-Strike 2, Dota 2, y Mobile Legends: Bang Bang, entre otros. Además, hemos trabajado en proyectos destacados como CUÉNTAMELO TODO de Fabio Agostini, DUELO DE COCINA EN PAREJAS de Patricio Parodi, y COCINANDO CON LA SERPA de Claudia Serpa.",
    },
    {
      question: "¿En qué país operan?",
      answer:
        "Nuestro centro de operaciones está ubicado en Perú, pero podemos cubrir cualquier evento alrededor del mundo previa coordinación y separación de la(s) fecha(s).",
    },
    {
      question: "¿Cómo puedo contratar sus servicios?",
      answer:
        "Para contactarnos de una manera más directa, envíanos un mail al correo electrónico o escríbenos un mensaje al WhatsApp. De igual manera, puedes llenar el formulario en la Web y nosotros nos pondremos en contacto contigo para poder conversar sobre tu proyecto y hacerlo realidad con el más alto estándar de calidad.",
    },
    {
      question: "¿Cuál es el plazo mínimo para reservar con ustedes?",
      answer:
        "Lo recomendable es hacerlo con un tiempo mayor a una semana para poder realizar la evaluación correcta de la propuesta y así darle una cotización adecuada. Si el evento es fuera del estudio necesitamos hacer un trabajo de scouting para tener claro los espacios y setup que se utilizará.",
    },
    {
      question: "¿Cuáles son sus tarifas?",
      answer:
        "Tenemos unas tarifas super competitivas para el alquiler del estudio + operarios en el horario de 9am a 6pm. Para los eventos especiales o trabajos personalizados, debemos cotizar de manera independiente pero nos adaptamos al presupuesto que puedan tener. No tengan miedo ni duden en preguntar que estamos para servirles.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white py-5 px-2  lg:px-2 relative"
    >
      <img
        src="/fontFaq.png"
        className="absolute top-[-200px] inset-x-0 h-auto object-cover w-full z-0"
        alt="Fondo FAQ"
      />
      <div className="flex flex-col lg:flex-row gap-2 rounded-[32px] px-2 lg:px-4 py-5 border border-[#33363F] relative z-10 bg-black/50 backdrop-blur-md">
        {/* Columna de Preguntas */}
        <div className="lg:w-1/2 -px-1 lg:px-6 py-8 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="mb-8 text-white text-sm sm:text-base">
            Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios, eventos y procesos de trabajo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg ${
                  openIndex === index ? "border-[#B2FA03]" : "border-[#33363F]"
                }`}
              >
                <button
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-sm sm:text-base titulo">
                    {index + 1}. {faq.question}
                  </span>
                  <span className="text-white">{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.p
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-4 text-gray-300 text-xs sm:text-sm parrafo overflow-hidden"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="lg:w-1/2 flex items-center justify-center mt-2  lg:mt-8">
          <img
            src="/agency/agency6.webp"
            alt="FAQ Illustration"
            className="rounded-[35px] shadow-lg w-full max-w-md lg:max-w-none"
          />
        </div>
      </div>

      
    </motion.div>
  );
}
