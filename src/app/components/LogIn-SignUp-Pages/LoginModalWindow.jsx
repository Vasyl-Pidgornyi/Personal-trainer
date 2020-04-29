import React from "react";
import { LogIn } from "./LogIn/LogIn.jsx";
import { SignUp } from "./SignUp/SignUp.jsx";
import { ForgotPassword } from "./Forgot-Password/ForgotPassword.jsx";
import { authenticationPages } from "./constants.jsx";
import "./LoginModalWindow.scss";

export function LoginModalWindow({ selectedPage, changeLoginWindow }) {
  if (!selectedPage) {
    return null;
  } else {
    let loginPageComponent;
    switch (selectedPage) {
      case authenticationPages.Login:
        loginPageComponent = <LogIn changeLogin={changeLoginWindow} />;
        break;
      case authenticationPages.SignUp:
        loginPageComponent = <SignUp changeSignUp={changeLoginWindow} />;
        break;
      case authenticationPages.ForgotPassword:
        loginPageComponent = <ForgotPassword />;
        break;
      default:
        loginPageComponent = null;
    }
    return (
      <div className="loginModalWindow__container">
        <button
          className="loginModalWindow__container_close-button"
          onClick={() => changeLoginWindow(null)}
        >
          ╳
        </button>
        {loginPageComponent}
      </div>
    );
  }
}
