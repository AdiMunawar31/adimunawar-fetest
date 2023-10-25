import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className='bg-white dark:bg-gray-900 mt-8'>
        <div className='container mx-auto px-6 py-10'>
          <h1 className='text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl'>
            What clients saying
          </h1>
          <div className='mx-auto mt-6 flex justify-center'>
            <span className='inline-block h-1 w-40 rounded-full bg-cyan-500'>
              <span className='mx-1 inline-block h-1 w-3 rounded-full bg-cyan-500'>
                <span className='inline-block h-1 w-1 rounded-full bg-cyan-500'></span>
              </span>
            </span>
          </div>
          <div className='mx-auto mt-16 flex max-w-6xl items-start'>
            <button className='hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='{2}'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <div>
              <p className='flex items-center text-center text-gray-500 lg:mx-8'>
                Using DiContact management app has been nothing short of a
                game-changer. As a professional constantly on the move, staying
                in touch with my network used to be a daunting task. However,
                this app has transformed my approach to communication and
                organization.
              </p>
              <div className='mt-8 flex flex-col items-center justify-center'>
                <img
                  className='h-14 w-14 rounded-full object-cover'
                  src='https://media.licdn.com/dms/image/D5603AQEe6hXLkIugFQ/profile-displayphoto-shrink_100_100/0/1697479650298?e=1703116800&v=beta&t=91K60lvzDIufZSO5RQHdT8RW6AKya1goGMQ80_-Lh7M'
                  alt=''
                />
                <div className='mt-4 text-center'>
                  <h1 className='font-semibold text-gray-800 dark:text-white'>
                    Adi Munawar
                  </h1>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    Software Dev
                  </span>
                </div>
              </div>
            </div>
            <button className='hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='{2}'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
