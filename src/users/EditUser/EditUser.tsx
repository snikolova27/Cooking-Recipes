import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title/Title";
import { RegisterForm } from "../../features/register/components/RegisterForm";
import { homePath } from "../../constants";
import { User } from "../types";

export const EditUser = () => {
  const navigate = useNavigate();
  const currentUser: User = JSON.parse(
    localStorage.getItem("currentUser") ?? ""
  );
  if (!currentUser) {
    navigate(homePath);
    return <></>;
  }
  return (
    <>
      <Title title={`Edit user -  ${currentUser.name}`} />
      <RegisterForm  isEdit />
    </>
  );
};
