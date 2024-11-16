'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-800 text-white py-16" data-aos="fade-up">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-5">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-12">
              We would love to hear from you! Please fill out the form below or reach out to us directly.
            </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Cards (Location, Phone, WhatsApp) */}
          <div className="flex flex-col space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg" data-aos="fade-up">
              <div className="flex items-center mb-4 text-blue-400">
                <FaMapMarkerAlt className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Our Location</h3>
              </div>
              <p className="text-gray-300">1234 Bath St, Suite 101, City, Country 56789</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4 text-blue-400">
                <FaPhone className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Call Us</h3>
              </div>
              <p className="text-gray-300">+1 (800) 123-4567</p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4 text-green-400">
                <FaWhatsapp className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">WhatsApp</h3>
              </div>
              <p className="text-gray-300">+1 (800) 765-4321</p>
            </div>
          </div>

          {/* Right Side: Email Form */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Contact Us via Email</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-200">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-200">Your Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        {/* <div className="mt-16 flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-blue-500 hover:text-blue-400">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://instagram.com" className="text-pink-500 hover:text-pink-400">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-600">
            <FaLinkedin className="text-2xl" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
