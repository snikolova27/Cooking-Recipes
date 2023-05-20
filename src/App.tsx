import React, { useEffect } from "react";

import "./App.css";
import { LoginForm } from "./features/login/components/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { loginPath, recipesPath, registerPath, userProfile } from "./constants";
import { RegisterForm } from "./features/register/components/RegisterForm";
import { UserProfile } from "./features/profile/components/UserProfile";
import { RecipePage } from "./recipes/components/RecipePage/RecipePage";

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
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path={loginPath} element={<LoginForm />} />
          <Route path={registerPath} element={<RegisterForm />} />
          <Route path={userProfile} element={<UserProfile />} />
          <Route path={recipesPath} element={<RecipePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
