import React from "react";
import { Link } from "react-router-dom";
import "./PlansItem.scss";

export function PlansItem(props) {
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
              item: props.item
            }
          }}
          className="plansItem__content_btn"
        >
          Select
        </Link>
      </div>
      <div
        className={`plansItem__content-wrapper topUnderscore ${
          props.item.bestValue ? "bestValue-lowerBlock" : ""
        }`}
      >
        {props.item.planPrivileges.map(item => (
          <p className="plansItem__content_planPrivileges" key={item.id}>
            {item.privilegeName}
          </p>
        ))}
      </div>
    </div>
  );
}
