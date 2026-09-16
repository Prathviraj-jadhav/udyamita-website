"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A video that shows a poster/first-frame and only plays on hover.
 * Pauses (and resets to start) when the pointer leaves. Respects
 * prefers-reduced-motion (shows poster only, no playback).
 */
export function HoverVideo({
  src,
  poster,
  className,
  objectPosition = "center",
}: {
  src: string;
  poster?: string;
  className?: string;
  objectPosition?: string;
}) {
  const ref = React.useRef<HTMLVideoElement>(null);
  const [reduce] = React.useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const onEnter = () => {
    const v = ref.current;
    if (!v || reduce) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const onLeave = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
  };

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      autoPlay={false}
      className={cn("h-full w-full object-cover", className)}
      style={{ objectPosition }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
