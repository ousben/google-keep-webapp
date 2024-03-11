import React from "react";
import "./Navbar.css";

function Navbar() {


  return (
    <header>
      <div className="navbar">
        <div className="logo-all-section">
          <a href="/">
            <i className="material-icons">menu</i>
          </a>
          <div className="logo-section">
            <img src="google-keep-logo.png" height="20px" />
            <span>Keep</span>
          </div>
        </div>
        <div className="search-section">
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <a href="/">
            <i className="material-icons">refresh</i>
          </a>
          <a href="/">
            <i className="material-icons">dns</i>
          </a>
          <a href="/">
            <i className="material-icons">settings</i>
          </a>
        </div>
        <div>
          <a href="/">
            <i className="material-icons">apps</i>
          </a>
          <a href="/">
            <i className="material-icons">account_circle</i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;