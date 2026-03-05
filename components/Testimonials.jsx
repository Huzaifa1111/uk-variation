export default function Testimonials() {
  // Testimonials section data - moved from data.js
  const testimonialsData = {
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