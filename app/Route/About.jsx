'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id='about' className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: About Text */}
        <div className="flex-1 space-y-6" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-[#ddb264]">Daam</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            Welcome to Daam, where creativity meets innovation. We specialize in delivering transformative solutions that drive success.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Our dedicated team is committed to excellence, working collaboratively to help you achieve your goals and exceed expectations.
          </p>

          <button className="px-6 py-3 bg-[#ddb264] text-black font-semibold rounded-md hover:bg-blue-400 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Right: Cards */}
        <div className="flex-1 space-y-6" data-aos="fade-left">

          {/* Mission */}
          <div className="bg-[#2e2e2e] rounded-lg p-6 shadow-lg flex items-center space-x-4">
            <div className="relative w-28 h-28">
              <Image
                src="/pictures/mission.jpg"
                alt="Our Mission"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#ddb264]">Our Mission</h3>
              <p className="text-[#faf1d4] text-sm leading-relaxed">
                To innovate and deliver world-class solutions that empower businesses and individuals to achieve their goals.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-[#2e2e2e] rounded-lg p-6 flex items-center space-x-4">
            <div className="relative w-28 h-28">
              <Image
                src="/pictures/vision.jpg"
                alt="Our Vision"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#ddb264]">Our Vision</h3>
              <p className="text-[#faf1d4] text-sm leading-relaxed">
                To be a global leader in creating innovative, impactful, and sustainable solutions for the future.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}