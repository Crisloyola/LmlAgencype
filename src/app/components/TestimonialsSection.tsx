'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// =============================================================================
// CÓMO AGREGAR O EDITAR TESTIMONIOS
// =============================================================================
// 1. Copia uno de los objetos y pégalo al final del array.
// 2. Rellena quote, author, role y company con el texto real.
// 3. Para el logo:
//      a) Pon el archivo en  /public/logos/nombre.png  (PNG o SVG)
//      b) Escribe esa ruta en el campo  logo  (ej. '/logos/redragon.png')
//    Si lo dejas en '' se muestra la  initial  con el  color  elegido.
// 4. color: hex de acento de esa marca.
// =============================================================================

const testimonials = [
  {
    id: 1,
    logo: '',                     // ← '/logos/redragon.png'
    company: 'Redragon',
    initial: 'R',
    color: '#ef4444',
    quote:
      'LML Agency elevó la producción de nuestro torneo a otro nivel. Su equipo es altamente profesional, creativo y comprometido con cada detalle del evento.',
    author: 'Team Redragon',
    role: 'Patrocinador Oficial',
  },
  {
    id: 2,
    logo: '',
    company: 'Zeinternacional',
    initial: 'Z',
    color: '#B2FA03',
    quote:
      'El Zeinternacional no sería lo mismo sin LML. Llevaron nuestra visión a la realidad con una transmisión impecable y una energía que contagió a toda la comunidad.',
    author: 'Zein',
    role: 'Organizador del Torneo',
  },
  {
    id: 3,
    logo: '',
    company: 'Odyssey Cup',
    initial: 'O',
    color: '#A855F7',
    quote:
      'Desde la logística hasta el streaming en vivo, LML garantizó que cada momento fuera memorable. El profesionalismo de su equipo es excepcional.',
    author: 'Equipo Odyssey',
    role: 'Organizadores',
  },
  {
    id: 4,
    logo: '',
    company: 'Lima Media Marathon',
    initial: 'L',
    color: '#F0A500',
    quote:
      'Trabajar con LML para la Lima Media Marathon fue una experiencia extraordinaria. Su capacidad de adaptación y calidad técnica superó todas nuestras expectativas.',
    author: 'Equipo Gloria',
    role: 'Patrocinador Principal',
  },
]

// =============================================================================
// CÓMO AGREGAR MARCAS AL TICKER (banda infinita inferior)
// =============================================================================
// Mismo sistema: logo o '' para inicial. El ticker duplica la lista solo.
// =============================================================================

