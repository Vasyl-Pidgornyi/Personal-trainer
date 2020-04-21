import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./GalleryDetailed.scss";

export function GalleryDetailed(props) {
  let location = useLocation();
  let history = useHistory();
  console.log(location);
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
            Close page
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
        <div className="exper">
          <div className="detailedContent__imageSection imageSection">
            <button>left</button>
            <div
              className={`imageSection ${location.state.info.image}-detailed`}
            ></div>
            <button>right</button>
          </div>
        </div>
      </div>
    </div>
  );
}
