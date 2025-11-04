"use client";

import Image from "next/image";

export default function OurProcess() {
  const steps = [
    {
      img: "/vector (12).png",
      title: "Sourcing",
      desc:
        "We source high-quality products at competitive prices, managing every step from supplier selection to quality inspection to ensure reliability and value.",
    },
    {
      img: "/vector (13).png",
      title: "Shipping & Customer Clearance",
      desc:
        "We offer air and sea shipping through trusted partners, ensuring fast, affordable, and hassle-free global delivery with complete customs support.",
    },
    {
      img: "/vector (14).png",
      title: "Warehousing & Fulfillment",
      desc:
        "We provide secure, well-managed storage facilities to keep products safe, organized, and ready for dispatch.",
    },
    {
      img: "/vector (15).png",
      title: "Order Confirmation & Follow Up",
      desc:
        "Our dedicated team oversees each order from confirmation to delivery, ensuring accuracy, efficiency, and customer satisfaction.",
    },
    {
      img: "/vector (16).png",
      title: "Delivery to Your Customer",
      desc:
        "We work with five reliable shipping companies, delivering orders within three working days to ensure speed and consistency.",
    },
    {
      img: "/vector (17).png",
      title: "COD Remittance",
      desc:
        "We process payments to dropshippers within seven working days after delivery, ensuring transparency and strong partnerships.",
    },
  ];

  return (
    <section className="bg-gray-100 md:py-16 py-10">
      <div className="max-w-7xl mx-auto MD:px-6 px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black">Our Values</h2>
        </div>

        {/* ====== DESKTOP / TABLET LAYOUT ====== */}
        <div className="hidden sm:flex flex-wrap justify-between gap-y-8 gap-x-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="w-[48%] relative rounded-2xl p-14 overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-gradient-to-br from-[#004CFF] to-[#467DFF] text-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                  <Image src={step.img} alt={step.title} width={60} height={60} />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/90">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* ====== MOBILE LAYOUT (2 cards per row) ====== */}
        <div className="grid sm:hidden grid-cols-2 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-4 bg-gradient-to-br from-[#004CFF] to-[#467DFF] text-white shadow-md flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-3">
                <Image src={step.img} alt={step.title} width={40} height={40} />
              </div>
              <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
              <p className="text-xs text-white/90 leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
