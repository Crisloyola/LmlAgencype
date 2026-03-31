"use client";
// src/app/alquiler/[id]/page.tsx
//
// generateStaticParams is needed for Next.js static export.
// Since this uses "use client", export generateStaticParams from a
// separate server component wrapper (see note at bottom of file).
//
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Zap,
  Package,
  Star,
} from "lucide-react";
import {
  CATEGORIES,
  getEquipmentBySlug,
  getLatestEquipment,
  getRelatedEquipment,
  type Equipment,
} from "../../lib/equipment-data";

// ── generateStaticParams (for Next.js static export) ─────────────────────────
// Because this is a "use client" component, Next.js won't pick up
// generateStaticParams here directly. Create the file below as a
// SERVER component wrapper that renders this client component.
// See: src/app/alquiler/[id]/page-server.tsx (instructions at EOF)
// ─────────────────────────────────────────────────────────────────────────────

// ── WhatsApp icon ─────────────────────────────────────────────────────────────
function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ── Latest Banner (horizontal infinite scroll) ────────────────────────────────
function LatestBanner({ latest }: { latest: Equipment[] }) {
  // Duplicate items for seamless loop
  const items = [...latest, ...latest, ...latest];

  return (
    <div className="w-full bg-[#0a0a0a] border-b border-[#1e1e1e] overflow-hidden py-2.5">
      {/* Label */}
      <div className="flex items-center">
        <div className="shrink-0 flex items-center gap-2 px-4 pr-5 border-r border-[#2a2a2a] z-10 bg-[#0a0a0a]">
          <span className="w-2 h-2 rounded-full bg-[#B2FA03] animate-pulse" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#B2FA03] whitespace-nowrap">
            Lo último
          </span>
        </div>

        {/* Scrolling track */}
        <div className="overflow-hidden flex-1 relative">
          <motion.div
            className="flex gap-6 pl-6"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {items.map((item, i) => {
              const cat = CATEGORIES.find((c) => c.id === item.category);
              return (
                <Link
                  key={`${item.id}-${i}`}
                  href={`/alquiler/${item.slug}`}
                  className="flex items-center gap-2.5 shrink-0 group"
                >
                  {/* Thumbnail */}
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] text-[#B2FA03]/70 uppercase tracking-widest">
                      {cat?.emoji} {cat?.label}
                    </span>
                    <span className="text-white text-[11px] font-bold group-hover:text-[#B2FA03] transition whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="text-gray-600 text-[9px]">{item.priceDay}/día</span>
                  </div>

                  {item.isNew && (
                    <span className="bg-[#B2FA03] text-black text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}

                  <span className="text-[#2a2a2a] text-lg ml-2">·</span>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── Image Gallery ─────────────────────────────────────────────────────────────
function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [imgErrors, setImgErrors] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );

  const handleError = (i: number) => {
    setImgErrors((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative aspect-[4/3] bg-[#0e0e0e] rounded-2xl overflow-hidden border border-[#2a2a2a]">
        <AnimatePresence mode="wait">
          {!imgErrors[active] ? (
            <motion.img
              key={active}
              src={images[active]}
              alt={`${name} - imagen ${active + 1}`}
              onError={() => handleError(active)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Package size={48} className="text-[#B2FA03]/20" />
            </div>
          )}
        </AnimatePresence>

        {/* Nav arrows (only if >1 image) */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActive((v) => (v - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur
                         flex items-center justify-center hover:bg-[#B2FA03] hover:text-black transition text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setActive((v) => (v + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur
                         flex items-center justify-center hover:bg-[#B2FA03] hover:text-black transition text-white"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-full">
            {active + 1}/{images.length}
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition ${
                active === i ? "border-[#B2FA03]" : "border-[#2a2a2a] opacity-50 hover:opacity-80"
              }`}
            >
              {!imgErrors[i] ? (
                <img
                  src={src}
                  alt=""
                  onError={() => handleError(i)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                  <Package size={12} className="text-gray-600" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Related card (minimal) ────────────────────────────────────────────────────
function RelatedCard({ item }: { item: Equipment }) {
  const cat = CATEGORIES.find((c) => c.id === item.category);
  return (
    <Link href={`/alquiler/${item.slug}`} className="group block">
      <div className="bg-[#161616] border border-[#2a2a2a] rounded-xl overflow-hidden
                      hover:border-[#B2FA03]/40 transition-all duration-200">
        <div className="relative h-28 bg-[#0e0e0e] overflow-hidden">
          <img
            src={item.images[0]}
            alt={item.name}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
          />
          {item.isNew && (
            <span className="absolute top-2 left-2 bg-[#B2FA03] text-black text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-full">
              NEW
            </span>
          )}
        </div>
        <div className="p-3">
          <p className="text-[9px] text-[#B2FA03]/70 uppercase tracking-widest">{cat?.emoji} {cat?.label}</p>
          <p className="text-white text-[12px] font-bold leading-snug mt-0.5">{item.name}</p>
          <p className="text-[#B2FA03] text-[11px] font-extrabold mt-1">{item.priceDay}<span className="text-gray-600 font-normal">/día</span></p>
        </div>
      </div>
    </Link>
  );
}

// ── Main Detail Page ──────────────────────────────────────────────────────────
export default function EquipmentDetailPage() {
  const params = useParams();
  const slug = params?.id as string;
  const item = getEquipmentBySlug(slug);
  const latest = getLatestEquipment(10);
  const related = item ? getRelatedEquipment(item, 4) : [];
  const cat = item ? CATEGORIES.find((c) => c.id === item.category) : null;

  const [activeTab, setActiveTab] = useState<"specs" | "incluye" | "uso">("specs");

  // Build WhatsApp message
  const waMsg = item
    ? encodeURIComponent(
        `Hola! Me interesa alquilar:\n*${item.name}*\n\nPrecio día: ${item.priceDay}\nPrecio evento: ${item.priceEvent}${item.priceWeek ? `\nPrecio semana: ${item.priceWeek}` : ""}\n\n¿Está disponible?`
      )
    : "";

  // 404
  if (!item) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center gap-4">
        <p className="text-5xl">🔍</p>
        <p className="text-white text-xl font-bold">Equipo no encontrado</p>
        <Link
          href="/alquiler"
          className="text-[#B2FA03] text-sm flex items-center gap-1 hover:underline"
        >
          <ArrowLeft size={14} /> Volver al catálogo
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: "specs", label: "Especificaciones", icon: Zap },
    { id: "incluye", label: "Incluye", icon: Package },
    { id: "uso", label: "Ideal para", icon: Star },
  ] as const;

  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-50 bg-[#0e0e0e]/95 backdrop-blur border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <Link
            href="/alquiler"
            className="flex items-center gap-1.5 text-gray-500 hover:text-white transition text-xs shrink-0"
          >
            <ArrowLeft size={14} />
            Catálogo
          </Link>
          <Image src="/Logo.svg" alt="LML Agency" width={80} height={45} />
          <a
            href={`${item.whatsappBase}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#B2FA03] text-black text-xs font-extrabold
                       px-3 py-2 rounded-xl hover:bg-lime-300 transition shrink-0"
          >
            <WAIcon size={13} />
            Alquilar
          </a>
        </div>
      </div>

      {/* ── Latest Banner ── */}
      <LatestBanner latest={latest} />

      {/* ── Breadcrumb ── */}
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-2">
        <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <ChevronRight size={10} />
          <Link href="/alquiler" className="hover:text-white transition">Alquiler</Link>
          <ChevronRight size={10} />
          <span className="text-[#B2FA03]">{cat?.emoji} {cat?.label}</span>
          <ChevronRight size={10} />
          <span className="text-gray-400">{item.name}</span>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* ── LEFT: Gallery ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Gallery images={item.images} name={item.name} />
          </motion.div>

          {/* ── RIGHT: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Badges + category */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] text-[#B2FA03] uppercase tracking-[0.2em] font-bold">
                {cat?.emoji} {cat?.label}
              </span>
              {item.isNew && (
                <span className="bg-[#B2FA03] text-black text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                  Nuevo
                </span>
              )}
              {item.badge && !item.isNew && (
                <span className="bg-white/5 border border-white/10 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Name + tagline */}
            <div>
              <p className="text-gray-500 text-xs mb-1">{item.brand}</p>
              <h1 className="text-[28px] md:text-[36px] font-extrabold text-white leading-none mb-2">
                {item.name}
              </h1>
              <p className="text-[#B2FA03]/80 text-sm font-medium italic">{item.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

            {/* Availability */}
            <div
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-bold w-fit ${
                item.available
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-red-500/30 bg-red-500/10 text-red-400"
              }`}
            >
              {item.available ? (
                <><CheckCircle size={14} /> Disponible para alquilar</>
              ) : (
                <><XCircle size={14} /> Reservado — consultar disponibilidad</>
              )}
            </div>

            {/* Pricing grid */}
            <div className={`grid gap-3 ${item.priceWeek ? "grid-cols-3" : "grid-cols-2"}`}>
              {[
                { label: "Por día", price: item.priceDay, accent: false },
                { label: "Evento", price: item.priceEvent, accent: true },
                ...(item.priceWeek
                  ? [{ label: "Por semana", price: item.priceWeek, accent: false }]
                  : []),
              ].map((p) => (
                <div
                  key={p.label}
                  className={`text-center p-4 rounded-xl border ${
                    p.accent
                      ? "bg-[#B2FA03]/10 border-[#B2FA03]/30"
                      : "bg-[#161616] border-[#2a2a2a]"
                  }`}
                >
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-1">{p.label}</p>
                  <p className={`text-xl font-extrabold ${p.accent ? "text-[#B2FA03]" : "text-white"}`}>
                    {p.price}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${item.whatsappBase}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#B2FA03] text-black
                           font-extrabold px-6 py-4 rounded-2xl hover:bg-lime-300 transition
                           active:scale-95 text-[13px]"
              >
                <WAIcon />
                {item.available ? "Reservar por WhatsApp" : "Consultar disponibilidad"}
              </a>
              <Link
                href="/alquiler"
                className="flex items-center justify-center gap-1.5 px-4 py-4 rounded-2xl border border-[#2a2a2a]
                           text-gray-400 text-sm hover:border-[#B2FA03]/40 hover:text-white transition"
              >
                <ArrowLeft size={14} />
                Ver más equipos
              </Link>
            </div>

            {/* Added date */}
            <p className="text-[10px] text-gray-700">
              Agregado al catálogo:{" "}
              {new Date(item.addedAt).toLocaleDateString("es-PE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
        </div>

        {/* ── Tabs section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          {/* Tab header */}
          <div className="flex gap-0 border-b border-[#1e1e1e] mb-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-sm font-bold whitespace-nowrap
                              border-b-2 -mb-px transition-all duration-200 ${
                                active
                                  ? "border-[#B2FA03] text-[#B2FA03]"
                                  : "border-transparent text-gray-600 hover:text-white"
                              }`}
                >
                  <Icon size={13} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === "specs" && (
              <motion.div
                key="specs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              >
                {item.specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-4"
                  >
                    <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-1">
                      {spec.label}
                    </p>
                    <p className="text-white font-bold text-sm">{spec.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "incluye" && (
              <motion.div
                key="incluye"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {item.includes.map((inc, i) => (
                  <motion.div
                    key={inc}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 bg-[#161616] border border-[#2a2a2a] rounded-xl p-4"
                  >
                    <CheckCircle size={16} className="text-[#B2FA03] shrink-0" />
                    <span className="text-white text-sm">{inc}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "uso" && (
              <motion.div
                key="uso"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                {item.idealFor.map((use, i) => (
                  <motion.span
                    key={use}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-1.5 bg-[#B2FA03]/10 border border-[#B2FA03]/25
                               text-[#B2FA03] text-sm font-bold px-4 py-2 rounded-full"
                  >
                    <Star size={11} />
                    {use}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Related equipment ── */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-extrabold text-white">
                Más equipos de {cat?.label}
              </h2>
              <Link
                href={`/alquiler`}
                className="text-[#B2FA03] text-xs flex items-center gap-1 hover:underline"
              >
                Ver todos <ChevronRight size={11} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {related.map((r) => (
                <RelatedCard key={r.id} item={r} />
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Final CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8 text-center space-y-4 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-[#B2FA03] blur-xl opacity-40" />
          <p className="text-gray-500 text-xs uppercase tracking-widest">¿Listo para alquilar?</p>
          <h3 className="text-2xl font-extrabold text-white">
            Reserva el <span className="text-[#B2FA03]">{item.name}</span>
            <br />por WhatsApp ahora
          </h3>
          <p className="text-gray-500 text-sm">
            Respondemos en menos de 24h · Despacho en Lima · Paquetes personalizados disponibles
          </p>
          <a
            href={`${item.whatsappBase}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B2FA03] text-black font-extrabold
                       px-8 py-4 rounded-2xl hover:bg-lime-300 transition active:scale-95 text-sm"
          >
            <WAIcon />
            Contactar a LML Agency
          </a>
        </motion.div>
      </div>
    </div>
  );
}

/*
──────────────────────────────────────────────────────────────────────────────
NOTE — Static Export (next.config.ts has output: 'export')
──────────────────────────────────────────────────────────────────────────────
Because `generateStaticParams` must be exported from a Server Component,
create this thin wrapper at: src/app/alquiler/[id]/page.tsx

Replace the current file with:

```tsx
// src/app/alquiler/[id]/page.tsx  ← SERVER COMPONENT (no "use client")
import { EQUIPMENT } from "../../lib/equipment-data";
import EquipmentDetailPage from "./EquipmentDetailPage"; // ← this file renamed

export function generateStaticParams() {
  return EQUIPMENT.map((e) => ({ id: e.slug }));
}

export default function Page() {
  return <EquipmentDetailPage />;
}
```

Then rename this file to: src/app/alquiler/[id]/EquipmentDetailPage.tsx
──────────────────────────────────────────────────────────────────────────────
*/
