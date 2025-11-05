export default function SupportHero() {
  return (
    <section className="bg-gray-50 mt-16">
      {/* Hero Text Section  */}
      <div className="bg-[radial-gradient(circle_at_center,#175CFF_0%,#0E3799_100%)] text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help & Support</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Seamlessly actualize client-based users after out-of-the-box value data through
            frictionless expertise. Proactively coordinate quality vectors vis-a-vis supply chains.
            Quickly engage client-centric web services.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or contact support..."
                className="w-full px-6 py-4 rounded-lg text-white placeholder-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Help Cards */}
      <div className="container mx-auto px-6 mt-12 mb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">FAQ Center</h3>
            <p className="text-gray-600">Find quick answers to common questions</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Contact Support</h3>
            <p className="text-gray-600">Get help from our support team</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Documentation</h3>
            <p className="text-gray-600">Detailed guides and tutorials</p>
          </div>
        </div>
      </div>
    </section>
  );
}