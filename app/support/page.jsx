import SupportHero from '../../components/support/SupportHero';
import FAQSection from '../../components/support/FAQSection';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SupportHero />
      <FAQSection />  
    </div>
  );
}