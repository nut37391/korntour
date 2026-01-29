import React from "react";
import NextImage from "next/image";

export default function BannerService({ scrImage, title }) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <NextImage
        src={scrImage}
        alt="Service image"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content Overlay */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide drop-shadow-lg">
              {title}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
