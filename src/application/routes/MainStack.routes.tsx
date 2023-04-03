import "react-native-gesture-handler";
import React from "react";
import { useForecast } from "@hooks/forecast";
import { MainStackParamList } from "./types/MainStack";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreensScreensEnum } from "./enums/MainStackEnum";

// SCREENS
import Loading from "@flows/loading";
import MainBottomTabs from "./MainBottomTabs.routes";

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStackRoutes() {
  const { forecasts } = useForecast();
  const isEmpty = forecasts.filter((item) => item.isSelected).length === 0;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isEmpty ? (
        <Stack.Screen
          name={MainScreensScreensEnum.LOADING}
          component={Loading}
        />
      ) : (
        <Stack.Screen
          name={MainScreensScreensEnum.BOTTOM_TABS}
          component={MainBottomTabs}
        />
      )}
    </Stack.Navigator>
  );
}
