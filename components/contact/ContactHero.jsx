"use client"  

import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="bg-gray-50 mt-18">
      {/* Hero Text Section with Background */}
      <div className="bg-[radial-gradient(circle_at_center,#175CFF_0%,#0E3799_100%)] text-white py-16 md:py-30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Seamlessly actualize client-based users after out-of-the-box value data through 
              frictionless expertise. Proactively coordinate quality vectors vis-à-vis supply chains. 
              Quickly engage client-centric web services.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods Grid - No Background */}
      <div className="container mx-auto px-6 mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Chat with us */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center flex flex-col">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Chat with us</h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              We have got live Social Experts waiting to help you Monday to Friday from 9am to 5pm EST.
            </p>
          <button 
  onClick={() => window.open('https://www.naxi.ae/contact-us', '_blank')}
  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-auto"
>
  Chat with us
</button>
          </div>

          {/* Email Us */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center flex flex-col">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Email Us</h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              Simple drop us an email at 
              <a href="mailto:hellothemetags@gmail.com" className="text-blue-600 font-semibold block mt-2 hover:underline">
                hellothemetags@gmail.com
              </a>
              and you will receive a reply within 24 hours
            </p>
            <a 
              href="mailto:hellothemetags@gmail.com"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block mt-auto"
            >
              Email Us
            </a>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center flex flex-col">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Give us a call</h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              Give us a ring. Our Experts are standing by Monday to Friday from 9am to 5pm EST.
            </p>
            <a 
              href="tel:00976561008"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center mt-auto"
            >
              Call 00-976-561-008
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}