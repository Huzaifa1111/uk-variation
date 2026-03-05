export default function CourierPartners() {
  // Courier partners section data - moved from data.js
  const courierPartnersData = {
    // Section styling and layout
    styles: {
      sectionClass: "bg-gray-100 py-12 px-6 text-center",
      iconClass: "mx-auto mb-4 md:w-18 md:h-12 w-16 sm:w-20 sm:h-16 md:mb-6",
      headingClass: "text-2xl sm:text-4xl font-bold mb-8 md:mb-12 text-black",
      logosContainerClass:
        "flex flex-wrap justify-center items-center md:gap-24 gap-8 sm:gap-12",
    },

    // Icon and heading content
    content: {
      icon: {
        src: "/vector(7).png",
        alt: "Delivery Truck",
      },
      heading: "Our Courier Partners",
    },

    // Partner logos
    partners: [
      {
        id: 1,
        src: "/imile.png",
        alt: "iMile Partner",
        className: "md:w-20 md:h-14 w-15 h-8 sm:w-28 sm:h-16 object-contain",
      },
      {
        id: 2,
        src: "/jeebly.png",
        alt: "Jeebly Partner",
        className: "md:w-24 md:h-14 w-15 h-8 sm:w-28 sm:h-16 object-contain",
      },
      {
        id: 3,
        src: "/eco.png",
        alt: "Eco Partner",
        className: "md:w-24 md:h-14 w-15 h-8 sm:w-28 sm:h-16 object-contain",
      },
    ],
  };

  const { styles, content, partners } = courierPartnersData;

  return (
    <section className={styles.sectionClass}>
      {/* Icon */}
      <img
        src={content.icon.src}
        alt={content.icon.alt}
        className={styles.iconClass}
      />

      {/* Title */}
      <h2 className={styles.headingClass}>{content.heading}</h2>

      {/* Logos */}
      <div className={styles.logosContainerClass}>
        {partners.map((partner) => (
          <img
            key={partner.id}
            src={partner.src}
            alt={partner.alt}
            className={partner.className}
          />
        ))}
      </div>
    </section>
  );
}