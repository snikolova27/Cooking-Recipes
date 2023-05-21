import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { getRecipeById } from "../../utils";
import { RecipeButtonsProps } from "./types";
import { homePath, recipeEditPath } from "../../../constants";

export const RecipeButtons = ({ recipeId }: RecipeButtonsProps) => {
  const navigate = useNavigate();
  const recipeInfo = getRecipeById(recipeId);

  const onEdit = () => {
    const recipe = getRecipeById(recipeId);
    if (recipe) {
      localStorage.setItem("currentRecipe", JSON.stringify(recipe));
      navigate(recipeEditPath(recipeId));
    }
  };
  const onDelete = () => {
    fetch(`http://localhost:3005/recipes/${recipeId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetch("http://localhost:3005/recipes")
          .then((res) => res.json())
          .then((res) => localStorage.setItem("recipes", JSON.stringify(res)))
          .catch((error) => console.log("Error encountered: ", error));
      });

    alert(`Recipe ${recipeInfo?.name} deleted.`);
    navigate(homePath);
  };
  return (
    <div>
      <Button value=" Edit" onClick={onEdit} />

      <Button value=" Delete" onClick={onDelete} />
    </div>
  );
};
