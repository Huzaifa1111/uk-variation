export default function ThreePlService({ reverse = false }) {
  return (
    <section className="py-12 px-4 md:px-6 max-w-full bg-gray-100">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Image at top */}
        <div className="w-full mb-6 flex justify-center">
          <div className="max-w-md">
            <img
              src="/ser1 (4).png"
              alt="3PL Service Image"
              className="w-60 h-auto object-contain"
            />
          </div>
        </div>

        {/* Title below image */}
        <div className="w-full text-center mb-4">
          <h2 className="text-3xl font-bold text-blue-600">3PL Service</h2>
        </div>

        {/* Text below title */}
        <div className="w-full">
          <p className="text-base text-black text-center leading-relaxed">
            We also offer comprehensive 3PL (Third-Party Logistics) services to
            support customers selling on platforms such as Amazon, TikTok Shop,
            eBay, Shopify, Facebook, and more. From inventory management and
            order fulfillment to packaging and timely delivery, we handle every
            step of the logistics process, allowing our clients to focus on
            growing their business while we take care of the operations.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div
        className={`hidden md:flex w-full max-w-7xl mx-auto ${
          reverse ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between gap-12 lg:gap-48`}
      >
        {/* Image Section - Fixed width */}
        <div className="w-[45%] flex justify-center">
          <div className="w-full max-w-md">
            <img
              src="/ser1 (4).png"
              alt="3PL Service Image"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Section - Fixed width */}
        <div className="w-[50%] flex justify-center items-center">
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
              3PL Service
            </h2>
            <p className="text-lg text-black leading-relaxed">
              We also offer comprehensive 3PL (Third-Party Logistics) services
              to support customers selling on platforms such as Amazon, TikTok
              Shop, eBay, Shopify, Facebook, and more. From inventory management
              and order fulfillment to packaging and timely delivery, we handle
              every step of the logistics process, allowing our clients to focus
              on growing their business while we take care of the operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
