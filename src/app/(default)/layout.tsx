import type { Metadata } from 'next';
import { ComponentType } from '@/models/common';
import { Footer, Header } from '@/components';


export const metadata: Metadata = {
  title: 'Fiverr | Freelance services marketplace | Find top global talent',
  description: 'Clone Fiverr by Next.js',
};

export default function DefaultLayout({ children }: ComponentType) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>

      <div className='flex-1'>
        {children}
      </div>

      <Footer/>
    </div>
  );
}
