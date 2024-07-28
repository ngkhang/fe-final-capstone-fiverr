import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '414px',
        'tablet': '600px',
        'laptop': '900px',
        'laptop-l': '1160px'
      },
      maxWidth: {
        main: '1400px'
      },
      colors: {
        blue: {
          9: '#3453A8',
          7: '#446EE7'
        },
        orange: {
          9: '#CA6923',
          7: '#FC832B'
        },
        red: {
          9: '#C43333',
          7: '#F74040'
        },
        pink: {
          7: '#FF62AD'
        },
        green: {
          9: '#188652',
          8: '#19A463',
          7: '#1DBF73'
        },
        gray: {
          12:'#222325',
          11:'#404145',
          10:'#62646A',
          9: '#74767E',
          7: '#B5B6BA',
          3: '#EFEFF0',
          2: '#F5F5F5'
        }
      },
      fontFamily: {
        base : ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        '404Page': "linear-gradient(90deg,rgba(0,0,0,.81) 17.97%,rgba(0,0,0,.31) 57.6%,transparent 77.6%), url('/assets/images/404page.png')"
      }
    }
  },
  plugins: [
    // require('./src/lib/tailwind.plugins.ts')
  ],
  // 👇 Resolve conflic between Antd and TaildwindCSS
  corePlugins: {
    preflight: false
  },
  important: '#root'
} satisfies Config;
