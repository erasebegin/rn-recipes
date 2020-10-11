import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import RECIPES from "../models/recipes";

export default function CategoryRecipes(props) {
  // const displayedRecipes = RECIPES.filter((recipe)=>{
  //     recipe.catIds.indexOf(catId) ===
  // })
  console.log(props);
  return (
    <View>
      <Text>Category Recipes Screen</Text>
      <Button
        title="View recipe"
        onPress={() => {
          props.navigation.navigate({ name: "RecipeDetails" });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
