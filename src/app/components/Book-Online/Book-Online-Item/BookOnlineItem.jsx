import React from "react";
import { Link } from "react-router-dom";
import "./BookOnlineItem.scss";

export function BookOnlineItem({ item, showPopUp }) {
  return (
    <div className="bookOnlineItem__content">
      <Link
        to={{
          pathname: `/book-online-detailed/${item.courseId}`,
          state: {
            item: item,
            showPopUp: showPopUp
          }
        }}
        className="bookOnlineItem__content_image-container"
      >
        <div className={`bookOnlineItem__content_image ${item.image}`}></div>
      </Link>
      <Link
        to={{
          pathname: `/book-online-detailed/${item.courseId}`,
          state: {
            item: item,
            showPopUp: showPopUp
          }
        }}
        className="bookOnlineItem__content_header"
      >
        {item.courseName}
      </Link>
      <p className="bookOnlineItem__content_priceAndHours">{`${item.duration} hr`}</p>
      <p className="bookOnlineItem__content_priceAndHours">{`$${item.price}`}</p>
      <button className="bookOnlineItem__content_btn" onClick={showPopUp}>
        Book Now
      </button>
    </div>
  );
}
