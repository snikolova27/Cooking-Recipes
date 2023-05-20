import { useNavigate } from "react-router-dom";
import { getUserData } from "../uitls";

export const UserProfile = () => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");
  if (!username) {
    alert("No user logged in.");
    navigate("/");
    return <></>
  }
  const userData = getUserData(username)

  return(
    <div>
        {userData?.gender}
    </div>
  )
};
