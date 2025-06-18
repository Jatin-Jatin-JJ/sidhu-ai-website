// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount too

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logic: use dark text on light pages (Listings/Contact), unless scrolling
  const isLightPage = location.pathname !== '/' || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isLightPage ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className={`font-bold text-lg tracking-wide ${isLightPage ? 'text-gray-900' : 'text-white'}`}>
          THE SIDHU TEAM
        </Link>
        <nav className="space-x-6">
          {['/', '/listings', '/contact'].map((path, i) => {
            const name = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            const isActive = location.pathname === path;

            return (
              <Link
                key={i}
                to={path}
                className={`transition duration-200 ${
                  isLightPage
                    ? isActive
                      ? 'text-red-500 font-semibold'
                      : 'text-gray-700 hover:text-red-500'
                    : isActive
                    ? 'text-red-400'
                    : 'text-white hover:text-red-400'
                }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
