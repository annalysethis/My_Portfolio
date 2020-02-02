import React, { Component } from "react";
// import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  // const navStyle = {
  //   color: "white"
  // };

  return (
    <nav>
      <Link to="/" className="h3-a">
        <h3 className="name-logo">Anna Hurtig</h3>
      </Link>

      <ul className="nav-links">
        <Link to="/">
          <li className="li-home">Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
