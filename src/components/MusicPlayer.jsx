import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const playlist = [
  { name: "iwasneverthere.mp3", file: "iwasneverthere.mp3" },
  { name: "escapism.mp3", file: "escapism.mp3" },
  { name: "blue.mp3", file: "blue.mp3" },
  { name: "YAD.mp3", file: "YAD.mp3" },
  { name: "stars.mp3", file: "stars.mp3" },
];

const getTrackUrl = (index) => {
  const safeIndex = index >= 0 && index < playlist.length ? index : 0;
  const base = import.meta.env.BASE_URL || "/";
  return new URL(`audio/${playlist[safeIndex].file}`, `${window.location.origin}${base}`).href;
};

const getTrackSources = (index) => {
  const safeIndex = index >= 0 && index < playlist.length ? index : 0;
  const file = playlist[safeIndex].file;
  const base = import.meta.env.BASE_URL || "/";

  return Array.from(
    new Set([
      new URL(`audio/${file}`, `${window.location.origin}${base}`).href,
      new URL(`audio/${file}`, `${window.location.origin}/`).href,
      `${base}audio/${file}`,
      `/audio/${file}`,
    ])
  );
};

const MusicPlayer = () => {
  const STORAGE_KEY_INDEX = "portfolio_music_index";
  const DOUBLE_TAP_WINDOW = 280;
  const [currentTrackIndex, setCurrentTrackIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const saved = window.localStorage.getItem(STORAGE_KEY_INDEX);
    const index = saved !== null ? Number.parseInt(saved, 10) : 0;
    return Number.isFinite(index) && index >= 0 && index < playlist.length ? index : 0;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState("");
  const audioRef = useRef(null);
  const lastTapRef = useRef(0);

  const createAudio = () => {
    if (typeof window === "undefined" || audioRef.current) return audioRef.current;

    const audio = new Audio(getTrackUrl(currentTrackIndex));
    audio.preload = "auto";
    audio.loop = false;
    audio.onended = async () => {
      await skipTrack();
    };
    audio.onerror = (event) => {
      console.error("Audio error:", event);
    };
    audioRef.current = audio;
    return audio;
  };

  useEffect(() => {
    createAudio();
    return () => {};
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY_INDEX, currentTrackIndex.toString());
  }, [currentTrackIndex]);

  const playWithFallback = async (audio, index) => {
    const sources = getTrackSources(index);
    let lastError = null;

    for (const src of sources) {
      try {
        if (audio.src !== src) {
          audio.src = src;
          audio.load();
        }
        await audio.play();
        setAudioError("");
        return true;
      } catch (err) {
        lastError = err;
      }
    }

    console.error("All audio sources failed:", lastError);
    setAudioError("Audio could not start. Tap again or check browser sound/autoplay settings.");
    return false;
  };

  useEffect(() => {
    const audio = createAudio();
    if (!audio) return;

    if (isPlaying) {
      void playWithFallback(audio, currentTrackIndex);
      return;
    }

    const firstSource = getTrackSources(currentTrackIndex)[0];
    if (audio.src !== firstSource) {
      audio.src = firstSource;
      audio.load();
    }
  }, [currentTrackIndex, isPlaying]);

  const playAudio = async () => {
    const audio = createAudio();
    if (!audio) return;

    const started = await playWithFallback(audio, currentTrackIndex);
    setIsPlaying(started);
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setAudioError("");
  };

  const togglePlay = async () => {
    if (isPlaying) {
      pauseAudio();
      return;
    }
    await playAudio();
  };

  const skipTrack = async () => {
    const audio = createAudio();
    if (!audio) return;

    let nextIndex = currentTrackIndex;
    if (playlist.length > 1) {
      while (nextIndex === currentTrackIndex) {
        nextIndex = Math.floor(Math.random() * playlist.length);
      }
    }

    setCurrentTrackIndex(nextIndex);
    audio.pause();

    const started = await playWithFallback(audio, nextIndex);
    setIsPlaying(started);
  };

  const handlePointerTap = async () => {
    const now = Date.now();
    const isDoubleTap = now - lastTapRef.current <= DOUBLE_TAP_WINDOW;

    if (isDoubleTap) {
      lastTapRef.current = 0;
      await skipTrack();
      return;
    }

    lastTapRef.current = now;
    await togglePlay();
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center gap-2">
      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
        {isPlaying ? "Now Playing" : "Music"}
      </span>
      <button
        onClick={() => {
          void handlePointerTap();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            void handlePointerTap();
          }
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={`Now: ${playlist[currentTrackIndex].name}`}
        className="w-14 h-14 rounded-full bg-slate-950/90 border border-white/10 flex items-center justify-center text-white hover:border-[var(--accent)] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.35)]"
        style={{ boxShadow: isPlaying ? "0 0 24px rgba(79,70,229,0.6)" : undefined }}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <p className="max-w-[140px] text-[10px] text-center text-white/50 font-mono leading-snug">
        Single tap: play/pause. Double tap: next track.
      </p>
      {audioError && (
        <p className="max-w-[180px] text-[10px] text-center text-rose-300/90 font-mono leading-snug">
          {audioError}
        </p>
      )}
    </div>
  );
};

export default MusicPlayer;

