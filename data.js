// Hero section data - contains all text content, images, and slide configurations

export const heroData = {
  styles: {
    sectionClass: "flex justify-between items-center gap-8",
  },

  textContent: {
    heading1: "Start E-Commerce",
    heading2: "with Naxi Today",
  },

  desktopSlides: {
    leftSide: [
      {
        src: "/medicine_homebanner.png",
        width: 200,
        height: 20,
        className:
          "transform transition-transform duration-300 h-110 w-80 ease-in-out hover:scale-105",
      },
      {
        src: "/juicer_homebanner.png",
        width: 200,
        height: 20,
        className:
          "transform transition-transform duration-300 h-50 w-80 ease-in-out hover:scale-105",
      },
    ],

    middle: {
      leftCard: {
        src: "/lego_homebanner.png",
        width: 20,
        height: 20,
        className:
          "transform transition-transform duration-300 ease-in-out hover:scale-105 h-90 w-70",
      },
      centerCard: {
        src: "/face_homebanner.png",
        width: 20,
        height: 20,
        className:
          "transform transition-transform duration-300 ease-in-out hover:scale-105 h-70 w-70",
        buttonText: "Join Now",
      },
      rightCard: {
        src: "/lotion_homebanner.png",
        width: 200,
        height: 500,
        className:
          "transform transition-transform duration-300 ease-in-out hover:scale-105 h-90 w-70",
      },
    },

    rightSide: [
      {
        src: "/head_homebanner.png",
        width: 200,
        height: 500,
        className:
          "transform transition-transform duration-300 ease-in-out hover:scale-105 h-110 w-80",
      },
      {
        src: "/lipstick_homebanner.png",
        width: 200,
        height: 500,
        className:
          "h-50 w-80 transform transition-transform duration-300 ease-in-out hover:scale-105",
      },
    ],
  },

  // Styling and layout constants
  styles: {
    sectionClass:
      "border-3 md:py-40 py-20 px-6 relative overflow-hidden grid grid-flow-col gap-4",
  },

  // Background images for desktop
  backgroundImages: {
    ellipse1: "/ellipse27(1).png",
    ellipse2: "/ellipse28.png",
    circle: "/ellipse27.png",
  },

  // Mobile-specific slides configuration
  mobileSlides: [
    {
      images: [
        {
          src: "/headphone.webp",
          className: "w-33 absolute -left-14 -top-8 w-20 transform -rotate-34",
        },
        {
          src: "/it12.webp",
          className: "w-25 absolute right-70 -top-52 w-20 transform rotate-6",
        },
        {
          src: "/it5.webp",
          className:
            "w-25 absolute left-64 -top-40 w-18 transform -rotate-19 z-0",
        },
        {
          src: "/it10.webp",
          className: "w-60 absolute -right-22 top-2 w-18 transform rotate-28",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr1.png",
          className:
            "w-20 absolute -left-10 top-5     w-20 transform -rotate-34",
        },
        {
          src: "/bottle4.png",
          className: "w-20 absolute right-68 -top-45 w-20 transform rotate-6",
        },
        {
          src: "/handle2.png",
          className:
            "w-25 absolute left-68 -top-44   w-18 transform -rotate-0 z-0",
        },
        {
          src: "/cr2.png",
          className: "w-30 absolute -right-12 top-2 w-18 transform rotate-28",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr8.png",
          className: "w-33 absolute -left-6 -top-5 w-20 transform -rotate-34",
        },
        {
          src: "/cr7.png",
          className: "w-30 absolute right-61 -top-45 w-20 transform rotate-6",
        },
        {
          src: "/cr5.png",
          className:
            "w-30 absolute left-58 -top-49 w-18 transform -rotate-19 z-0",
        },
        {
          src: "/cr6.png",
          className: "w-30 absolute -right-5  w-18 transform rotate-28",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr12.png",
          className: "w-38 absolute -left-8 -top-10 w-20 transform -rotate-34",
        },
        {
          src: "/cr11.png",
          className: "w-25 absolute right-61 -top-45 w-20 transform rotate-6",
        },
        {
          src: "/cr9.png",
          className:
            "w-25 absolute left-62 -top-50 w-18 transform rotate-18 z-0",
        },
        {
          src: "/cr10.png",
          className: "w-35 absolute -right-8  w-18 transform rotate-28",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr16.png",
          className: "w-25 absolute -left-5  w-20 transform -rotate-8",
        },
        {
          src: "/mob1.png",
          className: "w-25 absolute right-66 -top-48 w-20 transform rotate-6",
        },
        {
          src: "/cr14.png",
          className:
            "w-25 absolute left-62 -top-48 w-18 transform -rotate-19 z-0",
        },
        {
          src: "/g9.png",
          className: "w-25 absolute -right-2  w-18 transform -rotate-45",
        },
      ],
    },
  ],

  // Desktop-specific slides configuration

  // Carousel configuration
  carousel: {
    minSwipeDistance: 50,
    autoSwitchInterval: 3000,
  },
};

