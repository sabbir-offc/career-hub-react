/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
    extend: {
      backgroundImage: {
        'jobs-bg': "url('/public/assets/images/bg2.png')",
      }
    }

  },
  plugins: [require("daisyui")],
}

