"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type Video = { type: "local" | "youtube" | "vimeo"; src: string };

function getEmbedUrl(video: Video) {
  if (video.type === "youtube") return `https://www.youtube.com/embed/${video.src}?autoplay=1`;
  if (video.type === "vimeo") return `https://player.vimeo.com/video/${video.src}?autoplay=1`;
  return null;
}

export function VideoEmbed({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    if (video.type === "local") {
      return (
        <video
          src={video.src}
          controls
          autoPlay
          className="aspect-video w-full rounded-lg border border-border-soft bg-black"
        />
      );
    }
    return (
      <iframe
        src={getEmbedUrl(video) ?? undefined}
        title="Project video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full rounded-lg border border-border-soft"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative flex aspect-video w-full items-center justify-center rounded-lg border border-border-soft bg-bg-elevated"
      aria-label="Play video"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-fg/30 bg-bg/60 backdrop-blur transition-transform duration-300 group-hover:scale-110">
        <Play className="h-6 w-6 translate-x-0.5 text-fg" strokeWidth={1.5} />
      </span>
    </button>
  );
}
