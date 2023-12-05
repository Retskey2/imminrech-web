'use client';

import { once } from 'events';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { backroundImageAbout } from '@/assets/images';

import styles from './About.module.scss';

const About = () => {
	return (
		<section className={styles.aboutSection} id='about-us'>
			<Image
				alt='back-about'
				src={backroundImageAbout}
				layout='fill'
				objectFit='cover'
				objectPosition='0px 15px'
				quality={100}
			/>
			<main className={styles.aboutContent}>
				<motion.div
				// initial={{ x: -400, opacity: 0 }}
				// whileInView={{ x: 0, opacity: 1 }}
				// viewport={{ once: true }}
				// transition={{ duration: 0.8 }}
				// variants={{
				// 	visible: { opacity: 1, scale: 1 },
				// 	hidden: { opacity: 0, scale: 0 }
				// }}
				>
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
				</motion.div>
			</main>
		</section>
	);
};

export default About;
