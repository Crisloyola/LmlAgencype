'use client';



export default function VideoPlayer() {


  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl md:text-[55px] font-bold text-center mb-6 text-white">
        Previa Oficial – Zeinternational
      </h1>

      <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        <video
          className="w-full h-full object-cover"
          src="https://pub-e0711c9681594e0f8927abb9782f801f.r2.dev/zeinVideo.mp4"
          controls
          loop
          muted
          playsInline
          poster="/zeinternational/zein9.webp"
          preload="metadata"
        />

      </div>
    </div>
  );
}
