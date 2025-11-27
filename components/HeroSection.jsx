"use client";

import Image from "next/image";
import { heroData } from "../data";

export default function HeroSection() {
  const { textContent, styles, desktopSlides } = heroData;

  return (
    <section className={styles.sectionClass}>
      {/* Left Side */}
      <div className="grid grid-flow-row gap-2">
        {desktopSlides.leftSide.map((img, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              className={img.className}
              alt={`left-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid gap-2">
        <div className="col-span-full text-center">
          <h1 className="text-4xl font-bold mb-4">{textContent.heading1}</h1>
          <h1 className="text-4xl font-bold">{textContent.heading2}</h1>
        </div>

        {/* 3 Column Images */}
        <div className="grid grid-cols-3 gap-8 col-span-full items-end">
          {/* Left */}
          <div className="flex items-center justify-center">
            <Image {...desktopSlides.middle.leftCard} alt="middle-left" />
          </div>

          {/* Center */}
          <div className="flex flex-col items-center relative p-5">
            <div className="flex items-center justify-center mb-9">
              <Image {...desktopSlides.middle.centerCard} alt="middle-center" />
            </div>

            <a
              href="https://dashboard.naxi.ae/sign-up"
              target="_blank"
              className="hover:cursor-pointer absolute -bottom-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
            >
              {desktopSlides.middle.centerCard.buttonText}
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            <Image {...desktopSlides.middle.rightCard} alt="middle-right" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-flow-row gap-2">
        {desktopSlides.rightSide.map((img, index) => (
          <div key={index}>
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              className={img.className}
              alt={`right-${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
