'use client';

import { useRef, useState } from 'react';
import { Volume2, VolumeX, Pause, Play, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function FloatingAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/zeinternational/beatzein.wav"
        preload="auto"
      />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
        {/* Botón alquiler */}
        <Link
          href="/alquiler"
          title="Alquiler de equipos"
          className="w-10 h-10 flex items-center justify-center rounded-xl
                     bg-[#B2FA03] text-black shadow-[0_0_16px_rgba(178,250,3,0.5)]
                     hover:bg-lime-300 hover:scale-110 transition-all duration-200"
        >
          <ShoppingBag size={18} />
        </Link>

        {/* Reproductor */}
        <div className="bg-black/70 text-white p-3 rounded-xl shadow-lg flex items-center space-x-3 backdrop-blur">
          <button onClick={togglePlay} title={isPlaying ? 'Pausar música' : 'Reproducir música'} className="hover:text-green-400 transition">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button onClick={toggleMute} title={isMuted ? 'Activar sonido' : 'Silenciar'} className="hover:text-red-400 transition">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </>
  );
}
