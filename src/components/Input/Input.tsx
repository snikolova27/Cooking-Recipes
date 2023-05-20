import { InputProps } from "./types";

export const Input = ({ id, type, required, validation }: InputProps) => {
  return (
    <>
      <input
        id={id}
        type={type}
        required={required}
        pattern={validation}
        style={{width: "100%"}}
      ></input>
    </>
  );
};
