module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      xxs: "380px",
      xs: "480px",
      sm: "566px",
      md: "720px",
      lg: "1366px",
      xl: "1440px",
      uw: "2560px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
