import React from "react";
import "../assets/styles/ErrorPage.css";
import error_icon from "../assets/images/error.png";

const ErrorPage: React.FC = () => {
  return (
    <div className="error-container">
      <div className="error-image">
        <img src={error_icon} alt="Error Icon" />
      </div>
      <div className="main-error">Oops something went wrong!</div>
      <div className="error-details">
        Ensure that the city you are searching for is correctly spelt and try
        again.
      </div>
    </div>
  );
};

export default ErrorPage;
