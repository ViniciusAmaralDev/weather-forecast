import React from "react";
import MainStackRoutes from "./MainStack.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <MainStackRoutes />
    </NavigationContainer>
  );
}
