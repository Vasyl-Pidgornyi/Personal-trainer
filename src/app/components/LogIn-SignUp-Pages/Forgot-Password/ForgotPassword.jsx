import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./ForgotPassword.scss";

export function ForgotPassword() {
  let history = useHistory();
  return (
    <div className="forgotPassword__container">
      <div className="forgotPassword__content">
        <h1 className="forgotPassword__content_header">Reset Password</h1>
        <p className="forgotPassword__content_description">
          Please enter your email address
        </p>
        <div className="forgotPassword__content_input-wrapper">
          <input
            type="email"
            placeholder="Email"
            className="forgotPassword__content_input"
          />
        </div>
        <div className="forgotPassword__content_button-cover">
          <button className="forgotPassword__content_logInAndSignUp-btn">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
