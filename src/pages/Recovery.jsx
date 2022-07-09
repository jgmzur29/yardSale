import React from "react";
import "@styles/Recovery.scss";
import logo from "@assets/yardSaleLogo.svg";

const Recovery = () => {

  return (
    <div className="Recovery">
      <div className="Recovery-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" id="email" className="input input-email" />
            <button
              className="primary-button login-button">
              Confirm Email
            </button>
        </form>
      </div>
    </div>
  );
};

export default Recovery;
