import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.scss";
import { SocialsLogIn } from "./SocialsLogIn.jsx";
import { EmailLogIn } from "./EmailLogIn.jsx";
import { authenticationPages } from "../constants.jsx";

export function LogIn({ changeLogin }) {
  var [showEmailLogIn, setShowEmailLogIn] = useState(false);
  const logInWithEmail = () => {
    setShowEmailLogIn(true);
  };
  let component;
  if (showEmailLogIn) {
    component = <EmailLogIn onForgetPasswordClick={changeLogin} />;
  } else {
    component = <SocialsLogIn onLogInWithEmailClick={logInWithEmail} />;
  }
  return (
    <div className="logIn__container">
      <div className="logIn__content">
        <h1 className="logIn__content_header">Log In</h1>
        <p className="logIn__content_info-section">
          New to this site?{" "}
          <button
            onClick={() => changeLogin(authenticationPages.SignUp)}
            className="logIn__content_info-section-btn"
          >
            Sign Up
          </button>
        </p>
        <div className="logIn__content_socialsOrEmail">{component}</div>
      </div>
    </div>
  );
}
