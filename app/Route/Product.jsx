'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function ProductsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    {
      title: "Luxury Faucet",
      desc: "A premium, water-efficient faucet designed with sleek lines and exceptional quality.",
      img: "/pictures/faucet.jpg",
    },
    {
      title: "Touchless Faucet",
      desc: "A modern touchless faucet with advanced sensor technology.",
      img: "https://i.pinimg.com/736x/f9/cd/d8/f9cdd8608bb2029b4533eb912911aa62.jpg",
    },
    {
      title: "Rainfall Shower Head",
      desc: "Enjoy a luxurious rain-like shower experience.",
      img: "https://i.pinimg.com/736x/bd/93/39/bd9339a7a38a41e8d2569cb46b70214f.jpg",
    },
    {
      title: "Smart Toilet",
      desc: "Luxury toilet with advanced hygiene and comfort features.",
      img: "https://i.pinimg.com/736x/be/8c/0c/be8c0c098e6221a03dd80b68108c7e28.jpg",
    },
    {
      title: "Wall-Mounted Tap",
      desc: "Minimalist wall-mounted tap for modern bathrooms.",
      img: "/pictures/walltap.jpg",
    },
    {
      title: "Bathroom Sink",
      desc: "Elegant designer washbasin for modern spaces.",
      img: "https://i.pinimg.com/736x/f8/31/fc/f831fc89432dfa55519c11fddc3cce62.jpg",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16" id="products">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Our Premium Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="relative w-full h-56 mb-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold text-blue-400">{item.title}</h3>

              <p className="text-gray-300 text-sm mb-4">
                {item.desc}
              </p>

              <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}