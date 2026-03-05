import PricingSection from "../../components/naxidropshipping/PricingSection";
import MainSection, {
  HowToStartSection,
} from "../../components/naxidropshipping/MainSection";

export const metadata = {
  title: "Naxi Dropshipping | Naxi",
  description:
    "Learn about Naxi, helping over 50,000 sellers build their businesses with high-quality products at low prices.",
};

export default function Pricing() {
  return (
    <main className="min-h-screen ">
      <MainSection />
      <HowToStartSection />
      <PricingSection />
    </main>
  );
}
