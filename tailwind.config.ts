import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        macan: ['var(--font-macan)'],
        mont: ['var(--font-montserrat)'],
        base: ['var(--font-macan)', 'var(--font-montserrat)'],
      },
      screens: {
        'mobile': '414px',
        'tablet': '600px',
        'laptop': '900px',
        'laptop-l': '1160px',
      },
      maxWidth: {
        main: '1400px',
      },
      colors: {
        blue: {
          9: '#3453A8',
          7: '#446EE7',
        },
        orange: {
          9: '#CA6923',
          7: '#FC832B',
        },
        red: {
          9: '#C43333',
          7: '#F74040',
        },
        pink: {
          7: '#FF62AD',
        },
        green: {
          9: '#188652',
          8: '#19A463',
          7: '#1DBF73',
        },
        gray: {
          12:'#222325',
          11:'#404145',
          10:'#62646A',
          9: '#74767E',
          7: '#B5B6BA',
          4: '#E4E5E7',
          3: '#EFEFF0',
          2: '#F5F5F5',
        },
        border: 'hsl(var(--border))',
        borderWidth: {
          DEFAULT: '1px',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
