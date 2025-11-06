  import { Globe } from "lucide-react";
  import { regionData } from '../data'; 

  export default function RegionSelection() {
    // Destructure data from regionData
    const { 
      styles, 
      heading, 
      backgroundGlobe, 
      countries, 
      flagsContainer 
    } = regionData;

    return (
      <div className={styles.sectionClass}>
        <section className={styles.containerClass}>
          {/* Heading */}
          <h2 className={styles.headingClass}>
            {heading}
          </h2>

          {/* Background Globe */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <img
              src={backgroundGlobe.src}
              alt={backgroundGlobe.alt}
              className={backgroundGlobe.className}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
            />
          </div>

          {/* Flags */}
          <div className={flagsContainer.className}>
            {countries.map((country) => (
              <div key={country.id} className="flex flex-col items-center">
                <img
                  src={country.flag.src}
                  alt={country.flag.alt}
                  className={country.flag.className}
                  draggable="false"
                  onDragStart={(e) => e.preventDefault()}
                />
                <p className={country.labelClass}>{country.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }