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

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#1a1a1a] text-[#faf1d4] shadow-md fixed top-0 w-full z-50">
      <div
        className="container mx-auto flex justify-between items-center px-6 py-4 md:py-5"
        data-aos="fade-down"
      >
        {/* Logo */}
        <div className="text-2xl font-bold flex-shrink-0">
          <a href="#">
            <img
              width={140}
              height={140}
              src="./pictures/dmnew.png"
              alt="Logo"
              className="filter brightness-110"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-16 font-medium">
          <a
            href="#home"
            className="relative group hover:text-[#ddb264] transition-colors duration-300"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ddb264] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative group hover:text-[#ddb264] transition-colors duration-300"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ddb264] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#products"
            className="relative group hover:text-[#ddb264] transition-colors duration-300"
          >
            Products
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ddb264] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative group hover:text-[#ddb264] transition-colors duration-300"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ddb264] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-[#ddb264] text-[#1a1a1a] font-semibold rounded hover:bg-[#faf1d4] transition-colors duration-300 text-sm md:text-base"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-[#ddb264] focus:outline-none"
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
        } overflow-hidden md:hidden bg-[#2e2e2e] text-[#faf1d4] flex flex-col justify-center items-center`}
      >
        <a
          href="#home"
          onClick={handleCloseMenu}
          className="block px-4 py-2 text-center relative group hover:bg-[#1a1a1a] hover:text-[#ddb264] transition-colors duration-300"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ddb264] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#about"
          onClick={handleCloseMenu}
          className="block px-4 py-2 text-center relative group hover:bg-[#1a1a1a] hover:text-[#ddb264] transition-colors duration-300"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ddb264] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#products"
          onClick={handleCloseMenu}
          className="block px-4 py-2 text-center relative group hover:bg-[#1a1a1a] hover:text-[#ddb264] transition-colors duration-300"
        >
          Products
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ddb264] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          onClick={handleCloseMenu}
          className="block px-4 py-2 text-center relative group hover:bg-[#1a1a1a] hover:text-[#ddb264] transition-colors duration-300"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ddb264] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          onClick={handleCloseMenu}
          className="block mx-4 my-2 px-4 py-2 bg-[#ddb264] text-[#1a1a1a] font-semibold rounded hover:bg-[#faf1d4] transition-colors duration-300 text-center text-sm"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
