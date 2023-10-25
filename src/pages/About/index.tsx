import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className='h-full flex justify-center items-center ml-4 sm:ml-20 mr-2'>
        <div className='container m-auto text-gray-600 px-6'>
          <div className='space-y-6 mt-20 sm:mt-40  md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
            <div className='md:5/12 lg:w-5/12'>
              <img
                src='https://tailus.io/sources/blocks/left-image/preview/images/startup.png'
                alt='image'
                loading='lazy'
              />
            </div>
            <div className='md:7/12 lg:w-6/12'>
              <h2 className='text-2xl text-gray-900 font-bold md:text-4xl -mt-8'>
                <span className='text-blue-900 mr-2'>Adi Munawar Frontend</span>
                <span className='text-cyan-500'>(DiContact)</span>
              </h2>
              <p className='mt-6 text-gray-600'>
                Using this contact management app has been nothing short of a
                game-changer. As a professional constantly on the move, staying
                in touch with my network used to be a daunting task. However,
                this app has transformed my approach to communication and
                organization. The automated scans for out-of-date information
                are an absolute lifesaver. I no longer need to worry about
                whether I have the most accurate contact details for my network.
                The peace of mind that comes with always having up-to-date
                information is priceless.
              </p>
              <p className='mt-6 text-gray-600'>
                Not only does this app simplify my life, but it also enhances my
                productivity. It's incredibly user-friendly and the intuitive
                interface allows me to effortlessly manage my contacts. No more
                fumbling through endless lists or spreadsheets. It's like having
                a personal assistant that keeps my digital Rolodex in perfect
                order.
              </p>
              <p className='mt-4 text-gray-600'>
                {" "}
                Furthermore, the app's seamless communication capabilities have
                strengthened my professional relationships. I can now connect
                with confidence, knowing that I have the most current
                information at my fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
