"use client";
import { useState } from "react";

type EventCard = {
  id: string;
  title: string;
  subtitle?: string;
  instagramUrl?: string;
  thumbnail?: string;
  tag?: string;
  coming?: boolean;
};

const eventos: EventCard[] = [
  {
    id: "evento-1",
    title: "Evento Especial",
    subtitle: "Lima, Perú",
    instagramUrl: "https://www.instagram.com/p/DQUol5uAQpd/",
    tag: "Nuevo",
  },
  // Agrega más eventos aquí
];

function Card({ event }: { event: EventCard }) {
  const [hovered, setHovered] = useState(false);

  if (event.coming) {
    return (
      <div className="relative shrink-0 w-64 md:w-72 rounded-2xl overflow-hidden border border-dashed border-[#33363F] flex flex-col items-center justify-center gap-3 py-16 px-6 text-center"
        style={{ aspectRatio: "2/3" }}>
        <div className="w-12 h-12 rounded-full border border-[#33363F] flex items-center justify-center">
          <svg className="w-5 h-5 text-[#444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <p className="text-[#444] text-xs uppercase tracking-widest font-semibold">Próximamente</p>
      </div>
    );
  }

  return (
    <a
      href={event.instagramUrl ?? "#"}
      target="_blank"
      rel="noreferrer"
      className="group relative shrink-0 w-64 md:w-72 rounded-2xl overflow-hidden text-left block focus:outline-none"
      style={{ aspectRatio: "2/3" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fondo */}
      {event.thumbnail ? (
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
      )}

      {/* Gradiente inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Hover overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/20 ${hovered ? "opacity-100" : "opacity-0"}`}>
        <div className="w-14 h-14 rounded-full border-2 border-white/80 backdrop-blur-sm flex items-center justify-center shadow-2xl"
          style={{ backgroundColor: "rgba(131,58,180,0.5)" }}>
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Badge superior */}
      {event.tag && (
        <div className="absolute top-3 left-3 z-10">
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B2FA03] animate-pulse" />
            <span className="text-white text-[10px] font-bold uppercase tracking-wide">{event.tag}</span>
          </span>
        </div>
      )}

      {/* Badge IG */}
      {event.instagramUrl && (
        <div className="absolute top-3 right-3 z-10">
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-white text-[9px] font-semibold">IG</span>
          </span>
        </div>
      )}

      {/* Título */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="w-5 h-0.5 rounded-full mb-2 bg-[#B2FA03]" />
        <p className="text-white text-sm md:text-base font-bold leading-snug">{event.title}</p>
        {event.subtitle && (
          <p className="text-white/50 text-xs mt-0.5 font-medium">{event.subtitle}</p>
        )}
      </div>
    </a>
  );
}

export default function EventosEspeciales() {
  return (
    <section className="text-white mt-16 px-1">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2a2a2a]" />
        <h2 className="text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-white/70">
          Eventos <span style={{ color: "#B2FA03" }}>Especiales</span>
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2a2a2a]" />
      </div>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        {eventos.map((ev) => (
          <Card key={ev.id} event={ev} />
        ))}
        {/* Slot próximamente */}
        <Card event={{ id: "coming", title: "", coming: true }} />
      </div>
    </section>
  );
}
