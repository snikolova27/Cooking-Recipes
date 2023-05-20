import { useLocation } from "react-router-dom";
import { Link } from "./Link/Link";
import {
  homePath,
  loginPath,
  logoutPath,
  recipesPath,
  registerPath,
  usersPath,
} from "../../constants";

export const Navbar = () => {
  const { pathname } = useLocation();
  const pathsWithNoNavBar = [homePath, loginPath, registerPath, logoutPath];
  if (pathsWithNoNavBar.includes(pathname)) {
    return <></>;
  }
  const loggedInFromSessionStorage = sessionStorage.getItem("loggedIn");

  return (
    <div
      style={{
        marginTop: "0.5em",
        paddingBottom: " 0.5em",
        border: "1px solid #a2a2a2",
        WebkitBoxShadow: "0px 0px 14px 0px",
        display: "flex",
        flexDirection: "row",
        width: "90%",
      }}
    >
      <h1
        style={{
          margin: "0",
          fontSize: " 1.45em",
          paddingLeft: "30px",
          paddingRight: "30%",
        }}
      >
        <a href="/">Cooking Recipes</a>
      </h1>
      <ul
        style={{
          marginTop: "5px",
          display: "flex",
          flexDirection: "row",
          alignContent: "right",
          margin: "0",
          listStyle: "none",
        }}
      >
        <li style={{ paddingRight: "20px" }}>
          <Link name="Home" whereTo={homePath} />
        </li>
        <li style={{ paddingRight: "20px" }}>
          <Link name="Users" whereTo={usersPath} />
        </li>
        <li style={{ paddingRight: "20px" }}>
          <Link name="Recipes" whereTo={recipesPath} />
        </li>
        {loggedInFromSessionStorage && (
          <li style={{ paddingRight: "20px" }}>
            <Link name="Log out" whereTo={logoutPath} />
          </li>
        )}
        {!loggedInFromSessionStorage && (
          <li style={{ paddingRight: "20px" }}>
            <Link name="Login" whereTo={loginPath} />
          </li>
        )}
      </ul>
    </div>
  );
};