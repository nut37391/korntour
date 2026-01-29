import * as React from "react";
import { MapProvider } from "./providers/map-provider";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/system";

export default function Providers({ children }) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <MapProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </MapProvider>
  );
}
