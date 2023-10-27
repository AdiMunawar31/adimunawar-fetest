import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncDeleteContact } from "../../states/deleteContact/action";
import Swal from "sweetalert2";
import { Contact } from "../../types/ContactTypes";

const ContactList: React.FC<Contact> = ({
  id,
  firstName,
  lastName,
  age,
  photo,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleChat = () => {
    navigate(`/chat/${id}`);
  };

  const handleDelete = async () => {
    const confirmationResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this contact!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#edfdff",
    });

    if (confirmationResult.isConfirmed) {
      dispatch(asyncDeleteContact(id));
      setIsPopupVisible(false);
      navigate("/dashboard");

      Swal.fire({
        title: "Deleted!",
        text: "Your Contact has been deleted.",
        icon: "success",
        background: "#edfdff",
      }).then(() => {});
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
    setIsPopupVisible(false);
  };

  return (
    <li className='border-b cursor-pointer contact-item' key={`${id}-contact`}>
      <div className='flex items-center justify-between w-full px-4 py-0.5 select-none hover:bg-gray-100 focus:outline-none relative'>
        <div className='flex pr-20' onClick={handleChat}>
          <img
            className='w-12 mr-3 h-12 border-cyan-500 rounded-full border-2 p-0.5'
            src={
              photo !== "N/A"
                ? photo
                : `https://ui-avatars.com/api/?name=${firstName} ${lastName}/`
            }
            alt='Photo profile'
          />
          <div className='block'>
            <h3 className='font-semibold capitalize -mb-1 truncate w-40'>
              {firstName} {lastName}
            </h3>
            <span className='text-xs text-gray-500'>Age: {age}</span>
          </div>
        </div>
        <button
          onClick={togglePopup}
          className='p-2 top-1/2 transform mt-8 -translate-y-1/2'
        >
          {isPopupVisible ? (
            <AiFillCloseCircle className='text-red-400' size={20} />
          ) : (
            <BsThreeDotsVertical />
          )}
        </button>

        {isPopupVisible && (
          <div className='absolute right-12 top-1/2 px-2 py-1 transform -translate-y-1/2 w-32 bg-white border rounded-lg shadow-lg'>
            <button
              onClick={handleEdit}
              className='block w-full text-left py-1 px-6 hover:bg-gray-100 focus:outline-none'
            >
              Edit
            </button>
            <button
              className='block w-full text-left py-1 px-6 hover-bg-gray-100 focus:outline-none'
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ContactList;
