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
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url('/pictures/tap.jpg')` }} // Replace with your image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center px-6" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Discover Luxury Bath Fittings
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Transform your bathroom with DaamWorld's premium designs and quality.
        </p>
        <a
          href="#products"
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition duration-300"
        >
          Explore Our Products
        </a>
      </div>
    </section>
  );
}
