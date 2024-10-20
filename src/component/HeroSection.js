import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null); // Use ref to control the video

  // UseEffect to ensure autoplay works even on mobile devices
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Ensure the video is muted
      video.play().catch((error) => {
        console.log('Autoplay failed:', error); // Handle any errors related to autoplay
      });
    }
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <div className="fullscreen-video-wrap">
        <video
          ref={videoRef}
          playsInline // Ensures video plays inline on iOS (avoids fullscreen mode)
          loop
          autoPlay
          muted // Video must be muted to autoplay on iOS
          preload="auto"
          poster="/images/herobg.jpg" // Fallback image while the video is loading
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/HeroVideo.mp4" type="video/mp4" />
          <source src="/HeroVideo.webm" type="video/webm" />
          <source src="/HeroVideo.ogg" type="video/ogg" />
          {/* Fallback content if video doesn't load */}
          <img src="/images/herobg.jpg" alt="Fallback image for background" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for dimming the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="text-white space-y-6 max-w-lg mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">JMT ENTERPRISE</h1>
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
