import { UserPictureProps } from "./types";
import {
  femaleAvatarPicture,
  maleAvatarPicture,
  otherAvatarPicture,
} from "./constants";

export const UserPicture = ({ pictureUrl, gender }: UserPictureProps) => {
  if (!pictureUrl || pictureUrl === "") {
    switch (gender) {
      case "FEMALE": {
        return (
          <img
            src={femaleAvatarPicture}
            style={{
              width: "80%",
              height: "80%",
              maxWidth: "300px",
              border: "5px dashed pink",
              alignContent: "center",
            }}
            alt=""
          ></img>
        );
      }
      case "MALE": {
        return (
          <img
            src={maleAvatarPicture}
            style={{
              width: "80%",
              height: "80%",
              maxWidth: "300px",
              border: "5px dashed pink",
              alignContent: "center",
            }}
            alt=""
          ></img>
        );
      }
      case "OTHER": {
        return (
          <img
            src={otherAvatarPicture}
            style={{
              width: "80%",
              height: "80%",
              maxWidth: "300px",
              border: "5px dashed pink",
              alignContent: "center",
            }}
            alt=""
          ></img>
        );
      }
    }
  }

  return (
    <img
      src={pictureUrl}
      style={{
        width: "80%",
        height: "80%",
        maxWidth: "300px",
        border: "5px dashed pink",
        alignContent: "center",
      }}
      alt=""
    ></img>
  );
};
