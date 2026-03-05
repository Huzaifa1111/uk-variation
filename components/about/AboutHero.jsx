  import React from 'react';

  const AboutHero = () => {
    const stats = [
      { number: "50000+", label: "Sellers" },
      { number: "5+", label: "Years in Business" },
      { number: "30+", label: "Warehouses" },
      { number: "4+", label: "Shipping partners" },
      { number: "25+", label: "Categories" },
      { number: "4+", label: "Regions" },
    ];

    return (
      <section className="bg-[#f2f2f2] py-16 md:py-24 relative overflow-hidden font-sans">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <img 
            src="/blurbg.svg" 
            alt="Blur Background" 
            className="w-full h-full object-cover opacity-100 blur-xs"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-1 relative z-10">
          
          {/* Header Content */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Why Choose us?
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
              We aim to enable more than 50,000 sellers to build their business and do what they love doing. We have been working from last 5 year in United Arab Emirates.
            </p>
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-base transition-colors shadow-lg shadow-blue-600/20">
              Learn more
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 md:mt-40 ">
            <div className="bg-[#D9D9D9] rounded-xl p-8 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center justify-center gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-[#2563EB]">
                      {stat.number}
                    </span>
                    <span className="text-gray-800 font-medium text-sm md:text-base">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  };

  export default AboutHero; 