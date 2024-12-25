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
				mainC: {
					50: '#E5E9FF',
					100: '#CCD2FF',
					200: '#99A6FF',
					300: '#6679FF',
					400: '#334DFF',
					500: '#00126B', // base color
					600: '#001064',
					700: '#000D5D',
					800: '#000A56',
					900: '#00074F'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
