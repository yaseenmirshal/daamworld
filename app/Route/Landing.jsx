'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/pictures/bathroom.jpg')` }} // Replace with your image
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-left md:text-center px-6" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Luxury Bath Fittings
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Transform your bathroom with DaamWorld&apos;s premium designs and quality.
          </p>
          <a
            href="#products"
            className="px-8 py-3 bg-[#2e2e2e] text-white rounded-lg hover:bg-[#ddb264] hover:text-black transition duration-300"
          >
            Explore Our Products
          </a>
        </div>
      </section>

      <section className="h-[550px] md:h-96 bg-white text-black flex items-center">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6" data-aos="fade-right">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Luxury Redefined in Bath Fittings
            </h1>
            <p className="text-lg lg:text-xl">
              Experience the perfect blend of design and functionality with DaamWorld&apos;s
              premium bath fittings. Elevate your bathroom to a new level of elegance.
            </p>
          </div>

          {/* Image */}
          <div
            className="flex justify-center items-center"
            data-aos="fade-up"
          >
            <img
              src="/pictures/tapremoved.png" // Replace with your image path
              alt="Modern Bath Fittings"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
