export default function ThreePlService() {
  return (
    <section className="md:px-6 max-w-7xl mx-auto">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Image at top */}
        <div className="w-full mb-6">
          <div className="w-full h-auto rounded-lg">
            <img src="/ser1 (4).png" alt="3PL Service Image" className="w-full h-auto" />
          </div>
        </div>
        
        {/* Title below image */}
        <div className="w-full text-center mb-4">
          <h2 className="text-xl font-bold text-blue-600">3pl Service</h2>
        </div>
        
        {/* Text below title */}
        <div className="w-full">
          <p className="text-base text-black text-center">
We also offer comprehensive 3PL (Third-Party Logistics) services to support customers selling on platforms such as Amazon, TikTok Shop, eBay, Shopify, Facebook, and more. From inventory management and order fulfillment to packaging and timely delivery, we handle every step of the logistics process, allowing our clients to focus on growing their business while we take care of the operations.          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">3pl Service</h2>
            <p className="text-lg text-black">
We also offer comprehensive 3PL (Third-Party Logistics) services to support customers selling on platforms such as Amazon, TikTok Shop, eBay, Shopify, Facebook, and more. From inventory management and order fulfillment to packaging and timely delivery, we handle every step of the logistics process, allowing our clients to focus on growing their business while we take care of the operations.            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-120 h-auto rounded-lg ml-15">
            <img src="/ser1 (4).png" alt="3PL Service Image" />
          </div>
        </div>
      </div>
    </section>
  )
}