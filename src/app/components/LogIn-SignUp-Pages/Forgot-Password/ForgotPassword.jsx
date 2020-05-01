import React, { useState } from "react";
import "./ForgotPassword.scss";

export function ForgotPassword() {
  var [email, setEmail] = useState("");
  var [emailError, setEmailError] = useState(false);

  const forgotPasswordSubmitHandler = (event) => {
    event.preventDefault();

    if (!String(email)) {
      setEmailError(true);
    } else {
      console.log(email);
      setEmail("");
      setEmailError(false);
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="forgotPassword__container">
      <div className="forgotPassword__content">
        <h1 className="forgotPassword__content_header">Reset Password</h1>
        <p className="forgotPassword__content_description">
          Please enter your email address
        </p>
        <form
          className="forgotPassword__content_input-wrapper"
          onSubmit={forgotPasswordSubmitHandler}
        >
          <input
            onChange={emailChangeHandler}
            value={email}
            type="email"
            placeholder="Email"
            className={`forgotPassword__content_input ${
              emailError ? "forgotPasswordError" : ""
            }`}
          />
          <button className="forgotPassword__content_forgotPassword-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
