"use client"
import React from 'react';

const Storage = () => {
  return (
    <section className="w-full min-h-screen bg-[#F5F5F7] font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Top Section: Header & Buttons */}
        <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
            Inventory Storage <br className="hidden md:block" /> Services
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            You can buy from your suppliers and ship to our warehouses in UAE. We serve as your fulfillment center, taking care of your inventory and getting the orders delivered to your customers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1D4ED8] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-colors min-w-[140px]">
              Sign up
            </button>
            <button className="bg-[#D1D5DB] hover:bg-gray-400 text-[#374151] px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-colors min-w-[140px]">
              Start Sourcing
            </button>
          </div>
        </div>

        {/* Middle Section: Image */}
        {/* 
          Using standard img tag as this is a Vite environment. 
          The image is set to full width to match the banner style in the design.
        */}
        <div className="w-full relative my-8 md:my-16 flex justify-center">
          <img 
            src="/Storagemainuk.svg" 
            alt="Inventory Storage Boxes" 
            className="w-full max-w-6xl object-contain drop-shadow-xl"
            onError={(e) => {
              // Fallback if image is missing, just to keep layout structure visible
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = '<div class="w-full h-48 md:h-80 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-400/20 rounded-xl flex items-center justify-center text-blue-500 font-medium">Image: Storagemainuk.svg</div>';
            }}
          />
        </div>

        {/* Bottom Section: Content Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Badge & Headline */}
          <div className="flex flex-col items-start">
            <span className="inline-block px-6 py-2 rounded-full border border-blue-500 text-blue-600 font-medium text-sm mb-6 bg-transparent">
              Storage Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0F3F] leading-tight">
              When you have no inventory, you have Naxi.
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="flex items-center h-full pt-4 lg:pt-20">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We provide our customers with reliable and well-managed storage solutions designed to keep their products safe, organized, and protected. Our facilities are maintained with strict safety standards, ensuring that every item remains secure and in excellent condition until it's ready for delivery or use.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Storage;
