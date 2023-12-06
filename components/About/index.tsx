'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { backroundImageAbout } from '@/assets/icons';

import styles from './About.module.scss';

const About = () => {
	return (
		<section className={styles.aboutSection} id='about-us'>
			<Image
				alt='back-about'
				src={backroundImageAbout}
				fill
				priority
				objectFit='cover'
				objectPosition='0px 15px'
				quality={100}
			/>
			<main>
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 }
					}}
					className={styles.aboutContent}
				>
					<div>
						<h1>О НАС</h1>
						<h2>
							ИММИНТЭК - современная IT-компания, которая занимается разработкой программного
							обеспечения и созданием сайтов.
						</h2>
						<ul>
							<li>Уделяем много времени исследованию и проектированию.</li>
							<li>
								Не приступаем к разработке, пока не убедимся, что архитектура проекта обеспечит все
								запросы наших клиентов.
							</li>
							<li>
								Cистема управления проектами максимально прозрачная и позволит вам отслеживать
								прогресс проекта на каждом этапе.
							</li>
						</ul>
					</div>
				</motion.div>
			</main>
		</section>
	);
};

export default About;
