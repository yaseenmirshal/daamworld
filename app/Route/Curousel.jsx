'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionWithCarousel = ({
  heading,
  subheading,
  text,
  features,
  images = [],
  reverse,
  animation,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
  const interval = setInterval(() => {
    if (images.length === 0) return;

    setIsFading(true);

    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
      setIsFading(false);
    }, 500);
  }, 5000);

  return () => clearInterval(interval);
}, [images.length]);

  return (
    <section
      id="products"
      className={`py-7 md:py-16 px-6 lg:px-12 bg-[#1e1e1e] flex flex-col-reverse lg:flex-row items-center ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
      data-aos={animation}
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 p-6 lg:p-8 text-[#fafafa]">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#ddb264]">
          {heading}
        </h2>

        {subheading && (
          <h3 className="text-xl text-gray-400">{subheading}</h3>
        )}

        <p className="text-lg text-gray-400">{text}</p>

        {features && (
          <ul className="space-y-2 text-gray-300">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-[#ddb264]">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Carousel Section */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative overflow-hidden shadow-lg h-80 lg:h-96">
          {images.length > 0 && (
            <div
              className={`relative w-full h-full transition-opacity duration-500 ${
                isFading ? 'opacity-20' : 'opacity-100'
              }`}
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

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentSlide
                  ? 'bg-[#ddb264]'
                  : 'bg-gray-600'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Sections() {
  return (
    <>
      <SectionWithCarousel
        heading="Premium Faucets"
        subheading="Craftsmanship at Its Best"
        text="Unparalleled craftsmanship and innovation in every tap."
        features={[
          'Precision engineering',
          'Sleek designs',
          'Water-efficient',
        ]}
        images={[
          '/pictures/walltap.jpg', // ✅ FIXED PATH
          'https://i.pinimg.com/736x/8b/0c/15/8b0c159e1bbb6efd014dc6c318f0241b.jpg',
          'https://i.pinimg.com/736x/82/fb/a1/82fba1223920e85fafa49c8328ffc6a4.jpg',
        ]}
        reverse={true}
        animation="fade-right"
      />

      {/* Background Section */}
      <section
        className="relative w-full h-96 bg-cover md:bg-center bg-right flex items-center justify-center"
        style={{
          backgroundImage: "url('/pictures/bath.jpg')", // ✅ correct
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-[#1e1e1e] bg-opacity-50"></div>

        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-[#ddb264]">
            Luxury Bathtubs
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover elegance and relaxation with premium bathtubs.
          </p>
        </div>
      </section>
    </>
  );
}