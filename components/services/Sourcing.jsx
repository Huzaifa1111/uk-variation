export default function Sourcing({ reverse = false }) {
  return (
    <section className="py-12 px-4 md:px-6 max-w-full bg-gray-100">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Image at top - Centered */}
        <div className="w-full mb-6 flex justify-center">
          <div className="max-w-md">
            <img
              src="/ser1 (3).png"
              alt="Sourcing Image"
              className="w-60 h-auto object-contain"
            />
          </div>
        </div>

        {/* Title below image */}
        <div className="w-full text-center mb-4">
          <h2 className="text-3xl font-bold text-blue-600">Sourcing</h2>
        </div>

        {/* Text below title */}
        <div className="w-full">
          <p className="text-base text-black text-center leading-relaxed">
            We offer comprehensive sourcing services for clients across various
            industries, ensuring access to high quality products at competitive
            prices. Our team carefully manages every step of the process, from
            supplier selection to negotiation, to guarantee value and
            reliability. Additionally, we conduct thorough quality inspections
            to ensure each product meets the required standards before it
            reaches our clients.
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
              src="/ser1 (3).png"
              alt="Sourcing Image"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Section - Fixed width */}
        <div className="w-[50%] flex justify-center items-center">
          <div className="max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
              Sourcing
            </h2>
            <p className="text-lg text-black leading-relaxed">
              We offer comprehensive sourcing services for clients across
              various industries, ensuring access to high quality products at
              competitive prices. Our team carefully manages every step of the
              process, from supplier selection to negotiation, to guarantee
              value and reliability. Additionally, we conduct thorough quality
              inspections to ensure each product meets the required standards
              before it reaches our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}