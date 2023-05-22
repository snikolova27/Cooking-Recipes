import { useNavigate } from "react-router-dom";
import { homePath } from "../../constants";
import { Title } from "../../components/Title/Title";
import { BackHomeButton } from "../../components/BackHomeButton/BackHomeButton";
import { useEffect } from "react";

export const LogoutPage = () => {
  const loggedIn = sessionStorage.getItem("loggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate(homePath);
    }
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("username");
  });

  return (
    <>
      <Title title="You have logged out!" />
      <Title title="Hope to see you soon!" />
      <BackHomeButton />
    </>
  );
};
