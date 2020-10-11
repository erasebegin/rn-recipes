import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import CategoryRecipes from "../screens/CategoryRecipes";
import RecipeDetails from "../screens/RecipeDetails";

import Color from "../constants/Color";

const Stack = createStackNavigator();

function RecipeNavigator() {
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
        name="Home"
        component={Categories}
        options={{
          title: "Categories",
        }}
      />
      <Stack.Screen
        name="CategoryRecipes"
        component={CategoryRecipes}
        options={({ route }) => ({
          title: route.params.catTitle,
        })}
      />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  );
}

export default RecipeNavigator;
