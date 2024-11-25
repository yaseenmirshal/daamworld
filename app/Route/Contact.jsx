'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id='contact' className="bg-[#1a1a1a] text-[#faf1d4] py-16" data-aos="fade-up">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#ddb264] mb-5">Get in Touch</h2>
        <p className="text-center text-[#faf1d4] mb-12">
          We would love to hear from you! Please fill out the form below or reach out to us directly.
        </p>
        <div className="flex items-center justify-center lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Cards (Location, Phone, WhatsApp) */}
          {/* <div className="flex flex-col space-y-8">
            <div className="bg-[#2e2e2e] p-6 rounded-lg shadow-lg" data-aos="fade-up">
              <div className="flex items-center mb-4 text-[#ddb264]">
                <FaMapMarkerAlt className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Our Location</h3>
              </div>
              <p>India </p>
            </div>

            <div className="bg-[#2e2e2e] p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4 text-[#ddb264]">
                <FaPhone className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Call Us</h3>
              </div>
              <p>+91 9999999999</p>
            </div>

            <div className="bg-[#2e2e2e] p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4 text-[#ddb264]">
                <FaWhatsapp className="text-2xl mr-3" />
                <h3 className="text-xl font-semibold">WhatsApp</h3>
              </div>
              <p>+91 999 999 999</p>
            </div>
          </div> */}

          {/* Right Side: Email Form */}
        
  <div className="bg-[#2e2e2e] p-8 rounded-lg shadow-lg w-full max-w-[650px]" data-aos="fade-up">
    <h3 className="text-xl font-semibold text-[#ddb264] mb-6">Contact Us via Email</h3>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-[#faf1d4]">Your Name</label>
        <input
          type="text"
          id="name"
          className="w-full p-3 mt-2 bg-[#1a1a1a] text-[#faf1d4] border border-[#ddb264] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ddb264]"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-[#faf1d4]">Your Email</label>
        <input
          type="email"
          id="email"
          className="w-full p-3 mt-2 bg-[#1a1a1a] text-[#faf1d4] border border-[#ddb264] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ddb264]"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold text-[#faf1d4]">Your Message</label>
        <textarea
          id="message"
          className="w-full p-3 mt-2 bg-[#1a1a1a] text-[#faf1d4] border border-[#ddb264] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ddb264]"
          placeholder="Enter your message"
          rows="4"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#ddb264] text-[#1a1a1a] font-semibold rounded-md hover:bg-[#faf1d4] transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

        </div>
    
    </section>
  );
}
