import ProductQualityCheck from "../components/services/ProductQualityCheck.jsx";
import ThreePlService from "../components/services/ThreePlService.jsx";
import Storage from "../components/services/Storage.jsx";
import Sourcing from "../components/services/Sourcing.jsx";

export const serviceSlugs = [
  "storage",
  "sourcing",
  "threeplservice",
  "productqualitycheck",
];

export const serviceComponents = {
  storage: Storage,
  sourcing: Sourcing,
  threeplservice: ThreePlService,
  productqualitycheck: ProductQualityCheck,
};

export const serviceMetadata = {
  storage: {
    title: "Shipping & Storage | Naxi",
    description:
      "All-in-one shipping, warehousing, and logistics solutions for your eCommerce growth.",
    sections: [
      {
        title: "Shipping & Custom Clearance",
        image: "/ser1 (1).png",
        description:
          "We provide both air and sea shipping services to meet the diverse needs of our clients. By partnering with several trusted shipping companies, we ensure timely, efficient, and cost-effective delivery of goods worldwide. In addition, our team handles all aspects of customs clearance, ensuring smooth import and export operations with minimal delays or complications.",
      },
      {
        title: "Warehousing & Fulfillment",
        image: "/ser1 (4).png",
        description:
          "We provide our customers with reliable and well-managed storage solutions designed to keep their products safe, organized, and protected. Our facilities are maintained with strict safety standards, ensuring that every item remains secure and in excellent condition until it's ready for delivery or use.",
        reverse: true
      },
      {
        title: "Order Confirmation & Follow Up",
        image: "/last (3).png",
        description:
          "We have a dedicated team that manages and confirms customer orders, ensuring accuracy and reliability at every stage.From order placement to final delivery, our team monitors each step of the process to guarantee smooth operations, timely updates, and complete customer satisfaction.",
      },
      {
        title: "Delivery to your customer ",
        image: "/last (2).png",
        description:
          "We collaborate with five highly reliable shipping companies to ensure fast and efficient delivery of orders. Through these partnerships, we're able to deliver products to customers within just three working days—maintaining both speed and consistency while upholding our commitment to dependable service.",
        reverse: true
      },
      {
        title: "COD Remittance",
        image: "/last (1).png",
        description:
          "We ensure prompt and transparent payments to our dropshippers. All payments are processed within seven working days after the successful delivery of an order, ensuring trust, consistency, and long-term partnership with our valued collaborators.",
      },
    ],
  },
  sourcing: {
    title: "Sourcing | Naxi",
    description:
      "Source high-quality products globally with Naxi's trusted platform.",
  },
  threeplservice: {
    title: "3PL Service | Naxi",
    description:
      "Streamline your logistics with Naxi's reliable 3PL services.",
  },
  productqualitycheck: {
    title: "Product Quality Check | Naxi",
    description:
      "Ensure top-notch product quality with Naxi's comprehensive inspection services.",
  },
};