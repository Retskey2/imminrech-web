'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';

import { getSocialMedia } from '@/hooks/getSocialMedia';
import { WindowSize, useWindowSize } from '@/hooks/useWindowSize';

import { backroundImageAbout, hamburger } from '@/assets/icons';
import { telegram, whatsapp } from '@/assets/icons';

import styles from './Navbar.module.scss';
import { navLinks } from '@/constants';

const Navbar = () => {
	const { openTelegramChat, openWhatsAppChat } = getSocialMedia();

	const [showNav, setShowNav] = useState(false);
	const size: WindowSize = useWindowSize();

	const handleNav = () => {
		setShowNav(!showNav);
	};

	useLayoutEffect(() => {
		if (size.width > 1024) setShowNav(false);
	}, [size]);

	useEffect(() => {
		if (showNav) {
			disableScroll();
		} else {
			enableScroll();
		}
	}, [showNav]);

	function disableScroll() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

		window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		};
	}
	function enableScroll() {
		window.onscroll = function () {};
	}

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href='/'>
					<h1 className={styles.logo}>ImminTech</h1>
				</Link>

				<ul className={styles.navList} role='menu'>
					{navLinks.map((link) => (
						<li key={link.label} role='menuitem'>
							<Link href={link.href} className={styles.navLink}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				<div className={styles.actions}>
					<button className={styles.actionButton} onClick={openWhatsAppChat}>
						<Image draggable={false} alt='telegram' src={whatsapp} />
						WhatsApp
					</button>
					<button className={styles.actionButton} onClick={openTelegramChat}>
						<Image draggable={false} alt='whatsapp' src={telegram} />
						Telegram
					</button>
				</div>

				<div className={styles.hamburger}>
					<Image
						src={hamburger}
						alt='hamburger'
						width={25}
						height={25}
						onClick={handleNav}
						className={` cursor-pointer lg:hidden ${showNav ? 'inline-block rotate-90' : ''}`}
					/>
				</div>

				{showNav && size.width < 1024 && (
					<div className='fixed w-full min-h-screen h-full top-0 left-0 bg-[#121212] z-[100] grid grid-rows-navbarMini'>
						<Image
							className='-z-10'
							alt='back-about'
							src={backroundImageAbout}
							fill
							objectFit='cover'
							objectPosition='-150px 50px'
							quality={100}
						/>
						<div className='w-full px-8 py-8 z-10'>
							<nav className={styles.nav}>
								<Link href='/'>
									<h1 className={styles.logo}>ImminTech</h1>
								</Link>

								<div className={styles.hamburger}>
									<Image
										src={hamburger}
										alt='hamburger'
										width={25}
										height={25}
										onClick={handleNav}
										className={` cursor-pointer lg:hidden ${
											showNav ? 'inline-block rotate-90' : ''
										}`}
									/>
								</div>
							</nav>
						</div>

						<div className='justify-center m-auto items-center text-center uppercase'>
							<ul role='menu' className='gap-6 flex flex-col'>
								{navLinks.map((link) => (
									<li key={link.label} role='menuitem' onClick={() => setShowNav(false)}>
										<Link href={link.href} className={styles.navLinkMini}>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<div className='m-auto justify-center w-fit flex flex-row gap-8'>
								<Image src={telegram} width={24} alt='icon-telegram' onClick={openTelegramChat} />
								<Image src={whatsapp} width={24} alt='icon-whatsapp' onClick={openWhatsAppChat} />
							</div>

							<span className='m-auto mt-4 uppercase justify-center w-fit flex flex-row gap-8'>
								Immintech © 2023
							</span>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
