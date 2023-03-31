import "react-native-gesture-handler";
import React from "react";
import { MainStackParamList } from "./types/MainStack";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStackRoutes() {
  return (
    <Stack.Navigator>
      <></>
    </Stack.Navigator>
  );
}
