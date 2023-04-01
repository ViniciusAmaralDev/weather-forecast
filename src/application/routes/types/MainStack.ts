import { StackScreenProps } from "@react-navigation/stack";
import { MainBottomTabsParamsList } from "./MainBottomTabs";
import { MainScreensScreensEnum } from "../enums/MainStackEnum";
import { NavigatorScreenParams } from "@react-navigation/native";

export type MainStackParamList = {
  [MainScreensScreensEnum.LOADING]: undefined;
  [MainScreensScreensEnum.BOTTOM_TABS]: NavigatorScreenParams<MainBottomTabsParamsList>;
};

export type MainStackRootProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
