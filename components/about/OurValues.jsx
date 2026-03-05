import React from 'react';

const OurValues= () => {
  return (
    <section className="bg-[#F4F4F5] py-16 px-4 md:px-8 lg:px-12 font-sans flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Column - Text Content */}
        <div className="lg:w-5/12 space-y-8">
          {/* Pill Badge */}
          <div className="inline-block">
            <span className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-medium text-sm tracking-wide bg-transparent">
              Our Values
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15]">
            A place for Dropshippers, by Dropshippers.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We have been in the trenches, and we know what it takes to build what you love only to be stopped by predatory platforms who like to take credit and money from you. We think it's time for a change. Welcome home.
          </p>

          <button className="bg-[#1d4ed8] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-base transition-colors shadow-lg shadow-blue-600/20">
            Get Started
          </button>
        </div>

        {/* Right Column - Grid Cards */}
        <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 - Pricing */}
          <div className="bg-[#E4E4E7] p-8 rounded-[2rem] flex flex-col gap-6 h-full min-h-[280px]">
            <div className="w-14 h-14 flex items-center justify-center">
              {/* SVG for Credit Card / Pricing */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1d4ed8]">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#1f2937] font-medium leading-relaxed mt-auto">
              We offer the most competitive prices in the market, ensuring affordability without compromising quality.
            </p>
          </div>

          {/* Card 2 - Quality */}
          <div className="bg-[#E4E4E7] p-8 rounded-[2rem] flex flex-col gap-6 h-full min-h-[280px]">
            <div className="w-14 h-14 flex items-center justify-center">
              {/* SVG for Award / Quality */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1d4ed8]">
                <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#1f2937] font-medium leading-relaxed mt-auto">
              Our dedicated agents in China carefully inspect and verify every product to guarantee exceptional quality and reliability.
            </p>
          </div>

          {/* Card 3 - Speed */}
          <div className="bg-[#E4E4E7] p-8 rounded-[2rem] flex flex-col gap-6 h-full min-h-[280px]">
            <div className="w-14 h-14 flex items-center justify-center">
              {/* SVG for Timer / Speed */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1d4ed8]">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#1f2937] font-medium leading-relaxed mt-auto">
              Through our trusted logistics partners, we deliver products within just three working days, ensuring speed and consistency.
            </p>
          </div>

          {/* Card 4 - Variety */}
          <div className="bg-[#E4E4E7] p-8 rounded-[2rem] flex flex-col gap-6 h-full min-h-[280px]">
            <div className="w-14 h-14 flex items-center justify-center">
              {/* SVG for Search / Variety */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1d4ed8]">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#1f2937] font-medium leading-relaxed mt-auto">
              We strive to provide even the most in-demand or hard-to-find products, making sure our customers always get what they need.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurValues;