// Region selection data
export const regionData = {
  styles: {
    sectionClass: "md:bg-gray-100 bg-gray-100",
    containerClass:
      " flex flex-col items-center p-[60px] text-center text-black overflow-hidden",
    headingClass:
      "text-2xl sm:text-2xl md:text-[54px] font-bold md:mb-10 text-black whitespace-nowrap text-blue-600",
  },

  // Main heading text
  // headingp1: `Making money`,
  // headingp2: `has never been easier`,
  // para: "We handle the inventory and delivery while YOU keep the profit",

  // Background globe image configuration
  backgroundGlobe: {
    src: "/globe1.png",
    alt: "Globe Background",
    className: "w-[98rem] opacity-90 mt-[28rem]",
  },

  // Countries data with flags and labels
  countries: [
    {
      id: 1,
      name: "Saudi Arabia",
      flag: {
        src: "/ksaflag.png",
        alt: "Saudi Arabia Map",
        className:
          "w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] object-contain mb-2",
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
          "w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] object-contain mb-2",
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
          "w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] object-contain mb-2",
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
          "w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] object-contain mb-2",
      },
      labelClass: "text-xs sm:text-sm md:text-base font-semibold",
    },
  ],

  // Container styling for flags section
  flagsContainer: {
    className:
      "flex justify-center gap-4 sm:gap-8 md:gap-16 gap-8 mt-[40px] w-full md:w-[75%] relative z-10 flex-nowrap",
  },
};

// Hot items section data
export const hotItemsData = {
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
      contentContainer: "flex flex-col h-full justify-end", // Changed to justify-end
      button: "text-sm underline hover:no-underline mb-12", // Added margin-bottom instead of mt-auto
    },
    mobile: {
      title:
        "font-semibold text-[12px] text-black mt-2 truncate w-full text-center",
      button: "text-[10px] underline hover:no-underline text-black mb-4",
    },
  },
};

