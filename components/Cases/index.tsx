'use client';

import { motion } from 'framer-motion';
import React from 'react';

import CasesItem from '../CasesItem';

import styles from './Cases.module.scss';
import { cases } from '@/constants';

const Cases = () => {
	return (
		<section className={styles.casesSection} id='cases'>
			<motion.main
				initial={{ x: -50, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 }
				}}
				className={styles.casesContent}
			>
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
			</motion.main>
		</section>
	);
};

export default Cases;
