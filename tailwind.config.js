/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            blink: 'blink 1s ease-in-out 0s infinite alternate',
        },
        keyframes: {
            blink: {
                from: { opacity: 1 },
                to: { opacity: 0 },
            },
        },
    },
},
  plugins: [],
}

