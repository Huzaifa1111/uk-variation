import { testimonialsData } from '../data'; // or './data' depending on your structure

export default function Testimonials() {
 
  const { 
    styles, 
    heading, 
    testimonials, 
    desktop, 
    mobile, 
    starSymbol 
  } = testimonialsData;

  return (
    <section className={styles.sectionClass}>
      {/* Heading */}
      <h2 className={styles.headingClass}>
        {heading.line1} <br />
        <span className="md:block">{heading.line2}</span>
      </h2>

      {/* Desktop layout (unchanged) */}
      <div className={desktop.gridClass}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={desktop.cardClass}
          >
            {/* Avatar */}
            <div className={testimonial.customer.avatarClass}></div>

            {/* Name placeholder */}
            <p className={desktop.nameClass}>{testimonial.customer.name}</p>

            {/* Text */}
            <p className={desktop.textClass}>{testimonial.text}</p>

            {/* Stars */}
            <div className={desktop.starsContainerClass}>
              {Array(testimonial.stars)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className={desktop.starsClass}>{starSymbol}</span>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout with blur reveal */}
      <div className={mobile.containerClass}>
        {testimonials.map((testimonial, idx) => (
          <div
            key={testimonial.id}
            className={`${mobile.cardClass} ${
              idx === testimonials.length - 1 ? "" : "backdrop-blur-sm"
            }`}
          >
            {/* Avatar */}
            <div className="flex items-center mb-4">
              <div className={mobile.avatarClass}></div>
              <div className={mobile.customerInfoClass}>
                <h3 className={mobile.customerNameClass}>{testimonial.customer.name}</h3>
                <p className={mobile.customerRoleClass}>{testimonial.customer.role}</p>
              </div>
            </div>

            {/* Text */}
            <p className={mobile.textClass}>
              {testimonial.text}
            </p>

            {/* Stars */}
            <div className={mobile.starsContainerClass}>
              {Array(testimonial.stars)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className={mobile.starsClass}>{starSymbol}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}