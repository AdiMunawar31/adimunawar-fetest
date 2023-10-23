import { UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: any;
  control: any;
}
