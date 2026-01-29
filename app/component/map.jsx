"use client";

//Map component Component from library
import { GoogleMap, MarkerF } from "@react-google-maps/api";

//Map's styling
const defaultMapContainerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "8px 8px 8px 8px",
};

//K2's coordinates
const defaultMapCenter = {
  lat: 18.7795919,
  lng: 98.9993213,
};

//Default zoom level, can be adjusted
const defaultMapZoom = 16;

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <MarkerF position={defaultMapCenter} />
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
