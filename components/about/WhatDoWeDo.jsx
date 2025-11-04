export default function WhatDoWeDo() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Image at top */}
     <div className="w-full mb-6 flex justify-center">
  <div className="w-64 h-auto rounded-lg overflow-hidden shadow-md">
    <img src="/Mask group.png" alt="What we do" className="w-full h-auto" />
  </div>
</div>
        
        {/* Title below image */}
        <div className="w-full text-center mb-4">
          <h2 className="text-3xl font-bold text-blue-600">What we do?</h2>
        </div>
        
        {/* Text below title */}
        <div className="w-full">
          <p className="text-base text-black text-center">
We help individuals and businesses establish and expand their ventures across different regions of the world. Our mission is to make global growth accessible by offering high-quality products at competitive prices. Whether you're just starting out or scaling your operations, we provide the resources, support, and reliable supply chain you need to succeed in international markets.         </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">What we do?</h2>
            <p className="text-lg text-black">
We help individuals and businesses establish and expand their ventures across different regions of the world. Our mission is to make global growth accessible by offering high-quality products at competitive prices. Whether you're just starting out or scaling your operations, we provide the resources, support, and reliable supply chain you need to succeed in international markets.            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-120 h-auto rounded-lg ml-40">
            <img src="/Mask group.png" alt="What we do" />
          </div>
        </div>
      </div>
    </section>
  )
}