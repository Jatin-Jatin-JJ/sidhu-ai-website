// ✅ NAVBAR.JSX — Replace this file completely
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const linkClass = (path) =>
    location.pathname === path
      ? 'text-red-500 font-semibold'
      : 'text-gray-700 hover:text-red-500';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">THE SIDHU TEAM</div>
        <div className="flex space-x-6 text-sm md:text-base">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/listings" className={linkClass('/listings')}>Listings</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
