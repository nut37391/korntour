import React from "react";

const ServiceDetail = ({ detail }) => {
  return (
    <div className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[2px] w-12 md:w-20 bg-gradient-to-r from-transparent to-green-cyan"></div>
          <div className="w-3 h-3 rounded-full bg-green-cyan"></div>
          <div className="h-[2px] w-12 md:w-20 bg-gradient-to-l from-transparent to-green-cyan"></div>
        </div>

        {/* Title */}
        <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-green-cyan tracking-wide leading-tight">
          {detail}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Experience an unforgettable adventure with our professional guides
        </p>

        {/* Decorative bottom */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="h-1 w-8 bg-green-cyan/30 rounded-full"></div>
          <div className="h-1 w-4 bg-green-cyan/50 rounded-full"></div>
          <div className="h-1 w-2 bg-green-cyan rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
