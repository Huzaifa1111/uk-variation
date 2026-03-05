export default function RegionSelection() {
  // Region selection data - moved from data.js
  const regionData = {
    styles: {
      sectionClass: "md:bg-gray-100 bg-gray-100",
      containerClass:
        " flex flex-col items-center p-[60px] text-center text-black overflow-hidden",
      headingClass:
        "text-2xl sm:text-2xl md:text-[54px] font-bold md:mb-10 text-black whitespace-nowrap text-blue-600",
    },

    // Main heading text
    headingp1: `Making money`,
    headingp2: `has never been easier`,
    para: "We handle the inventory and delivery while YOU keep the profit",

    // Countries data with flags and labels
    countries: [
      {
        id: 1,
        name: "Saudi Arabia",
        flag: {
          src: "/ksaflag.png",
          alt: "Saudi Arabia Map",
          className:
            "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2",
        },
        labelClass: "text-xs sm:text-sm md:text-base font-medium",
      },
      {
        id: 2,
        name: "Pakistan",
        flag: {
          src: "/pakflag.png",
          alt: "Pakistan Map",
          className:
            "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2",
        },
        labelClass: "text-xs sm:text-sm md:text-base font-medium",
      },
      {
        id: 3,
        name: "United Arab Emirates",
        flag: {
          src: "/uaeflag.png",
          alt: "UAE Map",
          className:
            "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2",
        },
        labelClass: "text-xs sm:text-sm md:text-base font-medium",
      },
      {
        id: 4,
        name: "United Kingdom",
        flag: {
          src: "/ukflag.png",
          alt: "UK Map",
          className:
            "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2",
        },
        labelClass: "text-xs sm:text-sm md:text-base font-semibold",
      },
    ],

    // Container styling for flags section
    flagsContainer: {
      className:
        "flex justify-between items-center px-4 sm:px-8 md:px-32 mt-[40px] w-full md:w-[65%] relative z-10 flex-nowrap", // Changed to justify-between with padding
    },
  };

  const {
    styles,
    headingp1,
    headingp2,
    countries,
    flagsContainer,
    para,
  } = regionData;

  return (
    <div className={styles.sectionClass}>
      <section className={styles.containerClass}>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4 leading-tight">
            Making money <br /> has never been easier
          </h2>
          <h3 className="text-lg md:text-3xl text-black font-semibold leading-relaxed">
            We handle the inventory and delivery <br /> while YOU keep the profit
          </h3>
        </div>

        {/* Flags - removed country names */}
        <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-12 w-full md:w-[45%] relative z-10">
          {countries.map((country) => (
            <div key={country.id} className="flex flex-col items-center">
              <img
                src={country.flag.src}
                alt={country.flag.alt}
                className={country.flag.className}
              />
              {/* Country name removed */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}