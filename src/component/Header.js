import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r bg-white text-black py-4 fixed w-full top-0 z-50 shadow-lg px-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            <img
              src="/images/logo.png" // Replace with your logo's path
              alt="JMT ENTERPRISE Logo"
              className="h-16" // Adjust height as necessary
            />
          </a>
        </div>

        {/* Desktop Navigation Links and Icons */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="hover:text-gray-300 transition duration-200">Home</a>
          <a href="#about" className="hover:text-gray-300 transition duration-200">About Us</a>
          <a href="#services" className="hover:text-gray-300 transition duration-200">Services</a>
          <a href="#contact" className="hover:text-gray-300 transition duration-200">Contact Us</a>
          {/* <FaSearch className="cursor-pointer hover:text-gray-300" />
          <FaUserAlt className="cursor-pointer hover:text-gray-300" />
          <FaShoppingCart className="cursor-pointer hover:text-gray-300" /> */}
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#E69138] to-[#000000] text-white p-4">

          <a href="#home" className="block py-2 hover:text-gray-300 transition duration-200" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="block py-2 hover:text-gray-300 transition duration-200" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#services" className="block py-2 hover:text-gray-300 transition duration-200" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#contact" className="block py-2 hover:text-gray-300 transition duration-200" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
