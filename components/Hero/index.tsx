'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { backgroundHeroPromo, iphone, star } from '@/assets/images';

import styles from './Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
	const [position, setPosition] = useState({
		star: { x: 0, y: 0 },
		iphone: { x: 0, y: 0 }
	});

	const handleMouseMove = (e: any) => {
		const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
		const yPos = (e.clientY / window.innerHeight - 0.5) * 40;
		setPosition({
			star: {
				x: xPos,
				y: yPos
			},
			iphone: {
				x: xPos * 0.3,
				y: yPos * 0.3
			}
		});
	};
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0 }
			}}
			className={styles.heroSection}
			onMouseMove={handleMouseMove}
			role='region'
			aria-label='Hero Section'
		>
			<section className={styles.heroContent}>
				<h1 className={styles.heroTitle}>
					СОЗДАЕМ УДОБНЫЕ <br /> ЦИФРОВЫЕ ПРОДУКТЫ
				</h1>
				<h2 className={styles.heroDescription}>
					Дизайн, проектирование и разработка программного обеспечения.
				</h2>
				<Link href='#contact-us' className={styles.heroLink} role='link'>
					Обсудить проект
				</Link>
			</section>

			<div className={styles.heroImage} role='img' aria-label='Decorative Image'>
				<Image
					className={styles.heroImageBack}
					priority
					width={10}
					height={10}
					draggable={false}
					alt='back'
					src={backgroundHeroPromo}
				/>
				<Image
					className={styles.heroImageFront}
					style={{
						transform: `translate(${position.iphone.x}px, ${position.iphone.y}px)`
					}}
					priority
					draggable={false}
					alt='iphone'
					quality={100}
					width={500}
					height={500}
					src={iphone.src}
				/>
				<div
					className={styles.heroImageEffectsBlock}
					style={{
						transform: `translate(${position.star.x}px, ${position.star.y}px)`
					}}
					aria-hidden='true'
				></div>
			</div>
		</motion.section>
	);
};

export default Hero;
