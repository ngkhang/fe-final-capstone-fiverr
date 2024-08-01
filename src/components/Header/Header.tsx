import Image from 'next/image';
import Icons from '@/utils/icons';
import { HeaderContent } from '@/utils/staticContent';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Input } from '../ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import React from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem
} from '@radix-ui/react-accordion';
import { AccordionTrigger } from '../ui/accordion';

import './Header.css';

const { main, categoriesMenu, sideNav } = HeaderContent;
const { logo, nav } = main;

const HeaderAntd = () => (
  <div id="header" className="header">
    <div className="main-container border-b border-gray-4">
      <div className="pb-6 py-4">
        {/* Main Header */}
        <div className="flex items-center justify-between tablet:justify-start">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={null}
                className="p-0 m-0 tablet:mr-2 laptop-l:hidden border-0 text-4xl text-gray-9"
              >
                {Icons.Menu}
              </Button>
            </DialogTrigger>
            <DialogContent className="dialog-custom w-2/3 tablet:w-2/5 laptop-l:hidden top-0 left-0 translate-x-0 translate-y-0 !rounded-none px-4 py-0">
              <div className="flex flex-col py-6">
                <Button className="w-1/2 rounded-md px-7 py-6 mb-8 text-lg text-white bg-black font-semibold">
                  Join fiverr
                </Button>
                <Accordion type="multiple">
                  {sideNav.map(({ key, label, children }) => (
                    <AccordionItem
                      key={key}
                      value={`item-${key}`}
                      className="w-full"
                    >
                      <AccordionTrigger className={cn(
                        'hover:no-underline hover:bg-gray-3 px-2 py-3 rounded-md',
                        !children && '[&[data-state]>svg]:hidden'
                      )}
                      >
                        <p className="flex-1 text-start text-base font-normal text-gray-10">
                          {label}
                        </p>
                      </AccordionTrigger>
                      {children && (
                        <AccordionContent className="content pl-4">
                          {children.map((child) => (
                            <p
                              key={child.key}
                              className="text-gray-9 text-base font-normal cursor-pointer hover:bg-gray-3 px-2 py-3 rounded-md"
                            >
                              {child.label}
                            </p>
                          ))}
                        </AccordionContent>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </DialogContent>
          </Dialog>

          <div className="tablet:mr-5 min-w-[100px]">
            <Image
              src={logo.src}
              className="w-full"
              width={89}
              height={27}
              alt={logo.alt}
            />
          </div>

          <div className="hidden tablet:flex items-stretch flex-grow tablet:mr-8 h-11 rounded-md border-0">
            <Input
              type="email"
              placeholder="Find services"
              className="flex-grow pr-1 h-full text-base border rounded rounded-e-none text-gray-12 outline-2 focus-visible:ring-0 focus-visible:border-gray-12"
            />
            <Button
              type="button"
              className="m-0 rounded-none h-full rounded-e-md bg-gray-12"
            >
              {Icons.Search}
            </Button>
          </div>

          <div className="flex">
            <div className="hidden laptop:block">
              {/*
                FIXME:
                  - Handle show menu when clicked
                  - Positon show
                  - Handle input placeholder short-long
              */}
              <NavigationMenu>
                <NavigationMenuList>
                  {nav.map((nav) => (
                    <NavigationMenuItem key={nav.key}>
                      {nav.children ? (
                        <>
                          <NavigationMenuTrigger className="mr-6 font-semibold text-base">
                            {nav.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="flex flex-col w-[400px]">
                              {nav.children.map((child) => (
                                <li
                                  key={child.key}
                                  className={cn(
                                    child.image
                                      ? 'm-4 last:mt-0'
                                      : 'first:mt-2 last:mb-2'
                                  )}
                                >
                                  <NavigationMenuLink asChild>
                                    <div
                                      className={cn(
                                        'select-none space-y-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground p-3',
                                        child.image
                                          ? 'border rounded-md flex items-center'
                                          : ''
                                      )}
                                    >
                                      {child.image && (
                                        <Image
                                          src={child.image}
                                          alt={child.label}
                                          width={48}
                                          height={48}
                                          className="mr-3"
                                        />
                                      )}
                                      <div className="flex-grow">
                                        <p className="text-base font-semibold">
                                          {child.label}
                                        </p>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                          {child.caption}
                                        </p>
                                      </div>
                                    </div>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Button
                          variant={null}
                          className="p-0 m-0 font-semibold text-base hover:text-green-7 flex mr-6"
                        >
                          {Icons[nav.icon]}
                          {nav.label}
                        </Button>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Button
              variant={null}
              className="p-0 m-0 font-semibold text-base hover:text-green-7 mr-6 hidden tablet:block"
            >
              Sign in
            </Button>
            <Button
              variant={null}
              className="p-0 m-0 font-semibold text-base hover:text-green-7 hover:bg-inherit tablet:px-4 tablet:border tablet:text-green-7 tablet:border-green-7 tablet:hover:bg-green-7 tablet:hover:text-white tablet:py-2"
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Sub Header */}
    <div className="main-container border-b border-gray-4">
      <div className="py-0">
        <div className="w-full">
          <Carousel className="items-start">
            <CarouselContent className="-ml-[10px]">
              {categoriesMenu.map(({ key, label }) => (
                <CarouselItem key={key} className="max-w-fit">
                  <span className="inline-block text-base py-2 text-gray-9 font-semibold relative hover:after:absolute after:content-[''] after:bottom-0 after:left-0 after:h-[3px] after:bg-green-7 after:w-full">
                    {label}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant={null}
              className="-left-5 rounded-none mx-2 bg-white/70"
            />
            <CarouselNext
              variant={null}
              className="-right-5 rounded-none mx-2 bg-white/70"
            />
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderAntd;
