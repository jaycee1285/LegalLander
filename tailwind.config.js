import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#233B5E",
          "secondary": "#9F9ECB",
          "accent": "#B79351",
          "neutral": "#A3AAA7",
          "base-100": "#f7f5f3",
          "info": "292828",
          "success": "#76A049",
          "warning": "#f39011",
          "error": "#f44336",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        david: ['David Libre', 'sans-serif'],
        abhaya: ['Abhaya Libre', 'serif'],
        overpass: ['Overpass Variable', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { fontFamily: theme('fontFamily.overpass') },
            h2: { fontFamily: theme('fontFamily.rokkit') },
            h3: { fontFamily: theme('fontFamily.rokkit') },
            h4: { fontFamily: theme('fontFamily.rokkit') },
            h5: { fontFamily: theme('fontFamily.rokkit') },
            h6: { fontFamily: theme('fontFamily.rokkit') },
            p: { fontFamily: theme('fontFamily.abhaya') },
            span: { fontFamily: theme('fontFamily.abhaya') },
            a: { fontFamily: theme('fontFamily.abhaya') },
            li: { fontFamily: theme('fontFamily.abhaya') },
            blockquote: { fontFamily: theme('fontFamily.abhaya') },
            // Add other elements as needed
          },
        },
      }),
    },
  },
  plugins: [daisyui, typography],
};
