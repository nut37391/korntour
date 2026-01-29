"use client";
import React from "react";
import ServiceUi from "./ServiceUi";

const ServiceList = ({ services }) => {
  return (
    <div className="flex flex-wrap justify-center gap-28">
      {services.map((service, index) => (
        <ServiceUi
          key={index}
          serviceName={service.name}
          imageSrc={service.imageSrc}
          onClick={service.onClick}
        />
      ))}
    </div>
  );
};

export default ServiceList;
