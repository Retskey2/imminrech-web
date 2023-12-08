'use client';

import { InputMask } from '@react-input/mask';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

import styles from './Contact.module.scss';
import { yourAction } from './actions';

const Contact = () => {
	const ref = useRef(null);
	const { replace } = useRouter();

	const modify = (input: string) => {
		return { mask: input[0] === '7' ? '+_ (___) ___-__-__' : undefined };
	};

	return (
		<section className={styles.contactSection} id='contact-us'>
			<motion.main
				initial={{ x: -50, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 }
				}}
				className={styles.contactContent}
			>
				<h1>Обсудить детали проекта</h1>
				<form
					ref={ref}
					id='contact-form'
					action={async (formData) => {
						// current formData is not effected by .reset()
						await yourAction(formData);
						//@ts-ignore
						ref.current.reset();
						replace('/');
					}}
					className={styles.contactForm}
				>
					<div className={styles.formGrid}>
						<div className={styles.formField}>
							<label htmlFor='form-company' className='font-medium'>
								Компания
							</label>
							<input
								id='form-company'
								required
								maxLength={50}
								autoComplete='company'
								name='company'
								type='text'
								placeholder='Компания'
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
								placeholder='Фамилия Имя Отчество'
							/>
						</div>
						<div className={styles.formField}>
							<label htmlFor='form-phone' className='font-medium'>
								Номер телефона
							</label>
							<InputMask
								mask='+7 (___) ___ - __ - __'
								replacement={{ _: /\d/ }}
								modify={modify}
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
								placeholder='example@mail.com'
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
