import React from "react";
import "./PopUp.scss";

export function PopUp({ show, closePopUp }) {
  if (!show) {
    return null;
  }
  return (
    <div className="popUp__container">
      <div className="popUp__content">
        <div className="popUp__container_close-btn-container">
          <button
            className="popUp__container_close-button"
            onClick={closePopUp}
          >
            ╳
          </button>
        </div>
        <p className="popUp__content_message">
          Sorry, this service is not yet available for online bookings. Please
          contact us for more information.
        </p>
        <button className="popUp__content_gotIt-button" onClick={closePopUp}>
          Got It
        </button>
      </div>
    </div>
  );
}
