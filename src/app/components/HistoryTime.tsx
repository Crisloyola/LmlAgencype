"use client";
import { useEffect, useState } from "react";

type TimelineItem =
  | { year: string; image: string; text: string }
  | { year: string; images: string[]; text: string };

const originalTimelineData: TimelineItem[] = [
  { year: "2015", image: "/histori/2015.webp", text: "Lobockz Regresa a los Esports" },
  { year: "2019", image: "/histori/gaminA.png", text: "Lobockz Trabaja en LIVE MEDIA COMO ESPORTS DIRECTOR" },
  { year: "2021", image: "/histori/ssl.png", text: "Lobockz crea SSL ENTERTAINMENT y empieza su independización" },
  { year: "2023", image: "/histori/lml.webp", text: "Lobockz crea LATAM MASTERS LEAGUE" },
  { year: "2024", image: "/histori/lmlL.png", text: "Luis Guerrero lanza LML Agency" },
  {
    year: "2025",
    images: ["/stream/fabio01.webp", "/stream/c01.webp", "/stream/2.webp", "/stream/03.webp"],
    text: "LML AGENCY HACIÉNDOSE UN ESPACIO EN EL MERCADO PERUANO",
  },
];

// 2 copias — mínimo para loop CSS seamless (antes eran 3)
const timelineData: TimelineItem[] = [...originalTimelineData, ...originalTimelineData];

export default function TimelineCarousel() {
  return (
    <div className="w-full text-white -mt-20 px-4 overflow-hidden">
      <style>{`
        @keyframes timeline-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .timeline-track {
          animation: timeline-scroll 40s linear infinite;
          will-change: transform;
        }
        .timeline-wrapper:hover .timeline-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative timeline-wrapper">
        <div className="overflow-hidden">
          <div className="timeline-track flex space-x-1 min-w-max">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-start relative">
                <h1 className="text-[55px] ml-8">{item.year}</h1>
                <div className="flex items-center px-4 space-x-4 rounded-2xl max-w-xl">
                  <div className="w-43 h-38 shrink-0 overflow-hidden rounded-[20px] border border-[#33363F]">
                    {"images" in item && Array.isArray(item.images) ? (
                      <div className="w-[300px] h-[300px] overflow-hidden relative">
                        <Carousel images={item.images} />
                      </div>
                    ) : "image" in item ? (
                      <img
                        src={item.image}
                        alt={item.year}
                        width={400}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    ) : null}
                  </div>
                  <div className="flex-1 text-white break-words w-[200px]">
                    <p className="text-lg font-bold uppercase leading-tight">{item.text}</p>
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

function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-[300px] h-[200px] overflow-hidden rounded-[20px]">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`carousel-${i}`}
          className={`absolute top-0 -left-16 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}
