// import { screens as _screens } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    zIndex: {
      999999: '999999',
      99999: '99999',
      9999: '9999',
      999: '999',
      99: '99',
      9: '9',
      1: '1',
    },
    // extend: {
    //   screens: {
    //     '2xsm': '375px',
    //     xsm: '425px',
    //     '3xl': '2000px',
    //     ..._screens,
    //   },
    // },
  },
}
export const plugins = []
