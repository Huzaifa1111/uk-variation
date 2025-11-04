import { categoriesData } from '../data'; // or './data' depending on your structure

export default function Categories() {
  // Destructure data from categoriesData
  const { 
    styles, 
    header, 
    categories, 
    containerClass, 
    categoriesList, 
    arrows 
  } = categoriesData;

  return (
    <section className={styles.sectionClass}>
      {/* Header */}
      <div className={styles.headerClass}>
        <h2 className="md:text-md text-sm sm:text-lg font-semibold">{header.title}</h2>
        <a href={header.seeAllLink.href} className={header.seeAllLink.className}>
          {header.seeAllLink.text}
        </a>
      </div>

      {/* Categories */}
      <div className={containerClass}>
        {/* Left Arrow (Hidden on Mobile) */}
        <button className={arrows.left.class}>
          <svg
            className={arrows.iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={arrows.left.icon} />
          </svg>
        </button>

        {/* Categories List */}
        <div className={categoriesList.class}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={categoriesList.itemClass}
            >
              {/* Image */}
              <img
                src={category.img}
                alt={category.title}
                className={category.imageClass}
              />
              {/* Title (hidden on mobile) */}
              <p className={category.titleClass}>
                {category.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow (Hidden on Mobile) */}
        <button className={arrows.right.class}>
          <svg
            className={arrows.iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={arrows.right.icon} />
          </svg>
        </button>
      </div>
    </section>
  );
}