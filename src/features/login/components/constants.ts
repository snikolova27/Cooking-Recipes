export const LoginFields = [
    {
        name: "Username",
        validation: "^[a-zA-Z0-9]{1,15}$",
        type:"text",
        id: "username-field",
        required: true,

    },
    {
        name: "Password",
        type: "password",
        id: "password-field",
        required: true,
    }
]