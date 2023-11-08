/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				title: {
					cool: '#E9F0FF',
					green: '#D3FFDD',
					gray: '#ACACAC',
					sub: 'rgba(255, 255, 255, 0.50)'
				}
			},
			fontFamily: {
				body: ['Poppins', 'sans-serif'],
				title: ['Poppins-Bold', 'sans-serif'],
				heading: ['Poppins-SemiBold', 'sans-serif'],
				paragraph: ['Poppins-Regular', 'sans-serif'],
				subtitle: ['Poppins-Medium', 'sans-serif'],
				thin: ['Poppins-Thin', 'sans-serif']
			}
		}
	},
	plugins: []
};
