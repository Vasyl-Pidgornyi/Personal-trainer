import React, { useState } from "react";
import "./SignUp.scss";
import { EmailSignUp } from "./EmailSignUp.jsx";
import { SocialsSignUp } from "./SocialsSignUp.jsx";
import { authenticationPages } from "../constants.jsx";

export function SignUp({ changeSignUp }) {
  var [showEmailSignUp, setShowEmailSignUp] = useState(false);
  const signUpWithEmail = () => {
    setShowEmailSignUp(true);
  };
  let component;
  if (showEmailSignUp) {
    component = <EmailSignUp />;
  } else {
    component = <SocialsSignUp onSignUpWithEmailClick={signUpWithEmail} />;
  }
  return (
    <div className="signUp__container">
      <div className="signUp__content">
        <h1 className="signUp__content_header">Sign Up</h1>
        <p className="signUp__content_info-section">
          Already a member?{" "}
          <button
            onClick={() => changeSignUp(authenticationPages.Login)}
            className="signUp__content_info-section-link"
          >
            Log In
          </button>
        </p>
        <div className="signUp__content_socialsOrEmail">{component}</div>
      </div>
    </div>
  );
}
