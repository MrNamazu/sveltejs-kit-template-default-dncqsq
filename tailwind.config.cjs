/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				jost: ['Poppins', 'sans-serif']
			},
			colors: {
				xivdata: {
					'gray-900': '#181821',
					'gray-800': '#1f1f2b'
				},
				darkpurple: '#7a3bde',
				xivpurple: {
					400: '#7a3bde',
					transparent: 'rgba(122,59,222,0.2)'
				},
				xivgray: {
					transparent: 'rgba(12,14,23,0.6)',
					800: 'rgb(20, 19, 26)',
					900: 'rgb(12,14,23)'
				},
				linkpurple: '#bd30ff',
				linkpurplehov: '#dd95ff',

				primary: {
					main: '#7a3bde',
					hover: 'rgb(93,43,172)'
				},
				secondary: {
					transparent: 'rgba(12, 13, 16, 0.450)', // Transparent 45% of Dark Grey
					'transparent-200': 'rgba(34, 34, 49, 0.71)', // Transparent 60% of Dark Grey
					'transparent-300': 'rgba(12, 13, 16, 0.700)', // Transparent 80% of Dark Grey
					700: 'rgb(27,27,37)', // Main light grey
					800: '#1f1f2b', // Main dark grey
					900: '#181821' // Main full dark grey
				}
			},
			borderRadius: {
				DEFAULT: '5px' // XIVDB GLOBAL BORDER RADIUS
			}
		},
		screens: {
			xs: { max: '450px' },
			sm: { max: '640px' },
			md: { max: '800px' },
			lg: { max: '1024px' },
			xl: { max: '1280px' },
			'2xl': { max: '1536px' }
		}
	},
	plugins: []
};
