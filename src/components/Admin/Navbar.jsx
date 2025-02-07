import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../src/assets/logo_uni.png" alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-text">
        Kannur University 
      </div>
    </nav>
  );
}

export default Navbar;
