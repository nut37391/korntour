"use client";
import { useJsApiLoader } from "@react-google-maps/api";
import { Progress } from "@nextui-org/react";

// Define a list of libraries to load from the Google Maps API
const libraries = ["places", "drawing", "geometry"];

// Define a function component called MapProvider that takes a children prop
export function MapProvider({ children }) {
  // Load the Google Maps JavaScript API asynchronously
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;
  if (!scriptLoaded)
    return (
      <div className="h-screen flex justify-center items-center px-4">
        <Progress
          size="md"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
          label="Loading"
          color="warning"
        />
      </div>
    );

  // Return the children prop wrapped by this MapProvider component
  return children;
}
