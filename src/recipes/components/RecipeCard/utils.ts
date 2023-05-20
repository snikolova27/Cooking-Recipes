import { User } from "../../../users/types";

export const getAuthorName = (id: string) => {
  if (localStorage.getItem("users")) {
    const allUsers = localStorage.getItem("users");
    if (allUsers) {
      const parsedUsers: Array<User> = JSON.parse(allUsers);
      return parsedUsers.filter((user) => user.id === id)[0].name;
    }
  }

  return "";
}
