/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#fdeef1',
        cream: '#fffaf4',
        burgundy: '#6a1e3b',
        rosebtn: '#dc7591',
        rosedeep: '#c95f7d',
        lavender: '#a98bd6',
        lavenderdeep: '#9575c6',
        inkmuted: '#7a5560',
        borderrose: '#e3c7cd',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 20px 60px -12px rgba(150, 60, 90, 0.18), 0 4px 14px rgba(150, 60, 90, 0.08)',
        btn: '0 6px 16px -4px rgba(201, 95, 125, 0.55)',
        btnlav: '0 6px 14px -4px rgba(149, 117, 198, 0.5)',
      },
      keyframes: {
        cardIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-12px)' },
        },
        floatHeart: {
          '0%': { transform: 'translateY(0) rotate(var(--r, 0deg))', opacity: 'var(--o, 0.4)' },
          '50%': { transform: 'translateY(-22px) rotate(calc(var(--r, 0deg) + 6deg))', opacity: 'calc(var(--o, 0.4) * 0.55)' },
          '100%': { transform: 'translateY(0) rotate(var(--r, 0deg))', opacity: 'var(--o, 0.4)' },
        },
        burst: {
          '0%': { transform: 'translate(0,0) scale(0.4)', opacity: '0' },
          '15%': { opacity: '1' },
          '100%': { transform: 'translate(var(--x), var(--y)) scale(1.1)', opacity: '0' },
        },
        shake: {
          '0%,100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        'card-in': 'cardIn 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'card-out': 'cardOut 260ms ease-in both',
        'float-heart': 'floatHeart var(--d, 9s) ease-in-out var(--delay, 0s) infinite',
        burst: 'burst 1.6s ease-out forwards',
        shake: 'shake 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}
