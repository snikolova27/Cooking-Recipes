import { useEffect } from "react";
import { Title } from "../../../components/Title/Title";
import { Recipe } from "../../types";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export const RecipePage = () => {
  useEffect(() => {
    fetch("http://localhost:3005/recipes")
      .then((res) => res.json())
      .then((res) => localStorage.setItem("recipes", JSON.stringify(res)))
      .catch((error) => console.log("Error encountered: ", error));
  });
  
  const recipes = localStorage.getItem("recipes");

  if (!recipes) {
    return (
      <p style={{ fontSize: "48px", color: "white", fontFamily: "emoji" }}>
        "No recipes found. :("
      </p>
    );
  }
  const parsedRecipes: Array<Recipe> = JSON.parse(recipes);

  return (
    <>
      <Title title="Available Recipes"></Title>
      {parsedRecipes.map((recipe) => (
        <RecipeCard
          id={recipe.id}
          userId={recipe.userId}
          name={recipe.name}
          shortDescription={recipe.shortDescription}
          timeInMinutes={recipe.timeInMinutes}
          products={recipe.products}
          picture={recipe.picture}
          longDescription={recipe.longDescription}
          tags={recipe.tags}
          postedOn={recipe.postedOn}
          lastUpdatedDate={recipe.lastUpdatedDate}
        ></RecipeCard>
      ))}
    </>
  );
};
