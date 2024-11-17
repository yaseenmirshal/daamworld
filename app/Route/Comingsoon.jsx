import React from 'react';

function Comingsoon() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      {/* Image */}
      <img 
        src="./pictures/daambrandyellow.jpg" 
        alt="Coming Soon" 
        className="absolute inset-0 w-full h-full object-cover object-right-bottom sm:object-center"
      />
       <img 
        src="./pictures/daamcroped.jpg" 
        alt="Coming Soon" 
        className="md:hidden absolute inset-0 w-full h-full object-cover  sm:object-center"
      />
      
      {/* Text Overlay */}
      <div className="absolute bottom-10 text-center">
        <h1 className="text-3xl font-bold text-[#ddb264] tracking-wider">COMING SOON...</h1>
      </div>
    </div>
  );
}

export default Comingsoon;
