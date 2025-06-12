'use client';

export default function VideoPlayer() {
  const driveEmbedUrl = "https://www.dropbox.com/scl/fi/yoplez4lfyff72nt6pzbv/zeinVideo.mp4?rlkey=5b9md0qrw33n9caco40t9tlm1&st=rlcyb02z&dl=0&raw=1";

  return (
    <div className="w-[90%] md:w-[95%] max-w-8xl mx-auto mt-10">
      {/* Título */}
      <h1 className="text-4xl md:text-[55px] font-bold text-center mb-6">
        Previa Oficial – Zeinternational
      </h1>

      {/* Contenedor del video (Google Drive embed) */}
      <div className="relative rounded-xl overflow-hidden aspect-video">
        <iframe
          src={driveEmbedUrl}
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </div>
  );
}
