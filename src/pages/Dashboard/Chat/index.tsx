import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { asyncReceiveContactDetail } from "../../../states/getDetailContact/action";
import { Contact } from "../../../types/ContactTypes";

const Chat = () => {
  const { contactId } = useParams();

  const contactDetail: Contact = useSelector(
    (state: any) => state.contactDetail
  );

  const { firstName, lastName, photo, age } = contactDetail;

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveContactDetail(contactId));
  }, [contactId, dispatch]);

  return (
    <Sidebar>
      <div className='flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen'>
        <div className='flex sm:items-center justify-between py-3 border-b-2 border-gray-200'>
          <div className='relative flex items-center space-x-4'>
            <div className='relative'>
              <span className='absolute text-green-400 right-0 bottom-0'>
                <svg width={20} height={20}>
                  <circle cx={8} cy={8} r={8} fill='currentColor' />
                </svg>
              </span>
              <img
                src={
                  photo != "N/A"
                    ? photo
                    : `https://ui-avatars.com/api/?name=${firstName} ${lastName}/`
                }
                alt='photo profile'
                className='w-10 sm:w-16 h-10 sm:h-16 rounded-full'
              />
            </div>
            <div className='-mt-2'>
              <span className='text-lg mt-1 text-gray-700 font-semibold'>
                {firstName} {lastName}
              </span>
              <span className='text-sm text-gray-600 ml-2'>
                {"( Software Dev )"}
              </span>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
            </button>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='messages'
          className='flex flex-col h-full justify-start  mt-4 text-start space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'
        >
          <div className='chat-message'>
            <div className='flex items-end'>
              <div className='flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start'>
                <div>
                  <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'>
                    <p>
                      Hello, I'm{" "}
                      <b>
                        {firstName} {lastName}
                      </b>
                    </p>
                    <p>
                      I'm <b>{age}</b> years old
                    </p>
                    <p>
                      I work as a <b>Software Dev</b>
                    </p>
                  </span>
                </div>
              </div>
              <img
                src={
                  photo != "N/A"
                    ? photo
                    : `https://ui-avatars.com/api/?name=${firstName} ${lastName}/`
                }
                alt='photo profile'
                className='w-6 h-6 rounded-full order-1'
              />
            </div>
          </div>
          <div className='chat-message'>
            <div className='flex items-end justify-end'>
              <div className='flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end'>
                <div>
                  <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-cyan-500 text-white '>
                    Welcome to {firstName} {lastName}! 🎉 We're delighted that
                    you've joined our community. Feel free to explore our
                    fantastic features and start connecting with new friends. If
                    you have any questions, don't hesitate to ask. Enjoy your
                    time!
                  </span>
                </div>
              </div>
              <img
                src='/contact.png'
                alt='My profile'
                className='w-6 h-6 rounded-full order-2'
              />
            </div>
          </div>
        </div>
        <div className='border-t-2 pb-3 border-gray-200 px-4 pt-4 mb-2 sm:mb-0'>
          <div className='relative flex'>
            <span className='absolute inset-y-0 flex items-center'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='h-6 w-6 text-gray-600'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
                  />
                </svg>
              </button>
            </span>
            <input
              type='text'
              placeholder='Write your message!'
              className='w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3'
            />
            <div className='absolute right-0 items-center inset-y-0 hidden sm:flex'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='h-6 w-6 text-gray-600'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                  />
                </svg>
              </button>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='h-6 w-6 text-gray-600'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='h-6 w-6 text-gray-600'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </button>
              <button
                aria-label='Send'
                type='button'
                className='inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-900 hover:bg-blue-700 focus:outline-none'
              >
                <span className='font-bold'>Send</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-6 w-6 ml-2 transform rotate-90'
                >
                  <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Chat;
