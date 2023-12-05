'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { hamburger } from '@/assets/icons';
import { telegram, whatsapp } from '@/assets/images';

import styles from './Navbar.module.scss';
import { navLinks } from '@/constants';

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);

	const handleNav = () => {
		setShowNav(!showNav);
	};

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
			</nav>
		</header>
	);
};

export default Navbar;
