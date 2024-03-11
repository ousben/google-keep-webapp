import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="logo-all-section">
          <i></i>
          <div className="logo-section">
            <img src="google-keep-logo.png" height="100px" width="100px" />
            <span>Keep</span>
          </div>
        </div>
        <div className="search-section">
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </header>
  );
}

export default Navbar;