import ContactHero from '../../components/contact/ContactHero';
import ContactForm from '../../components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      <ContactForm />
    </div>
  );
}