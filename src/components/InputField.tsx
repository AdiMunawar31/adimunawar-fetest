import React from "react";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../types/InputFieldProps";

const InputField: React.FC<InputFieldProps> = ({
  label,
  control,
  placeholder,
  type,
  name,
  errors,
  register,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      render={({ field }) => (
        <div className='mb-3'>
          <label
            htmlFor={name}
            className='block mb-2 text-sm text-gray-600 text-start'
          >
            {label} :
          </label>
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            {...register(name)}
            className={`w-full p-3 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400 ${
              errors[name] ? "border-red-500" : ""
            }`}
          />
          {errors[name] && (
            <p className='text-sm text-left p-1 text-red-500'>
              {errors[name].message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default InputField;
