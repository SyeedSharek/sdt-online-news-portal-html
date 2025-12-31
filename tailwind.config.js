// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      // fontFamily: {
      //   kalpurush: ['"Kalpurush"', 'Arial', 'sans-serif'],
      // },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"), // 👈 Add this line
  ],
};
