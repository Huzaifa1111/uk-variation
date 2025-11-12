"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Package, Users, User, Menu, X, ChevronDown } from "lucide-react";
import { FaWarehouse, FaSearch, FaTruck, FaClipboardCheck } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Navigation data
const navData = {
  mobileTabs: [
    { href: "/", icon: Home, label: "Home" },
    { href: "/naxi-360", icon: Package, label: "Naxi 360", whitespace: true },
    { href: "/about", icon: Users, label: "About Us", whitespace: true },
    { href: "/support", icon: User, label: "Support" }, // Changed from Profile to Support
  ],
  desktopNav: [
    { href: "/", label: "Home" },
    { href: "/naxi-360", label: "Naxi 360" },
    { href: "/about", label: "About Us" },
    { href: "/naxi-dropshipping", label: "Naxi Dropshipping" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact Us" },
  ],
  servicesItems: [
    { href: "/services", icon: null, label: "All Services" },
    { href: "/services/storage", icon: FaWarehouse, label: "Storage" },
    { href: "/services/sourcing", icon: FaSearch, label: "Sourcing" },
    { href: "/services/threeplservice", icon: FaTruck, label: "3PL Service" },
    { href: "/services/productqualitycheck", icon: FaClipboardCheck, label: "Quality Check" },
  ],
  moreMenuItems: [
    { href: "/naxi-dropshipping", label: "Naxi Dropshipping" },
    { href: "/contact", label: "Contact Us" },
  ]
};

 // Page checks
const pageChecks = {
  isAboutPage: pathname === "/about" || pathname === "/about/",
  isServicesPage: pathname === "/services",
  isStoragePage: pathname === "/services/storage",
  isSourcingPage: pathname === "/services/sourcing",
  isThreePlServicePage: pathname === "/services/threeplservice",
  isProductQualityCheckPage: pathname === "/services/productqualitycheck",
  isProductsPage: pathname === "/naxi-360" || pathname === "/naxi-360/",
  isPricingPage: pathname === "/naxi-dropshipping",
  isHomePage: pathname === "/",
  isSupportPage: pathname === "/support" || pathname === "/support/", 
  
};

  const isAnyServicesPage = Object.values(pageChecks).slice(1, 6).some(Boolean);
  
  // FIXED: Show main header logic
  const showMainHeader = 
    // Always show on desktop
    !isMobile || 
    // For mobile on Naxi 360 page, show when scrolled
    (isMobile && pageChecks.isProductsPage && scrolled) ||
    // For mobile on other pages, always show
    (isMobile && !pageChecks.isProductsPage);

  const getHeaderBackground = () => {
    if (pathname === "/about") return "bg-gradient-to-r from-[#1C45A7] to-[#0B1B41]";
    if (pathname === "/") return scrolled ? "bg-gradient-to-r from-[#1C45A7] to-[#0B1B41]" : "";
    
    // Naxi 360 page - different behavior for mobile vs desktop
    if (pathname === "/naxi-360") {
      if (isMobile) {
        return scrolled ? "bg-gradient-to-r from-[#1C45A7] to-[#0B1B41]" : "";
      } else {
        // Desktop - always show background
        return "bg-gradient-to-r from-[#1C45A7] to-[#0B1B41]";
      }
    }
    
    return "bg-gradient-to-r from-[#1C45A7] to-[#0B1B41]";
  };

  const MobileTab = ({ tab }) => {
  const IconComponent = tab.icon;
  const isActive = pageChecks[`is${tab.label.replace(/\s+/g, '')}Page`] ||
    (tab.href === "/" && pageChecks.isHomePage) ||
    (tab.href === "/naxi-360" && pageChecks.isProductsPage) ||
    (tab.href === "/about" && pageChecks.isAboutPage) ||
    (tab.href === "/support" && pageChecks.isSupportPage); // Updated this line

  return (
    <a href={tab.href} className="flex flex-col items-center relative flex-1 mt-2">
      {isActive ? (
        <div className="relative flex flex-col items-center px-4 py-2">
          <img src="/Union.png" alt="Selected Tab" className="absolute top-0 w-full h-full object-cover" />
          <div className="relative z-10 flex flex-col items-center">
            <IconComponent size={22} className="text-blue-700" />
            <span className={`text-xs mt-1 text-blue-700 ${tab.whitespace ? 'whitespace-nowrap' : ''}`}>
              {tab.label}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center px-4 py-2 text-white hover:text-gray-200 transition-colors">
          <IconComponent size={22} />
          <span className={`text-xs mt-1 ${tab.whitespace ? 'whitespace-nowrap' : ''}`}>{tab.label}</span>
        </div>
      )}
    </a>
  );
};

  const ServicesItem = ({ item, isMobile = false }) => {
    const IconComponent = item.icon;
    const isActive = pageChecks[`is${item.label.replace(/\s+/g, '')}Page`] ||
      (item.href === "/services" && pageChecks.isServicesPage);

    if (isMobile) {
      return (
        <a href={item.href} className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg text-sm text-white transition-colors">
          {IconComponent && <IconComponent size={16} className="text-blue-200" />}
          {item.label}
        </a>
      );
    }

    return (
      <a
        href={item.href}
        className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${isActive ? "text-blue-600 font-medium bg-blue-50" : "text-gray-700"
          }`}
      >
        {IconComponent && <IconComponent size={16} className="text-blue-500" />}
        <span>{item.label}</span>
      </a>
    );
  };

  return (
    <>
      {/* Main Header */}
      {showMainHeader && (
        <header className={`py-4 px-6 flex justify-between items-center fixed w-full z-50 transition-all duration-300 ${getHeaderBackground()}`}>
          {/* Logo */}
          <a href="/">
            <img src="/my7.webp" alt="Naxi Logo" className="md:w-28 w-24 h-auto cursor-pointer flex-shrink-0" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-8">
            <div className="flex items-center justify-center space-x-8 2xl:space-x-12 flex-wrap">
              {navData.desktopNav.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-white hover:underline text-sm whitespace-nowrap ${(item.href === "/support" && pageChecks.isSupportPage) ||
                    (item.href === "/contact" && pageChecks.isContactPage) ? "text-blue-300 underline" : ""
                    }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center space-x-1 text-sm whitespace-nowrap ${isAnyServicesPage ? "text-blue-300 underline" : "text-white"
                    } hover:underline transition-colors`}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setTimeout(() => setServicesDropdownOpen(false), 2000)}
                >
                  <span>Services</span>
                  <ChevronDown size={14} className={`transform transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setTimeout(() => setServicesDropdownOpen(false), 2000)}
                  >
                    {navData.servicesItems.map((item, index) => (
                      <ServicesItem key={index} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {/* <img src="/vector (10).png" alt="Notifications" className="w-5 h-6 cursor-pointer hover:opacity-80" />
            <a href="/profile">
              <img src="/profile.png" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80" />
            </a> */}
          </div>

          <div className="lg:hidden"></div>
        </header>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-blue-500 border-t rounded-tl-2xl rounded-tr-2xl border-gray-200 z-40">
          <div className="flex justify-around items-center">
            {navData.mobileTabs.map((tab, index) => (
              <MobileTab key={index} tab={tab} />
            ))}

            <button onClick={() => setMenuOpen(true)} className="flex flex-col items-center relative flex-1 text-white hover:text-gray-200 transition-colors">
              <div className="flex flex-col items-center px-4 py-2">
                <Menu size={22} />
                <span className="text-xs mt-1">More</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* More Menu Popup */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
          <div className="bg-gradient-to-b from-[#1C45A7] to-[#0B1B41] rounded-t-3xl w-full max-w-lg mx-auto max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-blue-400">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-blue-600 rounded-full text-white">
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <a href="/services" className="flex items-center justify-between p-3 hover:bg-blue-600 rounded-lg text-white transition-colors">
                <span className="font-medium">Services</span>
                <button onClick={(e) => { e.preventDefault(); setServicesOpen(!servicesOpen); }} className="p-1 text-white">
                  <span className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
              </a>

              {servicesOpen && (
                <div className="ml-4 space-y-2 border-l-2 border-blue-400 pl-4">
                  {navData.servicesItems.slice(1).map((item, index) => (
                    <ServicesItem key={index} item={item} isMobile={true} />
                  ))}
                </div>
              )}

              {navData.moreMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center p-3 hover:bg-blue-600 rounded-lg text-white transition-colors ${(item.href === "/support" && pageChecks.isSupportPage) ||
                    (item.href === "/contact" && pageChecks.isContactPage) ? "bg-blue-600" : ""
                    }`}
                >
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}