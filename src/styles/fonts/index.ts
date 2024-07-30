import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

const macan = localFont({
  src: [
    {
      path: './MacanPanWeb-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './MacanPanWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './MacanPanWeb-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './MacanPanWeb-Bold.woff2',
      style: 'normal',
      weight: '700',
    }
  ],
  display: 'swap',
  variable: '--font-macan',
});

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '600', '700'],
});

export {
  macan,
  montserrat,
};
