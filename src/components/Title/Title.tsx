import { TitleProps } from "./types";

export const Title = ({ additionalTitle }: TitleProps) => {
  return (
    <>
      {additionalTitle && (
        <p style={{ fontSize: "48px", color: "white", fontFamily: "emoji" }}>
          {`Cooking Recipes ${additionalTitle}`}
        </p>
      )}
      {!additionalTitle && (
        <p style={{ fontSize: "48px", color: "white", fontFamily: "emoji" }}>
          Cooking Recipes
        </p>
      )}
    </>
  );
};
