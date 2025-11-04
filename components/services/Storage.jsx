export default function Storage() {
  return (
    <section className="md:px-6 max-w-full">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Image at top */}
        <div className="w-full mb-6">
          <div className="w-full h-auto rounded-lg">
            <img src="/ser1 (1).png" alt="Storage Image" className="w-full h-auto" />
          </div>
        </div>
        
        {/* Title below image */}
        <div className="w-full text-center mb-4">
          <h2 className="text-xl font-bold text-blue-600">Storage</h2>
        </div>
        
        {/* Text below title */}
        <div className="w-full">
          <p className="text-base text-black text-center">
We provide our customers with reliable and well-managed storage solutions designed to keep their products safe, organized, and protected. Our facilities are maintained with strict safety standards, ensuring that every item remains secure and in excellent condition until it’s ready for delivery or use.          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-48">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">Storage</h2>
            <p className="text-lg text-black">
We provide our customers with reliable and well-managed storage solutions designed to keep their products safe, organized, and protected. Our facilities are maintained with strict safety standards, ensuring that every item remains secure and in excellent condition until it’s ready for delivery or use.            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-auto rounded-lg">
            <img src="/ser1 (1).png" alt="Storage Image" />
          </div>
        </div>
      </div>
    </section>
  );
}