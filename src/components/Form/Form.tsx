import { Input } from "../Input/Input";
import { FormProps } from "./types";

export const Form = ({ id, fields, onSubmit, children }: FormProps) => {
  return (
    <form
      id={id}
      action="#"
      onSubmit={() => {}}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {fields.map((field) => (
        <>
          <label
            htmlFor={field.id}
            style={{ alignSelf: "baseline", fontSize: "16px" }}
          >
            {field.name}
          </label>

          <Input
            id={field.id}
            type={field.type}
            required={field.required}
            validation={field.validation}
          />
          <br></br>
        </>
      ))}
      {children}

      <input
        type="submit"
        value="Submit"
        onClick={onSubmit}
        style={{
          color: "#f50aab",
          fontWeight: "bold",
          backgroundColor: "#f2bac9",
          borderRadius: "3%",
          border: "1px solid #f50aab",
          width: "100%",
          height: "2rem",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "16px",
        }}
      ></input>
    </form>
  );
};
