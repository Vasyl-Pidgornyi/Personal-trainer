import React, { useState } from "react";
import { BookOnlineItem } from "./Book-Online-Item/BookOnlineItem.jsx";
import "./BookOnline.scss";

export function BookOnline({ togglePopUpState }) {
  const data = [
    {
      id: 0,
      image: "first-image-booking",
      courseName: "BoxFit",
      description: `1Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. 
      A great description gets readers in the mood, and makes them more likely to go ahead and book.`,
      price: 60,
      duration: 1,
      weekDay: ["Mon,", " Wed"],
      courseId: "box-fit"
    },
    {
      id: 1,
      image: "second-image-booking",
      courseName: "Boxing for Beginners",
      description: `2Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. 
      A great description gets readers in the mood, and makes them more likely to go ahead and book.`,
      price: 70,
      duration: 2,
      weekDay: ["Tue,", " Thu"],
      courseId: "boxing-for-beginners"
    },
    {
      id: 2,
      image: "third-image-booking",
      courseName: "Boxing for Pros",
      description: `3Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. 
      A great description gets readers in the mood, and makes them more likely to go ahead and book.`,
      price: 80,
      duration: 1.5,
      weekDay: ["Fri,", " Sat"],
      courseId: "boxing-for-pros"
    }
  ];
  return (
    <div className="bookOnline__container" id="book-online">
      <div className="bookOnline__content">
        <h1 className="bookOnline__content_header">MY CLASSES</h1>
        <div className="bookOnlineItem__container">
          {data.map(i => (
            <BookOnlineItem key={i.id} item={i} showPopUp={togglePopUpState} />
          ))}
        </div>
      </div>
    </div>
  );
}
