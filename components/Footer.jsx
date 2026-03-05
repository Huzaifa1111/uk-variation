"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SiWhatsapp, SiSnapchat, SiPinterest } from "react-icons/si";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Icon mapping for social media
const iconComponents = {
  SiWhatsapp,
  Twitter,
  Facebook,
  SiSnapchat,
  Instagram,
  SiPinterest,
};

export default function Footer() {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // Footer section data - moved from data.js
  const footerData = {
    // Footer styling
    styles: {
      footerClass: "bg-[#0E2A62] text-white py-8 px-4 sm:px-6 lg:px-8",
      mobileContainerClass: "block lg:hidden",
      desktopContainerClass:
        "hidden lg:flex flex-col xl:flex-row justify-between gap-8 max-w-8xl mx-auto",
    },

    // Logo and company info
    companyInfo: {
      logo: {
        src: "/logofooter.svg",
        alt: "Naxi Logo",
        mobileClass: "w-24 h-auto mb-4",
        desktopClass: "w-28 h-auto mb-6",
      },
      description:
        "Naxi.ae is an online platform for wholesalers who want to sell and ship their products to their customers directly.",
      descriptionClass: "text-xs sm:text-sm text-gray-300 mb-2",
      copyright: "All rights reserved",
      copyrightClass: "text-xs text-blue-500",
    },

    // Navigation links
    navigation: {
      title: "Navigation",
      titleClass: "text-lg font-semibold mb-4",
      mobileTitleClass: "text-sm font-semibold",
      links: [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "Products", href: "https://dashboard.naxi.ae/products" },
        { id: 3, name: "Hot Items", href: "/#hot-items" },
        { id: 4, name: "Categories", href: "/#categories" },
      ],
      listClass: "space-y-2 text-xs sm:text-sm",
      mobileListClass: "space-y-2 text-xs pl-8",
      linkClass: "text-gray-300 hover:text-white transition-colors",
    },

    // Help & Support links
    support: {
      title: "Help & Support",
      titleClass: "text-lg font-semibold mb-4",
      mobileTitleClass: "text-sm font-semibold",
      links: [
        { id: 1, name: "FAQs", href: "/support#faqs" },
        {
          id: 2,
          name: "Terms & conditions",
          href: "https://www.naxi.ae/terms-and-conditions",
        },
        { id: 3, name: "Blog", href: "https://dashboard.naxi.ae/sign-in" },
        {
          id: 4,
          name: "Privacy Policy",
          href: "https://www.naxi.ae/privacy-policy",
        },
      ],
      listClass: "space-y-2 text-xs sm:text-sm",
      mobileListClass: "space-y-2 text-xs pl-8",
      linkClass: "text-gray-300 hover:text-white transition-colors",
    },

    // Contact information
    contact: {
      title: "Contact us",
      titleClass: "text-lg font-semibold mb-4",
      mobileTitleClass: "text-sm font-semibold mb-3 underline",
      contacts: [
        {
          id: 1,
          type: "phone",
          value: "+123 456 789",
          href: "tel:+123 456 789",
          display: "+123 456 789",
        },
        {
          id: 2,
          type: "email",
          value: "naxi@support.com",
          href: "mailto:naxi@support.com",
          display: "naxi@support.com",
        },
      ],
      listClass: "space-y-2 text-xs sm:text-sm",
      linkClass: "text-gray-300 hover:text-white transition-colors",
    },

    // Email subscription
    subscription: {
      placeholder: "Write E-mail",
      buttonText: "Send",
      polygonIcon: "/polygon1.png",
      inputClass:
        "flex-1 bg-transparent text-neutral-400 text-sm px-2 outline-none",
      buttonClass:
        "bg-blue-600 text-white rounded-[5px] px-4 py-2 flex items-center gap-2 -ml-16",
      mobileContainerClass: "flex items-center bg-zinc-300 rounded-lg p-2",
      desktopContainerClass: "mb-4 flex justify-start w-full",
    },

    // Social media links
    socialMedia: {
      title: "Follow us on social media:",
      titleClass: "text-sm font-semibold mb-3 text-left",
      mobileTitleClass: "text-xs font-semibold mb-3",
      platforms: [
        {
          id: 1,
          name: "WhatsApp",
          icon: "SiWhatsapp",
          linkhref: "#",
          color: "hover:text-green-400 transition-colors",
          size: 24,
        },
        {
          id: 2,
          name: "Twitter",
          icon: "Twitter",
          linkhref: "#",
          color: "hover:text-sky-400 transition-colors",
          size: 24,
        },
        {
          id: 3,
          name: "Facebook",
          icon: "Facebook",
          linkhref: "https://www.facebook.com/profile.php?id=61554021314577",
          color: "hover:text-blue-500 transition-colors",
          size: 24,
        },
        {
          id: 4,
          name: "Snapchat",
          icon: "SiSnapchat",
          linkhref: "#",
          color: "hover:text-yellow-400 transition-colors",
          size: 24,
        },
        {
          id: 5,
          name: "Instagram",
          icon: "Instagram",
          linkhref: "https://www.instagram.com/naxi.ae/",
          color: "hover:text-pink-400 transition-colors",
          size: 24,
        },
        {
          id: 6,
          name: "Pinterest",
          icon: "SiPinterest",
          linkhref: "#",
          color: "hover:text-red-500 transition-colors",
          size: 24,
        },
      ],
      containerClass: "flex space-x-4 justify-start flex-wrap",
      mobileContainerClass: "flex space-x-3 justify-center flex-wrap",
    },

    // Mobile dropdown configuration
    mobile: {
      dropdownButtonClass:
        "w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center",
      dropdownIcon: {
        src: "/downarrow.png",
        alt: "arrow",
        class: "w-3 h-3 transition-transform",
      },
      dropdownSectionClass: "flex-1",
    },

    // Desktop layout widths - Balanced spacing
    desktop: {
      leftSectionWidth: "w-full lg:w-1/5 xl:w-1/6",
      navigationWidth: "w-full lg:w-1/5 xl:w-1/6",
      supportWidth: "w-full lg:w-1/5 xl:w-1/6",
      contactWidth: "w-full lg:w-1/5 xl:w-1/6",
      socialWidth: "w-full lg:w-1/5 xl:w-1/5", // Balanced width
    },
  };

  const {
    styles,
    companyInfo,
    navigation,
    support,
    contact,
    subscription,
    socialMedia,
    mobile,
    desktop,
  } = footerData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setMessage("Redirecting...");

    setTimeout(() => {
      router.push(`/contact?email=${encodeURIComponent(email)}#contact-form`);
    }, 500);
  };

  return (
    <footer className={styles.footerClass}>
      {/* Mobile Layout */}
      <div className={styles.mobileContainerClass}>
        {/* Logo Section */}
        <div className="text-left mb-6">
          <img
            src={companyInfo.logo.src}
            alt={companyInfo.logo.alt}
            className={companyInfo.logo.mobileClass}
          />
          <p className={companyInfo.descriptionClass}>
            {companyInfo.description}
          </p>
        </div>

        {/* Dropdown Sections in One Row */}
        <div className="flex gap-4 mb-6">
          {/* Navigation Dropdown */}
          <div className={mobile.dropdownSectionClass}>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className={mobile.dropdownButtonClass}
              >
                <img
                  src={mobile.dropdownIcon.src}
                  alt={mobile.dropdownIcon.alt}
                  className={`${mobile.dropdownIcon.class} ${
                    isNavOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <h3 className={navigation.mobileTitleClass}>
                {navigation.title}
              </h3>
            </div>
            {isNavOpen && (
              <ul className={navigation.mobileListClass}>
                {navigation.links.map((link) => (
                  <li key={link.id} className="list-disc list-inside">
                    <a href={link.href} className={navigation.linkClass}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Help & Support Dropdown */}
          <div className={mobile.dropdownSectionClass}>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setIsSupportOpen(!isSupportOpen)}
                className={mobile.dropdownButtonClass}
              >
                <img
                  src={mobile.dropdownIcon.src}
                  alt={mobile.dropdownIcon.alt}
                  className={`${mobile.dropdownIcon.class} ${
                    isSupportOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <h3 className={support.mobileTitleClass}>{support.title}</h3>
            </div>
            {isSupportOpen && (
              <ul className={support.mobileListClass}>
                {support.links.map((link) => (
                  <li key={link.id} className="list-disc list-inside">
                    <a href={link.href} className={support.linkClass}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Email Subscription Section */}
        <div className="mb-6">
          <form
            onSubmit={handleSubmit}
            className={subscription.mobileContainerClass}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={subscription.placeholder}
              className={subscription.inputClass}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className={subscription.buttonClass}
              disabled={isSubmitting}
            >
              <span className="text-sm">
                {isSubmitting ? "Sending..." : subscription.buttonText}
              </span>
              <img
                src={subscription.polygonIcon}
                alt="Polygon"
                className="w-2 h-3"
              />
            </button>
          </form>
          {message && (
            <p
              className={`text-sm mt-2 ${
                message.includes("Thank you")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>

        {/* Contact Us and Social Media in One Line */}
        <div className="flex items-start gap-8 mb-8 mt-8">
          {/* Contact Us */}
          <div className="flex-1">
            <h3 className={contact.mobileTitleClass}>{contact.title}</h3>
          </div>

          {/* Social Media */}
          <div className="flex-1">
            <h3 className={socialMedia.mobileTitleClass}>
              {socialMedia.title}
            </h3>
            <div className={socialMedia.mobileContainerClass}>
              {socialMedia.platforms.map((platform) => {
                const IconComponent = iconComponents[platform.icon];
                return (
                  <a
                    key={platform.id}
                    href={platform.href}
                    aria-label={platform.name}
                    className={platform.color}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* All rights reserved */}
        <div className="text-left">
          <p className={companyInfo.copyrightClass}>{companyInfo.copyright}</p>
        </div>
      </div>

      {/* Tablet and Desktop Layout */}
      <div className={styles.desktopContainerClass}>
        {/* Left Side: Logo + About + Copyright */}
        <div className={`mb-6 lg:mb-0 ${desktop.leftSectionWidth}`}>
          <img
            src={companyInfo.logo.src}
            alt={companyInfo.logo.alt}
            className={companyInfo.logo.desktopClass}
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">About us</h3>
            <p className={`${companyInfo.descriptionClass} mb-4 max-w-xs`}>
              {companyInfo.description}
            </p>
            <p className={companyInfo.copyrightClass}>
              {companyInfo.copyright}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className={`mb-6 lg:mb-0 ${desktop.navigationWidth}`}>
          <h3 className={navigation.titleClass}>{navigation.title}</h3>
          <ul className={navigation.listClass}>
            {navigation.links.map((link) => (
              <li key={link.id} className="list-disc list-inside">
                <a href={link.href} className={navigation.linkClass}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Support */}
        <div className={`mb-6 lg:mb-0 ${desktop.supportWidth}`}>
          <h3 className={support.titleClass}>{support.title}</h3>
          <ul className={support.listClass}>
            {support.links.map((link) => (
              <li key={link.id} className="list-disc list-inside">
                <a href={link.href} className={support.linkClass}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className={`mb-6 lg:mb-0 ${desktop.contactWidth}`}>
          <h3 className={contact.titleClass}>{contact.title}</h3>
          <div className="space-y-3">
            {contact.contacts.map((contactItem) => (
              <div key={`contact-${contactItem.id}`} className="text-xs">
                <span className="font-medium block">
                  {contactItem.type === "phone" ? "Call: " : "Email: "}
                </span>
                <a href={contactItem.href} className={contact.linkClass}>
                  {contactItem.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media with Email Input */}
        <div className={desktop.socialWidth}>
          <div className="space-y-4">
            {/* Email Subscription */}
            <form
              onSubmit={handleSubmit}
              className={subscription.desktopContainerClass}
            >
              <div className="w-full">
                <div className="relative bg-zinc-300 rounded-lg h-12 flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={subscription.placeholder}
                    className="w-full h-full bg-transparent text-black border-none outline-none px-4 text-sm rounded-lg"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-[5px] h-8 px-3 flex items-center justify-center gap-1"
                    disabled={isSubmitting}
                  >
                    <span className="text-white text-sm font-normal">
                      {isSubmitting ? "..." : subscription.buttonText}
                    </span>
                    <img
                      src={subscription.polygonIcon}
                      alt="Polygon"
                      className="w-3 h-4"
                    />
                  </button>
                </div>
              </div>
            </form>

            {message && (
              <p
                className={`text-sm mt-2 ${
                  message.includes("Thank you")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}

            {/* Social Media */}
            <div className="w-full">
              <h3 className={socialMedia.titleClass}>{socialMedia.title}</h3>
              <div className={socialMedia.containerClass}>
                {socialMedia.platforms.map((platform) => {
                  const IconComponent = iconComponents[platform.icon];
                  return (
                    <a
                      key={platform.id}
                      href={platform.linkhref}
                      aria-label={platform.name}
                      className={platform.color}
                    >
                      <IconComponent size={platform.size} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}