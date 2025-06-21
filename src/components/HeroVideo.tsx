"use client";

import Image from "next/image";

interface HeroVideoProps {
  videoId: string;
}

export default function HeroVideo({ videoId }: HeroVideoProps) {
  return (
    <div className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] h-full mx-4 md:mx-8">
      <Image
        src="/images/pousada/deck_1.jpg"
        alt="Pousada Santa Maria - Lençóis Maranhenses"
        fill
        className="object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.1)",
        }}
        priority
      />
    </div>
  );
}
