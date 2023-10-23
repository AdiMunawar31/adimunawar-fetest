import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdContacts } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import Sidebar from "../../../components/Dashboard/Sidebar";
import InputField from "../../../components/InputField";
import { asyncEditContact } from "../../../states/editContact/action";
import { asyncReceiveContactDetail } from "../../../states/getDetailContact/action";
import Swal from "sweetalert2";

interface FormValues {
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be positive"),
  photo: Yup.string()
    .url("Enter a valid URL")
    .required("Photo URL is required"),
});

const EditContact: React.FC = () => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const dispatch: any = useDispatch();
  const { contactId } = useParams();
  const navigate = useNavigate();

  const state: any = useSelector((states) => states);
  const { id, firstName, lastName, photo, age } = state.contactDetail;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const trimmedData = {
      ...data,
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      photo: data.photo.trim(),
    };

    dispatch(asyncEditContact(trimmedData, id));
    Swal.fire({
      title: "Updated!",
      text: "Your Contact has been updated.",
      icon: "success",
      background: "#edfdff",
    }).then(() => {
      navigate("/dashboard");
    });
  };

  useEffect(() => {
    dispatch(asyncReceiveContactDetail(contactId));
    setValue("firstName", firstName);
    setValue("lastName", lastName);
    setValue("age", age);
    setValue("photo", photo);
  }, [age, contactId, dispatch, firstName, lastName, photo, setValue]);

  useEffect(() => {
    setIsSubmitDisabled(!isDirty);
  }, [isDirty]);

  return (
    <Sidebar>
      <div className='container mx-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
        <div className='w-full bg-white p-5 rounded-md'>
          <div className='flex mt-8 text-lg mx-6 text-start p-5 bg-blue-50 font-semibold text-cyan-500'>
            <MdContacts className='mt-1 mr-3' />
            <span>Edit Contact Data Form</span>
          </div>
          <div className='m-7'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                control={control}
                label='First Name'
                name='firstName'
                type='text'
                placeholder='e.g John'
                register={register}
                errors={errors}
              />
              <InputField
                control={control}
                label='Last Name'
                name='lastName'
                type='text'
                placeholder='e.g Doe'
                register={register}
                errors={errors}
              />
              <InputField
                control={control}
                label='Age'
                name='age'
                type='number'
                placeholder='e.g 31'
                register={register}
                errors={errors}
              />
              <InputField
                control={control}
                label='Photo'
                name='photo'
                type='text'
                placeholder='e.g https://example-photos.png'
                register={register}
                errors={errors}
              />
              <div className='w-4/12 gap-2 my-8 flex'>
                <button
                  type='submit'
                  disabled={isSubmitDisabled}
                  className={`w-full py-2 px-3 text-white rounded-md focus:bg-blue-600 focus:outline-none ${
                    isSubmitDisabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-900 hover:bg-blue-600"
                  }`}
                >
                  Edit Contact
                </button>
                <Link
                  to='/dashboard'
                  className={`w-full py-2 px-3 text-white rounded-md focus:bg-red-600 focus:outline-none bg-red-500 hover:bg-red-400`}
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default EditContact;
