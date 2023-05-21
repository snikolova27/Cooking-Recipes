export const loginPath = "/login"
export const registerPath = "/register"
export const recipesPath = "/recipes"
export const recipesCreatePath = "/recipes/create"
export const recipeEditPath = (id:string) => `${recipesPath}/edit/${id}`
export const searchRecipesPath = `${recipesPath}/search`
export const userProfile = "/profile"
export const homePath = "/"
export const usersPath="/users"
export const logoutPath = "/logout"