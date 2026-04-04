"use client";
import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronRight,
  CheckCircle,
  XCircle,
  Filter,
} from "lucide-react";
import { EQUIPMENT, CATEGORIES, type Equipment } from "../lib/equipment-data";

// ─── Sub-components ───────────────────────────────────────────────────────────

function EquipmentCard({
  item,
  index,
}: {
  item: Equipment;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const cat = CATEGORIES.find((c) => c.id === item.category);

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa alquilar: *${item.name}*\nPrecio día: ${item.priceDay} | Evento: ${item.priceEvent}\n¿Está disponible?`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="group relative bg-[#1a1a1a] border border-[#33363F] rounded-3xl overflow-hidden
                 hover:border-[#B2FA03]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(178,250,3,0.08)]
                 flex flex-col"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex gap-2">
        {item.isNew && (
          <span className="bg-[#B2FA03] text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            Nuevo
          </span>
        )}
        {item.badge && !item.isNew && (
          <span className="bg-white/10 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border border-white/20">
            {item.badge}
          </span>
        )}
      </div>

      {/* Availability dot */}
      <span
        className={`absolute top-3 right-3 z-20 w-2.5 h-2.5 rounded-full ${
          item.available
            ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
            : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
        }`}
      />

      {/* Image */}
      <div className="relative h-48 bg-[#111] overflow-hidden">
        {!imgError ? (
          <img
            src={item.images[0]}
            alt={item.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#0d0d0d] gap-3">
            <span className="text-3xl">{cat?.emoji ?? "📦"}</span>
            <p className="text-[11px] text-gray-600 text-center px-4 leading-tight">{item.name}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Name + category */}
        <div>
          <p className="text-[11px] text-[#B2FA03] uppercase tracking-widest font-bold mb-1">
            {cat?.emoji} {cat?.label ?? item.category}
          </p>
          <h3 className="text-white text-[17px] font-bold leading-tight">{item.name}</h3>
          <p className="text-gray-500 text-[11px] mt-0.5 leading-tight">{item.tagline}</p>
        </div>

        {/* Specs (first 4) */}
        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
          {item.specs.slice(0, 4).map((spec) => (
            <li key={spec.label} className="flex items-center gap-1.5 text-[11px] text-gray-400">
              <span className="w-1 h-1 rounded-full bg-[#B2FA03] shrink-0" />
              {spec.value}
            </li>
          ))}
        </ul>

        {/* Prices */}
        <div className="flex gap-3 mt-auto pt-3 border-t border-[#33363F]">
          {item.priceDay === "Consultar" ? (
            <div className="flex-1 text-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Precio</p>
              <p className="text-[#B2FA03] font-bold text-[14px]">Consultar</p>
            </div>
          ) : (
            <>
              <div className="flex-1 text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Por día</p>
                <p className="text-white font-bold text-[15px]">{item.priceDay}</p>
              </div>
              <div className="w-px bg-[#33363F]" />
              <div className="flex-1 text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Fin de sem.</p>
                <p className="text-[#B2FA03] font-bold text-[15px]">{item.priceEvent}</p>
              </div>
            </>
          )}
        </div>

        {/* Availability text */}
        <div className="flex items-center gap-1.5 text-[12px]">
          {item.available ? (
            <>
              <CheckCircle size={13} className="text-green-400" />
              <span className="text-green-400">Disponible ahora</span>
            </>
          ) : (
            <>
              <XCircle size={13} className="text-red-400" />
              <span className="text-red-400">Reservado — consultar fecha</span>
            </>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {/* Ver ficha */}
          <Link
            href={`/alquiler/${item.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#1e1e1e] border border-[#33363F]
                       text-white text-[11px] font-bold py-3 rounded-2xl
                       hover:border-[#B2FA03]/50 hover:text-[#B2FA03] transition-all duration-200"
          >
            Ver ficha completa
            <ChevronRight size={12} />
          </Link>

          {/* WhatsApp */}
          <a
            href={`${item.whatsappBase}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-bold text-[13px]
              transition-all duration-200 active:scale-95 ${
                item.available
                  ? "bg-[#B2FA03] text-black hover:bg-lime-300"
                  : "bg-[#1e1e1e] border border-[#33363F] text-gray-400 hover:border-[#B2FA03]/40"
              }`}
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function EquipmentRental() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    return EQUIPMENT.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.some((s) =>
          s.value.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesAvailability = showOnlyAvailable ? item.available : true;
      return matchesCategory && matchesSearch && matchesAvailability;
    });
  }, [activeCategory, searchQuery, showOnlyAvailable]);

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: EQUIPMENT.length };
    CATEGORIES.slice(1).forEach((cat) => {
      result[cat.id] = EQUIPMENT.filter((e) => e.category === cat.id).length;
    });
    return result;
  }, []);

  return (
    <section
      id="alquiler"
      className="py-16 px-2 sm:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12 space-y-4"
      >
        <span className="inline-block bg-[#B2FA03]/10 border border-[#B2FA03]/30 text-[#B2FA03] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
          Alquiler de Equipos
        </span>
        <h2 className="text-[35px] md:text-[48px] lg:text-[55px] font-extrabold text-white leading-tight">
          Equipa tu próximo
          <br />
          <span className="text-[#B2FA03]">proyecto digital</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Sistemas inalámbricos, consolas de audio, switchers de video y más —
          todo lo que necesitas para tu evento o producción. Disponible por día o fin de semana.
        </p>

        {/* Stats row */}
        <div className="flex justify-center gap-8 pt-4">
          {[
            { value: `${EQUIPMENT.length}+`, label: "Equipos" },
            { value: `${EQUIPMENT.filter((e) => e.available).length}`, label: "Disponibles" },
            { value: "24h", label: "Respuesta" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[#B2FA03] text-2xl font-extrabold">{stat.value}</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Search & Filter bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <div
          className="relative flex-1 cursor-text"
          onClick={() => searchRef.current?.focus()}
        >
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            ref={searchRef}
            type="text"
            placeholder="Buscar equipo, marca o especificación..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3.5 bg-[#1a1a1a] border border-[#33363F] rounded-2xl text-white
                       placeholder:text-gray-600 text-sm outline-none focus:border-[#B2FA03]/60
                       transition-colors duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
            >
              ✕
            </button>
          )}
        </div>

        <button
          onClick={() => setShowOnlyAvailable((v) => !v)}
          className={`flex items-center gap-2 px-4 py-3.5 rounded-2xl border text-sm font-bold transition-all duration-200 whitespace-nowrap ${
            showOnlyAvailable
              ? "bg-[#B2FA03] text-black border-[#B2FA03]"
              : "bg-[#1a1a1a] text-gray-400 border-[#33363F] hover:border-[#B2FA03]/40"
          }`}
        >
          <Filter size={14} />
          Solo disponibles
        </button>
      </motion.div>

      {/* ── Category tabs ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex overflow-x-auto scrollbar-hide border-y border-[#33363F] mb-8"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-bold whitespace-nowrap
                          transition-all duration-200 shrink-0 border-b-2 -mb-px ${
                            isActive
                              ? "border-[#B2FA03] text-[#B2FA03]"
                              : "border-transparent text-gray-500 hover:text-white"
                          }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive
                    ? "bg-[#B2FA03] text-black"
                    : "bg-[#1e1e1e] text-gray-500"
                }`}
              >
                {counts[cat.id] ?? 0}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* ── Results info ── */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          <span className="text-white font-bold">{filtered.length}</span> equipo
          {filtered.length !== 1 ? "s" : ""} encontrado
          {filtered.length !== 1 ? "s" : ""}
        </p>
        {(searchQuery || showOnlyAvailable || activeCategory !== "all") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setShowOnlyAvailable(false);
              setActiveCategory("all");
            }}
            className="text-xs text-[#B2FA03] hover:underline"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* ── Equipment grid ── */}
      <AnimatePresence mode="popLayout">
        {filtered.length > 0 ? (
          <motion.div
            key="grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((item, idx) => (
              <EquipmentCard key={item.id} item={item} index={idx} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <Search size={40} className="text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 text-base">
              No encontramos equipos para{" "}
              <span className="text-white">&quot;{searchQuery}&quot;</span>
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-[#B2FA03] text-sm hover:underline"
            >
              Ver todos los equipos
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom CTA banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-16 bg-[#1a1a1a] border border-[#33363F] rounded-3xl p-8 md:p-12 text-center space-y-5
                   relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-[#B2FA03] blur-xl opacity-40 rounded-full" />

        <h3 className="text-2xl md:text-3xl font-extrabold text-white">
          ¿No encuentras lo que buscas?
        </h3>
        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
          Contamos con más equipo disponible y paquetes personalizados para
          eventos. Escríbenos y armamos la producción que necesitas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/alquiler"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold
                       px-6 py-4 rounded-2xl hover:bg-white/20 transition-all duration-200 text-sm"
          >
            Ver catálogo completo
            <ChevronRight size={16} />
          </Link>
          <a
            href="https://wa.link/7cmlp3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#B2FA03] text-black font-extrabold
                       px-8 py-4 rounded-2xl hover:bg-lime-300 transition-all duration-200
                       active:scale-95 text-sm md:text-base"
          >
            <WhatsAppIcon />
            Consultar paquetes personalizados
          </a>
        </div>
      </motion.div>
    </section>
  );
}
