import { RecipeFieldProps } from "./types"

export const RecipeField = ({name,value} : RecipeFieldProps) => {
return (
    <p
    style={{
      fontSize: "18px",
      color: "white",
      fontFamily: "emoji",
      padding: "0px",
      margin: "0",
    }}
  ><span style={{fontWeight: "bold"}}>{name}</span>
    {value}
    </p>
)
}