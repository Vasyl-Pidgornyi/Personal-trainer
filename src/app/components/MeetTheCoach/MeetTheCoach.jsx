import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MeetTheCoach.scss";

export class MeetTheCoach extends Component {
  render() {
    return (
      <div className="meetTheCoach-cover">
        <div className="meetTheCoach-cover__description">
          <h1 className="meetTheCoach-cover__description_header">
            MEET THE COACH
          </h1>
          <p className="meetTheCoach-cover__description_messege">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>

          <p className="meetTheCoach-cover__description_messege">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <div className="meetTheCoach-cover__description_socials">
            <Link
              to="/facebook"
              className="meetTheCoach-cover__description_socials_icon facebook"
            ></Link>
            <Link
              to="/twitter"
              className="meetTheCoach-cover__description_socials_icon twitter"
            ></Link>
            <Link
              to="/instagram"
              className="meetTheCoach-cover__description_socials_icon instagram"
            ></Link>
          </div>
        </div>
      </div>
    );
  }
}
