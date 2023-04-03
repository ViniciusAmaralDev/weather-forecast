import React from "react";
import HomeLayout from "./layout";
import { useSettings } from "@hooks/settings";
import { useForecast } from "@hooks/forecast";

const Home = () => {
  const { forecasts } = useForecast();
  const { themeMode, toggleThemeMode } = useSettings();

  const selecetdForecast = forecasts.filter((forecast) => forecast.isSelected)[0];

  return (
    <HomeLayout
      themeMode={themeMode}
      forecast={selecetdForecast}
      toggleThemeMode={toggleThemeMode}
    />
  );
};

export default Home;
