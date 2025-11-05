"use client"
import React from 'react';

import { managedByData } from '../data';
import { useState } from 'react';

export default function ManagedBy() {
  const { 
    styles, 
    heading, 
    partnerBrands, 
    desktop, 
    mobile, 
    hoverEffects 
  } = managedByData;

  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section className={styles.sectionClass}>
      {/* Responsive heading */}
      <h2 className={styles.headingClass}>
        <span className={heading.part1Class}>{heading.part1}</span>{" "}
        <span className={heading.part2Class}>{heading.part2}</span>
      </h2>

      {/* Desktop Layout - 5 images in first row, 4 in second row */}
      <div className={desktop.containerClass}>
        {/* First Row - 5 images */}
        <div className={desktop.firstRow.class}>
          {partnerBrands.slice(0, desktop.firstRow.images).map((image) => (
            <a
              key={image.id}
              href={image.url}
              className={`${hoverEffects} relative`}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={hoveredImage === image.id && image.coloredSrc ? image.coloredSrc : image.src}
                alt={`Partner ${image.id}`}
                className={desktop.firstRow.imageClass}
              />
            </a>
          ))}
        </div>
        {/* Second Row - 4 images */}
        <div className={desktop.secondRow.class}>
          {partnerBrands.slice(desktop.firstRow.images, desktop.firstRow.images + desktop.secondRow.images).map((image) => (
            <a
              key={image.id}
              href={image.url}
              className={`${hoverEffects} relative`}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={hoveredImage === image.id && image.coloredSrc ? image.coloredSrc : image.src}
                alt={`Partner ${image.id}`}
                className={desktop.secondRow.imageClass}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Layout - 4 images in first row, 5 in second row */}
      <div className={mobile.containerClass}>
        {/* First Row - 4 images */}
        <div className={mobile.firstRow.class}>
          {partnerBrands.slice(0, mobile.firstRow.images).map((image) => (
            <a
              key={image.id}
              href={image.url}
              className={`${hoverEffects} relative`}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={hoveredImage === image.id && image.coloredSrc ? image.coloredSrc : image.src}
                alt={`Partner ${image.id}`}
                className={mobile.firstRow.imageClass}
              />
            </a>
          ))}
        </div>
        {/* Second Row - 5 images */}
        <div className={mobile.secondRow.class}>
          {partnerBrands.slice(mobile.firstRow.images, mobile.firstRow.images + mobile.secondRow.images).map((image) => (
            <a
              key={image.id}
              href={image.url}
              className={`${hoverEffects} relative`}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={hoveredImage === image.id && image.coloredSrc ? image.coloredSrc : image.src}
                alt={`Partner ${image.id}`}
                className={mobile.secondRow.imageClass}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}