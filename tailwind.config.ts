import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
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
          9: '188652',
          8: '19A463',
          7: '1DBF73'
        },
        gray: {
          12:'#222325',
          11:'#404145',
          10:'#62646A',
          9: '#74767E',
          7: '#B5B6BA',
          3: '#03030E',
          2: '#F5F5F5'
        }
      },
      fontFamily: {
        base : ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
