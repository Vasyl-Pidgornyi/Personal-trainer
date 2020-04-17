import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TrainerBooking.scss";

export class TrainerBooking extends Component {
  render() {
    return (
      <div className="trainerBooking-continer">
        <h1 className="trainerBooking-continer__header">JOEY DIXON</h1>
        <p className="trainerBooking-continer__description">
          training with a world champion
        </p>
        <Link to="/book-online" className="trainerBooking-continer__btn">
          Book Now
        </Link>
      </div>
    );
  }
}
