/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkpurple: '#7a3bde',
				xivgray: {
					transparent: 'rgba(12,14,23,0.6)',
					800: '#141414',
					900: 'rgb(12,14,23)'
				},
				linkpurple: '#bd30ff',
				linkpurplehov: '#dd95ff',
				/*  */
				oxfordblue: '#0E143B',
				darkblue: '#546A7C',
				darksky: '#92B7C7',
				xiketic: '#080212'
			}
		},
		screens: {
			sm: { max: '640px' },
			md: { max: '800px' },
			lg: { max: '1024px' },
			xl: { max: '1280px' },
			'2xl': { max: '1536px' }
		}
	},
	plugins: []
};
