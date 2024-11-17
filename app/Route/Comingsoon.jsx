'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ComingSoonPage = () => {
  const progress = 70; // Static progress value

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('./pictures/daambrandyellow.jpg')`, // Background Image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* "Our New Site" with Lines */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="h-0.5 w-16 bg-[#ddb264]"></div>
          <h2 className="text-sm uppercase text-[#ddb264] tracking-wide">Our New Site</h2>
          <div className="h-0.5 w-16 bg-[#ddb264]"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mt-2">COMING SOON</h1>

        {/* Progress Bar */}
        <div className="w-4/5 md:w-1/2 mx-auto mt-6 bg-[#3a3a3a] rounded-full h-4 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#ddb264]"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="absolute text-black text-sm font-semibold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {progress}%
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ddb264]"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ddb264]"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ddb264]"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ddb264]"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
