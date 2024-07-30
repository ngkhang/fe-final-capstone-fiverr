import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NotFoundContent } from '@/utils/staticContent';
import Divider from '@/components/Divider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';


export const metadata: Metadata = {
  title: 'Page not found - Fiverr',
  description: 'Page not found',
};

const { brand, main, footer } = NotFoundContent;

const NotFoundPage = () => (
  <div className='h-screen bg-cover bg-center bg-no-repeat text-white' style={{
    backgroundImage: "linear-gradient(90deg,rgba(0,0,0,.81) 17.97%,rgba(0,0,0,.31) 57.6%,transparent 77.6%), url('/assets/images/404page.png')",
  }}
  >
    <div className='h-full px-4 py-5 tablet:px-8 tablet:py-6 laptop:px-16 m-0 flex'>
      <div className='laptop:w-4/5 laptop-l:w-3/5 flex flex-col'>
        {/* Logo */}
        <Link href='/' className='inline-block'>
          <Image src={brand.image} alt={brand.alt} width={89} height={27} quality={100}/>
        </Link>

        {/* Main */}
        <div className='flex-1 my-3 content-center'>
          <h1 className='font-bold text-3xl tablet:text-4xl'>
            {main.title}
          </h1>
          {/* TODO: Diveder component */}
          <Divider className='h-[2px] w-1/3 min-w-10 bg-white my-8 laptop-l:my-11'/>
          <h5 className='mb-1 text-xl tablet:text-2xl font-bold'>
            {main.subtitle}
          </h5>
          <p className='text-base tablet:text-lg'>
            {main.content}
          </p>
          {/* Search input */}
          {/* TODO: Search component */}
          <div className='my-6 flex items-stretch'>
            <Input type='email' placeholder='Search for...' className='bg-white h-10 rounded-e-none text-black'/>
            <Button variant="outline" className='h-10 text-lg text-white bg-green-7 border-none hover:text-white hover:bg-green-9 rounded-s-none'>
              <MagnifyingGlassIcon />
            </Button>
          </div>
          <div className='flex flex-col tablet:flex-row tablet:items-center mb-12 text-sm'>
            <span className='mb-4 tablet:mb-0 tablet:mr-4 font-bold'>Popular:</span>
            <div className='flex-1 flex flex-wrap'>
              {
                main.populars.map((item) => (
                  <Button key={item.id} className='px-4 py-1 h-full border-1 border-white ring-1 ring-white text-white bg-gray-12 text-xs mr-3 mb-3 tablet:mb-0 rounded-3xl'>
                    {item.label}
                  </Button>
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


        {/* Footer */}
        <div className='py-2 self-end laptop:self-start'>
          <Image src={footer.image} alt={footer.alt} width={175} height={15} quality={100}/>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;

