import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Path to your main logo image
import nameLogo from '../assets/name_logo.png'; // Path to your name_logo image (text)

export default function Logobar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-1 flex items-center z-40 bg-transparent">
      {/* Transparent background navbar */}
      <div className="flex items-center w-full">
        <Link to="/" className="flex items-center">
          {/* Logo placed on top left */}
          <img src={logo} alt="Logo" className="h-30 mr-10" /> {/* Increased space */}
          <img src={nameLogo} alt="Name Logo" className="h-15" /> {/* Adding the name logo */}
        </Link>
      </div>
    </nav>
  );
}
