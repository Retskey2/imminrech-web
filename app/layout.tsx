import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';

export const metadata: Metadata = {
	title: 'Immintech',
	description: 'Immintech Website'
};

export const rubik = Rubik({
	style: ['normal'],
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={rubik.className}>
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
