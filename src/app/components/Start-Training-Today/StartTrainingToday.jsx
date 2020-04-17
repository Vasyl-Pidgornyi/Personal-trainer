import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StartTrainingToday.scss";

export class StartTrainingToday extends Component {
  render() {
    return (
      <div className="startTrainingToday-continer">
        <h1 className="startTrainingToday-continer__header">
          START TRAINING TODAY
        </h1>
        <Link to="/book-online" className="startTrainingToday-continer__btn">
          Book a Sassion
        </Link>
      </div>
    );
  }
}
