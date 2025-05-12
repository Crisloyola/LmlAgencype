// components/TimelineCarousel.tsx
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    year: "2019",
    image: "/images/2019.png",
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
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1;
    const delay = 30;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;

        // Reset scroll when end is reached
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(autoScroll, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-white py-12 px-4">
      <div className="relative">
        {/* Línea de tiempo */}
        <div className="absolute bottom-4 left-0 w-full h-0.5 bg-gray-600 z-0" />

        {/* Contenedor scrollable */}
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          <div className="flex space-x-20 min-w-max snap-x snap-mandatory px-2">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center snap-start relative"
              >
                {/* Año */}
                <h3 className="text-4xl font-bold mb-4">{item.year}</h3>

                {/* Imagen a la izquierda, texto a la derecha */}
                <div className="flex items-centerpx-4 py-2 space-x-6">
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

                {/* Punto en la línea de tiempo */}
                <div className="w-3 h-3 bg-white rounded-full border-2 border-black mt-6 z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
