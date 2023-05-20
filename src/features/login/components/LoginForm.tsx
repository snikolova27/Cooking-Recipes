import { useNavigate } from "react-router-dom";
import { Form } from "../../../components/Form/Form";
import { Title } from "../../../components/Title/Title";
import { LoginFields } from "./constants";

import { User } from "../../../users/types";
import { useEffect, useState } from "react";
import { getInputValue } from "../../../utils";
import { recipesPath } from "../../../constants";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<Array<User>>();

  useEffect(() => {
    const usersFromLocalStorage = JSON.parse(
      localStorage.getItem("users") ?? ""
    );
    if (usersFromLocalStorage) {
      setUsers(usersFromLocalStorage as Array<User>);
    }
  }, [setUsers]);

  const isUserValid = () => {
    const username = getInputValue("username-field");
    console.log(username);
    const password = getInputValue("password-field");
    console.log(password);

    return (
      users?.filter(
        (user) => user.username === username && user.password === password
      ).length === 1
    );
  };

  const handleSubmit = async () => {
    if (isUserValid()) {
      sessionStorage.setItem("loggedIn", "true");
      navigate(recipesPath);
    } else {
      alert("Wrong credentials. Please try again.");
    }
  };
  return (
    <>
      <Title />
      <Form id={"login-form"} fields={LoginFields} onSubmit={handleSubmit} />

      <br></br>
      <input
        type="submit"
        value="Back home"
        onClick={() => navigate("/")}
        style={{
          color: "#f50aab",
          fontWeight: "bold",
          backgroundColor: "#f2bac9",
          borderRadius: "3%",
          border: "1px solid #f50aab",
          width: "10rem",
          height: "2rem",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "16px",
        }}
      ></input>
    </>
  );
};
