export const editRecipeFormName = "edit-recipe-form";
export const editRecipeName = "edit-recipe-name";
export const editRecipePicture = "edit-recipe-picture";
export const editRecipeShortDesc = "edit-recipe-short-desc";
export const editRecipeLongDesc = "edit-recipe-long-desc";
export const editRecipeTime = "edit-recipe-time";
export const editRecipeProducts = "edit-recipe-products";
export const editRecipeTags = "edit-recipe-tags";

export const EditRecipeFields = [
  {
    name: "Name",
    type: "text",
    id: editRecipeName,
    required: true,
  },
  {
    name: "Picture",
    type: "text",
    id: editRecipePicture,
    required: true,
  },
  {
    name: "Time in minutes",
    type: "number",
    id: editRecipeTime,
    required: true,
  },
];
