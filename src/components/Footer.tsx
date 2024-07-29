import Image from 'next/image';
import { Footer } from 'antd/es/layout/layout';
import { Divider } from 'antd';
import { FooterContent } from '@/utils/staticContent';
import Icons from '@/utils/icons';

const { categories, bottom } = FooterContent;

const FooterAntd = () => (
  <Footer className='bg-white p-6 tablet:pt-16 tablet:px-6'>
    {/* TODO: Responsive dropdown */}
    <div className='flex flex-wrap'>
      {
        categories.map((col) => (
          <div key={col.key} className='w-full tablet:w-1/3 laptop:w-1/5'>
            <h6 className='text-base font-semibold pb-5'>
              {col.label}
            </h6>
            {
              col.children.map((child) => (
                <p key={child.key} className='text-gray-9 text-base font-medium cursor-pointer hover:underline'>
                  {child.label}
                </p>
              ))
            }
          </div>
        ))
      }
    </div>
    <Divider className='h-[2px] bg-gray-3 my-8'/>
    {/* Bottom */}
    <div className='flex-between flex-col laptop:flex-row items-center tablet:items-start laptop:items-center'>
      <div className='flex flex-col tablet:flex-row items-center mb-5 laptop:mb-0'>
        <Image className='mb-5 tablet:mb-0 mr-7' alt={bottom.brand.logo.alt} src={bottom.brand.logo.src} width={91} height={27} quality={100}/>
        <p className='mb-0 text-sm font-medium text-gray-7'>
            &copy; {bottom.brand.copyright} {(new Date()).getFullYear()}
        </p>
      </div>
      <div className='flex flex-col tablet:flex-row items-center'>
        <div className='flex mb-3 tablet:mb-0'>
          {
            bottom.socials.map((item) => (
              <span className='size-10 center rounded-full text-2xl mr-2 hover:bg-gray-3 text-gray-9' key={item.key}>
                {Icons[item.icon]}
              </span>
            ))
          }
        </div>
        <div className='flex items-center'>
          {
            bottom.others.map((item) => (
              item.label
                ? <span key={item.key} className='flex items-center p-2 hover:bg-gray-2 hover:text-gray-11 text-gray-9 mr-2 rounded-2xl'>
                  <span className='size-3 mr-1'>
                    {Icons[item.icon]}
                  </span>
                  <span className='text-sm font-medium'>
                    {item.label}
                  </span>
                </span>
                : <span key={item.key} className='size-8 center rounded-full text-xl border border-gray-11 hover:border-transparent hover:bg-gray-2 hover:text-gray-11 text-gray-9'>
                  {Icons[item.icon]}
                </span>
            ))
          }
        </div>
      </div>
    </div>
  </Footer>
);

export default FooterAntd;
