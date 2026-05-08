"use client";
// src/app/alquiler/page.tsx
import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ChevronRight,
  CheckCircle,
  XCircle,
  ArrowLeft,
  MapPin,
  Clock,
  Award,
  Zap,
} from "lucide-react";
import { EQUIPMENT, CATEGORIES, type Equipment } from "../lib/equipment-data";

// ── WhatsApp Icon ─────────────────────────────────────────────────────────────
function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ── Equipment Card ─────────────────────────────────────────────────────────────
// #05: CTA único — solo WhatsApp. La imagen y el nombre mantienen link a la ficha.
function EquipCard({ item, index }: { item: Equipment; index: number }) {
  const [imgErr, setImgErr] = useState(false);
  const cat = CATEGORIES.find((c) => c.id === item.category);
  const waMsg = encodeURIComponent(
    `Hola! Me interesa alquilar: *${item.name}*\nPrecio día: ${item.priceDay} | Evento: ${item.priceEvent}\n¿Está disponible para mi fecha?`
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
      {/* Badges */}
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

      {/* Thumbnail — link a la ficha */}
      <Link href={`/alquiler/${item.slug}`} className="block">
        <div className="relative h-44 bg-[#0e0e0e] overflow-hidden">
          {!imgErr ? (
            <img
              src={item.images[0]}
              alt={item.name}
              onError={() => setImgErr(true)}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
              <span className="text-3xl">{cat?.emoji ?? "📦"}</span>
              <span className="text-[10px] text-gray-600 text-center px-4">{item.name}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Category + nombre (nombre link a ficha) */}
        <div>
          <p className="text-[10px] text-[#B2FA03] uppercase tracking-[0.15em] font-bold mb-0.5">
            {cat?.emoji} {cat?.label}
          </p>
          <Link href={`/alquiler/${item.slug}`}>
            <h3 className="text-white font-bold text-[15px] leading-snug hover:text-[#B2FA03] transition-colors duration-200">
              {item.name}
            </h3>
          </Link>
          <p className="text-gray-500 text-[11px] mt-0.5 leading-tight">{item.tagline}</p>
        </div>

        {/* Specs preview */}
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
            <p className="text-[9px] text-gray-600 uppercase tracking-wider">Fin de sem.</p>
            <p className="text-[#B2FA03] font-extrabold text-[14px]">{item.priceEvent}</p>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-1.5 text-[11px]">
          {item.available ? (
            <>
              <CheckCircle size={11} className="text-emerald-400" />
              <span className="text-emerald-400">Disponible</span>
            </>
          ) : (
            <>
              <XCircle size={11} className="text-red-400" />
              <span className="text-red-400">Consultar fecha</span>
            </>
          )}
        </div>

        {/* #05 — CTA único: solo WhatsApp */}
        <a
          href={`${item.whatsappBase}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-extrabold
                      transition-all duration-200 active:scale-95 ${
                        item.available
                          ? "bg-[#B2FA03] text-black hover:bg-lime-300"
                          : "bg-[#1e1e1e] border border-[#2a2a2a] text-gray-500 hover:border-[#B2FA03]/30"
                      }`}
        >
          <WAIcon size={14} />
          Consultar disponibilidad →
        </a>
      </div>
    </motion.div>
  );
}

// ── Ad Slider (Hero) ──────────────────────────────────────────────────────────
// #02 — Hero reescrito: texto claro, ubicación, CTA único de WhatsApp
const ADS = [
  {
    image: "/equipo/publi01.png",
    badge: "Alquiler de Equipos · Lima, Perú",
    title: "Alquila equipos de audio y video en Lima",
    highlight: "— entrega en 24 h",
    sub: "Micrófonos Shure, Consolas Allen & Heath, Switchers Blackmagic y más para tu evento.",
    cta: "Consultar disponibilidad",
    href: "https://wa.link/7cmlp3",
    ctaIsWA: true,
  },
  {
    image: "/agency/agency3.webp",
    badge: "Audio Profesional · Eventos en Lima",
    title: "Sonido profesional",
    highlight: "para cualquier evento",
    sub: "Sistemas inalámbricos Shure, consolas Allen & Heath y micrófonos Sennheiser.",
    cta: "Ver equipos de audio",
    href: "#catalogo",
    ctaIsWA: false,
  },
  {
    image: "/agency/agency1.webp",
    badge: "Video & Streaming · Lima",
    title: "Producción multicámara",
    highlight: "al alcance de tu evento",
    sub: "Switchers Blackmagic, capturadoras 4K y todo para tu streaming profesional.",
    cta: "Ver equipos de video",
    href: "#catalogo",
    ctaIsWA: false,
  },
];

function AdSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const DURATION = 5000;

  useEffect(() => {
    setProgress(0);
    const step = 50;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += step;
      setProgress((elapsed / DURATION) * 100);
      if (elapsed >= DURATION) {
        setCurrent((p) => (p + 1) % ADS.length);
        elapsed = 0;
        setProgress(0);
      }
    }, step);
    return () => clearInterval(timer);
  }, [current]);

  const ad = ADS[current];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden mb-0"
      style={{ height: "clamp(200px, 36vw, 400px)" }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${current}`}
          className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 gap-3 max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-[#B2FA03] text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
            {ad.badge}
          </span>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold leading-tight drop-shadow">
            {ad.title}{" "}
            <span className="text-[#B2FA03]">{ad.highlight}</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed hidden sm:block">
            {ad.sub}
          </p>
          {ad.ctaIsWA ? (
            <a
              href={ad.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 bg-[#25D366] text-white font-extrabold
                         px-5 py-3 rounded-full text-xs sm:text-sm w-fit shadow-lg
                         hover:bg-[#1ebe57] hover:scale-105 transition-all duration-200"
            >
              <WAIcon size={16} />
              {ad.cta}
            </a>
          ) : (
            <a
              href={ad.href}
              className="mt-1 inline-flex items-center gap-2 bg-[#B2FA03] text-black font-extrabold
                         px-5 py-3 rounded-full text-xs sm:text-sm w-fit
                         hover:bg-lime-300 hover:scale-105 transition-all duration-200"
            >
              {ad.cta}
              <ChevronRight size={14} />
            </a>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-4 left-6 sm:left-10 flex items-center gap-2">
        {ADS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative overflow-hidden rounded-full h-1 transition-all duration-300"
            style={{ width: i === current ? "36px" : "8px" }}
          >
            <span className="absolute inset-0 bg-white/25 rounded-full" />
            {i === current && (
              <span
                className="absolute inset-y-0 left-0 bg-[#B2FA03] rounded-full"
                style={{ width: `${progress}%`, transition: "none" }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-4 right-5 text-white/30 text-[10px] font-bold tracking-widest select-none">
        {String(current + 1).padStart(2, "0")} / {String(ADS.length).padStart(2, "0")}
      </div>
    </div>
  );
}

// ── #06 — Bloque de confianza ─────────────────────────────────────────────────
function TrustBar() {
  const signals = [
    {
      icon: <MapPin size={20} className="text-[#B2FA03]" />,
      title: "Delivery en Lima",
      desc: "Entrega y recojo en tu locación",
    },
    {
      icon: <Clock size={20} className="text-[#B2FA03]" />,
      title: "Respuesta en < 1 hora",
      desc: "Cotización gratuita e inmediata",
    },
    {
      icon: <Award size={20} className="text-[#B2FA03]" />,
      title: "+100 eventos producidos",
      desc: "Experiencia real en Lima",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 my-8">
      {signals.map((s) => (
        <div
          key={s.title}
          className="flex flex-col items-center text-center gap-2 p-4
                     bg-[#161616] border border-[#2a2a2a] rounded-2xl"
        >
          {s.icon}
          <p className="text-white font-bold text-[13px] leading-tight">{s.title}</p>
          <p className="text-gray-500 text-[11px] leading-snug hidden sm:block">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

// ── #08 — Banner de urgencia ──────────────────────────────────────────────────
function UrgencyBanner() {
  return (
    <div className="flex items-center justify-center gap-2 bg-[#B2FA03]/8 border border-[#B2FA03]/20
                    rounded-xl px-4 py-2.5 mb-8">
      <Zap size={13} className="text-[#B2FA03] shrink-0" />
      <p className="text-[#B2FA03] text-[11px] sm:text-xs font-bold">
        Disponibilidad limitada este fin de semana — consulta tu fecha hoy
      </p>
    </div>
  );
}

// ── #04 — Sección de Packs ────────────────────────────────────────────────────
const PACKS = [
  {
    id: "streaming",
    emoji: "🎙️",
    name: "Pack Streaming",
    target: "Streamer · Caster · Podcast",
    badge: "Más popular",
    accentColor: "#B2FA03",
    accentBg: "rgba(178,250,3,0.07)",
    items: [
      "Elgato Cam Link 4K",
      "Cámara Sony FX30",
      "Lente Sigma 18-50mm f/2.8",
      "Micrófono Sennheiser e835",
      "Trípode profesional",
      "1 luz Zhiyun / softbox",
      "Cableado básico incluido",
    ],
    pricing: [
      { label: "Solo equipos", price: "S/ 300", unit: "/ día" },
      { label: "Con config. + soporte remoto + delivery", price: "S/ 400", unit: "/ día", highlight: true },
    ],
    waMsg:
      "Hola! Me interesa el *Pack Streaming* (Cam Link 4K + Sony FX30 + Sennheiser e835 + iluminación). ¿Está disponible? ¿Cuál es la disponibilidad?",
  },
  {
    id: "evento",
    emoji: "🎤",
    name: "Pack Evento",
    target: "Eventos · Corporativo · Podcast multicam",
    badge: null,
    accentColor: "#60a5fa",
    accentBg: "rgba(96,165,250,0.07)",
    items: [
      "Blackmagic ATEM Mini Pro",
      "2× Cámaras Sony FX30",
      "2× Trípodes profesionales",
      "2× Luces de producción",
      "Mic inalámbrico Shure SLXD",
      "Consola Soundcraft Notepad 12FX",
      "Cableado HDMI y audio incluido",
    ],
    pricing: [
      { label: "Por día", price: "S/ 800", unit: "/ día", highlight: true },
    ],
    waMsg:
      "Hola! Me interesa el *Pack Evento* (ATEM Mini Pro + 2× Sony FX30 + Shure SLXD + Soundcraft 12FX). ¿Está disponible para mi fecha?",
  },
  {
    id: "pro",
    emoji: "🎥",
    name: "Pack Pro",
    target: "Producción profesional · Livestream · Torneo",
    badge: "Full producción",
    accentColor: "#a78bfa",
    accentBg: "rgba(167,139,250,0.07)",
    items: [
      "Blackmagic ATEM Extreme ISO",
      "Allen & Heath QU-24C",
      "Sistema inalámbrico Shure SLXD4D",
      "2–4 cámaras profesionales",
      "Iluminación profesional",
      "Grabación ISO por cámara",
      "Cableado completo",
      "Operador técnico (opcional)",
    ],
    pricing: [
      { label: "Solo equipos", price: "S/ 2,500", unit: "· consulta con operador", highlight: true },
    ],
    waMsg:
      "Hola! Me interesa el *Pack Pro* (ATEM Extreme ISO + Allen & Heath QU-24C + SLXD4D + cámaras). ¿Pueden cotizarme para mi fecha?",
  },
];

function PacksSection() {
  return (
    <section className="mb-12" id="packs">
      <div className="mb-8">
        <p className="text-[#B2FA03] text-xs font-bold uppercase tracking-[0.2em] mb-1">
          Packs listos para usar
        </p>
        <h2 className="text-white text-2xl sm:text-3xl font-extrabold leading-tight">
          Elige tu setup — nosotros lo armamos
        </h2>
        <p className="text-gray-500 text-sm mt-1.5">
          Equipos probados para cada tipo de producción. Un WhatsApp y confirmamos disponibilidad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PACKS.map((pack, i) => (
          <motion.div
            key={pack.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="relative flex flex-col bg-[#161616] border border-[#2a2a2a] rounded-2xl overflow-hidden
                       hover:border-white/10 hover:shadow-[0_0_32px_rgba(255,255,255,0.04)] transition-all duration-300"
          >
            {/* Accent top bar */}
            <div
              className="h-[3px] w-full shrink-0"
              style={{ background: pack.accentColor }}
            />

            <div className="flex flex-col flex-1 p-5 gap-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{pack.emoji}</span>
                    {pack.badge && (
                      <span
                        className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ background: pack.accentColor, color: "#000" }}
                      >
                        {pack.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-extrabold text-[18px] leading-tight">
                    {pack.name}
                  </h3>
                  <p
                    className="text-[11px] font-semibold mt-0.5"
                    style={{ color: pack.accentColor }}
                  >
                    {pack.target}
                  </p>
                </div>
              </div>

              {/* Equipment list */}
              <div>
                <p className="text-[9px] text-gray-600 uppercase tracking-[0.15em] font-bold mb-2">
                  Incluye
                </p>
                <ul className="flex flex-col gap-1.5">
                  {pack.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-gray-300">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                        style={{ background: pack.accentColor, opacity: 0.7 }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="border-t border-[#2a2a2a] pt-4 mt-auto flex flex-col gap-2">
                {pack.pricing.map((tier) => (
                  <div
                    key={tier.label}
                    className={`rounded-xl px-3 py-2.5 flex items-center justify-between gap-2 ${
                      tier.highlight
                        ? "border"
                        : "bg-[#0e0e0e]"
                    }`}
                    style={
                      tier.highlight
                        ? { borderColor: pack.accentColor + "40", background: pack.accentBg }
                        : {}
                    }
                  >
                    <p className="text-gray-500 text-[10px] leading-tight max-w-[120px]">
                      {tier.label}
                    </p>
                    <div className="text-right shrink-0">
                      <p
                        className="font-extrabold text-[18px] leading-none"
                        style={{ color: tier.highlight ? pack.accentColor : "#fff" }}
                      >
                        {tier.price}
                      </p>
                      <p className="text-gray-600 text-[9px] mt-0.5">{tier.unit}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.link/7cmlp3?text=${encodeURIComponent(pack.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white
                           py-3 rounded-xl text-[13px] font-extrabold
                           hover:bg-[#1ebe57] transition-all duration-200 active:scale-95
                           shadow-[0_2px_16px_rgba(37,211,102,0.25)]"
              >
                <WAIcon size={15} />
                Consultar disponibilidad →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── #01 — Botón flotante WhatsApp (siempre visible en móvil) ─────────────────
function FloatingWA() {
  return (
    <a
      href="https://wa.link/7cmlp3"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar disponibilidad por WhatsApp"
      className="fixed bottom-6 right-5 z-50
                 flex items-center gap-2
                 bg-[#25D366] text-white font-extrabold text-sm
                 pl-4 pr-5 py-3.5 rounded-full
                 shadow-[0_4px_24px_rgba(37,211,102,0.45)]
                 hover:bg-[#1ebe57] hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)]
                 transition-all duration-200 active:scale-95"
    >
      <WAIcon size={18} />
      <span>Consultar disponibilidad</span>
    </a>
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
            className="flex items-center gap-2 bg-[#25D366] text-white text-xs font-extrabold
                       px-3 py-2 rounded-xl hover:bg-[#1ebe57] transition shrink-0"
          >
            <WAIcon />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10" id="catalogo">
        {/* ── #02 Hero slider ── */}
        <AdSlider />

        {/* ── #06 Bloque de confianza ── */}
        <TrustBar />

        {/* ── #08 Urgencia ── */}
        <UrgencyBanner />

        {/* ── #04 Packs (antes del catálogo) ── */}
        <PacksSection />

        {/* ── Divisor catálogo ── */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#1e1e1e]" />
          <p className="text-gray-600 text-xs font-bold uppercase tracking-[0.2em] shrink-0">
            Catálogo completo
          </p>
          <div className="flex-1 h-px bg-[#1e1e1e]" />
        </div>

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

        {/* ── #07 Filtros por tipo de uso ── */}
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

        {/* ── Results header ── */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs text-gray-600">
            <span className="text-white font-bold">{filtered.length}</span> resultado
            {filtered.length !== 1 ? "s" : ""}
          </p>
          {(search || onlyAvailable || activeCategory !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setOnlyAvailable(false);
                setActiveCategory("all");
              }}
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
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
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
          <h3 className="text-xl font-extrabold text-white">¿No encuentras lo que buscas?</h3>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Armamos el setup ideal para tu evento: cámara, luces, audio y técnico de stream.
            Cotización gratuita en menos de 1 hora.
          </p>
          <a
            href="https://wa.link/7cmlp3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-extrabold
                       px-6 py-3 rounded-xl hover:bg-[#1ebe57] transition text-sm"
          >
            <WAIcon />
            Consultar setup personalizado
          </a>
        </motion.div>
      </div>

      {/* ── #01 Botón flotante WhatsApp ── */}
      <FloatingWA />
    </div>
  );
}
