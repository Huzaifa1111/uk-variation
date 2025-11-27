import HeroSection from "../components/HeroSection";
import RegionSelection from "../components/RegionSelection";
import HotItems from "../components/HotItems";
import ManagedBy from "../components/ManagedBy";
import Categories from "../components/Categories";
import SellOnlineBanner from "../components/SellOnlineBanner";
import ExploreItems from "../components/ExploreItems";
import WhyChooseUs from "../components/WhyChooseUs";
import CourierPartners from "../components/CourierPartners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />

      <section id="hot-items">
        <HotItems />
      </section>
      <RegionSelection />

      {/* <ManagedBy /> */}

      {/* <section id="categories">
        <Categories />
      </section> */}

      {/* <SellOnlineBanner /> */}
      <ExploreItems />
      {/* <Testimonials /> */}
      <CourierPartners />
    </main>
  );
}
