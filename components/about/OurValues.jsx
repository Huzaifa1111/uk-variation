export default function OurValues() {
  return (
    <section className=" md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8 text-center">
        Our Values
      </h2>

      {/* Mobile Layout - 2 columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-gradient-to-r from-[#467DFF] to-[#004CFF] text-white p-4 md:p-6 rounded-2xl md:rounded-3xl text-center">
          <div className="flex justify-center mb-4 md:mb-8 mt-4 md:mt-6">
            <img
              src="/vector(11).png"
              alt="Icon"
              className="w-12 h-8 md:w-16 md:h-12"
            />
          </div>
          <p className="text-xs md:text-sm p-2 md:p-4">
            We offer the most competitive prices in the market, ensuring
            affordability without compromising quality.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#467DFF] to-[#004CFF] text-white p-4 md:p-6 rounded-2xl md:rounded-3xl text-center">
          <div className="flex justify-center mb-4 md:mb-8 mt-4 md:mt-6">
            <img
              src="/vector(11).png"
              alt="Icon"
              className="w-12 h-8 md:w-16 md:h-12"
            />
          </div>
          <p className="text-xs md:text-sm p-2 md:p-4">
            Our dedicated agents in China carefully inspect and verify every
            product to guarantee exceptional quality and reliability.{" "}
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#467DFF] to-[#004CFF] text-white p-4 md:p-6 rounded-2xl md:rounded-3xl text-center">
          <div className="flex justify-center mb-4 md:mb-8 mt-4 md:mt-6">
            <img
              src="/vector(11).png"
              alt="Icon"
              className="w-12 h-8 md:w-16 md:h-12"
            />
          </div>
          <p className="text-xs md:text-sm p-2 md:p-4">
            Through our trusted logistics partners, we deliver products within
            just three working days, ensuring speed and consistency.{" "}
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#467DFF] to-[#004CFF] text-white p-4 md:p-6 rounded-2xl md:rounded-3xl text-center">
          <div className="flex justify-center mb-4 md:mb-8 mt-4 md:mt-6">
            <img
              src="/vector(11).png"
              alt="Icon"
              className="w-12 h-8 md:w-16 md:h-12"
            />
          </div>
          <p className="text-xs md:text-sm p-2 md:p-4">
            We strive to provide even the most in-demand or hard-to-find
            products, making sure our customers always get what they need.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
