/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1280px",
			"2xl": "1280px",
		},
		extend: {
			colors: {
				primary: "#8cc63f",
				secondary: "#3e84b6",
			},
		},
	},
	plugins: [],
};
