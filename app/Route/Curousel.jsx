'use client';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionWithCarousel = ({ heading, text, images, reverse, animation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="py-16 px-6 lg:px-12 bg-[#1a1a1a] text-[#fafafa] flex items-center"
      data-aos={animation}
    >
      <div
        className={`container mx-auto flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Text Content */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          data-aos="fade-right"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ddb264]">{heading}</h2>
          <p className="text-lg text-gray-300">{text}</p>
        </div>

        {/* Carousel */}
        <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
          <div className="relative overflow-hidden shadow-lg rounded-md">
            {/* Image */}
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-72 lg:h-96 object-cover rounded-md"
            />
            {/* Controls */}
            <button
              className="absolute top-1/2 -translate-y-1/2 left-4 bg-[#333] text-white rounded-full p-2 hover:bg-[#ddb264] transition"
              onClick={handlePrev}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4 bg-[#333] text-white rounded-full p-2 hover:bg-[#ddb264] transition"
              onClick={handleNext}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide ? 'bg-[#ddb264]' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Sections() {
  return (
    <>
      {/* Showering Section */}
      <SectionWithCarousel
        heading="Showering Perfection"
        text="Elevate your shower experience with our luxurious and innovative shower systems."
        images={[
          'https://i.pinimg.com/736x/bd/93/39/bd9339a7a38a41e8d2569cb46b70214f.jpg',
          '/images/showering2.jpg',
          '/images/showering3.jpg',
        ]}
        reverse={false}
        animation="fade-up"
      />

      {/* Washbasin Section */}
      <SectionWithCarousel
        heading="Modern Washbasins"
        text="Explore our stylish and functional washbasins that blend seamlessly into any bathroom design."
        images={[
          'https://i.pinimg.com/736x/f8/31/fc/f831fc89432dfa55519c11fddc3cce62.jpg',
          '/images/washbasin2.jpg',
          '/images/washbasin3.jpg',
        ]}
        reverse={true}
        animation="fade-up"
      />

      {/* Closet Section */}
      <SectionWithCarousel
        heading="Elegant Closets"
        text="Discover closets designed to provide comfort and aesthetics for your bathroom."
        images={[
          'https://i.pinimg.com/736x/be/8c/0c/be8c0c098e6221a03dd80b68108c7e28.jpg',
          '/images/closet2.jpg',
          '/images/closet3.jpg',
        ]}
        reverse={false}
        animation="fade-up"
      />

      {/* Tap Section */}
      <SectionWithCarousel
        heading="Premium Taps"
        text="Unparalleled craftsmanship and innovation in every tap, enhancing your bathroom experience."
        images={[
          './pictures/walltap.jpg',
          '/images/tap2.jpg',
          '/images/tap3.jpg',
        ]}
        reverse={true}
        animation="fade-up"
      />
    </>
  );
}
