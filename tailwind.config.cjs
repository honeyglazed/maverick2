/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'serif': [
				'"Cormorant Garamond"', 
				'"Noto Serif SC"',
				defaultTheme.fontFamily.serif,
			],
			'sans': [
				'"Roboto Condensed"',
				'"Noto Sans"',
				'"Noto Sans SC"',
				defaultTheme.fontFamily.sans,
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
