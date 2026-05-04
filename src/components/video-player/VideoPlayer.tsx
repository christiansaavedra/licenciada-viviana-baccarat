import { useRef, useState, useCallback, useEffect } from "react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  src: string;
  className?: string;
  transcript?: string;
}

const formatTime = (seconds: number): string => {
  if (isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const VideoPlayer = ({ src, className, transcript }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleHide = useCallback(() => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowControls(true);
    if (isPlaying) {
      hideTimeout.current = setTimeout(() => setShowControls(false), 2500);
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
    scheduleHide();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    scheduleHide();
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    setDuration(v.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    const bar = progressRef.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
    scheduleHide();
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    scheduleHide();
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`${styles.wrapper} ${className ?? ""}`}
      onMouseMove={scheduleHide}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className={styles.video}
        data-transcript={transcript}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => {
          setIsPlaying(true);
          scheduleHide();
        }}
        onPause={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
        onEnded={handleEnded}
        onClick={togglePlay}
        preload="metadata"
        playsInline
      />

      {/* Big play overlay when paused */}
      {!isPlaying && (
        <button
          className={styles.bigPlay}
          onClick={togglePlay}
          aria-label="Reproducir"
        >
          <PlayIcon />
        </button>
      )}

      {/* Bottom controls bar */}
      <div
        className={`${styles.controls} ${showControls ? styles.controlsVisible : ""}`}
      >
        {/* Progress bar */}
        <div
          ref={progressRef}
          className={styles.progressBar}
          onClick={handleProgressClick}
          role="slider"
          aria-label="Progreso del video"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
            <div
              className={styles.progressThumb}
              style={{ left: `${progress}%` }}
            />
          </div>
        </div>

        <div className={styles.controlsRow}>
          {/* Play / Pause */}
          <button
            className={styles.btn}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          {/* Mute */}
          <button
            className={styles.btn}
            onClick={toggleMute}
            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          >
            {isMuted ? <MuteIcon /> : <VolumeIcon />}
          </button>

          {/* Time */}
          <span className={styles.time}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className={styles.spacer} />

          {/* Fullscreen */}
          <button
            className={styles.btn}
            onClick={toggleFullscreen}
            aria-label={
              isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"
            }
          >
            {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Icons ─────────────────────────────────────── */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
  </svg>
);

const MuteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);

const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
);

const ExitFullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
  </svg>
);

export default VideoPlayer;
