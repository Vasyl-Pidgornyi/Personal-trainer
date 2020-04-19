import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TheStudio.scss";

export class TheStudio extends Component {
  render() {
    return (
      <div className="theStudio-cover">
        <div className="theStudio-cover__description">
          <h1 className="theStudio-cover__description_main-header">
            THE STUDIO
          </h1>
          <p className="theStudio-cover__description_text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
          <h3 className="theStudio-cover__description_sub-header">ADDRESS</h3>
          <h3 className="theStudio-cover__description_sub-header-description">
            500 TERRY FRANCOIS
          </h3>
          <h3 className="theStudio-cover__description_sub-header-description-second">
            ST. SF, CA 94158
          </h3>
          <h3 className="theStudio-cover__description_sub-header">HOURS</h3>
          <h3 className="theStudio-cover__description_sub-header-description">
            MONDAY - FRIDAY
          </h3>
          <h3 className="theStudio-cover__description_sub-header-description-second">
            6:30AM - 7:00PM
          </h3>
        </div>
      </div>
    );
  }
}
