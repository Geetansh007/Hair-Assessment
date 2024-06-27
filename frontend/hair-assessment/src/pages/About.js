import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1>Hair Treatment Check</h1>
      <Link to="/step1">Start the Form</Link>
    </div>
  );
};

export default About;
