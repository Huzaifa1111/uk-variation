import { regionData } from "../data";

export default function RegionSelection() {
  const {
    styles,
    headingp1,
    headingp2,
    backgroundGlobe,
    countries,
    flagsContainer,
    para,
  } = regionData;

  return (
    <div className={styles.sectionClass}>
      <section className={styles.containerClass}>
        {/* Heading */}
        <div>
          <h2 className={styles.headingClass}>
            Making money <br /> has never been easier
          </h2>
          <h3 className=" sm:text-2xl md:text-[24px] md:mb-10 text-black whitespace-nowrap">
            We handle the inventory and delivery <br /> while YOU keep the
            profit
          </h3>
        </div>

        {/* Flags */}
        <div className={flagsContainer.className}>
          {countries.map((country) => (
            <div key={country.id} className="flex flex-col items-center">
              <img
                src={country.flag.src}
                alt={country.flag.alt}
                className={country.flag.className}
              />
              <p className={country.labelClass}>{country.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
