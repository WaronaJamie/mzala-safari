"use client";

import { useRef, useState, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Hide the "tap to play" hint once the user interacts anywhere
  useEffect(() => {
    const hideHint = () => setShowHint(false);
    window.addEventListener("click", hideHint, { once: true });
    window.addEventListener("touchstart", hideHint, { once: true });
    return () => {
      window.removeEventListener("click", hideHint);
      window.removeEventListener("touchstart", hideHint);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error("Audio playback failed:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/images/music/Mzala3_trim_music.mp3"
        loop
        preload="auto"
      />

      <div className="fixed bottom-5 left-5 md:bottom-8 md:left-8 z-40 flex items-center gap-3">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="group relative flex items-center gap-0 sm:gap-3 rounded-full bg-[#1A1511]/85 backdrop-blur-md border border-white/10 hover:border-[#D97B29] p-2 sm:pl-2 sm:pr-5 transition-all duration-300 shadow-lg shadow-black/40"
        >
          {/* Icon circle */}
          <div className="relative w-11 h-11 rounded-full bg-[#D97B29] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EAA023] transition-colors">
            {/* Pulsing rings when playing */}
            {isPlaying && (
              <>
                <motion.span
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-full bg-[#D97B29]"
                />
                <motion.span
                  animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.4,
                  }}
                  className="absolute inset-0 rounded-full bg-[#D97B29]"
                />
              </>
            )}

            {/* Attention pulse when not yet playing */}
            {!isPlaying && showHint && (
              <motion.span
                animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full bg-[#D97B29]"
              />
            )}

            {/* Icon */}
            <div className="relative z-10">
              {isPlaying ? (
                <Music size={18} className="text-white" />
              ) : (
                <VolumeX size={18} className="text-white" />
              )}
            </div>
          </div>

          {/* Label — visible on larger screens only */}
          <span className="hidden sm:inline text-[10px] tracking-[0.2em] uppercase text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
            {isPlaying ? "Pause Music" : "Play Music"}
          </span>
        </button>
      </div>
    </>
  );
}