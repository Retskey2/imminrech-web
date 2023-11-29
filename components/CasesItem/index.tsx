import Image from 'next/image';
import React from 'react';

import styles from './CaseItem.module.scss';

interface CasesItemProps {
	title: string;
	description: string;
	image: string;
}

const CasesItem: React.FC<CasesItemProps> = ({ title, description, image }) => {
	return (
		<div className={styles.casesItem}>
			<div className={styles.itemImageContainer}>
				<Image draggable={false} priority src={image} alt='item' className='h-full w-full' />
			</div>
			<div className={styles.itemTitle}>{title}</div>
			<p className={styles.itemDescription}>{description}</p>
		</div>
	);
};

export default CasesItem;
