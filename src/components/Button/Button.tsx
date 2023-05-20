import { ButtonProps } from "./types";

export const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <input
      type="submit"
      value={value}
      onClick={onClick}
      style={{
        color: "#f50aab",
        fontWeight: "bold",
        backgroundColor: "#f2bac9",
        borderRadius: "3%",
        border: "1px solid #f50aab",
        width: "10rem",
        height: "2rem",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "16px",
      }}
    ></input>
  );
};
