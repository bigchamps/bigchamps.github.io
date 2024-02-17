/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        darkMode: 'class',
        fontFamily: {
            quirlycues: ["Quirlycues", "sans-serif"],
            ain: ["AiN", "sans-serif"],
        },

        extend: {
            colors: {
                atomic_1: '#3d5a80 ',
                atomic_2: '#98c1d9 ',
                atomic_3: '#e0fbfc ',
                atomic_4: '#ee6c4d',
                atomic_5: '#293241',
                atomic_6: '#219ebc',
                atomic_7: '#8ecae6',
                atomic_8: '#ffb703',
            },
            fontSize: {
                'myname': ['3rem', {
                    lineHeight: '5rem',
                    letterSpacing: '-0.01em',
                    fontWeight: '600',
                }],
                'myname-sm': ['2.5rem', {
                    lineHeight: '3rem',
                    letterSpacing: '-0.01em',
                    fontWeight: '400',
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
                  },
                  popIn: {
                    '0%' :{ transform: 'scale(0)' },
                    '90%': { transform: 'scale(1.1)'},                
                    '100%': {transform: 'scale(1)'}
                }
            },
            animation: {
                typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
                'spin-slow': 'spin 3s linear infinite',
                blinking: 'blink .2s infinite',
                'wiggle-2': 'wiggle 1s linear 3',
                'pulse-bounce': 'pulse 10s linear infinite, bounce 2s infinite',
                'popIn': 'popIn 1s ease-in-out',
            }
        },

        
        
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("tailwindcss-animation-delay"),
    ],
}
