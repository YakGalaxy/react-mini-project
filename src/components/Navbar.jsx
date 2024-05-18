import React from 'react';
import logo from "../assets/code-512.png";

function Navbar() {
  return (
    <div className="nav-bar">
      <img className="logo" src={logo} alt="Logo" />
      <div>
        <h1>TaskR</h1>
      </div>
    </div>
  );
}

export default Navbar