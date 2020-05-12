import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./GalleryDetailed.scss";
import { GalleryData } from "../GalleryData/GalleryData.jsx";

export function GalleryDetailed() {
  let location = useLocation();
  let history = useHistory();
  let [currentItem, setCurrentItem] = useState(location.state.item);

  let currentIndex = GalleryData.indexOf(currentItem);

  function previous() {
    currentIndex -= 1;
    setCurrentItem(GalleryData[currentIndex]);
  }

  function next() {
    currentIndex += 1;
    setCurrentItem(GalleryData[currentIndex]);
  }

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
            {currentItem.header}
          </h1>
          <p className="detailedContent__description_text">
            {currentItem.description}
          </p>
        </div>
        <div className="detailedContent__imageSlider">
          <div className="detailedContent__imageSection">
            <Button
              disabled={currentIndex === 0}
              className="detailedContent__imageSection_btn"
              onClick={() => previous()}
            >
              🢔
            </Button>
            <div
              className={`detailedContent__imageSection_photo ${currentItem.image}-detailed`}
            ></div>
            <Button
              className="detailedContent__imageSection_btn"
              disabled={currentIndex === GalleryData.length - 1}
              onClick={() => next()}
            >
              🢖
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
