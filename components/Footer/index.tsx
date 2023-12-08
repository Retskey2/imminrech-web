'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getSocialMedia } from '@/hooks/getSocialMedia';

import { telegram, whatsapp } from '@/assets/icons';

import { navLinks } from '@/constants';

const Footer = () => {
	const { openTelegramChat, openWhatsAppChat } = getSocialMedia();
	return (
		<footer className='bg-[#090909] w-full pt-12 pb-6 flex relative justify-start overflow-hidden'>
			<div className='grid sm:grid-cols-2 grid-cols-1  sm:grid-rows-1  gap-10 grid-rows-2 sm:gap-40 px-6 lg:px-8 xl:px-48 m-auto max-w-[1920px] w-full'>
				<div>
					<h1 className='font-bold text-[30px]'>Напиши нам о своём проекте!</h1>
					<ul className='mt-8 grid grid-rows-3 gap-3 text-lg font-normal'>
						<li>1@immin.tech</li>
						<li>+7 (999) 223-28-00</li>
						<li className='flex gap-4'>
							<button>
								<Image draggable={false} alt='telegram' src={whatsapp} onClick={openWhatsAppChat} />
							</button>
							<button>
								<Image draggable={false} alt='whatsapp' src={telegram} onClick={openTelegramChat} />
							</button>
						</li>
					</ul>
				</div>
				<div>
					<h1 className='font-bold text-[30px]'>Навигация</h1>
					<ul
						className=' underline mt-8 flex flex-wrap gap-3 text-lg font-normal max-w-[160px]'
						role='menu'
					>
						<li role='menuitem'>
							<Link href='/'>Главная</Link>
						</li>
						{navLinks.map((link) => (
							<li key={link.label} role='menuitem'>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
