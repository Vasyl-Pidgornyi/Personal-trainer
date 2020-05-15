import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PlansItem.scss";
import { MobileView } from "react-device-detect";

export function PlansItem(props) {
  let [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  return (
    <div className="plansItem__content">
      <div
        className={`plansItem__content_bestValueBlock ${
          props.item.bestValue ? "" : "hide-bestValueBlock"
        }`}
      >
        Best Value
      </div>

      <div
        className={`plansItem__content-wrapper ${
          props.item.bestValue ? "bestValue-upperBlock" : ""
        }`}
      >
        <h1 className="plansItem__content_header">{props.item.membership}</h1>
        <div className="plansItem__content_priceing">
          <span className="plansItem__content_priceing_dollar-sign">$</span>{" "}
          <p className="plansItem__content_price">{props.item.price}</p>
        </div>
        <p
          className={`plansItem__content_monthlyPay ${
            props.item.monthlyPayShow ? "" : "transparentText"
          }`}
        >
          {props.item.monthlyPay}
        </p>
        <p className="plansItem__content_planForWho">{props.item.planForWho}</p>
        <p
          className={`plansItem__content_validationTerm ${
            props.item.validationHidden ? "transparentText" : ""
          }`}
        >
          {props.item.validationTerm}
        </p>
        <Link
          to={{
            pathname: `/Payment/${props.item.planId}`,
            state: {
              item: props.item,
            },
          }}
          className="plansItem__content_btn"
        >
          Select
        </Link>
      </div>
      <div
        className={`plansItem__content-wrapper topUnderscore ${
          props.item.bestValue ? "bestValue-lowerBlock" : ""
        } ${toggleMenu ? "plansItem__content-wrapper_hidden" : ""} ${
          props.item.bestValue && toggleMenu
            ? "best-value__hidden-background-color"
            : ""
        }`}
      >
        {props.item.planPrivileges.map((item) => (
          <p
            className={`plansItem__content_planPrivileges ${
              toggleMenu ? "hide-privilege-text" : ""
            }`}
            key={item.id}
          >
            {item.privilegeName}
          </p>
        ))}
        <MobileView>
          <div className="plansItem__content_slider">
            <button
              onClick={toggleMenuHandler}
              className={`plansItem__content_slider-button ${
                toggleMenu ? "plansItem__content_slider-button-animation" : ""
              }`}
            >
              ˄
            </button>
          </div>
        </MobileView>
      </div>
    </div>
  );
}
