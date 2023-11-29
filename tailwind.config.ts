import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				navbar: 'minmax(max-content, 300px) minmax(200px, 1fr) minmax(max-content, 300px)',
				'2xnavbar': '150px minmax(200px, 1fr)',
				hero: '1fr minmax(380px, 540px)'
			},
			screens: {
				'1600xl': { max: '1600px' }
			}
		}
	},
	plugins: []
};
export default config;
