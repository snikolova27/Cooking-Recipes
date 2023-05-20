import { Title } from "../../../components/Title/Title";
import { Recipe } from "../../types";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export const RecipePage = () => {
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
    <Title additionalTitle="- Available Recipes"></Title>
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
