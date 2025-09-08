/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          600: '#4B5563',
          900: '#111827'
        },
        dark: {
          50: '#374151',
          100: '#D1D5DB',
          200: '#9CA3AF',
          600: '#1F2937',
          900: '#111827',
          DEFAULT: '#1E1E1E'
        }
      }
    }
  },
  plugins: []
}
