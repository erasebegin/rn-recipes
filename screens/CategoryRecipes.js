import React from "react";

import { RECIPES } from "../data/data";
import RecipeCard from "../components/RecipeCard";
import RecipeList from "../components/RecipeList"

export default function CategoryRecipes({ route, navigation }) {
  const RecipeDisplay = (itemData) => {
    return (
      <RecipeCard
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        navigation={itemData.item.navigation}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
        procedure={itemData.item.steps}
        ingredients={itemData.item.ingredients}
        isGlutenFree={itemData.item.isGlutenFree}
        isVegan={itemData.item.isVegan}
        isVegetarian={itemData.item.isVegetarian}
        isLactoseFree={itemData.item.isLactoseFree}
      />
    );
  };

  const catId = route.params.catId;
  const displayedRecipes = RECIPES.filter((recipe) => {
    return recipe.catIds.indexOf(catId) >= 0;
  });

  return (
    <RecipeList component={RecipeDisplay} data={displayedRecipes}/>
  );
}


