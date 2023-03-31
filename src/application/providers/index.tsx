import React from "react";
import { Children } from "../../@types/Children";
import { ForecastProvider } from "@hooks/forecast";
import { LocationProvider } from "@hooks/location";

export default function Providers({ children }: Children) {
  return (
    <LocationProvider>
      <ForecastProvider>{children}</ForecastProvider>
    </LocationProvider>
  );
}
