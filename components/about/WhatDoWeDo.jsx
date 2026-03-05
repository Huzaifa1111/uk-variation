import React from 'react';
import { PenTool, Target, Eye } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section className="bg-[#f2f2f2] min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Card - What we do? */}
        <div className="bg-[#101E9F] text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[500px] lg:min-h-[650px] relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-md">
              <PenTool className="w-8 h-8 text-[#101E9F]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">What we do?</h2>
          </div>
          
          <div className="relative z-10 space-y-8">
            <p className="text-xl md:text-2xl font-medium leading-snug">
              We help individuals and businesses establish and expand their ventures across different regions of the world.
            </p>
            <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
              by offering high-quality products at competitive prices. We provide the resources, support, and reliable supply chain you need to succeed in international markets.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 h-full">
          
          {/* Top Right Card - Our Mission */}
          <div className="bg-[#0D52D6] text-white rounded-3xl p-8 md:p-10 flex-1 flex flex-col justify-between shadow-xl">
             <div className="flex flex-col h-full justify-between gap-6">
                <h3 className="text-3xl md:text-4xl font-bold">Our Mission</h3>
                
                <div className="flex flex-col-reverse md:flex-row gap-6 items-start md:items-end justify-between">
                  <div className="max-w-lg space-y-4">
                    <p className="text-lg md:text-xl font-medium leading-snug">
                      To make quality products from around the world accessible to everyone
                    </p>
                    <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
                      by providing a trusted platform where buyers and sellers can connect, trade, and grow together.
                    </p>
                  </div>
                  <div className="bg-white w-20 h-20 rounded-3xl flex-shrink-0 flex items-center justify-center shadow-md self-end md:self-center">
                    <Target className="w-10 h-10 text-[#0D52D6]" />
                  </div>
                </div>
             </div>
          </div>

          {/* Bottom Right Card - Our Vision */}
          <div className="bg-[#E0E0E0] text-[#0f172a] rounded-3xl p-8 md:p-10 flex-1 flex flex-col justify-between shadow-xl">
            <div className="flex flex-col h-full justify-between gap-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#0f172a]">Our Vision</h3>
                
                <div className="flex flex-col-reverse md:flex-row gap-6 items-start md:items-end justify-between">
                  <div className="max-w-lg space-y-4">
                    <p className="text-lg md:text-xl font-medium leading-snug">
                      To empower youth by providing them everything needed for a successful business across the world.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      by streamline operations, and achieve sustainable growth through innovation, collaboration, and trust.
                    </p>
                  </div>
                  <div className="bg-[#0D52D6] w-20 h-20 rounded-3xl flex-shrink-0 flex items-center justify-center shadow-md self-end md:self-center">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