// Managed by section data
export const managedByData = {
  // Section styling and layout
  styles: {
    sectionClass:
      "md:py-10 px-6 text-center md:bg-gray-100 bg-gray-100 md:pt-12 pt-4",
    headingClass:
      "text-2xl sm:text-3xl md:text-4xl font-bold md:mb-6 mb-6 whitespace-nowrap",
  },

  // Heading text with colored parts
  heading: {
    part1: "Managed by",
    part2: "Naxi",
    part1Class: "text-black",
    part2Class: "text-blue-600",
  },

  // Partner brand images and URLs - add colored versions
  partnerBrands: [
    {
      id: 1,
      src: "/glammeriamono.png",
      coloredSrc: "/glammeriacolor.png", // Add colored version
      url: "https://www.glammeria.com",
    },
    {
      id: 2,
      src: "/skynlymono.png",
      coloredSrc: "/skynlycolor.png",
      url: "https://www.skynly.store",
    },
    {
      id: 3,
      src: "/lensermono.png",
      coloredSrc: "/lensercolor.png",
      url: "https://www.lenser.store",
    },
    {
      id: 5,
      src: "/techknighmono.png",
      coloredSrc: "/techknighcolor.png",
      url: "https://www.techknite.store",
    },
    {
      id: 6,
      src: "/brexismono.png",
      coloredSrc: "/brexiscolor.png",
      url: "https://www.Brexis.store",
    },
    {
      id: 7,
      src: "/stylodoremono.png",
      coloredSrc: "/stylodorecolor.png",
      url: "https://www.styladore.store",
    },
    {
      id: 8,
      src: "/electimizemono.png",
      coloredSrc: "/electimizecolor.png",
      url: "https://www.Electimize.store",
    },
    {
      id: 9,
      src: "/signitymono.png",
      coloredSrc: "/signitycolor.png",
      url: "https://www.signity.store",
    },
    {
      id: 4,
      src: "/novendomono.png",
      coloredSrc: "/novendocolor.png",
      url: "https://www.novendo.store",
    },
  ],

  // Desktop layout configuration
  desktop: {
    containerClass: "hidden md:flex flex-col items-center space-y-12",
    firstRow: {
      class: "flex justify-center gap-16",
      images: 5, // Number of images in first row
      imageClass: "w-32 h-24 object-contain transition-all duration-300",
    },
    secondRow: {
      class: "flex justify-center gap-8",
      images: 4, // Number of images in second row
      imageClass: "w-32 h-24 object-contain transition-all duration-300",
    },
  },

  // Mobile layout configuration
  mobile: {
    containerClass: "md:hidden flex flex-col items-center space-y-4",
    firstRow: {
      class: "grid grid-cols-4 gap-4",
      images: 4, // Number of images in first row
      imageClass: "w-16 h-12 object-contain transition-all duration-300",
    },
    secondRow: {
      class: "grid grid-cols-5 gap-3",
      images: 5, // Number of images in second row
      imageClass: "w-12 h-10 object-contain transition-all duration-300",
    },
  },

  // Enhanced hover effects with color transformations
  hoverEffects:
    "transition-all duration-300 hover:scale-110 hover:brightness-110 hover:saturate-150 hover:contrast-125 hover:drop-shadow-lg",
};

// Categories section data
export const categoriesData = {
  // Section styling and layout
  styles: {
    sectionClass: "py-5 px-4 sm:px-16 md:px-36 bg-gray-100",
    headerClass:
      "bg-[#D9D9D9] text-black py-2 md:px-16 px-3 sm:py-3 sm:px-16 md:rounded-xl rounded-md flex justify-between items-center mb-6",
  },

  // Header content
  header: {
    title: "Choose by Categories",
    seeAllLink: {
      text: "See all categories",
      href: "https://dashboard.naxi.ae/products",
      className: "text-xs sm:text-sm underline hover:underline",
    },
  },

  // Categories data with images and titles
  categories: [
    {
      id: 1,
      title: "Electronics",
      img: "/its7.png",
      imageClass:
        "mx-auto mb-1 sm:mb-2 w-12 h-12 sm:w-30 sm:h-24 object-contain bg-[#D9D9D9] rounded-xl md:bg-transparent",
      titleClass:
        "hidden sm:block text-[10px] sm:text-sm text-naxi-blue font-medium",
    },
    {
      id: 2,
      title: "Smart tech",
      img: "/it6.png",
      imageClass:
        "mx-auto mb-1 sm:mb-2 w-12 h-12 sm:w-30 sm:h-24 object-contain bg-[#D9D9D9] rounded-xl md:bg-transparent",
      titleClass:
        "hidden sm:block text-[10px] sm:text-sm text-naxi-blue font-medium",
    },
    {
      id: 3,
      title: "Health & beauty",
      img: "/bottle.png",
      imageClass:
        "mx-auto mb-1 sm:mb-2 w-12 h-12 sm:w-30 sm:h-24 object-contain bg-[#D9D9D9] rounded-xl md:bg-transparent",
      titleClass:
        "hidden sm:block text-[10px] sm:text-sm text-naxi-blue font-medium",
    },
    {
      id: 4,
      title: "Cameras & lenses",
      img: "/camera.png",
      imageClass:
        "mx-auto mb-1 sm:mb-2 w-12 h-12 sm:w-30 sm:h-24 object-contain bg-[#D9D9D9] rounded-xl md:bg-transparent",
      titleClass:
        "hidden sm:block text-[10px] sm:text-sm text-naxi-blue font-medium",
    },
    {
      id: 5,
      title: "Furniture",
      img: "/sofa.png",
      imageClass:
        "mx-auto mb-1 sm:mb-2 w-12 h-12 sm:w-30 sm:h-24 object-contain bg-[#D9D9D9] rounded-xl md:bg-transparent",
      titleClass:
        "hidden sm:block text-[10px] sm:text-sm text-naxi-blue font-medium",
    },
  ],

  // Container styling
  containerClass: "flex items-center justify-center space-x-4 sm:space-x-6",

  // Categories list styling
  categoriesList: {
    class:
      "flex justify-center items-center md:space-x-2 sm:space-x-6 scrollbar-hide",
    itemClass: "p-2 sm:p-4 text-center md:w-45 w-15 sm:w-48 flex-shrink-0",
  },

  // Arrow buttons configuration
  arrows: {
    left: {
      class:
        "hidden sm:flex w-12 h-12 items-center justify-center bg-gray-300 rounded-full hover:bg-gray-500",
      icon: "M15 19l-7-7 7-7",
    },
    right: {
      class:
        "hidden sm:flex w-12 h-12 items-center justify-center bg-gray-300 rounded-full hover:bg-gray-500",
      icon: "M9 5l7 7-7 7",
    },
    iconClass: "w-4 h-4 text-black",
  },
};

