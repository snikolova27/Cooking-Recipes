import { Recipe } from "../../types";
import { RecipeField } from "../RecipeField/RecipeField";
import { RecipeImage } from "../RecipeImage/RecipeImage";
import { RecipeTitle } from "../RecipeTitle/RecipeTitle";
import { getAuthorName } from "./utils";

export const RecipeCard = ({
  id,
  userId,
  name,
  shortDescription,
  timeInMinutes,
  products,
  picture,
  longDescription,
  tags,
  postedOn,
  lastUpdatedDate,
}: Recipe) => {
  const author = getAuthorName(userId);

  return (
    <div
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "4rem",
        maxWidth: "700px",
        margin: "auto",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      <RecipeTitle title={name} />
      <RecipeImage pictureUrl={picture} />
      <RecipeField name="By: " value={author} />
      <RecipeField name="Posted on: " value={postedOn.toString()}/>
      <RecipeField name="Last updated on: " value={lastUpdatedDate.toString()}/>
      <RecipeField name="Time:" value={`${timeInMinutes} minutes`} />
      <RecipeField name="Tags: " value={tags.toString()}/>
      <RecipeField name="Product used: " value={products.toString()}/>
      <RecipeField name="Short description:" value={shortDescription} />
      <RecipeField name="Long description: " value={longDescription}/>
      

    </div>
  );
};
