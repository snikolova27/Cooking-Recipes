import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";

export const BackHomeButton = () => {
  const navigate = useNavigate();
  return <Button value="Back home" onClick={() => navigate("/")} />;
};
