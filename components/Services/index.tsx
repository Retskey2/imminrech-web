import React from 'react';

import ServiceItem from '../ServiceItem';

import styles from './Services.module.scss';
import { services } from '@/constants';

const Services = () => {
	return (
		<section className={styles.serviceSection} id='services'>
			<main className={styles.serviceContainer}>
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
			</main>
		</section>
	);
};

export default Services;
