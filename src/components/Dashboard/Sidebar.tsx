import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { asyncPopulateContacts } from "../../states/getContact/action";
import ContactList from "./ContactList";
import { SidebarProps } from "../../types/SidebarProps";
import logoImage from "/contact.png";
import { Contact } from "../../types/ContactTypes";
import { ContactState } from "../../types/ContactState";

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const dispatch: any = useDispatch();
  const contacts = useSelector((state: ContactState) => state.contacts || []);

  useEffect(() => {
    dispatch(asyncPopulateContacts());
  }, [dispatch]);

  return (
    <div className='bg-gradient-to-br from-cyan-300 via-cyan-100 to-blue-900 w-screen h-screen sm:p-5'>
      <div className='bg-white border border-gray-200 rounded flex h-full'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
          <div className='border-b border-gray-200 p-3 relative flex justify-between'>
            <button className='flex items-start select-none font-semibold focus:outline-none'>
              <Link to='/dashboard' className='flex'>
                <img src={logoImage} alt='logo' width={40} />
                <span className='text-lg text-cyan-400 font-bold ml-2 mt-2'>
                  DiContact
                </span>
              </Link>
            </button>
            <Link
              to='/'
              className='bg-red-200 p-2 flex items-center rounded-md'
              title='Shutdown'
            >
              <RiShutDownLine className='text-red-500 text-xl font-bold' />
            </Link>
          </div>

          <div className='flex items-center justify-between text-sm border-b border-gray-200'>
            <div>
              <button className='py-3 w-20 uppercase font-semibold select-none h-full focus:outline-none border-b border-black'>
                Primary
              </button>
              <button className='py-3 w-20 uppercase text-gray-400 select-none h-full focus:outline-none border-b border-transparent'>
                General
              </button>
            </div>
            <button className='p-3 font-semibold text-blue-500 select-none h-full focus:outline-none border-b border-transparent'>
              {contacts.length} Contacts
            </button>
          </div>

          <ul className='py-1'>
            {contacts
              .slice()
              .reverse()
              .map((contact: Contact) => (
                <ContactList key={contact.id} {...contact} />
              ))}
          </ul>
        </div>

        <div className='hidden sm:w-1/2 md:w-2/3 lg:w-3/4 border-l border-gray-200 sm:flex items-center justify-center text-center overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
