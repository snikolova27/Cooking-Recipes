import { UserNameProps } from "./types";

export const UserName = ({name} : UserNameProps) => {
    return (
        <p
        style={{
          fontSize: "20px",
          color: "white",
          fontFamily: "emoji",
          fontStyle: "italic",
        }}
      >{name}</p>
    )
}