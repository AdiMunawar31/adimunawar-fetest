const FeatureIcons = () => {
  return (
    <div className='grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start'>
      <a
        aria-label='add to slack'
        href='#'
        className='p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30'
      >
        <div className='flex justify-center space-x-4'>
          <img
            className='w-6 h-6'
            src='https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png'
            alt='slack logo'
            loading='lazy'
            width={128}
            height={128}
          />
          <span className='hidden font-medium md:block dark:text-white'>
            Slack
          </span>
        </div>
      </a>
      <a
        aria-label='add to chat'
        href='#'
        className='p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30'
      >
        <div className='flex justify-center space-x-4'>
          <img
            className='w-6 h-6'
            src='https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png'
            alt='chat logo'
            loading='lazy'
            width={128}
            height={128}
          />
          <span className='hidden font-medium md:block dark:text-white'>
            Google Chat
          </span>
        </div>
      </a>
      <a
        aria-label='add to zoom'
        href='#'
        className='p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30'
      >
        <div className='flex justify-center space-x-4'>
          <img
            className='w-6 h-6'
            src='https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png'
            alt='chat logo'
            loading='lazy'
            width={128}
            height={128}
          />
          <span className='hidden font-medium md:block dark:text-white'>
            Zoom
          </span>
        </div>
      </a>
    </div>
  );
};

export default FeatureIcons;
