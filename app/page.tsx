import About from '@/components/About';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
	return (
		<>
			<Hero />
			<About/>
			<Services />
			<Cases />
			<Contact />
		</>
	);
}
