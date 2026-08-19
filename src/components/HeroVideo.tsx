"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

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

    tryPlay();

    // Si el navegador bloqueó el autoplay (por ejemplo modo de bajo consumo),
    // reintentamos con la primera interacción o al volver a la pestaña.
    const events = ["touchstart", "click", "scroll"] as const;
    const onInteraction = () => tryPlay();
    events.forEach((event) =>
      document.addEventListener(event, onInteraction, { passive: true })
    );
    document.addEventListener("visibilitychange", onInteraction);

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, onInteraction)
      );
      document.removeEventListener("visibilitychange", onInteraction);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src="/videos/atins-lencois-web-1080.mp4"
        poster="/images/lencois-hero-poster.png"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        preload="auto"
        className="hero-video absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.1)",
        }}
        aria-label="Video Lençóis Maranhenses"
      />
    </div>
  );
}
