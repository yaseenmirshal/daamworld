'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HalfCarouselWithText = ({ heading, text, images, animation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100'); // For smooth fade transition

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentSlide]);

  const handleNext = () => {
    setFadeClass('opacity-0'); // Start fading out
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1)); // Change slide
      setFadeClass('opacity-100'); // Fade in new image
    }, 500); // Wait for fade-out effect to finish before changing image
  };

  return (
    <section
      className="flex flex-col lg:flex-row items-center w-full bg-white"
      data-aos={animation}
    >
      {/* Carousel Half */}
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        <div
          className={`transition-opacity duration-1000 ${fadeClass}`} // Use the fade class for opacity
        >
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Text Half */}
      <div
        className="w-full lg:w-1/2 md:p-8 p-5 mt-5 mb-5 md:mt-0 md:mb-0 flex flex-col justify-center items-start space-y-6"
        data-aos="fade-left"
      >
        <h2 className="text-3xl lg:text-4xl md:pl-10 pr-10 font-bold text-[#1e1e1e]">
          {heading}
        </h2>
        <p className="text-lg md:pl-10 md:pr-10 text-[#333]">{text}</p>
      </div>
    </section>
  );
};

export default function Sections() {
  return (
    <>
      {/* Luxury Bathtub Section */}
      <HalfCarouselWithText
        heading="Bold and Beautiful Bath Fittings That Inspire"
        text="Immerse yourself in the elegance and innovation of DAAM’s premium bath fittings, designed to elevate your bathing experience."
        images={[
          './pictures/tap.jpg',
          './pictures/washbasin.jpg',
          './pictures/basin2.jpg',
        ]}
        animation="fade-up"
      />
    </>
  );
}
