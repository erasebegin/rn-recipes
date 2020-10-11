import React from "react";
import { View, Text, Stylesheet, Button } from "react-native";

export default function RecipeDetails({ route }) {
  const {
    title,
    affordability,
    complexity,
    duration,
    image,
    steps,
    ingredients,
    isGlutenFree,
    isVegan,
    isLactoseFree,
    isVegetarian,
  } = route.params;
  return (
    <View>
      <Text>{ingredients}</Text>
      <Text>{steps}</Text>
    </View>
  );
}
