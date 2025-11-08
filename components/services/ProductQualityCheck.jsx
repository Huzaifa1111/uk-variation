"use client"
export default function ProductQualityCheck({ reverse = false }) {
  return (
    <>
      <section className="py-12 px-4 md:px-6 max-w-full bg-gray-100">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Image at top */}
          <div className="w-full mb-6 flex justify-center">
            <div className="max-w-md">
              <img
                src="/ser1 (5).png"
                alt="Quality Check Image"
                className="w-60 h-auto object-contain"
              />
            </div>
          </div>
          
          {/* Title below image */}
          <div className="w-full text-center mb-4">
            <h2 className="text-3xl font-bold text-blue-600">Product Quality Check</h2>
          </div>
          
          {/* Text below title */}
          <div className="w-full">
            <p className="text-base text-black text-center leading-relaxed">
              We have three dedicated teams based in China that specialize in product quality inspections. Each team ensures that every item meets strict quality standards before shipment. Since we believe quality is the foundation of any successful business, our inspection process is designed to identify and eliminate defects, guaranteeing that our clients receive only the best products.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className={`hidden md:flex w-full max-w-7xl mx-auto ${
            reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          } items-center justify-between gap-12 lg:gap-48`}
        >
          {/* Image Section - Fixed width */}
          <div className="w-[45%] flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="/ser1 (5).png"
                alt="Quality Check Image"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Section - Fixed width */}
          <div className="w-[50%] flex justify-center items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
                Product Quality Check
              </h2>
              <p className="text-lg text-black leading-relaxed">
                We have three dedicated teams based in China that specialize in product quality inspections. Each team ensures that every item meets strict quality standards before shipment. Since we believe quality is the foundation of any successful business, our inspection process is designed to identify and eliminate defects, guaranteeing that our clients receive only the best products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Responsive */}
      <section className="py-8 md:py-12 text-center bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-8">What are you waiting for?</h2>
        <button 
          className="mb-6 md:mb-8 px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
          onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
        >
          Sign Up
        </button>
      </section>
    </>
  );
}