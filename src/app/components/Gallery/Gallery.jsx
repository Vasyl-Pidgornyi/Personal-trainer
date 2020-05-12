import React from "react";
import { GalleryItem } from "./Gallery-Item/GalleryItem.jsx";
import "./Gallery.scss";
import { GalleryData } from "./GalleryData/GalleryData.jsx";

export function Gallery() {
  return (
    <div className="gallery-container" id="gallery">
      <div className="gallery__content grid-container">
        {GalleryData.map((i) => (
          <GalleryItem key={i.id} itemId={i.id} />
        ))}
      </div>
    </div>
  );
}
