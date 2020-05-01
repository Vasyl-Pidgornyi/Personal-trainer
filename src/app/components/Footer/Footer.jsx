import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.scss";

export function Footer() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [subject, setSubject] = useState("");
  var [message, setMessage] = useState("");
  var [nameError, setNameError] = useState(false);
  var [emailError, setEmailError] = useState(false);
  var [subjectError, setSubjectError] = useState(false);
  var [messageError, setMessageError] = useState(false);

  const messageSubmitHandler = (event) => {
    event.preventDefault();

    if (!String(name)) {
      setNameError(true);
    } else if (!String(email)) {
      setEmailError(true);
    } else if (!String(subject)) {
      setSubjectError(true);
    } else if (!String(message)) {
      setMessageError(true);
    } else {
      console.log([name, email, subject, message]);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setNameError(false);
      setEmailError(false);
      setSubjectError(false);
      setMessageError(false);
    }
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };
  return (
    <footer className="footer__container" id="contact">
      <div className="footer__content">
        <div className="footer__description description">
          <h1 className="description__header">CONTACT ME</h1>
          <p className="description__text">
            WRITE OR CALL ME IF YOU HAVE MORE QUESTIONS
          </p>
          <a
            href="mailto:INFO@MYSITE.COM"
            className="description__text footer-mail"
          >
            INFO@MYSITE.COM
          </a>
          <p className="description__text footer-phone">123-456-7890</p>
          <div className="description__socials">
            <a href="https://www.facebook.com" className="facebook"></a>
            <a href="https://twitter.com" className="twitter"></a>
            <a href="https://www.instagram.com" className="instagram"></a>
          </div>
        </div>
        <form className="footer__input-block" onSubmit={messageSubmitHandler}>
          <input
            onChange={nameChangeHandler}
            value={name}
            type="text"
            placeholder="Name"
            className={`footer__input-block_field ${
              nameError ? "inputError" : ""
            }`}
          />
          <input
            onChange={emailChangeHandler}
            value={email}
            type="email"
            placeholder="Email"
            className={`footer__input-block_field ${
              emailError ? "inputError" : ""
            }`}
          />
          <input
            onChange={subjectChangeHandler}
            value={subject}
            type="text"
            placeholder="Subject"
            className={`footer__input-block_field ${
              subjectError ? "inputError" : ""
            }`}
          />
          <textarea
            onChange={messageChangeHandler}
            value={message}
            placeholder="Message"
            className={`footer__input-block_field footer-message-field ${
              messageError ? "inputError" : ""
            }`}
          ></textarea>
          <button type="submit" className="footer__input-block_btn">
            Submit
          </button>
          <div className="footer__copyright">
            <Link
              to="/#home"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              className="footer__copyright_goHome"
            >
              ^
            </Link>
            <p className="footer__copyright_text">
              ©2023 BY JOEY DIXON. PROUDLY CREATED WITH WIX.COM
            </p>
          </div>
        </form>
      </div>
    </footer>
  );
}
