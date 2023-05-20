import { Title } from "../../../components/Title/Title";
import {
  RegistrationFields,
  registerGenderField,
  registerNameField,
  registerPassField,
  registerRoleField,
  registerShortDesc,
  registerUrlField,
  registerUsernameField,
  registrationFormName,
} from "./constants";
import { Form } from "../../../components/Form/Form";
import { BackHomeButton } from "../../../components/BackHomeButton/BackHomeButton";
import { getInputValue, getSelectValue } from "../../../utils";
import { Gender, Role, User } from "../../../users/types";
import { recipesPath } from "../../../constants";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const passRegex = new RegExp("(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

  const handleSubmit = () => {
    const desc = getInputValue(registerShortDesc);
    const username = getInputValue(registerUsernameField);
    const password = getInputValue(registerPassField);

    if (
      desc.length <= 512 &&
      passRegex.test(password) &&
      username.length < 15
    ) {
      const name = getInputValue(registerNameField);
      const pictureUrl = getInputValue(registerUrlField);
      const gender = getSelectValue(registerGenderField);
      const role = getSelectValue(registerRoleField);

      const userData: User = {
        name: name,
        username: username,
        password: password,
        gender: gender as Gender,
        picture: pictureUrl,
        description: desc,
        accountStatus: "ACTIVE",
        role: role as Role,
        registerDate: new Date(),
        lastUpdatedDate: new Date(),
      };
      console.log("User data before sent: ", userData);

      fetch("http://localhost:3005/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => {
          res.json();
          if (res.status === 201) {
            alert("User created! :)");
            sessionStorage.setItem("loggedIn", "true")
            sessionStorage.setItem("username", username)
          }
          console.log(res);
        })
        .catch((error) => console.log("Error: ", error));

      navigate(recipesPath);
    } else {
      alert("Validation failed. Try again please.");
    }
  };
  return (
    <>
      <Title additionalTitle="Registration" />
      <Form
        id={registrationFormName}
        fields={RegistrationFields}
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="gender-select"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          Gender
        </label>
        <select
          name="gender-select"
          id={registerGenderField}
          style={{ width: "100%" }}
          form={registrationFormName}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <label
          htmlFor="role-select"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          Role
        </label>
        <select
          name="role-select"
          id={registerRoleField}
          style={{ width: "100%" }}
          form={registrationFormName}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <br></br>
        <label
          htmlFor="short-desc"
          style={{ alignSelf: "baseline", fontSize: "16px" }}
        >
          Short description
        </label>
        <textarea
          rows={5}
          cols={50}
          name="short-desc"
          id={registerShortDesc}
          form={registrationFormName}
          defaultValue="Enter your short description here..."
        ></textarea>
        <br></br>
      </Form>
      <br></br>
      <BackHomeButton />
    </>
  );
};

//,
