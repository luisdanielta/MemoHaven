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
					'50': '#e9f2fb',
					'100': '#d4e6f7',
					'200': '#a8ccf0',
					'300': '#7db3e8',
					'400': '#5199e1',
					'500': '#2680d9',
					'600': '#1e66ae',
					'700': '#174d82',
					'800': '#0f3357',
					'900': '#081a2b'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
