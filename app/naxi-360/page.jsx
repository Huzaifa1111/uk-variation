import Sourcing from "../../components/services/Sourcing";
import OurProcess from "../../components/products/OurProcess";
import ProductsHero from "../../components/products/ProductsHero";
import WhyChooseUs from "../../components/WhyChooseUs";
import Shiping from "../../components/products/Shipping";

export default function Page() {
  return (
    <div className="bg-gray-100">
      <ProductsHero />
      <WhyChooseUs />
      <OurProcess />
      <Sourcing reverse={true} />
      <Shiping />
    </div>
  );
}