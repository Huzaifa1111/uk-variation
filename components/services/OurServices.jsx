"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { PanelTopOpen, Globe, BadgeCheck } from 'lucide-react';

const services = [
  {
    id: 'storage',
    title: 'Storage',
    description: 'We provide our customers with reliable and well-managed storage solutions designed to keep their products safe, organized, and protected.',
    icon: <PanelTopOpen className="w-8 h-8 text-white" strokeWidth={2} />,
    imageName: 'storageuk.svg'
  },
  {
    id: 'sourcing',
    title: 'Sourcing',
    description: 'We offer comprehensive sourcing services for clients across various industries, ensuring access to high quality products at competitive prices.',
    icon: <Globe className="w-8 h-8 text-white" strokeWidth={2} />,
    imageName: 'sourcinguk.svg'
  },
  {
    id: 'quality',
    title: 'Product Quality Check',
    description: 'We have three dedicated teams based in China that specialize in product quality inspections. Each team ensures that every item meets strict quality standards before shipment.',
    icon: <BadgeCheck className="w-8 h-8 text-white" strokeWidth={2} />,
    imageName: 'productquality.svg'
  }
];

const OurServices = () => {
  return (
    <section className="min-h-screen bg-[#EEEEEE] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-8 lg:sticky lg:top-24 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Pill Label */}
              <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-blue-600 mb-6">
                <span className="text-blue-600 font-medium text-sm tracking-wide">3PL Service</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a45] leading-tight">
                We got it all<br />covered.
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Service Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-6 shadow-blue-200 shadow-lg">
                  {/* 
                    NOTE: To use the actual SVG files requested:
                    1. Place storageuk.svg, sourcinguk.svg, etc. in the /public folder.
                    2. Uncomment the line below and remove the {service.icon} block.
                  */}
                  {/* <img src={`/${service.imageName}`} alt={service.title} className="w-8 h-8" /> */}
                  
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-[#1a1a45] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;
