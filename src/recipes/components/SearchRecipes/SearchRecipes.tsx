import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Title } from "../../../components/Title/Title";
import { clearSelected, getSelectedValues } from "../../../utils";
import { Recipe, Tag, Tags } from "../../types";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { User } from "../../../users/types";
import { doesRecipeContainAnyOfTheTags, isRecipeByOneOfUsers } from "./utils";

export const SearchRecipes = () => {
  const users = localStorage.getItem("users");
  const parsedUsers: Array<User> = JSON.parse(users ?? "");
  const [displayedRecipes, setDisplayedRecipes] = useState<Array<Recipe>>([]);

  const onClearTagSelection = () => {
    clearSelected("tags-select-search");
  };

  const onClearUserSelection = () => {
    clearSelected("user-select-search");
  };

  const onSearch = () => {
    const selectedUsers = getSelectedValues("user-select-search");
    const selectedTags = getSelectedValues("tags-select-search");
    const recipes = localStorage.getItem("recipes");
    const parsedRecipes: Array<Recipe> = JSON.parse(recipes ?? "");
    console.log(selectedUsers);
    console.log(selectedTags);

    if (selectedTags.length === 0 && selectedUsers.length === 0) {
      setDisplayedRecipes(parsedRecipes);
    }
    if (selectedTags.length === 0 && selectedUsers.length > 0) {
      const filteredByUser = parsedRecipes.filter((recipe) =>
        isRecipeByOneOfUsers(recipe.userId, selectedUsers)
      );
      console.log(filteredByUser);
      if(filteredByUser.length === 0){
        alert("No recipes match your search.")
      }
      setDisplayedRecipes(filteredByUser);
      return;
    }
    if (selectedUsers.length === 0 && selectedTags.length > 0) {
      const filteredByTags = parsedRecipes.filter((recipe) =>
        doesRecipeContainAnyOfTheTags(recipe, selectedTags as Array<Tag>)
      );
      console.log(filteredByTags);
      if(filteredByTags.length === 0){
        alert("No recipes match your search.")
      }
      setDisplayedRecipes(filteredByTags);
      return;
    }

    const filteredByUser = parsedRecipes.filter((recipe) =>
      isRecipeByOneOfUsers(recipe.userId, selectedUsers)
    );
    const filteredByTags = filteredByUser.filter((recipe) =>
      doesRecipeContainAnyOfTheTags(recipe, selectedTags as Array<Tag>)
    );
    console.log(filteredByTags);
    if(filteredByTags.length === 0){
        alert("No recipes match your search.")
    }
    setDisplayedRecipes(filteredByTags);
  };

  return (
    <>
      <Title title="Search available recipes" />
      <div
        style={{
          paddingTop: "1.5rem",
          paddingBottom: "4rem",
          maxWidth: "800px",
          margin: "auto",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <label
          htmlFor="user-select"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          By user
        </label>
        <select
          name="user-select"
          id="user-select-search"
          style={{ width: "100%" }}
          multiple
        >
          {parsedUsers.map((user) => (
            <option value={user.name}>{user.name}</option>
          ))}
        </select>
        <br></br>
        <label
          htmlFor="tags-select"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          By tags
        </label>
        <select
          name="tags-select"
          id="tags-select-search"
          style={{ width: "100%" }}
          multiple
        >
          {Tags.map((tag) => (
            <option value={tag}>{tag}</option>
          ))}
        </select>
        <br></br>

        <div style={{paddingLeft:"35%"}}>
          <div>
            <Button value="Search" onClick={onSearch} />
          </div>
          <div>
            <Button
              value="Clear user selection"
              onClick={onClearUserSelection}
            />
          </div>
          <Button value="Clear tag selection" onClick={onClearTagSelection} />
        </div>

        {displayedRecipes.map((recipe) => (
          <RecipeCard
            id={recipe.id}
            userId={recipe.userId}
            name={recipe.name}
            shortDescription={recipe.shortDescription}
            timeInMinutes={recipe.timeInMinutes}
            products={recipe.products}
            picture={recipe.picture}
            longDescription={recipe.longDescription}
            tags={recipe.tags}
            postedOn={recipe.postedOn}
            lastUpdatedDate={recipe.lastUpdatedDate}
          ></RecipeCard>
        ))}
      </div>
    </>
  );
};
