module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.25), 0 10px 30px rgba(2,6,23,0.35)',
      },
      colors: {
        'brand-navy': '#081a2e',
        'brand-blue': '#2563eb',
        'brand-sky': '#38bdf8',
        'brand-ice': '#e0f2fe',
      },
    },
  },
  plugins: [],
}
