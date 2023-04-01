import { StackScreenProps } from "@react-navigation/stack";
import { MainScreensScreensEnum } from "../enums/MainStackEnum";

export type MainStackParamList = {
  [MainScreensScreensEnum.LOADING]: undefined;
  [MainScreensScreensEnum.HOME]: undefined;
};

export type MainStackRootProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