const brands = [
  { name: 'Redragon',         logo: '',  initial: 'R', color: '#ef4444' },
  { name: 'Zeinternacional',  logo: '',  initial: 'Z', color: '#B2FA03' },
  { name: 'Odyssey Cup',      logo: '',  initial: 'O', color: '#A855F7' },
  { name: 'Gloria',           logo: '',  initial: 'G', color: '#F0A500' },
  { name: 'Fabio Agostini',   logo: '',  initial: 'F', color: '#3b82f6' },
  { name: 'Claudia Serpa',    logo: '',  initial: 'C', color: '#ec4899' },
  { name: 'Parado sin Polo',  logo: '',  initial: 'P', color: '#22d3ee' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

const DELAY = 5000 // ms entre slides

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 155
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

// ─── CompanyLogo ──────────────────────────────────────────────────────────────

function CompanyLogo({ logo, initial, color, name, size }: {
  logo: string; initial: string; color: string; name: string
  size: 'sm' | 'md' | 'xl'
}) {
  const textColor = isLight(color) ? '#000' : '#fff'

  if (logo) {
    const h = size === 'xl' ? 'h-16' : size === 'md' ? 'h-10' : 'h-7'
    return (
      <img src={logo} alt={name} className={`${h} w-auto object-contain`} />
    )
  }

  const cls =
    size === 'xl'
      ? 'w-20 h-20 text-2xl rounded-3xl'
      : size === 'md'
      ? 'w-12 h-12 text-base rounded-2xl'
      : 'w-8 h-8 text-xs rounded-xl'

  return (
    <div
      className={`${cls} flex items-center justify-center font-black shrink-0`}
      style={{ backgroundColor: color, color: textColor }}
    >
      {initial}
    </div>
  )
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function Stars({ color = '#B2FA03' }: { color?: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill={color}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  const [idx, setIdx]   = useState(0)
  const [dir, setDir]   = useState(1)
  const timerRef        = useRef<ReturnType<typeof setTimeout> | null>(null)

  const total = testimonials.length
  const t     = testimonials[idx]

  const go = (next: number, direction: number) => {
    setDir(direction)
    setIdx(next)
  }
  const prev = () => go((idx - 1 + total) % total, -1)
  const next = () => go((idx + 1) % total, 1)

  // Autoplay — reinicia el timer cada vez que cambia idx
  useEffect(() => {
    timerRef.current = setTimeout(() => next(), DELAY)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
    exit:   (d: number) => ({ x: d > 0 ? -48 : 48, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }),
  }

  return (
    <div className="w-full">

      {/* ── Header ── */}
      <div className="flex items-end justify-between mb-8 px-1">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#B2FA03] mb-2 flex items-center gap-2">
            <span className="w-4 h-px bg-[#B2FA03]" />
            Testimonios
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
            Lo que dicen quienes<br />
            <span className="text-black/20">trabajaron con nosotros</span>
          </h2>
        </div>

        {/* Counter */}
        <div className="hidden sm:flex flex-col items-end gap-2 shrink-0 ml-6">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-black leading-none tabular-nums">
              {pad(idx + 1)}
            </span>
            <span className="text-sm text-black/25 font-semibold">/ {pad(total)}</span>
          </div>
          {/* Progress track */}
          <div className="w-28 h-[3px] bg-black/10 rounded-full overflow-hidden">
            <div
              key={`pb-${idx}`}
              className="h-full rounded-full bg-[#B2FA03]"
              style={{ animation: `pbFill ${DELAY}ms linear forwards` }}
            />
          </div>
        </div>
      </div>

      {/* ── Main card ── */}
      <div className="relative bg-[#0d0d0d] rounded-3xl overflow-hidden">

        {/* Top accent line — cambia de color con la marca */}
        <motion.div
          key={`accent-${idx}`}
          className="h-[3px] w-full"
          style={{ backgroundColor: t.color }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid md:grid-cols-[1fr_260px]"
          >
            {/* ── Quote side ── */}
            <div className="p-8 md:p-12 flex flex-col gap-6">

              <Stars color={t.color} />

              <blockquote className="text-white/85 text-lg md:text-2xl font-medium leading-relaxed">
                <span className="text-4xl font-black leading-none mr-1" style={{ color: t.color }}>"</span>
                {t.quote}
                <span className="text-4xl font-black leading-none ml-1" style={{ color: t.color }}>"</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0"
                  style={{ backgroundColor: t.color, color: isLight(t.color) ? '#000' : '#fff' }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-tight">{t.author}</p>
                  <p className="text-white/35 text-xs mt-0.5">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>

            {/* ── Company side (desktop) ── */}
            <div className="hidden md:flex flex-col items-center justify-between border-l border-white/[0.04] bg-white/[0.02] p-8">
              <div className="flex-1 flex items-center justify-center">
                <CompanyLogo logo={t.logo} initial={t.initial} color={t.color} name={t.company} size="xl" />
              </div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] text-center mt-4">
                {t.company}
              </p>

              {/* Nav arrows */}
              <div className="flex gap-2 mt-6">
                {[{ fn: prev, d: 'M15 19l-7-7 7-7' }, { fn: next, d: 'M9 5l7 7-7 7' }].map(({ fn, d }, i) => (
                  <button
                    key={i}
                    onClick={fn}
                    className="w-10 h-10 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Progress bar (bottom) ── */}
        <div className="h-[2px] bg-white/[0.04]">
          <div
            key={`progress-${idx}`}
            className="h-full"
            style={{
              backgroundColor: t.color,
              animation: `pbFill ${DELAY}ms linear forwards`,
            }}
          />
        </div>
      </div>

      {/* ── Mobile nav + dots ── */}
      <div className="flex items-center justify-between mt-4 px-1 md:hidden">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-black text-black tabular-nums">{pad(idx + 1)}</span>
          <span className="text-xs text-black/25 font-semibold">/ {pad(total)}</span>
        </div>
        <div className="flex gap-2">
          {[{ fn: prev, d: 'M15 19l-7-7 7-7' }, { fn: next, d: 'M9 5l7 7-7 7' }].map(({ fn, d }, i) => (
            <button
              key={i}
              onClick={fn}
              className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center hover:bg-[#B2FA03] transition-colors duration-200 group"
            >
              <svg className="w-4 h-4 text-black/50 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={d} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="mt-6 grid grid-cols-4 gap-3">
        {[
          { value: '100+', label: 'Proyectos'   },
          { value: '2+',   label: 'Años'         },
          { value: '7+',   label: 'Marcas'       },
          { value: '100%', label: 'Satisfacción' },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="bg-[#0d0d0d] rounded-2xl py-4 text-center"
          >
            <p className="text-xl md:text-2xl font-black text-[#B2FA03] leading-none">{value}</p>
            <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Brand ticker ── */}
      <div className="mt-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/30 mb-4 px-1">
          Marcas con las que trabajamos
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#F7F7F7] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#F7F7F7] to-transparent z-10" />

          {/* Duplicated list for infinite loop */}
          <div className="flex gap-3" style={{ animation: 'ticker 18s linear infinite', width: 'max-content' }}>
            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 shrink-0 bg-white border border-black/[0.06] rounded-2xl px-4 py-2.5"
              >
                <CompanyLogo logo={b.logo} initial={b.initial} color={b.color} name={b.name} size="sm" />
                <span className="text-xs font-semibold text-black/50 whitespace-nowrap">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes pbFill {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes ticker {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
      `}</style>

    </div>
  )
}
