import React from "react";
import { Link } from "react-router-dom";
import "./BookOnlineItem.scss";

export function BookOnlineItem(props) {
  return (
    <div className="bookOnlineItem__content">
      <Link
        to={{
          pathname: `/book-online-detailed/${props.item.courseId}`,
          state: {
            item: props.item
          }
        }}
        className="bookOnlineItem__content_image-container"
      >
        <div
          className={`bookOnlineItem__content_image ${props.item.image}`}
        ></div>
      </Link>
      <Link
        to={{
          pathname: `/book-online-detailed/${props.item.courseId}`,
          state: {
            item: props.item
          }
        }}
        className="bookOnlineItem__content_header"
      >
        {props.item.courseName}
      </Link>
      <p className="bookOnlineItem__content_priceAndHours">{`${props.item.duration} hr`}</p>
      <p className="bookOnlineItem__content_priceAndHours">{`$${props.item.price}`}</p>
      <button className="bookOnlineItem__content_btn">Book Now</button>
    </div>
  );
}
