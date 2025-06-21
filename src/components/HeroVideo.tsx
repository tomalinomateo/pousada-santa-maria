"use client";

interface HeroVideoProps {
  videoId?: string;
}

export default function HeroVideo({ videoId }: HeroVideoProps) {
  return (
    <div className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] h-full mx-4 md:mx-8 overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1095291414?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
        frameBorder="0"
        allow="autoplay; fullscreen"
        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"
        style={{
          filter: "brightness(1.1) contrast(1.1)",
        }}
        title="Video Lencois"
      />
    </div>
  );
}
