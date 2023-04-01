import "react-native-gesture-handler";
import React from "react";
import { MainStackParamList } from "./types/MainStack";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreensScreensEnum } from "./enums/MainStackEnum";

// SCREENS
import Home from "@flows/home";
import Loading from "@flows/loading";

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MainScreensScreensEnum.LOADING} component={Loading} />
      <Stack.Screen name={MainScreensScreensEnum.HOME} component={Home} />
    </Stack.Navigator>
  );
}
