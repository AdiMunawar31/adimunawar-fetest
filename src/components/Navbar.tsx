import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarPopup, setIsNavbarPopup] = useState(false);

  return (
    <header>
      <nav className='fixed z-20 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none'>
        <div className='xl:container m-auto px-6 md:px-12 lg:px-6'>
          <div className='flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5'>
            <div className='w-full items-center flex justify-between lg:w-auto'>
              <Link to='/' aria-label='logo'>
                <div className='flex'>
                  <img src='/contact.png' alt='logo' width={40} />
                  <span className='text-lg text-cyan-400 font-bold ml-2 mt-2'>
                    DiContact
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsNavbarPopup(!isNavbarPopup)}
                className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer sm:hidden'
              >
                <div
                  aria-hidden='true'
                  className='m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300'
                />
                <div
                  aria-hidden='true'
                  className='m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300'
                />
              </button>
            </div>
            <div
              className={`navmenu ${
                isNavbarPopup ? "block" : "hidden"
              } w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white sm:space-y-0 sm:p-0 sm:m-0 sm:flex sm:flex-nowrap sm:bg-transparent sm:w-10/12 sm:shadow-none sm:border-0`}
            >
              <div className='text-gray-600 sm:pr-4'>
                <ul className='space-y-6 tracking-wide font-medium text-base sm:text-sm sm:flex sm:space-y-0'>
                  <li>
                    <Link
                      to='/'
                      className='block md:px-4 transition hover:text-primary'
                    >
                      <span aria-label='Home'>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='block md:px-4 transition hover:text-primary'
                    >
                      <span aria-label='About'>About</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='w-full space-y-2 border-primary/10 flex flex-col ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l'>
                <Link
                  to='/dashboard'
                  className='relative flex h-9 -ml-2 sm:ml-8 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-blue-900 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95'
                  aria-label='Dashboard'
                >
                  <span
                    className='relative text-sm font-semibold text-white dark:text-gray-900'
                    aria-label='Dashboard'
                  >
                    Dashboard
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
