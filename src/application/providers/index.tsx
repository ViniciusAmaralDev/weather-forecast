import React from "react";
import { Children } from "../../@types/Children";
import { ForecastProvider } from "@hooks/forecast";
import { LocationProvider } from "@hooks/location";
import { SettingsProvider } from "@hooks/settings";

export default function Providers({ children }: Children) {
  return (
    <SettingsProvider>
      <LocationProvider>
        <ForecastProvider>{children}</ForecastProvider>
      </LocationProvider>
    </SettingsProvider>
  );
}
