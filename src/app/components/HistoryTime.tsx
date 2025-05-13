"use client";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    year: "2015",
    image: "/histori/2015.jpg",
    text: "Lobockz Regresa a los Esports",
  },
  {
    year: "2019",
    image: "/histori/gaminA.png",
    text: "Lobockz Trabaja en LIVE MEDIA COMO ESPORTS DIRECTOR.",
  },
  {
    year: "2021",
    image: "/histori/ssl.png",
    text: "Lobockz crea SSL ENTERTAINMENT y empieza su independización.",
  },
   {
    year: "2023",
    image: "/histori/lml.jpg",
    text: "Lobockz crea LATAM MASTERS LEAGUE",
  },
   {
    year: "2024",
    image: "/histori/lmlL.png",
    text: "Luis Guerrero lanza LML Agency",
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
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  text-white -mt-20 px-4 overflow-hidden">
      <div className="relative">

        <div
          ref={scrollRef}
          className="overflow-x-scroll scroll-smooth scrollbar-hide "
        >
          <div className="flex space-x-1 min-w-max">
            {[...timelineData, ...timelineData].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start relative"
              >
                {/* Año */}
                <h1 className="text-[55px]  ml-8 ">{item.year}</h1>

              <div className="flex items-center px-4 space-x-4  rounded-2xl max-w-xl">
                {/* Imagen */}
                <div className="w-43 h-38 shrink-0 overflow-hidden rounded-[20px] border border-[#33363F]">
                  <img
                    src={item.image}
                    alt={item.year}
                    width={300}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Texto */}
                <div className="flex-1 text-white break-words w-[200px]">

                  <p className="text-lg font-bold uppercase leading-tight">
                    {item.text}
                  </p>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
