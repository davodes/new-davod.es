import { literal } from 'astro:schema';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          // AZUL,
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
          // LILA,
          // 100: '#f3e8ff',
          // 200: '#e9d5ff',
          // 300: '#d8b4fe',
          // 400: '#c084fc',
          // 500: '#a855f7',
          // 600: '#9333ea',
          // 700: '#7e22ce',
          // 800: '#6b21a8',
          // 900: '#581c87',
          // 950: '#3b0764',
          // NARANJA
          // 50: '#fffaf5',
          // 100: '#fff0e0',
          // 200: '#ffd8b8',
          // 300: '#ffbc87',
          // 400: '#ff9b52',
          // 500: '#fb7c24',
          // 600: '#e76512',
          // 700: '#c14b0f',
          // 800: '#9b390d',
          // 900: '#7a2c0a',
          // 950: '#431807',         
        },
        dark: {
          // AZUL,
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
          // LILA,
          // 50:  '#faf7fc',
          // 100: '#f3eef8',
          // 200: '#e4dbef',
          // 300: '#cbb9dd',
          // 400: '#a996c2',
          // 500: '#8573a3',
          // 600: '#665984',
          // 700: '#4d4265',
          // 800: '#352d47',
          // 900: '#201b2c',
          // 950: '#120e18',
          // NARANJA
          // 50: '#fff8f3',
          // 100: '#ffefdf',
          // 200: '#ffd9b9',
          // 300: '#ffbd8b',
          // 400: '#ff9c58',
          // 500: '#f97833',
          // 600: '#de5f21',
          // 700: '#b84719',
          // 800: '#8e3412',
          // 900: '#280e03',
          // 950: '#190a02',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}