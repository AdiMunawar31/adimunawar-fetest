import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-6 py-12 mt-20'>
        <div className='md:-mx-3 md:flex md:items-center md:justify-between'>
          <h1 className='text-3xl font-semibold tracking-tight text-gray-800 dark:text-white md:mx-3 xl:text-4xl'>
            Subscribe our newsletter to get update.
          </h1>
          <div className='mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto'>
            <a
              href='/subsribe-dicontact'
              className='inline-flex w-full items-center justify-center rounded-lg bg-blue-900 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80'
            >
              <span className='mx-2'>Subscribe Now</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='mx-2 h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </a>
          </div>
        </div>

        <hr className='my-6 border-gray-200 dark:border-gray-700 md:my-10' />
        <div className='flex flex-col items-center justify-between sm:flex-row'>
          <Link
            to='/'
            className='text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'
          >
            <div className='flex'>
              <img src='/contact.png' alt='logo' width={40} />
              <span
                className='text-lg text-cyan-400 font-bold ml-2 mt-2'
                id='DiContact'
              >
                DiContact
              </span>
            </div>
          </Link>
          <p className='mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0'>
            © Copyright 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
