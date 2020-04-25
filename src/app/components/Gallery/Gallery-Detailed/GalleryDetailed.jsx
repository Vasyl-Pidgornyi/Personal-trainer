import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./GalleryDetailed.scss";

export function GalleryDetailed() {
  let location = useLocation();
  let history = useHistory();
  return (
    <div className="galleryDetailed__container">
      <div className="galleryDetailed__content detailedContent">
        <div className="detailedContent__header">
          <Button
            className="detailedContent__header_btn"
            onClick={() => {
              history.location.hash = history.goBack();
            }}
          >
            ╳
          </Button>
        </div>
        <div className="detailedContent__description">
          <h1 className="detailedContent__description_header-text">
            {location.state.info.header}
          </h1>
          <p className="detailedContent__description_text">
            {location.state.info.description}
          </p>
        </div>
        <div className="detailedContent__imageSlider">
          <div className="detailedContent__imageSection">
            <Button className="detailedContent__imageSection_btn">🢔</Button>
            <div
              className={`detailedContent__imageSection_photo ${location.state.info.image}-detailed`}
            ></div>
            <Button className="detailedContent__imageSection_btn">🢖</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
