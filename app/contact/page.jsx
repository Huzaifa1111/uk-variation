import { Suspense } from 'react';

import ContactHero from '../../components/contact/ContactHero';
import ContactForm from '../../components/contact/ContactForm';

export default function ContactPage() {
  return (
		<div className='min-h-screen bg-gray-50'>
			<Suspense fallback={<div>Loading...</div>}>
				<ContactHero />
				<ContactForm />
			</Suspense>
		</div>
  );
}