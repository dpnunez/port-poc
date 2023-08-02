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
        'hero-highlight':
          'radial-gradient(ellipse farthest-side at 51% 50%, rgba(255, 255, 255, 1) 0.3%, rgba(255, 255, 255, 1) 13.3%, rgba(0, 0, 0, 0) 77.5%)',
        'hero-vintage':
          'radial-gradient(ellipse farthest-side at 49% 50%, rgba(0, 0, 0, 0) 0%, rgba(105, 0, 0, 0) 11.7%, rgba(0, 0, 0, 1) 77.5%)',
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