// Explore items section data
export const exploreItemsData = {
  // Section styling and layout
  styles: {
    sectionClass: "text-white py-10 md:py-10 px-4 sm:px-6 md:px-40",
    gradient: "bg-gradient-to-b from-[#0E3799] to-[#175CFF]",
  },

  // Desktop layout configuration
  desktop: {
    gridClass: "hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-32",

    // Large featured card (first item)
    featuredCard: {
      class:
        "relative rounded-3xl overflow-visible shadow-lg flex flex-col items-center justify-between h-[540px]",
      content: {
        class: "p-1 text-center mt-16",
        title: "Explore hot-selling items <br /> in these categories",
        button: {
          text: "Browse",
          class:
            "bg-white text-naxi-blue px-18 py-3 rounded-lg text-lg font-bold hover:bg-gray-200",
        },
      },
      images: [
        {
          src: "/headphone.webp",
          alt: "Hot selling items",
          class:
            "w-[300px] h-auto object-cover rotate-16 z-40 -translate-y-10 translate-x-18",
        },
        {
          src: "/it5.webp",
          alt: "Hot selling items 2",
          class:
            "w-[180px] h-[180px] object-cover absolute bottom-60 left-6 -rotate-16",
        },
        {
          src: "/my6.png",
          alt: "Hot selling items 3",
          class: "w-[200px] h-auto object-cover absolute bottom-50 right-0",
        },
      ],
    },

    // Right column items
    rightColumn: {
      class: "flex flex-col gap-6",

      // Top card in right column
      topCard: {
        class:
          "relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between h-[230px] p-8",
        title: "Exclusive table top and video games.",
        button: {
          text: "Browse",
          class:
            "bg-white text-naxi-blue px-8 py-2 rounded-md text-base font-medium hover:bg-gray-200",
        },
        image: {
          src: "/boy.png",
          alt: "Exclusive table top and video games",
          class:
            "absolute w-[250px] h-[250px] object-cover -right-4 bottom-[-50px]",
        },
      },

      // Bottom cards in right column
      // exploreItemsData
      bottomCards: {
        class: "grid grid-cols-2 gap-6",
        items: [
          {
            id: 1,
            title: "Supplements",
            desc: "Limited time vault unlock for all our sellers.",
            button: {
              text: "Show more",
              href: "https://dashboard.naxi.ae/products",
              class:
                "text-white underline text-sm mt-2 inline-block hover:text-gray-200",
            },
            image: {
              src: "/my5.png",
              alt: "Supplements",
              class: "  mt-9",
            },
          },
          {
            id: 2,
            title: "Personal Care",
            desc: "Beauty and care accessories for woman.",
            button: {
              text: "Show more",
              href: "https://dashboard.naxi.ae/products",
              class:
                "text-white underline text-sm mt-2 inline-block hover:text-gray-200",
            },
            image: {
              src: "/it10.webp",
              alt: "Personal Care",
              class: "w-[170px] h-[170px] object-cover mx-auto",
            },
          },
        ],
      },
    },
  },

  // Mobile layout configuration
  mobile: {
    gridClass: "grid grid-cols-1 gap-5 md:hidden",

    // First card (full width)
    firstCard: {
      class:
        "relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-between p-5 h-[170px]",
      title: "Explore <br /> hot-selling<br />items in these categories",
      button: {
        text: "Browse",
        class:
          "bg-white text-black px-4 w-24 py-2 rounded-md text-xs font-semibold hover:bg-gray-200",
      },
      images: [
        {
          src: "/headphone.webp",
          alt: "Hot selling items",
          class:
            "w-[200px] h-[200px] object-contain rotate-12 left-1 relative bottom-[-8px]",
        },
        {
          src: "/it5.webp",
          alt: "Hot selling items 2",
          class:
            "w-[150px] h-[150px] object-contain absolute right-15 bottom-15 -rotate-12 opacity-90",
        },
        {
          src: "/my6.png",
          alt: "Hot selling items 3",
          class:
            "w-[90px] h-[90px] object-contain absolute -right-6 bottom-10 rotate-16 opacity-80",
        },
      ],
    },

    // Second row cards
    secondRow: {
      class: "flex gap-3",

      // Left card (66% width)
      leftCard: {
        class:
          "relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-between p-4 h-[120px] w-2/3",
        title: "Exclusive table top and video games",
        button: {
          text: "Browse",
          class:
            "mt-1 bg-white text-black px-3 py-1 rounded text-[11px] font-medium hover:bg-gray-200 w-fit",
        },
        image: {
          src: "/boy.png",
          alt: "Exclusive table top and video games",
          class: "w-[150px] h-[150px] object-contain mt-12 -ml-1",
        },
      },

      // Right card (33% width)
      rightCard: {
        class:
          "relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-between p-3 h-[120px] w-1/3",
        title: "Personal Care",
        button: {
          text: "Browse",
          class:
            "bg-white text-naxi-blue px-3 py-1 rounded text-[10px] font-medium hover:bg-gray-200",
        },
        image: {
          src: "/it10.webp",
          alt: "Personal Care",
          class:
            "w-[200px] h-auto object-contain mt-2 mr-12 transform -translate-x-4",
        },
      },
    },
  },
};

