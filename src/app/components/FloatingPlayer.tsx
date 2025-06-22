'use client';

import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';

export default function FloatingAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasInteracted) return;

      const audio = audioRef.current;
      if (!audio) return;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
          window.removeEventListener('scroll', handleScroll); // ✅ Quita el listener tras la primera vez
        })
        .catch((err) => {
          console.warn('Error al reproducir audio:', err);
        });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasInteracted]);

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
      <div className="fixed bottom-6 right-6 bg-black/70 text-white p-3 rounded-xl shadow-lg flex items-center space-x-3 z-50 backdrop-blur">
        <button onClick={togglePlay} className="hover:text-green-400 transition">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button onClick={toggleMute} className="hover:text-red-400 transition">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </>
  );
}
