import { User } from "../../../users/types";
import { Recipe, Tag } from "../../types";

export const isRecipeByUser = (
  recipeUserId: string,
  nameUser: string
): boolean => {
  const users = localStorage.getItem("users");
  const parsedUsers: Array<User> = JSON.parse(users ?? "");

  return (
    parsedUsers.filter(
      (user) => user.id === recipeUserId && user.name === nameUser
    ).length > 0
  );
};

export const isRecipeByOneOfUsers = (
  recipeUserId: string,
  users: Array<string>
) => {
  return users.filter((user) => isRecipeByUser(recipeUserId, user)).length > 0;
};

export const doesRecipeContainAnyOfTheTags = (
  recipe: Recipe,
  tags: Array<Tag>
) => {
  return recipe.tags.filter((tag) => tags.includes(tag)).length > 0;
};

export const getFirstTenRecipes = (recipes: Array<Recipe>) => {
  return recipes.slice(0, 10)
}
