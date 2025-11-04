import { courierPartnersData } from '../data';

export default function CourierPartners() {
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
      <h2 className={styles.headingClass}>
        {content.heading}
      </h2>

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