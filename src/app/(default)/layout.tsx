import type { Metadata } from 'next';
import Layout, { Content } from 'antd/es/layout/layout';

import { ComponentType } from '@/models/common';
import { Footer } from '@/components';
import { Divider } from 'antd';

export const metadata: Metadata = {
  title: 'Fiverr | Freelance services marketplace | Find top global talent',
  description: 'Clone Fiverr by Next.js',
};

export default function DefaultLayout({ children }: ComponentType) {
  return (
    <Layout className='bg-inherit'>
      <Content className='wrapper'>
        {children}
      </Content>

      <Divider className='h-[2px] bg-gray-3 m-0'/>
      <div className='wrapper'>
        <Footer/>
      </div>
    </Layout>
  );
}
