import { useNavigate } from "react-router-dom"

export const BackHomeButton = () => {
    const navigate = useNavigate()
    return (
        <input
        type="submit"
        value="Back home"
        onClick={() => navigate("/")}
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
    )
}