import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import "./GalleryItem.scss";

export function GalleryItem({ item }) {
  var [showBox, setShowBox] = useState(false);
  var [enableLink, setEnableLink] = useState(false);

  const handleBoxToggle = () => {
    if (isBrowser) {
      setShowBox(!showBox);
      setEnableLink(true);
    }
  };

  return (
    <div className="col-4 col-xs-12 gallery__item">
      <div className={`gallery__item_cover ${item.image}`}>
        <div
          onMouseEnter={handleBoxToggle}
          onMouseLeave={handleBoxToggle}
          onClickCapture={(event) => {
            if (isMobile) {
              setShowBox(!showBox);
              if (!enableLink) {
                event.preventDefault();
              }
              setEnableLink(true);
            }
          }}
          className={`gallery__item_content ${showBox ? "show" : ""}`}
        >
          <div className="gallery__item_description gallery__description">
            <h1 className="gallery__description_header">{item.header}</h1>
            <p className="gallery__description_text">{item.description}</p>
            {enableLink ? (
              <Link
                onClick={() => {
                  setShowBox(false);
                  setEnableLink(false);
                }}
                className="gallery__item_link"
                to={{
                  pathname: "/Gallery-detailed",
                  state: {
                    info: item,
                  },
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
