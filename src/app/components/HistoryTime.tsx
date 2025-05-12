// components/TimelineCarousel.tsx
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    year: "2019",
    image: "/parado/pa.jpg",
    text: "Luis Guerrero empieza a trabajar en Live Media.",
  },
  {
    year: "2021",
    image: "/images/2021.png",
    text: "Luis Guerrero se independiza y crea SSL Entertainment.",
  },
  {
    year: "2022",
    image: "/images/2022.png",
    text: "Luis Guerrero sigue produciendo torneos pero de manera independiente.",
  },
];

export default function TimelineCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 1;
    const delay = 20;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += scrollStep;

      // Cuando ha scrolleado la mitad (una copia completa), reinicia sin transición
      if (
        container.scrollLeft >=
        container.scrollWidth / 2
      ) {
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white py-12 px-4 overflow-hidden">
      <div className="relative">
        <div className="absolute bottom-4 left-0 w-full h-0.5 bg-gray-600 z-0" />

        <div
          ref={scrollRef}
          className="overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap"
        >
          {/* Duplicamos el contenido para lograr loop infinito */}
          <div className="flex space-x-20 min-w-max">
            {[...timelineData, ...timelineData].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center snap-start relative"
              >
                <h3 className="text-4xl font-bold mb-4">{item.year}</h3>

                <div className="flex items-center bg-black px-4 py-2 space-x-6">
                  <div className="w-40 h-40 rounded-xl overflow-hidden shadow-lg shrink-0">
                    <Image
                      src={item.image}
                      alt={item.year}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="max-w-xs text-sm font-semibold text-left">
                    {item.text}
                  </p>
                </div>

                <div className="w-3 h-3 bg-white rounded-full border-2 border-black mt-6 z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
