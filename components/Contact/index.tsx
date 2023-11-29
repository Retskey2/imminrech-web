'use client';

import React from 'react';

import styles from './Contact.module.scss';
import { handleSubmit } from './handleSubmit';
import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<section className={styles.contactSection} id='contact-us'>
			<motion.main
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 }
				}}
				className={styles.contactContent}
			>
				<h1>Обсудить детали проекта</h1>
				<form onSubmit={() => handleSubmit} className={styles.contactForm}>
					<div className={styles.formGrid}>
						<div className={styles.formField}>
							<label htmlFor='form-company' className='font-medium'>
								Компания
							</label>
							<input
								id='form-company'
								required
								maxLength={50}
								name='text'
								placeholder='Noname company'
							/>
						</div>
						<div className={styles.formField}>
							<label htmlFor='form-name' className='font-medium'>
								ФИО
							</label>
							<input
								id='form-name'
								required
								autoComplete='name'
								maxLength={80}
								name='name'
								type='text'
								placeholder='Борисов Борис Борисыч'
							/>
						</div>
						<div className={styles.formField}>
							<label htmlFor='form-phone' className='font-medium'>
								Номер телефона
							</label>
							<input
								id='form-phone'
								required
								autoComplete='phone'
								maxLength={80}
								name='phone'
								type='phone'
								placeholder='+7 (123) 123 - 12 - 12'
							/>
						</div>
						<div className={styles.formField}>
							<label htmlFor='form-email' className='font-medium'>
								Почта
							</label>
							<input
								id='form-email'
								required
								autoComplete='email'
								maxLength={80}
								placeholder='NewPochta@mail.com'
								name='email'
								type='email'
							/>
						</div>
					</div>
					<button className={styles.submitButton}>Отправить</button>
				</form>
			</motion.main>
		</section>
	);
};

export default Contact;
