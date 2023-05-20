import { TitleProps } from "./types";

export const Title = ({ title }: TitleProps) => {
  return (
    <p style={{ fontSize: "48px", color: "white", fontFamily: "emoji" }}>
      {title}
    </p>
  );
};
