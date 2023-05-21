import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title/Title";
import { Recipe, Tag, Tags } from "../types";
import { homePath, recipesPath } from "../../constants";
import { RecipeImage } from "../components/RecipeImage/RecipeImage";
import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import {
  EditRecipeFields,
  editRecipeFormName,
  editRecipeLongDesc,
  editRecipeName,
  editRecipePicture,
  editRecipeProducts,
  editRecipeShortDesc,
  editRecipeTags,
  editRecipeTime,
} from "./constants";
import { getInputValue, getSelectedValues } from "../../utils";
import { RecipeForm } from "../components/RecipeForm/RecipeForm";

export const EditRecipe = () => {
  const navigate = useNavigate();
  const currentRecipe: Recipe = JSON.parse(
    localStorage.getItem("currentRecipe") ?? ""
  );
  if (!currentRecipe) {
    navigate(homePath);
    return <></>;
  }

  const onSubmit = () => {
    const name = getInputValue(editRecipeName);
    const picture = getInputValue(editRecipePicture);
    const time = getInputValue(editRecipeTime);
    const shortDesc = getInputValue(editRecipeShortDesc);
    const longDesc = getInputValue(editRecipeLongDesc);
    const products = getInputValue(editRecipeProducts);
    const tags = getSelectedValues(editRecipeTags);

    const recipeData: Recipe = {
      id: currentRecipe.id,
      userId: currentRecipe.userId,
      name: name,
      shortDescription: shortDesc,
      longDescription: longDesc,
      timeInMinutes: parseInt(time),
      products: products.split(","),
      picture: picture,
      postedOn: currentRecipe.postedOn,
      lastUpdatedDate: new Date(),
      tags: tags as Array<Tag>,
    };

    fetch(`http://localhost:3005/recipes/${currentRecipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    alert("Recipe updated!");
    navigate(recipesPath);
  };

  return (
    <>
      <Title title={`Edit recipe -  ${currentRecipe.name}`} />
      <RecipeForm onSubmit={onSubmit} isEdit/>
    </>
  );
};
