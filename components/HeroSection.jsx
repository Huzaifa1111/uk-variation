"use client";

import { useState, useEffect, useRef } from "react";
import { heroData } from '../data'; 

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const touchTimeoutRef = useRef(null);

  // Destructure data from heroData
  const { 
    textContent, 
    styles, 
    backgroundImages, 
    mobileSlides, 
    desktopSlides, 
    carousel 
  } = heroData;

  // Touch event handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > carousel.minSwipeDistance;
    const isRightSwipe = distance < -carousel.minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - next slide
      setActiveSlide((prev) => (prev + 1) % mobileSlides.length);
    } else if (isRightSwipe) {
      // Swipe right - previous slide
      setActiveSlide((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
    }
  };

  // Auto switch every 3 seconds (uncomment to enable)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % mobileSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.sectionClass}>
      {/* Background Ellipses - Desktop Only */}
      <div className="hidden md:block">
        <img
          src={backgroundImages.ellipse1}
          alt="Center Ellipse"
          className="absolute left-1/2 top-1/2 w-[800px] h-[800px] transform -translate-x-1/2 -translate-y-1/2 opacity-70 select-none"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
        <img
          src={backgroundImages.ellipse2}
          alt="Center Ellipse"
          className="absolute left-1/2 top-100 w-[1200px] h-[1200px] transform -translate-x-1/2 -translate-y-1/2 opacity-70 select-none"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-3xl mx-auto relative z-10 mt-10">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
          {textContent.title}
        </h1>
        <p className="mx-auto max-w-[27rem] mb-6 md:mb-8 text-sm md:text-md hidden md:block">
          {textContent.subtitle}
        </p>
        <a 
          href="https://dashboard.naxi.ae/sign-up"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonClass}
        >
          {textContent.buttonText}
        </a>
      </div>

      {/* Mobile Slides with Touch Events */}
      <div 
        className="block md:hidden relative h-10 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        {mobileSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {slide.images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={`Slide ${index} Image ${i}`}
                className={`${img.className} select-none`}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
              />
            ))}
          </div>
        ))}
        
        {/* Mobile Circle Background */}
        <img
          src={backgroundImages.circle}
          alt="Circle"
          className="absolute left-1/2 top-1/2 w-48 h-48 transform -translate-x-1/2 -translate-y-1/2 opacity-90 grayscale z-20 select-none"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      {/* Desktop Slides */}
      <div className="hidden md:block">
        {desktopSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {slide.images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={`Slide ${index} Image ${i}`}
                className={`${img.className} select-none`}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
              />
            ))}
          </div>
        ))}
        
        {/* Desktop Circle Background */}
        <img
          src={backgroundImages.circle}
          alt="Circle"
          className="absolute left-1/2 top-1/2 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 opacity-90 grayscale z-20 select-none"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      {/* Carousel Dots */}
      <div className="absolute md:bottom-8 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-30">
        {mobileSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-300 ${
              index === activeSlide
                ? "w-6 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}