import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';
import { YandexMetrica } from '@/providers/YandexMetrica';

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
				<main>
					<YandexMetrica>
						{children}
						<SpeedInsights />
						<Analytics />
					</YandexMetrica>
				</main>
				<Footer />
			</body>
		</html>
	);
}
