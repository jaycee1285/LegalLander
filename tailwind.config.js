import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e2c02b",
          secondary: "#115164",
          accent: "#7e9aa7",
          neutral: "#292b34",
          "base-100": "#e5ebe3",
          info: "#006dd2",
          success: "#7db14c",
          warning: "#faa114",
          error: "#a31309",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { fontFamily: theme('fontFamily.raleway') },
            h2: { fontFamily: theme('fontFamily.raleway') },
            h3: { fontFamily: theme('fontFamily.raleway') },
            h4: { fontFamily: theme('fontFamily.raleway') },
            h5: { fontFamily: theme('fontFamily.raleway') },
            h6: { fontFamily: theme('fontFamily.raleway') },
            p: { fontFamily: theme('fontFamily.cormorant') },
            span: { fontFamily: theme('fontFamily.cormorant') },
            a: { fontFamily: theme('fontFamily.cormorant') },
            li: { fontFamily: theme('fontFamily.cormorant') },
            blockquote: { fontFamily: theme('fontFamily.cormorant') },
            // Add other elements as needed
          },
        },
      }),
    },
  },
  plugins: [daisyui, typography],
};
