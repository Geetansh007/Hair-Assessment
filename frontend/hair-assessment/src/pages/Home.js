import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Hair Treatment Checker</h1>
      <Link to="/about">Check Hair Treatment</Link>
    </div>
  );
};

export default Home;
