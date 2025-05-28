/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Inter will now be the default sans font
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '0.875rem',
            lineHeight: '1.75',
            color: theme('colors.gray.800'),
            maxWidth: '100%',
            h1: {
              fontSize: '1.5rem',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '1.25rem',
              fontWeight: '600',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            h3: {
              fontSize: '1.125rem',
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            p: {
              fontSize: '0.875rem',
              marginBottom: '1rem',
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
              color: theme('colors.gray.600'),
              fontStyle: 'italic',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};