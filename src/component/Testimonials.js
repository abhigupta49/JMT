import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Shared Tailwind CSS classes
const cardClasses = 'max-w-xs p-4 border rounded-lg shadow-md bg-white';
const letterCircleClasses = 'w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mt-4';

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  // GSAP animation on scroll
  useEffect(() => {
    const element = testimonialsRef.current;

    const handleScroll = () => {
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if the element is in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          gsap.fromTo(element.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 });
          // Remove the scroll event listener after animation to avoid retriggering
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the element is already in the viewport
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={testimonialsRef} className="text-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">World-Class Crustacean Exports</h1>
      <h2 className="text-2xl font-semibold mb-8 text-gray-700">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 space-y-6 md:space-y-0">
        <TestimonialCard text="The noodles are amazing! Never tasted anything like it!" name="Sofia" />
        <TestimonialCard text="I can't live without those noodles! They are the best!" name="Rajesh" />
        <TestimonialCard text="If you don't try these noodles, you're missing out!" name="Anita" />
      </div>
    </div>
  );
};

const TestimonialCard = ({ text, name }) => {
  // Get the first letter of the name
  const firstLetter = name.charAt(0).toUpperCase();
  // Set a background color based on the first letter
  const backgroundColor = getRandomColor();

  return (
    <div className={cardClasses}>
      <div className={letterCircleClasses} style={{ backgroundColor }}>
        {firstLetter}
      </div>
      <p className="text-lg mt-2">{text}</p>
      <p className="mt-2 font-semibold">{name}</p>
    </div>
  );
};

// Function to generate a random background color
const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#E74C3C', '#8E44AD', '#3498DB', '#2ECC71'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default Testimonials;
