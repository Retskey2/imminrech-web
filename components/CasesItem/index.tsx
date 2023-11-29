'use client';
import Image from 'next/image';
import React from 'react';

import styles from './CaseItem.module.scss';
import { motion } from 'framer-motion';

interface CasesItemProps {
	title: string;
	description: string;
	image: string;
}

const CasesItem: React.FC<CasesItemProps> = ({ title, description, image }) => {
	return (
		<motion.div
			whileHover={{ scale: [1, 1.02, 1.04] }}
			transition={{ duration: 0.2 }}
			className={styles.casesItem}
		>
			<div className={styles.itemImageContainer}>
				<Image draggable={false} priority src={image} alt='item' className='h-full w-full' />
			</div>
			<div className={styles.itemTitle}>{title}</div>
			<p className={styles.itemDescription}>{description}</p>
		</motion.div>
	);
};

export default CasesItem;
