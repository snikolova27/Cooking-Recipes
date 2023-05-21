import React, { useEffect } from "react";

import "./App.css";
import { LoginForm } from "./features/login/components/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import {
  homePath,
  loginPath,
  logoutPath,
  recipesCreatePath,
  recipesPath,
  registerPath,
  searchRecipesPath,
  usersPath,
} from "./constants";
import { RegisterForm } from "./features/register/components/RegisterForm";
import { UserProfile } from "./features/profile/components/UserProfile";
import { RecipePage } from "./recipes/components/RecipePage/RecipePage";
import { Navbar } from "./components/Navbar/Navbar";
import { LogoutPage } from "./features/logout/LogoutPage";
import { EditRecipe } from "./recipes/EditRecipe/EditRecipe";
import { CreateRecipe } from "./recipes/components/CreateRecipe/CreateRecipe";
import { SearchRecipes } from "./recipes/components/SearchRecipes/SearchRecipes";
import { UsersPage } from "./users/UsersPage/UsersPage";
import { EditUser } from "./users/EditUser/EditUser";

export const App = () => {
  useEffect(() => {
    fetch("http://localhost:3005/users")
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("users", JSON.stringify(res));
      })

      .catch((error) => console.log("Error encountered: ", error));

    fetch("http://localhost:3005/recipes")
      .then((res) => res.json())
      .then((res) => localStorage.setItem("recipes", JSON.stringify(res)))
      .catch((error) => console.log("Error encountered: ", error));
  });

  return (
    <BrowserRouter>
      <div className="App-header">
        <Navbar />
        <Routes>
          <Route path={homePath} element={<WelcomePage />} />
          <Route path={loginPath} element={<LoginForm />} />
          <Route path={logoutPath} element={<LogoutPage />} />
          <Route path={registerPath} element={<RegisterForm />} />
          <Route path={usersPath} element={<UsersPage />} />
          <Route path="/profile/:id" element={<EditUser/>}/>
          <Route path={recipesPath} element={<RecipePage />} />
          <Route path={recipesCreatePath} element={<CreateRecipe />} />
          <Route path={searchRecipesPath} element={<SearchRecipes />} />
          <Route path={`${recipesPath}/edit/:id`} element={<EditRecipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
