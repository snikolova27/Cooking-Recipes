import { useEffect } from "react";
import { User } from "../types";
import { Title } from "../../components/Title/Title";
import { UserProfile } from "../../features/profile/components/UserProfile";

export const UsersPage = () => {
  useEffect(() => {
    fetch("http://localhost:3005/users")
      .then((res) => res.json())
      .then((res) => localStorage.setItem("users", JSON.stringify(res)))
      .catch((error) => console.log("Error encountered: ", error));
  });

  const users = localStorage.getItem("users");
  if (!users) {
    return (
      <p style={{ fontSize: "48px", color: "white", fontFamily: "emoji" }}>
        "No users found. :("
      </p>
    );
  }
  const parsedUsers: Array<User> = JSON.parse(users);

  return (
    <>
      <Title title="Cooking Recipes Users" />
      {parsedUsers.map((user) => (
        <UserProfile
          id={user.id}
          username={user.username}
          name={user.name}
          password={user.password}
          gender={user.gender}
          role={user.role}
          picture={user.picture}
          description={user.description}
          accountStatus={user.accountStatus}
          registerDate={user.registerDate}
          lastUpdatedDate={user.lastUpdatedDate}
        />
      ))}
    </>
  );
};
