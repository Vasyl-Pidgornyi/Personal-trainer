import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.scss";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer__container" id="contact">
        <div className="footer__content">
          <div className="footer__description description">
            <h1 className="description__header">CONTACT ME</h1>
            <p className="description__text">
              WRITE OR CALL ME IF YOU HAVE MORE QUESTIONS
            </p>
            <a href="mailto:INFO@MYSITE.COM" className="description__text">
              INFO@MYSITE.COM
            </a>
            <p className="description__text">123-456-7890</p>
            <div>
              <Link to="/facebook" className="facebook"></Link>
              <Link to="/twitter" className="twitter"></Link>
              <Link to="/instagram" className="instagram"></Link>
            </div>
          </div>
          <div className="footer__input-block input-block">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
            <div className="input-block__footer">
              <Link to="/#home">Go Home</Link>
              <p>©2023 BY JOEY DIXON. PROUDLY CREATED WITH WIX.COM</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
