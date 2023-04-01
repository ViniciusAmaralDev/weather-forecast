import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MainBottomTabsScreensEnum } from "../enums/MainBottomTabsEnum";

export type MainBottomTabsParamsList = {
  [MainBottomTabsScreensEnum.HOME]: undefined;
  [MainBottomTabsScreensEnum.FORECASTS]: undefined;
  [MainBottomTabsScreensEnum.FAVORITES]: undefined;
};

export type MainBottomTabsRootProps<T extends keyof MainBottomTabsParamsList> =
  BottomTabScreenProps<MainBottomTabsParamsList, T>;
