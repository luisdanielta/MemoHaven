import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
				'2xl': '1600px'
			},
			colors: {
				transparent: 'transparent',
				black: '#000',
				white: '#fff',
				gray: colors.gray,
				blue: colors.blue,
				yellow: colors.yellow,
				green: colors.green,
				red: colors.red
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
