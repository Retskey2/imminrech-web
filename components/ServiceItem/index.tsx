'use client';

import cn from 'classnames';
import Link from 'next/link';
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
		<li className={styles.serviceItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<div className={styles.titleContainer}>
				<p>{title}</p>
				<span className=''>
					<Link href={'#contact-us'}>Подробнее</Link>→
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
