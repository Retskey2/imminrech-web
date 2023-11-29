import React from 'react';

import CasesItem from '../CasesItem';

import styles from './Cases.module.scss';
import { cases } from '@/constants';

const Cases = () => {
	return (
		<section className={styles.casesSection} id='cases'>
			<main className={styles.casesContent}>
				<h1>КЕЙСЫ</h1>
				<div className={styles.casesList}>
					{cases.map((item) => (
						<CasesItem
							description={item.description}
							key={item.id}
							image={item.image}
							title={item.title}
						/>
					))}
				</div>
			</main>
		</section>
	);
};

export default Cases;
