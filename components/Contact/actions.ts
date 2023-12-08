'use server';

import { revalidatePath } from 'next/cache';

const nodemailer = require('nodemailer');

export const yourAction = async (formData: any) => {
	const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
	const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

	const name = formData.get('name');
	const email = formData.get('email');
	const company = formData.get('company');
	const phone = formData.get('phone');

	const transporter = nodemailer.createTransport({
		Service: 'mail',
		host: 'smtp.mail.ru',
		port: 465,
		auth: {
			user: myEmail,
			pass: password
		}
	});

	const mail = await transporter.sendMail({
		from: myEmail,
		to: myEmail,
		subject: `Клиент. Письмо от ${email}`,
		html: `
        <p>Имя представителя: ${name} </p>
        <p>Почта: ${email} </p>
        <p>Компания: ${company} </p>
        <p>Номер телефон: ${phone} </p>
        `,
		defaults: {
			from: `"От кого" <${myEmail}>`
		}
	});

	revalidatePath('/');
};
