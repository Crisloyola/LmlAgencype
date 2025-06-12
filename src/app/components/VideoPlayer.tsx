'use client';

import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="w-[90%] md:w-[95%] max-w-8xl mx-auto mt-10">
      {/* Título */}
      <h1 className="text-4xl md:text-[55px] font-bold text-center mb-6">
        Previa Oficial – Zeinternational
      </h1>

      {/* Contenedor del video */}
      <div className="relative rounded-xl overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-auto object-cover"
          src="/zeinternational/zeinVideo.mp4"
          poster="/zeinternational/zein5.jpg"
        />
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <button
            onClick={togglePlay}
            className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition"
          >
            {isPaused ? <Play size={24} /> : <Pause size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}
