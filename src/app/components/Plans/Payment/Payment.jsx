import React from "react";
import { useLocation } from "react-router-dom";
import "./Payment.scss";
import { authenticationPages } from "../../LogIn-SignUp-Pages/constants.jsx";

export function Payment({ openLoginWindow }) {
  let location = useLocation();
  return (
    <div className="payment__container">
      <h1 className="plans__content_header">PLANS & PRICING</h1>
      <div className="payment__content">
        <div className="payment__content_header-container">
          <h1 className="payment__content_header-text">Checkout</h1>
        </div>
        <div className="payment__content_info-container">
          <div className="payment__signUp-container">
            <h1 className="payment__signUp-container_header">1 Sign Up</h1>
            <p className="payment__signUp-container_description">
              To purchase this plan and use its benefits in the future, log in
              to your account or sign up.
            </p>
            <div className="payment__signUp-container_buttons">
              <button
                onClick={() => openLoginWindow(authenticationPages.SignUp)}
                className="payment__signUp-container_btn payment-signUp-btn"
              >
                Sign Up
              </button>
              <button
                onClick={() => openLoginWindow(authenticationPages.Login)}
                className="payment__signUp-container_btn payment-logIn-btn"
              >
                Log In
              </button>
            </div>
            <h1 className="payment__signUp-container_header payment-second-header">
              2 Payment
            </h1>
          </div>
          <div className="payment__summery-container">
            <h1 className="payment__summery-container_header">Order Summary</h1>
            <div className="payment__summery-container_planAndDuration-container">
              <div className="payment__summery-container_planAndDuration-wrapper">
                <p className="payment__summery-container_planAndDuration-description">
                  Plan
                </p>
                <p className="payment__summery-container_planAndDuration-description">
                  {location.state.item.membership}
                </p>
              </div>
              <div className="payment__summery-container_planAndDuration-wrapper">
                <p className="payment__summery-container_planAndDuration-description">
                  Duration
                </p>
                <p className="payment__summery-container_planAndDuration-description">
                  {location.state.item.duration}
                </p>
              </div>
            </div>
            <div className="payment__summery-container_totalPrice-wrapper">
              <p className="payment__summery-container_totalPrice-text">
                Total
              </p>
              <p className="payment__summery-container_totalPrice-text">
                ${location.state.item.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
