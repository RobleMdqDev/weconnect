"use client";

import {useParallax} from "../hooks/useParallax";

export default function ParallaxBackground() {
  const offset = useParallax(0.5);

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)",
      }}
    >
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/video/connect.webm"
      />
    </div>
  );
}
