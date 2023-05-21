import { useNavigate } from "react-router-dom";
import { Title } from "../../../components/Title/Title";
import { getUserData } from "../../../features/profile/uitls";
import { getInputValue, getSelectedValues } from "../../../utils";
import {
  editRecipeName,
  editRecipePicture,
  editRecipeTime,
  editRecipeShortDesc,
  editRecipeLongDesc,
  editRecipeProducts,
  editRecipeTags,
} from "../../EditRecipe/constants";
import { Recipe, Tag } from "../../types";
import { RecipeForm } from "../RecipeForm/RecipeForm";
import { loginPath, recipesPath } from "../../../constants";
import { useEffect } from "react";

export const CreateRecipe = () => {
  const navigate = useNavigate();




  const onSubmit = () => {
    const name = getInputValue(editRecipeName);
    const picture = getInputValue(editRecipePicture);
    const time = getInputValue(editRecipeTime);
    const shortDesc = getInputValue(editRecipeShortDesc);
    const longDesc = getInputValue(editRecipeLongDesc);
    const products = getInputValue(editRecipeProducts);
    const tags = getSelectedValues(editRecipeTags);

    const username = sessionStorage.getItem("username");
    const userId = username && getUserData(username)?.id;

    if(!userId){
        alert("No user found. Try to login.")
        return
    }
    if(name.length > 80 || shortDesc.length > 256 || longDesc.length > 2048 ){
        alert("Validation failed. Try again.")
        return
    } 

    const recipeData: Recipe = {
      userId: userId,
      name: name,
      shortDescription: shortDesc,
      longDescription: longDesc,
      timeInMinutes: parseInt(time),
      products: products.split(","),
      picture: picture,
      postedOn: new Date(),
      lastUpdatedDate: new Date(),
      tags: tags as Array<Tag>,
    };

    fetch(`http://localhost:3005/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    alert("Recipe created!");
    navigate(recipesPath);
  };
  return (
    <>
      <Title title="Add recipe" />
      <RecipeForm onSubmit={onSubmit} />
    </>
  );
};
