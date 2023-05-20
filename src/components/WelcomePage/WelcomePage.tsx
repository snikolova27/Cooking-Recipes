import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginPath, recipesPath, registerPath } from "../../constants";
import { Title } from "../Title/Title";

export const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasSession = sessionStorage.getItem("loggedIn");
    if (hasSession === "true") {
      navigate(recipesPath);
    }
  });

  return (
    <div
      style={{
        textAlign: "center",
        width: "50%",
        marginTop: "-10%",
      }}
    >
      <Title title="Welcome to Cooking Recipes!" />

      <a href={loginPath} color="white">
        {" "}
        Login
      </a>
      <br />
      <br />

      <a href={registerPath} color="white">
        Register
      </a>
      <br />
      <br />

      <a href={recipesPath} color="white">
        {" "}
        Browse recipes
      </a>
      <br />
    </div>
  );
};
