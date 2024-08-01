import Image from 'next/image';
import { FooterContent } from '@/utils/staticContent';
import Icons from '@/utils/icons';
import Divider from './Divider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const { categories, bottom } = FooterContent;

const Footer = () => {
  {
    /* TODO: Handle collapse when mobile screen */
  }
  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  // useEffect(() => {
  //   const handleResize = () => setIsSmallScreen(window.innerWidth < 600);
  //   window.addEventListener('resize', handleResize);
  //   return;
  // }, []);

  // const options = {
  //   type: isSmallScreen ? 'single' : 'multiple',
  //   disabled: !isSmallScreen,
  //   defaultValue: [...categories.map((item) => `item-${item.key}`)],
  //   collapsible: true,
  // };

  // const views = {
  //   small: {
  //     type: 'single',
  //     collapsible: true,
  //   },
  //   default: {
  //     type: 'multiple',
  //     disabled: true,
  //     defaultValue: [...categories.map((item) => `item-${item.key}`)],
  //   },
  // };

  return (
    <div className="footer main-container border-t-2 border-gray-3">
      <div className="pb-6">
        <Accordion
          className="flex flex-wrap"
          type="multiple"
          defaultValue={[...categories.map((item) => `item-${item.key}`)]}
          disabled
        >
          {categories.map(({ key, label, children }) => (
            <AccordionItem
              key={key}
              className="accordion-item border-none w-full tablet:w-1/3 laptop:w-1/5 tablet:px-2"
              value={`item-${key}`}
            >
              <AccordionTrigger
                className={cn(
                  'hover:no-underline p-0 pb-5',
                  'tablet:[&[data-state]>svg]:hidden'
                )}
              >
                <h5 className="flex-1 text-start text-base font-bold text-gray-11">
                  {label}
                </h5>
              </AccordionTrigger>
              <AccordionContent>
                {children.map((child) => (
                  <p
                    key={child.key}
                    className="text-gray-9 text-base font-normal cursor-pointer hover:underline pb-4"
                  >
                    {child.label}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Divider className="h-[2px] bg-gray-3 mb-8" />

        <div className="flex flex-col laptop:flex-row items-center tablet:items-start laptop:items-center laptop:justify-between">
          <div className="flex flex-col tablet:flex-row items-center mb-5 laptop:mb-0">
            <Image
              className="mb-5 tablet:mb-0 mr-6"
              alt={bottom.brand.logo.alt}
              src={bottom.brand.logo.src}
              width={91}
              height={27}
              quality={100}
            />
            <p className="mb-0 text-sm font-medium text-gray-7">
              &copy; {bottom.brand.copyright} {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex flex-col tablet:flex-row items-center">
            <div className="flex items-center mb-3 tablet:mb-0">
              {bottom.socials.map((item) => (
                <span
                  className="center justify-evenly p-2 laptop:mr-3 rounded-full text-2xl hover:bg-gray-3 text-gray-9"
                  key={item.key}
                >
                  {Icons[item.icon]}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-evenly">
              {bottom.others.map((item) =>
                item.label ? (
                  <span
                    key={item.key}
                    className="flex items-center px-4 py-1 rounded-2xl hover:bg-gray-2 hover:text-gray-11 text-gray-9 font-semibold"
                  >
                    <span className="mr-1 text-xl">{Icons[item.icon]}</span>
                    <span className="text-sm">{item.label}</span>
                  </span>
                ) : (
                  <span
                    key={item.key}
                    className="rounded-full text-xl p-1 ml-2 border border-gray-11 hover:border-transparent hover:bg-gray-2 hover:text-gray-11 text-gray-9"
                  >
                    {Icons[item.icon]}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
