import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Icons from '@/utils/icons';
import { HomePageContent } from '@/utils/staticContent';

const { hero, subCategories, fingertips } = HomePageContent;

const Home = async () => (
  <div className="home-page">
    {/* Hero section */}
    <div className="hero-section main-container">
      <div className="p-0 laptop:px-8">
        {/* BUG: Pass param error: hero.image */}
        <div className="relative laptop:h-[370px] laptop-l:h-[430px] center bg-center bg-cover bg-no-repeat laptop:rounded-2xl p-8 bg-hero-pattern laptop:bg-[url('/assets/images/hero-home.png')]">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full laptop:w-1/2 flex h-full flex-col items-center justify-between mb-8">
              <h2 className="mb-10 max-w-[320px] laptop:max-w-fit text-center text-white text-4xl laptop:text-5xl laptop-l:text-6xl">
                {hero.title.split('freelance')[0]}
                <span className="text-green-8">freelance</span>
                {hero.title.split('freelance')[1]}
              </h2>
              <div className="w-full relative p-2 bg-white rounded-lg">
                <Input
                  placeholder="Search for any service..."
                  className="pr-12 border-0 focus-visible:outline-0 focus-visible:ring-0"
                />
                <Button className="absolute right-0 mr-2 top-1/2 translate-y-[-50%] text-white bg-[#003912] hover:bg-green-8 rounded-lg text-2xl p-2">
                  {Icons.Search}
                </Button>
              </div>
            </div>
            <div className="hidden laptop:flex items-center justify-center opacity-50 font-semibold text-white">
              <span className="mr-4">Trusted by:</span>
              <div className="flex items-center">
                {hero.trusted.map((item) => (
                  <Image
                    key={item.key}
                    src={item.image}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className="w-[60px] ml-4"
                    quality={100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Sub Categories section */}
    <div className="sub-categories main-container">
      <div className="pb-10">
        <div className="flex flex-wrap laptop:flex-nowrap overflow-x-auto items-stretch">
          {subCategories.map((cate) => (
            <div
              key={cate.key}
              className="w-1/3 tablet:w-1/4 laptop:flex-grow p-3 tablet:p-6 laptop:p-3"
            >
              <div className="bg-white h-full flex flex-col items-center laptop:items-start laptop:rounded-lg laptop:shadow-md laptop:p-4">
                <div className="size-24 tablet:size-18 laptop:size-8 center rounded-lg laptop:rounded-none shadow-md laptop:shadow-none shadow-gray-7 mb-2">
                  <Image
                    src={cate.image}
                    alt={cate.label}
                    width={50}
                    height={50}
                    quality={100}
                  />
                </div>
                <div className="text-center laptop:text-start font-semibold">
                  <span>{cate.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Popular services section */}
    {/* <div className='services main-container'>
      <div className=''>
        <h3>{services.title}</h3>
        <div className="w-full">
          <Carousel>
            <CarouselContent>
              {
                services.children.map((item) => (
                  <CarouselItem key={item.key}>
                    <div className={`bg-[#${item.bgColor}]`}>
                      <p>{item.label}</p>
                    </div>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div> */}

    {/* Fingertips section */}
    <div className="fingertips main-container">
      <div>
        <h2 className="text-3xl tablet:text-5xl laptop:max-w-[720px] mb-10 text-gray-11">
          {fingertips.title}
        </h2>
        <div className="flex flex-wrap">
          {fingertips.children.map((item) => (
            <div
              key={item.key}
              className="w-full laptop:w-1/2 laptop-l:w-1/4 laptop:p mb-7 laptop:m-0 laptop:odd:pr-4 laptop:even:pl-4 laptop:py-5 laptop-l:px-4 laptop-l:first:pl-0 laptop-l:last:pr-0"
            >
              <Card className="border-none shadow-none h-full flex flex-col justify-between">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="flex items-center laptop:flex-col laptop:items-start">
                    <span>
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={40}
                        height={40}
                        quality={100}
                        className="size-7 laptop:size-10 mr-3 laptop:m-0"
                      />
                    </span>
                    <p className="laptop:my-3 text-lg laptop:text-2xl font-normal">
                      {item.label}
                    </p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Guides Help section */}

    {/* Welcome */}
    <div className="main-container">
      <div className="">
        <div className="bg-[#4d1727] rounded-lg center p-7 laptop:py-12 text-white">
          <div className="w-full tablet:w-4/5 laptop-l:w-full center flex-col">
            <h2 className="text-4xl tablet:text-5xl laptop-l:text-6xl text-center mb-7">
              Freelance services at your{' '}
              <span className="text-[#ff7640]">fingertips!</span>
            </h2>
            <Button
              type="button"
              className="bg-white text-black font-semibold laptop:text-lg"
            >
              Join Fiverr
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

