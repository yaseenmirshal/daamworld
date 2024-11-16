'use client';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
          {/* DaamWorld Logo and Text */}
          <div className="flex flex-col items-start" data-aos="fade-up">
            <img
              src="./pictures/daamlogo.png"
              alt="DaamWorld Logo"
              className="w-60 h-14 mb-4"
            />
            <p className="text-left text-md">
              DaamWorld is a premium bath fitting brand known for quality and style. Enhance your bathroom with our products.
            </p>
          </div>


          {/* Additional Content */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-left">
              <li>
                <a href="#faucets" className="hover:text-blue-400">Faucets</a>
              </li>
              <li>
                <a href="#showers" className="hover:text-blue-400">Showers</a>
              </li>
              <li>
                <a href="#toilets" className="hover:text-blue-400">Toilets & Bidets</a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-blue-400">Accessories</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-left">
              <li>
                <a href="#home" className="hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-left">
              <li>Location: 123 Bath Ave, City</li>
              <li>Phone: +1 234 567 890</li>
              <li>Email: info@daamworld.com</li>
              <li>WhatsApp: +1 234 567 891</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <p className="text-left text-sm text-gray-400">
            © 2024 DaamWorld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
