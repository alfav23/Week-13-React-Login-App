import React from "react";
import LoginButton from "./loginButton";
import PasswordInput from "./passwordInput";
import UsernameInput from "./usernameInput";

let e = React.createElement;
export default class LoginForm extends React.Component {
    render() {
        return e('div',
            {class: 'form text-center border border-solid border-secondary', id: "login-border"},
            e('h3', {class: "text-white text-center", id:"login-header"}, "Login"),
            e(UsernameInput),
            e(PasswordInput),
            e(LoginButton)
            )
    }
}