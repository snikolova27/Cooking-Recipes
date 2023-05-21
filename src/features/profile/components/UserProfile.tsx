import { useEffect } from "react";
import { RecipeField } from "../../../recipes/components/RecipeField/RecipeField";
import { User } from "../../../users/types";
import { UserButtons } from "./UserButtons/UserButtons";
import { UserName } from "./UserName/UserName";
import { UserPicture } from "./UserPicture/UserPicture";
import { useNavigate } from "react-router-dom";
import { homePath } from "../../../constants";

export const UserProfile = ({
  id,
  username,
  name,
  password,
  gender,
  role,
  picture,
  description,
  accountStatus,
  registerDate,
  lastUpdatedDate,
}: User) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate(homePath);
    }
  });
  if(!id){
    return <></>
  }
  return (
    <div
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "4rem",
        maxWidth: "500px",
        margin: "auto",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      <UserName name={name} />

      <UserPicture pictureUrl={picture} gender={gender} />
      <RecipeField name="Username: " value={username} />
      <RecipeField name="Account status: " value={accountStatus} />
      <RecipeField name="Gender: " value={gender} />
      <RecipeField name="Role: " value={role} />
      <RecipeField name="User description: " value={description} />
      <RecipeField name="Registered on: " value={registerDate.toString()} />
      <RecipeField
        name="Last updated on: "
        value={lastUpdatedDate.toString()}
      />
      <UserButtons id={id} />
    </div>
  );
};
