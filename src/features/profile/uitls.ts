import { User } from "../../users/types";

export const getUserData = (username: string) => {
  if (localStorage.getItem("users")) {
    const allUsers = localStorage.getItem("users");
    if (allUsers) {
      const parsedUsers: Array<User> = JSON.parse(allUsers);
      return parsedUsers.filter((user) => user.username === username)[0];
    }
  }
  alert("User not found!");
  return undefined;
};
