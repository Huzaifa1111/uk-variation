export default function HotItems() {
  // Hot items section data - moved from data.js
  const hotItemsData = {
    // Section styling and layout
    styles: {
      sectionClass: "bg-gray-100 px-3 sm:px-6 md:px-16 lg:px-38",
      topBarClass:
        "bg-[#2563eb] text-white md:py-4 py-3 md:px-16 px-4 md:rounded-2xl rounded-lg flex justify-between items-center mb-6",
      desktopGridClass:
        "hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12",
      mobileGridClass: "grid grid-cols-3 gap-3 px-1 sm:px-2 md:hidden",
    },

    // Top bar content
    topBar: {
      title: "Hot items right now",
      exploreLink: {
        text: "Explore more",
        href: "https://dashboard.naxi.ae/products",
        className: "md:text-sm text-xs underline text-white hover:underline",
      },
    },

    // Product items data
    items: [
      {
        id: 1,
        title: "Tech",
        desc: "Sell our tech products and earn in AED.",
        img: "/headphone.webp",
        desktopImageClass: "md:h-70 h-120 rotate-15",
        mobileImageClass: "object-contain h-24 sm:h-28 max-w-full",
      },
      {
        id: 3,
        title: "Personal Care",
        desc: "High demand products with high quality.",
        img: "/it2.png",
        desktopImageClass: "md:h-60 ml-24",
        mobileImageClass: "object-contain h-24 sm:h-28 max-w-full",
      },
      {
        id: 5,
        title: "Home Appliances",
        desc: "Sell our home appliances for smarter homes.",
        img: "/it9.png",
        desktopImageClass: "md:h-70",
        mobileImageClass: "object-contain h-24 sm:h-28 max-w-full",
      },
      {
        id: 2,
        title: "Make-up",
        desc: "High quality branded products.",
        img: "/it8.png",
        // Special case for makeup item with multiple images
        hasMultipleImages: true,
        secondaryImg: "/it7.png",
        desktopImageClass: "object-contain md:h-60 h-120",
        secondaryImageClass: "object-contain md:h-58 ml-[-7rem] h-50 rotate-10",
        mobileImageClass: "object-contain h-24 sm:h-28 max-w-full",
      },
      {
        id: 4,
        title: "Toys",
        desc: "Games and toys for the young minds.",
        img: "/boy.png",
        desktopImageClass: "md:h-50 mr-[-2rem]",
        mobileImageClass: "object-contain h-24 sm:h-28 max-w-full",
      },
      {
        id: 6,
        title: "Supplements",
        desc: "Sell our supplements and boost energy.",
        img: "/bottle.png",
        desktopImageClass: "md:h-60 mr-6",
        mobileImageClass: "object-contain h-24 sm:h-28 max-w-full",
      },
    ],

    // Button text
    buttonText: "Grab yours today",
    href: "https://dashboard.naxi.ae/products",

    // Card styling
    card: {
      desktop: {
        className:
          "bg-[#2563eb] rounded-2xl p-6 text-white flex flex-col relative overflow-hidden",
        minHeight: "240px",
      },
      mobile: {
        className:
          "bg-[#2563eb] rounded-xl flex items-center justify-center w-full aspect-square",
      },
    },

    // Text styling
    textStyles: {
      desktop: {
        title: "font-bold md:text-2xl mb-2",
        description: "text-sm mb-4 leading-relaxed max-w-[160px] break-words",
        // Added container class for consistent button positioning
        contentContainer: "flex flex-col h-full justify-end",
        button: "text-sm underline hover:no-underline mb-12",
      },
      mobile: {
        title:
          "font-semibold text-[12px] text-black mt-2 truncate w-full text-center",
        button: "text-[10px] underline hover:no-underline text-black mb-4",
      },
    },
  };

  const { styles, topBar, items, buttonText, card, textStyles, href } = hotItemsData;

  return (
    <section className={styles.sectionClass}>
      {/* Top bar */}
      <div className={styles.topBarClass}>
        <h2 className="md:text-xl text-sm md:font-light">{topBar.title}</h2>
        <a
          href={topBar.exploreLink.href}
          className={topBar.exploreLink.className}
        >
          {topBar.exploreLink.text}
        </a>
      </div>

      {/* Desktop layout */}
      <div className={styles.desktopGridClass}>
        {items.map((item) => (
          <div
            key={item.id}
            className={card.desktop.className}
            style={{ minHeight: card.desktop.minHeight }}
          >
            {/* Content container with consistent button positioning */}
            <div className={textStyles.desktop.contentContainer}>
              <div className="flex-1 z-10">
                <h3 className={textStyles.desktop.title}>{item.title}</h3>
                <p className={textStyles.desktop.description}>{item.desc}</p>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={textStyles.desktop.button}
              >
                {buttonText}
              </a>
            </div>
            
            {/* Image container */}
            <div className="absolute -right-2 -bottom-10">
              {item.hasMultipleImages ? (
                <div className="flex flex-row items-end">
                  <img
                    src={item.img}
                    alt={`${item.title} Image 1`}
                    className={item.desktopImageClass}
                  />
                  <img
                    src={item.secondaryImg}
                    alt={`${item.title} Image 2`}
                    className={item.secondaryImageClass}
                  />
                </div>
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  className={item.desktopImageClass}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className={styles.mobileGridClass}>
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className={card.mobile.className}>
              <img
                src={item.img}
                alt={item.title}
                className={item.mobileImageClass}
              />
            </div>
            <h3 className={textStyles.mobile.title}>{item.title}</h3>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={textStyles.mobile.button}
            >
              {buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}