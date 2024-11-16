'use client';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <div
        className="container mx-auto flex justify-between items-center px-6 py-4"
        data-aos="fade-down"
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">
          <a href="#">
            <img width={130} height={130} src="./pictures/daamlogo.png" alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-16 font-medium">
          <a
            href="#home"
            className="relative group hover:text-blue-400 transition-colors duration-300"
            data-aos="fade-up"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative group hover:text-blue-400 transition-colors duration-300"
            data-aos="fade-up"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#services"
            className="relative group hover:text-blue-400 transition-colors duration-300"
            data-aos="fade-up"
          >
            Products
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative group hover:text-blue-400 transition-colors duration-300"
            data-aos="fade-up"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-400 transition-colors duration-300"
            data-aos="fade-up"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-blue-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden md:hidden bg-gray-800 text-white flex flex-col justify-center items-center`}
      >
        <a
          href="#home"
          className="block px-4 py-2 text-center relative group hover:bg-gray-700 hover:text-blue-400 transition-colors duration-300"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#about"
          className="block px-4 py-2 text-center relative group hover:bg-gray-700 hover:text-blue-400 transition-colors duration-300"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#services"
          className="block px-4 py-2 text-center relative group hover:bg-gray-700 hover:text-blue-400 transition-colors duration-300"
        >
          Services
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          className="block px-4 py-2 text-center relative group hover:bg-gray-700 hover:text-blue-400 transition-colors duration-300"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          className="block mx-4 my-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-400 transition-colors duration-300 text-center"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
