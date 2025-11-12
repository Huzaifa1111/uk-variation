export default function OurMission() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Image at top */}
        <div className=" mb-6 justify-center">
          <div className="w-65 h-auto rounded-lg overflow-hidden">
            <img src="ourvision1.png" alt="Our Vision" className="w-full h-auto" />
          </div>
        </div>

        {/* Title below image */}
        <div className="w-full text-center mb-4">
          <h2 className="text-3xl font-bold text-blue-600">Our Vision</h2>
        </div>

        {/* Text below title */}
        <div className="w-full">
          <p className="text-base text-black text-center">
            Our vision is to empower the youth by providing them with the tools, knowledge, and support needed to build and grow successful businesses across different regions of the world. We aim to become a problem-solving force in the e-commerce industry—helping young entrepreneurs overcome challenges, streamline operations, and achieve sustainable growth through innovation, collaboration, and trust.          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-16">

        <div className="md:w-1/2 flex justify-center items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">Our Vision</h2>
            <p className="text-lg text-black">
              Our vision is to empower the youth by providing them with the tools, knowledge, and support needed to build and grow successful businesses across different regions of the world. We aim to become a problem-solving force in the e-commerce industry—helping young entrepreneurs overcome challenges, streamline operations, and achieve sustainable growth through innovation, collaboration, and trust.            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-120 h-auto rounded-lg">
            <img src="/ourvision1.png" alt="Our Vision" />
          </div>
        </div>
      </div>
    </section>
  )
}