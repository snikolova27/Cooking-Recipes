import { Button } from "../../../components/Button/Button";
import { RecipeButtonsProps } from "./types";

export const RecipeButtons = ({recipeId} : RecipeButtonsProps) => {

    const onEdit = () => {}
    const onDelete = () => {}
    return(
        <div>
             <Button value=" Edit" onClick={onEdit}/>
             <Button value=" Delete" onClick={onDelete}/>
        </div>
    )
}