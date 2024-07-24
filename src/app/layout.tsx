import React from 'react';
import { Montserrat } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/assets/icons/favicon.ico"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png"></link>

      <body className={montserrat.className} suppressHydrationWarning={true}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
