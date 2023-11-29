import React from 'react';

import styles from './About.module.scss';

import { backroundImageAbout } from '@/assets/images';
import Image from 'next/image';
const About = () => {
	return (
		<section className={styles.aboutSection} id='about-us'>
			<Image
				className='z-0 mt-20'
				alt='back-about'
				src={backroundImageAbout}
				layout='fill'
				objectFit='cover'
				quality={100}
			/>

			<main className={styles.aboutContent}>
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
						Cистема управления проектами максимально прозрачная и позволит вам отслеживать прогресс
						проекта на каждом этапе.
					</li>
				</ul>
			</main>
		</section>
	);
};

export default About;
