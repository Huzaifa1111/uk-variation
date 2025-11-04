import { hotItemsData } from '../data'; // or './data' depending on your structure

export default function HotItems() {
  // Destructure data from hotItemsData
  const { 
    styles, 
    topBar, 
    items, 
    buttonText, 
    card, 
    textStyles 
  } = hotItemsData;

  return (
    <section className={styles.sectionClass}>
      {/* Top bar */}
      <div className={styles.topBarClass}>
        <h2 className="md:text-xl text-sm md:font-bold">{topBar.title}</h2>
        <a href={topBar.exploreLink.href} className={topBar.exploreLink.className}>
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
            <div className="flex-1 z-10">
              <h3 className={textStyles.desktop.title}>{item.title}</h3>
              <p className={textStyles.desktop.description}>{item.desc}</p>
              <button className={textStyles.desktop.button}>{buttonText}</button>
            </div>
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
            <h3 className={textStyles.mobile.title}>
              {item.title}
            </h3>
            <button className={textStyles.mobile.button}>
              {buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}