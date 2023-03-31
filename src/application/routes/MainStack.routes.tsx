import "react-native-gesture-handler";
import React from "react";
import { MainStackRootProps } from "./types/MainStack";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<MainStackRootProps>();

export default function MainStackRoutes() {
  return (
    <Stack.Navigator>
      <></>
    </Stack.Navigator>
  );
}
