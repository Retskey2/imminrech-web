'use client';
import Image from 'next/image';
import React from 'react';
import imageLogo from '../../assets/images/logo_to-body.png';
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
			whileHover={{ scale: [1, 0.96, 1] }}
			transition={{ duration: 0.2 }}
			className={styles.casesItem}
		>
			<div className={styles.itemImageContainer}>
				<Image priority src={image.src} width={400} height={400} alt='item' />
			</div>
			<div className={styles.itemTitle}>{title}</div>
			<p className={styles.itemDescription}>{description}</p>
		</motion.div>
	);
};

export default CasesItem;
