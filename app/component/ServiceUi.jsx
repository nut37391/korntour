"use client";
import React from "react";
import NextImage from "next/image";
import { Button } from ".";

const ServiceUi = ({ serviceName, imageSrc, onClick }) => {
  return (
    <div className="relative   mx-auto ">
      <NextImage
        src={imageSrc}
        alt="Service image"
        className="w-full min-h-[300px] max-h-[300px] rounded-lg object-cover"
      />
      <div className="absolute w-full left-[-50%] right-0 bottom-0 top-[-50%] translate-x-1/2 translate-y-1/2 ">
        <p className="text-white text-2xl font-bold px-[8px] mb-[40px] text-center">
          {serviceName}
        </p>
        <div className=" w-fit mx-auto">
          <Button
            size="h-10"
            text="LEARN MORE"
            textColor="#000000"
            color="#FFFFFF"
            onClick={() => {
              onClick && onClick();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceUi;
