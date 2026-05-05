'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

import About from "./Route/About";
import Contact from "./Route/Contact";
import Footer from "./Route/Footer";
import Landing from "./Route/Landing";
import Curousel from "./Route/Curousel";
import Halfsection from "./Route/Halfsection";
import Navbar from "./Route/Navbar";
import Product from "./Route/Product";
// import Comingsoon from "./Route/Comingsoon";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        {/* Desktop Loader */}
        <div className="hidden md:block relative w-full h-screen bg-black">
          <Image
            src="/pictures/dmdesk.png"
            alt="Loading..."
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Mobile Loader */}
        <div className="md:hidden relative w-full h-screen bg-black">
          <Image
            src="/pictures/dmnewload.png"
            alt="Loading..."
            fill
            priority
            className="object-cover"
          />
        </div>
      </>
    );
  }

  return (
    <>
      {/* <Comingsoon /> */}
      <Navbar />
      <Landing />
      <About />
      <Halfsection />
      <Curousel />
      {/* <Product /> */}
      <Contact />
      <Footer />
    </>
  );
}