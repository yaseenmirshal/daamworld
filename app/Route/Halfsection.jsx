'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HalfCarouselWithText = ({ heading, text, images = [], animation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  useEffect(() => {
  const interval = setInterval(() => {
    setFadeClass('opacity-0');

    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
      setFadeClass('opacity-100');
    }, 500);
  }, 5000);

  return () => clearInterval(interval);
}, [images.length]);

  return (
    <section
      className="flex flex-col lg:flex-row items-center w-full bg-white"
      data-aos={animation}
    >
      {/* Carousel */}
      <div className="w-full lg:w-1/2 relative h-96 overflow-hidden">
        {images.length > 0 && (
          <div
            className={`relative w-full h-full transition-opacity duration-1000 ${fadeClass}`}
          >
            <Image
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Text */}
      <div
        className="w-full lg:w-1/2 md:p-8 p-5 mt-5 mb-5 md:mt-0 md:mb-0 flex flex-col justify-center items-start space-y-6"
        data-aos="fade-right"
      >
        <h2 className="text-3xl lg:text-4xl md:pl-10 pr-10 font-bold text-[#1e1e1e]">
          {heading}
        </h2>

        <p className="text-lg md:pl-10 md:pr-10 text-[#333]">
          {text}
        </p>
      </div>
    </section>
  );
};

export default function Sections() {
  return (
    <>
      <HalfCarouselWithText
        heading="Bold and Beautiful Bath Fittings That Inspire"
        text="Immerse yourself in the elegance and innovation of DAAM’s premium bath fittings."
        images={[
          '/pictures/tap.jpg',        // ✅ fixed
          '/pictures/washbasin.jpg', // ✅ fixed
          '/pictures/basin2.jpg',    // ✅ fixed
        ]}
        animation="fade-up"
      />
    </>
  );
}