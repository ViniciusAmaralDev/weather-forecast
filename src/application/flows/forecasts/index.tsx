import React from "react";
import ForecastsLayout from "./layout";
import { useForecast } from "@hooks/forecast";
import { useLocation } from "@hooks/location";

const Forecasts = () => {
  const { forecasts, getForecast } = useForecast();
  const { convertAddressToCoordinates } = useLocation();

  const handleGetForecast = async (address: string) => {
    const coords = await convertAddressToCoordinates(address);
    await getForecast(coords);
  };

  return (
    <ForecastsLayout
      forecasts={forecasts}
      handleGetForecast={handleGetForecast}
    />
  );
};

export default Forecasts;
