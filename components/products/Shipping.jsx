"use client";
import React from "react";
import { serviceMetadata } from "../../app/servicesData";

export default function Storage() {
  const { sections } = serviceMetadata.storage;

  return (
    <>
      <section className="bg-gray-100">
        {sections.map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center py-12 px-4">
              {/* Image at top */}
              <div className="w-full mb-6 flex justify-center">
                <div className="max-w-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-60 h-auto object-contain"
                  />
                </div>
              </div>

              {/* Title below image */}
              <div className="w-full text-center mb-4">
                <h2 className="text-3xl font-bold text-[#004CFF]">
                  {item.title}
                </h2>
              </div>

              {/* Text below title */}
              <div className="w-full">
                <p className="text-base text-black text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block py-12 px-4 md:px-6">
              <div
                className={`flex w-full max-w-7xl mx-auto ${
                  item.reverse ? 'flex-row-reverse' : 'flex-row'
                } items-center justify-between gap-12 lg:gap-48`}
              >
                {/* Image Section */}
                <div className="w-[45%] flex justify-center">
                  <div className="w-full max-w-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-[50%] flex justify-center items-center">
                  <div className="max-w-lg">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#004CFF] mb-6">
                      {item.title}
                    </h2>
                    <p className="text-lg text-black leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-black mb-8">
          What are you waiting for?
        </h2>
        <button
          onClick={() =>
            window.open("https://dashboard.naxi.ae/sign-up", "_blank")
          }
          className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </section>
    </>
  );
}