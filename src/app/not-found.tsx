import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from 'antd';
import Search from 'antd/es/input/Search';
import { NotFoundContent } from '@/utils/staticContent';

export const metadata: Metadata = {
  title: 'Page not found - Fiverr',
  description: 'Page not found'
};

const NotFoundPage = () => (
  <div className="min-h-screen wrapper bg-404Page bg-cover bg-center bg-no-repeat text-white">
    <div className='flex laptop-l:px-5 py-5 laptop-l:py-6'>
      <div className='w-full tablet:w-4/5 laptop-l:w-2/5 flex flex-col'>
        {/* Logo */}
        <Link href='/' className='inline-block'>
          <Image src={NotFoundContent.logo} alt='...' width={89} height={27} quality={100}/>
        </Link>

        {/* Main */}
        <div className='flex-1 my-3 content-center'>
          <div className=''>
            <h1 className='font-bold text-2xl tablet:text-4xl'>
              {NotFoundContent.title}
            </h1>
            <Divider className='h-[2px] w-1/3 min-w-10 bg-white my-8 laptop-l:my-11'/>
            <h5 className='mb-1 text-xl tablet:text-2xl font-bold'>
              {NotFoundContent.subtitle}
            </h5>
            <p className='text-base tablet:text-lg'>
              {NotFoundContent.content}
            </p>

            <Search className='btnSearch my-6' placeholder="Search for..." enterButton />
            <div className='flex flex-col tablet:flex-row mb-12 text-sm'>
              <span className='mb-4 tablet:mb-0 tablet:mr-4 font-bold'>Popular:</span>
              <div className='flex-1 flex flex-wrap'>
                {
                  NotFoundContent.populars.map((item) => (
                    <button key={item.id} className='px-3 py-1 border-1 border-white ring-1 ring-white text-white bg-gray-12 mr-3 mb-3 rounded-xl'>
                      {item.label}
                    </button>
                  ))
                }
              </div>
            </div>

            <Link
              href="/"
              className="inline-block rounded-md px-5 py-2 text-sm font-medium text-white bg-green-8 hover:bg-green-9 focus:outline-none focus:ring"
            >
              Go Back Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className='py-2 text-end tablet:text-start'>
          <Image src={NotFoundContent.footer} alt='...' width={175} height={15} quality={100}/>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
