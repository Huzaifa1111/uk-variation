"use client";

import { useState } from 'react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqData = [
    {
      question: "How does back pricing work?",
      answer: "Dramatically formulate cross-unit products with web-enabled action items. Quickly maximize extensible methods of empowerment without out-of-the-box initiatives. Proactively myocardinate functional total linkage rather than seamless information. Holisticly fabricate timely initiatives vis-a-vis high-quality imperatives. Continually deploy open-source content through professional customer service."
    },
    {
      question: "Can you show me an example?",
      answer: "Continually innovate technically sound internal or organic sources with market positioning content. Completely drive optimal intellectual capital vis-a-vis global human capital. Intrinsicly administrate robust materials and bleeding-edge resources. Dynamically envisioneer next-generation markets vis-a-vis market-driven applications."
    },
    {
      question: "How do I processing I need?",
      answer: "Phosfluorescently deliver cooperative testing procedures after integrated communities. Dramatically simplify resource-leveling models with unique outsourcing. Professionally simplify covalent partnerships whereas market positioning best practices. Collaboratively utilize magnetic technology for robust technology."
    },
    {
      question: "What happens if I go over my limit?",
      answer: "Credibly facilitate leveraged process improvements for equity invested infrastructures. Continually mesh top-line human capital with backward-compatible outsourcing. Rapidiously coordinate intuitive deliverables rather than parallel metrics. Interactively monetize customer directed convergence and parallel sources. Enthusiastically architect client-centric e-services whereas granular e-commerce."
    },
    {
      question: "How do I calculate how much processing I need?",
      answer: "Distinctively enable premier potentialities through market positioning models. Distinctively extend unique infomediaries without enterprise-wide ideas. Objectively deploy multifunctional catalysts for change for installed base content. Seamlessly create go forward convergence through quality schemas. Objectively deploy cross-media leadership skills through customer directed sources."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSupport = () => {
    window.open('https://www.naxi.ae/contact-us', '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completely whiteboard top-line channels and fully tested value. Competently generate 
            testing procedures before visionary maintainable growth strategies for maintainable.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="flex justify-between items-center w-full py-6 text-left hover:bg-gray-50 px-4 rounded-lg transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${
                  openFaq === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pb-6 px-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still need help?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you get the most out of Naxi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactSupport}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}