// Why choose us section data
export const whyChooseUsData = {
  // Section styling and layout
  styles: {
    sectionClass: "md:py-12 py-8 md:px-6 px-4",
    headingClass:
      "md:text-4xl text-3xl font-bold md:mb-12 mb-8 text-gray-900 text-center",
    gridClass:
      "grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-6 max-w-6xl mx-auto",
    itemClass:
      "md:p-6 p-4 hover:shadow-lg transition-shadow duration-300 flex md:items-start items-center", // Different alignment for mobile vs desktop
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
      iconClass: "md:w-16 md:h-13 w-12 h-10 md:mr-6 mr-5",
      titleClass:
        "md:text-lg text-sm md:mb-4 mb-2 md:text-gray-500 text-gray-900",
      descClass:
        "md:text-gray-900 text-black font-semibold md:text-lg text-sm leading-relaxed",
    },
    {
      id: 2,
      title: "Our Inventory: Your Portfolio",
      desc: "Your dream of a diverse, profitable online store shouldn't be capped by upfront inventory costs. Access our constantly curated portfolio of 5,000+ high-margin, in-demand products across dozens of categories.",
      icon: "/vector(4).svg",
      iconClass: "md:w-18 md:h-15 w-12 h-10 md:mr-6 mr-5",
      titleClass:
        "md:text-lg text-sm md:mb-4 mb-2 md:text-gray-500 text-gray-900",
      descClass:
        "md:text-gray-900 text-black font-semibold md:text-lg text-sm leading-relaxed",
    },
    {
      id: 3,
      title: "Work from Anywhere",
      desc: "Your laptop and an internet connection are your new headquarters. Naxi's entire platform is cloud-based, giving you the freedom to manage your thriving e-commerce business from anywhere in the world.",
      icon: "/vector(5).svg",
      iconClass: "md:w-15 md:h-12  w-12 h-10 md:mr-6 mr-5",
      titleClass:
        "md:text-lg text-sm md:mb-4 mb-2 md:text-gray-500 text-gray-900",
      descClass:
        "md:text-gray-900 text-black font-semibold md:text-lg text-sm leading-relaxed",
    },
    {
      id: 4,
      title: "Payment: Get Paid Faster",
      desc: "Your focus should be on growth, not on chasing payments or calculating fees. Naxi offers transparent, seller-friendly payment terms. We ensure you get your earned profits on time, every time, with a clear breakdown for every transaction.",
      icon: "/vector(6).svg",
      iconClass: "md:w-14 md:h-11 w-12 h-10 md:mr-6 mr-5",
      titleClass:
        "md:text-lg text-sm md:mb-4 mb-2 md:text-gray-500 text-gray-900",
      descClass:
        "md:text-gray-900 text-black font-semibold md:text-lg text-sm leading-relaxed",
    },
  ],

  // Content container styling
  contentClass: "flex-1",
};

