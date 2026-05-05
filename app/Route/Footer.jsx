'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">

          {/* Logo */}
          <div className="flex flex-col items-start" data-aos="fade-up">
            <div className="relative w-[200px] h-[60px]">
              <Image
                src="/pictures/dmnew.png"
                alt="DaamWorld Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-left text-md mt-3">
              Daam is a premium bath fitting brand known for quality and style. Enhance your bathroom with our products.
            </p>
          </div>

          {/* Products */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#faucets" className="hover:text-blue-400">Faucets</a></li>
              <li><a href="#showers" className="hover:text-blue-400">Showers</a></li>
              <li><a href="#toilets" className="hover:text-blue-400">Toilets & Bidets</a></li>
              <li><a href="#accessories" className="hover:text-blue-400">Accessories</a></li>
            </ul>
          </div>

          {/* Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-2">
              <li>Location: India - UAE</li>
              <li>Email: info@daamworld.com</li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/share/1DU9en7X2q/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl hover:text-blue-500" />
              </a>

              <a href="https://www.instagram.com/daamworld/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>

              <a href="https://pin.it/5PdTXSXnx" target="_blank" rel="noopener noreferrer">
                <FaPinterestP className="text-2xl hover:text-red-600" />
              </a>

              <a href="https://youtube.com/@daamworld" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl hover:text-red-500" />
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/DaamWorld" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/pictures/xlogo.png" // ✅ local image recommended
                  alt="X Logo"
                  width={32}
                  height={32}
                  className="hover:opacity-80"
                />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-gray-400">
            © 2024 yminnovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}