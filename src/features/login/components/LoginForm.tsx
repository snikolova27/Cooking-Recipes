import { useNavigate } from "react-router-dom";
import { Form } from "../../../components/Form/Form";
import { Title } from "../../../components/Title/Title";
import { LoginFields } from "./constants";

import { User } from "../../../users/types";
import { useEffect, useState } from "react";
import { getInputValue } from "../../../utils";
import { homePath, recipesPath } from "../../../constants";
import { BackHomeButton } from "../../../components/BackHomeButton/BackHomeButton";

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
      const username =  getInputValue("username-field");
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("username", username)
      navigate(recipesPath);
    } else {
      alert("Wrong credentials. Please try again.");
    }
  };
  return (
    <>
      <Title title="Login"/>
      <Form id={"login-form"} fields={LoginFields} onSubmit={handleSubmit} />

      <br></br>
     <BackHomeButton/>
    </>
  );
};
