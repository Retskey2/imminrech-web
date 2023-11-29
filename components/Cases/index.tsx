'use client';

import React from 'react';

import CasesItem from '../CasesItem';

import styles from './Cases.module.scss';
import { cases } from '@/constants';
import { motion } from 'framer-motion';

const Cases = () => {
	return (
		<section className={styles.casesSection} id='cases'>
			<motion.main
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
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
