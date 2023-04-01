export enum ThemeModeEnum {
  DARK = "dark",
  LIGHT = "light",
}

export type SettingsContext = {
  themeMode: ThemeModeEnum;
  toggleThemeMode: () => void;
};
