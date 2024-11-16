'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProductsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-16" id="products">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Our Premium Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src="./pictures/faucet.jpg"
              alt="Luxury Faucet"
              className="w-full h-56 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold text-blue-400">Luxury Faucet</h3>
            <p className="text-gray-300 text-sm mb-4">
              A premium, water-efficient faucet designed with sleek lines and exceptional quality.
            </p>
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition-all duration-300"
            >
              View Details
            </button>
          </div>

          {/* Product 2 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src="https://i.pinimg.com/736x/f9/cd/d8/f9cdd8608bb2029b4533eb912911aa62.jpg"
              alt="Touchless Faucet"
              className="w-full h-56 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold text-blue-400">Touchless Faucet</h3>
            <p className="text-gray-300 text-sm mb-4">
              A modern touchless faucet with advanced sensor technology for hygiene and convenience.
            </p>
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition-all duration-300"
            >
              View Details
            </button>
          </div>

          {/* Product 3 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src="https://i.pinimg.com/736x/bd/93/39/bd9339a7a38a41e8d2569cb46b70214f.jpg"
              alt="Shower Head"
              className="w-full h-56 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold text-blue-400">Rainfall Shower Head</h3>
            <p className="text-gray-300 text-sm mb-4">
              Enjoy a luxurious rain-like shower experience with this state-of-the-art rainfall shower head.
            </p>
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition-all duration-300"
            >
              View Details
            </button>
          </div>

          {/* Product 4 */}
          <div
      className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
      data-aos="fade-up"
    >
      <img
        src="https://i.pinimg.com/736x/be/8c/0c/be8c0c098e6221a03dd80b68108c7e28.jpg"  // Replace with your product image URL
        alt="Modern Toilet & Bidet"
        className="w-full h-56 object-cover rounded-lg mb-6"
      />
      <h3 className="text-xl font-bold text-blue-400">Smart Toilet</h3>
      <p className="text-gray-300 text-sm mb-4">
        This advanced toilet and bidet combo offers luxury, hygiene, and comfort. Featuring adjustable water pressure and heated seats.
      </p>
      <div className="flex items-center justify-between">
     
        <button
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </div>

          {/* Product 5 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src="./pictures/walltap.jpg"
              alt="Wall-Mounted Tap"
              className="w-full h-56 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold text-blue-400">Wall-Mounted Tap</h3>
            <p className="text-gray-300 text-sm mb-4">
              A modern wall-mounted tap that combines simplicity with function, perfect for minimalist bathrooms.
            </p>
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition-all duration-300"
            >
              View Details
            </button>
          </div>

          {/* Product 6 */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src="https://i.pinimg.com/736x/f8/31/fc/f831fc89432dfa55519c11fddc3cce62.jpg"
              alt="Bathroom Sink / Washbasins"
              className="w-full h-56 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold text-blue-400">Bathroom Sink / Washbasins</h3>
            <p className="text-gray-300 text-sm mb-4">
              A luxury designer sink that will add elegance and functionality to your bathroom space and Washbasins.
            </p>
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition-all duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
