import React, { Component } from "react";
import { GalleryItem } from "./Gallery-Item/GalleryItem.jsx";
import "./Gallery.scss";

export class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container" id="gallery">
        <div className="gallery__content grid-container">
          <GalleryItem
            image="first-image"
            header="I'm an image title1"
            description="1Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
          />
          <GalleryItem
            image="second-image"
            header="I'm an image title2"
            description="2Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
          />
          <GalleryItem
            image="third-image"
            header="I'm an image title3"
            description="3Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
          />
          <GalleryItem
            image="forth-image"
            header="I'm an image title4"
            description="4Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
          />
          <GalleryItem
            image="fifth-image"
            header="I'm an image title5"
            description="5Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
          />
          <GalleryItem
            image="sixth-image"
            header="I'm an image title6"
            description="6Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
          />
        </div>
      </div>
    );
  }
}
