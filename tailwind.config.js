/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-menu': `linear-gradient(to left,${theme(
          'colors.zinc.800',
        )} 20%,${theme('colors.zinc.800')} 44%,${theme(
          'colors.zinc.500',
        )} 50%,${theme('colors.zinc.600')} 60%,${theme(
          'colors.zinc.800',
        )} 63%,${theme('colors.zinc.800')} 100%)`,
      }),
      backgroundSize: {
        '200%': '200% auto',
      },
    },
  },
  plugins: [],
}
