import { whyChooseUsData } from '../data'; 
export default function WhyChooseUs() {
  const { 
    styles, 
    heading, 
    reasons, 
    contentClass 
  } = whyChooseUsData;

  return (
    <section className={styles.sectionClass}>
      <h2 className={styles.headingClass}>{heading}</h2>
      <div className={styles.gridClass}>
        {reasons.map((reason) => (
          <div key={reason.id} className={styles.itemClass}>
            <img 
              src={reason.icon} 
              alt={reason.title} 
              className={reason.iconClass} 
            />
            <div className={contentClass}>
              <h3 className={reason.titleClass}>{reason.title}</h3>
              <p className={reason.descClass}>{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}