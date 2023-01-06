/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sansSerif: ['Syne', 'sans-serif']
		},
		colors: {
			'gray-light': '#f0f1ee',
			'gray-dark': '#635150',
			'egg-shell': '#f2ebeb',
			dark: '#1b1819'
		},
		extend: {}
	},
	plugins: []
};
