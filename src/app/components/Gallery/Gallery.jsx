import React from "react";
import { GalleryItem } from "./Gallery-Item/GalleryItem.jsx";
import "./Gallery.scss";

export function Gallery() {
  const data = [
    {
      id: 0,
      image: "first-image",
      header: "I'm an image title1",
      description: `1Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.`
    },
    {
      id: 1,
      image: "second-image",
      header: "I'm an image title2",
      description: `2Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.`
    },
    {
      id: 2,
      image: "third-image",
      header: "I'm an image title3",
      description: `3Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.`
    },
    {
      id: 3,
      image: "forth-image",
      header: "I'm an image title4",
      description: `4Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.`
    },
    {
      id: 4,
      image: "fifth-image",
      header: "I'm an image title5",
      description: `5Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.`
    },
    {
      id: 5,
      image: "sixth-image",
      header: "I'm an image title6",
      description: `6Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.`
    }
  ];

  return (
    <div className="gallery-container" id="gallery">
      <div className="gallery__content grid-container">
        {data.map(i => (
          <GalleryItem
            key={i.id}
            image={i.image}
            header={i.header}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
}
