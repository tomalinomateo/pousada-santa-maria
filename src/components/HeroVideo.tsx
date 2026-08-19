"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MEDIA_CLASSES =
  "absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS solo permite autoplay si el video está muteado e inline.
    // React no siempre refleja `muted` como atributo del DOM, así que lo forzamos.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      const promise = video.play();
      if (promise) promise.catch(() => {});
    };

    // El evento `playing` puede dispararse antes de que React hidrate, así que
    // además chequeamos el estado actual del video.
    const markPlaying = () => {
      if (!video.paused && video.currentTime > 0) setIsPlaying(true);
    };

    tryPlay();
    markPlaying();

    // Si el navegador bloqueó el autoplay (por ejemplo modo de bajo consumo),
    // reintentamos con la primera interacción o al volver a la pestaña.
    const events = ["touchstart", "touchend", "click", "scroll"] as const;
    const onInteraction = () => tryPlay();
    events.forEach((event) =>
      document.addEventListener(event, onInteraction, { passive: true })
    );
    document.addEventListener("visibilitychange", onInteraction);
    video.addEventListener("loadeddata", onInteraction);
    video.addEventListener("canplay", onInteraction);
    video.addEventListener("playing", markPlaying);
    video.addEventListener("timeupdate", markPlaying);

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, onInteraction)
      );
      document.removeEventListener("visibilitychange", onInteraction);
      video.removeEventListener("loadeddata", onInteraction);
      video.removeEventListener("canplay", onInteraction);
      video.removeEventListener("playing", markPlaying);
      video.removeEventListener("timeupdate", markPlaying);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Poster propio: mientras el video no arranca mostramos esta imagen y
          mantenemos el <video> invisible, así iOS no puede dibujar su botón
          de play gigante sobre el hero. */}
      <Image
        src="/images/lencois-hero-poster.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.1)",
        }}
      />
      <video
        ref={videoRef}
        src="/videos/atins-lencois-web-1080.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        preload="auto"
        className={`hero-video ${MEDIA_CLASSES} transition-opacity duration-500`}
        style={{
          filter: "brightness(1.1) contrast(1.1)",
          opacity: isPlaying ? 1 : 0,
        }}
        aria-label="Video Lençóis Maranhenses"
      />
    </div>
  );
}
