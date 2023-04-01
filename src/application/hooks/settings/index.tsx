import { useColorScheme } from "react-native";
import { Children } from "../../../@types/Children";
import { SettingsContext, ThemeModeEnum } from "./type";
import React, { createContext, useContext, useState } from "react";
import Light from "@theme/Light";
import { fonts } from "@theme/index";
import Dark from "@theme/Dark";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

const Context = createContext({} as SettingsContext);

export type ThemeType = { colors: typeof Light; fonts: typeof fonts };

export const SettingsProvider = ({ children }: Children) => {
  const deviceTheme = useColorScheme();

  const [themeMode, setThemeMode] = useState(
    deviceTheme === "light" ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK
  );

  const statusBarStyle =
    themeMode === "dark" ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;

  const themes: Record<string, ThemeType> = {
    dark: { colors: Dark, fonts },
    light: { colors: Light, fonts },
  };

  const theme = themes[themeMode] || themes.light;

  const toggleThemeMode = () => {
    setThemeMode((value) =>
      value === ThemeModeEnum.LIGHT ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ themeMode, toggleThemeMode }}>
        <StatusBar style={statusBarStyle} />
        {children}
      </Context.Provider>
    </ThemeProvider>
  );
};

export const useSettings = () => useContext(Context);
