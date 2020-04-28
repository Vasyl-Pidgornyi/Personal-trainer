import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./BookOnlineDetailed.scss";

export function BookOnlineDetailed() {
  let location = useLocation();
  let history = useHistory();
  return (
    <div className="bookOnlineDetailed__container">
      <Button
        onClick={() => {
          history.location.hash = history.goBack();
        }}
        className="bookOnlineDetailed__goBack-btn"
      >
        ⮜ Back
      </Button>
      <div className="bookOnlineDetailed__content">
        <h1 className="bookOnlineDetailed__content_header">
          {location.state.item.courseName}
        </h1>
        <span className="bookOnlineDetailed__content_hoursAndPrice">{`${location.state.item.duration} hr | ${location.state.item.price}$`}</span>
        <button
          className="bookOnlineDetailed__content_btn"
          onClick={location.state.showPopUp}
        >
          Book Now
        </button>
        <div
          className={`bookOnlineDetailed__content_image ${location.state.item.image}`}
        ></div>
        <p className="bookOnlineDetailed__content_description">
          {location.state.item.description}
        </p>
        <div className="bookOnlineDetailed__content_detailedTextBlock bookOnlineDetailed__detailedTextBlock">
          <div className="bookOnlineDetailed__detailedTextBlock_hederCover">
            <p className="bookOnlineDetailed__detailedTextBlock_headerText">
              Book Online
            </p>
          </div>
          <div className="bookOnlineDetailed__detailedTextBlock_descriptionCover">
            <p className="bookOnlineDetailed__detailedTextBlock_descriptionText">
              {location.state.item.courseName}
            </p>
            <p className="bookOnlineDetailed__detailedTextBlock_descriptionText">{`${location.state.item.duration} hr | $${location.state.item.price}`}</p>
            <p className="bookOnlineDetailed__detailedTextBlock_descriptionText">
              {location.state.item.weekDay}
            </p>
          </div>
          <button
            className="bookOnlineDetailed__content_btn"
            onClick={location.state.showPopUp}
          >
            Book Now
          </button>
          <p className="bookOnlineDetailed__detailedTextBlock_locationContact">
            Location & Contact Details
          </p>
          <p className="bookOnlineDetailed__detailedTextBlock_eMail">
            Email: ilyaillych@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
