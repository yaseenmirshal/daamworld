'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTwitter } from 'react-icons/fa';

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
            src="./pictures/dmnew.png"
            alt="DaamWorld Logo"
            className="w-[200px] h-[50px] sm:w-[240px] sm:h-[56px] lg:w-[200px] lg:h-[60px] object-contain"
          />
            <p className="text-left text-md">
              Daam is a premium bath fitting brand known for quality and style. Enhance your bathroom with our products.
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
              <li>Location: India - UAE</li>
              {/* <li>Phone: +1 234 567 890</li> */}
              <li>Email: info@daamworld.com</li>
              {/* <li>WhatsApp: +1 234 567 891</li> */}
            </ul>
           


<div className="flex space-x-4 mt-4">
  {/* Facebook */}
  <a href="https://www.facebook.com/share/1DU9en7X2q/" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-2xl hover:text-blue-500" />
  </a>
  
  {/* Instagram */}
  <a href="https://www.instagram.com/daamworld/profilecard/?igsh=MWNuamo0amYxM2lxMg==" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-2xl hover:text-pink-500" />
  </a>
  
  {/* Pinterest */}
  <a href="https://pin.it/5PdTXSXnx" target="_blank" rel="noopener noreferrer">
    <FaPinterestP className="text-2xl hover:text-red-600" />
  </a>
  
  {/* YouTube */}
  <a href="https://youtube.com/@daamworld?si=yk3vNas0FwcYj-Z8" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="text-2xl hover:text-red-500" />
  </a>
{/* X Logo using SVG from a public CDN */}
<a href="https://x.com/DaamWorld?t=BrQI5z7rs7sq9axlaBF64g&s=09" target="_blank" rel="noopener noreferrer">
  <img
    src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg"
    alt="X Logo"
    className="w-8 h-8 mt-[-4px] hover:opacity-80 "
  />
</a>


</div>


          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <p className="text-left text-sm text-gray-400">
            © 2024 yminnovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
