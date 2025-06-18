// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (path) =>
    `px-4 py-2 rounded transition ${
      location.pathname === path ? "text-red-600 font-bold" : "text-gray-700"
    } hover:text-red-500`;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900">
          THE SIDHU TEAM
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/listings" className={linkClass("/listings")}>
            Listings
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
