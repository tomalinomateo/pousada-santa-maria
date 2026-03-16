"use client";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        src="/videos/atins-lencois-web-1080.mp4"
        poster="/images/lencois-hero-poster.png"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.1)",
        }}
        aria-label="Video Lençóis Maranhenses"
      />
    </div>
  );
}
