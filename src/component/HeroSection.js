import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Added for iOS compatibility
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="text-white space-y-8">
          <h1 className="text-5xl font-bold">Welcome to JMT ENTERPRISE</h1>
          <p className="text-lg max-w-lg mx-auto">
            Your trusted partner for import and export services. 
            Specializing in global trade and logistics from India.
          </p>
          <button>
            <a
              href="https://wa.me/+919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg text-lg"
            >
              Contact Us on WhatsApp
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
