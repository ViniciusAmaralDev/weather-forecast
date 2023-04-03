import React from "react";
import { useTheme } from "styled-components";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { MainBottomTabsScreensEnum } from "./enums/MainBottomTabsEnum";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// SCREENS
import Home from "@flows/home";
import Forecasts from "@flows/forecasts";
import Favorites from "@flows/favorites";

const Tab = createBottomTabNavigator();

export default function MainBottomTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.BACKGROUND_PRIMARY,
        },
        tabBarActiveTintColor: theme.colors.PURPLE,
        tabBarInactiveTintColor: theme.colors.TEXT_SECONDARY,
      }}
    >
      <Tab.Screen
        name={MainBottomTabsScreensEnum.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={MainBottomTabsScreensEnum.FORECASTS}
        component={Forecasts}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="menu" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={MainBottomTabsScreensEnum.FAVORITES}
        component={Favorites}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="favorite-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
