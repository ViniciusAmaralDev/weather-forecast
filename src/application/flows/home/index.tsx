import React from "react";
import HomeLayout from "./layout";
import { useSettings } from "@hooks/settings";
import { useForecast } from "@hooks/forecast";

const Home = () => {
  const { selecetdForecast } = useForecast();
  const { themeMode, toggleThemeMode } = useSettings();

  return (
    <HomeLayout
      themeMode={themeMode}
      forecast={selecetdForecast}
      toggleThemeMode={toggleThemeMode}
    />
  );
};

export default Home;
