import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GalleryItem } from "./Gallery-Item/GalleryItem.jsx";
import "./Gallery.scss";

export class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container">
        <div div className="gallery__content grid-container">
          <GalleryItem
            image="first-image"
            header="I'm an image title"
            description="Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
            link="Gallery-Detailed"
          />
          <GalleryItem
            image="second-image"
            header="I'm an image title"
            description="Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
            link="Gallery-Detailed"
          />
          <GalleryItem
            image="third-image"
            header="I'm an image title"
            description="Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
            link="Gallery-Detailed"
          />
          <GalleryItem
            image="forth-image"
            header="I'm an image title"
            description="Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
            link="Gallery-Detailed"
          />
          <GalleryItem
            image="fifth-image"
            header="I'm an image title"
            description="Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
            link="Gallery-Detailed"
          />
          <GalleryItem
            image="sixth-image"
            header="I'm an image title"
            description="Describe your image here. Use catchy text to tell people the story behind the photo. 
            Go to “Manage Media” to add your content."
            link="Gallery-Detailed"
          />
        </div>
      </div>
    );
  }
}
