import React from 'react';
import './globals.css';
import { ComponentType } from '@/models/common';
import { macan } from '@/styles/fonts';

export default function RootLayout({ children } : ComponentType) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/assets/icons/favicon.ico"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png"></link>

      <body id="root" className={macan.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
