'use client'
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
  return (
   <>
   {/* <Comingsoon/> */}
   <Landing/>
   <About/>
   <Halfsection/>
   <Curousel/>
   <Product/>
   <Contact/>
   <Footer/>
   </>
  );
}
