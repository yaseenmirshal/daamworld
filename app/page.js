'use client'
import Head from "next/head";

import About from "./Route/About";
import Product from "./Route/Product";
import Contact from "./Route/Contact";
import Footer from "./Route/Footer";
import Landing from "./Route/Landing";

export default function Home() {
  return (
   <>
   
   <Landing/>
   <About/>
   <Product/>
   <Contact/>
   <Footer/>
   </>
  );
}
