import React from "react";

import logo from "./logo.png";

import "../../App.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-container">
      <header className="logo-header">
        <Link to="/">
          <img src={logo} alt="Logo" className="Logo" />
        </Link>
      </header>
    </div>
  );
};

export default Logo;
