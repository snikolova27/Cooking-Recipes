import { LinkProps } from "./types";

export const Link = ({ whereTo, name }: LinkProps) => {
  return (
    <a
    href={whereTo}
      style={{
        padding: "10px 15px",
        textTransform: "uppercase",
        textAlign: "center",
        display: "block",
      }}
    > {name}</a>
  );
};
