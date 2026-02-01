/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Bhubaneswar Palette
                pastel: {
                    teal: '#5A7F7F',
                    yellow: '#D4C5A0',
                    pink: '#C4A0A0',
                    blue: '#7A9FB8',
                },
                earth: {
                    ochre: '#D4A574',
                    clay: '#A0826D',
                    brick: '#B85A4A',
                    stone: '#8B8680',
                },
                temple: {
                    gold: '#D4A860',
                    amber: '#E8B85C',
                },
                accent: {
                    orange: '#FF8C42', // Bike
                    yellow: '#FFD700', // School bus
                    red: '#DC143C',    // Racket
                    techBlue: '#4A90E2',
                    techGreen: '#00D084',
                },
                neutral: {
                    skyMorning: '#E8D7C3',
                    skyEvening: '#F4C97E',
                    skyAfternoon: '#A8C5DD',
                    ground: '#D4A574',
                    text: '#2B2B2B',
                    bg: '#F5F3EE',
                }
            },
            fontFamily: {
                display: ['"Caveat"', 'cursive', 'serif'],
                body: ['"Poppins"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'fade-out': 'fadeOut 0.5s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
            }
        },
    },
    plugins: [],
}
