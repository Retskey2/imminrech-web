'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { backgroundHeroPromo, star, starStroke } from '@/assets/icons';
import { iphone } from '@/assets/images';

import styles from './Hero.module.scss';

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
				<div className={styles.mobileHeroImage} role='img' aria-label='Decorative Back-Image'>
					<div className={styles.radialBackground}></div>
					<div className='relative h-full w-full'>
						<Image
							style={{
								transform: `translate(${position.stars.star2.x}px, ${position.stars.star2.y}px)`
							}}
							className='absolute lg:-top-[260px] -top-[280px] -left-8'
							draggable={false}
							alt='iphone'
							width={33}
							quality={100}
							height={33}
							src={star.src}
						/>
						<Image
							style={{
								transform: `translate(${position.stars.star2.x}px, ${position.stars.star2.y}px)`
							}}
							className='absolute -top-[70px] -right-[90px]'
							draggable={false}
							alt='iphone'
							width={63}
							quality={100}
							height={63}
							src={star.src}
						/>
					</div>
				</div>
				<h1 className={styles.heroTitle}>
					СОЗДАЕМ УДОБНЫЕ <br /> ЦИФРОВЫЕ ПРОДУКТЫ
				</h1>
				<h2 className={styles.heroDescription}>
					Дизайн, проектирование и разработка программного обеспечения.
				</h2>
				<Link href='tel:+7(993)492-28-00' className={styles.heroLink} role='link'>
					Обсудить проект
				</Link>
			</section>

			<div className={styles.heroImage} role='img' aria-label='Decorative Image'>
				<Image
					className={styles.heroImageBack}
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
							className='absolute lg:left-20 lg:top-28 xl:left-20 xl:top-32 2xl:left-28 2xl:top-32 sm:top-20 sm:left-[50px] xl:w-[33px] lg:w-[32px] sm:w-[22px]'
							draggable={false}
							alt='iphone'
							quality={100}
							width={33}
							height={33}
							src={starStroke.src}
						/>
					</motion.div>

					<Image
						style={{
							transform: `translate(${position.stars.star2.x}px, ${position.stars.star2.y}px)`
						}}
						className='absolute md:-right-2 lg:-right-4 top-10 lg:w-[78px] md:w-[58px]'
						draggable={false}
						alt='iphone'
						width={0}
						quality={100}
						height={86}
						src={starStroke.src}
					/>
					<Image
						style={{
							transform: `translate(${position.stars.star3.x}px, ${position.stars.star3.y}px)`
						}}
						className='absolute right-2 top-[90px] xl:right-2 xl:top-[100px] 2xl:right-4 2xl:top-[106px] lg:w-[66px] md:w-[46px]'
						draggable={false}
						alt='iphone'
						quality={100}
						width={0}
						height={66}
						src={starStroke.src}
					/>
					<Image
						style={{
							transform: `translate(${position.stars.star4.x}px, ${position.stars.star4.y}px)`
						}}
						className='absolute -left-10 lg:top-[260px] 2xl:top-[340px] xl:[260px] lg:w-[84px] md:top-[200px] md:w-[64px]'
						draggable={false}
						alt='iphone'
						quality={100}
						width={0}
						height={84}
						src={starStroke.src}
					/>
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
