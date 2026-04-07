"use client";
// src/app/alquiler/page.tsx
import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronRight, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { EQUIPMENT, CATEGORIES, type Equipment } from "../lib/equipment-data";

// ── WhatsApp Icon ─────────────────────────────────────────────────────────────
function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ── Equipment Card (listing) ──────────────────────────────────────────────────
function EquipCard({ item, index }: { item: Equipment; index: number }) {
  const [imgErr, setImgErr] = useState(false);
  const cat = CATEGORIES.find((c) => c.id === item.category);
  const waMsg = encodeURIComponent(
    `Hola! Me interesa alquilar: *${item.name}*\nPrecio día: ${item.priceDay} | Evento: ${item.priceEvent}\n¿Está disponible?`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col bg-[#161616] border border-[#2a2a2a]
                 rounded-2xl overflow-hidden
                 hover:border-[#B2FA03]/40 hover:shadow-[0_0_24px_rgba(178,250,3,0.07)]
                 transition-all duration-300"
    >
      {/* Badges row */}
      <div className="absolute top-3 left-3 z-20 flex gap-2">
        {item.isNew && (
          <span className="bg-[#B2FA03] text-black text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full">
            Nuevo
          </span>
        )}
        {item.badge && !item.isNew && (
          <span className="bg-white/10 backdrop-blur text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/20">
            {item.badge}
          </span>
        )}
      </div>

      {/* Availability dot */}
      <span
        className={`absolute top-3 right-3 z-20 w-2 h-2 rounded-full ${
          item.available
            ? "bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.9)]"
            : "bg-red-500 shadow-[0_0_7px_rgba(239,68,68,0.9)]"
        }`}
      />

      {/* Thumbnail */}
      <div className="relative aspect-[4/3] bg-[#0e0e0e] overflow-hidden">
        {!imgErr ? (
          <img
            src={item.images[0]}
            alt={item.name}
            onError={() => setImgErr(true)}
            className="w-full h-full object-contain p-4 group-hover:scale-[1.04] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-3xl">{cat?.emoji ?? "📦"}</span>
            <span className="text-[10px] text-gray-600 text-center px-4">{item.name}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Category + name */}
        <div>
          <p className="text-[10px] text-[#B2FA03] uppercase tracking-[0.15em] font-bold mb-0.5">
            {cat?.emoji} {cat?.label}
          </p>
          <h3 className="text-white font-bold text-[15px] leading-snug">{item.name}</h3>
          <p className="text-gray-500 text-[11px] mt-0.5 leading-tight">{item.tagline}</p>
        </div>

        {/* Specs preview (first 4) */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {item.specs.slice(0, 4).map((s) => (
            <span key={s.label} className="text-[10px] text-gray-400 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#B2FA03]/60 shrink-0" />
              {s.value}
            </span>
          ))}
        </div>

        {/* Prices */}
        <div className="flex gap-2 pt-2 mt-auto border-t border-[#2a2a2a]">
          <div className="flex-1 text-center">
            <p className="text-[9px] text-gray-600 uppercase tracking-wider">Día</p>
            <p className="text-white font-extrabold text-[14px]">{item.priceDay}</p>
          </div>
          <div className="w-px bg-[#2a2a2a]" />
          <div className="flex-1 text-center">
            <p className="text-[9px] text-gray-600 uppercase tracking-wider">Evento</p>
            <p className="text-[#B2FA03] font-extrabold text-[14px]">{item.priceEvent}</p>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-1.5 text-[11px]">
          {item.available ? (
            <><CheckCircle size={11} className="text-emerald-400" /><span className="text-emerald-400">Disponible</span></>
          ) : (
            <><XCircle size={11} className="text-red-400" /><span className="text-red-400">Consultar fecha</span></>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {/* Ver ficha */}
          <Link
            href={`/alquiler/${item.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#1e1e1e] border border-[#33363F]
                       text-white text-[11px] font-bold py-2.5 rounded-xl
                       hover:border-[#B2FA03]/50 hover:text-[#B2FA03] transition-all duration-200"
          >
            Ver ficha completa
            <ChevronRight size={12} />
          </Link>

          {/* WhatsApp */}
          <a
            href={`${item.whatsappBase}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-[11px] font-bold
                        transition-all duration-200 active:scale-95 ${
                          item.available
                            ? "bg-[#B2FA03] text-black hover:bg-lime-300"
                            : "bg-[#1e1e1e] border border-[#2a2a2a] text-gray-500"
                        }`}
          >
            <WAIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AlquilerPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    return EQUIPMENT.filter((item) => {
      const catOk = activeCategory === "all" || item.category === activeCategory;
      const searchOk =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.specs.some((s) => s.value.toLowerCase().includes(search.toLowerCase()));
      const availOk = !onlyAvailable || item.available;
      return catOk && searchOk && availOk;
    });
  }, [activeCategory, search, onlyAvailable]);

  const counts = useMemo(() => {
    const r: Record<string, number> = { all: EQUIPMENT.length };
    CATEGORIES.slice(1).forEach((c) => {
      r[c.id] = EQUIPMENT.filter((e) => e.category === c.id).length;
    });
    return r;
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      {/* ── Top bar ── */}
      <div className="sticky top-0 z-40 bg-[#0e0e0e]/90 backdrop-blur border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-white transition text-sm shrink-0"
          >
            <ArrowLeft size={16} />
            Inicio
          </Link>
          <Image src="/Logo.svg" alt="LML Agency" width={90} height={51} />
          <a
            href="https://wa.link/7cmlp3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#B2FA03] text-black text-xs font-extrabold
                       px-3 py-2 rounded-xl hover:bg-lime-300 transition shrink-0"
          >
            <WAIcon />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 space-y-3"
        >
          <span className="inline-block bg-[#B2FA03]/10 border border-[#B2FA03]/25 text-[#B2FA03]
                           text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
            Alquiler de Equipos
          </span>
          <h1 className="text-[32px] md:text-[48px] font-extrabold text-white leading-none">
            Equipa tu producción
            <br />
            <span className="text-[#B2FA03]">desde S/ 50 / día</span>
          </h1>
          <p className="text-gray-500 text-sm max-w-lg">
            Cámaras, iluminación, audio y más — todo lo que necesitas para
            producir contenido profesional en Lima.
          </p>

          {/* Stats */}
          <div className="flex gap-6 pt-2">
            {[
              { v: `${EQUIPMENT.length}`, l: "equipos" },
              { v: `${EQUIPMENT.filter((e) => e.available).length}`, l: "disponibles" },
              { v: `${EQUIPMENT.filter((e) => e.isNew).length}`, l: "recientes" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-[#B2FA03] text-xl font-extrabold">{s.v}</p>
                <p className="text-gray-600 text-[10px] uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Search + filter ── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div
            className="relative flex-1 cursor-text"
            onClick={() => searchRef.current?.focus()}
          >
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              ref={searchRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, marca o spec..."
              className="w-full pl-9 pr-9 py-3 bg-[#161616] border border-[#2a2a2a] rounded-xl
                         text-white text-sm placeholder:text-gray-700 outline-none
                         focus:border-[#B2FA03]/50 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
          <button
            onClick={() => setOnlyAvailable((v) => !v)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-bold transition shrink-0 ${
              onlyAvailable
                ? "bg-[#B2FA03] text-black border-[#B2FA03]"
                : "bg-[#161616] text-gray-500 border-[#2a2a2a] hover:border-[#B2FA03]/30"
            }`}
          >
            <Filter size={13} />
            Disponibles
          </button>
        </div>

        {/* ── Category tabs ── */}
        <div className="flex overflow-x-auto scrollbar-hide border-b border-[#1e1e1e] mb-7">
          {CATEGORIES.map((cat) => {
            const active = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-3.5 text-xs font-bold whitespace-nowrap
                            shrink-0 border-b-2 -mb-px transition-all duration-200 ${
                              active
                                ? "border-[#B2FA03] text-[#B2FA03]"
                                : "border-transparent text-gray-600 hover:text-white"
                            }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                    active ? "bg-[#B2FA03] text-black" : "bg-[#1e1e1e] text-gray-600"
                  }`}
                >
                  {counts[cat.id] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Results ── */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs text-gray-600">
            <span className="text-white font-bold">{filtered.length}</span> resultado
            {filtered.length !== 1 ? "s" : ""}
          </p>
          {(search || onlyAvailable || activeCategory !== "all") && (
            <button
              onClick={() => { setSearch(""); setOnlyAvailable(false); setActiveCategory("all"); }}
              className="text-[11px] text-[#B2FA03] hover:underline"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* ── Grid ── */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filtered.map((item, i) => (
                <EquipCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-gray-500 text-sm">Sin resultados para &ldquo;{search}&rdquo;</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("all"); }}
                className="mt-3 text-[#B2FA03] text-xs hover:underline"
              >
                Ver todo
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8 text-center space-y-4 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-0.5 bg-[#B2FA03] blur-lg opacity-50" />
          <h3 className="text-xl font-extrabold text-white">¿Necesitas un paquete completo?</h3>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Armamos el setup ideal para tu evento: cámara, luces, audio y técnico de stream.
          </p>
          <a
            href="https://wa.link/7cmlp3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B2FA03] text-black font-extrabold
                       px-6 py-3 rounded-xl hover:bg-lime-300 transition text-sm"
          >
            <WAIcon />
            Consultar paquete personalizado
          </a>
        </motion.div>
      </div>
    </div>
  );
}
