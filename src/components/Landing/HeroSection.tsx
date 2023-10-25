import React from "react";
import FeatureIcons from "./FeatureIcons";
import PartnerLogos from "./PartnerLogos";

const HeroSection = () => {
  return (
    <div className='bg-white relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900'>
      <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
        <h1 className='sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white'>
          Connecting Lives, <br className='lg:block hidden' />{" "}
          <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>
            One Contact at a Time.
          </span>
          .
        </h1>
        <div className='lg:flex'>
          <div className='relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
            <p className='sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12'>
              Our innovative app redefines the way you connect with your
              contacts, transforming it into a delightful breeze. Say hello to a
              world where communication flows effortlessly, and organization
              becomes a second nature. With our intuitive and powerful tools,
              you'll experience a new level of ease in managing and maintaining
              your relationships
            </p>
            <span className='block font-semibold text-gray-500 dark:text-gray-400'>
              The best companion bot for your chat app.
            </span>
            <FeatureIcons />
            <PartnerLogos />
          </div>
          <div className='mt-12 md:-mt-12 lg:absolute -right-5 lg:w-6/12'>
            <div className='relative w-full'>
              <div
                aria-hidden='true'
                className='absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl'
              />
              <img
                src='https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg'
                className='relative w-full'
                alt='wath illustration'
                loading='lazy'
                width={220}
                height={180}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
