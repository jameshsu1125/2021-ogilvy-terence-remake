/* eslint-disable import/no-extraneous-dependencies */
import color from 'tailwindcss/colors';

const { fontSize } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js}'];
export const theme = {
	extend: {},
	container: { screen: {} },
	fontSize: {
		...fontSize,
	},
	colors: {
		...color,
		ogilvy_red: '#eb3f43',
	},
};
export const plugins = [];
