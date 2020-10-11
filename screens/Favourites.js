import React from "react";
import RecipeList from "../components/RecipeList";
import RecipeCard from "../components/RecipeCard";
import { RECIPES } from "../data/data";

export default function Favourites({navigation}) {
  const RecipeDisplay = (itemData) => {
    const {
      title,
      affordability,
      complexity,
      duration,
      imageUrl,
      steps,
      ingredients,
      isGlutenFree,
      isVegan,
      isLactoseFree,
      isVegetarian,
    } = itemData.item;
    return (
      <RecipeCard
        title={title}
        affordability={affordability}
        navigation={navigation}
        complexity={complexity}
        duration={duration}
        image={imageUrl}
        procedure={steps}
        ingredients={ingredients}
        isGlutenFree={isGlutenFree}
        isVegan={isVegan}
        isVegetarian={isVegetarian}
        isLactoseFree={isLactoseFree}
      />
    );
  };
  return <RecipeList data={RECIPES} component={RecipeDisplay} />;
}
