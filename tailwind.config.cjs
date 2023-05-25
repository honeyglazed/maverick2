/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'serif': [
				'"Cormorant Garamond"', 
				'"Noto Serif SC"',
				'ui-serif', 
				'Georgia', 'Cambria', 
				'"Times New Roman"', 
				'Times', 
				'serif'
			]
		},
		extend: {
			colors: {
				"off-white": "#f7f7f2",
				"black": "#121212"
			}
		},
	},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
