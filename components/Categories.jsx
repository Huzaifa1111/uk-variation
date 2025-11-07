"use client";

import { categoriesData } from '../data';
import { useRef, useState, useEffect } from 'react';

export default function Categories() {
  const { 
    styles, 
    header, 
    categories, 
    containerClass, 
    categoriesList, 
    arrows 
  } = categoriesData;

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); 
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const itemWidth = container.children[0]?.children[0]?.offsetWidth || 120;
    const scrollAmount = itemWidth * 3; 

    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });

    setTimeout(checkScrollPosition, 300);
  };


  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      checkScrollPosition();
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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
        {/* Left Arrow */}
        <button 
          className={`${arrows.left.class} ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
        >
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
        <div 
          ref={scrollContainerRef}
          className={`${categoriesList.class} overflow-x-auto scrollbar-hide`}
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none', 
            scrollbarWidth: 'none',   
          }}
        >
          {/* Hide scrollbar for Webkit browsers */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="flex space-x-4 md:space-x-6 min-w-max">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${categoriesList.itemClass} flex-shrink-0`}
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
        </div>

        {/* Right Arrow */}
        <button 
          className={`${arrows.right.class} ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
        >
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