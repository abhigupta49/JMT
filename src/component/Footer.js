import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company Information */}
        <div className="text-center md:text-left space-y-4 ml-8">
          <h2 className="text-2xl font-bold">JMT ENTERPRISE</h2>
          <p>6, Mohim Chandra Das Sarani, 1st Floor, Kolkata-700012, West Bengal, India</p>
          <p>GSTIN/UIN: 19AAQFJ7799F1ZE</p>
          <p>State Name: West Bengal, Code: 19</p>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>Phone: <a href="tel:8987374509" className="underline">8987374509</a>, <a href="tel:9748411426" className="underline">9748411426</a></p>
          <p>Email: <a href="mailto:jmtenterprise8987@gmail.com" className="underline">jmtenterprise8987@gmail.com</a></p>
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
