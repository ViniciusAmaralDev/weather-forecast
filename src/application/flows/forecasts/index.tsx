import React from "react";
import ForecastsLayout from "./layout";
import { useForecast } from "@hooks/forecast";

const Forecasts = () => {
  const { forecasts } = useForecast();

  return <ForecastsLayout forecasts={forecasts} />;
};

export default Forecasts;
