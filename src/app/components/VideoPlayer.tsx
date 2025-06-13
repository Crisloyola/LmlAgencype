'use client';

export default function VideoPlayer() {

  return (
    <div className=" max-w-7xl mx-auto mt-10">
      {/* Título */}
      <h1 className="text-3xl md:text-[55px] font-bold text-center mb-6 text-white">
        Previa Oficial – Zeinternational
      </h1>

      {/* Contenedor del video */}
      <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        <video
          className="w-full h-full object-cover"
          src="https://www.dropbox.com/scl/fi/yoplez4lfyff72nt6pzbv/zeinVideo.mp4?rlkey=5b9md0qrw33n9caco40t9tlm1&st=rlcyb02z&dl=1"
          controls
          poster="/zeinternational/zein9.webp"
          preload="metadata"
        />
      </div>
    </div>
  );
}
