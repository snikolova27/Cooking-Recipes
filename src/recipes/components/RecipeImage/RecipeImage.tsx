import { RecipeImageProps } from "./types";

export const RecipeImage = ({ pictureUrl }: RecipeImageProps) => {
  return (
    <img
      src={pictureUrl}
      style={{
        width: "90%",
        height: "20%",
        maxWidth: "400px",
        border: "5px dashed pink",
        alignContent:"center"
      }}
      alt=""
    ></img>
  );
};
