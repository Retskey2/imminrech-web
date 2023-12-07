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
	const [isActive, setIsActive] = useState(false);

	return (
		<li className={styles.serviceItem}>
			<div className={styles.titleContainer}>
				<p>{title}</p>
				<span onClick={() => setIsActive(!isActive)}>
					<div>Подробнее</div>→
				</span>
			</div>

			<p
				className={cn(styles.description, {
					[styles.active]: isActive
				})}
			>
				{description}
			</p>
		</li>
	);
};

export default ServiceItem;
