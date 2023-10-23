import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <input
        type='checkbox'
        name='hbr'
        id='hbr'
        className='hbr peer'
        hidden
        aria-hidden='true'
      />
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
              <label
                htmlFor='hbr'
                className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'
              >
                <div
                  aria-hidden='true'
                  className='m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300'
                />
                <div
                  aria-hidden='true'
                  className='m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300'
                />
              </label>
            </div>
            <div className='navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0'>
              <div className='text-gray-600 dark:text-gray-300 lg:pr-4'>
                <ul className='space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0'>
                  <li>
                    <Link
                      to='/'
                      className='block md:px-4 transition hover:text-primary'
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='block md:px-4 transition hover:text-primary'
                    >
                      <span>About</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='w-full space-y-2 border-primary/10 flex flex-col ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l'>
                <Link
                  to='/dashboard'
                  className='relative flex h-9 ml-8 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-blue-900 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95'
                >
                  <span className='relative text-sm font-semibold text-white dark:text-gray-900'>
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