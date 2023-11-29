'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { backgroundHeroPromo, iphone, star } from '@/assets/images';

import styles from './Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
	const [position, setPosition] = useState({
		stars: {
			star1: { x: 0, y: 0 },
			star2: { x: 0, y: 0 },
			star3: { x: 0, y: 0 },
			star4: { x: 0, y: 0 }
		},
		iphone: { x: 0, y: 0 }
	});

	const handleMouseMove = (e: any) => {
		const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
		const yPos = (e.clientY / window.innerHeight - 0.5) * 40;
		setPosition({
			stars: {
				star1: {
					x: xPos * 0.7,
					y: yPos * 0.5
				},
				star2: {
					x: xPos * 0.5,
					y: yPos * 1.2
				},
				star3: {
					x: xPos * 0.2,
					y: yPos * 1.3
				},
				star4: {
					x: xPos * 1.3,
					y: yPos * 2.1
				}
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
					quality={100}
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
				<div className={styles.heroImageEffectsBlock} aria-hidden='true'>
					<motion.div>
						<Image
							style={{
								transform: `translate(${position.stars.star1.x}px, ${position.stars.star1.y}px)`
							}}
							className='absolute left-24 top-32'
							priority
							draggable={false}
							alt='iphone'
							quality={100}
							width={33}
							height={33}
							src={star.src}
						/>
					</motion.div>

					<Image
						style={{
							transform: `translate(${position.stars.star2.x}px, ${position.stars.star2.y}px)`
						}}
						className='absolute -right-6 top-10'
						priority
						draggable={false}
						alt='iphone'
						quality={100}
						width={86}
						height={86}
						src={star.src}
					/>
					<Image
						style={{
							transform: `translate(${position.stars.star3.x}px, ${position.stars.star3.y}px)`
						}}
						className='absolute right-6 top-[106px]'
						priority
						draggable={false}
						alt='iphone'
						quality={100}
						width={66}
						height={66}
						src={star.src}
					/>
					<Image
						style={{
							transform: `translate(${position.stars.star4.x}px, ${position.stars.star4.y}px)`
						}}
						className='absolute -left-10 top-[320px]'
						priority
						draggable={false}
						alt='iphone'
						quality={100}
						width={84}
						height={84}
						src={star.src}
					/>
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
