import HeroSection from "../components/HeroSection";
import RegionSelection from "../components/RegionSelection";
import HotItems from "../components/HotItems";
import ExploreItems from "../components/ExploreItems";
import WhyChooseUs from "../components/WhyChooseUs";
import CourierPartners from "../components/CourierPartners";
import Testimonials from "../components/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <HotItems />
      <RegionSelection />
      <ExploreItems />
      <Testimonials />
      <CourierPartners />
    </main>
  );
}
