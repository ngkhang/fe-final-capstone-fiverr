import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fiverr | Freelance services marketplace | Find top global talent',
  description: 'Clone Fiverr by Next.js'
};

export default function DefaultLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col min-h-screen bg-red-400 '>
      <div className='bg-green-200'>
        <p>Header</p>
      </div>

      <div className='flex-grow'>
        {children}
      </div>
    </div>
  );
}
