import WhyChooseUs from "../../components/WhyChooseUs";

import AboutHero from "../../components/about/AboutHero";
import WhatDoWeDo from "../../components/about/WhatDoWeDo";
import OurValues from "../../components/about/OurValues";

export const metadata = {
  title: "About Us | Naxi",
  description:
    "Learn about Naxi, helping over 50,000 sellers build their businesses with high-quality products at low prices.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100">
      <AboutHero />
      <WhatDoWeDo />
      <OurValues />
      <WhyChooseUs />
    </main>
  );
}
