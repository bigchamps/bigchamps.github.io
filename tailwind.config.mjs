/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            quirlycues: ["Quirlycues", "sans-serif"],
            ain: ["AiN", "sans-serif"],
        },

        extend: {
            colors: {
                primary: '',
                secondary: '',
            },
            fontSize: {
                'myname': ['3rem', {
                    lineHeight: '5rem',
                    letterSpacing: '-0.01em',
                    fontWeight: '500',
                }],
                'floating': ['3rem', {
                    lineHeight: '3.5rem',
                    letterSpacing: '0.2em',
                    fontWeight: '600',
                }],
                'floating-sm': ['2rem', {
                    lineHeight: '2.3rem',
                    letterSpacing: '0.1em',
                    fontWeight: '400',
                }],
            },
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden"
                    },
                    "100%": {
                        width: "100%"
                    }
                },
                blink: {
                    "50%": {
                        borderColor: "transparent"
                    },
                    "100%": {
                        borderColor: "white"
                    }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(0)' },
                    '25%': { transform: 'rotate(3deg)' },
                    '75%': { transform: 'rotate(-3deg)' }
                  }
            },
            animation: {
                typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
                'spin-slow': 'spin 3s linear infinite',
                blinking: 'blink .2s infinite',
                'wiggle-2': 'wiggle 1s linear 2'
            }
        },
        
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
