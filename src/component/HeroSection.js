import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video with multiple formats for compatibility */}
      <div
        className="fullscreen-video-wrap"
        
      >
        <video playsinline muted  autoPlay loop poster="/images/herobg.jpg" class="absolute top-0 left-0 w-full h-full object-cover" >
              <source src="/HeroVideo.mp4" type="video/mp4" />
              
              
          </video>
      </div>

      {/* Overlay for dimming the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="text-white space-y-6 max-w-lg mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">
            JMT ENTERPRISE
          </h1>
          <p className="text-base sm:text-lg">
            Your trusted partner for import and export services, specializing in global trade and logistics from India.
          </p>
          <button className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg text-lg">
            <a
              href="https://wa.me/+919876543210"
              target="_blank"
              rel="noopener noreferrer"
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
