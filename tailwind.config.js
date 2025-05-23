/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '0.875rem', // Base font size: 14px
            lineHeight: '1.75',
            maxWidth: '100%',
            color: theme('colors.gray.800'),
            h1: {
              fontWeight: '700',
              fontSize: '1.875rem', // ~30px
              lineHeight: '2.25rem',
              marginBottom: '1.25rem',
              marginTop: '2rem',
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '600',
              fontSize: '1.5rem', // ~24px
              lineHeight: '2rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.25rem', // ~20px
              lineHeight: '1.75rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              color: theme('colors.gray.900'),
            },
            p: {
              fontSize: '0.875rem',
              marginBottom: '1.25rem',
              lineHeight: '1.8',
              color: theme('colors.gray.800'),
            },
            li: {
              fontSize: '0.875rem',
              marginBottom: '0.5rem',
            },
            ul: {
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
            },
            strong: {
              fontWeight: '600',
            },
            blockquote: {
              paddingLeft: '1rem',
              borderLeft: `4px solid ${theme('colors.gray.300')}`,
              fontStyle: 'italic',
              color: theme('colors.gray.600'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};