import React, { useState } from "react";
import "./EmailLogin.scss";
import { authenticationPages } from "../constants.jsx";

export function EmailLogIn({ onForgetPasswordClick }) {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [emailError, setEmailError] = useState(false);
  var [passwordError, setPasswordError] = useState(false);

  const logInSubmitHandler = (event) => {
    event.preventDefault();

    if (!String(email)) {
      setEmailError(true);
    } else if (!String(password)) {
      setPasswordError(true);
    } else {
      console.log([email, password]);
      setEmail("");
      setPassword("");
      setEmailError(false);
      setPasswordError(false);
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="emailLogIn__container">
      <form
        className="emailLogIn__content_input-wrapper"
        onSubmit={logInSubmitHandler}
      >
        <input
          onChange={emailChangeHandler}
          value={email}
          type="email"
          placeholder="Email"
          className={`emailLogIn__content_input ${
            emailError ? "errorLogInInput" : ""
          }`}
        />
        <input
          onChange={passwordChangeHandler}
          value={password}
          type="password"
          placeholder="Password"
          className={`emailLogIn__content_input ${
            passwordError ? "errorLogInInput" : ""
          }`}
        />
        <div className="emailLogIn__content_forgotPasswod-wrapper">
          <button
            onClick={() =>
              onForgetPasswordClick(authenticationPages.ForgotPassword)
            }
            className="emailLogIn__content_forgotPasswod-btn"
          >
            Forgot password?
          </button>
        </div>
        <div className="emailLogIn__content_button-cover">
          <button type="submit" className="emailLogIn__content_logIn-btn">
            Log In
          </button>
        </div>
      </form>
      <div className="emailLogIn__content_socials">
        <a
          href="http://facebook.com"
          className="emailLogIn__content_socials_link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            width="26px"
            height="26px"
          >
            <image
              x="0px"
              y="0px"
              width="26px"
              height="26px"
              href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAbFBMVEU0SHY7WJY7WZhEYZ1sg7KClb2Xp8iPoMSHmcCAlLx5jrlzibVMZ6GRosXS2ej////m6vJUbqVAXZqjsc9heqz6+vyisM7g5e/c4ex3jLidrMvW3OrO1eX3+PvZ3+u7xtuKnMJ4jLhlfa5SbaS09N/TAAAAAWJLR0QPGLoA2QAAAAd0SU1FB+QEHAwiFW075nwAAACpSURBVEjH7dfJDsIwDEXRpJiWsS4tY5jh//+RRLRZIFDqBxsk32WiI2+8SIwxNhNnjU/OQtC850zM+ZEK2wY0zPNiNJ5MSQBn85JjAkgVMwIXzBCsSxA2jMHlCoRrBuEmim2zo1BPGJ17vekJ9xkIDwp/AKktwu4gBR2/74jCEwrPKHQovKDwisIbCu/oAtQp2PUHS65QocIvoMWgTTzmP8LwDbBy6Oc9AFlgOhKJfs6CAAAAAElFTkSuQmCC"
            />
          </svg>
        </a>
        <a
          href="http://google.com"
          className="emailLogIn__content_socials_link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            width="28px"
            height="28px"
          >
            <image
              x="0px"
              y="0px"
              width="28px"
              height="28px"
              href="data:img/png;base64,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"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
