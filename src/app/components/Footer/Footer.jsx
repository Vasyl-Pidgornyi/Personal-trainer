import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.scss";
import facebookLogo from "../../../assets/images/media/facebook.webp";

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
          <div className="footer__input-block">
            <input
              type="text"
              placeholder="Name"
              className="footer__input-block_field"
            />
            <input
              type="email"
              placeholder="Email"
              className="footer__input-block_field"
            />
            <input
              type="text"
              placeholder="Subject"
              className="footer__input-block_field"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="footer__input-block_field footer-message-field"
            ></textarea>
            <button className="footer__input-block_btn">Submit</button>
            <div className="footer__copyright">
              <Link
                to="/#home"
                scroll={el => el.scrollIntoView({ behavior: "smooth" })}
                className="footer__copyright_goHome"
              >
                ^
              </Link>
              <p className="footer__copyright_text">
                ©2023 BY JOEY DIXON. PROUDLY CREATED WITH WIX.COM
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
