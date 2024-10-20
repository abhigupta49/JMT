import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Company Information */}
        <div className="space-y-4 lg:ml-10">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/images/transicon.png" // Replace with your logo's path
              alt="JMT ENTERPRISE Logo"
              className="h-16 mr-2" // Adjust height and margin as necessary
            />
            <h2 className="text-2xl font-bold">JMT ENTERPRISE</h2>
          </div>
          <p>6, Mohim Chandra Das Sarani, 1st Floor, Kolkata-700012, West Bengal, India</p>
          <p>GSTIN/UIN: 19AAQFJ7799F1ZE</p>
          <p>State Name: West Bengal, Code: 19</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="flex items-center justify-center md:justify-start">
            <FaPhone className="mr-2" style={{ color: '#E69138' }} />
            Phone: 
            <a href="tel:8987374509" className="underline text-[#E69138] ml-1">8987374509</a>, 
            <a href="tel:9748411426" className="underline text-[#E69138] ml-1">9748411426</a>
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2" style={{ color: '#E69138' }} />
            Email: 
            <a href="mailto:info@jmtbusiness.com" className="underline text-[#E69138] ml-1">info@jmtbusiness.com</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        © 2024 JMT ENTERPRISE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
