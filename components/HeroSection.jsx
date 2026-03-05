"use client"

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Hero section data - moved from data.js
  const heroData = {
    styles: {
      sectionClass: "flex justify-between items-center gap-8",
    },

    textContent: {
      heading1: "Start E-Commerce",
      heading2: "with Naxi Today",
    },

    desktopSlides: {
      leftSide: [
        {
          src: "/medicine_homebanner.png",
          width: 200,
          height: 20,
          className:
            "transform transition-transform duration-300 h-90 w-70 ease-in-out hover:scale-105",
        },
        {
          src: "/juicer_homebanner.png",
          width: 200,
          height: 20,
          className:
            "transform transition-transform duration-300 h-50 w-70 ease-in-out hover:scale-105",
        },
      ],

      middle: {
        leftCard: {
          src: "/lego_homebanner.png",
          width: 20,
          height: 20,
          className:
            "transform transition-transform duration-300 ease-in-out hover:scale-105 h-80 w-70",
        },
        centerCard: {
          src: "/face_homebanner.png",
          width: 20,
          height: 20,
          className:
            "transform transition-transform duration-300 ease-in-out hover:scale-105 h-60 w-70",
          buttonText: "Join Now",
        },
        rightCard: {
          src: "/lotion_homebanner.png",
          width: 200,
          height: 500,
          className:
            "transform transition-transform duration-300 ease-in-out hover:scale-105 h-80 w-70",
        },
      },

      rightSide: [
        {
          src: "/head_homebanner.png",
          width: 200,
          height: 500,
          className:
            "transform transition-transform duration-300 ease-in-out hover:scale-105 h-90 w-70",
        },
        {
          src: "/lipstick_homebanner.png",
          width: 200,
          height: 500,
          className:
            "h-50 w-70 transform transition-transform duration-300 ease-in-out hover:scale-105",
        },
      ],
    },

    // Styling and layout constants
    sectionClass:
      "border-3 md:py-40 py-20 px-6 relative overflow-hidden grid grid-flow-col gap-4",
  };

  return (
    <section className="md:pt-15 bg-[#F5F5F5] min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center overflow-hidden">
      <div className="max-w-[90rem] w-full mx-auto">
        
        <div className="flex flex-col lg:flex-row  items-stretch">
          
          {/* Left Column */}
          <div className="lg:w-1/4 flex flex-col gap-4 md:pt-10">
            {/* Vitamin Card - Orange */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-grow rounded-[2rem] relative overflow-hidden min-h-[350px] lg:min-h-[450px] group"
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img 
                  src={heroData.desktopSlides.leftSide[0].src}
                  alt="Vitamin C & Iron" 
                  className="object-contain w-[120%] h-[120%] transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
            
            {/* Blender Card - Dark Red */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-56 rounded-[2rem] relative overflow-hidden group"
            >
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <img 
                  src={heroData.desktopSlides.leftSide[1].src}
                  alt="Kitchen Blender" 
                  className="object-contain w-[130%] h-[130%] drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Center Column */}
          <div className="lg:w-1/2 flex flex-col items-center justify-between gap-6">
            
            {/* Main Title */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center pt-2 lg:pt-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1a1a45] leading-tight tracking-tight">
                {heroData.textContent.heading1}<br />
                {heroData.textContent.heading2}
              </h1>
            </motion.div>

            {/* Center Row of Cards */}
            <div className="grid grid-cols-3 w-full h-72 lg:h-80">
              {/* Lego - Blue */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-[2rem] relative overflow-hidden group"
              >
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <img 
                    src={heroData.desktopSlides.middle.leftCard.src}
                    alt="Lego Figure" 
                    className="object-contain w-[120%] h-[120%] drop-shadow-xl transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Face Device - Pink */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-[2rem] relative overflow-hidden group"
              >
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <img 
                    src={heroData.desktopSlides.middle.centerCard.src}
                    alt="Beauty Device" 
                    className="object-contain w-[130%] h-[130%] drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Foundation - Beige */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-[2rem] relative overflow-hidden group"
              >
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <img 
                    src={heroData.desktopSlides.middle.rightCard.src}
                    alt="Foundation Makeup" 
                    className="object-contain w-[120%] h-[120%] drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#185CFF] text-white px-12 py-2 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-300/50 transition-all"
            >
              {heroData.desktopSlides.middle.centerCard.buttonText}
            </motion.button>

          </div>

          {/* Right Column */}
          <div className="lg:w-1/4 flex flex-col ">
            {/* Headphones - Blue */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-grow rounded-[2rem] relative overflow-hidden min-h-[300px] group"
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img 
                  src={heroData.desktopSlides.rightSide[0].src}
                  alt="Wireless Headphones" 
                  className="object-contain w-[120%] h-[120%] transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Lipstick - Red */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-56 rounded-[2rem] relative overflow-hidden group"
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img 
                  src={heroData.desktopSlides.rightSide[1].src}
                  alt="Red Lipstick" 
                  className="object-contain w-[140%] h-[140%] drop-shadow-xl transform group-hover:translate-y-[-10px] group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;