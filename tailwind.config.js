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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            h1: {
              fontWeight: '700',
              fontSize: '2.25rem',
              marginBottom: '1.25rem',
              marginTop: '2rem',
            },
            h2: {
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.25rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginBottom: '1.25rem',
              lineHeight: '1.8',
            },
            ul: {
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
            },
            li: {
              marginBottom: '0.5rem',
            },
            strong: {
              fontWeight: '600',
            },
            blockquote: {
              paddingLeft: '1rem',
              borderLeft: '4px solid #ccc',
              fontStyle: 'italic',
              color: '#555',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};