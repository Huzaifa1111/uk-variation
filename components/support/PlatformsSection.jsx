export default function PlatformsSection() {
  const platforms = [
    { name: "Amazon", logo: "/amazon-logo.png" }, // Add your logo files
    { name: "Shopify", logo: "/shopify-logo.png" },
    { name: "Noon", logo: "/noon-logo.png" },
    { name: "Notebook", logo: "/notebook-logo.png" },
    { name: "eBay", logo: "/ebay-logo.png" },
    { name: "Ebay", logo: "/ebay-logo.png" }, // You might want to use different variations
    { name: "EBay", logo: "/ebay-logo.png" },
    { name: "Center Point", logo: "/centerpoint-logo.png" },
  ];

  const socialMedia = [
    { name: "Google", logo: "/google-logo.png" },
    { name: "Facebook", logo: "/facebook-logo.png" },
    { name: "YouTube", logo: "/youtube-logo.png" },
    { name: "Webflow", logo: "/webflow-logo.png" },
  ];

  const footerLinks = {
    company: ["Home", "About Us", "Contact Us", "Help & Support"],
    quickLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"]
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            List your products anywhere
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start Selling Your Products<br />
            Across All Stores
          </p>

          {/* Platform Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto mb-12">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-center justify-center h-24"
              >
                <div className="text-center">
                  {/* Replace with actual logo images */}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xs">
                      {platform.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {platform.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-8">
              Didn't find your store? No worries you can still sell on your own store
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Company Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Naxi</span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Naxi.se is online platform for wholesellers who wants to sell and ship 
                their products to their customers directly.
              </p>
              
              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Follow us on social media
                </h4>
                <div className="flex space-x-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      title={social.name}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {social.name.charAt(0)}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Naxi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}