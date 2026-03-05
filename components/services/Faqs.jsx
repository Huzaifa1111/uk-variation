"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "Some Question 1",
    answer: "Here is the answer to question 1. We provide detailed insights and solutions tailored to your specific needs, ensuring clarity and efficiency in every step of the process."
  },
  {
    id: 2,
    question: "Some Question 2",
    answer: "Here is the answer to question 2. Our services are designed to scale with your business, offering flexibility and reliability whenever you need it."
  },
  {
    id: 3,
    question: "Some Question 3",
    answer: "Here is the answer to question 3. We prioritize security and quality assurance, making sure that your products are handled with the utmost care."
  },
  {
    id: 4,
    question: "Some Question 4",
    answer: "Here is the answer to question 4. Our team is available 24/7 to assist you with any inquiries or support you might require."
  },
  {
    id: 5,
    question: "Some Question 5",
    answer: "Here is the answer to question 5. We offer competitive pricing models that are transparent and free from hidden charges."
  },
  {
    id: 6,
    question: "Some Question 6",
    answer: "Here is the answer to question 6. Getting started is easy—just sign up, and our onboarding team will guide you through the rest."
  }
];

const FaqItem = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={toggleOpen}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-[#1a1a45] font-bold text-lg">{item.question}</span>
        <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faqs = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#EEEEEE] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full border border-blue-600 mb-6">
            <span className="text-blue-600 font-medium text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a45] mb-6">
            Got Questions? We've got<br />Answers!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We understand you might have a few questions before starting your journey with us. Here are some of the most common queries we receive.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {faqData.map((item) => (
            <FaqItem 
              key={item.id} 
              item={item} 
              isOpen={openId === item.id} 
              toggleOpen={() => handleToggle(item.id)} 
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1044CD] rounded-[2.5rem] py-16 px-6 text-center relative overflow-hidden"
        >
          {/* Subtle background gradient effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <button className="bg-white text-[#1044CD] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Sign Up Now
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Faqs;
