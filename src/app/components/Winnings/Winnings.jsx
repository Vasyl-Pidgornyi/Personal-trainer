import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Winnings.scss";

export class Winnings extends Component {
  render() {
    return (
      <div className="winnings-cover" id="winnings">
        <div className="winnings-cover__content content">
          <h1 className="content__header">WINNINGS</h1>
          <div className="content__description">
            <div className="content__description_element">
              <div className="element__number">
                <span className="element__number_text">15</span>
              </div>
              <p className="element__description">
                15 YEARS OF BOXING EXPERIENCE
              </p>
            </div>
            <div className="content__description_element">
              <div className="element__number">
                <span className="element__number_text">3</span>
              </div>
              <p className="element__description">
                3 TIMES WBA INTERCONTINENTAL CRUISERWEIGHT
              </p>
            </div>
            <div className="content__description_element">
              <div className="element__number">
                <span className="element__number_text">4</span>
              </div>
              <p className="element__description">
                4 TIMES WBC INTERCONTINENTAL CRUISERWEIGHT
              </p>
            </div>
            <div className="content__description_element">
              <div className="element__number">
                <span className="element__number_text">2</span>
              </div>
              <p className="element__description">
                2 TIMES IBF INTERCONTINENTAL CRUISERWEIGHT
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
