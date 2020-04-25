import React from "react";
import { PlansItem } from "./Plans-Item/PlansItem.jsx";
import "./Plans.scss";

export function Plans() {
  const data = [
    {
      id: 0,
      membership: "Silver Membership",
      price: 30,
      monthlyPay: "no text here",
      planForWho: "Short-term trial for beginners",
      validationTerm: "Valid for one month",
      planPrivilege1: "Unlimited classes",
      planPrivilege2: "Fitness assessment",
      planPrivilege3: "Locker room with showers",
      bestValue: false,
      monthlyPayShow: false,
      validationHidden: false,
      planId: "silver"
    },
    {
      id: 1,
      membership: "Gold Membership",
      price: 25,
      monthlyPay: "Evety month",
      planForWho: "Ideal for advanced trainers",
      validationTerm: "Valid for 12 months",
      planPrivilege1: "Unlimited classes",
      planPrivilege2: "Fitness assessment",
      planPrivilege3: "Locker room with showers",
      planPrivilege4: "Free parking",
      bestValue: true,
      monthlyPayShow: true,
      monthlyPayShow: true,
      validationHidden: false,
      planId: "gold"
    },
    {
      id: 2,
      membership: "Platinum Membership",
      price: 40,
      monthlyPay: "Evety month",
      planForWho: "Perfect for committed trainers",
      validationTerm: "no text here",
      planPrivilege1: "Unlimited classes",
      planPrivilege2: "Fitness assessment",
      planPrivilege3: "Locker room with showers",
      planPrivilege4: "Free parking",
      planPrivilege5: "Guest privileges",
      bestValue: false,
      monthlyPayShow: true,
      monthlyPayShow: true,
      validationHidden: true,
      planId: "platinum"
    }
  ];

  return (
    <div className="plans__container" id="plans">
      <div className="plans__content">
        <h1 className="plans__content_header">PLANS & PRICING</h1>
        <div className="plansItem__container">
          {data.map(i => (
            <PlansItem key={i.id} item={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
