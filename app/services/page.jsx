import Link from "next/link";
import {
  serviceSlugs,
  serviceComponents,
  serviceMetadata,
} from "../servicesData";

export default function Services() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex flex-col">
          {serviceSlugs.map((slug, index) => {
            const Component = serviceComponents[slug];
            const reverse = index % 2 === 1;
            return (
              <div key={slug}>
                <Component reverse={reverse} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export const metadata = {
  title: "Services | Naxi",
  description: "Explore Naxi’s comprehensive range of services.",
  openGraph: {
    title: "Services | Naxi",
    description: "Explore Naxi’s comprehensive range of services.",
    url: "/services",
  },
};
