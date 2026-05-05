'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProductsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#1e1e1e] text-white py-16" id="products">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ddb264]" data-aos="fade-up">
          Our Premium Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Product Card */}
          {[ 
            {
              title: "Luxury Faucet",
              img: "/pictures/faucet.jpg",
              desc: "Premium, water-efficient faucet designed with sleek lines.",
            },
            {
              title: "Touchless Faucet",
              img: "https://i.pinimg.com/736x/f9/cd/d8/f9cdd8608bb2029b4533eb912911aa62.jpg",
              desc: "Modern touchless faucet with advanced sensor technology.",
            },
            {
              title: "Rainfall Shower Head",
              img: "https://i.pinimg.com/736x/bd/93/39/bd9339a7a38a41e8d2569cb46b70214f.jpg",
              desc: "Enjoy a luxurious rain-like shower experience.",
            },
            {
              title: "Smart Toilet",
              img: "https://i.pinimg.com/736x/be/8c/0c/be8c0c098e6221a03dd80b68108c7e28.jpg",
              desc: "Advanced toilet with comfort and hygiene features.",
            },
            {
              title: "Wall-Mounted Tap",
              img: "/pictures/walltap.jpg",
              desc: "Minimalist wall-mounted tap for modern bathrooms.",
            },
            {
              title: "Wash Basin",
              img: "https://i.pinimg.com/736x/f8/31/fc/f831fc89432dfa55519c11fddc3cce62.jpg",
              desc: "Elegant designer basin for luxury spaces.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
              data-aos="fade-up"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />

              <h3 className="text-xl font-bold text-[#ddb264]">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {item.desc}
              </p>

              <button className="px-6 py-3 bg-[#ddb264] text-black font-semibold rounded-md hover:bg-[#c9a45a] transition-all duration-300">
                View Details
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}