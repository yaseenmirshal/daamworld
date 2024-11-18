'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionWithCarousel = ({ heading, subheading, text, features, images, reverse, animation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 500);
  };

  return (
    <section
      className={`py-16 px-6 lg:px-12 bg-[#1e1e1e] flex flex-col-reverse lg:flex-row items-center ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
      data-aos={animation}
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 p-6 lg:p-8 bg-[#1e1e1e] text-[#fafafa]">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#ddb264]">{heading}</h2>
        {subheading && (
          <h3 className="text-xl text-gray-400">{subheading}</h3>
        )}
        <p className="text-lg text-gray-400">{text}</p>
        {features && (
          <ul className="space-y-2 text-gray-300">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-[#ddb264]">&#8226;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {/* <button className="mt-4 px-6 py-2 bg-[#ddb264] text-[#1e1e1e] font-semibold rounded-md hover:bg-[#caa04d] transition">
          Learn More
        </button> */}
      </div>

      {/* Carousel Section */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative overflow-hidden shadow-lg">
          <div
            className={`transition-opacity duration-500 ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
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
    </section>
  );
};

export default function Sections() {
  return (
    <>
      

      {/* Showering Section */}
      <SectionWithCarousel
        heading="Showering Perfection"
        subheading="A Splash of Innovation"
        text="Elevate your shower experience with luxurious designs that inspire."
        features={[
          'Innovative technology',
          'Elegant designs',
          'Customizable features',
        ]}
        images={[
          'https://i.pinimg.com/736x/bd/93/39/bd9339a7a38a41e8d2569cb46b70214f.jpg',
          'https://i.pinimg.com/236x/c7/19/af/c719afea0a959afc00e11d994e3a1205.jpg',
          'https://i.pinimg.com/236x/6e/11/5c/6e115c6b1c023f79ac18d5f50c254b00.jpg',
        ]}
        reverse={false}
        animation="fade-left"
      />

      {/* Washbasin Section */}
      <SectionWithCarousel
        heading="Modern Washbasins"
        subheading="Elegance in Every Detail"
        text="Explore our stylish and functional washbasins that blend seamlessly into any bathroom design."
        features={[
          'Premium materials',
          'Space-saving designs',
          'Timeless aesthetics',
        ]}
        images={[
          'https://i.pinimg.com/736x/f8/31/fc/f831fc89432dfa55519c11fddc3cce62.jpg',
          'https://i.pinimg.com/236x/62/2e/62/622e622526aa08c1c4bd60c8ff04e49b.jpg',
          'https://i.pinimg.com/236x/4c/89/b8/4c89b81d9f533fdd08cbc3a978b39c6f.jpg',
        ]}
        reverse={true}
        animation="fade-right"
      />

      {/* Closet Section */}
      <SectionWithCarousel
        heading="Elegant Closets"
        subheading="Practical Meets Stylish"
        text="Discover closets designed to provide comfort and aesthetics for your bathroom."
        features={[
          'Efficient storage',
          'Minimalist styles',
          'Durable finishes',
        ]}
        images={[
          'https://i.pinimg.com/736x/be/8c/0c/be8c0c098e6221a03dd80b68108c7e28.jpg',
          'https://i.pinimg.com/236x/c9/5d/65/c95d653099bef6ee046c21308d34fe7a.jpg',
          'https://i.pinimg.com/236x/15/4d/3f/154d3feae384dd06a49deee7aee1a4c2.jpg',
        ]}
        reverse={false}
        animation="fade-left"
      />

      {/* Tap Section */}
      <SectionWithCarousel
        heading="Premium Taps"
        subheading="Craftsmanship at Its Best"
        text="Unparalleled craftsmanship and innovation in every tap, enhancing your bathroom experience."
        features={[
          'Precision engineering',
          'Sleek designs',
          'Water-efficient',
        ]}
        images={[
          './pictures/walltap.jpg',
          'https://i.pinimg.com/236x/eb/ed/5a/ebed5a13a0e4e5bb899de9f0d22675a1.jpg',
          'https://i.pinimg.com/236x/76/46/fd/7646fdfc52071a3667c67141a037a102.jpg',
        ]}
        reverse={true}
        animation="fade-right"
      />

      {/* Luxury Bathtub Section */}
      <section
        className="relative w-full h-96 bg-cover  md:bg-center bg-right flex items-center justify-center"
        style={{
          backgroundImage: "url('/pictures/bath.jpg')",
        }}
        data-aos="fade-up"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1e1e1e] bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-[#ddb264]">
            Luxury Bathtubs
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the elegance and relaxation of our premium luxury bathtubs,
            crafted to redefine your bathing experience with sophistication and style.
          </p>
        </div>
      </section>
    </>
  );
}
