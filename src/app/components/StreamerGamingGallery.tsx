'use client'

import { useState, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// ─── Types ────────────────────────────────────────────────────────────────────
type ImageMedia     = { type: 'image';     src: string; alt?: string }
type InstagramMedia = { type: 'instagram'; url: string; thumbnail?: string }
type VideoMedia     = { type: 'video';     src: string; poster?: string }
type TikTokMedia    = { type: 'tiktok';    url: string; thumbnail?: string }
type MediaItem      = ImageMedia | InstagramMedia | VideoMedia | TikTokMedia

type EventItem = {
  id: string
  title: string
  media: MediaItem[]
  accent?: string
  darkText?: boolean
  coming?: boolean
}

type GameGroup = {
  id: string
  name: string
  logo: string
  accent: string
  events: EventItem[]
}

type CategoryData = {
  id: string
  label: string
  accent: string
  darkText: boolean
  events: EventItem[]
  games?: GameGroup[]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const categories: CategoryData[] = [
  {
    id: 'streamers',
    label: 'STREAMERS',
    accent: '#B2FA03',
    darkText: true,
    events: [
       {
        id: 'noche-dorada',
        title: 'La Noche Dorada',
        media: [
          { type: 'tiktok', url: 'https://www.tiktok.com/@lml_agency/video/7563435975871892744?lang=es-419', thumbnail: '/nochedorada/LaNocheDorada-46.jpg' },
          { type: 'image', src: '/nochedorada/LaNocheDorada-12.jpg' },
          { type: 'image', src: '/nochedorada/LaNocheDorada-22.jpg' },
          { type: 'image', src: '/nochedorada/LaNocheDorada-27.jpg' },
          { type: 'image', src: '/nochedorada/LaNocheDorada-46.jpg' },
          { type: 'image', src: '/nochedorada/LaNocheDorada-103.jpg' },
          { type: 'image', src: '/nochedorada/LaNocheDorada-105.jpg' },
          { type: 'image', src: '/nochedorada/LaNocheDorada-109.jpg' },
          { type: 'image', src: '/nochedorada/LaNocheDorada-137.jpg' },
        ],
      },
  
      {
        id: 'pichanga-dad',
        title: 'Pichanga de Dad',
        media: [
          { type: 'instagram', url: 'https://www.instagram.com/p/DN1Pe514t27/', thumbnail: '/partido/pa2.png' },
          { type: 'image', src: '/partido/pa1.png' },
          { type: 'image', src: '/partido/pa2.png' },
          { type: 'image', src: '/partido/pa3.png' },

        ],
      },
      {
        id: 'fabio-agostini',
        title: 'Cuéntamelo todo Fabio Agostini',
        media: [
          { type: 'image', src: '/stream/fabio01.webp' },
          { type: 'image', src: '/stream/fabio02.webp' },
          { type: 'image', src: '/stream/fabio03.webp' },
          { type: 'image', src: '/stream/fabio04.webp' },
          { type: 'instagram', url: 'https://www.instagram.com/p/DIRg6RpzAZw/', thumbnail: '/stream/fabio01.webp' },
        ],
      },
          {
        id: 'cocinando-serpa',
        title: 'Cocinando con la Serpa',
        media: [
          { type: 'image', src: '/stream/03.webp' },
          { type: 'image', src: '/stream/c01.webp' },
          { type: 'image', src: '/stream/c02.webp' },
          { type: 'image', src: '/stream/c03.webp' },
          { type: 'image', src: '/stream/ClaudiaSerpa09.05-15.jpg' },
          { type: 'image', src: '/stream/ClaudiaSerpa09.05-23.jpg' },
          { type: 'image', src: '/stream/ClaudiaSerpa09.05-70.jpg' },
          { type: 'image', src: '/stream/ClaudiaSerpa09.05-202.jpg' },
        ],
      },
      { id: 'coming-stream-1', title: 'Próximamente', media: [], coming: true },
      { id: 'coming-stream-2', title: 'Próximamente', media: [], coming: true },
    ],
  },
  {
    id: 'gaming',
    label: 'GAMING',
    accent: '#A855F7',
    darkText: false,
    events: [],
    games: [
      {
        id: 'dota2',
        name: 'Dota 2',
        logo: '/gaming/dota2.png',
        accent: '#ef4444',
        events: [
          {
            id: 'previa-zein-1',
            title: 'Previa del Zeinternacional 1',
            accent: '#ef4444',
            darkText: false,
            media: [
              { type: 'image', src: '/zeinternational/zein1.webp' },
              { type: 'image', src: '/zeinternational/zein2.webp' },
              { type: 'image', src: '/zeinternational/zein3.webp' },
              { type: 'image', src: '/zeinternational/zein4.webp' },
              { type: 'image', src: '/zeinternational/zein5.webp' },
              { type: 'instagram', url: 'https://www.instagram.com/p/DKfvnrfzV3j/', thumbnail: '/zeinternational/zein1.webp' },
            ],
          },
          {
            id: 'zein-2-online',
            title: 'Zeinternacional II Online',
            accent: '#ef4444',
            darkText: false,
            media: [
              { type: 'instagram', url: 'https://www.instagram.com/p/DPWl9oeDl2q/', thumbnail: '/zeinternational/zein6.webp' },
            ],
          },
          {
            id: 'zein-2-presencial',
            title: 'Zeinternacional II Presencial',
            accent: '#ef4444',
            darkText: false,
            media: [
              { type: 'instagram', url: 'https://www.instagram.com/p/DPWl9oeDl2q/', thumbnail: '/gaming/zeinpresencial/Zeinternational-198.webp' },
              { type: 'image', src: '/gaming/zeinpresencial/Zeinternational-75.webp' },
              { type: 'image', src: '/gaming/zeinpresencial/Zeinternational-78.webp' },
              { type: 'image', src: '/gaming/zeinpresencial/Zeinternational-116.webp' },
              { type: 'image', src: '/gaming/zeinpresencial/Zeinternational-171.webp' },
              { type: 'image', src: '/gaming/zeinpresencial/Zeinternational-198.webp' },
              { type: 'image', src: '/gaming/zeinpresencial/Zeinternational-200.webp' },
              { type: 'image', src: '/gaming/zeinpresencial/Zeinternational-21.webp' },
            ],
          },
        ],
      },
      {
        id: 'csgo',
        name: 'CS:GO',
        logo: '/gaming/csgo.png',
        accent: '#F0A500',
        events: [
          {
            id: 'parado-sin-polo',
            title: 'Parado sin Polo',
            media: [
              {type:'instagram', url: 'https://www.instagram.com/reel/DBq7mNOt8P6/?igsh=N2F4NGhrbGZsemM4', thumbnail: '/gaming/paraosin/ParadoSinPolo-70.webp' },
              { type: 'image', src: '/gaming/paraosin/ParadoSinPolo-83.webp' },
              { type: 'image', src: '/gaming/paraosin/ParadoSinPolo-41.webp' },
              { type: 'image', src: '/gaming/paraosin/ParadoSinPolo-44.webp' },
              { type: 'image', src: '/gaming/paraosin/ParadoSinPolo-45.webp' },
              { type: 'image', src: '/gaming/paraosin/ParadoSinPolo-37.webp' },
              { type: 'image', src: '/gaming/paraosin/ParadoSinPolo-170.webp' },
              { type: 'image', src: '/gaming/paraosin/ParadoSinPolo-191.webp' },
            ],
          },
          {
            id: 'odyssey-cup-online',
            title: 'Oddysey Cup Online',
            media: [
              { type: 'instagram', url: 'https://www.instagram.com/p/DJ2KuZEyHHx/', thumbnail: '/odysse/ody4.webp' },
              { type: 'image', src: '/odysse/ody2.webp' },
              { type: 'image', src: '/odysse/ody1.webp' },
              { type: 'image', src: '/odysse/ody3.webp' },
              { type: 'image', src: '/odysse/ody4.webp' },
              { type: 'image', src: '/odysse/ody5.webp' },
              { type: 'image', src: '/odysse/ody6.webp' },
              { type: 'image', src: '/odysse/ody7.webp' }
            ],
          },
          {
            id: 'odyssey-cup-final',
            title: 'Oddysey Cup Final Nacional',
            media: [
              { type: 'instagram', url: 'https://www.instagram.com/p/DLTBr84TM__/', thumbnail: '/gaming/odifinal/OdysseyCupFinal-2.webp' },
              { type: 'image', src: '/gaming/odifinal/OdysseyCupFinal-2.webp' },
              { type: 'image', src: '/gaming/odifinal/OdysseyCupFinal-4.webp' },
              { type: 'image', src: '/gaming/odifinal/OdysseyCupFinal-25.webp' },
              { type: 'image', src: '/gaming/odifinal/OdysseyCupFinal-95.webp' },
              { type: 'image', src: '/gaming/odifinal/OdysseyCupFinal-98.webp' },
              { type: 'image', src: '/gaming/odifinal/OdysseyCupFinal-104.webp' },
              { type: 'image', src: '/gaming/odifinal/OdysseyCupFinal-143.webp' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eventos',
    label: 'EVENTOS ESPECIALES',
    accent: '#F0A500',
    darkText: false,
    events: [
      {
        id: 'evento-especial-1',
        title: 'Lima Media Marathon',
        media: [
          { type: 'instagram', url: 'https://www.instagram.com/p/DQUol5uAQpd/', thumbnail:'/gloria/LimaMediaMarathon-129.jpg' },
          {type:'image', src: '/gloria/LimaMediaMarathon-71.jpg' },
          {type:'image', src: '/gloria/LimaMediaMarathon-76.jpg' },
          {type:'image', src: '/gloria/LimaMediaMarathon-79.jpg' },
          {type:'image', src: '/gloria/LimaMediaMarathon-87.jpg' },
          {type:'image', src: '/gloria/LimaMediaMarathon-90.jpg' },
          {type:'image', src: '/gloria/LimaMediaMarathon-122.jpg' },
          {type:'image', src: '/gloria/LimaMediaMarathon-143.jpg' },
        ],
      },
      { id: 'coming-stream-1', title: 'Próximamente', media: [], coming: true },
      { id: 'coming-stream-2', title: 'Próximamente', media: [], coming: true },
      { id: 'coming-stream-3', title: 'Próximamente', media: [], coming: true },
      { id: 'coming-stream-4', title: 'Próximamente', media: [], coming: true },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getThumb(media: MediaItem[]): string | null {
  for (const item of media) {
    if (item.type === 'image') return item.src
    if (item.type === 'instagram' && item.thumbnail) return item.thumbnail
    if (item.type === 'tiktok' && item.thumbnail) return item.thumbnail
    if (item.type === 'video' && item.poster) return item.poster
  }
  return null
}

// ─── Media Display (dentro del modal) ────────────────────────────────────────
function MediaDisplay({ media, accent }: { media: MediaItem[]; accent: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [current, setCurrent]   = useState(0)
  const swiperRef               = useRef<SwiperType | null>(null)

  const sorted = [...media].sort((a) => (a.type !== 'image' ? -1 : 1))

  if (media.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-16 h-16 rounded-full border-2 border-[#33363F] flex items-center justify-center">
          <svg className="w-7 h-7 text-[#444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M15 10l4.553-2.069A1 1 0 0121 8.867V15.133a1 1 0 01-1.447.902L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
        </div>
        <p className="text-[#555] text-sm font-semibold uppercase tracking-widest">Próximamente</p>
      </div>
    )
  }

  const activeIsVideo = sorted[current]?.type !== 'image'

  return (
    <>
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={sorted.length > 1}
          autoplay={activeIsVideo ? false : { delay: 2500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          speed={900}
          onSwiper={(s) => { swiperRef.current = s }}
          onSlideChange={(s) => setCurrent(s.realIndex)}
          className="w-full h-full"
        >
          {sorted.map((item, i) => (
            <SwiperSlide key={i}>

              {item.type === 'image' && (
                <div className="relative w-full h-full cursor-zoom-in" onClick={() => setLightbox(item.src)}>
                  <img src={item.src} aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40 pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center z-10">
                    <img src={item.src} alt={item.alt || `foto ${i + 1}`} className="max-w-full max-h-full object-contain drop-shadow-2xl" />
                  </div>
                </div>
              )}

              {item.type === 'instagram' && (
                <a href={item.url} target="_blank" rel="noreferrer" className="relative w-full h-full block overflow-hidden group">
                  {item.thumbnail ? (
                    <>
                      <img src={item.thumbnail} aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40 pointer-events-none" />
                      <div className="relative w-full h-full flex items-center justify-center z-10">
                        <img src={item.thumbnail} alt="video" className="max-w-full max-h-full object-contain" />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
                  )}
                  {/* Overlay degradado inferior */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* CTA central */}
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-2xl">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>

                  {/* Botón inferior llamativo */}
                  <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, rgba(131,58,180,0.85) 0%, rgba(253,29,29,0.85) 50%, rgba(252,176,69,0.85) 100%)' }}
                    >
                      <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <div>
                        <p className="text-white font-extrabold text-base leading-tight tracking-wide">Mira nuestro trabajo</p>
                        <p className="text-white/70 text-[11px] font-medium">Ver en Instagram →</p>
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {item.type === 'tiktok' && (
                <a href={item.url} target="_blank" rel="noreferrer" className="relative w-full h-full block overflow-hidden group">
                  {item.thumbnail ? (
                    <>
                      <img src={item.thumbnail} aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40 pointer-events-none" />
                      <div className="relative w-full h-full flex items-center justify-center z-10">
                        <img src={item.thumbnail} alt="video" className="max-w-full max-h-full object-contain" />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#010101] via-[#69C9D0] to-[#EE1D52]" />
                  )}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-2xl">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, rgba(1,1,1,0.85) 0%, rgba(105,201,208,0.85) 50%, rgba(238,29,82,0.85) 100%)' }}
                    >
                      <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.74a4.85 4.85 0 01-1-.05z"/>
                      </svg>
                      <div>
                        <p className="text-white font-extrabold text-base leading-tight tracking-wide">Mira nuestro trabajo</p>
                        <p className="text-white/70 text-[11px] font-medium">Ver en TikTok →</p>
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {item.type === 'video' && (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <video src={item.src} poster={item.poster} controls playsInline className="max-w-full max-h-full" />
                </div>
              )}

            </SwiperSlide>
          ))}
        </Swiper>

        {!activeIsVideo && (
          <>
            <div className="hidden sm:block pointer-events-none absolute top-0 left-0 h-full w-1/6 bg-gradient-to-r from-[#0c0c0c] to-transparent z-20" />
            <div className="hidden sm:block pointer-events-none absolute top-0 right-0 h-full w-1/6 bg-gradient-to-l from-[#0c0c0c] to-transparent z-20" />
          </>
        )}

        {sorted.length > 1 && (
          <div className="absolute bottom-3 right-4 z-30 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm font-mono">
            {current + 1} / {sorted.length}
          </div>
        )}
      </div>

      {/* Tira de thumbnails */}
      {sorted.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide pb-1 justify-center">
          {sorted.map((item, i) => {
            const src = item.type === 'image' ? item.src : item.type === 'instagram' ? item.thumbnail : item.type === 'tiktok' ? item.thumbnail : item.poster
            const isActive = i === current
            return (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className="shrink-0 w-16 h-10 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none"
                style={{
                  outline: isActive ? `2px solid ${accent}` : '2px solid transparent',
                  opacity: isActive ? 1 : 0.45,
                }}
              >
                {src ? (
                  <img src={src} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#222] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#555]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      )}

      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src={lightbox} alt="preview" className="max-w-full max-h-[90vh] rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ event, accent, gameLogo, gameLogoSize, onClick }: { event: EventItem; accent: string; gameLogo?: string; gameLogoSize?: string; onClick: () => void }) {
  if (event.coming) {
    return (
      <div
        className="shrink-0 w-52 md:w-64 lg:w-72 rounded-2xl border border-dashed border-[#33363F] flex flex-col items-center justify-center gap-3"
        style={{ aspectRatio: '2/3' }}
      >
        <div className="w-12 h-12 rounded-full border border-[#2a2a2a] flex items-center justify-center">
          <svg className="w-5 h-5 text-[#444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <p className="text-[#444] text-[10px] uppercase tracking-[0.25em] font-semibold">Próximamente</p>
      </div>
    )
  }

  const thumb = getThumb(event.media)
  const count = event.media.length
  const igBadge = event.media.some((m) => m.type === 'instagram')

  return (
    <button
      onClick={onClick}
      className="group relative shrink-0 w-52 md:w-64 lg:w-72 rounded-2xl overflow-hidden focus:outline-none text-left"
      style={{ aspectRatio: '2/3' }}
    >
      {thumb ? (
        <img src={thumb} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="w-full h-full bg-[#1a1a1a]" />
      )}

      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Overlay play al hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/25">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-white/80 backdrop-blur-sm shadow-2xl"
          style={{ backgroundColor: `${accent}55` }}
        >
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Badges superiores */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between z-10">
        {igBadge ? (
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-white text-[9px] font-semibold">IG</span>
          </span>
        ) : <span />}
        {count > 1 && (
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
            <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-white text-xs font-semibold">{count}</span>
          </span>
        )}
      </div>

      {/* Título y logo abajo */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10 flex items-end justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="w-5 h-0.5 rounded-full mb-2" style={{ backgroundColor: accent }} />
          <p className="text-white text-sm md:text-base font-bold leading-snug line-clamp-2">{event.title}</p>
        </div>
        {gameLogo && (
          <img
            src={gameLogo}
            alt="game"
            className={`${gameLogoSize ?? 'w-10 h-10'} object-contain drop-shadow-lg opacity-90 shrink-0`}
          />
        )}
      </div>
    </button>
  )
}

// ─── Project Modal ────────────────────────────────────────────────────────────
function ProjectModal({ event, accent, onClose }: { event: EventItem; accent: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:flex md:items-center md:justify-center md:p-8" onClick={onClose}>

      {/* Caja del modal: fullscreen en mobile, ventana centrada en desktop */}
      <div
        className="fixed inset-0 md:relative md:inset-auto w-full md:max-w-5xl bg-[#111] md:rounded-2xl overflow-hidden flex flex-col md:max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 md:px-5 md:py-4 border-b border-[#1e1e1e] shrink-0">
          <div className="min-w-0">
            <p className="text-[10px] text-[#444] uppercase tracking-[0.3em] mb-0.5">Proyecto</p>
            <h3 className="text-white text-sm md:text-lg font-extrabold truncate">{event.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 ml-4"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Media — ocupa todo el espacio restante en mobile */}
        <div className="flex-1 overflow-y-auto p-3 md:p-5 flex flex-col justify-center">
          <MediaDisplay media={event.media} accent={accent} />
        </div>
      </div>
    </div>
  )
}

// ─── Featured Hero ────────────────────────────────────────────────────────────
const featuredSlides = [
  { src: '/gaming/paraosin/ParadoSinPolo-83.webp',              label: 'CS:GO · Parado sin Polo' },
  { src: '/gaming/zeinpresencial/Zeinternational-75.webp',      label: 'Dota 2 · Zeinternacional II' },
  { src: '/gaming/odifinal/OdysseyCupFinal-2.webp',             label: 'CS:GO · Odyssey Cup Final' },
  { src: '/stream/fabio01.webp',                                 label: 'Streamers · Fabio Agostini' },
  { src: '/stream/03.webp',                                      label: 'Streamers · Cocinando con la Serpa' },
  { src: '/gaming/zeinpresencial/Zeinternational-171.webp',     label: 'Dota 2 · Zeinternacional II' },
]

function FeaturedHero() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <>
      <style>{`
        @keyframes kb { 0% { transform: scale(1.04) translate(0%,0%); } 100% { transform: scale(1.14) translate(-2%,-1%); } }
        .kb-active { animation: kb 7s ease-out forwards; }
      `}</style>

      <div
        className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl mb-10"
        style={{ height: 'clamp(280px, 58vh, 540px)' }}
      >
        {/* Slides */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          speed={1400}
          onSlideChange={(s) => setActiveIdx(s.realIndex)}
          className="w-full h-full"
        >
          {featuredSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full overflow-hidden">
                <img
                  src={slide.src}
                  alt=""
                  className={`w-full h-full object-cover ${activeIdx === i ? 'kb-active' : ''}`}
                  style={{ transform: 'scale(1.04)' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradientes cinematográficos */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 z-10 pointer-events-none" />

        {/* Contenido texto */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4 md:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B2FA03] animate-pulse shrink-0" />
            <span className="text-[#B2FA03] text-[10px] md:text-xs font-bold uppercase tracking-[0.35em]">
              Producción en vivo
            </span>
          </div>

          {/* Título principal */}
          <h2
            className="font-black uppercase leading-none mb-3 md:mb-4"
            style={{ fontSize: 'clamp(38px, 7.5vw, 76px)' }}
          >
            PREVIA<br />
            <span style={{ color: '#B2FA03' }}>OFICIAL</span>
          </h2>

          {/* Línea acento */}
          <div className="w-10 h-[3px] bg-[#B2FA03] rounded-full mb-3 md:mb-4" />

          {/* Descripción */}
          <p className="text-white/50 text-sm md:text-base font-medium tracking-wide mb-5 md:mb-7">
            Streamers&nbsp;·&nbsp;Gaming&nbsp;·&nbsp;Eventos
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 md:gap-6">
            {[
              { valor: '100+', label: 'Proyectos' },
              { valor: '2',   label: 'Años' },
              { valor: 'Lima', label: 'Perú' },
            ].map(({ valor, label }, i, arr) => (
              <div key={label} className="flex items-center gap-4 md:gap-6">
                <div>
                  <p className="text-white font-black leading-none" style={{ fontSize: 'clamp(18px, 4vw, 26px)' }}>{valor}</p>
                  <p className="text-white/35 text-[10px] uppercase tracking-widest mt-0.5">{label}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-7 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>

        {/* Esquina inferior derecha: label + dots */}
        <div className="absolute bottom-4 right-4 z-20 text-right">
          <p className="text-white/35 text-[10px] uppercase tracking-widest hidden md:block">
            {featuredSlides[activeIdx]?.label}
          </p>
          <div className="flex gap-1.5 justify-end mt-2">
            {featuredSlides.map((_, i) => (
              <span
                key={i}
                className="block h-[2px] rounded-full transition-all duration-500"
                style={{
                  width:           activeIdx === i ? '20px' : '5px',
                  backgroundColor: activeIdx === i ? '#B2FA03' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function StreamerGamingGallery() {
  const [activeCatId, setActiveCatId] = useState('streamers')
  const [modal,       setModal]       = useState<{ event: EventItem; accent: string } | null>(null)
  const cardsSwiperRef = useRef<SwiperType | null>(null)

  const activeCategory = categories.find((c) => c.id === activeCatId)!

  type FlatEvent = { event: EventItem; accent: string; gameLogo?: string; gameLogoSize?: string }
  const visibleCards: FlatEvent[] = activeCategory.games
    ? activeCategory.games.flatMap((g) =>
        g.events.map((ev) => ({ event: ev, accent: g.accent, gameLogo: g.logo, gameLogoSize: g.id === 'csgo' ? 'w-14 h-14' : 'w-10 h-10' }))
      )
    : activeCategory.events.map((ev) => ({ event: ev, accent: activeCategory.accent }))

  return (
    <section className="text-white mt-8">

      {/* Hero destacado */}
      <FeaturedHero />

      {/* Título sección */}
      <div className="flex items-center gap-3 mb-6 px-1">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2a2a2a]" />
        <h2 className="text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-white/70">
          Streamers <span style={{ color: '#B2FA03' }}>&amp;</span> Gaming
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2a2a2a]" />
      </div>

      {/* ── Category Tabs ── */}
      <div className="flex gap-0 border-b border-[#33363F] mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCatId(cat.id); cardsSwiperRef.current?.slideTo(0) }}
            className="relative px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300"
            style={{ color: activeCatId === cat.id ? cat.accent : '#555' }}
          >
            {cat.label}
            <span
              className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-300"
              style={{ backgroundColor: activeCatId === cat.id ? cat.accent : 'transparent' }}
            />
          </button>
        ))}
      </div>

      {/* ── Cards Carrusel ── */}
      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(s) => { cardsSwiperRef.current = s }}
          slidesPerView="auto"
          spaceBetween={16}
          loop={false}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          speed={700}
          className="w-full"
        >
          {visibleCards.map(({ event, accent: cardAccent, gameLogo, gameLogoSize }) => (
            <SwiperSlide key={event.id} style={{ width: 'auto' }}>
              <ProjectCard
                event={event}
                accent={cardAccent}
                gameLogo={gameLogo}
                gameLogoSize={gameLogoSize}
                onClick={() => setModal({ event, accent: cardAccent })}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {modal && (
        <ProjectModal
          event={modal.event}
          accent={modal.accent}
          onClose={() => setModal(null)}
        />
      )}

    </section>
  )
}
