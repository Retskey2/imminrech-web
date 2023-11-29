'use client';

import cn from 'classnames';
import React, { useState } from 'react';

import styles from './ServiceItem.module.scss';

interface ServiceItemProps {
	title: string;
	description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
	const [isHovering, setIsHovered] = useState(false);

	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);

	return (
		<li className={styles.serviceItem}>
			<div
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				className={styles.titleContainer}
			>
				<p>{title}</p>
				<span className=''>
					<a href={'#contact-us'}>Подробнее</a>→
				</span>
			</div>

			<p
				className={cn(styles.description, {
					[styles.active]: isHovering
				})}
			>
				{description}
			</p>
		</li>
	);
};

export default ServiceItem;
