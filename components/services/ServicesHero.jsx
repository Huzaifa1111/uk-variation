import React from 'react';
import Image from 'next/image';

const ServicesHero = () => {
  return (
    <section className="bg-[#f2f2f2] py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Top Section: Header & CTA */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-[#111827] mb-6 tracking-tight leading-tight">
            Everything<br />
            You will need
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            Experience the best of Naxi's services! We offer highly competitive rates for our INDIVIDUAL services, so you can enjoy top-notch solutions
          </p>
          <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-12 py-3 rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-600/30">
            Sign up
          </button>
        </div>

        {/* Middle Section: Dashboard Image with Glow */}
        <div className="relative w-full max-w-6xl mx-auto mb-32">
          {/* Blue Glow Effect Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-blue-600/40 blur-[100px] -z-10 rounded-full pointer-events-none" />
          
          {/* Dashboard Image */}
           <Image src="/serviceimg.svg" alt="Dashboard" width={1200} height={600} className="..." /> 
        
        </div>

        {/* Bottom Section: 3PL Service Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Title */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-semibold text-sm tracking-wide bg-transparent">
                3PL Service
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#101E9F] leading-[1.15]">
              Offering Third Party Logistics so you may thrive.
            </h2>
          </div>

          {/* Right Column: Description Text */}
          <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
            <p>
              We also offer comprehensive 3PL (Third-Party Logistics) services to support customers selling on platforms such as Amazon, TikTok Shop, eBay, Shopify, Facebook, and more. From inventory management and order fulfillment to packaging and timely delivery, we handle every step of the logistics process, allowing our clients to focus on growing their business while we take care of the operations.
            </p>
            <p>
              We also offer comprehensive 3PL (Third-Party Logistics) services to support customers selling on platforms such as Amazon, TikTok Shop, eBay, Shopify, Facebook, and more. From inventory management and order fulfillment to packaging and timely delivery, we handle every step of the logistics process, allowing our clients to focus on growing their business while we take care of the operations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesHero;
