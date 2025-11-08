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
import { footerData } from "../data";

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

      {/* Desktop Layout */}
      <div className={styles.desktopContainerClass}>
        {/* Left Side: Logo + About + Copyright */}
        <div className={`mb-6 md:mb-0 ${desktop.leftSectionWidth}`}>
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
        <div className={`mb-6 md:mb-0 ${desktop.navigationWidth}`}>
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
        <div className={`mb-6 md:mb-0 ${desktop.supportWidth}`}>
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
        <div className={`mb-6 md:mb-0 ${desktop.contactWidth}`}>
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
          <form
            onSubmit={handleSubmit}
            className={subscription.desktopContainerClass}
          >
            <div className="Group88 w-96 h-14 relative">
              <div className="Rectangle25 w-65 h-12 left-[115px] t-10 top-0 absolute bg-zinc-300 rounded-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={subscription.placeholder}
                  className="w-full h-full bg-transparent text-black border-none outline-none px-4 text-sm"
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="Rectangle26 w-20 h-8 left-[290px] top-[8px] absolute bg-blue-600 rounded-[5px] flex items-center justify-center gap-1"
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
          </form>
          {message && (
            <p
              className={`text-sm mt-2 ml-32 ${
                message.includes("Thank you")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <div className="ml-32">
            <div>
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
