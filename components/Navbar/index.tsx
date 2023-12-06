'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';

import { WindowSize, useWindowSize } from '@/hooks/useWindowSize';

import { hamburger } from '@/assets/icons';
import { telegram, whatsapp } from '@/assets/icons';

import styles from './Navbar.module.scss';
import { navLinks } from '@/constants';

const Navbar = () => {
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
							<a href={link.href} className={styles.navLink}>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				<div className={styles.actions}>
					<button className={styles.actionButton}>
						<Image draggable={false} priority alt='telegram' src={whatsapp} />
						WhatsApp
					</button>
					<button className={styles.actionButton}>
						<Image draggable={false} priority alt='whatsapp' src={telegram} />
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
					<div className='fixed w-full min-h-screenk h-full top-0 left-0 bg-[#121212] z-[100] grid grid-rows-navbarMini'>
						<div className='w-full px-8 py-8'>
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
										<a href={link.href} className={styles.navLinkMini}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div>
							<div className='m-auto justify-center w-fit flex flex-row gap-8'>
								<Image src={telegram} width={24} alt='icon-telegram' />
								<Image src={whatsapp} width={24} alt='icon-whatsapp' />
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