// Testimonials section data
export const testimonialsData = {
  // Section styling and layout
  styles: {
    sectionClass:
      "bg-gradient-to-b from-[#0E3799] to-[#175CFF] text-white md:py-12 pt-6 px-6 text-center",
    headingClass:
      "md:text-3xl text-xl sm:text-2xl font-bold md:mb-12 mb-6 leading-tight",
  },

  // Main heading with line breaks
  heading: {
    line1: "What our Customers",
    line2: "have to say",
  },

  // Testimonials data with text, ratings, and styling
  testimonials: [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      stars: 4,
      customer: {
        name: "Lorem Ipsum",
        role: "Lorem Ipsum",
        avatarClass:
          "w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 border-4 border-gray-100",
      },
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      stars: 5,
      customer: {
        name: "Lorem Ipsum",
        role: "Lorem Ipsum",
        avatarClass:
          "w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 border-4 border-gray-100",
      },
    },
    {
      id: 3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      stars: 4,
      customer: {
        name: "Lorem Ipsum",
        role: "Lorem Ipsum",
        avatarClass:
          "w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 border-4 border-gray-100",
      },
    },
  ],

  // Desktop layout configuration
  desktop: {
    gridClass: "hidden md:grid grid-cols-3 gap-10 max-w-6xl mx-auto",
    cardClass:
      "bg-gray-200 text-black p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300",
    textClass: "text-sm text-gray-800 leading-relaxed mb-4",
    nameClass: "font-semibold text-sm mb-2",
    starsClass: "text-blue-600 text-lg",
    starsContainerClass: "flex justify-center",
  },

  // Mobile layout configuration
  mobile: {
    containerClass:
      "md:hidden relative overflow-y-scroll h-[400px] snap-y snap-mandatory space-y-8 scrollbar-hide",
    cardClass:
      "bg-gray-200 text-black p-6 rounded-3xl shadow-lg snap-start transition-transform duration-300",
    textClass: "text-xs text-gray-700 mb-4 leading-relaxed",
    avatarClass:
      "w-12 h-12 bg-gray-300 rounded-full border border-gray-100 mr-3",
    customerInfoClass: "text-left",
    customerNameClass: "font-bold text-sm",
    customerRoleClass: "text-xs text-gray-600",
    starsClass: "text-blue-600 text-sm",
    starsContainerClass: "flex justify-start",
  },

  // Star symbol
  starSymbol: "★",
};

// Courier partners section data
export const courierPartnersData = {
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

// Footer section data
export const footerData = {
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
