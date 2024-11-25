'use client'
import { useState, useEffect } from "react";
import Head from "next/head";

import About from "./Route/About";
import Product from "./Route/Product";
import Contact from "./Route/Contact";
import Footer from "./Route/Footer";
import Landing from "./Route/Landing";
import Curousel from "./Route/Curousel";
import Halfsection from "./Route/Halfsection";
import Comingsoon from "./Route/Comingsoon";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <img
          src="/pictures/daamyell.png" // Replace with your loader image path
          alt="Loading..."
          className="h-screen w-full"
        />
      </div>
    );
  }

  return (
    <>
      {/* <Comingsoon/> */}
      <Landing />
      <About />
      <Halfsection />
      <Curousel />
      {/* <Product/> */}
      <Contact />
      <Footer />
    </>
  );
}
