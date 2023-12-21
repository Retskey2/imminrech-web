import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';
import YandexMetrika from '@/providers/YandexMetrica';

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
				<Script id='metrika-counter' strategy='afterInteractive'>
					{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(95920833, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
				</Script>
				<Navbar />
				<main>
					<YandexMetrika />
					{children}
					<Toaster position='top-center' />
					<SpeedInsights />
					<Analytics />
				</main>
				<Footer />
			</body>
		</html>
	);
}
