import React from "react";

const PartnerLogos = () => {
  return (
    <>
      <div className='text-gray-600 font-bold'>
        <span>Our Partnership :</span>
      </div>
      <div className='flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3'>
        <img
          src='https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg'
          className='h-8 sm:h-10 w-auto lg:h-12'
          alt='airbnb'
        />
        <img
          src='https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg'
          className='h-8 sm:h-10 w-auto lg:h-12'
          alt='ge'
        />
        <img
          src='https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg'
          className='h-8 sm:h-10 w-auto lg:h-12'
          alt='coty'
        />
        <img
          src='https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg'
          className='h-8 sm:h-10 w-auto lg:h-12'
          alt='microsoft'
        />
      </div>
    </>
  );
};

export default PartnerLogos;
