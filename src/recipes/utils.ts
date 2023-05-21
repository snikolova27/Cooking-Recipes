import { Recipe } from "./types";

export const getAllRecipes = (): Array<Recipe> | [] => {
  const recipes = localStorage.getItem("recipes");
  if (recipes) {
    const parsedRecipes: Array<Recipe> = JSON.parse(recipes);
    return parsedRecipes;
  }
  return [];
};

export const getRecipeById = (recipeId: string) : Recipe | undefined => {
  const allRecipes = getAllRecipes();
  if (allRecipes.length !== 0) {
    return allRecipes.filter((recipe) => recipe.id === recipeId)[0];
  }
  return undefined;
};
