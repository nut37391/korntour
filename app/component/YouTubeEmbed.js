// components/YouTubeEmbed.js - Lazy loaded YouTube with facade pattern
"use client";
import React, { useState } from "react";

const YouTubeEmbed = ({ videoId, autoplay = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Show thumbnail first, load iframe on click (facade pattern)
  if (!isLoaded && !autoplay) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsLoaded(true)}
          className="relative rounded-lg aspect-[4/3] w-full md:h-[360px] max-w-[640px] mx-auto bg-gray-900 group cursor-pointer overflow-hidden"
          aria-label="Play video"
        >
          {/* YouTube thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="rounded-lg aspect-[4/3] w-full md:h-[360px] max-w-[640px] mx-auto"
        loading="lazy"
      />
    </div>
  );
};

export default YouTubeEmbed;
