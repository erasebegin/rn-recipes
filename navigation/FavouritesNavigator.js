import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import FavouriteButton from "../components/FavouriteButton";
import Categories from "../screens/Categories";
import CategoryRecipes from "../screens/CategoryRecipes";
import RecipeDetails from "../screens/RecipeDetails";
import Favourites from "../screens/Favourites";
import Color from "../constants/Color";

const Stack = createStackNavigator();

export default function FavouritesStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerTintColor:
          Platform.OS === "android" ? "white" : Color.primaryColor,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
      }}
    >
         <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{
          title: "Favourites",
        }}
      />
    </Stack.Navigator>
  );
}
