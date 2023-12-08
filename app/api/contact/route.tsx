import { NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

export async function POST(request: any) {
	const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
	const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

	console.log(password, myEmail);

	const formData = await request.formData();

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

	try {
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
		return NextResponse.json({ message: 'Success: email was sent' });
	} catch (error) {
		console.log(error);
		//@ts-ignore
		NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' });
	}
}
