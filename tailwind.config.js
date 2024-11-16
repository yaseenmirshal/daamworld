/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", // Dark background
        accent: "#4ADE80", // Accent color
        textLight: "#E5E7EB", // Light text
        textDark: "#1F2937", // Dark text for contrast
      },
    },
  },
  plugins: [],
};
