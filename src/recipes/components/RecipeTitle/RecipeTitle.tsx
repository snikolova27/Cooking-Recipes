import { RecipeTitleProps } from "./types"

export const RecipeTitle = ({title}: RecipeTitleProps) => {
    return (
        <p
        style={{
          fontSize: "28px",
          color: "white",
          fontFamily: "emoji",
          fontStyle: "italic",
        }}
      >{title}</p>
    )
}