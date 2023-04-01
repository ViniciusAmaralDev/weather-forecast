import React from "react";
import HomeLayout from "./layout";
import { useSettings } from "@hooks/settings";

const Home = () => {
  const { themeMode, toggleThemeMode } = useSettings();

  return <HomeLayout themeMode={themeMode} toggleThemeMode={toggleThemeMode} />;
};

export default Home;
