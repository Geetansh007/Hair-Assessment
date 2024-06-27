import React from "react";
import "./styles.css";

const Navigation = ({ step }) => {
  return (
    <div className="navigation">
      <div className={`nav-item ${step >= 1 ? "active" : ""}`}>About You</div>
      <div className={`nav-item ${step >= 2 ? "active" : ""}`}>Hair Health</div>
      <div className={`nav-item ${step >= 3 ? "active" : ""}`}>
        Your Lifestyle
      </div>
      <div className={`nav-item ${step >= 4 ? "active" : ""}`}>
        Scalp Assessment
      </div>
    </div>
  );
};

export default Navigation;
