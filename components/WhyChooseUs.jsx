export default function WhyChooseUs() {
  // Data moved from data.js
  const whyChooseUsData = {
    // Section styling and layout
    styles: {
      sectionClass: "md:py-12 py-8 md:px-6 px-4",
      headingClass:
        "md:text-4xl text-3xl font-bold md:mb-12 mb-8 text-gray-900 text-center",
      gridClass:
        "grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-6 max-w-6xl mx-auto",
      itemClass:
        "md:p-6 p-4 hover:shadow-lg transition-shadow duration-300 relative", // Added relative
    },

    // Main heading
    heading: "Why Choose us?",

    // Reasons data with titles, descriptions, and icons
    reasons: [
      {
        id: 1,
        title: "Shipping and Delivery",
        desc: "Naxi's strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.",
        icon: "/vector(3).svg",
        iconClass: "md:w-16 md:h-16 w-14 h-14 flex-shrink-0 absolute left-4 top-1/2 -translate-y-1/2", // Vertically centered
        titleClass: "text-lg font-bold mb-3 text-gray-900 pl-20", // Padding for icon space
        descClass: "text-gray-700 text-sm font-semibold leading-relaxed pl-20", // Same padding for alignment
      },
      {
        id: 2,
        title: "Our Inventory: Your Portfolio",
        desc: "Your dream of a diverse, profitable online store shouldn't be capped by upfront inventory costs. Access our constantly curated portfolio of 5,000+ high-margin, in-demand products across dozens of categories.",
        icon: "/vector(4).svg",
        iconClass: "md:w-16 md:h-16 w-14 h-14 flex-shrink-0 absolute left-4 top-1/2 -translate-y-1/2",
        titleClass: "text-lg font-bold mb-3 text-gray-900 pl-20",
        descClass: "text-gray-700 text-sm font-semibold leading-relaxed pl-20",
      },
      {
        id: 3,
        title: "Work from Anywhere",
        desc: "Your laptop and an internet connection are your new headquarters. Naxi's entire platform is cloud-based, giving you the freedom to manage your thriving e-commerce business from anywhere in the world.",
        icon: "/vector(5).svg",
        iconClass: "md:w-16 md:h-16 w-14 h-14 flex-shrink-0 absolute left-4 top-1/2 -translate-y-1/2",
        titleClass: "text-lg font-bold mb-3 text-gray-900 pl-20",
        descClass: "text-gray-700 text-sm font-semibold leading-relaxed pl-20",
      },
      {
        id: 4,
        title: "Get Paid Faster",
        desc: "Your focus should be on growth, not on chasing payments or calculating fees. Naxi offers transparent, seller-friendly payment terms. We ensure you get your earned profits on time, every time, with a clear breakdown for every transaction.",
        icon: "/vector(6).svg",
        iconClass: "md:w-16 md:h-16 w-14 h-14 flex-shrink-0 absolute left-4 top-1/2 -translate-y-1/2",
        titleClass: "text-lg font-bold mb-3 text-gray-900 pl-20",
        descClass: "text-gray-700 text-sm font-semibold leading-relaxed pl-20",
      },
    ],
  };

  const { 
    styles, 
    heading, 
    reasons 
  } = whyChooseUsData;

  return (
    <section className={styles.sectionClass}>
      <h2 className={styles.headingClass}>{heading}</h2>
      <div className={styles.gridClass}>
        {reasons.map((reason) => (
          <div key={reason.id} className={styles.itemClass}>
            {/* Icon - positioned absolutely to align vertically with content */}
            <div className={reason.iconClass}>
              <img 
                src={reason.icon} 
                alt={reason.title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Content with heading and paragraph */}
            <div>
              <h3 className={reason.titleClass}>{reason.title}</h3>
              <p className={reason.descClass}>{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}