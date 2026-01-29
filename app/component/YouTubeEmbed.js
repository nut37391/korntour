// components/YouTubeEmbed.js
import React from "react";

const YouTubeEmbed = ({ videoId, autoplay = false }) => {
  const autoplayParam = autoplay ? "1" : "0";
  return (
    <div className=" w-full ">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplayParam}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="rounded-lg aspect-[4/3] w-full   md:h-[360px] max-w-[640px] mx-auto"
      />
    </div>
  );
};

export default YouTubeEmbed;
