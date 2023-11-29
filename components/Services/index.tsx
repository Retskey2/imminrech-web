'use client';

import React from 'react';

import ServiceItem from '../ServiceItem';

import styles from './Services.module.scss';
import { services } from '@/constants';
import { motion } from 'framer-motion';

const Services = () => {
	return (
		<section className={styles.serviceSection} id='services'>
			<motion.main
				initial={{ x: -400, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 }
				}}
				className={styles.serviceContainer}
			>
				<h1>УСЛУГИ</h1>
				<ul className={styles.serviceStageMenu}>
					<li>
						<span> Этап 1.</span> Исследуем ваш бизнес-процесс, чтобы полностью понять
						его особенности и потребности.
					</li>
					<li>
						<span> Этап 2.</span> Спроектируем и разработаем цифровые решения для вашего бизнеса.
					</li>
					<li>
						<span>Этап 3.</span> Внедрим и обеспечим интеграции с используемыми сервисами.
					</li>
				</ul>
				<ul className={styles.serviceItemMenu}>
					{services.map((service) => (
						<ServiceItem key={service.id} title={service.title} description={service.description} />
					))}
				</ul>
			</motion.main>
		</section>
	);
};

export default Services;
