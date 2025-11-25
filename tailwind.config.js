export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        card: "rgba(255,255,255,0.06)",
        muted: "#9fb0c8",
        text: "#e9f2ff",
        brand1: "#74f1ff",
        brand2: "#7cffc1",
        brand3: "#a58cff",
      },
      borderRadius: {
        radius: "20px",
      },
    },
  },
  plugins: [],
}