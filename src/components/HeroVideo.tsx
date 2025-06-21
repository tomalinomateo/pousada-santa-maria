"use client";

interface HeroVideoProps {
  videoId: string;
}

export default function HeroVideo({ videoId }: HeroVideoProps) {
  return (
    <div className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] h-full mx-4 md:mx-8">
      <video
        src="/videos/lencois.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.1)",
        }}
      >
        Sorry, your browser doesn't support HTML5 video.
      </video>
    </div>
  );
}
