/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
			'black': '#000112',
			'grey': {
				100: '#F4F7FD',
				200: '#E4EBFA',
				300: '#828FA3',
				400: '#3E3F4E',
				500: '#2B2C37',
				600: '#20212C'
			},
			'purple': {
				100: '#A8A4FF',
				200: '#635FC7'
			},
			'red': {
				100: '#FF9898',
				200: '#EA5555'
			}
		},
	},
	plugins: [],
}
