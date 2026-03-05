"use client"

export default function ExploreItems() {
  // Explore items section data - moved from data.js
  const exploreItemsData = {
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

  // Destructure data from exploreItemsData
  const {
    styles,
    desktop,
    mobile
  } = exploreItemsData;

  return (
    <section className={styles.sectionClass}>
      {/* Desktop & Tablet Layout */}
      <div className={desktop.gridClass}>
        {/* Large featured card */}
        <div className={`${desktop.featuredCard.class} ${styles.gradient}`}>
          <div className={desktop.featuredCard.content.class}>
            <div
              className='whitespace-normal text-2xl mb-4 leading-tight'
              dangerouslySetInnerHTML={{ __html: desktop.featuredCard.content.title }}
            />
            <button
              onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
              className={desktop.featuredCard.content.button.class}>
              {desktop.featuredCard.content.button.text}
            </button>
          </div>

          <div className='relative w-full flex'>
            {desktop.featuredCard.images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={img.class}
              />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className={desktop.rightColumn.class}>
          {/* Top card */}
          <div className={`${desktop.rightColumn.topCard.class} ${styles.gradient}`}>
            <div className="text-left">
              <h3 className="text-xl mb-4 leading-snug w-3/4">
                Exclusive table top<br />and video games.
              </h3>
              <button 
                onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
                className={desktop.rightColumn.topCard.button.class}
              >
                {desktop.rightColumn.topCard.button.text}
              </button>
            </div>
            <img
              src={desktop.rightColumn.topCard.image.src}
              alt={desktop.rightColumn.topCard.image.alt}
              className={desktop.rightColumn.topCard.image.class}
            />
          </div>

          {/* Bottom cards */}
          <div className={desktop.rightColumn.bottomCards.class}>
            {desktop.rightColumn.bottomCards.items.map((item) => (
              <div
                key={item.id}
                className={`relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between h-[285px] px-8 pt-8 ${styles.gradient}`}>
                <div className='text-left mb-4'>
                  <h3 className='font-bold text-xl'>{item.title}</h3>
                  <p className='text-sm'>{item.desc}</p>
                  <a
                    href={item.button.href}
                    className={item.button.class}>
                    {item.button.text}
                  </a>
                </div>
                <div className='flex justify-center'>
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className={item.image.class}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-specific layout */}
      <div className={mobile.gridClass}>
        {/* First Card (Full width) */}
        <div className={`${mobile.firstCard.class} ${styles.gradient}`}>
          <div className='text-left flex flex-col justify-center'>
            <h3
              className='text-base font-semibold mb-2 leading-snug'
              dangerouslySetInnerHTML={{ __html: mobile.firstCard.title }}
            />
            <button
              onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
              className={mobile.firstCard.button.class}>
              {mobile.firstCard.button.text}
            </button>
          </div>
          <div className='relative flex items-end justify-end'>
            {mobile.firstCard.images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={img.class}
              />
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className={mobile.secondRow.class}>
          {/* Left Card (66%) */}
          <div className={`${mobile.secondRow.leftCard.class} ${styles.gradient}`}>
            <div className='text-left flex flex-col justify-between h-full py-1'>
              <h3 className='text-[11px] font-semibold leading-tight w-[95%]'>{mobile.secondRow.leftCard.title}</h3>
              <button
                onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
                className={mobile.secondRow.leftCard.button.class}>
                {mobile.secondRow.leftCard.button.text}
              </button>
            </div>
            <img
              src={mobile.secondRow.leftCard.image.src}
              alt={mobile.secondRow.leftCard.image.alt}
              className={mobile.secondRow.leftCard.image.class}
            />
          </div>

          {/* Right Card (33%) */}
          <div className={`${mobile.secondRow.rightCard.class} ${styles.gradient}`}>
            <div className='text-left flex flex-col justify-between h-full py-5'>
              <h3 className='text-[8px] font-bold leading-tight'>{mobile.secondRow.rightCard.title}</h3>
              <button
                onClick={() => window.open('https://dashboard.naxi.ae/sign-up', '_blank')}
                className={mobile.secondRow.rightCard.button.class}>
                {mobile.secondRow.rightCard.button.text}
              </button>
            </div>
            <img
              src={mobile.secondRow.rightCard.image.src}
              alt={mobile.secondRow.rightCard.image.alt}
              className={mobile.secondRow.rightCard.image.class}
            />
          </div>
        </div>
      </div>
    </section>
  );
}