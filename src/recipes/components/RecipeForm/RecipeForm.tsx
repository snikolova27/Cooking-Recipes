import { useNavigate } from "react-router-dom";
import { Recipe, Tags } from "../../types";
import { homePath } from "../../../constants";
import { RecipeFormProps } from "./types";
import {
  editRecipeFormName,
  EditRecipeFields,
  editRecipeTags,
  editRecipeProducts,
  editRecipeShortDesc,
  editRecipeLongDesc,
} from "../../EditRecipe/constants";
import { RecipeImage } from "../RecipeImage/RecipeImage";
import { Form } from "../../../components/Form/Form";

export const RecipeForm = ({ onSubmit, isEdit }: RecipeFormProps) => {
  const navigate = useNavigate();

  const currentRecipe: Recipe = JSON.parse(
    localStorage.getItem("currentRecipe") ?? ""
  );
  if (!currentRecipe && isEdit) {
    navigate(homePath);
    return <></>;
  }
  return (
    <div
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "4rem",
        maxWidth: "600px",
        margin: "auto",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      {isEdit && <RecipeImage pictureUrl={currentRecipe.picture} />}

      <Form
        id={editRecipeFormName}
        fields={EditRecipeFields}
        onSubmit={onSubmit}
      >
        <label
          htmlFor="gender-select"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          Tags
        </label>
        <select
          name="tags-select"
          id={editRecipeTags}
          style={{ width: "100%" }}
          form={editRecipeFormName}
          multiple
        >
          {Tags.map((tag) => (
            <option value={tag}>{tag}</option>
          ))}
        </select>
        <br></br>

        <label
          htmlFor="products"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          Products
        </label>
        <textarea
          rows={2}
          cols={50}
          name="products"
          id={editRecipeProducts}
          form={editRecipeFormName}
          defaultValue="Enter products used here..."
        ></textarea>
        <br></br>

        <label
          htmlFor="short-desc"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          Short description
        </label>
        <textarea
          rows={3}
          cols={50}
          name="short-desc"
          id={editRecipeShortDesc}
          form={editRecipeFormName}
          defaultValue="Enter your short description here..."
        ></textarea>
        <br></br>

        <label
          htmlFor="long-desc"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          Long description
        </label>
        <textarea
          rows={5}
          cols={50}
          name="long-desc"
          id={editRecipeLongDesc}
          form={editRecipeFormName}
          defaultValue="Enter your long description here..."
        ></textarea>
        <br></br>
      </Form>
    </div>
  );
};
