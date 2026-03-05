"use client"

import React from 'react';

const ProductQuality = () => {
  return (
    <section className="w-full min-h-screen bg-[#F5F5F7] font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Top Section: Header & Buttons */}
        <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
            Sourcing done <br /> Right
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            We are offering comprehensive sourcing services for clients across various industries, ensuring access to high quality products at competitive prices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1D4ED8] hover:bg-blue-700 text-white px-10 py-3 rounded-full font-semibold text-sm md:text-base transition-colors min-w-[140px] shadow-lg shadow-blue-600/20">
              Sign up
            </button>
            <button className="bg-[#D1D5DB] hover:bg-gray-400 text-[#374151] px-10 py-3 rounded-full font-semibold text-sm md:text-base transition-colors min-w-[140px]">
              Start Sourcing
            </button>
          </div>
        </div>

        {/* Middle Section: Container Image */}
        <div className="w-full relative my-8 md:my-16 flex justify-center">
          {/* 
             Placeholder for the Blue Container Image.
             Please add your image to the public folder and name it 'sourcing-container.png'
             or update the src below.
          */}
          <img 
            src="/sourcingmainuk.svg" 
            alt="Blue Shipping Container" 
            className="w-full max-w-5xl object-contain drop-shadow-2xl"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = '<div class="w-full max-w-4xl h-64 md:h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold shadow-2xl transform rotate-1">Image: sourcing-container.png (Add to public folder)</div>';
            }}
          />
        </div>

        {/* Bottom Section: Content Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Badge & Headline */}
          <div className="flex flex-col items-start">
            <span className="inline-block px-6 py-2 rounded-full border border-blue-500 text-blue-600 font-medium text-sm mb-6 bg-transparent">
              Sourcing Service
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B0F3F] leading-tight">
              We'll get you what you need from anywhere.
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="flex items-center h-full pt-4 lg:pt-24">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We offer comprehensive sourcing services for clients across various industries, ensuring access to high quality products at competitive prices. Our team carefully manages every step of the process, from supplier selection to negotiation, to guarantee value and reliability. Additionally, we conduct thorough quality inspections to ensure each product meets the required standards before it reaches our clients.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductQuality;
