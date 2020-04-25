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
        <button className="plansItem__content_btn">Select</button>
      </div>
      <div
        className={`plansItem__content-wrapper topUnderscore ${
          props.item.bestValue ? "bestValue-lowerBlock" : ""
        }`}
      >
        <p className="plansItem__content_planPrivileges">
          {props.item.planPrivilege1}
        </p>
        <p className="plansItem__content_planPrivileges">
          {props.item.planPrivilege2}
        </p>
        <p className="plansItem__content_planPrivileges">
          {props.item.planPrivilege3}
        </p>
        <p className="plansItem__content_planPrivileges">
          {props.item.planPrivilege4}
        </p>
        <p className="plansItem__content_planPrivileges">
          {props.item.planPrivilege5}
        </p>
      </div>
    </div>
  );
}
