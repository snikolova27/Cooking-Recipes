import { useNavigate } from "react-router-dom";
import {  UserButtonsProps } from "./types";
import { getUserById } from "../../uitls";
import { userProfilePath, usersPath } from "../../../../constants";
import { Button } from "../../../../components/Button/Button";


export const UserButtons = ({ id }: UserButtonsProps) => {
  const navigate = useNavigate();
  const userInfo = getUserById(id);

  const onEdit = () => {
    const user = getUserById(id);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate(userProfilePath(id));
    }
  };
  const onDelete = () => {
    fetch(`http://localhost:3005/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetch("http://localhost:3005/users")
          .then((res) => res.json())
          .then((res) => localStorage.setItem("users", JSON.stringify(res)))
          .catch((error) => console.log("Error encountered: ", error));
      });

    alert(`User ${userInfo?.name} deleted.`);
    navigate(usersPath);
  };
  return (
    <div>
      <Button value=" Edit" onClick={onEdit} />
      <Button value=" Delete" onClick={onDelete} />
    </div>
  );
};
