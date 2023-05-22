export const registrationFormName = "registration-form"
export const registerNameField = "register-name-field"
export const registerUsernameField ="register-username-field"
export const registerPassField ="register-password-field"
export const registerUrlField = "register-picture-field"
export const registerGenderField = "register-gender-select"
export const registerRoleField = "register-role-select"
export const registerShortDesc = "register-short-desc"
export const registerStatusField = "register-status-field"

export const RegistrationFields = [
  {
    name: "Name",
    type: "text",
    id: registerNameField,
    required: true,
  },
  {
    name: "Username",
    validation: "^[a-zA-Z0-9]{1,15}$",
    type: "text",
    id: registerUsernameField ,
    required: true,
  },
  {
    name: "Password",
    type: "password",
    validation: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$",
    id:registerPassField,
    required: true,
  },
  {
    name: "Picture url",
    type: "text",
    id: registerUrlField,
    required: false,
  }
]

