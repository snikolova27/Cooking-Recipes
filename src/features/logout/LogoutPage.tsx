import { useNavigate } from "react-router-dom";
import { homePath, loginPath } from "../../constants";
import { Title } from "../../components/Title/Title";
import { BackHomeButton } from "../../components/BackHomeButton/BackHomeButton";

export const LogoutPage = () => {
  const loggedIn = sessionStorage.getItem("loggedIn");
  const navigate = useNavigate();

  if (!loggedIn) {
    navigate(homePath);
    return <></>;
  } else {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("username");
    alert("You have logged out.");

    return (
      <>
        <Title title="Hope to see you soon!" />
        <BackHomeButton />
      </>
    );
  }
};
