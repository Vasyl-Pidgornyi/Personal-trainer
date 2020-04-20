import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GalleryDetailed.scss";

export class GalleryDetailed extends Component {
  render() {
    return (
      <div className="container5">
        <div className="content5">
          <div className="header"></div>
          <div className="description"></div>
          <div className="image-section5">
            <button>left</button>
            <img
              src="../../../../assets/images/gallery/first.webp"
              alt=""
              className="image5"
            />
            <button>right</button>
          </div>
        </div>
      </div>
    );
  }
}
