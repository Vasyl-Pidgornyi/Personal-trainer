import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BeginnerOrPro.scss";

export class BeginnerOrPro extends Component {
  render() {
    return (
      <div className="beginnerOrPro-cover" id="training">
        {/* left side content start */}
        <div className="beginnerOrPro-cover__content left left-background">
          <div className="beginnerOrPro-cover__content_description-cover padding-right">
            <Link
              to="/beginner"
              className="beginnerOrPro-cover__content_description-cover_description"
            >
              beginners
            </Link>
            <Link
              to="/book-online"
              className="beginnerOrPro-cover__content_description-cover_image"
            ></Link>
          </div>
          <div className="beginnerOrPro-cover__content_background-transition" />
        </div>
        {/* left side content end */}
        {/* right side content start */}
        <div className="beginnerOrPro-cover__content right right-background">
          <div className="beginnerOrPro-cover__content_description-cover padding-left">
            <Link
              to="/book-online"
              className="beginnerOrPro-cover__content_description-cover_description"
            >
              professionals
            </Link>
            <Link
              to="/book-online"
              className="beginnerOrPro-cover__content_description-cover_image"
            ></Link>
          </div>
          <div className="beginnerOrPro-cover__content_background-transition" />
        </div>
        {/* right side content end */}
      </div>
    );
  }
}
