import React from "react";
import { colors, fonts } from "./theme";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";

export default function Main() {
  const deviceTheme = useColorScheme();
  const theme = colors[deviceTheme] || colors.light;

  return (
    <ThemeProvider theme={{ colors: theme, fonts }}>
      <></>
    </ThemeProvider>
  );
}
