import React from "react";

export default function Price({ price , person }) {
  const formattedPrice = price?.toLocaleString() || price;
  const formattedPerson = person?.toLocaleString() || person;


  return (
    <div className="flex justify-center items-center w-full px-4">
      <div className="relative inline-flex flex-col items-center">
        {/* Price Badge */}
        <div className="bg-gradient-to-r from-green-cyan to-pine-green rounded-2xl px-8 py-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <p className="text-sm text-white/80 uppercase tracking-widest mb-1">
            Starting from
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl md:text-5xl font-bold text-white">
              {formattedPrice}
            </span>
            <span className="text-xl text-white/90 font-medium">THB</span>
          </div>
          <p className="text-white/70 text-sm mt-1 text-center">{person}</p>
        </div>

        {/* Decorative elements */}
        <div className="flex items-center gap-3 mt-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Includes lunch
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Transportation
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Guide
          </span>
        </div>
      </div>
    </div>
  );
}
